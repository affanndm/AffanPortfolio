export type Ownership = "SOLE BUILD" | "TEAM PROJECT" | "CONTRIBUTOR" | "EXPERIMENT" | "ARCHIVE";

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  role: string;
  year: string;
  team: string;
  ownership: Ownership;
  discipline: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  signal: string;
  noise: string;
  contribution: string[];
  evidence: { label: string; url: string }[];
  cautions: string[];
  accent: "vantage" | "grnalytics";
};

export type LabItem = {
  title: string;
  year: string;
  ownership: Ownership;
  category: string;
  summary: string;
  repoUrl?: string;
  liveUrl?: string;
  status: "show" | "verification" | "archive";
};

export const signalTerms = [
  "PYTHON",
  "TYPESCRIPT",
  "COMPUTATIONAL BIOLOGY",
  "PRODUCT ENGINEERING",
  "ALGORITHMS",
  "DATA SYSTEMS",
  "REACT",
  "SCIENTIFIC COMPUTING",
];

export const flagshipProjects: Project[] = [
  {
    slug: "vantage",
    title: "Vantage",
    kicker: "Trust-first local discovery",
    role: "Full-stack contributor",
    year: "2026",
    team: "Team project",
    ownership: "TEAM PROJECT",
    discipline: "Product engineering / discovery systems",
    stack: ["TypeScript", "React", "Python-era backend", "MongoDB", "Supabase compatibility", "Google Places"],
    repoUrl: "https://github.com/crackle2k/vantage",
    signal: "Helping local discovery feel less like a noisy list and more like a trusted path to relevant businesses.",
    noise:
      "Local-business data changes constantly: categories, photos, trust signals, saved places, owner flows, and deployment realities all compete for attention.",
    contribution: [
      "Contributed early backend and frontend systems across auth, business/deal/review/user models, routes, API work, and UI surfaces.",
      "Improved discovery, image enrichment, Google Places integration, and explore UI components through merged PR #26.",
      "Added demo mode, owner events, saved-business flows, discovery updates, metadata/photo proxy services, preference onboarding, and account/business UI through merged PR #30.",
      "Contributed Supabase compatibility and explore-discovery regression test work in PR #160, with attribution caution because the PR also includes another contributor's security-fix commit.",
    ],
    evidence: [
      { label: "PR #1", url: "https://github.com/crackle2k/vantage/pull/1" },
      { label: "PR #26", url: "https://github.com/crackle2k/vantage/pull/26" },
      { label: "PR #30", url: "https://github.com/crackle2k/vantage/pull/30" },
      { label: "PR #160", url: "https://github.com/crackle2k/vantage/pull/160" },
    ],
    cautions: [
      "Do not imply sole ownership.",
      "Do not claim Affan built the entire current Rust backend or Live Visibility Score.",
      "Do not claim unmerged PR #232 or PR #249 as shipped work.",
    ],
    accent: "vantage",
  },
  {
    slug: "grnalytics",
    title: "gRNAlytics",
    kicker: "CRISPR guide-RNA comparison",
    role: "Computational biology contributor",
    year: "2026",
    team: "Team project",
    ownership: "TEAM PROJECT",
    discipline: "Scientific computing / CLI analysis",
    stack: ["Python", "Biopython", "NCBI BLAST", "CSV", "Regex", "Fuzzy matching"],
    repoUrl: "https://github.com/MisplacedOrange/gRNAlytics",
    signal: "Turning biological search output into a clearer comparison surface for guide-RNA candidates.",
    noise:
      "BLAST outputs and off-target information can be hard to compare quickly, especially when candidate guides need scoring, annotation, and cautious interpretation.",
    contribution: [
      "Contributed to a team-built Python CLI for comparing CRISPR guide-RNA candidates with BLAST-based off-target analysis.",
      "Public repository history connects Affan to the project, while more specific authorship wording and final role title remain in the claims ledger for review.",
    ],
    evidence: [
      { label: "Initial BLAST workflow", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/6dfe2eb112b3b475f4a19a306566edc6a0709894" },
      { label: "Scoring and essential genes", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/d6b07e4c07980dab950b569ee795dd9a0af3df81" },
      { label: "Result iteration", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/03ccbe7a198603ab71e8bac3a820dbe72fc6e6e7" },
    ],
    cautions: [
      "Do not claim research-grade or biologically validated accuracy.",
      "Do not imply sole authorship of the final current version.",
      "Confirm author alias and team context before final publication.",
    ],
    accent: "grnalytics",
  },
];

export const labItems: LabItem[] = [
  {
    title: "English Metacognition Portfolio",
    year: "2026",
    ownership: "SOLE BUILD",
    category: "Frontend experiment",
    summary: "Interactive React/TypeScript school portfolio with scroll-based navigation, structured reflection content, tests, and accessibility-aware docs.",
    repoUrl: "https://github.com/affanndm/English-Metacognition-Portfolio",
    liveUrl: "https://english-metacognition-portfolio.vercel.app/",
    status: "verification",
  },
  {
    title: "Solutions",
    year: "2026",
    ownership: "SOLE BUILD",
    category: "Algorithms archive",
    summary: "Python practice archive for LeetCode-style problem solving. External accepted-submission claims stay out until external profile evidence is provided.",
    repoUrl: "https://github.com/affanndm/Solutions",
    status: "show",
  },
  {
    title: "Financial Tracker",
    year: "2025",
    ownership: "EXPERIMENT",
    category: "Python CLI",
    summary: "Early Python CLI using classes, CSV persistence, and input validation to turn transactions into budget information.",
    repoUrl: "https://github.com/affanndm/Financial_Tracker",
    status: "verification",
  },
  {
    title: "Recipe Tracker",
    year: "2025",
    ownership: "ARCHIVE",
    category: "OOP learning artifact",
    summary: "Early recipe-tracking exercise. Current public source includes unresolved merge-conflict markers, so it stays archive-only unless fixed.",
    repoUrl: "https://github.com/affanndm/Recipe-Tracker",
    status: "archive",
  },
];
