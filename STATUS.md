# Status

## Current Milestone

Milestone 8: preview delivery and human review.

Milestones 0-7 are implemented and locally validated. The current site is an evidence-led Next.js portfolio with complete public routes, flagship case studies, a Lab index, design-system experiments, responsive motion fallbacks, and automated QA. Remaining work is limited to preview deployment, richer Affan-provided media and biography inputs, and an explicit decision about the earlier Vercel production-alias incident.

## Completed Work

- Created and worked on branch `portfolio-rebuild`; checkpoint commits `4077bcf` and `73e75be` preserve the architecture reset and initial preview.
- Replaced stale Framer platform architecture with Next.js App Router, React, strict TypeScript, GitHub source control, and Vercel hosting documentation.
- Confirmed Figma MCP availability. The specific Figma Make URL is still absent, so only its written interaction principles informed the dotted-bloom experiment.
- Audited seven Affan-owned public repositories, public pull requests, commits, and the known contribution-only Vantage and gRNAlytics repositories. Authenticated `gh` search remains unavailable because `gh` is not installed.
- Updated all required reference audits, project audits, claims ledger, and media requirements.
- Built `/design-lab` with the Signal Network, Editorial Project Reel, and Dotted Grid Bloom experiments; selected the Signal Network plus media-first evidence.
- Built `/`, `/projects/vantage`, `/projects/grnalytics`, `/lab`, 404, Open Graph image, robots, and sitemap routes.
- Added evidence-safe flagship case-study structure: Signal, Noise, System, My Contribution, Important Decisions, Product in Motion, Verified Outcome, Reflection, Evidence, Team and Credits, and Next Project.
- Added a verified Vantage deployment capture and a source-backed gRNAlytics pipeline visual. Public contributor handles are credited without inventing private roles.
- Added visible Lab ownership and status labels, project chronology, verified public email, GitHub, and LinkedIn contact links.
- Implemented a session-gated opening reveal, static signal network, pointer-triggered desktop Canvas 2D enhancement, pausable ticker, accessible mobile navigation, and complete reduced-motion/mobile fallbacks.
- Removed unnecessary animation dependencies. The public shell is server rendered and uses small native progressive-enhancement scripts; design-lab-only React canvas experiments remain isolated from public routes.
- Chose Webpack for deterministic Next.js 16 production builds after measured mobile performance showed substantially lower runtime cost than the default Turbopack build.
- Completed adversarial design, credibility, accessibility, motion, and performance reviews and resolved all blocker/high code findings.

## Work In Progress

- Create a fresh explicit Vercel preview from the final checkpoint.
- Smoke-check the resulting preview to the extent allowed by Vercel access protection.
- Await Affan's decision on the unintended existing production deployment/domain aliases.

## Next Action

- Commit the polished implementation and QA records.
- Run only `npx vercel deploy --target=preview --yes` for the final preview.
- Do not alter production aliases, promote a deployment, or change DNS without explicit approval.

## Blockers And Missing Human Inputs

- `gh` is unavailable, so authenticated cross-repository GitHub search has not been rerun.
- LinkedIn public access is restricted; detailed biography claims remain confirmation-gated.
- `NEEDS_AFFAN_CONFIRMATION`: resume PDF or public resume URL.
- `NEEDS_AFFAN_CONFIRMATION`: portrait or candid photography.
- `NEEDS_AFFAN_CONFIRMATION`: current collaboration availability.
- `NEEDS_AFFAN_CONFIRMATION`: preferred real names and roles for full team credits.
- `NEEDS_AFFAN_CONFIRMATION`: which current Vantage production features still derive from Affan's implementation after later refactors.
- `NEEDS_AFFAN_CONFIRMATION`: gRNAlytics scoring ownership, current run reliability, and biological interpretation boundaries.
- `NEEDS_AFFAN_CONFIRMATION`: Figma Make URL for direct reinspection.
- Richer project recordings, device captures, and a public resume remain listed in `content-audit/MEDIA_NEEDED.md`.
- Any rollback/removal of the unintended Vercel production aliases requires explicit approval.

## Test Results

Final local production candidate on 2026-07-15:

- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm audit --json`: pass, 0 vulnerabilities.
- `npm run build`: pass using Next.js 16.2.10 with Webpack.
- `npm test`: 49/49 pass in Chromium.
- Axe scans: homepage, both case studies, Lab, and design lab pass with color contrast enabled.
- Responsive checks: five routes pass at 390, 768, 1024, 1440, and 1920px with no horizontal overflow or console errors.
- Navigation: menu open/close, Escape focus return, and section selection pass.
- Motion: keyboard ticker controls, reduced-motion static state, and fine-pointer lazy canvas activation pass.
- SEO/link checks: metadata, Open Graph image, Twitter card, case-study structure, 404, robots/sitemap privacy, internal routes, external-link safety, and public email pass.

## Performance Results

Lighthouse against the local Webpack production server on 2026-07-15:

| Profile | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 91-95 | 100 | 100 | 100 | 2.48-2.62s | 151-257ms | 0 | 2.35-2.49s |
| Desktop | 100 | 100 | 100 | 100 | 0.58s | 9ms | 0 | 0.42s |

- Repeated final mobile samples were volatile on the Windows Chrome harness. The Performance target was met in all retained final samples, but LCP moved around the 2.5s target and is not claimed as consistently below it.
- One isolated temp-directory run fell to Performance 87/TBT 364ms while the same build's neighboring samples scored 91-95; it is retained as evidence of local harness instability rather than omitted.
- Lighthouse produced valid reports; on some Windows runs Chrome cleanup ended with an `EPERM` temp-directory warning after report generation.
- No GSAP, Lenis, Three.js, Lottie, Rive, video embed, analytics, or other third-party runtime is loaded.
- The desktop canvas does not initialize on mobile, coarse pointers, reduced motion, or before a qualifying pointer interaction.

## Accessibility Results

- Automated axe checks pass on all primary and design-lab routes.
- Semantic headings, skip navigation, accessible disclosure navigation, focus visibility, descriptive link names, persistent ownership labels, and nonessential-canvas hiding are implemented.
- The ticker has an explicit keyboard-operable pause control and pauses on hover, focus, offscreen state, and page visibility changes.
- Reduced-motion users receive the final opening state immediately, a static ticker, no public hero canvas, and near-zero CSS animation durations.
- Small-screen users also receive the resolved opening state immediately; the clip reveal is desktop-only.
- Manual visual review covered homepage, mobile menu, project pages, Lab, and design lab across required widths.

## Deployment Status

- Local production server: `http://127.0.0.1:3005` during final QA.
- Existing preview deployment id: `dpl_3Y5bcLcyCXL7dJJdYc5Q9PgyEecL`.
- Existing preview URL: `https://affan-portfolio-k7xtqgyhg-affan-s-projects-45c33b7e.vercel.app`.
- The existing preview is Ready but unauthenticated requests receive Vercel's login page because access protection is enabled.
- Deployment incident: earlier `npx vercel deploy --yes` created production deployment `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb` and aliases including `https://affanndm.me` unexpectedly.
- No rollback, alias removal, production promotion, or DNS change was performed after that incident.
- Production and custom-domain actions remain prohibited without explicit Affan approval.
