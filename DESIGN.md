---
name: Affan Nadeem - Signal / Systems
description: An evidence-led portfolio for software that resolves complex systems.
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

# Design System: Affan Nadeem - Signal / Systems

## Overview

**Creative North Star: "Affan Nadeem / The Resolved Signal"**

The interface should feel like Affan's authored world first and a technical field becoming legible under examination second. It is bold, kinetic, object-led, and evidence-rich: monumental identity and motion lead, then the theatre resolves into a working product state, source-backed diagram, ownership label, or commit trail.

The visual system is flat, ruled, and deliberately asymmetric. Large sans-serif declarations establish confidence; serif statements slow the reader at moments of interpretation; monospaced text is reserved for provenance and system state. Mobile is recomposed as a compact evidence index, not a stacked imitation of desktop.

**Key Characteristics:**

- Five distinct scenes: black/coral identity hero, black stacked-work stage, acid Lab, black personal chapter, and coral close.
- Strong scale contrast and thin structural rules.
- Real project media before long explanation.
- Ownership, publication status, and evidence visible before entry.
- Motion that communicates resolution, sequence, or state.

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

### Homepage Project Reel

- **Structure:** Moving proof first, title and contribution context second, source actions last.
- **Pacing:** Two large project chapters with deliberate vertical separation, not a grid of equal cards.
- **Pinned argument:** On large screens, the selected-work statement remains fixed while the project evidence moves past it.
- **Mobile:** The statement returns to normal document flow and every project remains fully readable without hover.

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
- GSAP, `@gsap/react`, ScrollTrigger, and SplitText orchestrate the character-led identity entrance, pointer-responsive artifact, hero exit, project portal expansion, and closing statement reveal.
- The desktop motion chunk is loaded lazily after the viewport qualifies; mobile and reduced-motion users never download GSAP, SplitText, or Lenis.
- React Bits patterns are adapted selectively: Magnet adds bounded attraction to the project opener, while ScrollFloat gives the Vantage closing statement a character reveal without allowing mid-word line breaks.
- Opening a project side-stage stops Lenis and marks the dialog as a protected native-scroll region; closing it restores page interpolation.
- Initial word contrast remains WCAG-compliant; the reveal moves from muted-readable to fully clear rather than hidden to visible.
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
