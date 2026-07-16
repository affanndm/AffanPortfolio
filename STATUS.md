# Status

## Current Milestone

Milestone 12: purposeful Lenis, GSAP, and React Bits motion integration.

The approved first-sequence branch now combines desktop Lenis interpolation, GSAP SplitText/ScrollTrigger choreography, and two adapted React Bits interactions. The stack is intentionally limited to moments that clarify identity, project entry, and scroll continuity. It is committed only after regression and performance validation; production remains unchanged until Affan explicitly approves deployment.

## Completed Work

- Integrated Lenis with the existing lazy desktop GSAP island, including ScrollTrigger synchronization, anchor handling, drawer pause/resume, protected drawer scrolling, cleanup, and native mobile/reduced-motion fallbacks.
- Added GSAP SplitText choreography to the `AFFAN NADEEM` entrance without changing the semantic heading or static no-JavaScript composition.
- Adapted React Bits Magnet for the project opener and ScrollFloat for the Vantage closing statement; preserved whole-word wrapping and real screen-reader text.
- Verified Filippo's publicly delivered custom runtime in detail: Three.js GLTF loading, front/back render targets for refraction, 32×32 pointer-distortion texture, continuously rotating hero geometry, Lenis easing, scroll-tracked 3D positioning, and hover/tap project video texture swapping.
- Captured and inspected current desktop states for Filippo Ruffini, Tigran Azatyan, and Abhijit Rout, including their opening objects, color systems, project entry patterns, and long-page composition.
- Rebuilt the hero around a two-line `AFFAN NADEEM` field and an Affan-specific DOM/CSS signal sculpture with coral/acid geometry, real Vantage texture, GSAP load choreography, scroll depth, and fine-pointer response.
- Replaced the pale selected-work chapter with a black stage and saturated sticky project posters; added scroll-linked scale/stack continuity without lowering text opacity or contrast.
- Added an accessible native-dialog side-stage for each flagship project, with media, verified ownership, discipline, stack, full case-study entry, source evidence, Escape/backdrop close, and reduced-motion behavior.
- Reart-directed the entire homepage into black, hot coral, acid signal, and project-cyan chapters, including a moving Lab rail, geometric About portrait, scrubbed statement, orbit motion, and monumental coral close.
- Reworked mobile intentionally: no hover dependency, resolved sculpture state, non-sticky project posters, full-width project drawer, one-column Lab, and persistent role/actions.

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
- The previous candidate's static signal network and progressive Canvas 2D enhancement are retained only in history/design-lab; the public hero now uses the reference-led signal sculpture.
- Kept the public shell server rendered. GSAP remains a lazy desktop-only island, while navigation, ticker, and project drawers use small native progressive-enhancement scripts; design-lab React canvas experiments remain isolated from public routes.
- Chose Webpack for deterministic Next.js 16 production builds after measured mobile performance showed substantially lower runtime cost than the default Turbopack build.
- Completed adversarial design, credibility, accessibility, motion, and performance reviews and resolved all blocker/high code findings.
- Fixed the production `NOT_FOUND` incident by correcting the Vercel framework preset from `Other` to `Next.js`, using the Next.js default output instead of `public/`, and deploying the corrected build.
- Corrected the custom-domain mismatch from `affanndm.me` to `affannadeem.me`; the apex now redirects to canonical `www` and all public routes return 200.

## Work In Progress

- Await Affan's visual review of the enhanced first sequence before any deployment decision.

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

Lenis / GSAP / React Bits integration on 2026-07-16:

- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm run build`: pass using Next.js 16.2.10 with Webpack.
- `npm test`: 72/72 pass in Chromium.
- Live runtime checks: desktop SplitText and Lenis active with no console errors; mobile and reduced-motion profiles load neither runtime; project dialog opens, closes, and restores scroll state.
- Mobile Lighthouse: Performance 96, Accessibility 100, Best Practices 100, SEO 100, LCP 2.5s, TBT 120ms, CLS 0, Speed Index 2.4s.
- Final visual review confirms the ScrollFloat statement wraps only between words.

Filippo-led full-redesign candidate on 2026-07-16:

- `npm run typecheck`: pass.
- `npm run lint`: pass.
- `npm run build`: pass using Next.js 16.2.10 with Webpack.
- `npm test`: 50/50 pass in Chromium against a clean local production server at `http://127.0.0.1:3010`.
- Axe scans: homepage, both case studies, Lab, and design lab pass with color contrast enabled.
- Responsive checks: five routes pass at 390, 768, 1024, 1440, and 1920px with no horizontal overflow or console errors.
- Motion checks: keyboard ticker controls, reduced-motion static state, fine-pointer sculpture response, project side-stage open/Escape close, desktop work pinning/stacking, and accessible About reveal fallbacks pass.
- Manual screenshot review completed for the 1440×1000 hero, selected work, project side-stage, full desktop page, and 390×844 mobile composition.
- Mobile Lighthouse after below-fold paint deferral and server-rendered drawer runtime: Performance 91, Accessibility 96, SEO 100, LCP 2.7s, TBT 250ms, CLS 0, Speed Index 2.5s.

Earlier identity-first creative-correction candidate on 2026-07-16:

- `npm test`: 49/49 pass in Chromium.
- Mobile Lighthouse: Performance 94, Accessibility 100, SEO 100, LCP 2.7s, TBT 160ms, CLS 0, Speed Index 2.3s.

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

Filippo-led local candidate on 2026-07-16:

| Profile | Performance | Accessibility | SEO | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Mobile | 91 | 96 | 100 | 2.7s | 250ms | 0 | 2.5s |

- The hero image is optimized by Next.js and the GSAP/ScrollTrigger bundle is not requested on mobile or under reduced motion.
- The project side-stage uses native dialog behavior and a small inline runtime; it does not hydrate duplicated React media trees.
- Below-fold mobile chapters use `content-visibility: auto` with intrinsic sizing and a print override, reducing initial style/layout work without hiding content during normal scrolling.

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

## Filippo-Reference Review Gate — 2026-07-16

- Work is isolated on `filippo-visual-redesign` from checkpoint `91a688e`.
- Production mismatch verified: `www.affannadeem.me` points to Vercel deployment `dpl_Ek21HQ6vC79L2MHFuZdTV4zdxbKd`, created at 00:09:47 immediately after `abd9657`. Its visible copy matches the older evidence-led homepage, not the current repository branch.
- The linked Vercel project is `affan-portfolio` (`prj_u5CtgGKE2Hns4VDRCmnDxs45aoSA`). Project inspection exposes no Git production-branch connection; the current production deployment was created from the older local state.
- No domain, alias, production, or Vercel project setting was changed during this milestone.
- Homepage scope is intentionally limited to navigation, first viewport, hero-to-Vantage transition, first Vantage presentation, and the project-entry boundary.
- Three isolated hero studies now exist at `/design-lab/hero-a`, `/design-lab/hero-b`, and `/design-lab/hero-c`.
- Selected direction: C's typographic collision combined with B's real interface fragments. A remains documented as the alternate topology study.
- Required 390px and 1440px captures are saved under `qa/visual-review/`, including both prototypes and scroll-transition states.
- Typecheck, lint, and production build pass.
- Playwright: 71/71 tests pass across navigation, motion, side-stage, links, SEO, accessibility, and 390/768/1024/1440/1920 responsive coverage.
- Mobile Lighthouse: Performance 96, Accessibility 100, SEO 100, LCP 2.5s, TBT 110ms, CLS 0.
- Previous final static-intro baseline: Performance 91, Accessibility 100, SEO 100, LCP 2.62s, TBT 257ms. The restricted redesign improves performance by 5 points while adding the new choreography.
- Redesign checkpoint `29d156e` is committed and pushed to `origin/filippo-visual-redesign`.
- No production deployment occurred; the custom domain continues to show the older production deployment until Affan explicitly approves a promotion.
