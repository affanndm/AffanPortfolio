# Affan Nadeem Portfolio Spec

This file was reconstructed from Affan's July 15, 2026 prompt because the workspace did not contain the referenced `SPEC.md`.
Treat this file as the working source of truth until Affan provides a separate canonical spec.

## Core Concept

AFFAN NADEEM - SIGNAL / SYSTEMS

Core narrative: Affan takes complicated, noisy problems and turns them into understandable, useful systems.

Positioning:

> I build software for complex systems.
> From trusted local discovery to computational biology.

Supporting sentence:

> Affan Nadeem is a student developer working across product engineering, scientific computing, and algorithms.

Avoid resume tropes: no "passionate coder", no skills cloud, no six rounded cards, no GitHub contribution graph, no generic student portfolio.

## Required Execution Order

1. Evidence and reference audit.
2. Framer design foundation.
3. Motion prototypes.
4. Page and CMS construction.
5. Content and media.
6. Responsive and interaction refinement.
7. Adversarial review.
8. Final validation.

Do not edit Framer production pages during Milestone 1.
Do not publish the website.

## Reference Sites

Inspect and audit:

- https://www.filipporuffini.com/
- https://tigranz.com/
- https://www.abhijitrout.in/#about

For each reference, distinguish directly observed behavior, publicly disclosed technology, and implementation inference.
Do not claim access to private source code.
Do not clone layouts, wording, branding, visual assets, or source code.

Create:

- `reference-audit/FILIPPO.md`
- `reference-audit/TIGRAN.md`
- `reference-audit/ABHIJIT.md`
- `reference-audit/SYNTHESIS.md`

Reference influence:

- Filippo Ruffini: editorial grid, dramatic typography, one memorable interactive hero, strict visual discipline, authored microcopy, cinematic transitions.
- Tigran: project presentation as short trailers, media evidence before long explanation, modular project pages, motion clips as proof.
- Abhijit Rout: personal depth, selected work plus experiments/lab, chronology, distinctive narrative sections.

Do not copy their exact colors, typography pairings, page structures, slogans, ticker formats, or project presentation mechanics.

## GitHub Evidence Audit

Primary GitHub identity: `affanndm`

Audit all repositories owned by Affan and public repositories owned by others where Affan contributed through commits or pull requests.

Start with:

- https://github.com/affanndm
- https://github.com/affanndm/Solutions
- https://github.com/affanndm/Financial_Tracker
- https://github.com/affanndm/Recipe-Tracker
- https://github.com/affanndm/English-Metacognition-Portfolio
- https://github.com/affanndm/affanndm.github.io
- https://github.com/crackle2k/vantage
- https://github.com/MisplacedOrange/gRNAlytics

For each relevant repository, separate:

1. What the overall product does.
2. What the team collectively built.
3. What Affan personally contributed.

Inspect commit authorship, pull requests, changed files, commit messages, repository history, documentation, languages, deployments, releases, issues, contributors, and relevant branches.

Do not infer Affan's contribution from the README alone.
Do not fabricate metrics, awards, impact, biological accuracy, users, revenue, or ownership.

Create:

- `content-audit/PROJECT_AUDIT.md`
- `content-audit/CLAIMS_LEDGER.md`
- `content-audit/MEDIA_NEEDED.md`

Use `NEEDS_AFFAN_CONFIRMATION` for unverifiable factual claims or missing personal context.

## Homepage Structure

### Opening Sequence

Duration approximately 0.9 seconds, first session visit only.
Disconnected points move chaotically, connect into a structured network, then resolve:

AFFAN
NADEEM

Small label:

SOFTWARE x SCIENCE x SYSTEMS

No fake percentage counter. Reduced motion sees completed hero immediately.

### Hero

Full viewport height.

Primary text:

I BUILD SOFTWARE
FOR COMPLEX SYSTEMS.

Supporting text:

From trusted local discovery
to computational biology.

Metadata:

STUDENT DEVELOPER
BASED IN CANADA
AVAILABLE FOR COLLABORATION

Use "available for collaboration" only if true.

Hero visual: custom interactive signal network using Canvas 2D or lightweight WebGL unless heavier tech is justified. Nodes represent projects, technologies, or domains. Cursor attracts particles near nodes. Scroll gradually transforms network toward the first Vantage visual. Mobile gets simplified non-interactive version. Reduced motion gets a static generated frame.

### Moving Signal Strip

Text:

PYTHON / TYPESCRIPT / COMPUTATIONAL BIOLOGY / PRODUCT ENGINEERING / ALGORITHMS / DATA SYSTEMS / REACT / SCIENTIFIC COMPUTING /

Occasional project image interruptions. Pause on hover/focus. Static under reduced motion.

### Selected Work

Only two flagship case studies initially:

1. Vantage
2. gRNAlytics

Every team project must display Affan's actual role and ownership classification before the visitor enters the case study.

Vantage label:

VANTAGE
FULL-STACK CONTRIBUTOR
LOCAL DISCOVERY PLATFORM

Potential project line:

Helping independent businesses surface through trust, relevance, and better discovery.

Do not claim sole ownership. Include Team and Credits.

gRNAlytics label:

gRNALYTICS
COMPUTATIONAL BIOLOGY CONTRIBUTOR
CRISPR ANALYSIS

Potential project line:

Turning biological search results into clearer guide-RNA decisions.

Audit exact diffs before writing "My Contribution".

### The Lab

For smaller projects, algorithms, unfinished research, school experiments, and tools.

Initial items:

- Solutions
- Financial Tracker
- English Metacognition Portfolio
- Recipe Tracker
- Previous Portfolio, optional archive only

Ownership labels:

- SOLE BUILD
- TEAM PROJECT
- CONTRIBUTOR
- EXPERIMENT
- ARCHIVE

Desktop: irregular editorial grid with hover details and short silent previews.
Mobile: vertical list with persistent thumbnails and no hover-only information.

### About

Do not start with "Hello, I'm Affan."

Narrative opening:

> I am interested in what happens when a difficult problem contains too much information, too many constraints, or no obvious starting point. I use software to find the structure inside it.

Connect product engineering, computational biology, algorithms, entrepreneurship, and student leadership.
Use one strong portrait or candid image, not a gallery of similar photos.

Chronology:

FIRST PYTHON EXPERIMENTS -> COMPETITIVE PROGRAMMING -> VANTAGE -> gRNALYTICS -> DECA / FBLA -> CURRENT EXPERIMENTS

Final copy must be based on resume or LinkedIn export, not scraped guesses.

### Contact

Large closing:

HAVE A DIFFICULT PROBLEM?
LET'S FIND THE SIGNAL.

Include email, GitHub, LinkedIn, resume, optional current local time.
No contact form unless there is a real reason.
Playful interaction: contact text briefly reorganizes into a network when hovered.

## Visual System

Fonts:

- Instrument Serif for expressive statements.
- Geist for interface and body copy.
- Geist Mono for labels, numbers, roles, dates, and metadata.

Load only required styles and weights.

Type scale:

- Hero display: `clamp(4rem, 10vw, 11rem)`
- Section display: `clamp(3rem, 6.5vw, 7rem)`
- Project title: `clamp(2.5rem, 5vw, 6rem)`
- Body large: `1.25rem` to `1.5rem`
- Body: `1rem` to `1.125rem`
- Metadata: `0.72rem` to `0.82rem`

Colors:

- Canvas: `#090A09`
- Raised surface: `#121310`
- Primary text: `#F2F0E8`
- Muted text: `#92958C`
- Border: `rgba(242, 240, 232, 0.16)`
- Signal accent: `#C4FF45`

Use lime as a signal, not as paint over every button.
Vantage may introduce amber or warm map tones.
gRNAlytics may introduce cyan, violet, and fluorescent green.

Grid:

- 12 columns desktop.
- 6 columns tablet.
- 4 columns mobile.
- Max canvas width around 1600px.
- 32px desktop gutters.
- 20px mobile gutters.
- Primarily square or lightly rounded media.
- Avoid generic 24px-radius SaaS cards.
- Use thin rules and typographic alignment.

## Motion System

Shared easing:

`cubic-bezier(0.16, 1, 0.3, 1)`

Timings:

- Hover response: 180-260ms
- Text reveal: 600-750ms
- Section reveal: 700-900ms
- Project-page transition: 700-950ms
- Menu open/close: 450-600ms

Rules:

- Text reveals through clipping, not simple fade-up.
- Project media scales 1 to approximately 1.03, never aggressive zoom.
- Metadata enters after titles.
- Selected project thumbnail expands into project-page hero.
- Navigation contrast changes by section.
- Custom cursor appears only over project media on precise pointer devices.
- Touch and reduced-motion modes must not depend on custom cursor.

Easter egg: typing `signal` toggles abstract nodes into labels such as PYTHON, CRISPR, DISCOVERY, ALGORITHMS, DATA, SYSTEMS.

## Case Study Template

Opening metadata:

- Project
- Role
- Year
- Team
- Discipline
- Stack
- Ownership

Sections:

- The signal
- The noise
- What I contributed
- How the system works
- Important decisions
- The product in motion
- Outcome
- What changed in my thinking
- Team and credits
- Next project

Contribution sections should link to selected pull requests or commits where useful.

## Framer Architecture

Use Framer for responsive page composition, typography and color variables, CMS collections, navigation, standard section effects, breakpoints, image/video placement, SEO metadata, and publishing.

Use Code Components only where they materially improve the experience:

- `SignalField.tsx`
- `ProjectReel.tsx`
- `SplitTextReveal.tsx`
- `SharedProjectTransition.tsx`
- `SignalTicker.tsx`
- `ContributionLabel.tsx`
- `MediaCursor.tsx`
- `ReducedMotionProvider.tsx`
- `PerformanceMonitor.tsx`

Code components must be React 18 compatible, expose Framer property controls, avoid unnecessary dependencies, clean up listeners and animation frames, pause offscreen, respect reduced motion, and provide mobile fallbacks.

## CMS Structure

Projects collection:

- Title
- Slug
- Order
- Featured
- Year
- Category
- Ownership Type
- Role
- Short Statement
- Long Summary
- Hero Poster
- Hero Video
- Project Accent
- Technologies
- Repository URL
- Live URL
- Team Members
- Problem
- Personal Contributions
- Architecture
- Decisions
- Outcome
- Reflection
- Credits
- Gallery
- Next Project

Lab collection:

- Title
- Slug
- Year
- Category
- Ownership Type
- One-Line Description
- Thumbnail
- Preview Video
- Technology
- Repository URL
- Live URL
- Featured
- Archive Status

Timeline collection:

- Year
- Title
- Description
- Type
- Link
- Order

## Accessibility And Performance Targets

Targets:

- Desktop Lighthouse Performance: 95+
- Mobile Lighthouse Performance: 90+
- Accessibility: 95+
- SEO: 95+
- LCP under 2.5s
- CLS under 0.1
- INP under 200ms

Requirements:

- Global `prefers-reduced-motion`.
- Keyboard accessible controls.
- Visible focus treatment.
- No information exclusively through hover.
- Correct semantic headings.
- Descriptive alt text.
- Muted autoplay only.
- No autoplay audio.
- Poster frames for every video.
- Lazy-load below-fold media.
- Pause canvas effects offscreen.
- Simplify canvas on mobile and low-power hardware.
- No horizontal overflow.
- Test 390px, 768px, 1024px, 1440px, and 1920px.
- Test Chrome, Safari, Firefox, iOS Safari, and Android Chrome when available.

## Prohibited Patterns

- Cloning reference sites.
- Generic AI gradient blobs.
- Skill percentage bars.
- GitHub contribution calendar.
- Six identical rounded project cards.
- Three-second fake loader.
- Animating every paragraph.
- Burying Affan's role in team projects.
- Inventing impact metrics.
- Generating final case-study copy before auditing commits.
- Sacrificing mobile usability for desktop effects.
- Adding dependencies when native Framer functionality is enough.

