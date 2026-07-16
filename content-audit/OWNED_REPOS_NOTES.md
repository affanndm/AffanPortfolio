# Owned GitHub Repository Notes

Audit date: 2026-07-15  
GitHub user: `affanndm`  
Scope: public repositories owned by `affanndm`. Contribution-only repositories are out of scope for this file.

Refresh note, 2026-07-15 during Next.js architecture reset: public GitHub API repo discovery was rerun and again returned the same 7 owned, public, non-fork repositories: `Recipe-Tracker`, `English-Metacognition-Portfolio`, `Financial_Tracker`, `AffanPortfolio`, `Solutions`, `affanndm.github.io`, and `affanndm`. No new owned public repositories were found.

## Method And Limits

- Read local `SPEC.md`, `AGENTS.md`, `PLAN.md`, `STATUS.md`, and `DECISIONS.md` before auditing.
- `gh` is not installed in this environment, so this audit used public GitHub pages/API plus local clones of public repos.
- Public API repo discovery found 7 owned, public, non-fork repositories: `Recipe-Tracker`, `English-Metacognition-Portfolio`, `Financial_Tracker`, `AffanPortfolio`, `Solutions`, `affanndm.github.io`, and `affanndm`.
- Commit authorship was inspected from cloned public git history. Most commits use `Affan Nadeem <nadeemaffan23@gmail.com>`. `Financial_Tracker` uses `IdontReallyKnowWhat <nadeemaffan23@gmail.com>`, which likely maps to Affan based on repository ownership and the same email, but confirm before publishing that alias as Affan.
- Releases/deployments were checked through public GitHub API. No GitHub releases are published for any owned repo.
- Live URLs were checked where visible. `https://english-metacognition-portfolio.vercel.app/` returns 200. `https://affanndm.github.io` redirects to `http://affannadeem.me/` and returns 200. `https://affannadeem.me` failed TLS trust from this environment.
- Do not claim platform acceptance, school results, assignment grades, users, impact metrics, awards, or production readiness from this audit.

Evidence root URLs:

- Public repos API: `https://api.github.com/users/affanndm/repos?per_page=100&type=owner&sort=updated`
- GitHub profile: https://github.com/affanndm
- Owned repos page: https://github.com/affanndm?tab=repositories

## Recommended Tier Summary

- `English-Metacognition-Portfolio`: Lab / polished school-facing web experiment. Good visual/frontend evidence, but keep assignment/reflection content private or generalized.
- `Solutions`: Lab / algorithms archive. Useful as evidence of practice and Python problem-solving, not a flagship case study.
- `Financial_Tracker`: Lab / early Python data-system exercise. Use only as learning-process evidence.
- `Recipe-Tracker`: Archive or omit until fixed. Public source contains unresolved merge-conflict markers.
- `affanndm.github.io`: Archive / previous portfolio placeholder only.
- `affanndm`: Profile README, not a project. Use only as a source of self-stated bio claims requiring confirmation.
- `AffanPortfolio`: Exclude from project list for now. Public repository is empty.

---

## affanndm/Solutions

Recommended tier: Lab, algorithms archive  
Ownership classification: Sole build / personal practice archive  
Repo: https://github.com/affanndm/Solutions  
Primary language: Python  
Public metadata: 2 stars, 0 forks, no releases, no deployments  
Created: 2026-01-13. Pushed: 2026-06-21.  
Commit evidence: 45 commits, all authored by `Affan Nadeem <nadeemaffan23@gmail.com>`.

What the project does:

- README describes a personal archive of competitive programming solutions for LeetCode, DMOJ, and Codeforces.
- Current public file tree shows Python solution files under `Leetcode/Easy` and `Leetcode/Medium`.
- Current tree does not show DMOJ or Codeforces directories/files, so avoid claiming those platforms beyond "README states" unless Affan confirms or external profiles are audited.

What the project/team built:

- A lightweight Python solution archive organized by problem difficulty.
- Current final files include solutions for problems such as Two Sum, Valid Anagram, Group Anagrams, Roman to Integer, Majority Element, Remove Element, Sort the Students by Their Kth Score, and Maximum Ascending Subarray Sum.
- No public evidence of a team or outside contributors.

What Affan personally contributed:

- Authored all 45 commits in the public history.
- Created and reorganized Python solution files across `Leetcode/Easy` and `Leetcode/Medium`.
- Wrote/updated the README that describes the archive.

Files changed evidence:

- Current tracked files: `README.md`, 14 easy LeetCode Python files, and 2 medium LeetCode Python files.
- Historical changed paths include early root-level/renamed solution files, temporary files such as `Leetcode/Easy/asdf`, a `Solutions-main.zip`, and final organized paths under `Leetcode/Easy` and `Leetcode/Medium`.

Representative commit URLs:

- Latest solution add, `Maximum Ascending Subarray Sum.py`: https://github.com/affanndm/Solutions/commit/036c8ec7e62a947b37b5f1ac91e0d569c29facdb
- Added `Sort the Students by Their Kth Score.py`: https://github.com/affanndm/Solutions/commit/1f92b007965ba9db8780ff069271ffed033c4daf
- Added `Two Sum.py`: https://github.com/affanndm/Solutions/commit/eb9963421968b0b6931b294cb966240c9a5cc902
- Implemented majority element: https://github.com/affanndm/Solutions/commit/b7cf6b90eb62ea903377a8c418f6b86b633e0cde

Safe portfolio use:

- "Python algorithms practice archive with public commit history across LeetCode-style problems."
- "Evidence of sustained algorithm practice from January to June 2026."

Missing or risky claims:

- `NEEDS_AFFAN_CONFIRMATION`: Whether solutions were accepted on LeetCode/DMOJ/Codeforces.
- `NEEDS_AFFAN_CONFIRMATION`: Any external profiles or contest rankings.
- Do not imply breadth across DMOJ/Codeforces from current GitHub files alone.

---

## affanndm/Financial_Tracker

Recommended tier: Lab, early Python data-system exercise  
Ownership classification: Likely sole build, pending alias confirmation  
Repo: https://github.com/affanndm/Financial_Tracker  
Primary language: Python  
Public metadata: 1 star, 0 forks, no releases, no deployments, no repo description, no live URL  
Created: 2025-08-10. Pushed: 2025-08-14.  
Commit evidence: 10 commits, all authored by `IdontReallyKnowWhat <nadeemaffan23@gmail.com>`.

What the project does:

- A command-line finance tracker that asks for user input, records transactions to CSV, creates category budgets, and calculates remaining budget by category.
- Uses CSV persistence through `Transaction_Records.csv` and `Budget_Records.csv`.
- Has a shared input-validation helper for numbers, text, and category options.

What the project/team built:

- `main.py`: menu flow for entering transactions, creating budgets, and checking remaining budget.
- `transactions.py`: `Transaction` class and CSV write logic.
- `budget.py`: `Budget` class, budget storage, and remaining-budget calculation.
- `uni_val.py`: reusable input validation helper.
- No public evidence of a multi-person team.

What Affan personally contributed:

- Repository is owned by `affanndm`; every public commit uses the same email shown in the profile README, but with the local git author name `IdontReallyKnowWhat`.
- Likely Affan authored the CLI, CSV storage classes, and input-validation helper.
- Confirm the alias before using "Affan authored every commit" in polished copy.

Files changed evidence:

- Current tracked files include `main.py`, `budget.py`, `transactions.py`, `uni_val.py`, `Budget_Records.csv`, `Transaction_Records.csv`, `.gitattributes`, and committed `__pycache__` files.
- Recent commits touched `budget.py`, `main.py`, `transactions.py`, `uni_val.py`, CSV files, and pycache artifacts.

Representative commit URLs:

- Latest syntax/logic fix in budget and main: https://github.com/affanndm/Financial_Tracker/commit/17a5b11e7e26b0fd3af316e5e06024704069986c
- Multi-file progress commit: https://github.com/affanndm/Financial_Tracker/commit/0f8f53943a399a01502b77c91358c64a75b94bf4
- Budget/transactions/input validation work: https://github.com/affanndm/Financial_Tracker/commit/700a10474b285fa641bd5ae927b1758e0cf1869e

Safe portfolio use:

- "Early Python CLI project using classes, CSV persistence, and input validation to track transactions and budgets."
- Use as a lab item showing learning progression, not as a polished finance product.

Missing or risky claims:

- `NEEDS_AFFAN_CONFIRMATION`: Confirm `IdontReallyKnowWhat <nadeemaffan23@gmail.com>` is Affan's git author identity.
- No README in current tree and no live demo.
- Current source has likely runtime issues, including `Budget(category)` being called with one argument where the constructor expects `category, monthly_limit`; do not claim production-ready behavior.
- Do not claim financial analysis, charts, authentication, database usage, or real banking integration.

---

## affanndm/Recipe-Tracker

Recommended tier: Archive or omit until fixed  
Ownership classification: Sole build / learning OOP exercise  
Repo: https://github.com/affanndm/Recipe-Tracker  
Primary language: Python  
Public metadata: 1 star, 0 forks, no releases, no deployments, no live URL  
Description: "A quick project I am working on to develop my OOP skills."  
Created: 2025-09-06. Pushed: 2025-11-16.  
Commit evidence: 6 commits, all authored by `Affan Nadeem <nadeemaffan23@gmail.com>`.

What the project does:

- Intended as a command-line recipe tracker.
- Menu supports creating a recipe, printing all recipes, and finding recipes by keyword.
- Intended storage/search flow uses CSV, pandas, recipe objects, shopping/search helpers, and validation helpers.

What the project/team built:

- `main.py`: menu prompts for create/list/search actions.
- `recipe.py`: `Recipe` class plus recipe storage/display logic.
- `shopping.py`: recipe search and display helpers.
- `validation.py`: ingredient/category and prep-time validation helpers.
- `config.py`: ingredient CSV loading.
- No public evidence of a team.

What Affan personally contributed:

- Authored all 6 public commits.
- Built the OOP structure around recipe, shopping/search, validation, and configuration modules.
- Added README and CSV-backed ingredient data.

Files changed evidence:

- Current tracked files include `README.md`, `main.py`, `recipe.py`, `shopping.py`, `validation.py`, `config.py`, `Ingredients.csv`, `.gitattributes`, and committed pycache.
- Recent commits touched `main.py`, `recipe.py`, `shopping.py`, `validation.py`, `config.py`, and `Ingredients.csv`.

Representative commit URLs:

- Latest commit: https://github.com/affanndm/Recipe-Tracker/commit/fec2698b62c57075aa1993faff6d6e7c0a21bd72
- Main/validation fix commit: https://github.com/affanndm/Recipe-Tracker/commit/6e182790bc82ea8defbe65b6acc6d7bd428ce438
- Validation and recipe progress: https://github.com/affanndm/Recipe-Tracker/commit/f32c155ba240a80ce2b213a4aabeee23342b7894
- Recipe/validation early work: https://github.com/affanndm/Recipe-Tracker/commit/dbad3eaa56b104a3805d23a28531aadeee5097b7

Important limitation:

- Public source currently contains unresolved git merge-conflict markers in `config.py`, `recipe.py`, `shopping.py`, and `validation.py`.
- A public issue, `Recipe Tracker source contains unresolved merge conflict markers` (#1), was opened on 2026-07-15 to document the broken source state.
- Raw evidence:
  - https://raw.githubusercontent.com/affanndm/Recipe-Tracker/main/config.py
  - https://raw.githubusercontent.com/affanndm/Recipe-Tracker/main/recipe.py
  - https://raw.githubusercontent.com/affanndm/Recipe-Tracker/main/shopping.py
  - https://raw.githubusercontent.com/affanndm/Recipe-Tracker/main/validation.py

Safe portfolio use:

- Best treated as an archive item showing early OOP practice only if the current broken state is acknowledged or fixed.
- Avoid including screenshots or product claims until merge conflicts are resolved.

Missing or risky claims:

- Do not claim the app currently runs.
- Do not claim meal planning, nutrition, grocery-list automation, or data-quality features beyond what source shows.
- Evidence issue: https://github.com/affanndm/Recipe-Tracker/issues/1

---

## affanndm/English-Metacognition-Portfolio

Recommended tier: Lab / polished school-facing web experiment  
Ownership classification: Sole build, school assignment context  
Repo: https://github.com/affanndm/English-Metacognition-Portfolio  
Live URL: https://english-metacognition-portfolio.vercel.app/  
Primary languages: TypeScript, CSS, JavaScript, HTML  
Public metadata: 1 star, 0 forks, Apache-2.0 license, no releases, 7 public deployment records  
Created: 2026-05-25. Pushed: 2026-06-01.  
Commit evidence: 13 commits, all authored by `Affan Nadeem <nadeemaffan23@gmail.com>`.

What the project does:

- Interactive English metacognition portfolio for reading, writing, listening/note-taking, and speaking reflections.
- README describes a Vite, React, TypeScript, GSAP ScrollTrigger, and plain CSS app with a warm learning-archive design, section cards, and sliced-title scroll interaction.
- Live site returns 200 and has title `Affan's Metacognition Portfolio`.

What the project/team built:

- Vite/React/TypeScript app with routes for Home, Reading, Writing, Listening, and Speaking.
- Components include `Hero`, `SlicedTitle`, `ScrollDeconstructMenu`, `SectionCard`, `ReflectionPage`, `ArtifactCard`, `QuestionScene`, `ProgressRail`, `Header`, and reduced-motion aware interactions.
- Content model in `src/content/reflections.ts` defines sections, prompts, artifact slots, visuals, and question scaffolding.
- Repo includes tests (`src/App.test.tsx`, `src/content/reflections.test.ts`, `src/project-config.test.ts`), accessibility/design/editing docs, and an Agentation MCP config for development annotations.
- PR metadata shows four PRs, all opened by `affanndm` from `affanndm:feature/metacognition-portfolio` into `affanndm:main`; no public evidence of external contributors.

What Affan personally contributed:

- Authored all commits and opened/merged all visible PRs.
- Built the frontend structure, routing, content schema, scroll interaction, visual components, styling, tests, and documentation.
- Added or edited reflection-response files in PR #4 / commit `5b06f07...`; because this is school/reflection content, treat personal content carefully and do not reuse it as portfolio biography without Affan's consent.

Files changed evidence:

- Current tracked files include `README.md`, `package.json`, Vite/TypeScript configs, `index.html`, `public/assets/*`, many React components under `src/components`, pages under `src/pages`, content files under `src/content`, CSS under `src/styles`, tests, and docs.
- Notable changed files include `src/components/ScrollDeconstructMenu.tsx`, `src/components/SlicedTitle.tsx`, `src/components/ReflectionPage.tsx`, `src/content/reflections.ts`, `src/styles/globals.css`, `src/styles/animations.css`, and `src/styles/tokens.css`.

Representative commit URLs:

- Latest styling update: https://github.com/affanndm/English-Metacognition-Portfolio/commit/c1eaac4908516b2e3d2f503b62baabce34d7f8ec
- Design almost done: https://github.com/affanndm/English-Metacognition-Portfolio/commit/f2f595f1492a8b5aa406c215e50ba318207aad1d
- Answers included: https://github.com/affanndm/English-Metacognition-Portfolio/commit/5b06f07ce8b4b92d460e91421a333128ad97b6d9
- Design secondary finalization: https://github.com/affanndm/English-Metacognition-Portfolio/commit/ef96587194f0be6ec44bedefcff1ac61eb68837c

Pull request URLs:

- PR #1 Initial design: https://github.com/affanndm/English-Metacognition-Portfolio/pull/1
- PR #2 2nd commit: https://github.com/affanndm/English-Metacognition-Portfolio/pull/2
- PR #3 Design secondary finalization: https://github.com/affanndm/English-Metacognition-Portfolio/pull/3
- PR #4 Answers included: https://github.com/affanndm/English-Metacognition-Portfolio/pull/4

Deployment/live evidence:

- Repo homepage: https://english-metacognition-portfolio.vercel.app
- Live page returned 200 with title `Affan's Metacognition Portfolio`.
- Latest public deployment record observed for commit `c1eaac4908516b2e3d2f503b62baabce34d7f8ec`: `https://api.github.com/repos/affanndm/English-Metacognition-Portfolio/deployments/4890692094`

Safe portfolio use:

- "Built an interactive React/TypeScript school portfolio with scroll-based section navigation, structured reflection content, accessible fallbacks, and Vite/Vitest tooling."
- "A lab piece showing frontend interaction design, content modeling, and accessibility-aware implementation."

Missing or risky claims:

- `NEEDS_AFFAN_CONFIRMATION`: Whether this should be public in a professional portfolio, since it may include school reflection content.
- Do not claim teacher/grade outcome.
- Do not quote or summarize personal reflection answers as biography.

---

## affanndm/affanndm.github.io

Recommended tier: Archive / previous portfolio placeholder  
Ownership classification: Sole repo / static GitHub Pages placeholder  
Repo: https://github.com/affanndm/affanndm.github.io  
Live URLs checked: `https://affanndm.github.io`, `http://affannadeem.me/`, `https://affannadeem.me`  
Primary language: none detected by GitHub language API  
Public metadata: 0 stars, 0 forks, no releases, 1 public GitHub Pages deployment record  
Created: 2026-06-17. Pushed: 2026-06-17.  
Commit evidence: 2 commits, both authored by `Affan Nadeem <nadeemaffan23@gmail.com>`.

What the project does:

- Minimal GitHub Pages repository with `README.md` and a `CNAME` file for `affannadeem.me`.
- Live GitHub Pages output renders a default Jekyll page titled `affanndm.github.io | Affan Nadeem`.

What the project/team built:

- A placeholder/static GitHub Pages site and custom-domain configuration.
- No substantial portfolio implementation is visible in the repo.
- No public evidence of a team.

What Affan personally contributed:

- Authored the initial commit and added the CNAME file.

Files changed evidence:

- Current tracked files: `README.md`, `CNAME`.

Representative commit URLs:

- CNAME/custom domain commit: https://github.com/affanndm/affanndm.github.io/commit/e6f0de5af8842af1b02e8b73abc666823e085500
- Initial commit: https://github.com/affanndm/affanndm.github.io/commit/833a2d7d426d29c5770f375730b8069c4f665414

Deployment/live evidence:

- Public deployment record: `https://api.github.com/repos/affanndm/affanndm.github.io/deployments/5097809568`
- `https://affanndm.github.io` returned 200 and redirected to `http://affannadeem.me/`.
- `http://affannadeem.me/` returned 200.
- `https://affannadeem.me` failed TLS trust from this environment.

Safe portfolio use:

- "Previous GitHub Pages/custom-domain placeholder."
- Use as archive only, not as evidence of a built portfolio experience.

Missing or risky claims:

- Do not claim a complete previous portfolio based on this repo.
- `NEEDS_AFFAN_CONFIRMATION`: Whether the custom domain and HTTPS configuration are still intended to be active.

---

## affanndm/affanndm

Recommended tier: Not a project; profile/source-of-claims only  
Ownership classification: GitHub profile README  
Repo: https://github.com/affanndm/affanndm  
Primary language: none detected  
Public metadata: 2 stars, 0 forks, no releases, no deployments  
Created: 2026-01-13. Pushed: 2026-02-01.  
Commit evidence: 8 commits, all authored by `Affan Nadeem <nadeemaffan23@gmail.com>`.

What the project does:

- GitHub profile README repository.
- README self-describes Affan as a high school student interested in Python, computational biology, simulations, gene network models, algorithms, science fair research, AI, data science, and biotech entrepreneurship.
- README includes badge-style tech stack and GitHub stats widgets.

What the project/team built:

- A GitHub profile README with external image/widgets and social/email links.
- No software product or app.
- No public evidence of a team.

What Affan personally contributed:

- Authored all 8 commits, all changing `README.md`.
- Iterated profile content, badges, stats widgets, and social/contact links.

Files changed evidence:

- Current tracked file: `README.md`.

Representative commit URLs:

- Latest profile README update: https://github.com/affanndm/affanndm/commit/90995a2a28b69300aecddca2d7f60b68e5519c20
- Personal details/stats update: https://github.com/affanndm/affanndm/commit/d97e96bf8360ae09cb6c5ac655bdee46724a7b7a
- Initial commit: https://github.com/affanndm/affanndm/commit/514681bd84ff4dcb11ab258268f7451aae399281

Safe portfolio use:

- Use only as a lead for claims to verify with Affan, not as final biography.

Missing or risky claims:

- `NEEDS_AFFAN_CONFIRMATION`: High school status, current work on gene network models, algorithms, science fair research, and biotech entrepreneurship.
- Do not import the GitHub stats widgets or contribution calendar into the portfolio; `SPEC.md` prohibits a GitHub contribution graph and generic stats framing.

---

## affanndm/AffanPortfolio

Recommended tier: Exclude from project list for now  
Ownership classification: Current portfolio repository, public but empty on GitHub  
Repo: https://github.com/affanndm/AffanPortfolio  
Primary language: none detected  
Public metadata: 0 stars, 0 forks, no releases, no deployments  
Created: 2026-07-15. Pushed: 2026-07-15.  
Commit evidence: public clone reports an empty repository with no commits.

What the project does:

- Public GitHub repository exists for this portfolio project, but the remote public repo is empty at audit time.

What the project/team built:

- No public files or commits visible.
- Local workspace contains planning/spec files, but those are not public GitHub evidence for a portfolio project claim.

What Affan personally contributed:

- No public commits to attribute yet.

Files changed evidence:

- None in public GitHub history.

Safe portfolio use:

- Do not list as a portfolio project.
- It can remain the working repository for the current portfolio build.

Missing or risky claims:

- Do not claim this repo contains the portfolio implementation until public commits exist.
