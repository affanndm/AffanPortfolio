# Reference Audit: Filippo Ruffini

Target: https://www.filipporuffini.com/

Role: Reference-site analysis for Affan Nadeem's portfolio project.

Scope note: This audit uses public page extraction, public award/listing pages, and publicly visible asset/listing metadata. No private source code was accessed or claimed.

## Evidence Labels

- Directly observed behavior: visible page text/content, public image/asset links, and public page structure exposed by the live site or public listings.
- Publicly disclosed technology: technology, credits, and tags stated by public profiles, award pages, Webflow showcase pages, or social posts.
- Implementation inference: likely implementation approach inferred from observed behavior and disclosed stack. Treat these as hypotheses until verified in a browser/devtools session.

## Source URLs

- Live site: https://www.filipporuffini.com/
- Webflow showcase: https://webflow.com/made-in-webflow/website/filippo-ruffini
- Awwwards SOTD page: https://www.awwwards.com/sites/filippo-ruffini-portfolio
- CSS Design Awards page: https://www.cssdesignawards.com/sites/filippo-ruffini-portfolio/43834/
- Orpetron page: https://orpetron.com/sites/filippo-ruffini-portfolio/
- WD Awards page: https://www.wdawards.com/web/filippo-ruffini-portfolio
- Webflow GSAP Flip hover cloneable referencing this site: https://webflow.com/made-in-webflow/website/gsap-flip-corners
- LinkedIn launch post: https://www.linkedin.com/posts/filippo-ruffini-036b9a145_freelance-designer-ui-activity-7085216572725706752-QgFB
- Public Instagram post URL surfaced in search results: https://www.instagram.com/p/CuAM5qVsWjy/

## Executive Read

Filippo Ruffini's portfolio is an award-style, one-page personal site built around a strict dark editorial system, large expressive typography, a narrow color palette, dense grid metadata, custom motion, and WebGL/3D spectacle. It is not primarily a conventional case-study portfolio. It behaves more like a personal brand specimen: the grid, colors, fonts, nav labels, projects, and contact state are all treated as designed objects.

For Affan's portfolio, the useful lesson is not to copy the visual language. The useful lesson is the discipline: a clear personal system, strong first-viewport identity, project rows with explicit metadata, and motion that supports the concept. The risky parts are also clear: heavy WebGL, split-word typography, hidden/novel menu behavior, and accessibility/performance tradeoffs.

## Information Architecture

### Directly observed behavior

The live page exposes a compact one-page structure:

- Intro/loading/hero content with "PERSONAL", "Portfolio ( 2023 )", "FILIPPO RUFFINI", "pippo roof", "AVAILABLE FOR FREELANCE PROJECTS", and a large split display name.
- A self-referential design-system/spec area listing background color, accent colors, fonts, and a 12-column grid.
- Navigation labels: "( about )", "( works )", "( menu )", "( close )", "( contact )".
- A full-screen or overlay-style menu state is implied by duplicate "About", "Works", "Contact", and "(CLOSE)" text in the public page extraction.
- An About section with a short bio and specialization statement.
- A Selected Projects section with ten project entries: Marcello Cesini Arch, Silvia Bianchi, Zorah Wines, Deda Elementi, 1000 Miglia, Niu Glasses, Virality, Agave, Poli Cosmesi, and BeGood.
- A contact/footer section with "get in touch", "right now", an email field placeholder, success/error form states, footer identity, and social/developer links.

### Implementation inference

This is likely a single-page Webflow site with custom animated section transitions rather than a multi-page case-study archive. The project list appears designed as a navigable index with outbound "live site" links, not as deep case studies hosted inside the portfolio.

### Influence for Affan

Affan's site should use a similarly disciplined structure: first-viewport identity, a sharp intro statement, about/proof, selected work, and contact. But Affan's project evidence should be more case-study useful than Filippo's list if SPEC requires substance, process, constraints, or verified outcomes.

## Grid And Responsive Behavior

### Directly observed behavior

The live page explicitly presents grid specs as content:

- "12 columns"
- "width: 122px"
- "space: 30px"

The page text extraction shows duplicated content variants, which likely correspond to desktop/mobile layout variants or responsive Webflow components. Public Awwwards and WD/Muzli screenshots show both desktop and mobile design states. The mobile screenshots preserve the same dark editorial identity, large typographic panels, and system-spec treatment rather than switching to a generic stacked mobile site.

### Publicly disclosed technology

The Webflow showcase lists the project as built in Webflow by Ilja van Eck. Webflow's layout system makes a breakpoint-specific grid and duplicated responsive elements plausible.

### Implementation inference

The desktop system is likely a 12-column editorial grid with fixed max-width logic, strong absolute positioning, and breakpoint-specific rearrangement. Mobile appears to retain the concept through simplified vertical panels and tighter typography rather than a completely different visual system.

### Influence for Affan

Use a clear grid and make it visible through alignment, not through copied "12 columns" labels. Affan's responsive version should feel designed, not merely collapsed. If the portfolio uses a case-study grid, each breakpoint should preserve hierarchy: role, project title, medium, outcome/claim status, and media.

## Typography Hierarchy

### Directly observed behavior

The site names its fonts in the page content:

- Editorial New
- Neue Montreal

The hierarchy is built from:

- Huge serif display type for the name and major section language.
- Small sans-serif metadata blocks.
- Parenthetical labels and numbers, such as "( 01 )", "( 02 )", "( about )".
- Deliberately split words in the hero and menu labels: "Fili ppo Ru ffini", "Ab out", "Wo rks", "Cont act".
- Mixed case with a strong lowercase voice in labels and microcopy.

### Implementation inference

The split-word behavior is likely animated text split into spans for motion and distortion. It may be visually effective but can degrade copy/paste, search semantics, and screen-reader output if not backed by accessible labels.

### Influence for Affan

Affan can borrow the typographic confidence: one expressive display voice plus one utilitarian text voice. Do not copy the split-name motif. If Affan uses kinetic typography, keep the underlying semantic text intact and add `aria-label` or visually hidden canonical text where needed.

## Color Usage

### Directly observed behavior

The live page exposes its palette as content:

- Background: `#101010`
- First color: `#FD6746`
- Second color: `#777777`
- Third color: `#333333`
- White appears throughout the extracted content and screenshots.

Awwwards lists a two-color palette of `#101010` and `#FD6746`.

### Implementation inference

The palette works because almost everything is restrained: near-black field, white typography, and one hot orange/coral accent. Gray is used for depth and secondary metadata rather than as a full neutral system.

### Influence for Affan

Use a small, opinionated palette, but do not use Filippo's black/orange identity. Affan needs a distinct color strategy tied to his own content and project tone. If dark mode is used, contrast and long-form readability must be tested rather than assumed.

## Navigation Behavior

### Directly observed behavior

The public page exposes nav items for about, works, contact, menu, and close. The extracted text includes duplicate menu labels and "(CLOSE)", which indicates a menu overlay or expanded nav state exists in the DOM.

The site also exposes "( Don't click it )" text, which aligns with public Awwwards references to an "Easter egg animation".

### Publicly disclosed technology

The Webflow cloneable "Award-winning hover effect using GSAP Flip" states that the hover effect was originally built for `https://www.filipporuffini.com/` and refers to an "easter egg menu" hover/highlight effect. Awwwards lists "Easter egg animation" and "Mouse Interaction" as highlighted elements.

### Implementation inference

The menu likely uses custom cursor-aware hover states, GSAP Flip-style geometry changes, and an animated overlay. The nav is part utility, part interaction showcase.

### Influence for Affan

Affan's navigation should be more legible and less puzzle-like unless the portfolio concept explicitly calls for playful exploration. Borrow the idea of tactile hover feedback and strong active states. Avoid hidden jokes as core wayfinding.

## Loading Sequence

### Directly observed behavior

The live page extraction includes "0%", indicating a visible loading/progress state. Awwwards lists "Loading animation" as a highlighted element. Public screenshots show a dramatic hero load state with large layered typography and a central 3D form.

### Implementation inference

The preloader likely coordinates WebGL/model/media readiness with text reveals. It probably masks asset loading for the 3D hero and large media set. Given the site's WebGL/Three.js disclosures, the loader is likely functional as well as expressive.

### Influence for Affan

Use a loading sequence only if there is real asset work to stage. Do not add a preloader as decoration. If a loader is used, keep it brief, provide visible progress only if accurate, and make the default content accessible without animation.

## Project Presentation

### Directly observed behavior

The Selected Projects section is a curated list of project entries. Each entry exposes:

- Project title.
- Year/month.
- Credits.
- Role tags such as UI/UX Design, Corporate website, brand identity, logo design, and Development.
- Outbound live-site or portfolio links.

The public extraction shows repeated titles and metadata, likely from layered hover states or responsive duplicates.

### Publicly disclosed technology/awards context

Awwwards lists "Projects section" as a highlighted element and categorizes it under "Transition". CSS Design Awards tags the site as animated, grid, and WebGL.

### Implementation inference

The project section likely uses row hover interactions where project media appears, shifts, or transitions in relation to cursor/scroll. The structure prioritizes quick scanning and visual atmosphere over detailed written case studies.

### Influence for Affan

Use the metadata rigor: year, role, collaborators, medium, verification status, and link. Do not stop at a visual list if Affan's portfolio needs to prove capability. Add concise, verified project context and avoid inventing outcomes or claims.

## Scroll-Linked Effects And Page Transitions

### Directly observed behavior

The live page includes "scroll down" in the hero. Awwwards highlights "Projects section", "Footer animation", "Hero and 3d Models", and "Mouse Interaction" as video elements.

### Publicly disclosed technology

Public Webflow and Instagram/search snippets disclose Webflow and GSAP-powered animation. The Webflow showcase tags include WebGL, Three.js, custom cursor, glitch, and pixels. Orpetron tags include transitions, microinteractions, liquid, custom cursor, and typography.

### Implementation inference

Scroll likely drives text reveals, project image transitions, footer reveal choreography, and WebGL camera/object movement. Page transitions are probably pixel/glitch or distortion-based, even though the live IA is primarily one page.

### Influence for Affan

Use scroll-linked motion to clarify transitions between narrative sections. Do not make every section a spectacle. Affan's motion principles should be anchored to content: project proof, process, artifacts, and contact readiness.

## Hover Interactions

### Directly observed behavior

Public page text exposes menu/easter egg labels. Awwwards highlights mouse interaction. The Webflow cloneable explicitly ties a GSAP Flip hover/highlight effect to this site.

### Implementation inference

The hover system is likely built around animated corner/highlight geometry, cursor position, and text/media reveals. It is intended to reward exploration.

### Influence for Affan

Borrow the responsiveness of hover feedback, not the exact corner/highlight language. Ensure all hover-only information is also available through keyboard focus and touch interaction.

## Media Treatment

### Directly observed behavior

The live site includes image references for:

- A hero/brand visual.
- Photos of Filippo walking and holding an analog camera.
- Image labels such as "Liguria ( 5 terre )", "fujifilm x-t20", "LENS - 27.0mm", "burnt skin", and "water".
- Project imagery in public award screenshots.

The public image links resolve through Webflow-hosted asset URLs, including `cdn.prod.website-files.com`, indicating Webflow CDN asset delivery.

### Implementation inference

Media is treated as part of a graphic system: annotated, cropped, darkened, layered, and sometimes tied to hover/scroll. Personal photography adds texture without turning the site into a generic photo gallery.

### Influence for Affan

Use real project artifacts and personal media where verified. Annotate media with useful context. Avoid decorative stock-like imagery or biography claims that are not confirmed.

## Cursor Behavior

### Publicly disclosed technology/behavior

The Webflow showcase tags include custom cursor. Orpetron tags include Custom cursor. Awwwards highlights Mouse Interaction.

### Implementation inference

The cursor likely drives hover states, WebGL/3D motion, and menu highlight behavior. On touch devices, those interactions must degrade to tap/scroll states.

### Influence for Affan

A custom cursor is optional. If used, it should have a clear function such as indicating draggable media, external links, or project-hover previews. Do not use it if it harms accessibility, selection, or performance.

## Canvas, WebGL, SVG, Lottie, Video, And DOM Animation

### Publicly disclosed technology

- Webflow showcase: Webflow dev by Ilja van Eck, WebGL by Federico Valla, tags include WebGL and Three.js.
- CSS Design Awards: tags include animated, grid, WebGL.
- LinkedIn launch post: design by Filippo Ruffini, development by Ilja van Eck, WebGL by Federico Valla.
- Webflow/Instagram/search snippets: animations powered by GSAP.
- Awwwards: multiple highlighted elements are presented as videos, including loading, projects, footer, hero/3D models, and mouse interaction.
- Webflow GSAP Flip cloneable: a hover effect was originally built for this site.

### Directly observed behavior

The public page extraction and award screenshots show DOM text, image assets, form states, and video-highlighted interactions. Public image links show Webflow CDN asset delivery.

### Implementation inference

Likely stack:

- Webflow for DOM/CMS/layout.
- Custom JavaScript for GSAP timelines, SplitText-style text animation, and GSAP Flip hover geometry.
- Three.js/WebGL rendered to canvas for the hero/3D model layer.
- Webflow forms for the contact form.
- No public evidence found for Lottie as a core mechanism.
- SVG may exist for icons or vector assets, but no public evidence confirms SVG as a major animation layer.

## Performance Strategies

### Directly observed/publicly scored

Awwwards development scores list:

- Overall DEV: 6.99/10
- Animations / Transitions: 7.80/10
- Accessibility: 6.20/10
- WPO: 6.80/10
- Responsive Design: 6.80/10
- Markup / Meta-data: 7.20/10

### Implementation inference

The site appears to accept a performance/accessibility tradeoff in exchange for motion, WebGL, and typographic spectacle. The preloader likely helps manage perceived load. Webflow CDN delivery helps asset distribution, but WebGL, large media, and custom animation still raise cost.

### Influence for Affan

Affan's portfolio should not treat this reference as a performance benchmark. It should treat it as an art-direction benchmark. If Affan uses heavy motion or 3D, set explicit budgets: initial JS, image/video sizes, WebGL fallback, reduced-motion mode, and measurable Lighthouse/Core Web Vitals targets.

## Mobile Adaptations

### Directly observed/public listings

Awwwards includes a Mobile inside-look element. Public Muzli/Webflow imagery shows mobile screens maintaining the same black/orange editorial system, type specimens, and grid/spec content. The live extraction also shows duplicate text variants, likely supporting responsive alternate layouts.

### Implementation inference

Mobile likely simplifies the grid into tall panels and keeps the system-spec motif. Custom cursor and mouse interactions likely have touch-specific fallbacks or are omitted.

### Influence for Affan

Design mobile first for readability and proof. Do not rely on desktop-only hover or WebGL to carry the portfolio. If the desktop has hover previews, mobile needs tap-accessible project media and clear links.

## Reduced-Motion Behavior

### Directly observed behavior

No explicit reduced-motion UI, no reduced-motion copy, and no public listing evidence was found in the extracted page/listing data.

### Implementation inference

Because the site is heavily motion-led and Awwwards accessibility scoring is modest, robust reduced-motion support should not be assumed. This needs real browser/devtools verification before being credited.

### Influence for Affan

Affan's site must implement `prefers-reduced-motion` deliberately. Motion should degrade to simple fades, instant section changes, static media, and no cursor-follow/WebGL camera movement for reduced-motion users.

## Accessibility

### Directly observed behavior

The public text extraction contains substantial readable content, which is positive. However, the same extraction also reveals split words, duplicated text variants, repeated labels, and hidden/alternate states exposed as text. Examples include "Fili ppo Ru ffini", "Ab out", "Wo rks", "Cont act", and duplicated about/project content.

The contact form exposes placeholder-like text and success/error states. A cookie banner exposes reject/accept actions.

### Public scoring

Awwwards lists Accessibility at 6.20/10 and Responsive Design at 6.80/10 in the DEV section.

### Implementation inference

The site likely prioritizes visual/motion expression over strict semantic cleanliness. Split text and duplicate responsive elements can create screen-reader noise if not hidden or labelled correctly. Custom cursor/menu effects may need keyboard/focus equivalents.

### Influence for Affan

Affan should raise the accessibility bar:

- Preserve semantic text for names, headings, nav, and project titles.
- Add accessible labels where text is visually split.
- Hide decorative duplicates from assistive tech.
- Ensure keyboard access to menu, project links, hover previews, and contact form.
- Keep contrast measurable, especially gray text on dark backgrounds.

## Likely Implementation Approach

### Publicly disclosed technology

The most defensible public stack summary is:

- Webflow build/dev by Ilja van Eck.
- WebGL by Federico Valla.
- GSAP-powered animations.
- Three.js/WebGL tags in Webflow showcase.
- Custom cursor, glitch/pixel, and typography tags in public listings.

### Implementation inference

A likely build architecture:

1. Webflow hosts the page, assets, form, DOM sections, and responsive layouts.
2. Custom JS initializes a preloader and locks/reveals the page after key assets are ready.
3. GSAP coordinates page-load text reveals, scroll transitions, hover states, menu overlay animation, and footer animation.
4. GSAP Flip or a similar FLIP technique powers the menu/easter egg highlight geometry.
5. Three.js renders a hero WebGL model or object layer into a canvas, reacting to pointer/scroll.
6. Webflow CDN serves static images and possibly exported model/texture/media assets.

This remains inference unless verified with browser devtools or source inspection.

## What Should Influence Affan's Website

- Build an unmistakable first viewport. Filippo's site establishes name, discipline, availability, palette, and motion language immediately.
- Treat the design system as part of the story. Affan can expose constraints, artifacts, or process fragments in a way that feels specific rather than decorative.
- Use a tight content architecture. About, works, contact are enough if each section is high-signal.
- Use project metadata rigor. Year, role, collaborators, project type, link, and verification status should be clear.
- Let personal texture come from real artifacts. Photos, notes, screenshots, and project media are stronger than invented biography.
- Make motion serve identity and comprehension. Motion should reveal relationships, not just add awards-style energy.
- Keep the palette disciplined. A limited color system can feel premium if the hierarchy is strong.

## What Must Not Be Copied

- Do not copy the exact black/orange palette: `#101010` and `#FD6746`.
- Do not copy the split-name treatment or broken-word nav labels.
- Do not copy the "Don't click it" easter egg/menu concept.
- Do not copy the 3D plus-like hero object, glitch/pixel transition language, or GSAP Flip corner/highlight effect.
- Do not copy Filippo's personal facts, project list, credits, availability statement, or footer/legal details.
- Do not use heavy WebGL just because this reference does. Affan's WebGL/3D must be conceptually justified and performance-budgeted.
- Do not reproduce the same one-page award-portfolio tradeoff if Affan's site needs clearer case-study proof.
- Do not adopt accessibility weaknesses such as split text without semantic fallback, hover-only content, or duplicate responsive content exposed to assistive technologies.

## Open Questions For Affan's Implementation

- Should Affan's portfolio be primarily an identity-led artifact, a case-study proof system, or a hybrid?
- Which Affan claims, project roles, outcomes, and media are verified, and which need `NEEDS_AFFAN_CONFIRMATION`?
- Is motion a core part of Affan's brand, or should it be restrained around project evidence?
- Is a dark interface appropriate for Affan's target audience and project media, or would a lighter/editorial system serve him better?
- What performance budget is acceptable if any WebGL/canvas work is introduced?

## Bottom Line

Filippo Ruffini's portfolio is valuable as a reference for conviction: tight grid, sparse palette, expressive type, public project metadata, and motion integrated into the identity. It should not be copied visually. For Affan, the best adaptation is a distinct editorial system with stronger accessibility, clearer case-study substance, verified content only, and motion that earns its cost.
