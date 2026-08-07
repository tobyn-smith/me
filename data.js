/* =====================================================================
   PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to touch to change what the site says.
   Easiest way: open  admin.html  in your browser and edit with forms,
   then click "Download data.js" and replace this file.
   You can also edit the text below directly if you prefer.
   ===================================================================== */
window.PORTFOLIO_DATA = {

  hero: {
    eyebrow: "Energy Security / Policy Research",
    name: "Tobyn Smith",
    tagline: "I research the geopolitics of energy security and build the maps that measure it.",
    meta: [
      "Athens, Georgia",
      "M.A. International Policy · 2027",
      "Python · R · GIS"
    ]
  },

  profile: {
    lead: "I'm a graduate student in International Policy at the University of Georgia, concentrating in Energy Security. My interest sits where three things meet: geopolitics, supply chain dependency, and the infrastructure that energy actually runs on.",
    body: "Most of my work is research written for people who intend to act on it. That has meant supply-chain risk intelligence for Fortune 500 clients at BSI, guidance on the ethics and design of a university-wide AI assistant, and current research at Crowdwave into the methodology behind AI-driven audience simulation. Where an argument needs evidence, I build the geospatial pipelines that turn open data into maps you can read at a glance."
  },

  facts: [
    { label: "Focus",     value: "Energy Security" },
    { label: "Discipline", value: "International Policy" },
    { label: "Toolkit",    value: "Python · R · GIS" },
    { label: "Based in",   value: "Athens, GA" },
    { label: "Graduation", value: "May 2027" }
  ],

  experience: [
    {
      role: "Research Intern",
      org: "Crowdwave",
      location: "New York, NY",
      period: "May 2026 – Present",
      current: true,
      points: [
        "Investigate the political, ethical, and methodological implications of AI-driven audience simulation for opinion and survey design.",
        "Evaluate 50+ simulated cohorts using CPI scoring, assessing persuasion strength and alignment with human benchmarks."
      ]
    },
    {
      role: "Research Assistant",
      org: "ArchPal (University AI Assistant)",
      location: "Athens, GA",
      period: "Nov 2025 – Present",
      current: true,
      points: [
        "Advise on UX, pedagogical features, and student-facing functionality for a university-wide AI assistant.",
        "Authored guidance on academic integrity, privacy, and ethical use; contributed to AWS architecture decisions."
      ]
    },
    {
      role: "Global Intelligence Intern, Supply Chains",
      org: "British Standards Institution (BSI)",
      location: "Atlanta, GA",
      period: "May 2025 – Aug 2025",
      current: false,
      points: [
        "Synthesised supply-chain risk intelligence on the U.S. and Mexico for clients, including Fortune 500 firms.",
        "Produced 50+ heatmaps, graphs, and reports informing client risk-mitigation decisions."
      ]
    }
  ],

  education: [
    {
      degree: "M.A. International Policy",
      school: "University of Georgia",
      location: "Athens, GA",
      period: "Expected May 2027",
      detail: "Concentration in Energy Security."
    },
    {
      degree: "B.A. International Relations",
      school: "University of Georgia",
      location: "Athens, GA",
      period: "May 2026",
      detail: "GPA 3.6."
    }
  ],

  projects: [
    {
      title: "Grid Resilience Exposure Index",
      tag: "OSINT · Grid Resilience",
      period: "2026",
      stack: ["Python", "R", "GIS", "EIA Open Data"],
      description: "A Python pipeline scoring all 50 U.S. states on grid resilience exposure using EIA open data, published as an interactive site with choropleth maps and a documented methodology.",
      featured: true,
      links: [
        { label: "View site", url: "" },
        { label: "Source", url: "https://github.com/tobyn-smith" }
      ]
    },
    {
      title: "Baltic Energy Transit Risk",
      tag: "Geopolitics · Energy Transit",
      period: "2026",
      stack: ["R (sf)", "GIS", "Quarto", "GitHub Actions"],
      description: "Mapped and scored the geopolitical exposure of Baltic Sea LNG terminals and subsea corridors in R, published as a Quarto site with interactive maps built via GitHub Actions.",
      featured: false,
      links: [
        { label: "View site", url: "" },
        { label: "Source", url: "https://github.com/tobyn-smith" }
      ]
    }
  ],

  activities: [
    { name: "Office of Academic Honesty",          role: "Panelist & Chair",                 period: "2024 — Present" },
    { name: "International Student Advisory Board",  role: "Board Member",                     period: "2024 — 2026" },
    { name: "Loch Johnson Society",                 role: "Senior Advisor",                   period: "2024 — 2026" },
    { name: "Georgia Political Review",             role: "Columnist & Operations Director",  period: "2024 — 2025" }
  ],

  awards: [
    { name: "UGA International Out-of-State Tuition Waiver", detail: "University of Georgia" },
    { name: "Duke of Edinburgh, Bronze Award",              detail: "United Kingdom" }
  ],

  memberships: [
    "Institute of Nuclear Materials Management",
    "Energy Institute",
    "Energy Terminal"
  ],

  skills: [
    { name: "Python",              solid: true },
    { name: "R",                   solid: true },
    { name: "GIS",                 solid: true },
    { name: "Geospatial Analysis", solid: false },
    { name: "Risk Intelligence",   solid: false }
  ],

  contact: {
    headlinePre:  "Open to research roles, collaborations, and a good ",
    headlineLink: "conversation",
    headlinePost: ".",
    email:    "tobynsmith@uga.edu",
    phone:    "(706) 240-4258",
    linkedin: "linkedin.com/in/tobynsmith",
    github:   "github.com/tobyn-smith"
  }
};
