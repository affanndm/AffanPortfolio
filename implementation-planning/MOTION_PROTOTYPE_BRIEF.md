# Milestone 4 Motion Prototype Brief

## Purpose

Prove Affan Nadeem's motion language in `/design-lab` before production page construction. The motion system should make noisy systems resolve into readable structure: signals connect, evidence comes forward, and project ownership becomes visible before long-form explanation.

This is a planning artifact for the Next.js implementation. Do not publish production, deploy production, or connect the custom domain from this work.

## Motion Principles

- Motion must explain structure, focus, continuity, or input feedback.
- Remove motion that only decorates repeated reading.
- Use `cubic-bezier(0.16, 1, 0.3, 1)` as the default site curve.
- Keep frequent interactions under 260ms.
- Reserve longer timings for rare page-level or explanatory transitions.
- Prefer transform and opacity. Use clipping for text reveals where it adds meaning.
- UI must remain usable while animations run.
- Every animated component needs a reduced-motion version, mobile/touch alternative, offscreen pause behavior, and cleanup.
- Reference sites can inform discipline and pacing, but do not copy their layouts, transitions, ticker mechanics, cursor behavior, colors, text, or project presentation patterns.

## Prototype Preconditions

- Milestone 0 architecture reset is complete.
- Milestone 1 evidence and reference audit refresh is complete enough for project claims.
- `/design-lab` exists and defines typography, color, grid, focus, and reduced-motion foundations.
- A checkpoint commit exists if the repository has commits available.

## Prototype Inventory

| Prototype | Primary Purpose | Preferred Build | Dependency Threshold |
| --- | --- | --- | --- |
| Hero signal network | Express the site concept through an interactive system resolving from noise to structure. | Canvas 2D React component | Add WebGL/Three.js only if Canvas cannot deliver the visual at target performance. |
| Opening transition | Establish identity once without fake loading. | CSS/React state with session gating | Add Motion only if it materially improves interruptibility and cleanup. |
| Split-text reveals | Make major statements feel assembled with intention. | CSS clipping and semantic text | Add JS splitting only if stable line-level control is impossible with authored markup. |
| Vantage interaction | Preview trust, relevance, and local discovery without implying sole ownership. | CSS/React media trailer | Add canvas cursor layer only if it clarifies discovery and remains accessible. |
| gRNAlytics sequence | Show biological search output becoming clearer guide-RNA decisions without overclaiming science. | React staged component | Add Motion only if step/scrub transitions need interruptible state. |
| Shared project transition | Preserve continuity from selected work to case-study hero. | Next.js route-aware CSS/Motion experiment | Keep direct navigation under reduced motion. |
| Signal ticker | Carry technical domains through the page while staying pauseable. | CSS transform or React loop with pause controls | Avoid JS loops unless pause/resume and resizing require it. |
| Dotted grid bloom | Explore the Figma Make reference principles without copying palette or code. | CSS/canvas hybrid | Must never reduce text contrast or distract from content. |

## Shared Motion Tokens

| Token | Value | Use |
| --- | ---: | --- |
| `--ease-signal` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default entry, hover, reveal, and transition easing. |
| `--ease-linear` | `linear` | Ticker and constant scanning motion. |
| `--duration-press` | 100-160ms | Button and press feedback. |
| `--duration-hover` | 180-260ms | Hover, rule brightening, icon nudges. |
| `--duration-text-reveal` | 600-750ms | Major split-text clipping reveals. |
| `--duration-section-reveal` | 700-900ms | Occasional section entrances. |
| `--duration-project-transition` | 700-950ms | Thumbnail-to-project continuity. |
| `--delay-metadata` | 90-140ms | Metadata after project title. |
| `--stagger-tight` | 30-60ms | Metadata or line stagger. |
| `--media-scale-hover` | 1.00 to 1.03 | Project media hover. |

## Hero Signal Network

Purpose: Make the portfolio concept immediately legible: complicated input becomes an understandable system. The network is not a generic particle background; nodes should imply domains, projects, evidence, and constraints.

Behavior:

- Initial state: sparse points with subtle variance in position, size, and opacity.
- Structured state: points connect into a restrained network with emphasized nodes for Vantage, gRNAlytics, algorithms, data systems, and product engineering.
- Pointer state: on precise pointer devices, nearby nodes attract by a few pixels and connecting rules brighten.
- Scroll state: optional, network geometry biases toward the first selected-work context.
- Easter egg support: typing `signal` may toggle labels such as `PYTHON`, `CRISPR`, `DISCOVERY`, `ALGORITHMS`, `DATA`, and `SYSTEMS`.

Reduced motion:

- Show a completed static network frame immediately.
- No cursor attraction, ambient drift, or scroll morphing.

Mobile:

- Use a static or lightly responsive non-interactive network.
- Cap node count and device pixel ratio aggressively.

Performance:

- Pause animation frames when offscreen, document hidden, or reduced motion is active.
- Use `IntersectionObserver` and `visibilitychange`.
- Clean up animation frames, resize observers, pointer listeners, keyboard listeners, and media-query listeners.

## Opening Transition

Purpose: Establish identity once, then get out of the way. This is not a loader and must not imply fake progress.

Behavior:

- Disconnected points move with controlled disorder.
- Points connect into the structured network.
- The lockup resolves to `AFFAN NADEEM` and `SOFTWARE x SCIENCE x SYSTEMS`.
- Returning within the same session sees the completed hero immediately.

Timing:

- Total duration target: about 900ms.
- Point disorder to network: 400-520ms.
- Name reveal: 420-560ms, overlapping by roughly 120ms.
- Label reveal: 160-220ms after the name begins.

Reduced motion:

- Skip the sequence and render the completed hero.

## Split-Text Reveals

Purpose: Make major statements feel assembled with intention. The reveal should support editorial rhythm, not hide ordinary reading.

Rules:

- Reveal through clipping, not generic fade-up everywhere.
- Preserve semantic text in the DOM.
- Use line-level staggers of 40-70ms where useful.
- Metadata enters after titles.
- Do not animate every paragraph.

Reduced motion:

- Text appears in its final readable state.
- Optional opacity transition can be 120-180ms if it improves continuity.

## Vantage Interaction

Purpose: Preview a local discovery platform as a system of trust, relevance, and place without claiming sole ownership or unsupported impact.

Behavior:

- Project media begins as evidence-first poster or short silent preview.
- On precise pointer hover, a restrained signal layer connects local-business points, relevance paths, or trust markers.
- Ownership label and role remain persistent before entry.
- Entering the project may map the selected media into the case-study hero.

Reduced motion:

- Disable media zoom, custom cursor, and spatial hover response.
- Use static poster, visible role/ownership, and direct navigation.

Mobile:

- No hover dependency.
- Show persistent thumbnail, title, role, ownership, and clear tap target.

## gRNAlytics Sequence Interaction

Purpose: Show scientific-computing complexity becoming more readable without inventing biological accuracy, outcomes, or personal contribution details.

Behavior:

- A sequence-like row or grid resolves from raw result marks into grouped guide-RNA decision cues.
- User can step through stages: raw search, candidate grouping, scoring/annotation, clearer decision surface.
- Use cyan, violet, and fluorescent green as restrained project-context signal marks.
- Labels avoid unverified claims.

Reduced motion:

- Replace animated sequence with static staged panels or instant step switching.

Mobile:

- Use tap-to-step controls or a vertical staged stack.
- Avoid horizontal drag as the only control.

## Signal Ticker

Content:

`PYTHON / TYPESCRIPT / COMPUTATIONAL BIOLOGY / PRODUCT ENGINEERING / ALGORITHMS / DATA SYSTEMS / REACT / SCIENTIFIC COMPUTING /`

Behavior:

- Constant linear motion on capable desktop devices.
- Pause immediately on hover, focus, reduced motion, offscreen, or document hidden.
- Keyboard focus exposes the full static text.
- Occasional project media interruptions must use real or clearly labeled placeholder media.

Reduced motion and mobile:

- Static line of text or wrapped segmented rows.

## Dotted Grid Bloom

Purpose: Translate the Figma Make reference principles into an original ambient interaction: subtle cursor responsiveness, atmospheric depth, restrained bloom, and a responsive background that does not distract from content.

Rules:

- Do not copy the Figma Make source code, exact palette, exact bloom implementation, or composition.
- Cursor bloom must never reduce contrast or obscure text.
- The bloom is secondary to typography, project proof, and navigation.
- Reduced motion uses a static dotted-field frame.
- Mobile uses a simplified static or low-frequency version.

## Reduced Motion System

Reduced motion means the experience is complete with less movement, not stripped of meaning.

Global requirements:

- Respect `prefers-reduced-motion: reduce` at initial render.
- Listen for preference changes while the page is open.
- Do not mount hidden offscreen states that require animation to become readable.
- Disable ambient loops, cursor attraction, ticker motion, hover zoom, scroll morphing, and thumbnail expansion.
- Keep helpful opacity/color feedback where it supports comprehension.

## Cleanup Requirements

Any interactive component must clean up:

- `requestAnimationFrame` loops.
- Timers and delayed callbacks.
- `ResizeObserver` and `IntersectionObserver` instances.
- Pointer, mouse, touch, wheel, scroll, keydown, and visibility listeners.
- Media-query listeners for reduced motion and pointer capability.
- Canvas/WebGL contexts where applicable.
- Object URLs, image preloads, and cached media handles.

## Prototype Acceptance Criteria

- Prototype work remains internal until the site is ready for review.
- Each prototype states purpose, frequency, easing, duration, interruptibility, reduced-motion behavior, and mobile behavior.
- Role and ownership metadata remain visible before team-project entry.
- No content depends on hover, cursor, or animation completion.
- Canvas, ticker, and sequence effects pause offscreen and clean up listeners.
- Motion uses transform and opacity by default; clipping is reserved for text reveals and controlled masks.
- No fake progress counters, generic gradient blobs, aggressive zooms, or cloned reference-site mechanics.

## Validation Plan

- Preview at 390px, 768px, 1024px, 1440px, and 1920px.
- Toggle `prefers-reduced-motion` and confirm content remains complete.
- Navigate with keyboard only and confirm focus order, pause behavior, and visible focus states.
- Verify no hover-only information on touch/mobile layouts.
- Inspect performance during hero animation, ticker loop, project transition, and gRNAlytics sequence.
- Confirm offscreen components pause with DevTools performance recording or explicit prototype diagnostics.
- Review animations slowed down to 25-50 percent speed before accepting final timings.
