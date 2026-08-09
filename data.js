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
    name: "Tobyn Smith",
    tagline: "International Policy Graduate Student | Energy Security, AI, Supply Chain Risk & Geospatial Analysis"
  },

  profile: {
    photo: "headshot.jpg",
    photoCaption: "University of Georgia, Athens",
    lead: "I'm a graduate student in International Policy at the University of Georgia, concentrating in Energy Security. My work runs from supply-chain risk intelligence for Fortune 500 clients at BSI to mapping chokepoints along Baltic LNG corridors and scoring grid resilience across all 50 US states.",
    interests: [
      "Geopolitics",
      "International Affairs",
      "Supply Chain",
      "Energy Security",
      "Dogs",
      "Hiking"
    ]
  },

  experience: [
    {
      role: "Research Intern",
      org: "Crowdwave",
      location: "New York, NY",
      period: "May 2026 – Aug 2026",
      current: false,
      points: [
        "Investigated the political, ethical, and methodological implications of AI-driven audience simulation for opinion and survey design.",
        "Evaluated 50+ simulated cohorts using CPI scoring, assessing persuasion strength and alignment with human benchmarks."
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
      description: "A Python pipeline scoring all 50 U.S. states on grid-resilience exposure from EIA open data, published as an interactive choropleth site with a documented methodology. It surfaces where generation mix and transmission constraints leave states most vulnerable to supply shocks.",
      links: [
        { label: "View site", url: "https://tobyn-smith.github.io/energyosint/" },
        { label: "Source", url: "https://github.com/tobyn-smith/energyosint" }
      ]
    },
    {
      title: "Baltic Energy Transit Risk",
      tag: "Geopolitics · Energy Transit",
      period: "2026",
      stack: ["R (sf)", "GIS", "Quarto", "GitHub Actions"],
      description: "Which Baltic LNG terminals are easiest to disrupt? I scored terminals and subsea corridors in R (sf) and published the results as a Quarto site with interactive maps, built and deployed via GitHub Actions.",
      links: [
        { label: "View site", url: "https://tobyn-smith.github.io/transit/" },
        { label: "Source", url: "https://github.com/tobyn-smith/transit" }
      ]
    }
  ],

  writing: {
    publication: "Tobyn Smith's Substack",
    url: "https://tobynsmith.substack.com",
    blurb: "Essays and analysis on energy, policy, and international affairs.",
    posts: [
      { title: "The Security Dilemma Is Back, and We Learned Nothing", url: "https://tobynsmith.substack.com/p/the-security-dilemma-is-back-and" },
      { title: "The Iran War: does London still hold institutional and economic authority in the world order?", url: "https://tobynsmith.substack.com/p/iran-war-a-stress-test-on-the-united" }
    ]
  },

  activities: [
    { name: "Office of Academic Honesty",          role: "Panelist & Chair",                 period: "2024 – Present" },
    { name: "International Student Advisory Board",  role: "Board Member",                     period: "2024 – 2026" },
    { name: "Loch Johnson Society",                 role: "Senior Advisor",                   period: "2024 – 2026" },
    { name: "Georgia Political Review",             role: "Columnist & Operations Director",  period: "2024 – 2025" }
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
    { name: "Python" },
    { name: "R" },
    { name: "GIS" }
  ],

  contact: {
    headlinePre:  "Open to research roles and policy work. ",
    headlineLink: "Email me",
    headlinePost: ".",
    email:    "tobynsmith@uga.edu",
    phone:    "",
    linkedin: "linkedin.com/in/tobynsmith",
    github:   "github.com/tobyn-smith",
    cvUrl:    "Tobyn-Smith-Resume.pdf"
  },

  footer: "Athens, Georgia · Energy Security & Policy Research"
};
