# Reference Audit: Tigran Azatyan

Source site: https://tigranz.com/

Audit date: 2026-07-15

## Scope And Evidence

This audit uses only public evidence: rendered pages, browser screenshots, search/open text extraction, and Chrome network-log URLs visible from a public browser session. I did not access private source code, private Framer project files, or unpublished assets.

Primary URLs inspected:

- https://tigranz.com/
- https://tigranz.com/project_tencent
- https://tigranz.com/project_zam.com
- https://tigranz.com/project_pubg
- https://tigranz.com/project_pbx
- https://tigranz.com/project_ebill

Public/network URLs observed during browser loading:

- https://framerusercontent.com/sites/4MdtdYPnVTlvpAo7IfKhsN/script_main.57G2ZUTN.mjs
- https://events.framer.com/script?v=2
- https://edit.framer.com/init.mjs
- https://unpkg.com/@rive-app/canvas@2.26.1/rive.wasm
- https://framerusercontent.com/assets/NGWh2dFf9s1gPXKoK3yo9YnXQ.riv
- https://framerusercontent.com/assets/UlpLFVxiJiYlTBQHyZhQoYiOp0.riv
- https://framerusercontent.com/assets/l9Z97pFt68eLhBR6CF854qIIcuQ.riv
- https://framerusercontent.com/assets/89XOS3pfqKUfy9D9rEiFWIcxwaM.riv
- https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F1087617182
- https://player.vimeo.com/video/1087617182
- https://framerusercontent.com/assets/vIRmDKqcP4XY7h5xKRK6EMpeCg.mp4
- https://framerusercontent.com/assets/cdIP4RfFX1r2StuMGJTyknW1DRY.mp4
- https://framerusercontent.com/images/F4N6QNIsQhLrogHY19tfjYTxhM4.png
- https://framerusercontent.com/images/ikaKCqU3V8HZ9waRsbbTmYyE.png?scale-down-to=1024

Evidence labels used below:

- Directly observed behavior: visible in public rendered pages/screenshots or text extraction.
- Publicly disclosed technology: visible public network/source URL or project text.
- Implementation inference: likely approach based on behavior and public network evidence, not claimed as private source knowledge.

## 2026-07-16 Public Source Reinspection

The live homepage and its publicly delivered source were rechecked after Affan rejected the first production art direction.

- The HTML response was approximately 269 KB and identified `Framer 5b26096` with `Server: Framer/71ecfbf`.
- The server-delivered markup contained 26 canvas elements and 82 inline SVG elements. Public component names include `home.riv`, `MotionDesigner.riv`, `nav_work.riv`, `nav_about.riv`, `nav_contact.riv`, a Showreel, Work, About, client-logo Rive scenes, Contact, and Footer.
- The visible client-logo system includes separate Rive scenes for Tencent, Evernote, Airbnb, Trovo, Alice, PUBG, Vornado, PBX, Nano, and Keeva. This is a concrete reason the site feels animated at the component level rather than decorated after layout.
- Public modulepreloads expose a Framer runtime, the site main module, and multiple split chunks. Public network evidence also exposes Rive WASM, `.riv` scenes, Vimeo, MP4, and PNG project assets.
- The source includes distinct desktop, tablet, small/tablet, and phone variants. Repeated About copy in extraction is consistent with those separate responsive compositions.
- The raw HTML pass contained no conventional `h1` or `h2` elements despite strong visible display hierarchy. Affan's implementation should preserve the visual confidence while keeping real semantic headings.
- Neue Regrade is the dominant disclosed family across multiple weights. The richness comes from one committed display voice, bespoke motion scenes, and media sequencing—not from piling generic fonts or cards onto the page.

Implementation consequence for Affan: use Tigran's media-first confidence and project-trailer pacing, but keep motion tied to real project evidence, keep role boundaries visible, and avoid reproducing the Rive-led showreel mechanic.

### 2026-07-16 live visual confirmation

- The first viewport is almost entirely black until the custom illustrated `motion designer` wordmark resolves, with lime, coral, violet, pink, and yellow used as character color rather than interface chrome.
- The navigation stays extremely small and calm against the hero, so the animated identity owns the viewport.
- A large repeating location/name rail separates the opening from the work chapter and gives motion a structural job.
- The project routes are ordinary URLs, while the homepage behaves like a showreel. This separation supports Affan's new side-stage previews plus evidence-heavy full case-study routes.

Translation for Affan: keep the saturated color confidence, black canvas, calm navigation, and trailer-first project rhythm; use Affan's project imagery, ownership copy, and system language rather than Tigran's illustrated lettering or client work.

## Directly Observed Behavior

### Information Architecture

- The homepage has a compact fixed-feeling identity/nav layer, a large motion-led hero, a horizontal ticker, a media/play area, Work, About, selected clients, and Contact.
- Desktop navigation shows logo at top left and three text links at top right: work, about, contact.
- Mobile top view shows the logo but no visible text navigation or hamburger in the captured viewport.
- Work links repeat in the extracted text: Tencent, Zam, PUBG, PBX: Executioners, and eBill. On mobile, these become a plain vertical list with rule separators.
- About content is personal and informal, including emoji-like inline markers on mobile. The content repeats in the public text extraction, likely because multiple responsive variants exist in the DOM.
- Contact resolves to a large email-style wordmark: `hello@tigranz.com`, with the `@` and `.com` treated as graphic accent elements.
- Project pages are separate routes, not inline modals. The inspected routes include motion-heavy case studies and one product/app design case study.

### Grid And Responsive Behavior

- Desktop uses a dark stage with extreme negative space. Sections are separated by large vertical gaps, with content often left-aligned inside a wide canvas.
- Project pages use a simple left-aligned case-study stack: oversized title, subtitle, small metadata, media bands/grids, concise body copy, and footer.
- Motion project media is presented in wide cinematic strips and multi-panel rows. Tencent uses a 3-screen visual motif that matches the case-study content.
- eBill is more product-design oriented: phone mockups, app screens, component-library imagery, and a Figma prototype link.
- Mobile homepage stacks sections cleanly enough to reveal the whole IA, but the hero artwork is horizontally clipped and the word "designer" is cropped in the captured 390px viewport.
- Mobile Tencent also shows right-edge clipping in long body lines. This is a direct responsive issue, not an inference.

### Typography Hierarchy

- The system relies on a heavy rounded grotesque or rounded sans visual style. Exact font names were not verified.
- Hero typography is not conventional text; it is an illustrated word/image composition around "motion designer."
- Section titles use large, bold lowercase words: work, about, contact.
- Project titles are oversized and direct: ZAM, Tencent Presentation, eBill.
- Metadata uses a small gray label plus brighter value pattern, for example Service / Motion and Year / 2023.
- Body copy is concise, white on black, and narrow in line length on desktop project pages.

### Color Usage

- The site is primarily black with white type and gray secondary metadata.
- High-saturation accents appear in controlled bursts: lime green in the ticker/contact, purple in the email `@`, red/purple/yellow/pink/lime in the hero artwork, and project-specific media colors.
- Project pages mostly avoid decorative UI color and let the media carry color.

### Navigation Behavior

- Top navigation remains visually minimal and text-based on desktop.
- Direct hash captures for `#work`, `#about`, and `#contact` rendered blank black in headless Chrome, so I am not treating those screenshots as reliable evidence of user-facing anchor behavior.
- The public extracted content and visible desktop nav indicate the links target sections rather than separate pages.
- Project navigation is link-based via the project names on the homepage.

### Loading Sequence

- The first viewport resolves into logo/nav plus the large "motion designer" hero artwork.
- Below the ticker, a circular media/play or loading control appears in the media area on mobile and in tall desktop captures.
- Some desktop section content did not appear in tall top-only screenshots, suggesting viewport-timed or lazy/reveal behavior. This is observed behavior in the capture, but the exact trigger implementation is not verified.

### Project Presentation

- Tigran's strongest pattern is "trailer before explanation." Project pages show visual evidence early, then short explanatory copy.
- Tencent leads with title/subtitle/metadata and immediate dark cinematic motion frames before the written explanation.
- ZAM is more text-led at the start but quickly moves into motion-system media and states that the work involved timing, transitions, typography effects, and Lottie web animation.
- eBill uses a longer product case-study structure: overview, prototype link, design concept/sketching, design principles, app structure, and component library imagery.
- PUBG includes external proof links to TikTok/YouTube and public performance claims on the page. Those claims are Tigran's claims and should not influence Affan except as a reminder to cite evidence when using metrics.

### Scroll-Linked Effects

- The site has a staged scroll rhythm: large dead-space intervals, section title reveals, and delayed/lazy media zones.
- Exact scroll-trigger mechanics were not verified. Based on the rendered behavior, the page likely uses Framer viewport/reveal effects and/or embedded animation states.
- Affan should study the pacing idea, not the blank-space amount. The desktop gaps are distinctive but would be risky for a portfolio that needs technical clarity.

### Hover Interactions And Cursor Behavior

- A circular "play" control/indicator is directly visible in the home media area, especially on mobile.
- I could not reliably execute live hover checks in this environment. Do not treat hover mechanics as verified.
- Implementation inference: the homepage likely uses a custom media cursor or interactive play overlay around a Vimeo/video/Rive element.
- Affan should not depend on hover-only disclosure; Tigran's mobile list is a useful fallback pattern.

### Page Transitions

- Separate project routes load with the same logo/nav frame and dark visual language.
- I did not verify a custom animated transition between homepage and project pages.
- Implementation inference: route/page transitions are likely handled by Framer's runtime or Framer page effects.

### Media Treatment

- Media is the primary evidence layer. Motion work is shown as dark cinematic frames, strips, embedded video, and animation assets.
- The site favors pre-rendered motion clips/assets over long written explanation.
- eBill uses static image/mockup assets and a Figma prototype link.
- The visual treatment is intentionally plain around media: black background, minimal chrome, no decorative cards.

## Publicly Exposed / Disclosed Technology

- Framer infrastructure is visible in network URLs: `framerusercontent.com` JavaScript chunks, `events.framer.com`, and `edit.framer.com/init.mjs`.
- Public HTML/source evidence includes Framer generator/server markers and Framer search-index data; this makes Framer a public implementation fact, not merely an inference.
- Framer CDN serves fonts, scripts, images, JSON assets, `.riv` files, and MP4 files.
- Rive is visible through `@rive-app/canvas@2.26.1/rive.wasm` and multiple `.riv` assets.
- Vimeo is visible through oEmbed and player URLs for an autoplaying, muted, looping embed.
- ZAM page copy publicly states that Lottie animations were used for web delivery and describes them as lightweight responsive assets.
- eBill image links use Framer's image CDN and at least one `scale-down-to=1024` image parameter.
- Public font evidence points to Neue Regrade and Inter-family usage in addition to the visually observed rounded grotesque direction.

## Implementation Inference

- The site is very likely built/published with Framer or a Framer export/runtime, based on public Framer script, event, edit, and CDN URLs.
- Homepage hero and decorative motion likely use Rive canvas assets for some interactive/animated elements.
- JSON animation assets may include Lottie or Framer animation data. Lottie is confirmed for the ZAM project work, but not every JSON asset should be labeled as Lottie without source inspection.
- The site appears to lean on pre-rendered media, Rive, Vimeo, and Framer runtime effects rather than custom WebGL.
- The homepage text duplication in public extraction likely comes from responsive variants kept in the DOM. Whether hidden variants are properly removed from the accessibility tree was not verified.

## Performance Strategies And Risks

Observed strategies:

- Assets are served from Framer CDN.
- Route-specific `.mjs` chunks are loaded from `framerusercontent.com`.
- WOFF2 web fonts are used.
- Images are CDN-hosted, with scale-down parameters visible on some image URLs.
- Heavy motion is mostly delivered as video, Rive files, JSON animation assets, and MP4 rather than in-page bespoke rendering.

Observed risks:

- Homepage network evidence includes many JSON and `.riv` assets, Rive WASM, Vimeo, Framer analytics/events, and third-party scripts.
- Vimeo and Rive add runtime weight and third-party dependency risk.
- Large animated/interactive hero content appears to contribute to loading/play states below the fold.
- Mobile screenshots show horizontal clipping, which would fail Affan's "no horizontal overflow" target if reproduced.
- Public search-index inspection did not surface semantic heading entries for the homepage, so Affan should not inherit the reference's visual-heading-only risk.

## Reduced-Motion Behavior

- A Chrome capture with `prefers-reduced-motion` forced looked materially similar to the normal static capture.
- I did not verify whether animation playback actually stops under reduced motion.
- Because the same visual/asset-heavy page still appears under the reduced-motion capture, Affan should not copy this blindly. Affan's spec requires a complete static reduced-motion version, simplified mobile motion, and no hover/cursor dependency.

## Accessibility Notes

Strengths:

- High contrast white-on-black text is generally legible.
- Major project/page text is extractable as text, not only baked into images.
- Mobile work links are visible as persistent list items rather than hover-only cards.

Risks:

- Public extraction shows repeated About and project-link text, suggesting duplicated responsive variants may exist in the DOM.
- Mobile hero and mobile Tencent body text clip horizontally in screenshots.
- Image/media alt quality was not verified; extracted image links appear generically as "Image" in the public text layer.
- The circular play/media control needs keyboard and screen-reader verification; I could not confirm it.
- Motion-heavy pages need a stronger visible reduced-motion fallback than I could verify publicly.
- Semantic headings need independent verification on a site like this; Affan's implementation should expose real `h1`/`h2`/`h3` structure, not only styled text layers.

## What Should Influence Affan's Website

- Lead with media evidence before explanation. For Vantage and gRNAlytics, show a short motion proof or focused product visual before the case-study prose.
- Use compact project metadata near the title: role, year, discipline, stack, ownership. Affan must add ownership clearly because his flagship work includes team/contributor projects.
- Keep case-study prose concise and adjacent to visual proof. Tigran's project pages work because they do not over-explain before showing the work.
- Let project-specific media carry color while the base site stays disciplined.
- Use modular project routes with consistent metadata and variable media sections.
- Give motion work a "trailer" feel: poster frame, short clip, then evidence-backed explanation.
- Preserve a mobile fallback where project links are always visible and not dependent on hover.
- Use public disclaimers where needed. Tigran includes a selected-clients trademark/logo disclaimer; Affan should similarly be explicit about team credits, external marks, and contribution boundaries.

## What Must Not Be Copied

- Do not copy the "motion designer" illustrated hero, logo, lettering, ticker style, circular play control, exact colors, project ordering, page spacing, or media layouts.
- Do not copy Tigran's personal copy, client claims, project claims, metrics, or brand relationships.
- Do not copy public assets, Rive files, videos, logo marks, screenshots, or Framer structure.
- Do not copy the mobile overflow/clipping behavior.
- Do not copy the repeated hidden responsive-content pattern unless hidden variants are proven inaccessible to screen readers.
- Do not rely on Vimeo/Rive/Lottie-heavy runtime effects if they threaten Affan's Lighthouse and reduced-motion requirements.
- Do not duplicate separate desktop/mobile content in the DOM unless non-active variants are hidden from assistive technology and search.
- Do not use Tigran's motion portfolio structure as a one-to-one template. Affan's site needs software-system credibility, contribution evidence, and verified technical ownership, not a pure motion reel.

## Recommended Translation For Affan

Affan should adapt Tigran's strongest principle: "show the system in motion before asking the visitor to read." The original Affan version should be stricter, more evidentiary, and more technical:

- Vantage: open with a short local-discovery interaction sequence, then immediately label Affan's exact role and contribution status.
- gRNAlytics: open with a compact computational/biological decision visual, then explain the contribution with verified repository evidence.
- Lab projects: use persistent thumbnails or short previews, but keep ownership labels visible at list level.
- Mobile: prioritize readable project links and persistent metadata over dramatic cropping.
- Reduced motion: render static poster frames and completed signal-network states rather than loading full animation stacks.
- Implementation: use typed project content, semantic Next.js routes, native videos/posters or `next/image` assets, and small client islands only where motion materially improves evidence.
