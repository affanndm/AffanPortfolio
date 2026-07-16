# Status

## Current Milestone

Milestone 8: Vercel Preview Preparation / Deployment Incident Review.

Milestones 0-7 have working deliverables in the repository. A Vercel preview deployment is ready. A separate earlier Vercel command unexpectedly created a production-target deployment despite no `--prod` flag, so remaining work includes explicit human decision on rollback/domain aliases and final confirmation cleanup.

## Completed Work

- Read the current user brief, `SPEC.md`, repository instructions, workspace state, and recent git history.
- Created working branch `portfolio-rebuild`.
- Confirmed existing commits were available and created architecture-reset checkpoint commit `4077bcf`.
- Confirmed `gh` is not installed; public GitHub API/search was used and the limitation is documented.
- Confirmed Figma MCP tooling is available, but no Figma Make URL is present in the repo or prompt.
- Removed stale `.framer-temp/` helper files.
- Renamed `framer-planning/` to `implementation-planning/` and revised the briefs for Next.js rather than Framer platform work.
- Updated `AGENTS.md`, `PLAN.md`, `SPEC.md`, `DECISIONS.md`, implementation-planning docs, and QA plans for the fixed Next.js/React/TypeScript + Vercel architecture.
- Refreshed public GitHub evidence:
  - 7 owned public repositories confirmed.
  - 14 public authored PRs confirmed.
  - Public commit search found 153 commits across audited repos.
  - Public non-owned contribution evidence remains limited to `crackle2k/vantage` and `MisplacedOrange/gRNAlytics`.
- Refreshed content audits and claims ledger with conservative publication status.
- Updated reference audits for Filippo Ruffini, Tigran Azatyan, and Abhijit Rout, including reviewer corrections around public technology evidence, semantic/accessibility risks, and implementation inference.
- Built the Next.js App Router foundation with TypeScript strict mode, ESLint, metadata, sitemap, robots, font loading, shared layout, CSS tokens, and typed content.
- Created `/design-lab` with design tokens, component specimens, and three hero experiments:
  - Signal Network.
  - Editorial Project Reel.
  - Dotted Grid Bloom.
- Selected the production direction: combine Signal Network with restrained media-first project evidence; keep Dotted Bloom as a secondary design-lab reference only.
- Built production routes:
  - `/`
  - `/design-lab`
  - `/lab`
  - `/projects/vantage`
  - `/projects/grnalytics`
  - `404`
  - `robots.txt`
  - `sitemap.xml`
- Built reusable components:
  - `Navigation`
  - `SignalField`
  - `DesktopSignalField`
  - `DottedBloom`
  - `SignalTicker`
  - `ProjectTrailer`
  - `OwnershipLabel`
  - `ProjectMetadata`
  - `MediaFrame`
- Removed GSAP after motion/performance review determined the current build only needs CSS and a pointer-triggered Canvas 2D enhancement.
- Converted navigation to server-rendered native disclosure behavior to reduce hydration cost.
- Added Playwright link, axe, navigation, and responsive smoke tests.
- Installed Playwright Chromium for local test execution.
- Started a local production server on `http://127.0.0.1:3000` for QA.
- Generated screenshots for home, project, Lab, and design-lab routes at 390, 768, 1024, 1440, and 1920px.
- Added `qa/FINAL_REVIEW.md`.
- Added `DEPLOYMENT.md`.
- Ran `npx vercel deploy --yes`; Vercel created production deployment `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb` and aliased `https://affanndm.me`. This was not intended and is documented as a deployment incident.
- Ran `npx vercel deploy --target=preview --yes`; Vercel created preview deployment `dpl_3Y5bcLcyCXL7dJJdYc5Q9PgyEecL`.

## Work In Progress

- Human decision on whether to rollback or alter the unintended Vercel production aliases.
- Optional preview redeploy using `npx vercel deploy --target=preview`.
- Next checkpoint commit for the implemented Next.js app.

## Next Action

- Wait for explicit approval before changing Vercel production/domain state.
- If approved, rollback or adjust aliases in Vercel.
- Commit the implemented Next.js app and QA docs.

## Blockers

- `gh` is unavailable, so authenticated GitHub contribution search cannot run through GitHub CLI unless it is installed or another authenticated path is provided.
- The Figma Make project URL is not present in the current prompt or repository, so the interaction reference cannot be reinspected yet.
- LinkedIn public access is restricted; background claims remain confirmation-gated.
- Final project media, resume, email, portrait, and exact public availability require Affan confirmation.
- Vercel production/domain rollback or alias changes require explicit Affan approval.

## Outstanding Human Inputs

- `NEEDS_AFFAN_CONFIRMATION`: Current final email address.
- `NEEDS_AFFAN_CONFIRMATION`: Resume PDF or public resume link.
- `NEEDS_AFFAN_CONFIRMATION`: Whether "available for collaboration" is currently true.
- `NEEDS_AFFAN_CONFIRMATION`: Portrait or candid image.
- `NEEDS_AFFAN_CONFIRMATION`: LinkedIn export or reviewed biography for final About chronology.
- `NEEDS_AFFAN_CONFIRMATION`: Vantage live URL and team credits.
- `NEEDS_AFFAN_CONFIRMATION`: Which current Vantage production features still derive from Affan's implementation after later refactors.
- `NEEDS_AFFAN_CONFIRMATION`: gRNAlytics team/context details, alias confirmation, scoring-logic ownership, and current run reliability.
- `NEEDS_AFFAN_CONFIRMATION`: Figma Make URL if that interaction reference should be reinspected.

## Test Results

- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm audit --json`: pass, 0 vulnerabilities after removing GSAP and keeping PostCSS override.
- `npm run build`: pass.
- `npm run test:links`: pass, 6 tests.
- `npm run test:a11y`: pass, 4 tests with color-contrast enabled.
- `npm run test:navigation`: pass, 1 test.
- `npm run test:responsive`: pass, 20 tests across 390, 768, 1024, 1440, and 1920px.

## Performance Results

- Production build passed.
- Lighthouse desktop homepage: Performance 100, Accessibility 100, Best Practices 100, SEO 100, LCP 0.7s, CLS 0, TBT 20ms, Speed Index 0.4s.
- Lighthouse mobile homepage: Accessibility 100, Best Practices 100, SEO 100. Performance was volatile because Lighthouse repeatedly failed during Chrome temp-directory cleanup with `EPERM` while many unrelated Chrome processes were active. Post-fix samples ranged from 89 down to 72; the latest recorded sample was Performance 72, LCP 3.4s, CLS 0, TBT 820ms, Speed Index 1.3s. Treat mobile Lighthouse as not yet meeting the 90 target until rerun in a clean CI/Vercel environment.
- Current performance choices:
  - No Framer platform runtime.
  - No GSAP/Lenis/Rive/Lottie/Three/Vimeo dependencies.
  - Static signal network renders immediately.
  - Canvas 2D enhancement loads only after first desktop pointer movement, and respects reduced motion.
  - `design-lab` is excluded from robots and public navigation.

## Accessibility Results

- Automated axe smoke tests pass after adding proper role/labels to diagram media frames.
- Implemented semantic headings, skip link, keyboard-accessible native disclosure navigation, visible focus styles, reduced-motion media queries, nonessential canvas hidden from assistive tech, and persistent project ownership labels.
- Manual visual review completed on representative homepage, mobile menu, Vantage mobile, and Lab mobile screenshots.

## Deployment Status

- Local production server: running at `http://127.0.0.1:3000`.
- Vercel deployment attempt: unintended production target created.
- Vercel deployment id: `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb`.
- Vercel deployment URL: `https://affan-portfolio-ptzswyuhf-affan-s-projects-45c33b7e.vercel.app`.
- Vercel aliases reported: `https://affanndm.me`, `https://affan-portfolio-ten.vercel.app`, `https://affan-portfolio-affan-s-projects-45c33b7e.vercel.app`, `https://affan-portfolio-nadeemaffan23-3638-affan-s-projects-45c33b7e.vercel.app`.
- Vercel preview deployment id: `dpl_3Y5bcLcyCXL7dJJdYc5Q9PgyEecL`.
- Vercel preview URL: `https://affan-portfolio-k7xtqgyhg-affan-s-projects-45c33b7e.vercel.app`.
- Preview access check: Vercel reports Ready/preview, but unauthenticated HTTP requests return `Login - Vercel`, so the preview is access-protected.
- No rollback, production promotion, or domain removal was performed after inspection.
- Production deployment and custom-domain changes remain prohibited without explicit approval.
