# Claims Ledger

Audit date: 2026-07-15

Publication status values:

- `permitted`: May be used in draft site copy, provided wording stays close to the evidence.
- `needs confirmation`: Requires Affan confirmation or additional evidence before publishing.
- `do not publish`: Do not use as a public claim.

## Identity And Positioning

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Affan Nadeem is a student developer working across product engineering, scientific computing, and algorithms. | User brief and GitHub profile README indicate student/developer interests, but current student status needs confirmation. | https://github.com/affanndm | probable | needs confirmation |
| I build software for complex systems. | Strategic positioning from Affan's prompt/spec; not a factual external claim. | `SPEC.md` | verified | permitted |
| From trusted local discovery to computational biology. | Vantage and gRNAlytics public repositories support local discovery and computational biology/software-science framing. | https://github.com/crackle2k/vantage and https://github.com/MisplacedOrange/gRNAlytics | verified | permitted |
| Based in Canada. | User brief states Canada in hero metadata, but no workspace evidence confirms current location. | `SPEC.md` | unverified | needs confirmation |
| Available for collaboration. | User brief says only use if genuinely true; no evidence in audit. | `SPEC.md` | unverified | needs confirmation |
| Affan can be contacted at `nadeemaffan23@gmail.com`. | Affan's public GitHub profile README exposes this address as its email contact. | https://github.com/affanndm | verified | permitted |

## Vantage

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Vantage is a team-built local business discovery platform. | Public README and repo description describe local/community business discovery; contributor history shows multiple contributors. | https://github.com/crackle2k/vantage | verified | permitted |
| Affan was a full-stack contributor to Vantage. | Affan-authored merged PRs and commits touched backend routes/models/services, frontend pages/components/API, auth/signup, discovery, saved, demo, owner-event, and Supabase compatibility work. | https://github.com/crackle2k/vantage/pull/1, https://github.com/crackle2k/vantage/pull/26, https://github.com/crackle2k/vantage/pull/30, https://github.com/crackle2k/vantage/pull/160 | verified | permitted |
| Affan contributed discovery, business normalization/data enrichment, authentication, MongoDB, demo functionality, saved businesses, UI improvements, and Supabase compatibility work. | Evidence supports discovery/image enrichment/auth/MongoDB/demo/saved/UI/Supabase compatibility. Business normalization appears in unmerged PR #249 and should not be claimed as shipped without confirmation. | https://github.com/crackle2k/vantage/pull/3, https://github.com/crackle2k/vantage/pull/26, https://github.com/crackle2k/vantage/pull/30, https://github.com/crackle2k/vantage/pull/160 | probable | needs confirmation |
| Helping independent businesses surface through trust, relevance, and better discovery. | Conceptual project line supported by README's trust-first/community discovery positioning. It does not claim metrics. | https://github.com/crackle2k/vantage/blob/main/README.md | verified | permitted |
| Vantage has a public live deployment linked from its repository metadata. | GitHub repository metadata exposes `https://vantage-ruddy.vercel.app`; the URL returned a rendered Vantage page during the July 15 audit. | https://github.com/crackle2k/vantage | verified | permitted |
| Affan built the entire Vantage platform. | Repo and PR evidence show a team project with multiple contributors. | https://github.com/crackle2k/vantage/graphs/contributors | verified false | do not publish |
| Affan built the current Rust backend or Live Visibility Score. | Audit did not verify Affan-authored Rust backend or Live Visibility Score implementation. | https://github.com/crackle2k/vantage | unverified | do not publish |

## gRNAlytics

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| gRNAlytics is a team-built Python CLI for comparing CRISPR-Cas9 guide RNAs with BLAST-based off-target analysis. | README and repository source describe Python/BLAST/off-target guide comparison; contributor history shows team contribution. | https://github.com/MisplacedOrange/gRNAlytics | verified | permitted |
| Affan contributed early BLAST automation, result parsing, essential-gene lookup, scoring logic, and best-guide comparison. | Affan-associated commits added/expanded BLAST workflow, XML parsing, essential-gene CSV loading, scoring, and best-guide selection. Alias confirmation still needed for some author identity. | https://github.com/MisplacedOrange/gRNAlytics/commit/6dfe2eb112b3b475f4a19a306566edc6a0709894 and https://github.com/MisplacedOrange/gRNAlytics/commit/d6b07e4c07980dab950b569ee795dd9a0af3df81 | probable | needs confirmation |
| Turning biological search results into clearer guide-RNA decisions. | Conceptual project line supported by repository purpose and scoring/ranking functionality. | https://github.com/MisplacedOrange/gRNAlytics/blob/main/README.md | verified | permitted |
| The current gRNAlytics main branch validates input, runs human-filtered BLAST queries, parses matches, annotates possible essential genes, calculates a heuristic score, and compares candidates. | Direct inspection of the public `main.py` on July 15, 2026. | https://github.com/MisplacedOrange/gRNAlytics/blob/main/main.py | verified | permitted as team-system description |
| gRNAlytics is research-grade or biologically validated. | No external validation, accuracy data, lab use, or peer review evidence found. | https://github.com/MisplacedOrange/gRNAlytics | unverified | do not publish |
| Affan solely built the current final gRNAlytics version. | Current code was later refactored by other contributors; team repo. | https://github.com/MisplacedOrange/gRNAlytics/graphs/contributors | verified false | do not publish |

## English Metacognition Portfolio

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Affan built an interactive React/TypeScript school portfolio with scroll-based navigation and structured reflection content. | Owned repo, all visible commits by Affan, README describes stack and interaction; live URL returns successfully. | https://github.com/affanndm/English-Metacognition-Portfolio and https://english-metacognition-portfolio.vercel.app/ | verified | permitted |
| The project uses Vite, React, TypeScript, GSAP ScrollTrigger, CSS, and tests/docs. | README and file tree evidence. | https://github.com/affanndm/English-Metacognition-Portfolio | verified | permitted |
| This project received a specific grade or recognition. | No evidence found. | N/A | unverified | do not publish |
| Reflection answers can be used as portfolio biography. | School/personal reflection content needs Affan consent. | https://github.com/affanndm/English-Metacognition-Portfolio | unverified | needs confirmation |

## Solutions

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Solutions is Affan's Python algorithms practice archive. | Owned repo, Python files, README, visible commits by Affan. | https://github.com/affanndm/Solutions | verified | permitted |
| The archive includes LeetCode-style Python solutions. | Current file tree contains LeetCode Easy/Medium Python files. | https://github.com/affanndm/Solutions | verified | permitted |
| The archive includes accepted DMOJ and Codeforces submissions. | README mentions platforms, but current tree evidence was not enough. | https://github.com/affanndm/Solutions | probable | needs confirmation |
| Affan has a specific contest ranking. | No evidence found. | N/A | unverified | do not publish |

## Previous Portfolio / Domain

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Affan configured a GitHub Pages/custom-domain placeholder at `affannadeem.me`. | `affanndm.github.io` contains CNAME and public Pages deployment record. | https://github.com/affanndm/affanndm.github.io | verified | permitted as archive only |
| This was a complete previous portfolio website. | Repo has only README and CNAME. | https://github.com/affanndm/affanndm.github.io | verified false | do not publish |

## This Portfolio

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| This portfolio is a public Next.js, TypeScript, GSAP, and Lenis build deployed on Vercel. | Current repository dependencies, application source, Vercel configuration, and canonical production deployment. | https://github.com/affanndm/AffanPortfolio and https://www.affannadeem.me | verified | permitted |
| The portfolio itself is part of Affan's current work index. | The public repository and production domain are both active and owned by Affan. | https://github.com/affanndm/AffanPortfolio | verified | permitted |

## Personal Biography

| Proposed Website Wording | Supporting Evidence | Evidence URL | Confidence | Publication Status |
| --- | --- | --- | --- | --- |
| Affan is interested in Python, computational biology, simulations, gene-network models, algorithms, AI, data science, and biotechnology entrepreneurship. | GitHub profile README self-description; may be outdated and needs direct confirmation. | https://github.com/affanndm | probable | needs confirmation |
| Affan has FBLC Coding and Programming National Finalist experience, listed as 2nd place in Canada. | The public LinkedIn profile search surface lists the award and date, but direct confirmation or an external competition record is still needed before publishing it as a portfolio claim. | https://ca.linkedin.com/in/affan-nadeem-9b4aa0250 | probable | needs confirmation |
| Affan has DECA finalist and qualifier experience. | The public LinkedIn profile search surface lists DECA Ontario and regional results, but direct confirmation or external competition records are still needed before publication. | https://ca.linkedin.com/in/affan-nadeem-9b4aa0250 | probable | needs confirmation |
| Affan's final About chronology. | Requires resume or LinkedIn export per `SPEC.md`. | N/A | unverified | needs confirmation |
