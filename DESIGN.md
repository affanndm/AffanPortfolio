---
name: Affan Nadeem Portfolio
description: A personal editorial portrait with selected software work embedded inside it.
colors:
  canvas: "#0b0b0b"
  band: "#0e100d"
  surface: "#121310"
  surface-raised: "#181a15"
  text: "#f2f0e8"
  muted: "#a8aaa2"
  faint: "#f2f0e894"
  rule: "#f2f0e829"
  rule-strong: "#f2f0e852"
  signal: "#ff5d3a"
  acid: "#c8ff2f"
  workCanvas: "#0b0b0b"
  contactCanvas: "#ff5d3a"
  darkInk: "#090a09"
  vantage: "#f3b15c"
  grnalytics: "#65e6ff"
  violet: "#9b82ff"
  studySignature: "#3157ff"
  studyAccent: "#d5ff49"
  studyLight: "#e9e8e2"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "6rem"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "0"
  statement:
    fontFamily: "Georgia, serif"
    fontSize: "4.8rem"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "0"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "0"
  label:
    fontFamily: "ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
rounded:
  media: "2px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "160px"
components:
  command-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.media}"
    padding: "12px 14px"
    height: "44px"
  ownership-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.media}"
    padding: "7px 10px"
---

# Design System: Affan Nadeem Portfolio

## Overview

**Creative North Star: "Affan Nadeem / A Whole Person In Motion"**

The interface should feel like Affan's authored world first: student, developer, competitor, builder, computational-biology enthusiast, and person with a life outside GitHub. It is bold, kinetic, image-led, personal, and credible. Monumental identity and motion lead; personal photographs, objects, stories, experiments, and selected work gradually reveal the person.

The visual system remains flat, ruled, and deliberately asymmetric. Large sans-serif declarations establish confidence; serif statements slow the reader at personal and interpretive moments; monospaced text is reserved for provenance and system state. Mobile must be recomposed as its own editorial sequence, not a stacked desktop imitation.

**Key Characteristics:**

- The name `AFFAN NADEEM` is the opening composition; no project or methodology competes with it.
- About and personal imagery appear before Selected Work.
- A full-screen personal index expands navigation to About, Work, Playground, Life, and Contact.
- Strong scale contrast and thin structural rules.
- Real personal and project media before long explanation.
- Ownership remains visible on team work, while evidence detail moves to deeper case studies.
- Motion that communicates resolution, sequence, or state.

## Selected Art Direction — B / Lanes

**Rule:** It is not information with art. It is art that shows information.

Direction B is selected. Its production grammar is:

- Repeated `AFFAN NADEEM` lanes form the visual field.
- A cursor/touch scanner replaces the name with `STUDENT / TORONTO`, `DEVELOPER / BUILDER`, `COMPETITOR / ALGORITHMS`, and `BIOLOGY / LIFE OFF-SCREEN`.
- The reveal is the information architecture: roles are discovered inside the artwork rather than listed beside it.
- The dark field, strict typographic rhythm, responsive reticle, and peripheral metadata supply the Filippo-level confidence without copying his split serif name, coral palette, WebGL object, or source.
- Mobile uses an authored split/reveal composition and an explicit tap control; it never depends on hover.
- Reduced motion holds a static split between name and roles with no pointer travel.
- Personal photographs and project recordings must later enter as lane material, masks, textures, or full-scene transitions—not cards placed beside the typography.

## Affan-first Study System — Completed Review

The archived route `/design-lab/filippo-study/` preserves the comparison study; Identity B now supplies the production homepage opening:

- **Canvas:** `#0D0F12` neutral black and `#E9E8E2` neutral light.
- **Signature:** `#3157FF` ultramarine, chosen to separate Affan's study from Filippo's coral identity.
- **Interaction accent:** `#D5FF49`, used rarely for focus, active calibration, and the `A` easter egg.
- **Typography:** production-safe Geist and Georgia for the study; final display licensing remains open.
- **Identity A / Assembly:** measured typographic plates assemble the name.
- **Identity B / Lanes:** a cursor-responsive lane system connects competition, algorithms, and biology.
- **Identity C / Annotated Field:** a drenched blue identity field surrounds the name with Affan's roles and interests.
- **Menu:** a full-screen five-part index to the person.
- **System reveal:** an interactive calibration sequence for canvas, signature, type, grid, and interaction.
- **About and personal sequence:** exact Affan-owned media requests replace stock imagery.
- **Selected Work:** a visual index appears only after the personal story.

Every study includes mobile and reduced-motion behavior plus a rationale explaining what reference principle it interprets and why the result is original. Identity B is selected; A and C remain archived comparison studies.

The remaining sections document the production/local implementation. Where an older hero rule conflicts with B / Lanes, the selected art direction above is authoritative.

## Colors

The palette behaves like an instrument panel: neutral structure, one rare signal accent, and project color only where it identifies evidence.

### Primary

- **Hot Coral:** Primary authored accent for identity, selection, section transitions, and the final contact field.
- **Acid Signal:** Active nodes, focus rings, project actions, and the fully drenched Lab chapter.

### Secondary

- **Vantage Amber:** Local-discovery context, never a global brand wash.
- **gRNA Cyan:** Sequence, BLAST, annotation, and computational-biology context.
- **Evidence Violet:** Reserved for future data comparison when lime or cyan already carries a different meaning.

### Neutral

- **Black Field:** Global canvas and high-contrast command surfaces.
- **System Band:** Full-width section rhythm without floating cards.
- **Raised Surface:** Media and internal experiment stages.
- **Warm Signal Text:** Primary copy; deliberately softer than pure white.
- **Measured Muted:** Supporting prose that remains comfortably readable.
- **Rules:** Structural dividers, not decorative outlines.

**The Two-Energy Rule.** Coral owns identity and contact; acid owns experimentation and live signal. They may meet only in small responsive-object details and project controls.

**The Project Color Rule.** Amber and cyan belong to their projects. They do not decorate unrelated sections.

## Typography

**Display Font:** Geist with Arial fallback  
**Body Font:** Geist with Arial fallback  
**Statement Font:** Georgia with a system serif fallback  
**Label/Mono Font:** System monospace (`ui-monospace`)

**Character:** Geist carries the engineering voice without looking like terminal cosplay. Georgia is a controlled editorial interruption for interpretation, while the system monospace is functional metadata only. Keeping one downloaded family reduces first-load cost without losing the contrast between declaration, reflection, and provenance.

### Hierarchy

- **Display** (700, 6rem desktop / 5rem tablet / 3.45rem mobile, 0.88): hero and project names only.
- **Statement** (400, 4.8rem desktop / 3.9rem tablet / 2.85rem mobile, 0.96): major section arguments and transitions.
- **Project Title** (700, 4.5rem desktop / 3.75rem tablet / 3.25rem mobile, 0.92): flagship titles.
- **Lead** (400, 1.35rem desktop / 1.2rem tablet / 1.08rem mobile, 1.55): concise framing, capped at 68 characters per line.
- **Body** (400, 1rem, 1.68): case-study prose, capped at 72 characters per line.
- **Label** (400, 0.78rem, 1.35, uppercase): roles, years, evidence states, and controls.

**The One Serif Move Rule.** Serif type marks interpretation or reflection. It cannot become the default heading treatment for every block.

**The Functional Mono Rule.** Monospace communicates metadata, provenance, sequence, or control state. It is forbidden for normal paragraphs.

## Elevation

The system is flat by default. It uses scene changes, real media, border contrast, sticky positioning, and overlap inside project visuals instead of drop shadows. Ambient glows and glass cards are prohibited; the hero signal field provides atmosphere without changing text contrast.

**The Flat Evidence Rule.** Evidence does not float in decorative cards. It sits on the same plane as the story and is separated by alignment, spacing, and one-pixel rules.

## Components

### Command Links

- **Shape:** Compact rectangle with lightly eased corners (8px) and a 44px minimum target.
- **Default:** Transparent dark surface, warm text, one-pixel structural border.
- **Hover:** Border shifts to signal lime; background changes only by a restrained signal tint.
- **Focus:** Two-pixel signal outline with a four-pixel offset.
- **Active:** A brief 0.98 scale response; never bounce or elastic easing.

### Ownership Labels

- **Style:** Bordered metadata capsule with a small signal dot and visible role detail.
- **Purpose:** Appears before every team project or contribution-only item is entered.
- **Mobile:** May wrap into multiple lines; information remains persistent and never hover-dependent.

### Project Media

- **Shape:** 16:9 frame with an 8px radius and no shadow.
- **Vantage:** Uses verified live-deployment media with an explicit capture caption.
- **gRNAlytics:** Uses a source-backed sequence and pipeline visualization labeled as code flow, not biological output.
- **Motion:** At most a 1.025 media scale or a bounded sequence scanner; reduced motion shows the final static state.

### Equal-Stage Project Carousel

- **Structure:** One six-project stage replaces the Vantage lead, secondary rail, and separate gRNAlytics homepage chapter. Every project receives the same viewport, metadata hierarchy, and direct-selection weight.
- **Art direction:** The shared grid stays stable while each project changes the artwork itself: sliced local-discovery media, sequence/pipeline typography, responsive identity lanes, algorithm topology, stacked editorial pages, or an archival browser object.
- **Interaction:** Visible previous/next controls, six direct project buttons, and arrow/Home/End keyboard commands select a project. The live status announces the active title without auto-rotation.
- **Desktop motion:** ScrollTrigger pins the stage, maps vertical progress across six compositions, scrubs between them, and settles with directional snapping. Direct controls reposition the pinned scroll state immediately while the selected project's artwork and copy ease into place, avoiding competing scroll tweens.
- **Mobile:** Native horizontal momentum scrolling and CSS scroll snap replace the pinned sequence. A partial-next-project cue remains visible, all controls remain tappable, and no information depends on hover.
- **Reduced motion:** The same selection controls switch slides without smooth travel or animated entrances.
- **Evidence hierarchy:** Vantage and gRNAlytics retain case studies and native side-stages; the remaining public projects expose verified source paths without fabricated case-study depth.

### Project Side-Stage

- **Entry:** A visible `Open project` control sits over each media poster; no essential entry depends on hover.
- **Behavior:** Native modal dialog slides from the right and occupies most of the viewport, preserving the feeling of staying inside the homepage while giving the project its own stage.
- **Content:** Project identity, real media, ownership, discipline, stack, and explicit links to the full case study and public source evidence.
- **Accessibility:** Focus is trapped/restored by the native dialog, Escape closes with a bounded exit, backdrop click closes, and reduced motion resolves nearly instantly.

### Lab Index

- **Structure:** Ruled rows with index, persistent abstract thumbnail, ownership, status, description, and repository action.
- **Desktop:** Dense comparison layout.
- **Mobile:** Compact two-stage row that moves description and actions below the title without hiding status.
- **Rule:** Verification and archive state must be readable, not encoded by color alone.

### About, Profiles, And Contact

- **About:** First-person copy and an oversized geometric `A/N` mark replace resume-like biography blocks.
- **Profiles:** GitHub and LinkedIn are visible text links in both navigation and body content; they are not hidden behind icons or a footer-only treatment.
- **Contact:** A full coral closing field contains the verified public email plus GitHub and LinkedIn, with a monumental signature acting as the final visual object.

### Beyond GitHub Archive

- **Purpose:** A full ultramarine chapter near the end expands Affan's story beyond source repositories without changing the existing About or Contact compositions.
- **Structure:** Three ruled tabs — Experience, Competition, and School — reveal compact editorial records rather than résumé cards.
- **Interaction:** The first record is server-rendered, all records remain available without JavaScript, and progressive enhancement adds roving tab focus plus arrow/Home/End keyboard commands.
- **Evidence:** Public copy stays close to Affan's LinkedIn and the explicit 2026-07-16 request to incorporate that profile material. Hidden or third-party-inferred job titles are excluded.
- **Visual rule:** Ultramarine is confined to this single biographical chapter; acid lime marks the selected category and record indices, while an oversized `MORE THAN CODE` footer becomes the visual object.
- **Mobile:** Tabs remain horizontally scrollable, records collapse to a readable two-column editorial list, and no content depends on hover.

### Navigation

- **Desktop:** Sticky, restrained, and subordinate to the page title.
- **Mobile:** Native disclosure semantics enhanced with close-on-link, outside click, Escape, and focus return.
- **Motion:** Hamburger lines use transforms only. Navigation never depends on a custom cursor.

### Signal Ticker

- **Purpose:** Establishes technical range between hero and project evidence.
- **Control:** Pauses on hover, focus, explicit keyboard command, when offscreen, and while the page is hidden.
- **Fallback:** Static wrapped text on mobile and under reduced motion.

### Scroll Motion

- Lenis owns wheel-scroll interpolation on qualifying desktop viewports and is synchronized to GSAP's ticker and ScrollTrigger. Native scrolling remains intact on mobile, coarse layouts, and reduced-motion profiles.
- GSAP and ScrollTrigger orchestrate the lane entrance, project carousel progress, per-project reveals, Lab continuity, About motion, and contact exit.
- A null-rendering client controller injects the generated motion module only after React hydration on a qualifying desktop viewport. This prevents GSAP's pin spacers and inline transforms from racing hydration; mobile and reduced-motion users never request the module.
- A second small hydrated controller owns carousel selection, keyboard behavior, mobile scroll synchronization, inert state, and live status without turning the full carousel into a client-rendered component.
- The adapted React Bits Magnet remains limited to the two flagship project openers.
- Opening a project side-stage stops Lenis and marks the dialog as a protected native-scroll region; closing it restores page interpolation.
- Essential small text moves and deblurs without opacity fading so every animation frame remains contrast-compliant.
- All remaining hover, press, media, and navigation feedback stays in CSS for responsiveness and lower runtime cost.

## Do's and Don'ts

### Do:

- **Do** show ownership and Affan's role before a visitor enters a team project.
- **Do** place real project media or a clearly labeled source-backed diagram before long case-study prose.
- **Do** keep the canvas flat and let project evidence create visual variety.
- **Do** use the 12/6/4 column logic and full-width section bands with restrained 8px media corners.
- **Do** respect reduced motion, coarse pointers, keyboard operation, and 44px touch targets from the first implementation.
- **Do** keep every project claim aligned with `content-audit/CLAIMS_LEDGER.md`.

### Don't:

- **Don't** build a generic student portfolio with a centered headshot hero, skills cloud, skill bars, six identical rounded cards, or a GitHub contribution graph.
- **Don't** use generic AI gradient blobs, decorative grid overlays, glassmorphism, beige editorial surfaces, or purple-blue atmosphere as identity.
- **Don't** turn the site into a resume dump or use generic "passionate developer" language.
- **Don't** use a fake loader, fake metrics, fake product output, or decorative motion that delays access to the work.
- **Don't** copy source code, assets, personal wording, exact palette values, or signature branded objects from Filippo Ruffini, Tigran, or Abhijit Rout. Reference-led composition and palette families must resolve into Affan-specific systems.
- **Don't** imply sole ownership of Vantage or gRNAlytics, assign private team roles from public handles, or claim unverified biological accuracy, impact, adoption, awards, revenue, or performance gains.

## First-Sequence Visual System

- **Canvas:** `#101010`; the hero, transition, and Vantage entry read as one continuous stage.
- **Identity accent:** hot coral `#ff6245`; it carries the oversized year and small active states.
- **Typography:** Geist remains the utility face; Georgia supplies the high-contrast identity/project voice until a licensed production display face is approved.
- **Composition:** edge metadata, four corner marks, oversized background numerals, two semantic name lines, and one central interface artifact.
- **Object rule:** the hero object must contain real project media. Generic orbit, particle, glowing sphere, and decorative dashboard imagery are prohibited.
- **Motion rule:** the object reacts to pointer depth, exits with the hero, and is visually replaced by an expanding Vantage capture. No content is hidden when JavaScript or motion is unavailable.
- **Mobile rule:** preserve the oversized year, readable full name, central artifact, persistent project label, and a direct open-project control. Desktop choreography collapses to a composed static sequence.
- **Don't** bury publication status, make information hover-only, or let a canvas carry essential meaning.
