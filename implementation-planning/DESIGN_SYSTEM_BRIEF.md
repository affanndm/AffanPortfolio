# Milestone 3 Design-System Implementation Brief

## Purpose

Build `/design-lab` inside the Next.js app. The route turns the `SPEC.md` direction into reusable production foundations before broad homepage construction. It should feel like a signal-processing board: dense, precise, cinematic, and evidence-oriented. It must not become a generic SaaS component library with rounded cards.

`/design-lab` is an internal implementation route. Do not link it from public navigation.

## Implementation Preconditions

- Confirm Milestone 0 architecture reset is complete.
- Confirm evidence and reference audits are complete enough for design decisions.
- Create a checkpoint commit before this milestone if the repository has commits available.
- Use Next.js, React, TypeScript, and the repository styling system.
- Prefer CSS, semantic HTML, and native browser APIs before adding animation or UI dependencies.
- Keep the route excluded from public navigation and SEO indexing.

## Route Shape

Suggested path: `/design-lab`

Sections:

1. Foundation: color, surface, rules, spacing, grid specimens.
2. Type System: display, body, metadata, responsive type rows.
3. Navigation And Actions: nav bars, menu states, buttons, links.
4. Ownership And Metadata: ownership labels, project metadata, claim status patterns.
5. Media And Evidence: media containers, posters, captions, missing-media states.
6. Motion Timing: hover, reveal, ticker, menu, transition, reduced-motion demos.
7. Hero Experiments: Signal Network, Editorial Project Reel, Dotted Grid Bloom.
8. Accessibility States: focus, keyboard, reduced motion, touch alternatives.

Use full-width bands, thin rules, specimen rows, and column alignment. Use framed components only when the frame is the component being documented.

## Concept Rules

- The system metaphor is signal resolving from noise, not decoration.
- Lime is a signal indicator, not a broad paint color.
- Rules, metadata, and alignment carry structure.
- Project ownership must appear before deeper project explanation.
- Media should behave like evidence: poster, source, caption, status.
- Avoid six identical cards, big rounded SaaS panels, gradient blobs, glass effects, fake metrics, and generic icon-heading-text blocks.
- No final project claims, metrics, awards, or personal facts should be added from this route.

## Color Tokens

Use CSS custom properties, ideally in OKLCH where practical, with hex fallbacks only when needed.

| Token | Value | Use |
| --- | --- | --- |
| `--color-canvas` | `#090A09` | Global page background. |
| `--color-surface-raised` | `#121310` | Raised bands, menus, media overlays. |
| `--color-text-primary` | `#F2F0E8` | Main text on dark canvas. |
| `--color-text-muted` | `#92958C` | Secondary copy and quiet metadata. |
| `--color-text-faint` | `rgba(242, 240, 232, 0.42)` | Disabled states and nonessential labels. |
| `--color-rule` | `rgba(242, 240, 232, 0.16)` | Baseline dividers and outlines. |
| `--color-rule-strong` | `rgba(242, 240, 232, 0.32)` | Active nav separators and focused rules. |
| `--color-signal` | `#C4FF45` | Active signal, focus ring, proof marker. |
| `--color-signal-dim` | `rgba(196, 255, 69, 0.18)` | Soft active fills only. |

Usage rules:

- Keep signal lime under roughly 8 percent of any viewport.
- Do not use lime as the default button fill across the site.
- Use project accent colors only inside their project context.
- Prefer dark canvas plus light text; contrast-test any inverse sample.
- Avoid gradients unless they are produced by actual media or data visualization.

## Typography

Candidate stack from `SPEC.md`:

- Instrument Serif for expressive statements.
- Geist for body and interface text.
- Geist Mono for labels, dates, roles, technical marks, and metadata.

Important caution: this stack can drift into a saturated editorial/mono AI lane. Counterbalance it with project evidence, signal-system interaction, non-repeated section grammar, and restraint in mono labels.

Responsive type targets:

| Style | Font | CSS Target | Use |
| --- | --- | --- | --- |
| `display-hero` | Geist or Instrument Serif by layout | `clamp(4rem, 10vw, 11rem)` | Hero lockups only. |
| `display-section` | Instrument Serif | `clamp(3rem, 6.5vw, 7rem)` | Major section statements. |
| `display-project` | Geist | `clamp(2.5rem, 5vw, 6rem)` | Project titles. |
| `statement` | Instrument Serif | `clamp(1.75rem, 4vw, 3.5rem)` | About and closing statements. |
| `body-large` | Geist | `1.25rem` to `1.5rem` | Lead copy. |
| `body` | Geist | `1rem` to `1.125rem` | Paragraph copy. |
| `meta` | Geist Mono | `0.72rem` to `0.82rem` | Labels, roles, dates. |

Rules:

- Letter spacing should be `0` unless a specific font rendering issue requires a documented exception.
- Display headings must not exceed three lines at required breakpoints.
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for prose.
- Do not place a tiny uppercase label above every section by default.

## Grid And Spacing

Grid:

| Breakpoint | Columns | Max Width | Gutters | Outer Margin |
| --- | ---: | ---: | ---: | ---: |
| Desktop `1200px+` | 12 | 1600px | 32px | 32-56px |
| Tablet `768-1199px` | 6 | fluid | 24px | 24-32px |
| Mobile `390-767px` | 4 | fluid | 20px | 20px |

Spacing tokens:

| Token | Value | Use |
| --- | ---: | --- |
| `--space-2xs` | 4px | Tight metadata gaps. |
| `--space-xs` | 8px | Label-value spacing. |
| `--space-s` | 12px | Compact component padding. |
| `--space-m` | 16px | Default internal spacing. |
| `--space-l` | 24px | Small group spacing. |
| `--space-xl` | 32px | Grid and component separation. |
| `--space-2xl` | 48px | Section subgroups. |
| `--space-3xl` | 64px | Mobile section separation. |
| `--space-4xl` | 96px | Tablet section separation. |
| `--space-5xl` | 128px | Desktop section separation. |
| `--space-6xl` | 160px | Major cinematic separation. |

Use section padding of 128-192px desktop, 96-144px tablet, and 72-112px mobile depending on section intensity.

## Components To Demonstrate

- `Navigation`
- `MobileMenu`
- `Button`
- `IconButton`
- `InlineLink`
- `OwnershipLabel`
- `ProjectMetadata`
- `ProjectProofRow`
- `ContributionSummary`
- `TeamCreditLine`
- `MediaFrame`
- `MissingMedia`
- `SignalTicker`
- `SplitTextReveal`
- `SignalField`
- `DottedBloom`
- `ProjectTrailer`
- `MotionTimingDemo`
- `ReducedMotionSpecimen`
- `FocusStateSpecimen`

## Interaction And State Rules

- Minimum touch target: 44px on mobile.
- Focus ring: 2px signal color with 2px offset and enough contrast.
- Rich hover only under `(hover: hover) and (pointer: fine)`.
- Touch layouts get persistent labels and tap states.
- Media hover may scale from 1 to approximately 1.03; never aggressive zoom.
- Buttons should have subtle active press feedback.
- Essential role, ownership, and project status cannot be hover-only.

## Reduced Motion

Required alternatives:

- Opening sequence: completed hero immediately.
- Signal network: static generated frame or simplified non-interactive network.
- Split text: final text visible.
- Section reveals: content visible by default; no hidden offscreen dependency.
- Project thumbnail expansion: direct navigation or short opacity transition.
- Ticker: static text.
- Media hover zoom: disabled.
- Menu: instant open/close or short opacity transition.

## Acceptance Criteria

- `/design-lab` exists and is not linked from public navigation.
- Color, type, grid, spacing, rule, radius, focus, hover, and reduced-motion specimens are visible.
- Ownership labels cover `SOLE BUILD`, `TEAM PROJECT`, `CONTRIBUTOR`, `EXPERIMENT`, and `ARCHIVE`.
- Project metadata patterns make role, team, ownership, links, and evidence status visible before long-form copy.
- Media containers include poster, caption, missing-media, and reduced-motion states.
- No essential information is hover-only.
- The route avoids generic SaaS cards, gradient blobs, fake metrics, skill bars, and cloned reference-site patterns.
- Any unverified factual content remains absent or marked only in planning documents.

## Risks

- Typography can become generic editorial scaffolding without enough project-specific media and signal logic.
- Canvas and cursor effects can harm mobile performance if not gated.
- Dark UI can fail contrast if muted text is overused.
- Internal routes can leak into public navigation or metadata if not handled deliberately.
