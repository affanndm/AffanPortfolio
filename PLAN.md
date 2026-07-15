# Plan

Build Affan Nadeem's portfolio as an evidence-backed Framer site around the "Signal / Systems" concept. The work proceeds audit-first, then design foundation, motion prototypes, CMS/page construction, media, refinement, adversarial review, and final validation without publishing.

## Scope

- In: reference audits, GitHub contribution audit, planning files, Framer design-system page, motion prototypes, CMS/page construction, verified draft content, media placeholders, responsive/accessibility/performance validation.
- Out: publishing, production-domain changes, fabricated claims or metrics, unverified personal biography, cloning reference sites, destructive git history changes.

## Milestones

### Milestone 1: Evidence And Reference Audit

Objective: Establish verified content and original design direction before any Framer production edits.

Tasks:

- Inspect `SPEC.md`, `AGENTS.md`, workspace state, git state, and available tools.
- Audit Filippo Ruffini, Tigran, and Abhijit Rout reference sites with browser inspection and public-source observation.
- Write `reference-audit/FILIPPO.md`, `reference-audit/TIGRAN.md`, `reference-audit/ABHIJIT.md`, and `reference-audit/SYNTHESIS.md`.
- Audit `affanndm` owned repositories and contribution-only repositories, starting with Vantage and gRNAlytics.
- Search authenticated GitHub commit and pull-request history for additional public contributions.
- Write `content-audit/PROJECT_AUDIT.md`, `content-audit/CLAIMS_LEDGER.md`, and `content-audit/MEDIA_NEEDED.md`.
- Mark unresolved personal facts as `NEEDS_AFFAN_CONFIRMATION`.

Dependencies:

- Network access.
- GitHub CLI or API authentication.
- Browser inspection tools.

Deliverables:

- Reference audit files.
- Content audit files.
- Updated `STATUS.md` and `DECISIONS.md`.

Acceptance Criteria:

- All prominent project claims have evidence status.
- Contribution-only projects have been searched.
- Every proposed project has ownership classification.
- All three reference websites have separate analyses.
- `SYNTHESIS.md` defines an original, actionable system for Affan.

Validation:

- Cross-check claims ledger against repository URLs, commits, and PRs.
- Ensure reference audit labels direct observations vs implementation inference.
- Confirm no Framer production pages were edited.

Known Risks:

- GitHub authentication may be unavailable or insufficient.
- Some contribution history may be private or inaccessible.
- Reference sites may block inspection or have changed since the original brief.

### Milestone 2: Framer Design Foundation

Objective: Build a hidden Framer design-system page that makes the portfolio direction concrete without relying on final project media.

Tasks:

- Connect to the intended Framer project.
- Read generated Framer project context and relevant task-map sections.
- Create variables/styles for colors, typography, grids, spacing, rules, borders, focus states, hover states, ownership labels, metadata, media containers, buttons, links, navigation elements, reduced-motion variants, and timing demos.
- Avoid generic SaaS card systems.

Dependencies:

- Milestone 1 complete.
- Framer project access.

Deliverables:

- Hidden Framer design-system page.
- Updated `STATUS.md` and `DECISIONS.md`.

Acceptance Criteria:

- System feels authored without project screenshots.
- Components respond at desktop, tablet, and mobile breakpoints.
- Contrast and focus treatments pass accessibility checks.
- No generic SaaS card system is present.

Validation:

- Framer preview inspection.
- Screenshot checks at target breakpoints.
- Contrast and keyboard focus review.

Known Risks:

- Framer project authorization may require Affan.
- Exact Framer API methods must be checked before use.

### Milestone 3: Motion Prototypes

Objective: Prove the signature motion language before building full pages.

Tasks:

- Prototype hero signal network, opening transition, split-text reveals, Vantage interaction, gRNAlytics sequence, shared project-page transition, signal ticker, reduced-motion variants, and mobile alternatives.
- Use native Framer where sufficient.
- Use Code Components only where interaction quality or performance requires them.
- Test cleanup, offscreen pause, reduced motion, and mobile fallbacks.

Dependencies:

- Milestone 2 complete.
- Code component APIs verified with Framer docs.

Deliverables:

- Motion prototype components/pages.
- Performance notes in `STATUS.md`.

Acceptance Criteria:

- Animations remain smooth.
- Reduced-motion experience remains complete.
- Mobile alternatives avoid hover dependency.

Validation:

- Browser preview and screenshot/video inspection.
- Performance monitor checks.
- Reduced-motion manual test.

Known Risks:

- Canvas/WebGL may exceed performance budget.
- Framer native effects may be enough for some planned components.

### Milestone 4: Page And CMS Construction

Objective: Build the actual site structure and CMS around verified content.

Tasks:

- Create homepage, reusable project template, Projects CMS, Lab CMS, Lab page, About page, Contact section, and 404 page.
- Populate fields with verified draft content from the claims ledger.
- Display role and ownership classification before team-project case studies.
- Include visible Team and Credits blocks.

Dependencies:

- Milestones 1-3 complete.
- Verified content and CMS schema.

Deliverables:

- Framer page structure and CMS collections.
- Draft case-study entries.

Acceptance Criteria:

- Page hierarchy matches `SPEC.md`.
- Team attribution is visible.
- Unsupported claims are absent or marked for confirmation.

Validation:

- Framer preview checks.
- CMS field audit.
- Claims ledger cross-check.

Known Risks:

- Some content may remain placeholder until Affan supplies media or personal context.

### Milestone 5: Content And Media

Objective: Replace generic placeholders with verified media or clearly labeled asset requests.

Tasks:

- Capture or request Vantage, gRNAlytics, Financial Tracker, English portfolio, and algorithm visual media.
- Create labeled placeholders only where real media is unavailable.
- Draft case studies using the spec structure and verified evidence.
- Keep unsupported outcomes and metrics out.

Dependencies:

- Project audit complete.
- Project repos or live interfaces accessible.

Deliverables:

- Populated media slots or labeled placeholders.
- Updated `MEDIA_NEEDED.md`.

Acceptance Criteria:

- No stock media is represented as project media.
- Every placeholder states the exact missing asset.
- Case-study copy is specific, attributed, and evidence-backed.

Validation:

- Manual media review.
- Claims ledger cross-check.

Known Risks:

- Some project interfaces may not run locally.
- Personal portrait, resume, and final biography likely require Affan.

### Milestone 6: Responsive And Interaction Refinement

Objective: Make the site robust across target devices and input modes.

Tasks:

- Test 390px, 768px, 1024px, 1440px, and 1920px.
- Check text wrapping, overflow, navigation, touch behavior, hover dependence, video loading, canvas performance, transitions, keyboard navigation, focus order, reduced motion, and screen-reader semantics.
- Resolve failures before moving on.

Dependencies:

- Core pages and media in place.

Deliverables:

- Responsive QA notes in `STATUS.md`.
- Fixed layout and interaction issues.

Acceptance Criteria:

- No horizontal overflow.
- No hover-only content.
- Focus order is coherent.
- Reduced motion is usable.

Validation:

- Browser screenshots and manual keyboard/touch tests.

Known Risks:

- Mobile Safari and Android Chrome may require manual device testing outside this environment.

### Milestone 7: Adversarial Review

Objective: Find and resolve credibility, design, accessibility, and performance failures before final validation.

Tasks:

- Review for AI-generated visual patterns, unsupported claims, misleading ownership, excessive animation, weak hierarchy, inconsistent spacing, unnecessary dependencies, mobile compromises, a11y failures, unclear explanations, repetitive copy, broken links, placeholders, performance regressions, and reference-site similarity.
- Document every finding and resolution.

Dependencies:

- Milestone 6 complete.

Deliverables:

- Adversarial review notes in `STATUS.md` or a dedicated QA section.
- Resolved findings.

Acceptance Criteria:

- No unresolved critical or high-severity issues.
- Any remaining limitations are documented.

Validation:

- Re-run targeted checks after fixes.

Known Risks:

- Some findings may require Affan media or confirmation to fully resolve.

### Milestone 8: Final Validation

Objective: Validate the preview against performance, accessibility, SEO, and manual launch-readiness standards without publishing.

Tasks:

- Run available Lighthouse, accessibility, SEO, and interaction tests.
- Document desktop/mobile performance, accessibility, SEO, LCP, CLS, and INP.
- Document current result, cause, attempted remediation, and remaining recommendation for any missed target.
- Prepare Affan's pre-publish checklist.

Dependencies:

- All previous milestones complete.

Deliverables:

- Working Framer preview.
- Completed audit/planning/status files.
- Verified projects/contributions list.
- Remaining Affan inputs.
- Known limitations.
- Performance and accessibility results.
- Manual final-review checklist.
- Exact pre-publishing steps.

Acceptance Criteria:

- Desktop Lighthouse Performance 95+ target attempted.
- Mobile Lighthouse Performance 90+ target attempted.
- Accessibility 95+ target attempted.
- SEO 95+ target attempted.
- LCP under 2.5s, CLS under 0.1, INP under 200ms targets measured where possible.

Validation:

- Run all available validations and record actual outputs.

Known Risks:

- Framer preview constraints may limit full Lighthouse parity with published hosting.
- Some browser/device validation may require Affan's manual confirmation.

