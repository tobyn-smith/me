#!/usr/bin/env python3
"""
Refresh the featured Substack posts in data.js from the live RSS feed.

Runs weekly from .github/workflows/sync-substack.yml so the site's Substack
section never falls behind what has actually been published.

Design notes:
  * Only the `posts:` array is rewritten. Everything else in data.js is left
    byte-for-byte alone, so a bug here can't damage other content.
  * data.js exists in two shapes: the hand-authored one (unquoted keys) and the
    one admin.html emits (JSON.stringify, quoted keys). The array is located by
    bracket matching rather than a brittle regex, and the replacement is written
    in whichever style the file already uses.
  * Nothing is written unless the parsed feed yields posts AND the result
    differs from what's on disk.
"""

import datetime
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET

SITE = "https://tobynsmith.substack.com"
FEED = SITE + "/feed"
API = SITE + "/api/v1/archive?sort=new&limit=%d"
DATA = "data.js"
MAX_POSTS = 3

# Substack fronts both endpoints with bot protection that rejects datacenter
# traffic sending a default urllib agent, so identify as a normal browser.
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "application/rss+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-GB,en;q=0.9",
}


def _get(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def _from_rss():
    channel = ET.fromstring(_get(FEED)).find("channel")
    if channel is None:
        raise RuntimeError("feed has no <channel>")
    posts = []
    for item in channel.findall("item")[:MAX_POSTS]:
        title = (item.findtext("title") or "").strip()
        link = (item.findtext("link") or "").strip()
        raw = (item.findtext("pubDate") or "").strip()
        if not title or not link:
            continue
        try:
            dt = datetime.datetime.strptime(raw[:25].strip(), "%a, %d %b %Y %H:%M:%S")
            date = dt.strftime("%B %Y")
        except ValueError:
            date = ""
        posts.append({"title": title, "date": date, "url": link})
    return posts


def _from_api():
    import json

    items = json.loads(_get(API % MAX_POSTS).decode("utf-8"))
    posts = []
    for p in items[:MAX_POSTS]:
        title = (p.get("title") or "").strip()
        link = (p.get("canonical_url") or "").strip()
        raw = (p.get("post_date") or "")[:10]
        if not title or not link:
            continue
        try:
            date = datetime.datetime.strptime(raw, "%Y-%m-%d").strftime("%B %Y")
        except ValueError:
            date = ""
        posts.append({"title": title, "date": date, "url": link})
    return posts


def fetch_posts():
    """Try the RSS feed, then the JSON archive API. Either alone is enough."""
    errors = []
    for name, fn in (("RSS feed", _from_rss), ("archive API", _from_api)):
        try:
            posts = fn()
            if posts:
                print("read %d post(s) from the %s" % (len(posts), name))
                return posts
            errors.append("%s returned nothing" % name)
        except Exception as e:
            errors.append("%s: %s" % (name, e))
    raise RuntimeError("; ".join(errors))


def find_array(src, key):
    """Return (start, end) span of the [...] following `key`, via bracket matching."""
    m = re.search(r'"?%s"?\s*:\s*\[' % re.escape(key), src)
    if not m:
        return None
    i = m.end() - 1  # at the '['
    depth = 0
    in_str = False
    quote = ""
    esc = False
    for j in range(i, len(src)):
        c = src[j]
        if in_str:
            if esc:
                esc = False
            elif c == "\\":
                esc = True
            elif c == quote:
                in_str = False
            continue
        if c in "\"'":
            in_str, quote = True, c
        elif c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return (i, j + 1)
    return None


def js_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def render(posts, quoted_keys):
    def k(name):
        return '"%s"' % name if quoted_keys else name

    if quoted_keys:  # match admin.html's JSON.stringify(…, null, 2) output
        rows = []
        for p in posts:
            rows.append(
                "      {\n"
                '        %s: %s,\n'
                '        %s: %s,\n'
                '        %s: %s\n'
                "      }" % (k("title"), js_str(p["title"]),
                             k("date"), js_str(p["date"]),
                             k("url"), js_str(p["url"]))
            )
        return "[\n" + ",\n".join(rows) + "\n    ]"

    rows = [
        "      { title: %s, date: %s, url: %s }"
        % (js_str(p["title"]), js_str(p["date"]), js_str(p["url"]))
        for p in posts
    ]
    return "[\n" + ",\n".join(rows) + "\n    ]"


def main():
    try:
        posts = fetch_posts()
    except Exception as e:  # network/feed problems must never break the build
        print("::warning::could not read the Substack feed: %s" % e)
        return 0
    if not posts:
        print("::warning::feed returned no usable posts; leaving data.js untouched")
        return 0

    src = open(DATA, encoding="utf-8").read()
    span = find_array(src, "posts")
    if not span:
        print("::error::could not locate the posts array in data.js")
        return 1

    quoted = '"posts"' in src
    updated = src[: span[0]] + render(posts, quoted) + src[span[1] :]

    # sanity check before writing: the rest of the file must still be intact
    for key in ("hero", "profile", "experience", "projects", "contact"):
        if key not in updated:
            print("::error::refusing to write, '%s' vanished from data.js" % key)
            return 1

    if updated == src:
        print("no change: featured posts already match the feed")
        return 0

    open(DATA, "w", encoding="utf-8", newline="").write(updated)
    print("updated data.js with %d post(s):" % len(posts))
    for p in posts:
        print("  - %s (%s)" % (p["title"][:70], p["date"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
