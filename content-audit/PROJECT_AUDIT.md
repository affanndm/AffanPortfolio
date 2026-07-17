# Project Audit

Audit date: 2026-07-15

GitHub identity audited: `affanndm`

Refresh note, 2026-07-15 during Next.js architecture reset: public GitHub API checks reconfirmed 7 owned public repositories, 14 public authored pull requests, and public commit-search results across only the already-audited owned repositories plus `crackle2k/vantage` and `MisplacedOrange/gRNAlytics`. No additional contribution-only public repositories were found without authenticated `gh`.

## Method And Limits

- Evidence sources: public GitHub pages/API, public repository history, subagent local mirror notes, public live URLs where available, and public deployment metadata where visible.
- `gh` is not installed in this environment, so authenticated GitHub history search could not run.
- Public searches did not confirm additional non-`affanndm` contribution repositories beyond `crackle2k/vantage` and `MisplacedOrange/gRNAlytics`.
- Re-run authenticated searches before final content freeze if `gh` becomes available.
- Do not infer personal contribution from a README alone.
- Do not publish claims about users, revenue, awards, grades, production readiness, biological accuracy, or impact metrics unless separate evidence is added to `CLAIMS_LEDGER.md`.

## Recommended Portfolio Hierarchy

- Flagship: Vantage.
- Flagship: gRNAlytics.
- Lab: English Metacognition Portfolio.
- Lab: Solutions.
- Lab: Solutions and English Metacognition Portfolio.
- Archive only: `affanndm.github.io`.
- Current/meta work: `AffanPortfolio`, the public Next.js portfolio repository and production site.
- Omit: `affanndm` profile README.
- Omit: current empty public `AffanPortfolio` repository until implementation commits exist.

---

## Vantage

Name: Vantage

Repository owner: `crackle2k`

Repository URL: https://github.com/crackle2k/vantage

Live URL: https://vantage-ruddy.vercel.app

Purpose: A community-focused local business discovery platform. The public README describes a trust-first discovery product with consumer discovery, business-owner workflows, claimed profiles, events, deals, saved businesses, reviews, and visibility concepts.

Ownership classification: Team project / contributor.

Affan's relationship to the project: Full-stack contributor, based on public PRs, commits, and contributor history.

What the team collectively built:

- React/TypeScript frontend.
- Current Rust/Axum backend and Supabase-oriented architecture according to README.
- Discovery, owner/business workflows, saved businesses, events, deals, reviews, deployments, and supporting infrastructure.
- Public contributors include multiple people and bots.

Verified personal contributions:

- Early backend/frontend implementation across auth, business/deal/review/user models, routes, API, and UI work in PR #1.
- Activity, claim, subscription, API/frontend, and auth-context changes in PR #2.
- MongoDB-backed signup/auth integration in PR #3.
- Discovery, image enrichment, Google Places, explore UI, category/filter/trust UI components in PR #26.
- Demo mode, owner events, saved businesses, discovery, metadata/photo proxy/demo seed services, owner event UI, preference onboarding, saved-business hook, and account/business UI in PR #30.
- Supabase compatibility and explore-discovery regression test work in PR #160 / related commits, with caution that the PR also includes another contributor's security-fix commit.

Relevant commits:

- https://github.com/crackle2k/vantage/commit/45edc068aeb89d69aa2eab888fb63b9df769326f
- https://github.com/crackle2k/vantage/commit/7d44a8bb97c81255db148a7d90d43b6a5741fd54
- https://github.com/crackle2k/vantage/commit/1e2997c1f2691593e96aa295b59db5752bc02e4b
- https://github.com/crackle2k/vantage/commit/a57c3b9e388003a0c72116b50bfd34528e1fec12

Relevant pull requests:

- https://github.com/crackle2k/vantage/pull/1
- https://github.com/crackle2k/vantage/pull/2
- https://github.com/crackle2k/vantage/pull/3
- https://github.com/crackle2k/vantage/pull/26
- https://github.com/crackle2k/vantage/pull/30
- https://github.com/crackle2k/vantage/pull/160

Files and systems personally touched:

- Backend routes and models for auth, businesses, deals, reviews, users, activity, claims, subscriptions, discovery, saved businesses, and owner events.
- Google Places/image enrichment and business metadata/photo proxy services.
- Frontend API, business/explore pages, account/business UI, saved-business hooks, preference onboarding, and discovery UI components.
- Supabase compatibility and explore discovery regression tests.

Public GitHub contributor credits:

- `MisplacedOrange`
- `crackle2k`
- `affanndm`
- `OriginalPuppeteer`
- `MisplacedOranges`
- `ethan-gobi`

This list reflects the public contributors endpoint and does not assign private team roles. Bot/automation accounts are omitted from portfolio credits.

Technologies personally used:

- TypeScript, React, frontend API integration.
- Python/FastAPI-era backend code, MongoDB/document-store compatibility, Supabase compatibility.
- Google Places/data enrichment logic.
- Test coverage for discovery regressions.

Strongest portfolio angle:

Helping trusted local discovery emerge from noisy business data while being transparent about team contribution.

Recommended placement: Flagship.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Exact public role/title for Vantage.
- `NEEDS_AFFAN_CONFIRMATION`: Which current production features still derive from Affan's implementation after later refactors.
- `NEEDS_AFFAN_CONFIRMATION`: Team member names/credits.

Recommended media:

- Desktop discovery/map flow recording.
- Mobile discovery/search flow recording.
- Saved-business interaction.
- Owner events or business-owner flow.
- Diagram showing noisy business data -> normalized discovery result.
- Acquired: public live-deployment homepage capture dated July 15, 2026.

Cautions:

- Do not claim sole ownership.
- Do not claim Affan built the entire current Rust backend or Live Visibility Score unless later evidence proves it.
- Do not treat unmerged PRs #14, #29, #232, or #249 as shipped work.

---

## gRNAlytics

Name: gRNAlytics

Repository owner: `MisplacedOrange`

Repository URL: https://github.com/MisplacedOrange/gRNAlytics

Live URL: None found.

Purpose: Python CLI bioinformatics tool for comparing CRISPR-Cas9 guide RNAs. The README says it uses NCBI BLAST to analyze off-target specificity and rank gRNAs with customizable scoring logic.

Ownership classification: Team project / contributor.

Affan's relationship to the project: Computational biology contributor, based on public commit history and contributor data.

What the team collectively built:

- Python CLI with BLAST calls through Biopython.
- Essential-gene CSV loading.
- Gene-name extraction/fuzzy matching.
- Off-target scoring and best-guide selection.
- README and requirements.
- Later refactors and hardening by other contributors.

Public GitHub contributor credits:

- `MisplacedOrange`
- `affanndm`

The contributors endpoint also exposes one anonymous `Affan Nadeem` commit; it is not counted separately in public copy.

Verified personal contributions:

- Built or co-built the early BLAST workflow prototype: prompt for gRNA count/sequences, run NCBI BLAST, save XML results, parse BLAST XML, classify transcript/mRNA vs genomic hits, and print result details.
- Expanded `main.py` with essential-gene loading, regex/fuzzy gene extraction, target-chromosome prompt, specificity scoring using e-values and identity percentage, transcript/mRNA penalties, top-match reporting, score comparison, and best-gRNA selection.
- Added BLAST XML result files during testing/sample iteration.

Relevant commits:

- https://github.com/MisplacedOrange/gRNAlytics/commit/6dfe2eb112b3b475f4a19a306566edc6a0709894
- https://github.com/MisplacedOrange/gRNAlytics/commit/d6b07e4c07980dab950b569ee795dd9a0af3df81
- https://github.com/MisplacedOrange/gRNAlytics/commit/03ccbe7a198603ab71e8bac3a820dbe72fc6e6e7
- https://github.com/MisplacedOrange/gRNAlytics/commit/d91d5590fdf60ebc96ecd72e65117265241854cd

Relevant pull requests: No public PRs by Affan were found.

Files and systems personally touched:

- `main.py`
- `README.md`
- `requirements.txt`
- `AchillesCommonEssentialControls.csv`
- BLAST XML result files.

Technologies personally used:

- Python.
- Biopython / NCBI BLAST workflow.
- CSV data handling.
- Fuzzy matching / regex gene-name extraction.
- CLI input/output.

Strongest portfolio angle:

Turning biological search output into clearer guide-RNA comparison decisions.

Recommended placement: Flagship.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Confirm `IdontReallyKnowWhat` commit author identity may be attributed to Affan.
- `NEEDS_AFFAN_CONFIRMATION`: Team/class/research context and exact role.
- `NEEDS_AFFAN_CONFIRMATION`: Which scoring logic was Affan's own design versus team-designed.
- `NEEDS_AFFAN_CONFIRMATION`: Whether the workflow still runs reliably with current NCBI/Biopython behavior.

Recommended media:

- Terminal recording of sample input/output.
- Diagram of gRNA candidate -> BLAST results -> off-target scoring -> selected guide.
- Static sequence visualization.
- Code excerpt or architecture diagram, not raw biological claims.

Cautions:

- Do not claim validated biological accuracy or research-grade use.
- Do not claim sole authorship of the current final version.
- Current file blame includes later significant refactors by another contributor.

---

## English Metacognition Portfolio

Name: English Metacognition Portfolio

Repository owner: `affanndm`

Repository URL: https://github.com/affanndm/English-Metacognition-Portfolio

Live URL: https://english-metacognition-portfolio.vercel.app/

Purpose: Interactive English metacognition portfolio for reading, writing, listening/note-taking, and speaking reflections.

Ownership classification: Sole build / school-facing web experiment.

Affan's relationship to the project: Owner and author of visible commits/PRs.

What the team collectively built: No public evidence of external contributors.

Verified personal contributions:

- Built a Vite/React/TypeScript app with routes for Home, Reading, Writing, Listening, and Speaking.
- Implemented components including `Hero`, `SlicedTitle`, `ScrollDeconstructMenu`, `SectionCard`, `ReflectionPage`, `ArtifactCard`, `QuestionScene`, `ProgressRail`, and `Header`.
- Built structured reflection content in `src/content/reflections.ts`.
- Added tests, design/accessibility/editing docs, styling, tokens, and animation CSS.
- Opened/merged visible PRs #1 through #4.

Relevant commits:

- https://github.com/affanndm/English-Metacognition-Portfolio/commit/c1eaac4908516b2e3d2f503b62baabce34d7f8ec
- https://github.com/affanndm/English-Metacognition-Portfolio/commit/f2f595f1492a8b5aa406c215e50ba318207aad1d
- https://github.com/affanndm/English-Metacognition-Portfolio/commit/5b06f07ce8b4b92d460e91421a333128ad97b6d9
- https://github.com/affanndm/English-Metacognition-Portfolio/commit/ef96587194f0be6ec44bedefcff1ac61eb68837c

Relevant pull requests:

- https://github.com/affanndm/English-Metacognition-Portfolio/pull/1
- https://github.com/affanndm/English-Metacognition-Portfolio/pull/2
- https://github.com/affanndm/English-Metacognition-Portfolio/pull/3
- https://github.com/affanndm/English-Metacognition-Portfolio/pull/4

Files and systems personally touched:

- React components, pages, content model, CSS globals/animations/tokens, tests, docs, Vite/TypeScript config.

Technologies personally used:

- TypeScript, React, Vite, CSS, GSAP ScrollTrigger per README, Vitest/testing.

Strongest portfolio angle:

Frontend interaction and content-modeling experiment; useful for the Lab.

Recommended placement: Lab.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Whether this school/reflection project should be public in the professional portfolio.
- `NEEDS_AFFAN_CONFIRMATION`: Which screenshots or clips are acceptable without exposing sensitive school reflection content.

Recommended media:

- Homepage scroll interaction recording.
- One section navigation clip.
- Sanitized component/content model diagram.

Cautions:

- Do not quote personal reflection content as biography.
- Do not claim grade or teacher outcome.

---

## Solutions

Name: Solutions

Repository owner: `affanndm`

Repository URL: https://github.com/affanndm/Solutions

Live URL: None.

Purpose: Personal Python archive of competitive-programming / LeetCode-style solutions.

Ownership classification: Sole build / personal practice archive.

Affan's relationship to the project: Owner and author of visible commits.

What the team collectively built: No public evidence of a team.

Verified personal contributions:

- Authored public commits adding and organizing Python solution files under LeetCode difficulty folders.
- Wrote/updated README describing the archive.

Relevant commits:

- https://github.com/affanndm/Solutions/commit/036c8ec7e62a947b37b5f1ac91e0d569c29facdb
- https://github.com/affanndm/Solutions/commit/1f92b007965ba9db8780ff069271ffed033c4daf
- https://github.com/affanndm/Solutions/commit/eb9963421968b0b6931b294cb966240c9a5cc902
- https://github.com/affanndm/Solutions/commit/b7cf6b90eb62ea903377a8c418f6b86b633e0cde

Relevant pull requests: None noted.

Files and systems personally touched:

- Python solution files and README.

Technologies personally used:

- Python.

Strongest portfolio angle:

Algorithm practice and constraint-solving archive.

Recommended placement: Lab.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Whether solutions were accepted on LeetCode/DMOJ/Codeforces.
- `NEEDS_AFFAN_CONFIRMATION`: Any external profiles or contest rankings.

Recommended media:

- Algorithm visualization for 1-2 selected problems.
- Screenshot or link to external solved-profile evidence if Affan provides it.

Cautions:

- Current public tree shows LeetCode solution files; do not claim DMOJ/Codeforces breadth beyond README statements without more evidence.

---

## affanndm.github.io

Name: Previous GitHub Pages Placeholder

Repository owner: `affanndm`

Repository URL: https://github.com/affanndm/affanndm.github.io

Live URL: https://affanndm.github.io redirects to http://affannadeem.me/

Purpose: Minimal GitHub Pages/custom-domain placeholder.

Ownership classification: Sole repo / archive.

Affan's relationship to the project: Owner and author of visible commits.

What the team collectively built: No public evidence of a team.

Verified personal contributions:

- Initial GitHub Pages placeholder and CNAME/custom domain commit.

Relevant commits:

- https://github.com/affanndm/affanndm.github.io/commit/e6f0de5af8842af1b02e8b73abc666823e085500
- https://github.com/affanndm/affanndm.github.io/commit/833a2d7d426d29c5770f375730b8069c4f665414

Relevant pull requests: None noted.

Files and systems personally touched:

- `README.md`, `CNAME`.

Technologies personally used:

- GitHub Pages / custom-domain configuration.

Strongest portfolio angle:

Archive only; not evidence of a substantive portfolio build.

Recommended placement: Archive only or omit.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Whether the domain is still intended to be active and whether HTTPS should be fixed.

Recommended media:

- None unless used as an archive comparison.

Cautions:

- Do not claim a complete previous portfolio from this repo.

---

## affanndm Profile README

Name: GitHub Profile README

Repository owner: `affanndm`

Repository URL: https://github.com/affanndm/affanndm

Live URL: https://github.com/affanndm

Purpose: GitHub profile README.

Ownership classification: Profile/source-of-claims only.

Affan's relationship to the project: Owner and author of visible commits.

Verified personal contributions:

- Iterated `README.md`, badges, widgets, social/contact links, and self-description.

Relevant commits:

- https://github.com/affanndm/affanndm/commit/90995a2a28b69300aecddca2d7f60b68e5519c20
- https://github.com/affanndm/affanndm/commit/d97e96bf8360ae09cb6c5ac655bdee46724a7b7a
- https://github.com/affanndm/affanndm/commit/514681bd84ff4dcb11ab258268f7451aae399281

Recommended placement: Omit as a project.

Missing information:

- `NEEDS_AFFAN_CONFIRMATION`: Current student status, gene-network model work, science fair research, AI/data science/biotech entrepreneurship interests, and contact details.

Cautions:

- Do not embed GitHub stats widgets or contribution graph; `SPEC.md` prohibits that pattern.

---

## AffanPortfolio

Name: AffanPortfolio

Repository owner: `affanndm`

Repository URL: https://github.com/affanndm/AffanPortfolio

Live URL: None.

Purpose: Current working repository for the portfolio project.

Ownership classification: Current build workspace.

Affan's relationship to the project: Owner, but the public GitHub remote was empty at audit time.

Recommended placement: Omit from project list for now.

Missing information:

- Public implementation commits do not exist yet.

Cautions:

- Do not claim this repository as a completed project until implementation work exists.
