# Portfolio — tobyn-smith.github.io/me

Personal site for my work in energy security, supply-chain risk, and geospatial
analysis. **[Live site →](https://tobyn-smith.github.io/me/)**

Hand-built: no framework, no build step, no runtime dependencies. Everything is
static files served by GitHub Pages, which keeps it fast, portable, and simple
to maintain.

## How it's put together

Content lives in `data.js` as a single object and is rendered client-side by
`index.html`. Adding a role, a project or a post means editing data — never
markup — so the layout can't drift out of shape as the content grows.

**Interactive globe.** A canvas-rendered wireframe globe in the hero, drawn from
scratch (orthographic projection, great-circle arcs, back-face culling). The
nodes are the real places behind the work — Baltic LNG corridors, the US–Mexico
freight lane, the US grid index. Drag to spin, hover for detail, click a node to
fly it to the front and jump to that section. It pauses when scrolled offscreen
and falls back to a single static frame on mobile and under
`prefers-reduced-motion`.

**Browser-based editor** (`admin.html`). A form editor with live preview that
commits straight to this repo through the GitHub Contents API, so the site can
be updated from any device without a local checkout. The API token is never
stored in readable form: it's sealed with AES-GCM under a PBKDF2-derived key and
only decrypted into memory after a passcode is entered. Bypassing the UI yields
ciphertext, not a token.

**Automation.** A weekly GitHub Action reads the Substack RSS feed and refreshes
the featured posts, so the writing section stays current on its own.

Also here: light/dark theming that respects the system setting and persists the
choice without a flash of the wrong theme, a ⌘K command palette, self-hosted
fonts (no third-party requests), a Content-Security-Policy, JSON-LD, a `noscript`
fallback, and a print stylesheet. Accessibility work covers WCAG AA contrast in
both themes, keyboard operability, focus visibility, and reduced-motion paths.

## Layout

```
index.html      the site — markup, styles, and render logic
data.js         all content; the only file you need to touch
admin.html      browser-based editor and publisher
404.html        themed not-found page
fonts/          self-hosted woff2 subsets
.github/        weekly Substack sync
```

## Editing it

Open `admin.html`, make changes, and press **Publish** — it writes `data.js`
back to this repo and GitHub Pages redeploys in about a minute. Editing
`data.js` by hand and pushing works exactly as well.
