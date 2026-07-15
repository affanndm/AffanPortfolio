# Milestone 3 Motion Prototype Brief

## Purpose

Prove Affan Nadeem's motion language before production page construction. The motion system should make noisy systems resolve into readable structure: signals connect, evidence comes forward, and project ownership becomes visible before long-form explanation.

This is a planning artifact only. Do not connect to Framer, edit Framer pages, or publish from this brief. Prototype implementation begins only after Milestone 1 is complete, Milestone 2 design foundations exist, and Framer work is explicitly unblocked.

## Motion Principles

- Motion must explain structure, focus, continuity, or input feedback. Remove motion that only decorates repeated reading.
- Use the shared easing `cubic-bezier(0.16, 1, 0.3, 1)` as the default site curve.
- Keep frequent interactions under 260ms. Reserve longer timings for rare page-level or explanatory transitions.
- Prefer transform and opacity. Use clipping for text reveals where needed, but avoid animating layout properties.
- UI should remain usable while animations run. Do not block navigation, buttons, or links behind a reveal.
- Every animated component needs a reduced-motion version, a mobile/touch alternative, offscreen pause behavior, and listener cleanup.
- The final system must feel original. Reference sites can inform discipline and pacing, but do not copy their layouts, transitions, ticker mechanics, cursor behavior, colors, text, or project presentation patterns.

## Prototype Preconditions

- Milestone 1 audit deliverables are complete.
- Milestone 2 design-system page exists and defines typography, color, grid, focus, and reduced-motion foundations.
- A checkpoint commit exists if the repository has commits available.
- Framer setup and project context are read before connected Framer work.
- Code Component APIs are verified against the active Framer project context before any component is written.
- Prototype pages/components remain hidden/internal and are not linked from public navigation.

## Prototype Inventory

| Prototype | Primary Purpose | Preferred Build | Code Component Justification |
| --- | --- | --- | --- |
| Hero signal network | Express the site concept through an interactive system resolving from noise to structure. | Code Component | Canvas/WebGL interaction, offscreen pausing, low-power fallback, cursor attraction, and scroll-linked transformation exceed native Framer effects. |
| Opening transition | Establish first-session identity and resolve into the hero without a fake loader. | Native Framer plus optional Code Component hook | Native variants may handle the text state; code is justified only for session gating and network-to-hero continuity. |
| Split-text reveals | Make major headings feel authored and structured. | Native Framer if clipping and stagger are sufficient | Code justified only if native text splitting cannot preserve accessibility, reduced motion, and predictable line breaks. |
| Vantage interaction | Preview trust, relevance, and local discovery through spatial media behavior. | Native Framer first | Code justified only for map-like pointer proximity, dynamic node clustering, or media cursor behavior. |
| gRNAlytics sequence interaction | Show biological search results becoming clearer guide-RNA decisions without overclaiming science outcomes. | Code Component likely | Sequence scrubbing, base-like glyphs, score rows, and accessible static states likely require custom state management. |
| Shared project-page transition | Preserve continuity from selected work thumbnail to project-page hero. | Native Framer first | Code justified if native shared layout cannot maintain performance, focus, reduced motion, and route cleanup. |
| Signal ticker | Carry technical domains through the page while staying pauseable and readable. | Code Component likely | True pause on hover/focus, reduced-motion static state, image interruptions, and offscreen pausing need precise control. |

## Shared Motion Tokens

| Token | Value | Use |
| --- | ---: | --- |
| `motion/ease/signal` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default entry, hover, reveal, and page transition easing. |
| `motion/ease/linear` | `linear` | Ticker movement and any constant scanning motion. |
| `motion/duration/press` | 100-160ms | Button and press feedback. |
| `motion/duration/hover` | 180-260ms | Hover, focus-adjacent response, rule brightening, icon nudges. |
| `motion/duration/textReveal` | 600-750ms | Major split-text clipping reveals. |
| `motion/duration/sectionReveal` | 700-900ms | Occasional section entrances. |
| `motion/duration/projectTransition` | 700-950ms | Thumbnail-to-project hero continuity. |
| `motion/delay/metadata` | 90-140ms | Metadata entering after project title. |
| `motion/stagger/tight` | 30-60ms | Short metadata or line stagger. |
| `motion/mediaScale/hover` | 1.00 to 1.03 | Project media hover on precise pointer devices. |

## Hero Signal Network

Purpose: Make the portfolio concept immediately legible: complicated input becomes an understandable system. The network is not a generic particle background; nodes should imply domains, projects, evidence, and constraints.

Frequency: Seen on homepage arrival and during early scroll. It can be expressive, but must settle quickly and avoid constant distraction behind reading.

Behavior:

- Initial state: sparse points with subtle variance in position, size, and opacity.
- Structured state: points connect into a restrained network with a few emphasized nodes for Vantage, gRNAlytics, algorithms, data systems, and product engineering.
- Pointer state: on precise pointer devices, nearby nodes attract by a few pixels and connecting rules brighten. Do not attach essential labels to hover only.
- Scroll state: network geometry gradually biases toward the first Vantage visual, creating continuity into selected work.
- Easter egg support: typing `signal` may toggle abstract nodes into labels such as `PYTHON`, `CRISPR`, `DISCOVERY`, `ALGORITHMS`, `DATA`, and `SYSTEMS`.

Motion spec:

- Opening network resolve: 650-900ms after first paint, using `motion/ease/signal`.
- Pointer response: spring-like interpolation or 180-240ms transition, subtle enough not to chase the cursor.
- Scroll transformation: progress-linked transform/opacity only; avoid per-node layout recalculation.
- Constant ambient motion: optional, extremely low amplitude, paused when reading-heavy sections are in view.

Reduced motion:

- Show a completed static network frame immediately.
- No cursor attraction, ambient drift, or scroll morphing.
- Labels and content remain visible without animation.

Mobile alternative:

- Use a static or lightly responsive non-interactive network.
- Avoid custom cursor and hover effects.
- Cap node count aggressively and favor CSS/image fallback on low-power devices.

Performance and cleanup:

- Pause animation frames when offscreen, document hidden, or reduced motion is active.
- Use `IntersectionObserver` for visibility and `visibilitychange` for tab state.
- Clean up animation frames, resize observers, pointer listeners, keyboard listeners, and media-query listeners.
- Consider Canvas 2D first. Use WebGL only if Canvas cannot stay smooth at target breakpoints.

## Opening Transition

Purpose: Establish identity once, then get out of the way. This is not a loader and must not imply fake progress.

Frequency: First session visit only. Returning within the same session sees the completed hero immediately.

Behavior:

- Disconnected points move with controlled disorder.
- Points connect into the structured network.
- The lockup resolves to:
  - `AFFAN`
  - `NADEEM`
  - `SOFTWARE x SCIENCE x SYSTEMS`
- The final state lands directly in the normal hero composition.

Motion spec:

- Total duration target: about 900ms.
- Point disorder to network: 400-520ms.
- Name reveal: 420-560ms, overlapping the network resolve by roughly 120ms.
- Label reveal: 160-220ms after the name begins.
- Easing: `motion/ease/signal`.
- Interruptibility: navigation, scroll, or reduced-motion preference should skip to the final hero state without broken intermediate visuals.

Reduced motion:

- Skip the sequence and render the completed hero.
- Do not store a forced animated state if the user's system preference changes to reduced motion.

Implementation note:

- Native Framer may handle the visual variants. A small Code Component or custom hook is justified only for session storage, reduced-motion detection, and final-state handoff.

## Split-Text Reveals

Purpose: Make major statements feel assembled with intention. The reveal should support editorial rhythm, not hide ordinary reading.

Frequency: Used sparingly on hero, major section statements, project titles, and closing contact line. Do not animate every paragraph.

Behavior:

- Reveal through clipping, not simple fade-up.
- Preserve semantic text in the DOM. Screen readers should receive the complete text once.
- Lines can stagger by 40-70ms. Words or characters should be avoided unless there is a strong reason.
- Metadata enters after titles, not at the same time.

Motion spec:

- Major display reveal: 600-750ms.
- Metadata reveal: 180-260ms with a 90-140ms delay after the title starts.
- Transform: optional `translateY(0.15em to 0)`, never large float-up motion.
- Clip: vertical or horizontal inset depending on composition.
- Easing: `motion/ease/signal`.

Reduced motion:

- Text appears in its final readable state.
- Optional opacity transition can be 120-180ms if it improves perceived continuity.

Mobile alternative:

- Use explicit line breaks from the design system. Do not rely on runtime text splitting that causes unstable wraps.
- Avoid character-level reveals; keep line-level or instant states.

## Vantage Interaction

Purpose: Preview a local discovery platform as a system of trust, relevance, and place without claiming sole ownership or unsupported impact.

Frequency: Encountered in selected work and Vantage project surfaces. It can be memorable, but must not slow project access.

Behavior:

- Project media begins as evidence-first poster or short silent preview.
- On precise pointer hover, a restrained signal layer connects local-business points, relevance paths, or trust markers.
- Ownership label and role remain persistent before the visitor enters the case study.
- Custom cursor may appear only over project media on precise pointer devices.
- Entering the project should feel like the selected media expands into the case-study hero.

Motion spec:

- Hover media scale: 1 to 1.03 over 220-260ms.
- Rule/title response: 180-220ms.
- Cursor/media signal response: 120-200ms or spring interpolation with low bounce.
- Project enter transition: 700-950ms.
- Easing: `motion/ease/signal`.

Reduced motion:

- Disable media zoom, custom cursor, and spatial hover response.
- Use static poster, visible role/ownership, and direct navigation or short opacity transition.

Mobile alternative:

- No hover dependency.
- Show persistent thumbnail, title, role, ownership, and a clear tap target.
- Optional tap can reveal a static detail strip, but it must not hide essential entry information.

Code Component threshold:

- Start native. Move to code only if the map-like proximity layer, custom cursor, or transition cannot meet performance and accessibility requirements in native Framer.

## gRNAlytics Sequence Interaction

Purpose: Show scientific-computing complexity becoming more readable. The sequence should communicate analysis and decision support without inventing biological accuracy, outcomes, or personal contribution details.

Frequency: Used on selected work preview and gRNAlytics project surfaces. It is explanatory, not decorative.

Behavior:

- A sequence-like row or grid resolves from raw result marks into grouped guide-RNA decision cues.
- User can scrub or step through stages: raw search, candidate grouping, scoring/annotation, clearer decision surface.
- Visual states use project-context accents: cyan, violet, and fluorescent green as restrained signal marks.
- All labels avoid unverified claims. Use neutral planning language until audit copy is final.

Motion spec:

- Stage transition: 350-520ms for transform/opacity/clip changes.
- Step control response: 120-180ms.
- Scrub response: direct and interruptible; avoid delayed animations while dragging.
- Sequence highlight pulse: 500-700ms maximum, opacity/scale only, no infinite attention loop.
- Easing: `motion/ease/signal`; linear only for direct scrub interpolation.

Reduced motion:

- Replace animated sequence with static staged panels or a selected final frame.
- Step controls switch instantly or with a short opacity transition.

Mobile alternative:

- Use tap-to-step controls or a vertical staged stack.
- Avoid horizontal drag as the only control.
- Keep labels and legends persistent.

Code Component threshold:

- Code is justified if the prototype needs accessible step state, keyboard controls, scrub logic, offscreen pausing, and reusable static reduced-motion output.

## Shared Project-Page Transitions

Purpose: Preserve spatial continuity from selected work to case study while keeping navigation fast and accessible.

Frequency: Occasional. This can be cinematic, but should not make repeated browsing feel slow.

Behavior:

- Selected project thumbnail expands or cross-maps into the project hero media.
- Project title lands first; metadata follows after a short delay.
- Team, role, and ownership are visible near the opening, not buried below the transition.
- The next-project transition should reuse the same grammar without repeating the exact opening flourish.

Motion spec:

- Total duration: 700-950ms.
- Media transform: scale/translate/opacity only.
- Title reveal: 600-750ms clipping, possibly overlapping media movement.
- Metadata delay: 90-140ms after title begins.
- Exit state: faster than enter where possible, roughly 300-450ms.
- Easing: `motion/ease/signal`.

Interruptibility:

- Back/forward navigation, keyboard activation, or repeated clicks should not restart broken keyframes.
- Prefer transitions or route-aware shared state that can retarget mid-flight.
- Focus must move to the project page heading or main content when the transition completes; reduced motion should not delay focus.

Reduced motion:

- Direct route change or 120-180ms opacity transition.
- No thumbnail expansion.

Code Component threshold:

- Native Framer first. Code is justified only if native transitions cannot handle focus, reduced motion, route interruption, and cleanup reliably.

## Signal Ticker

Purpose: Carry the technical domain texture through the homepage and create continuity between sections without becoming a distracting marquee.

Content:

`PYTHON / TYPESCRIPT / COMPUTATIONAL BIOLOGY / PRODUCT ENGINEERING / ALGORITHMS / DATA SYSTEMS / REACT / SCIENTIFIC COMPUTING /`

Behavior:

- Constant linear motion on capable desktop devices.
- Occasional project image interruptions may appear as small evidence flashes, using real or clearly labeled placeholder media only.
- Pause immediately on hover, focus, reduced motion, offscreen, or document hidden.
- Keyboard focus should expose the full static text and pause movement.

Motion spec:

- Easing: linear while moving.
- Speed: slow enough to read without tracking strain; target one full loop no faster than 24-36s depending on viewport width.
- Pause response: immediate to 180ms.
- Restart: resume from current transform, not from the beginning.

Reduced motion:

- Static line of text. If content overflows, wrap or use a non-animated horizontal layout.

Mobile alternative:

- Prefer static wrapped mono line or segmented rows.
- Do not use a fast horizontal marquee on small screens.

Code Component threshold:

- Code is justified for precise pause/resume, focus behavior, image interruptions, resize-safe loop math, and offscreen pausing.

## Reduced-Motion System

Reduced motion means the experience is complete with less movement, not stripped of meaning.

Global requirements:

- Respect `prefers-reduced-motion: reduce` at initial render.
- Listen for preference changes while the page is open.
- Do not mount hidden offscreen states that require animation to become readable.
- Disable ambient loops, cursor attraction, ticker motion, hover zoom, scroll morphing, and thumbnail expansion.
- Keep helpful opacity/color feedback where it supports comprehension.

Component alternatives:

| Component | Reduced-Motion Version |
| --- | --- |
| Opening transition | Completed hero immediately. |
| Hero signal network | Static generated frame or simplified network. |
| Split text | Final text visible, optional short opacity transition. |
| Vantage interaction | Static poster and persistent metadata. |
| gRNAlytics sequence | Static staged panels or instant step switching. |
| Project transition | Direct navigation or short crossfade. |
| Signal ticker | Static text. |
| Contact network hover | Static contact text with ordinary focus/hover treatment. |

## Mobile And Touch Alternatives

- No essential interaction depends on hover, custom cursor, or large-screen scroll choreography.
- Use persistent labels, visible ownership, and direct tap targets.
- Keep tap targets at least 44px.
- Replace pointer proximity with tap-to-step, static previews, or vertical staged content.
- Simplify canvas and sequence density at 390px and 768px.
- Test for no horizontal overflow, stable line breaks, and readable metadata.
- Avoid viewport-scaled font-size animation and avoid motion that causes text overlap during orientation changes.

## Offscreen Pausing

Every loop or expensive visual must pause when it cannot be seen.

Required pause triggers:

- Component leaves viewport through `IntersectionObserver`.
- `document.visibilityState` is not `visible`.
- `prefers-reduced-motion: reduce` is active.
- Browser tab loses foreground execution.
- Mobile low-power fallback is selected.
- User focuses ticker or hover-pauses it.

Resume rules:

- Resume from the current visual state where possible.
- Do not replay the opening transition after first-session completion.
- Avoid restarting the ticker from zero after every resize.

## Cleanup Requirements

Any Code Component must clean up:

- `requestAnimationFrame` loops.
- Timers and delayed callbacks.
- `ResizeObserver` and `IntersectionObserver` instances.
- Pointer, mouse, touch, wheel, scroll, keydown, and visibility listeners.
- Media-query listeners for reduced motion and pointer capability.
- Canvas/WebGL contexts where applicable.
- Object URLs, image preloads, and any cached media handles.

Implementation rules:

- Use React 18-compatible effects with deterministic cleanup.
- Guard browser-only APIs for Framer preview and server-like render contexts.
- Expose Framer property controls for density, speed, accent, reduced-motion frame, labels, and media sources where useful.
- Avoid unnecessary dependencies. Native browser APIs, CSS transitions, and WAAPI should be considered before animation libraries.

## Performance Risks

| Risk | Why It Matters | Mitigation |
| --- | --- | --- |
| Canvas/WebGL hero exceeds mobile budget | Can hurt LCP, INP, battery, and scroll smoothness. | Static poster first, delayed enhancement, node caps, DPR caps, offscreen pause, mobile fallback. |
| Framer Motion shorthand under load | JS-driven transforms can drop frames during page loading. | Prefer CSS transitions/WAAPI or full transform strings for heavy movement. |
| Too many text reveals | Repeated animation makes reading feel slow and can hide content. | Limit to hero, major statements, project titles, and closing line. |
| Shared transitions delay navigation | Cinematic routing can make the site feel sluggish. | Keep under 950ms, allow reduced-motion direct navigation, avoid blocking input. |
| Ticker consumes main-thread time | Constant loops can run while invisible. | Pause offscreen/hidden/reduced motion and use transform-only loops. |
| Image interruptions in ticker cause layout shift | Late media loading can create CLS. | Fixed dimensions, poster frames, precomputed aspect ratios, lazy loading below fold. |
| Custom cursor on touch devices | Creates broken or meaningless interaction. | Gate behind `(hover: hover) and (pointer: fine)`. |
| Scroll-linked animation jank | Heavy scroll handlers can hurt INP. | Use passive listeners, IntersectionObserver, CSS where possible, and requestAnimationFrame throttling. |

## When Code Components Are Justified

Use native Framer for page composition, typography, responsive layout, simple variant reveals, hover states, and standard transitions where it meets the spec.

Use React Code Components only when they materially improve interaction quality, accessibility, or performance:

- Canvas/WebGL signal network with pointer, scroll, pause, and reduced-motion control.
- Ticker with true pause/resume, focus behavior, media interruptions, and resize-safe loop math.
- gRNAlytics staged sequence with accessible controls, scrub state, and static fallback.
- Shared transition only if native Framer cannot handle route continuity, interruptibility, focus management, and reduced motion.
- SplitTextReveal only if native Framer cannot preserve semantic text, stable line breaks, and clipping behavior.
- PerformanceMonitor only if prototype validation needs runtime FPS or frame-budget diagnostics.

Do not create Code Components for ordinary cards, buttons, simple hover states, static metadata, or layout primitives that Framer can handle natively.

## Prototype Acceptance Criteria

- No Framer publishing occurs.
- Prototype work remains hidden/internal until the site is ready for review.
- Each prototype states purpose, frequency, easing, duration, interruptibility, reduced-motion behavior, and mobile behavior.
- Role and ownership metadata remain visible before team-project entry.
- No content depends on hover, cursor, or animation completion.
- Reduced-motion mode is complete for every prototype.
- Canvas, ticker, and sequence effects pause offscreen and clean up listeners.
- Motion uses transform and opacity by default; clipping is reserved for text reveals and controlled masks.
- No fake progress counters, generic gradient blobs, aggressive zooms, or cloned reference-site mechanics.
- Performance notes are recorded in `STATUS.md` during the implementation milestone, but this brief does not edit `STATUS.md` because the current task is limited to this file.

## Validation Plan For Milestone 3

- Preview at 390px, 768px, 1024px, 1440px, and 1920px.
- Test Chrome, Safari, Firefox, iOS Safari, and Android Chrome when available.
- Toggle `prefers-reduced-motion` and confirm content remains complete.
- Navigate with keyboard only and confirm focus order, pause behavior, and visible focus states.
- Verify no hover-only information on touch/mobile layouts.
- Inspect performance during hero animation, ticker loop, project transition, and gRNAlytics sequence.
- Confirm offscreen components pause with DevTools performance recording or explicit prototype diagnostics.
- Review animations slowed down to 25-50 percent speed before accepting final timings.
