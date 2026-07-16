# Plan

Build Affan Nadeem's portfolio as an evidence-backed Next.js, React, and TypeScript site around the `Signal / Systems` concept. The work proceeds audit-first, then architecture reset, design-system exploration, motion prototypes, production implementation, responsive/accessibility/performance refinement, adversarial review, and Vercel preview preparation. Production publishing and custom-domain changes are out of scope until Affan explicitly approves them.

## Progress Snapshot

- Milestones 0-5: complete in the repository.
- Milestone 6: complete locally; 49 Playwright tests pass, Lighthouse category targets are met, and the remaining mobile LCP variance around 2.5s is documented.
- Milestone 7: complete; blocker/high review findings were resolved and remaining media/confirmation gaps are documented.
- Milestone 8: production deployment complete after explicit approval to fix `affannadeem.me`; the corrected Next.js deployment is Ready and public routes are verified.
- Milestone 9: identity-first creative correction implemented and fully validated locally after Affan rejected the first production art direction.
- Future production promotions and domain changes continue to require explicit approval. The creative correction has not been deployed.

## Scope

- In: repository reset, stale Framer removal, reference audits, GitHub contribution audit, LinkedIn/background analysis, Next.js app setup, `/design-lab`, hero experiments, homepage, project routes, Lab, About, Contact, local content model, media placeholders, accessibility/performance validation, preview deployment preparation.
- Out: Framer platform work, Figma Sites, production publishing, final-domain connection, paid hosting dependencies, fabricated claims or metrics, destructive git history changes.

## Milestones

### Milestone 9: Identity-First Creative Correction

Objective: Replace the evidence-report feel with an authored, personal, media-rich portfolio sequence informed by a renewed public-source inspection of Filippo Ruffini, Tigran, and Abhijit Rout.

Tasks:

- Reinspect live public HTML, runtime modules, media composition, responsive variants, and animation technology for all three references.
- Make `AFFAN NADEEM` the unmistakable first viewport identity.
- Replace the single dark report surface with distinct visual chapters.
- Present flagship project media before explanatory detail while preserving ownership boundaries.
- Turn the homepage Lab into a dense irregular field while keeping status and ownership readable.
- Convert homepage About copy from analyst voice to evidence-safe first person.
- Add only the structural scroll motion that materially improves continuity.
- Re-run lint, typecheck, build, full Playwright, accessibility, responsive, motion, navigation, link, and SEO checks.

Acceptance Criteria:

- The homepage cannot be mistaken for a project audit or résumé report.
- Affan's name is the dominant hero read on desktop and mobile.
- All public factual claims remain permitted by `CLAIMS_LEDGER.md`.
- Reduced motion, semantic headings, contrast, keyboard operation, and no-overflow tests still pass.
- No production deployment or domain change occurs without a new explicit approval.

### Milestone 0: Architecture Reset

Objective: Convert the project from a Framer-planning workspace into a Next.js production repository without discarding useful audit work.

Tasks:

- Read `SPEC.md`, `AGENTS.md`, project docs, workspace state, and git history.
- Create a working branch.
- Search for stale Framer platform references and revise or remove them.
- Remove obsolete Framer temp files.
- Preserve useful reference, content, QA, design, and motion planning artifacts.
- Record the architecture change in `DECISIONS.md`.

Dependencies:

- Local repository access.
- Existing git history.

Deliverables:

- Updated `AGENTS.md`, `PLAN.md`, `STATUS.md`, `DECISIONS.md`, and relevant planning docs.
- Platform-neutral implementation briefs.
- Clean stale-platform search results except for legitimate reference-site technology observations.

Acceptance Criteria:

- Repository architecture is clearly Next.js/React/TypeScript with Vercel hosting.
- Framer platform instructions are removed from active project guidance.
- Figma is documented as a reference/prototyping tool only.
- No production publishing or domain change occurs.

Validation:

- Run `rg -n -i "framer|@framer/agent|framer hosting|framer cms|framer project" .`.
- Confirm remaining matches are either historical/reference-site observations or explicitly allowed library references.
- Run `git status --short --branch`.

Risks:

- Some old audit files mention Framer because reference sites are publicly built on Framer; these should remain when they are factual observations, not project architecture.

### Milestone 1: Evidence And Reference Audit Refresh

Objective: Verify that current content and reference research remain accurate before production copy and case-study structure are written.

Tasks:

- Audit all public repositories owned by `affanndm`.
- Search for public contribution-only repositories, starting with Vantage and gRNAlytics.
- Use authenticated GitHub CLI/API if available; otherwise use public GitHub API/web evidence and document the limitation.
- Inspect public LinkedIn/profile evidence where accessible, without inventing private biography.
- Revisit Filippo Ruffini, Tigran, and Abhijit Rout reference sites where needed.
- Refresh `PROJECT_AUDIT.md`, `CLAIMS_LEDGER.md`, `MEDIA_NEEDED.md`, and `SYNTHESIS.md`.

Dependencies:

- Network access.
- GitHub and LinkedIn public accessibility.
- Optional GitHub authentication.

Deliverables:

- Verified contribution and project hierarchy.
- Updated claims ledger and media needs.
- Updated reference synthesis if sites changed materially.
- Status notes for any authentication limits.

Acceptance Criteria:

- Every public project claim has evidence status.
- Contribution-only work separates team output from Affan's personal contributions.
- Unverified personal facts remain marked `NEEDS_AFFAN_CONFIRMATION`.
- Reference analyses separate observed behavior, public technology evidence, and inference.

Validation:

- Cross-check project copy candidates against commits, PRs, repository files, and the claims ledger.
- Document unavailable authenticated searches in `STATUS.md` and `DECISIONS.md`.

Risks:

- LinkedIn may restrict public access.
- `gh` may remain unavailable.
- Some project media or private role details may require Affan confirmation.

### Milestone 2: Next.js Foundation

Objective: Create a maintainable production app foundation before building the full homepage.

Tasks:

- Initialize Next.js App Router with React, TypeScript strict mode, ESLint, and production build scripts.
- Add global metadata, robots/sitemap strategy, font loading, CSS tokens, and base layout.
- Define typed local content for projects, lab items, claims, navigation, and media placeholders.
- Establish semantic layout, skip link, focus styles, and reduced-motion utilities.
- Document dependency choices in `DECISIONS.md`.

Dependencies:

- Milestones 0 and 1 sufficiently complete.
- Node/npm availability.

Deliverables:

- Next.js app in the repository.
- Base routes and shared layout.
- Typed content model.
- Initial lint/build configuration.

Acceptance Criteria:

- `npm run build` succeeds once the foundation is complete.
- TypeScript strict mode is enabled.
- No Framer platform package or workflow is introduced.
- Public copy does not include unresolved placeholders as final content.

Validation:

- Run install, lint, typecheck, and production build.
- Inspect generated routes locally.

Risks:

- Network/package install failures.
- Existing repo lacks app code, so initial setup is a large diff.

### Milestone 3: `/design-lab` And Design System

Objective: Establish the visual system and interaction grammar before broad homepage implementation.

Tasks:

- Build hidden `/design-lab` route.
- Demonstrate color, typography, grids, spacing, rules, buttons, links, navigation, ownership labels, metadata, media frames, focus states, hover states, reduced-motion variants, and motion timing.
- Avoid generic AI patterns and repeated section scaffolding.
- Verify contrast and mobile wrapping.

Dependencies:

- Next.js foundation.
- Reference synthesis and content audit.

Deliverables:

- `/design-lab` route.
- Reusable CSS tokens and early component primitives.
- Notes in `STATUS.md`.

Acceptance Criteria:

- Design system feels specific to Signal / Systems.
- Ownership and evidence patterns are treated as core UI.
- No generic SaaS cards, gradient blobs, skill bars, or template grids.
- The route is excluded from public navigation.

Validation:

- Browser screenshots at 390, 768, 1024, 1440, and 1920px.
- Keyboard/focus and reduced-motion checks.

Risks:

- Typography and dark editorial styling can drift into saturated AI editorial patterns unless project media/evidence and signal logic drive the system.

### Milestone 4: Hero Experiments

Objective: Compare three isolated hero directions before selecting the production homepage system.

Tasks:

- Build Experiment 1: Signal Network.
- Build Experiment 2: Editorial Project Reel.
- Build Experiment 3: Dotted Grid Bloom inspired only in principle by the Figma Make reference.
- Evaluate originality, relevance, visual impact, performance, mobile behavior, accessibility, support for the rest of the site, and resemblance risk.
- Select or combine the strongest direction and record the decision.

Dependencies:

- `/design-lab`.
- Figma Make link if available; otherwise use the brief's written description and mark the missing link.

Deliverables:

- Three `/design-lab` hero experiments.
- Decision entry selecting the production direction.

Acceptance Criteria:

- Each experiment has desktop, mobile, and reduced-motion states.
- Interactions are purposeful and do not block content.
- The selected direction is original and evidence-aligned.

Validation:

- Visual inspection and screenshots across required breakpoints.
- Performance sanity check for canvas/animation loops.

Risks:

- Figma reference may remain unavailable.
- Canvas effects can exceed mobile/performance budgets.

### Milestone 5: Production Website Implementation

Objective: Build the actual portfolio experience with accurate content, original art direction, and purposeful motion.

Tasks:

- Build homepage sections: opening transition, hero, signal field, signal strip, Selected Work, The Lab, About, and Contact.
- Build flagship project routes for Vantage and gRNAlytics.
- Build Lab/archive route or section for smaller work.
- Build reusable components: navigation, media frame, ownership label, project metadata, signal ticker, project trailer, case-study section, reduced-motion utilities, and 404 page.
- Use verified claims only; keep unresolved facts out of public copy or clearly marked in non-public planning docs.
- Add meaningful placeholders for missing media and track them in `MEDIA_NEEDED.md`.

Dependencies:

- Milestones 1-4 complete enough to support copy and direction.
- Project media where available.

Deliverables:

- Complete Next.js site routes.
- Accurate local content.
- Responsive layouts.
- Purposeful advanced motion with fallbacks.

Acceptance Criteria:

- Team-project ownership is visible before case-study entry.
- Public pages contain no unsupported metrics, awards, or biological validity claims.
- Mobile layouts are intentionally composed.
- Reduced-motion mode remains complete.

Validation:

- Local browser review.
- Lint/typecheck/build.
- Initial accessibility and responsive checks.

Risks:

- Missing media and personal confirmations may require placeholders.

### Milestone 6: Testing, Accessibility, And Performance

Objective: Make the site robust enough for preview review.

Tasks:

- Test homepage, project routes, Lab, About, Contact links, navigation, mobile menu, keyboard operation, reduced motion, external links, 404 page, console errors, hydration errors, and animation cleanup.
- Run TypeScript, ESLint, production build, Playwright where useful, axe/accessibility checks, Lighthouse, and link checking where available.
- Optimize fonts, images, media, animation loops, JavaScript bundles, and route loading.
- Record results in `STATUS.md`.

Dependencies:

- Production implementation.

Deliverables:

- Passing local build.
- Test and QA results.
- Performance and accessibility notes.
- Fixed blocker/high issues.

Acceptance Criteria:

- No horizontal overflow at 390, 768, 1024, 1440, or 1920px.
- Keyboard navigation and visible focus pass manual review.
- Reduced motion disables nonessential motion.
- Lighthouse and Core Web Vitals targets are met or documented with attempted fixes.

Validation:

- Automated command outputs.
- Browser screenshots and manual QA notes.

Risks:

- Safari/iOS/Android validation may require external device testing.

### Milestone 7: Adversarial Review

Objective: Stress-test the final candidate for design, credibility, accessibility, performance, and originality failures.

Tasks:

- Review for AI-generated design patterns, similarity to references, misleading ownership language, unsupported claims, hierarchy weaknesses, repetitive copy, mobile compromises, broken links, placeholders, excessive animation, dependency creep, and performance regressions.
- Resolve all blocker and high-priority findings.
- Document remaining limitations.

Dependencies:

- Milestone 6 candidate build.

Deliverables:

- Final review notes in `STATUS.md` or QA artifact.
- Resolved findings.

Acceptance Criteria:

- No blocker/high credibility, accessibility, mobile, or performance issue remains unresolved.
- Any remaining placeholders or unknowns are explicit.

Validation:

- Re-test exact failing routes, breakpoints, and interactions after fixes.

Risks:

- Some items may require Affan-provided media or confirmation.

### Milestone 8: Vercel Preview Preparation

Objective: Prepare and deploy a preview when authentication permits, without publishing production or connecting the custom domain.

Tasks:

- Add Vercel-ready build configuration and deployment documentation.
- Configure SEO metadata, Open Graph image strategy, sitemap/robots, and redirects where needed.
- Attempt `npx vercel` preview deployment if authentication is available.
- Document production deployment and custom-domain connection instructions without performing them.

Dependencies:

- Passing local production build.
- Vercel authentication.

Deliverables:

- Vercel preview URL when permitted.
- Deployment documentation.
- Exact custom-domain connection steps.
- Final completion report.

Acceptance Criteria:

- Preview deploys successfully or authentication blocker is documented.
- Production deployment is not promoted.
- Custom domain is not connected.

Validation:

- Inspect preview URL if available.
- Re-run smoke checks against preview.

Risks:

- Vercel login may require human action.
- Preview deployment may expose placeholders if not gated; block or document before sharing.

### Milestone 10: Filippo-Led Full Visual Redesign

Objective: Replace the rejected identity-first candidate with an unmistakably authored, motion-rich portfolio led by the interaction and composition qualities Affan approved in Filippo Ruffini's site.

Tasks:

- Reinspect all three live references and their publicly delivered source/runtime evidence.
- Recompose the hero around monumental `AFFAN NADEEM` typography and a persistent responsive signal object.
- Replace neutral report-like work treatment with saturated, stacked project posters.
- Add an accessible right-side project preview stage before the full evidence route.
- Expand GSAP choreography across hero depth, project stacking, Lab continuity, About reveal, and contact exit while preserving reduced-motion fallbacks.
- Update reference audits, visual system, decision history, status, and motion tests.
- Validate production build, responsive behavior, accessibility, and the drawer interaction locally.

Status: implementation complete; final regression and visual review in progress. No deployment is authorized by this milestone.

### Milestone 11: Restricted First-Sequence Rebuild

Objective: Prove one exceptional sequence before rebuilding the remaining homepage.

- [x] Preserve checkpoint `91a688e` on a dedicated branch.
- [x] Identify the production mismatch without changing domain settings.
- [x] Inspect Filippo's delivered grid, palette, WebGL/Three.js bundle, GSAP/ScrollTrigger/Flip, Lenis, loader covers, cursor states, and responsive composition.
- [x] Build three standalone responsive hero prototypes.
- [x] Select the type/interface hybrid and replace the homepage only through Vantage.
- [x] Preserve static and reduced-motion compositions.
- [x] Capture desktop, mobile, and transition review images.
- [x] Complete full regression, accessibility, and performance comparison.
- [x] Commit and push the review branch; do not deploy production.

### Milestone 12: Purposeful Motion-Library Integration

Objective: Use Lenis, GSAP, and React Bits together where they materially improve the approved first sequence without degrading accessibility, responsive behavior, or mobile performance.

- [x] Synchronize Lenis with GSAP ScrollTrigger on qualifying desktop viewports.
- [x] Add SplitText character choreography to the identity entrance.
- [x] Adapt React Bits Magnet for project entry and ScrollFloat for the closing statement.
- [x] Keep native scrolling and static compositions on mobile and under reduced motion.
- [x] Pause Lenis while the native project dialog is open and protect nested dialog scrolling.
- [x] Complete visual, accessibility, regression, production-build, and Lighthouse validation.
- [ ] Obtain Affan's visual approval before any production deployment.
