# Status

## Current Milestone

Milestone 9: identity-first creative correction and local regression review.

Affan rejected the first production art direction as report-like and insufficiently personal. A materially new homepage is implemented locally but has not been deployed. The currently public site at `https://www.affannadeem.me` remains the earlier production version until Affan explicitly approves another production deployment.

## Completed Work

- Reinspected the public HTML/runtime evidence for Filippo Ruffini, Tigran Azatyan, and Abhijit Rout on 2026-07-16, including framework markers, public modules, media counts, responsive variants, font systems, and motion stacks.
- Rebuilt the homepage hierarchy around an unmistakable `AFFAN NADEEM` hero, media-first flagship projects, a dense irregular Lab, first-person About copy, and a direct closing invitation.
- Added five distinct visual scenes rather than one continuous dark report surface.
- Added isolated GSAP ScrollTrigger behavior for a desktop pinned-work narrative and a contrast-compliant scrubbed About statement, with complete reduced-motion bypass.
- Removed the homepage's numbered method panel, third-person analyst framing, metadata-heavy project opening, and spreadsheet-like Lab rows.

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
- Fixed the production `NOT_FOUND` incident by correcting the Vercel framework preset from `Other` to `Next.js`, using the Next.js default output instead of `public/`, and deploying the corrected build.
- Corrected the custom-domain mismatch from `affanndm.me` to `affannadeem.me`; the apex now redirects to canonical `www` and all public routes return 200.

## Work In Progress

- Await Affan's visual review of the new local direction before any deployment decision.

## Next Action

- Review the new local homepage composition and iterate on concrete visual feedback.
- Provide the remaining personal media and confirmation inputs when available; a real portrait and richer project recordings would further improve the authored depth.
- Continue requiring explicit approval for future production deployments or domain changes.

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

Identity-first creative-correction candidate on 2026-07-16:

- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm run build`: pass using Next.js 16.2.10 with Webpack.
- `npm test`: 49/49 pass in Chromium against a clean local production server at `http://127.0.0.1:3005`.
- Axe scans: homepage, both case studies, Lab, and design lab pass with color contrast enabled.
- Responsive checks: five routes pass at 390, 768, 1024, 1440, and 1920px with no horizontal overflow or console errors.
- Motion checks: keyboard ticker controls, reduced-motion static state, fine-pointer canvas activation, desktop work pinning, and accessible About reveal fallbacks are implemented; the existing automated motion lifecycle checks pass.
- Manual screenshot review completed for the 1440×1000 hero, full desktop page, and 390×844 mobile composition.
- Mobile Lighthouse after lazy desktop-only GSAP loading: Performance 94, Accessibility 100, SEO 100, LCP 2.7s, TBT 160ms, CLS 0, Speed Index 2.3s.

Earlier production candidate on 2026-07-15:

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
- The currently deployed production build has no GSAP, Lenis, Three.js, Lottie, Rive, video embed, analytics, or other third-party runtime.
- The 2026-07-16 local creative-correction candidate adds GSAP and `@gsap/react` only for two homepage ScrollTrigger sequences. An initial static import scored 83 on mobile Lighthouse, so the motion code was split into a lazy desktop-only chunk. The corrected candidate scored 94 Performance / 100 Accessibility / 100 SEO with 160ms TBT and zero CLS in the retained mobile sample.
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
- Final checkpoint commit: `4fc4762` (`Polish evidence-led portfolio experience`).
- Current preview deployment id: `dpl_2wuLSCQtT8xWmqzkoSUWcbyGgbnV`.
- Current preview URL: `https://affan-portfolio-lqhfx50ve-affan-s-projects-45c33b7e.vercel.app`.
- Vercel inspection confirms `target: preview` and `status: Ready`.
- Unauthenticated HTTP requests return `200 Login - Vercel`, so the preview remains protected by Vercel access controls.
- Deployment incident: earlier `npx vercel deploy --yes` created production deployment `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb` and aliases including `https://affanndm.me` unexpectedly.
- Incident resolved on 2026-07-16 after Affan explicitly requested the deployed domain be fixed.
- Current production deployment: `dpl_Ek21HQ6vC79L2MHFuZdTV4zdxbKd`, Ready.
- Canonical production URL: `https://www.affannadeem.me`.
- `https://affannadeem.me` returns a permanent redirect to the canonical `www` host.
- Verified 200 responses: `/`, `/projects/vantage`, `/projects/grnalytics`, `/lab`, `/robots.txt`, and `/sitemap.xml`.
- The identity-first creative correction is local only and has not been deployed or promoted to production.
