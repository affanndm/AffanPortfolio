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
  system: string;
  contribution: string[];
  decisions: { title: string; detail: string }[];
  outcome: string;
  reflection: string;
  media:
    | { kind: "image"; src: string; alt: string; caption: string }
    | { kind: "pipeline"; label: string; caption: string };
  evidence: { label: string; url: string }[];
  credits: { label: string; url: string }[];
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
  statusLabel: string;
  statusDetail: string;
  visual: "editorial" | "algorithms" | "finance" | "archive";
};

export type TrajectoryItem = {
  year: string;
  title: string;
  detail: string;
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
    liveUrl: "https://vantage-ruddy.vercel.app",
    signal: "Helping local discovery feel less like a noisy list and more like a trusted path to relevant businesses.",
    noise:
      "Local-business data changes constantly: categories, photos, trust signals, saved places, owner flows, and deployment realities all compete for attention.",
    system:
      "The team product combines a React discovery interface with business data, place enrichment, saved-business actions, owner workflows, and backend services. Affan's public pull requests span both sides of that path: from early models and routes to discovery UI, image enrichment, preference onboarding, and later Supabase compatibility work.",
    contribution: [
      "Contributed early backend and frontend systems across auth, business/deal/review/user models, routes, API work, and UI surfaces.",
      "Improved discovery, image enrichment, Google Places integration, and explore UI components through merged PR #26.",
      "Added demo mode, owner events, saved-business flows, discovery updates, metadata/photo proxy services, preference onboarding, and account/business UI through merged PR #30.",
      "Contributed Supabase compatibility and explore-discovery regression test work in PR #160, with attribution caution because the PR also includes another contributor's security-fix commit.",
    ],
    decisions: [
      {
        title: "Enrich before presenting",
        detail:
          "Discovery work joined local business records with images and Google Places data so the interface could surface more than a bare database row.",
      },
      {
        title: "Make trust actionable",
        detail:
          "Saved businesses, preferences, owner events, and account surfaces turned discovery into a sequence of actions rather than a static directory.",
      },
      {
        title: "Protect discovery during change",
        detail:
          "Supabase compatibility and explore regression tests helped preserve behavior while the wider team architecture evolved.",
      },
    ],
    outcome:
      "The public record contains merged full-stack pull requests and a current live deployment linked from the repository. No user, revenue, adoption, or business-impact metrics are claimed.",
    reflection:
      "Discovery quality is not only a ranking problem. Provenance, imagery, preferences, and the next useful action all shape whether a result feels trustworthy.",
    media: {
      kind: "image",
      src: "/media/vantage/live-home.png",
      alt: "Vantage live deployment showing its navigation, sign-in action, and a large local-business discovery hero.",
      caption: "Live deployment capture, July 15, 2026. Public project media; team work is credited below.",
    },
    evidence: [
      { label: "PR #1", url: "https://github.com/crackle2k/vantage/pull/1" },
      { label: "PR #2", url: "https://github.com/crackle2k/vantage/pull/2" },
      { label: "PR #3", url: "https://github.com/crackle2k/vantage/pull/3" },
      { label: "PR #26", url: "https://github.com/crackle2k/vantage/pull/26" },
      { label: "PR #30", url: "https://github.com/crackle2k/vantage/pull/30" },
      { label: "PR #160", url: "https://github.com/crackle2k/vantage/pull/160" },
    ],
    credits: [
      { label: "MisplacedOrange", url: "https://github.com/MisplacedOrange" },
      { label: "crackle2k", url: "https://github.com/crackle2k" },
      { label: "affanndm", url: "https://github.com/affanndm" },
      { label: "OriginalPuppeteer", url: "https://github.com/OriginalPuppeteer" },
      { label: "MisplacedOranges", url: "https://github.com/MisplacedOranges" },
      { label: "ethan-gobi", url: "https://github.com/ethan-gobi" },
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
    system:
      "The current Python CLI validates guide sequences, submits each candidate to NCBI BLAST against human records, parses the top alignments, identifies possible essential-gene matches from a bundled CSV, calculates a heuristic specificity score, and compares candidates. It is a decision-support workflow, not biological validation.",
    contribution: [
      "Contributed to a team-built Python CLI for comparing CRISPR guide-RNA candidates with BLAST-based off-target analysis.",
      "Public contributor history connects Affan to the repository; early BLAST, parsing, scoring, and essential-gene commits are kept cautiously attributed until the remaining author-alias review is complete.",
    ],
    decisions: [
      {
        title: "Constrain the search space",
        detail:
          "The BLAST request filters for human records and limits returned hits so the comparison stays aligned with the project's educational purpose.",
      },
      {
        title: "Keep annotations beside scores",
        detail:
          "The CLI reports match type, possible gene identity, e-value, identity percentage, and sequence context instead of presenting a score alone.",
      },
      {
        title: "Treat ranking as a heuristic",
        detail:
          "The score applies explicit penalties for significant non-target matches, high sequence identity, and transcript or mRNA hits. Its assumptions remain visible in source.",
      },
    ],
    outcome:
      "The current main branch contains the complete CLI path from validated input through BLAST parsing and candidate comparison. No lab validation, accuracy metric, or research-grade outcome is claimed.",
    reflection:
      "A score is useful only when the evidence and assumptions behind it remain inspectable. In scientific software, clarity about uncertainty is part of the interface.",
    media: {
      kind: "pipeline",
      label: "Source-backed gRNAlytics pipeline from guide input through BLAST, annotation, scoring, and comparison.",
      caption: "Pipeline reconstructed from the public main branch. It illustrates code flow and does not present biological results.",
    },
    evidence: [
      { label: "Initial BLAST workflow", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/6dfe2eb112b3b475f4a19a306566edc6a0709894" },
      { label: "Scoring and essential genes", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/d6b07e4c07980dab950b569ee795dd9a0af3df81" },
      { label: "Result iteration", url: "https://github.com/MisplacedOrange/gRNAlytics/commit/03ccbe7a198603ab71e8bac3a820dbe72fc6e6e7" },
    ],
    credits: [
      { label: "MisplacedOrange", url: "https://github.com/MisplacedOrange" },
      { label: "affanndm", url: "https://github.com/affanndm" },
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
    status: "verification",
    statusLabel: "Publication review",
    statusDetail: "The repository is public; personal reflection media remains withheld pending Affan's approval.",
    visual: "editorial",
  },
  {
    title: "Solutions",
    year: "2026",
    ownership: "SOLE BUILD",
    category: "Algorithms archive",
    summary: "Python practice archive for LeetCode-style problem solving. External accepted-submission claims stay out until external profile evidence is provided.",
    repoUrl: "https://github.com/affanndm/Solutions",
    status: "show",
    statusLabel: "Verified source",
    statusDetail: "Owned repository with public Python solution files; no contest rank or acceptance claim is made.",
    visual: "algorithms",
  },
  {
    title: "Financial Tracker",
    year: "2025",
    ownership: "EXPERIMENT",
    category: "Python CLI",
    summary: "Early Python CLI using classes, CSV persistence, and input validation to turn transactions into budget information.",
    repoUrl: "https://github.com/affanndm/Financial_Tracker",
    status: "verification",
    statusLabel: "Authorship / run review",
    statusDetail: "Repository ownership is public; commit-alias attribution and current runtime still need confirmation.",
    visual: "finance",
  },
  {
    title: "Recipe Tracker",
    year: "2025",
    ownership: "ARCHIVE",
    category: "OOP learning artifact",
    summary: "Early recipe-tracking exercise. Current public source includes unresolved merge-conflict markers, so it stays archive-only unless fixed.",
    repoUrl: "https://github.com/affanndm/Recipe-Tracker",
    status: "archive",
    statusLabel: "Archive",
    statusDetail: "Public source includes unresolved merge-conflict markers and is not presented as a working product.",
    visual: "archive",
  },
];

export const trajectory: TrajectoryItem[] = [
  {
    year: "2025",
    title: "Early systems",
    detail: "Python CLI experiments used classes, CSV files, and validation to structure transactions and recipes.",
  },
  {
    year: "2026",
    title: "Algorithms",
    detail: "A growing Python solutions archive made strict constraints and small implementation choices visible.",
  },
  {
    year: "2026",
    title: "Product engineering",
    detail: "Vantage expanded the problem from code in isolation to discovery, trust, data enrichment, and team delivery.",
  },
  {
    year: "2026",
    title: "Scientific computing",
    detail: "gRNAlytics brought the same search for structure to BLAST output, guide comparison, and uncertainty.",
  },
];

export const publicEmail = "nadeemaffan23@gmail.com";
