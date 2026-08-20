const poems = [
  {
    collection: "one", collectionLabel: "collection one", number: "i.", title: "heartfelt",
    body: [
      "your blinds drawn, i assume to show remorse\nit was a heartfelt attempt to close the front door\noh, my breath feels shallower than it was before\nI sense a shift of pace\na change in my fate",
      "helplessly starring, constantly stressing\nnow I'm driving around the bends\nsuddenly with my socks drenched\nand my knees feel clamped from unexplained weight\nmy head is getting heavier as everything feels so loud",
      "the car paint is tarnished with undisclosed secrets\nand the water is gushing\nmy chest feels compressed between my legs\nI sense a change of pace\na change in my fate"
    ]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "ii.", title: "out of date",
    body: ["my foot is cramped in your doorway\nmy head hanging below your doorframe\nthere so many shattered bottles in my socks\nand I'm so terrified of taking them off", "it feels like everyone is running late\nand all my food is out of date\nI'm searching around the town for your face\ni will try not to cry over my stupid shoelace"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "iii.", title: "wonderland",
    body: ["spending midnight between the forever trees\nas the moon is seeping through the leaves\nno one can perpetrate the helm of this shell again\nthe sound of the empty trains making the silence bend", "they are lurking in the wooded area\nthe autumnal men are coming without explaination\nto starve us of our apples\nit's easier said than done\nto protect this pristine wonderland"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "iv.", title: "you",
    body: ["maybe it is time\nto go back and hide\neasy to find, so hard to rewind\nin honour of your constitution\ni bought myself a new mind", "falling through the rooms where i hide\neverything happens for a reason\nand i think you tried to hurt me\nmy blood painted on that oak tree", "you spilt my guts into the ocean\nthere are so many pictures of it online\nand I'm just trying to find my old mind\nthis is your self-indulged fantasy\nwhen was the last great masterpiece?\nbut I'm just wondering how far to climb"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "v.", title: "candlelit drives",
    body: ["putting my swimsuit on one last time\nand holding my breath steadily\ncrystallised salt sitting on the doorstep\ntomorrow feels like a dream already", "candlelit car drives looking for hidden pathways\nbasking underneath the afternoon sun\nwater dripping on the backseat\ndetermined to find our happy place\ncollecting all these new happy memories\nat quarter to eight"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "vi.", title: "the after party",
    body: ["walking away from the party\nand everyone is following me\ncalling a name I don't recognise\ncandlelight marking my path", "running away now\nfrom where they can see me\ni wish i were in your room again\nyou helped me out of bed\nbut also the reason i stayed up late", "the worst thing you ever did\nwas not helping yourself\ni wish we had never met\nit would make so much more sense\nfor every breathe i take\na thought of you lingers in my step"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "vii.", title: "an odd christmas",
    body: ["get the stockings out of the crooked closet\nand sit around with some frothy hot chocolate\neveryones cheeks are rosy red from the winter air\ncurling up cosey amongst lukewarm lights", "we are getting ready again\nit feels like it has been years since this day\nit feels like we are missing a few people this time\nI guess they are elsewhere\nI will try not to fray", "singing the sounds\nof christmas once again\nand my lips begins to curl\nas I remember the beauty in these sorts of gatherings"]
  },
  {
    collection: "one", collectionLabel: "collection one", number: "viii.", title: "my old dog",
    body: ["white hairs on the tea cloth\nsmall paw prints on the tabletop\nthe happy sprints into the fresh air\nher floppy ears by the sea breeze", "trotting happily through the forest\noh, the nice smells of the wooded area\nshe didn't make it through to winter\nbut she will always mean everything to me"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "i.", title: "big blue sky",
    body: ["it has been well over a year now\nI've missed you a lot lately\nlost your memory way too early\nsaw you the week beforehand", "I held your hand and was so sad\nyour mind looked so clouded and dazzled\nyet still so tranquil\nI hope you are doing well up there", "it is defiantly emptier down here\nsometimes, I look up into the big blue sky\nand everything feels a little more fine"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "ii.", title: "apple trees",
    body: ["lasting tastes of the figs and walnuts\nsitting quietly in grandmas old pantry\nreading a gardening magazine\nthe gentle touch of the summer breeze", "drinking all types of herbal teas\nwhilst watching the big screen\nmaybe I am stuck between my dreams?\ntrying to find a better me"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "iii.", title: "seashore",
    body: ["shivering finger tips under the looming cliff\nthe rest of the world is so out of sight right now\nthe soft sand is making things a little more fine right now\njust talking to myself about my latest tragic find", "romanticising the seashore\nwith my blood in white sand\nthink I have been stuck here a little while now\nso many dotted lines shooting through the night sky", "candidly awaiting the tide to take me on a peaceful ride\nmeticulously awaiting, carefully positioned\nthere is a ringing in my head like a broken doorbell\neverything in my head feels funny again", "the tide is coming in and the sea is so beautifully glistening\nsalty water filling my nostrils, feeling oddly wishful\nlacking te credentials to run away\nthe sea water is touching my skin now\nas I lie here helplessly\nas the sea water crashes into me"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "iv.", title: "summertime rain on the southern train",
    body: ["we talked about a mansion\nnext to a vineyard\nand the fanciest of cars", "but the sun started to turn grey\nand you ran away in the rain\nso I sat on the southern train\nduring the peculiar summertime rain"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "v.", title: "chances",
    body: ["clenched jaw, attention whore\ncalm breeze, can't feel my feet\nfeeling bored, forever a chore\nfight or flight, I'll ponder tonight", "thoughts muddled, nowhere to shelter\non your road, we are going home\nsleepy sundays, post-punk Fridays\njust take a chance, just do a dance"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "vi.", title: "closed doors",
    body: ["i have a friend who likes al gore\nand they always do their given chores\neveryone is always so inherently bored\ni don't know where we are now", "i heard your laughs\nbehind the closed doors\nyou excite me, for you are so cool\nthis year already feels more prolonged than the last\nhow long will these things last", "treading on my unopened letters\nlying in a field of matchsticks\nconstant stimulation\na stipulation and a social cause\nmakes for a week long hangover\nat my very own expense\nfor i long for the attention you give"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "vii.", title: "an empty room",
    body: ["i recommend you stay away\nwhen I feel this sort of way\nwaste another day away\nand dream of an empty room", "oh, it is so secluded and far beyond here\nthe floorboards creak\nand the fireplace overheats\nI'm so scared of abandonment\nas childish as that sounds", "the paintings on the wall look so dreary\nbut I recognise those empty faces\nstuck in perpetual haste"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "viii.", title: "strangers in love",
    body: ["underneath the starry sky\ntwo strangers met one and other\ntheir mouths danced together\na blend of engima and diaster", "their hands clasped together like those\ncurious willow roots\nuntil they are washed away in the rain\nuncovering the naked roots\nfor they are so so cold and untouched"]
  },
  {
    collection: "two", collectionLabel: "collection two", number: "ix.", title: "dreamer",
    body: ["what will we dream of tonight\nthere are so many beauties in complexities\nand so many complexities in your beauty", "dreamt of a sea of tranquillity\ndidn't last long though\nperfection can be a tragedy", "ended turning my brain upside down\nbecause it was making too many loud sounds\nan attempt at being profound"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "i.", title: "between cities",
    body: ["frustration ebbs at the brain\nas i remember the last time I flooded my sink\nwhilst I was trying to have a think\ndistinct memories of a state of content", "how many moons ago was that?\nfeeling like I'm stuck between cities\nwhen was the last time my brain stopped overthinking\nI wish it would stop now", "a bit like when you break your knee\nand start limping through life\ntrying to retain your posture\nunder all that weight"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "ii.", title: "overconfidence",
    body: ["someone is watching me in the hallway\nand I don't know what to do\nI pictured myself running away\nbut that isn't what I do", "gently tiptoeing around the corners\ntrying to predict their next moves\nmy biggest failure in life\nis that I think I know what to do", "empty stairwells all around me\nswallowing me up\noverstimulated as a result of my overconfidence"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "iii.", title: "summer",
    body: ["guess it is an end of an era\nas the gas prices continue to rise\nforgotten feelings, invoking hostility\nlosing you got me in my blues", "I remember the abstract paintings on your ceilings\nI would be lying if I didn't dream of you\nI want to hear another sentence from you\nit's 23 degrees out and I'm still thinking of you"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "iv.", title: "bright lights",
    body: ["burning bright like some sort of candle light\ni promise i won't cry when the lights go out\nthe audience are making some odd sounds\nand it feels like they are getting louder man", "I like the idea of being liked\nbut it gives me the biggest fright\nI need to dream again\ntoby is lost in his brain again", "I promise I am sort of modest, I'm being honest\ndid I love the idea in hindsight\nor am I conflicted with my actual height\nI guess i'm feeling a bit better now", "but need to get myself a lighter\neverything happens for a reason\nand that is why the bright look alright tonight\nI need to dream again\ntoby is lost in his brain again"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "v.", title: "breeze",
    body: ["a warm breeze through the apple trees\nmy head is full of scary day dreams\nbut there are some kindred souls amongst the scattered debris", "hugging the lukewarm water\nwith all my clothes still on\nscreaming through my fake laughter\nI thought it would be impossible to miss", "but obviously this is the end of it\na warm breeze hitting the leaves\ntrying to scramble out with my feet\nthere are folk playing by the bench\nfor I can see their silhouette moving in unison"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "vi.", title: "home sick",
    body: ["staring down the long road\ndebating which way is home\njogging past my old home\nwaiting for the sky to drop\nand my toes to fall off", "of course we have to pay our homage to yesterday\nstipulating the last curtain call today\nimaging the sandy shores and paying off the last of the mortage\nlistening to the birds calling me home"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "vii.", title: "a morbid nightmare of mine",
    body: ["save me a seat when you are changing your sheets\npressing my head against the pillow case\nmy blood is on my phone case\nas you laugh at me", "I'm seeping through the white sheets\nseeing grey and nothing but dismay\nas I feel like I'm fading away\nI'm crying at the thought of you killing me"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "viii.", title: "bag claim",
    body: ["and i relate to your music taste\ndrinking bottles off your top shelf\namid explaining your odd definition of self-help\nscared of showing your true self", "endlessly waiting at the baggage claim\npacking my bags for the next lengthy trip\nswerving into my next failed relationship\nand the thought of that makes me sick"]
  },
  {
    collection: "three", collectionLabel: "collection three", number: "ix.", title: "overshare",
    body: ["oversharing on my favourite dating apps\nlike, when did I have my last great nap\nor who let the evil cat out of the hat", "bashing the hierarchy, aged five\nbreaking out in an episode of hives\nor is this another subsequent lie", "get some money and bash the trees\ndriving through my old favourite town\nlooking like some right silly clown"]
  }
];

const editorialOrder = {
  one: ["strangers in love", "candlelit drives", "summer", "heartfelt", "you", "the after party", "big blue sky", "an odd christmas", "my old dog"],
  two: ["wonderland", "apple trees", "breeze", "seashore", "summertime rain on the southern train", "home sick", "chances", "dreamer", "bag claim"],
  three: ["out of date", "closed doors", "an empty room", "between cities", "overconfidence", "bright lights", "overshare", "a morbid nightmare of mine"]
};

const poemMarks = {
  "heartfelt": "heart", "out of date": "door", "wonderland": "forest", "you": "mirror",
  "candlelit drives": "road", "the after party": "light", "an odd christmas": "ornament", "my old dog": "paw",
  "big blue sky": "sky", "apple trees": "branch", "seashore": "tide", "summertime rain on the southern train": "train",
  "chances": "split", "closed doors": "door", "an empty room": "room", "strangers in love": "roots", "dreamer": "dream",
  "between cities": "city", "overconfidence": "stair", "summer": "sun", "bright lights": "spotlight",
  "breeze": "breeze", "home sick": "road", "a morbid nightmare of mine": "nightmare", "bag claim": "bag", "overshare": "speech"
};

const romanNumerals = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii.", "ix."];
const collectionLabels = { one: "bruises and nostalgia", two: "wonderlust", three: "my silhouette" };
const editorialPosition = new Map();
Object.entries(editorialOrder).forEach(([collectionName, titles]) => {
  titles.forEach((title, index) => editorialPosition.set(title, { collection: collectionName, index }));
});

const poemList = document.querySelector("#poem-list");
const collection = document.body.dataset.collection;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteShell = document.querySelector(".site-shell");
const currentPage = location.pathname.split("/").pop() || "index.html";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll(".site-nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) link.setAttribute("aria-current", "page");
});

poems.forEach((poem) => {
  poem.title = poem.title.toLowerCase();
  poem.mark = poemMarks[poem.title];
  const position = editorialPosition.get(poem.title);
  if (position) {
    poem.collection = position.collection;
    poem.collectionLabel = collectionLabels[position.collection];
    poem.number = romanNumerals[position.index];
  }
  poem.body = poem.body.map((stanza) => stanza.toLowerCase());
});

const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.transform = `scaleX(${amount})`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

const revealItems = document.querySelectorAll(".reveal-on-scroll");
if (revealItems.length) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-revealed"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }
}

if (menuToggle && header) {
  const setMenuState = (open) => {
    header.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "close menu" : "menu");
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(!header.classList.contains("nav-open"));
  });
  header.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenuState(false);
      menuToggle.focus();
    }
  });
}

if (poemList && collection) {
  const collectionPoems = (editorialOrder[collection] || [])
    .map((title) => poems.find((poem) => poem.title === title))
    .filter(Boolean);
  poemList.innerHTML = collectionPoems.map((poem, collectionIndex) => {
    const index = poems.indexOf(poem);
    const stanzas = poem.body.map((stanza) => `<p>${stanza.replaceAll("\n", "<br />")}</p>`).join("");
    return `<details class="poem-entry" id="poem-${index}"${collectionIndex === 0 ? " open" : ""}>
      <summary class="poem-entry-heading" aria-label="${poem.number} ${poem.title}">
        <span class="poem-entry-number">${poem.number}</span>
        <span class="poem-entry-graphic mark-${poem.mark}" aria-hidden="true"></span>
        <h2>${poem.title}</h2>
      </summary>
      <div class="poem-entry-body">${stanzas}<button class="reading-mode-toggle" type="button" aria-label="enter reading mode"><span aria-hidden="true"></span></button></div>
    </details>`;
  }).join("");

  const openFromHash = () => {
    const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
    if (target && target.matches("details")) {
      poemList.querySelectorAll("details").forEach((entry) => {
        entry.open = entry === target;
      });
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  };

  poemList.querySelectorAll("details").forEach((entry) => {
    entry.addEventListener("toggle", () => {
      if (entry.open) history.replaceState(null, "", `#${entry.id}`);
    });
  });
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  const poemEntries = [...poemList.querySelectorAll(".poem-entry")];
  let readingMode = null;
  let lastReadingFocus = null;
  let readingIndex = -1;

  const readingMarkup = (poem, index) => {
    const stanzas = poem.body.map((stanza) => `<p>${stanza.replaceAll("\\n", "<br />")}</p>`).join("");
    const previous = collectionPoems[index - 1];
    const next = collectionPoems[index + 1];
    return `<div class="reading-mode-progress" aria-hidden="true"><span></span></div>
      <button class="reading-mode-close" type="button" aria-label="close reading mode"><span aria-hidden="true"></span></button>
      <div class="reading-mode-inner">
        <p class="reading-mode-number">${poem.number}</p>
        <h2 id="reading-mode-title" tabindex="-1">${poem.title}</h2>
        <div class="reading-mode-body">${stanzas}</div>
      </div>
      <nav class="reading-mode-controls" aria-label="poem navigation">
        ${previous ? `<button class="reading-control reading-control-previous" type="button" aria-label="previous poem: ${previous.title}" data-reading-index="${index - 1}"><span>${previous.title}</span></button>` : "<span></span>"}
        ${next ? `<button class="reading-control reading-control-next" type="button" aria-label="next poem: ${next.title}" data-reading-index="${index + 1}"><span>${next.title}</span></button>` : "<span></span>"}
      </nav>`;
  };

  const updateReadingProgress = () => {
    if (!readingMode) return;
    const scrollable = readingMode.scrollHeight - readingMode.clientHeight;
    const amount = scrollable > 0 ? readingMode.scrollTop / scrollable : 0;
    const bar = readingMode.querySelector(".reading-mode-progress span");
    if (bar) bar.style.transform = `scaleX(${amount})`;
  };

  const renderReadingMode = (index, focusTitle = false) => {
    const poem = collectionPoems[index];
    if (!poem || !readingMode) return;
    readingIndex = index;
    readingMode.innerHTML = readingMarkup(poem, index);
    readingMode.scrollTop = 0;
    readingMode.querySelector(".reading-mode-close").addEventListener("click", closeReadingMode);
    readingMode.querySelectorAll("[data-reading-index]").forEach((control) => {
      control.addEventListener("click", () => renderReadingMode(Number(control.dataset.readingIndex), true));
    });
    updateReadingProgress();
    if (focusTitle) readingMode.querySelector("#reading-mode-title").focus();
  };

  const closeReadingMode = () => {
    if (!readingMode) return;
    document.body.classList.remove("reading-open");
    if (siteShell) {
      siteShell.inert = false;
      siteShell.removeAttribute("aria-hidden");
    }
    readingMode.classList.remove("is-visible");
    const focusTarget = lastReadingFocus;
    window.setTimeout(() => {
      readingMode?.remove();
      readingMode = null;
      readingIndex = -1;
      focusTarget?.focus();
    }, prefersReducedMotion ? 0 : 220);
  };

  const openReadingMode = (index, source) => {
    if (readingMode) return;
    lastReadingFocus = source;
    readingMode = document.createElement("section");
    readingMode.className = "reading-mode";
    readingMode.setAttribute("role", "dialog");
    readingMode.setAttribute("aria-modal", "true");
    readingMode.setAttribute("aria-labelledby", "reading-mode-title");
    document.body.append(readingMode);
    if (siteShell) {
      siteShell.inert = true;
      siteShell.setAttribute("aria-hidden", "true");
    }
    document.body.classList.add("reading-open");
    readingMode.addEventListener("scroll", updateReadingProgress, { passive: true });
    renderReadingMode(index);
    requestAnimationFrame(() => {
      readingMode?.classList.add("is-visible");
      readingMode?.querySelector("#reading-mode-title")?.focus();
    });
  };

  poemEntries.forEach((entry, index) => {
    entry.querySelector(".reading-mode-toggle")?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openReadingMode(index, event.currentTarget);
    });
  });

  if ("IntersectionObserver" in window) {
    const readingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-active", entry.isIntersecting));
    }, { rootMargin: "-24% 0px -58% 0px", threshold: 0 });
    poemEntries.forEach((entry) => readingObserver.observe(entry));
  } else if (poemEntries[0]) {
    poemEntries[0].classList.add("is-active");
  }
}

document.addEventListener("keydown", (event) => {
  const readingMode = document.querySelector(".reading-mode");
  if (readingMode && event.key === "Escape") {
    event.preventDefault();
    readingMode.querySelector(".reading-mode-close")?.click();
    return;
  }
  if (readingMode && event.key === "Tab") {
    const focusable = [...readingMode.querySelectorAll("button, [tabindex='-1']")].filter((node) => !node.disabled);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if (!poemList || !collection || !["ArrowDown", "ArrowUp"].includes(event.key)) return;
  const entries = [...poemList.querySelectorAll("details")];
  const current = entries.findIndex((entry) => entry.contains(document.activeElement));
  if (current < 0) return;
  const next = event.key === "ArrowDown" ? entries[current + 1] : entries[current - 1];
  if (next) {
    event.preventDefault();
    next.querySelector("summary").focus();
    next.open = true;
    next.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
  }
});
