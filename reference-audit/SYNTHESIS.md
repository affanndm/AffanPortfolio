# Reference Audit Synthesis

## Purpose

This synthesis turns the three reference audits into one original system for Affan Nadeem's portfolio. It is not a recipe for copying any reference site. The portfolio direction remains `AFFAN NADEEM - SIGNAL / SYSTEMS`: complex, noisy problems becoming understandable systems.

## Evidence Base

Reference audits:

- `reference-audit/FILIPPO.md`
- `reference-audit/TIGRAN.md`
- `reference-audit/ABHIJIT.md`

Source URLs:

- https://www.filipporuffini.com/
- https://tigranz.com/
- https://www.abhijitrout.in/#about

Each audit separates directly observed behavior, publicly disclosed technology, and implementation inference. Do not claim access to private source code.

## Strongest Principles To Carry Forward

### 1. Identity Before Inventory

Filippo Ruffini's strongest lesson is conviction: the site establishes a visual system, name, palette, grid, and motion language before asking visitors to browse a list. For Affan, the first viewport should not look like a resume. It should establish:

- Affan Nadeem.
- Software, science, systems.
- A signal network visual that implies structure emerging from noise.
- A direct positioning statement: "I build software for complex systems."

Original translation: the hero should feel like an instrument panel resolving into a portfolio, not a theatrical name split or a copied 3D object.

### 2. Projects Should Move Before They Explain

Tigran's strongest lesson is project presentation as trailers: visitors see the result in motion before reading process. For Affan, this is especially useful because Vantage and gRNAlytics are not instantly understood from titles alone.

Original translation:

- Vantage preview: business data, map coordinates, filters, and cards resolving from noisy local-business inputs.
- gRNAlytics preview: sequences, BLAST-like match rows, faint off-target divergences, and one selected guide resolving as signal.
- The preview should expose role and ownership immediately, not after the click.

### 3. Depth Needs A Second Tier

Abhijit Rout's strongest lesson is content architecture: selected work can coexist with experiments, chronology, and personality without pretending every item is equal. Affan needs this separation more than most portfolios because his body of work spans flagship team projects, algorithms, school work, early Python tools, and archive items.

Original translation:

- `Selected Work`: Vantage and gRNAlytics only at first.
- `The Lab`: Solutions, Financial Tracker, English Metacognition Portfolio, Recipe Tracker if fixed or clearly archived.
- `Archive`: previous portfolio/custom-domain placeholder and broken or early experiments.

## Original Design System For Affan

### System Metaphor

The site is a signal-processing field. It does not use charts as decoration; it uses system marks to explain work:

- Nodes: projects, technologies, domains.
- Lines: relationships and constraints.
- Noise: raw search results, business listings, sequence matches, algorithm constraints, transactions.
- Signal: selected business, selected guide RNA, accepted solution, useful budget insight.

### Information Architecture

1. Opening signal transition.
2. Hero: positioning and interactive network.
3. Moving signal strip: domains and tools.
4. Selected Work: Vantage and gRNAlytics as cinematic project rows.
5. The Lab: smaller work with ownership labels.
6. About: narrative and chronology.
7. Contact: direct links and one restrained playful interaction.

### Visual Language

Use `SPEC.md` values as the foundation:

- Canvas: `#090A09`
- Raised surface: `#121310`
- Primary text: `#F2F0E8`
- Muted text: `#92958C`
- Signal accent: `#C4FF45`

The lime accent should behave like a measurement indicator. It should appear at moments of selection, focus, proof, and signal resolution rather than as a generic brand wash.

### Typography

Use the specified families:

- Instrument Serif for expressive statements.
- Geist for body and interface text.
- Geist Mono for metadata, labels, roles, dates, and evidence.

Important caution: the broader design critique says editorial serif plus mono labels is now a saturated AI lane. Affan can still use the specified type stack because `SPEC.md` requires it, but the layout must avoid repeated tiny uppercase section eyebrows, broadsheet imitation, and generic editorial scaffolding. The site should feel like a lab/studio system, not a fashion-magazine template.

### Layout

The layout should combine:

- Filippo's grid discipline.
- Tigran's media-first project reveals.
- Abhijit's two-tier content architecture.

Concrete structure:

- 12-column desktop grid, 6-column tablet, 4-column mobile.
- Full-width bands with constrained inner content.
- Thin rules and metadata rows instead of nested cards.
- Project rows that expand into media and proof.
- Lab items with irregular spans on desktop and persistent labels on mobile.

### Motion Language

Use motion to show resolution:

- Opening: disconnected points connect into structure.
- Hero: particles respond subtly to pointer proximity.
- Scroll: network transforms toward the first project context.
- Project previews: noisy states resolve into selected output.
- Text reveals: clip-based, not fade-up everywhere.
- Ticker: continuous but pausable and static under reduced motion.

The motion should be calmer than a game and more purposeful than an awards reel.

## What To Avoid From Each Reference

### Filippo

Do not copy:

- Black/coral palette.
- Split-name typography.
- Broken-word navigation.
- Menu/easter egg behavior.
- 3D hero object or glitch/pixel language.
- Accessibility tradeoffs from split/duplicated text.

### Tigran

Do not copy:

- Endless video wall behavior.
- Project-page composition, names, visual assets, or copy.
- Any assumption that visitors already understand every project.
- Heavy media if it obscures role and contribution.

### Abhijit

Do not copy:

- Exact ticker format.
- Slogans, closing metaphors, soundtrack-like flourishes, or personal voice.
- Any page sequence or visual phrasing closely tied to his identity.

## Practical Rules For Next.js Milestones

### `/design-lab` Design System

The internal `/design-lab` route should prove:

- This portfolio can feel authored without final project media.
- Ownership labels are not badges pasted on later; they are core components.
- Metadata and evidence states are as designed as the hero.
- Reduced-motion states exist from the start.

Use `implementation-planning/DESIGN_SYSTEM_BRIEF.md` as the implementation brief.

Implementation guardrails:

- Use semantic Next.js App Router pages and typed local content as the production source of truth.
- Keep motion-heavy behavior in small client islands rather than turning the whole page into a client application.
- Use native media, poster frames, CSS, and `next/image` before reaching for Rive, Vimeo embeds, Lenis, Lottie, or WebGL.
- Do not duplicate separate desktop/mobile content in the DOM unless inactive variants are hidden from assistive technology and search.
- Do not add a fake loader. If assets are not genuinely being staged, render the final state immediately.
- Keep heading structure real: one page `h1`, meaningful section `h2`s, and visible focus states.

### Hero And Motion Prototypes

Prototype only the signature interactions before building the complete site:

- Hero signal network.
- Opening transition.
- Vantage resolution interaction.
- gRNAlytics sequence interaction.
- Shared project transition.
- Signal ticker.
- Reduced-motion and mobile variants.

Use `implementation-planning/MOTION_PROTOTYPE_BRIEF.md` as the implementation brief.

Performance translation:

- One hero Canvas 2D field is justified because it directly expresses the signal/system concept.
- Dotted bloom and ticker effects should be CSS/static where possible, with reduced-motion and mobile simplifications.
- Continuous animation must pause offscreen, clean up `requestAnimationFrame`, and avoid React render loops.
- GSAP, Lenis, Rive, Lottie, Three.js, and Vimeo are not baseline dependencies for this build.

### Typed Content And Case Studies

Use the content audit as a hard boundary:

- Vantage: team project, full-stack contributor.
- gRNAlytics: team project, computational biology contributor, with detailed Affan-specific scoring/BLAST claims confirmation-gated where alias or ownership is unresolved.
- Lab items: ownership status visible before any detail.
- Archive items: labeled as archive, not current polished work.

The site should show proof before prose: role labels, contribution status, evidence links, and team credits appear before reflective copy or cinematic framing.

## Accessibility And Performance Lessons

The references are art-direction references, not accessibility/performance baselines. Affan's site must outperform them in usability:

- Preserve semantic text even when visually split or animated.
- Avoid duplicate responsive content exposed to screen readers.
- Provide keyboard/focus equivalents for hover previews.
- Pause canvas/video effects offscreen.
- Respect reduced motion globally.
- Keep media and canvas within Lighthouse/Core Web Vitals budgets.

Use `qa/ACCESSIBILITY_PERFORMANCE_PLAN.md` and `qa/ADVERSARIAL_REVIEW_PLAN.md` before calling any implementation complete.

## Final Direction

Affan's portfolio should feel like a precise, cinematic system for finding signal in noisy domains:

- Filippo's confidence, without Filippo's identity.
- Tigran's project immediacy, without relying on spectacle alone.
- Abhijit's depth and archive structure, without copying his voice.

The result should be a credible creative-developer portfolio where every major visual decision supports a factual claim, a project contribution, or a motion metaphor already present in Affan's work.
