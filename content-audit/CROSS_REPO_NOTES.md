# Cross-Repository Contribution Notes

Date: 2026-07-15

Scope: Public repositories owned by other accounts where `affanndm` appears as a contributor. Seed repositories audited first: `crackle2k/vantage` and `MisplacedOrange/gRNAlytics`.

Refresh note, 2026-07-15 during Next.js architecture reset: public GitHub issue/PR search for `is:pr author:affanndm` again returned 14 PRs total, all in `crackle2k/vantage` or `affanndm/English-Metacognition-Portfolio`. Public GitHub commit search for `author:affanndm` returned 153 commits across `affanndm/affanndm.github.io`, `affanndm/English-Metacognition-Portfolio`, `affanndm/Financial_Tracker`, `affanndm/Recipe-Tracker`, `affanndm/Solutions`, `crackle2k/vantage`, and `MisplacedOrange/gRNAlytics`. No additional contribution-only public repositories were found through these unauthenticated searches.

## Method And Limits

- `gh` is not installed in this environment, so authenticated GitHub history search could not be performed.
- Evidence used: public GitHub API/search, local mirror clones of the two seed repositories, PR metadata, commit history, changed-file lists, contributors, branches, languages, deployments, releases, issues, and README/docs.
- Public authored-PR search for `author:affanndm` found Vantage PRs plus Affan-owned repository PRs; no additional non-`affanndm` repository PRs were identified.
- Public commit search for `author:affanndm` returned external commits in `crackle2k/vantage` and `MisplacedOrange/gRNAlytics` plus Affan-owned repos. The confirmed non-owned contribution set contained only Vantage and gRNAlytics; a refreshed external-only count showed 70 public commits across those two repositories. Re-run with authenticated `gh` if available.
- Do not treat README business claims, market claims, or biological/scientific accuracy as verified outcomes.

## Global Search Evidence

- Auth limitation: `gh --version` and `gh auth status` both failed because `gh` is not installed.
- Global PR search evidence: `is:pr author:affanndm` returned 14 PRs: 10 in `crackle2k/vantage`, 4 in `affanndm/English-Metacognition-Portfolio`; no additional external PR repos in that result set.
- Global commit search evidence: `author:affanndm` returned 153 commits total. First page included external repos `crackle2k/vantage` and `MisplacedOrange/gRNAlytics`, plus Affan-owned repos.

## crackle2k/vantage

Repository: https://github.com/crackle2k/vantage

Recommended tier: Flagship selected work, labeled `TEAM PROJECT / FULL-STACK CONTRIBUTOR`. Strong enough for a main case study if the page foregrounds Affan's actual contribution and does not imply sole ownership.

### What The Product Does

Vantage is a local business discovery platform. The current README describes a trust-first discovery product with consumer discovery, owner/business workflows, claimed profiles, events, deals, saved businesses, reviews, and a Live Visibility Score concept.

Evidence:

- Repository: https://github.com/crackle2k/vantage
- README: https://github.com/crackle2k/vantage/blob/main/README.md
- Repo description from GitHub API: "A community-focused discovery tool to help users find, rate, and support local small businesses."

### What The Team Collectively Built

- Current stack/languages from GitHub API: TypeScript, Rust, CSS, PLpgSQL, JavaScript, HTML, Dockerfile.
- Current README setup points to a Rust/Axum backend (`cargo run -p vantage-backend --bin vantage`), React/TypeScript frontend, Supabase Auth/Postgres/storage/realtime, Vercel deployment, and migrations.
- Public contributors API showed `MisplacedOrange`, `crackle2k`, `dependabot[bot]`, `affanndm`, Copilot, Claude, and others.
- Public branch list included `main`, `addscrollfeature`, `claude/quirky-wozniak-4e1de8`, `copilot/fix-security-vulnerabilities`, and several Dependabot branches.
- Public deployment API showed many Vercel bot Preview/Production deployments, including production deployment records on 2026-07-15.
- No releases were present in the public releases API.

Evidence:

- Contributors: https://github.com/crackle2k/vantage/graphs/contributors
- Branches: https://github.com/crackle2k/vantage/branches
- Deployments API evidence available publicly at `https://api.github.com/repos/crackle2k/vantage/deployments`
- README setup/current architecture: https://github.com/crackle2k/vantage/blob/main/README.md

### What Affan Personally Contributed

Evidence supports Affan as a substantial full-stack contributor, especially in early backend/frontend construction, discovery/explore flows, auth/signup/database integration, demo/saved/owner-event workflows, and later Supabase compatibility work.

Affan-authored / Affan-associated evidence:

- Contributors API listed `affanndm` with 55 contributions.
- Local mirrored history found 64 Affan-like author commits, 42 of them non-merge commits.
- Affan-authored merged PRs:
  - PR #1, "Initial commit/pull", merged 2026-02-16: 56 files, +6102/-1824. Added backend MongoDB/database setup, auth/business/deal/review/user models, backend routes, geo/match scoring services, frontend API and page/component work. URL: https://github.com/crackle2k/vantage/pull/1
  - PR #2, "Removed redundancy code etc.", merged 2026-02-20: 54 files, +3804/-1088. Added activity, claim, and subscription models/routes; modified API/frontend components and auth context. URL: https://github.com/crackle2k/vantage/pull/2
  - PR #3, "Added mongoDB so you can sign up", merged 2026-02-21: 2 commits, 4 files. URL: https://github.com/crackle2k/vantage/pull/3
  - PR #26, "Improve discovery, image enrichment, and explore UI", merged 2026-02-27: 20 files, +1791/-2084. Changed `backend/routes/discovery.py`, `backend/services/google_places.py`, `frontend/src/pages/Businesses.tsx`, and added explore UI components such as `BusinessImage`, `CategoryChip`, `CommunityActivityRail`, `FilterBar`, and `TrustExplanation`. URL: https://github.com/crackle2k/vantage/pull/26
  - PR #30, "Add demo mode, owner events, saved, discovery", merged 2026-02-28: 45 files, +6283/-503. Added/modified activity, businesses, discovery, saved routes, business metadata/photo proxy/demo seed services, owner event UI, preference onboarding, saved-business hook, frontend API, and account/business UI. URL: https://github.com/crackle2k/vantage/pull/30
  - PR #160, "Fixed implementation of Supabase", merged 2026-05-07: 2 commits, 15 files, +692/-702. Included Affan commit `7d44a8b` and a later Dinesh security-fix commit; touched document-store/Mongo compatibility, discovery, Google Places, frontend API, Businesses page, and added `backend/tests/test_explore_discovery_regressions.py`. URL: https://github.com/crackle2k/vantage/pull/160
- Relevant direct commit URLs:
  - `45edc068` fix discovery Supabase compatibility: https://github.com/crackle2k/vantage/commit/45edc068aeb89d69aa2eab888fb63b9df769326f
  - `7d44a8b` fixed implementation of Supabase: https://github.com/crackle2k/vantage/commit/7d44a8bb97c81255db148a7d90d43b6a5741fd54
  - `1e2997c` discovery/image enrichment/explore UI: https://github.com/crackle2k/vantage/commit/1e2997c1f2691593e96aa295b59db5752bc02e4b
  - `a57c3b9` demo mode, owner events, saved, discovery: https://github.com/crackle2k/vantage/commit/a57c3b9e388003a0c72116b50bfd34528e1fec12

Important caution:

- Vantage is now Rust/Supabase-heavy. Affan's strongest direct evidence includes earlier Python/FastAPI/MongoDB work and later Supabase compatibility/discovery work. Do not claim Affan built the entire current Rust backend or Live Visibility Score system unless a later audit verifies those exact files/commits.
- Affan also appears as the merger of some PRs from other branches/users. Merge activity should not be presented as personal implementation unless the commits/files were authored by him.
- Unmerged Affan-authored PRs should not be treated as shipped work:
  - PR #14 "deployement fix", unmerged: https://github.com/crackle2k/vantage/pull/14
  - PR #29 "Fixed format", unmerged: https://github.com/crackle2k/vantage/pull/29
  - PR #232 "Codex/pending main work", unmerged, very large diff: https://github.com/crackle2k/vantage/pull/232
  - PR #249 "Fixing login and adding business normalization", unmerged, very large diff and includes another author's commit: https://github.com/crackle2k/vantage/pull/249

### Missing Information / Confirmation Needed

- `NEEDS_AFFAN_CONFIRMATION`: Exact team role/title Affan wants displayed for Vantage.
- `NEEDS_AFFAN_CONFIRMATION`: Which current production features still derive from Affan's implementation after the Rust/Supabase refactors.
- `NEEDS_AFFAN_CONFIRMATION`: Whether public Vercel/live deployment URL should be shown.
- `NEEDS_AFFAN_CONFIRMATION`: Screenshots or short clips of discovery, owner events, saved businesses, and signup/auth flows.
- Avoid market-size, investment, revenue, user, or impact claims unless Affan provides external evidence.

### Portfolio Framing

Use: "Full-stack contributor to Vantage, a team-built local discovery platform. Affan contributed early backend/frontend systems, MongoDB/auth/signup work, discovery and explore UI improvements, demo/saved/owner-event flows, and Supabase compatibility fixes."

Avoid: "Founder", "sole builder", "built the entire platform", "created the Live Visibility Score", "production Rust backend owner", or any investment/market claims without confirmation.

## MisplacedOrange/gRNAlytics

Repository: https://github.com/MisplacedOrange/gRNAlytics

Recommended tier: Flagship selected work or high-priority science case study, labeled `TEAM PROJECT / COMPUTATIONAL BIOLOGY CONTRIBUTOR`. Strong for the portfolio's software-science narrative, but the copy must avoid claiming validated biological accuracy.

### What The Product Does

gRNAlytics is a Python CLI bioinformatics tool for comparing CRISPR-Cas9 guide RNAs. The README says it uses NCBI BLAST to analyze off-target specificity and rank gRNAs with customizable scoring logic.

Evidence:

- Repository: https://github.com/MisplacedOrange/gRNAlytics
- README: https://github.com/MisplacedOrange/gRNAlytics/blob/main/README.md
- Repo description from GitHub API: "This project was created to help students evaluate the specificity of CRISPR-Cas9 gRNAs by automating off-target analysis through BLAST, then scoring and ranking the results with customizable logic."

### What The Team Collectively Built

- Current repo language from GitHub API: Python only.
- Current branch list: `main` only.
- Contributors API listed `MisplacedOrange` with 42 contributions and `affanndm` with 15.
- No public PRs involving `affanndm` were found for this repo.
- No public releases or deployments were found.
- Current root files: `main.py`, `README.md`, `requirements.txt`, `AchillesCommonEssentialControls.csv`.
- Current `main.py` includes BLAST calls through Biopython, essential-gene CSV loading, gene-name extraction, fuzzy matching, off-target scoring, input validation, XML result writing, and best-gRNA selection.
- Later Roy/MisplacedOrange commits refactored and hardened the tool after Affan's main implementation period, including CLI cleanup, variable naming, invalid-count rejection, scoring fixes, README corrections, and comment cleanup.

Evidence:

- Contributors: https://github.com/MisplacedOrange/gRNAlytics/graphs/contributors
- Branches: https://github.com/MisplacedOrange/gRNAlytics/branches
- Current main file: https://github.com/MisplacedOrange/gRNAlytics/blob/main/main.py

### What Affan Personally Contributed

Evidence supports Affan as a contributor to the prototype algorithm/CLI implementation and BLAST-result processing logic.

Affan-authored / Affan-associated evidence:

- Local mirrored history found 16 commits authored as `Affan Nadeem` or `IdontReallyKnowWhat` with Affan-associated public commit search results.
- Initial commit `6dfe2eb` implemented a basic BLAST workflow: prompt for gRNA count/sequences, run NCBI BLAST against human sequences, save XML result files, parse BLAST XML, classify transcript/mRNA vs genomic hits, and print match title/length/e-value/snippet. This commit is name-matched to Affan Nadeem, but because it is part of the alias/name-confirmation set, use conservative wording until Affan confirms the identity. URL: https://github.com/MisplacedOrange/gRNAlytics/commit/6dfe2eb112b3b475f4a19a306566edc6a0709894
- By commit `d6b07e4`, Affan had expanded `main.py` with essential-gene loading from `AchillesCommonEssentialControls.csv`, regex/fuzzy gene extraction, target-chromosome prompt, specificity scoring based on BLAST e-values and identity percentage, transcript/mRNA penalties, top-match reporting, score comparison, and best-gRNA selection. URL: https://github.com/MisplacedOrange/gRNAlytics/commit/d6b07e4c07980dab950b569ee795dd9a0af3df81
- Commit `03ccbe7` added BLAST XML result files and modified `main.py`, indicating test/sample result iteration. URL: https://github.com/MisplacedOrange/gRNAlytics/commit/03ccbe7a198603ab71e8bac3a820dbe72fc6e6e7
- Commit `d91d559` later added `blast_result_1.xml`. URL: https://github.com/MisplacedOrange/gRNAlytics/commit/d91d5590fdf60ebc96ecd72e65117265241854cd
- Diff from Affan's initial commit to `d6b07e4` added/modified `AchillesCommonEssentialControls.csv`, `README.md`, `main.py`, and `requirements.txt`, with the major implementation change in `main.py`.

Important caution:

- Current `main.py` was later refactored heavily by Roy/MisplacedOrange. Current blame showed most current lines attributed to Roy, with remaining lines attributed to `IdontReallyKnowWhat`, `Affan Nadeem`, and `MisplacedOrange`.
- Do not claim Affan solely built the final current version. Better wording: Affan built or co-built the early BLAST analysis/scoring prototype that the team later cleaned up and hardened.
- Do not claim medical/scientific validity, biological accuracy, or research impact without external validation.

### Missing Information / Confirmation Needed

- `NEEDS_AFFAN_CONFIRMATION`: Confirm that the `IdontReallyKnowWhat` commit author identity should be attributed to Affan in public portfolio copy.
- `NEEDS_AFFAN_CONFIRMATION`: Team context, class/research context, and Affan's exact role.
- `NEEDS_AFFAN_CONFIRMATION`: Which scoring logic was Affan's own design vs pair-programmed or researched with teammates.
- `NEEDS_AFFAN_CONFIRMATION`: Whether BLAST workflow still runs reliably with current NCBI/Biopython behavior.
- `NEEDS_AFFAN_CONFIRMATION`: Screenshots/terminal recording/sample input-output suitable for case-study media.

### Portfolio Framing

Use: "Computational biology contributor on gRNAlytics, a team-built Python CLI that uses BLAST results to help compare CRISPR guide RNA specificity. Affan contributed early BLAST automation, result parsing, essential-gene lookup, scoring logic, and best-guide comparison."

Avoid: "validated CRISPR analysis platform", "biologically accurate ranking", "research-grade tool", "sole creator", or any claims about real-world lab use without evidence.

## Additional External Contribution Repos

No additional public non-`affanndm` repositories were confirmed from the available unauthenticated searches beyond:

- https://github.com/crackle2k/vantage
- https://github.com/MisplacedOrange/gRNAlytics

Re-run with authenticated `gh` when available:

- `gh search prs --author affanndm --json repository,number,title,state,url`
- `gh search commits --author affanndm --json repository,sha,url,commit`
- Repo-specific PR/commit/issue searches for `involves:affanndm`, `author:affanndm`, and known Affan email/alias only if Affan confirms those identities may be used for audit.
