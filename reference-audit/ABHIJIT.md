# Reference Audit: Abhijit Rout

Analyst: Reference-site analyst for Affan Nadeem portfolio  
Site inspected: https://www.abhijitrout.in/#about  
Date: 2026-07-15

## Scope And Evidence

This audit uses only public evidence: rendered page text exposed at `https://www.abhijitrout.in/#about`, the public HTML, HTTP headers, Framer search index, sitemap, robots file, and network-visible Framer asset/module URLs. I did not access private source code, Framer editor files, or unpublished project material. Local headless Chrome inspection was attempted but was not stable enough to rely on for screenshots or live interaction traces, so live hover and route-transition details are marked as inference unless backed by public HTML/module evidence. The site is a live portfolio and may change after this audit snapshot.

Source URLs:

- https://www.abhijitrout.in/#about
- https://www.abhijitrout.in/
- https://www.abhijitrout.in/work/store
- https://www.abhijitrout.in/sitemap.xml
- https://www.abhijitrout.in/robots.txt
- https://framerusercontent.com/sites/3AqSpaz8wgO7KojULcrkFt/searchIndex-Q4pbX5DKhdzB.json
- https://framerusercontent.com/sites/3AqSpaz8wgO7KojULcrkFt/Ticker.BEeyAnQp.mjs
- https://framerusercontent.com/sites/3AqSpaz8wgO7KojULcrkFt/Smooth_Scroll.8nYpjD2s.mjs
- https://framerusercontent.com/sites/3AqSpaz8wgO7KojULcrkFt/script_main.MAmlxRA2.mjs

## 2026-07-16 Public Source Reinspection

The live homepage and publicly delivered source were rechecked after Affan rejected the first production art direction.

- The HTML response was approximately 366 KB and identified `Framer b3492b4` with `Server: Framer/71ecfbf`.
- The server-delivered markup contained 96 images, two videos, 24 inline SVG elements, and no canvas element. The experience is therefore primarily built from authored media, DOM composition, Framer Motion, ticker behavior, and smooth scrolling rather than a custom WebGL centerpiece.
- Public component names expose the actual long-form rhythm: Hero, Ticker Container, transition images, Selected Work, a 16-variant Visual Experiments system, About, Social, Video, Work Chronicle, Chair, CTA, gradient transition, and Footer.
- The public preload graph explicitly includes React, Framer, Motion, `Ticker.BEeyAnQp.mjs`, and `Smooth_Scroll.8nYpjD2s.mjs`. GIF assets, an MP4, profile imagery, transition imagery, and a looping audio script create the lived-in texture.
- The public CSS declares a deliberately eclectic font world including Geist, Instrument Serif, Inter Tight, NewYork, PP Mondwest, PP Pangaia, PP NeueBit, and several display faces. The breadth is part of Abhijit's identity, but it also creates a transfer and cohesion risk that Affan should not inherit literally.
- Repeated desktop/mobile copy and duplicated footer content are visible in public extraction. Affan should achieve responsive recomposition without exposing duplicate reading order to assistive technology or search.

Implementation consequence for Affan: carry forward the personal chronology, experimental second tier, abundant real artifacts, and authored close. Do not copy the soundtrack, eclectic type collection, visual-experiment mechanics, or personal narrative.

## High-Level Takeaway

Abhijit's site works because it makes the portfolio feel lived-in: selected work, experiments, chronology, personal context, and a long-form project story all sit in one identity system. For Affan, the useful lesson is not the visual style. It is the structure: flagship work, lab work, chronology, and personal narrative can coexist if the role boundaries and evidence stay clear.

Affan should borrow the editorial confidence and personal depth, not the exact page mechanics, typography, colors, audio gimmicks, copy, assets, or Framer implementation patterns.

## Directly Observed Behavior

- The homepage opens with identity-led copy: "Abhijit Rout", "in India", and "I design and dictate culture".
- The first visible interaction label is "Scroll & scavenge", linked to `./#about`.
- Main sections exposed by the public page text are: hero/intro, Selected Work, Visual Experiments, "Inside my little life" / About, Work Chronicle, Online/contact, Where, Extras, CTA, and footer.
- The homepage presents at least one selected case study, "Exclusive Store", with a 2024 label and a short GrowthX-focused summary.
- The Visual Experiments section lists many smaller studies, including Fluted Glass, Nothing Phone (1), Vivid Realities, a chair study, Phone (1) Type-Motion, Metalhead from Black Mirror, Sony Storm 750, a clock, Teenage Engineering TP-7 Field Recorder, Crossimage, and Glass Bottle.
- The About section is unusually personal. It describes starting design at 17, engineering, Cognizant, GrowthX, Razorpay, illness and remission, and a return-to-work perspective.
- A Work Chronicle summarizes roles across Razorpay, GrowthX, and Cognizant, with years shown.
- The contact area includes email, Twitter/X, Instagram, "Cosmos (Warning NSFW)", location in Bengaluru, resume, and portfolio booklet links.
- The closing CTA says "Still here?", "I saved you a seat", a consulting-oriented paragraph, and "Partnership starts at $4,499/mo".
- The footer credits the song "Stay by Hanna Lindgren".
- The `/work/store` page is a long-form case study for "Exclusive Store", dated April 2024, with sections such as Background, Pre Launch Planning, Calendar, Stickers & Badges, MagSafe Card Wallet, Evolution of Store, T-Shirts, Deck of Cards, Tote Bag, Artisanal Perfume, Online Store, Event Experience Design, and a message to the former GrowthX team.
- The case study explicitly names collaborators and separates at least one boundary of responsibility: "I was obviously not responsible for the logistics of the event, but I did have a role in designing the visual experience."

## Publicly Exposed / Disclosed Technology

- The HTML includes `<!-- Made in Framer - framer.com -->`, `meta name="generator" content="Framer b3492b4"`, and a public publish timestamp: May 10, 2026, 11:26 AM UTC.
- HTTP headers identify `Server: Framer/71ecfbf`; `Server-Timing` reports a cached, optimized route from `ca-central-1`.
- The page uses Framer search indexes hosted on `framerusercontent.com`.
- The sitemap exposes these public routes: `/`, `/404`, `/others/booklet`, `/others/resume`, `/legal/privacy`, `/work/store`, and several `/holykao` routes.
- Network-visible modulepreloads include React, Framer, Motion, `Ticker.BEeyAnQp.mjs`, `Smooth_Scroll.8nYpjD2s.mjs`, shared libraries, and `script_main.MAmlxRA2.mjs`.
- The `Smooth_Scroll` module contains a Lenis reference and requestAnimationFrame usage.
- Public scripts include Google Analytics (`G-PSJL95FGJD`) and Hotjar (`hjid: 6442760`).
- Custom snippets block browser zoom gestures and keyboard zoom shortcuts.
- A body-end snippet creates a persistent looping `Audio` object from an Archive.org MP3, starts after first click, fades volume, pauses on tab hide, and stores playback state in `sessionStorage`.
- The page includes a visibility-change title script that changes the document title when the tab is hidden.
- Public font-face declarations include Geist, Instrument Serif, Inter Tight, Inter, and many custom display fonts such as NewYork Regular, PP Mondwest, Haas Grot Text, Ucka, PP Pangaia, PP NeueBit, Test Epicene Display, Motterdam, Rainer, Peristiwa, Fit Devanagari, and Suisse BP.
- Framer breakpoints are public: `>=2160px`, `1200px-2159.98px`, `810px-1199.98px`, and `<=809.98px`.
- Framer appear animation data is public. It uses transform-based entrance motion with initial `scale: 1.1`, `y: 150`, and a spring transition around `0.4s` with `bounce: 0.2`.
- The HTML includes `prefers-reduced-motion` handling for Framer appear animations.

## Implementation Inference

- The site is almost certainly a Framer static/SSR export with React hydration, Framer Motion/WAAPI entrance effects, Framer responsive variants, and custom code components for ticker and smooth scrolling.
- The homepage appears to rely on media-heavy Framer layers, transition images, duplicated responsive variants, and sticky/full-height sections. This is inferred from layer names such as `Hero/Section 1`, `Transition Before`, `Transition After`, `Sticky FH`, `Ticker Container`, `Gradient Transition`, and many variant names in public HTML.
- Smooth scroll behavior is likely powered by Lenis through the public `Smooth_Scroll` module.
- The ticker/moving media strip is likely a Framer code component or generated custom component using Motion and DOM transforms. The module contains a `canvas` substring, but no `<canvas>` element was directly observed in the public HTML, so Canvas usage is unconfirmed and should not be credited as observed behavior.
- Hover behavior is likely present on media cards, links, and experiment items because the HTML contains many hover-related style strings and interactive anchors, but exact hover states were not directly captured.
- Page transitions between `/` and `/work/store` could be Framer route transitions or simply composed transition imagery. Public evidence confirms transition layers/images, not the exact navigation animation.

## Information Architecture

The IA is a hybrid between portfolio, personal essay, lab/archive, and consulting landing page:

- Homepage as identity system and index.
- One prominent selected-work entry from the homepage to `/work/store`.
- Visual Experiments as a dense lab of smaller pieces.
- About narrative with life/career context.
- Work Chronicle as compact professional timeline.
- Contact/extras as utility block.
- Closing conversion CTA for consulting.
- Separate long-form project page for the main case study.
- Separate utility routes for resume, booklet, privacy, and Holykao.

The structure is stronger than a standard "hero, about, projects, contact" portfolio because the lab and chronology give the visitor multiple ways to understand the person. The risk is density: the homepage carries identity, projects, experiments, biography, consulting, audio, and external links, which may dilute the selected-work path.

## Grid And Responsive Behavior

Direct evidence:

- Public Framer breakpoints cover large desktop, desktop, tablet, and mobile.
- Public image tags include fixed intrinsic dimensions and responsive `sizes` attributes.
- Ticker images are small portrait crops around `200x250`.
- Selected-work/media images include tall portrait assets such as `809x901` and transition assets around `1920x2448`.
- The search index exposes duplicated About, Work Chronicle, Online, Where, and Extras content, likely from alternate responsive variants.

Inference:

- The layout likely uses Framer's absolute/flex stack model rather than a hand-coded semantic grid.
- Mobile adaptation is probably handled through duplicated variants rather than one fully fluid layout.
- Desktop likely emphasizes stacked visual rhythm, sticky/full-height sections, and irregular media placement.

Influence for Affan:

- Keep the concept of a lab/archive that can handle many smaller experiments.
- Use responsive variants only where they solve a real interaction problem. Affan's site should avoid duplicated hidden content that confuses search, accessibility, or maintenance.

## Typography Hierarchy

Direct evidence:

- The site loads a large font palette, mixing practical sans families with expressive custom display faces.
- The public page text suggests a hierarchy of short labels, oversized identity statements, dense case-study body text, small metadata, and expressive CTA copy.

Inference:

- Typography is used as personality, not just readability. The font variety supports Abhijit's role as a visual designer and cultural/brand generalist.
- The body/case-study writing likely relies on cleaner sans styles, while experiments and hero moments use more idiosyncratic display type.

Influence for Affan:

- Affan can use strong type contrast and authored labels, but should not copy Abhijit's eclectic font stack.
- Affan's type system should feel like "signal / systems": precise, technical, and cinematic. It should not drift into designer-culture maximalism.

## Color Usage

Direct evidence from public CSS/text:

- Dominant colors include black, white, off-white (`rgb(246, 246, 243)`), light gray (`rgb(232, 232, 232)`), gray (`rgb(184, 184, 184)`), and occasional accents such as orange/red/blue.
- Selection styling is custom: white text on black selection.
- Media carries much of the visual variety.

Inference:

- The base system is high-contrast black/white/off-white, with color mostly arriving through project imagery, transition assets, and occasional accent moments.

Influence for Affan:

- Use media and project-specific accents as evidence, not decoration.
- Do not copy the black/off-white personal-design palette. Affan's specified dark canvas and signal lime should stay distinct and more restrained.

## Navigation Behavior

Direct evidence:

- The main in-page call is `./#about` via "Scroll & scavenge".
- The selected work links to `./work/store`.
- The case study has a `back` link and a "Back to top" link.
- Footer/social links go to short links, mailto, privacy, imprint, resume, and booklet routes.

Inference:

- Navigation intentionally avoids a conventional top nav, favoring scroll discovery.
- This supports a scavenger-hunt feel but can reduce wayfinding for users who want fast project access.

Influence for Affan:

- Affan can use a restrained nav that feels like a system interface, but should keep project access obvious. Recruiters and collaborators should not have to scavenge for Vantage, gRNAlytics, GitHub, or contact.

## Loading Sequence And Motion

Direct evidence:

- Framer appear animations use transform/scale/y motion and spring timing.
- Public modulepreloads load React, Framer, Motion, Ticker, Smooth Scroll, and other route modules with low fetch priority.
- The page preconnects to Framer asset hosting and Google fonts.
- A persistent audio script initializes after first click and fades volume.
- Videos are muted, looped, playsinline, and `preload="none"`.

Inference:

- The opening feel likely depends on Framer appear effects, media reveals, ticker movement, smooth scrolling, and transition imagery rather than custom WebGL.
- Motion appears to be brand atmosphere and pacing, not just micro-interaction polish.

Influence for Affan:

- Use one authored opening sequence and a few structural motion systems.
- Avoid adding music, tab-title gimmicks, or zoom blocking. Those are memorable but inappropriate for Affan's credibility and accessibility targets.

## Project Presentation

Direct evidence:

- Homepage selected work uses a compact project preview with image-heavy support.
- `/work/store` is a long narrative case study with process chronology, artifacts, decisions, product details, photos/images, and a team thank-you.
- The case study includes personal voice and clear role context.

Inference:

- The site treats project pages as stories with artifacts, not as resume bullets.
- The many images make the work tangible, but the written structure is long enough that skim hierarchy becomes critical.

Influence for Affan:

- Case studies should show artifact evidence before extended explanation.
- Affan should include "what I contributed" and "team and credits" with the same honesty, but in a more technical, evidence-led structure.
- Affan's project pages should be shorter, sharper, and more proof-oriented than Abhijit's long personal case-study style.

## Media Treatment

Direct evidence:

- The public HTML references many Framer-hosted images/assets. One pass found 102 unique Framer image/asset URLs.
- The first image set includes JPG, PNG, and GIF ticker assets, transition images, brand model images, and repeated GIFs.
- Image tags commonly use explicit width/height, `decoding="async"`, `object-fit: cover`, and `object-position: center`.
- Below-fold images are frequently marked `loading="lazy"`.
- The page includes duplicate `<video>` tags for the same MP4 asset with muted looped playback and no preload.
- Many image alt values are generic, such as "Ticker Image", "Transition Image", "Brand Model", "Card Image - Experiments", "Profile Image", "Chair Image", or empty alt.

Inference:

- Media is the primary proof layer and texture layer. GIFs and short video are used for motion evidence.
- The media strategy is compelling but asset-heavy.

Influence for Affan:

- Use real project media, diagrams, repo evidence, and concise motion clips.
- Avoid generic alt text. Affan's media needs descriptive alt text because credibility and accessibility are explicit project requirements.

## Cursor, Hover, And Interaction

Direct evidence:

- The HTML contains many `cursor`, `pointer`, and `hover` strings.
- Inline video style sets `cursor:auto`.
- The page includes interactive anchors for project navigation, social links, email, resume, booklet, and CTA.

Inference:

- Hover states likely drive card/media affordance and link polish.
- There may not be a global custom cursor; no direct custom cursor element was confirmed.
- Some experiment details may depend on hover on desktop.

Influence for Affan:

- Use a custom cursor only where the spec calls for it: project media on precise pointer devices.
- Never make project role, ownership, or key context hover-only.

## Canvas, WebGL, SVG, Lottie, Video, DOM Animation

Direct evidence:

- No `<canvas>` element was observed in the public HTML pass.
- No direct WebGL, Three.js, or Lottie references were observed in the public HTML pass.
- SVG is present through hidden `#svg-templates` and inline SVG paths, including arrow icons.
- Two `<video>` tags reference the same MP4 asset.
- DOM animation is public through Framer appear data, Motion modules, ticker module, and smooth-scroll module.

Inference:

- The site likely relies on DOM/CSS/Framer Motion animation, GIFs, video, and SVG rather than custom WebGL.
- Any Canvas usage is unconfirmed. The Ticker module contains a `canvas` substring, but without a matching observed `<canvas>` element it should not be treated as proof.

Influence for Affan:

- Affan's signal network should be original and technically purposeful. Canvas 2D or lightweight WebGL can be justified by the spec, but it should not imitate Abhijit's media ticker.

## Performance Strategies And Risks

Direct evidence:

- HTML response length was about 365 KB.
- Headers show Framer caching/optimized SSR, ETag, `Last-Modified: Sun, 10 May 2026 11:26:27 GMT`, and `Cache-Control: public, max-age=0, must-revalidate`.
- Modulepreloads use `fetchpriority="low"`.
- Assets use Framer optimization URLs with width/height parameters.
- Images include async decoding and many lazy-load attributes.
- Video uses `preload="none"`.
- Analytics and Hotjar scripts are present.

Risks:

- Many custom fonts, GIFs, images, analytics scripts, Hotjar, audio handling, and duplicated responsive variants can increase load and main-thread cost.
- Smooth scrolling and ticker motion can add continuous animation work.
- Blocking browser zoom is an accessibility and usability problem.

Influence for Affan:

- Keep the good parts: optimized media dimensions, lazy loading, muted/no-preload video, and low-priority noncritical modules.
- Avoid the risky parts: excessive font families, surprise audio, zoom blocking, and heavy continuous motion.

## Mobile Adaptation

Direct evidence:

- The public breakpoints include a mobile variant at `max-width: 809.98px`.
- Duplicated text in the search index suggests separate mobile/desktop content variants.

Inference:

- Mobile is likely custom-composed rather than purely fluid.
- Visual density may be reduced or reorganized through variants, but exact mobile behavior was not directly captured.

Influence for Affan:

- Mobile must not be a reduced afterthought. The lab should become a persistent-thumbnail list and selected work should retain role labels, as SPEC requires.

## Reduced Motion

Direct evidence:

- Framer appear animations check `prefers-reduced-motion: reduce`.

Unknown:

- Reduced-motion handling for smooth scroll, ticker, GIFs, persistent audio, and page-transition imagery was not confirmed.

Influence for Affan:

- Affan needs a global reduced-motion policy across canvas, ticker, split text, transitions, hover effects, and videos. Do not rely only on Framer's built-in appear handling.

## Accessibility Notes

Directly observed strengths:

- `html lang="en"` is set.
- Title and meta description are present.
- Text content is available to Framer's search index.
- Videos are muted and playsinline.
- Some below-fold media is lazy loaded.
- Email uses a mailto link.

Directly observed risks:

- The site actively blocks keyboard zoom, Ctrl/Command-wheel zoom, and Safari gesture zoom.
- Many images have generic or empty alt text.
- The Framer search index reports no homepage `h1`/`h2`/`h3` entries, despite visible section titles, which suggests semantic heading structure may be weak.
- This heading issue is a direct search-index finding, not proof of the rendered accessibility tree, but it is enough to treat semantic headings as a risk.
- Duplicated responsive content may create screen-reader or SEO noise if not hidden correctly.
- Persistent audio begins after first click and loops; even with click gating, it can surprise users.
- Hover and motion-heavy sections may need stronger keyboard/touch equivalents than public evidence can confirm.

Influence for Affan:

- Keep personal warmth, but apply a stricter accessibility bar: semantic headings, descriptive alt text, visible focus, no zoom blocking, no surprise audio, no hover-only information, and complete reduced-motion alternatives.

## What Should Influence Affan's Website

- Use a flagship-work plus lab/experiments split. Abhijit's Selected Work and Visual Experiments structure validates Affan's `Selected Work` plus `The Lab` direction.
- Make chronology visible. The Work Chronicle model supports Affan's required timeline, but Affan's should map to verified events and `NEEDS_AFFAN_CONFIRMATION` where needed.
- Let personal narrative have a real point. Abhijit's About works because it explains motivation and turning points. Affan's About should explain how complex problems, product engineering, algorithms, and computational biology connect.
- Put evidence inside the story. The `/work/store` case study uses artifacts and photos throughout the narrative. Affan should use screenshots, commit evidence, architecture diagrams, motion clips, and credits in the same spirit.
- State role boundaries plainly. Abhijit's case study explicitly separates his logistics responsibility from visual experience responsibility. Affan needs this even more for Vantage and gRNAlytics.
- Use small authored microcopy. "Scroll & scavenge" and "I saved you a seat" show personality. Affan can use signal/system language, but it must be his own.
- Treat the footer/contact area as part of the experience, not an afterthought.

## What Must Not Be Copied

- Do not copy Abhijit's exact homepage sequence, copy, section names, CTA wording, social structure, visual-experiment list, or project narrative.
- Do not copy the tagline "I design and dictate culture", "Scroll & scavenge", "Inside my little life", or "I saved you a seat".
- Do not copy personal medical narrative, career details, company claims, pricing, or consulting offer.
- Do not copy the exact typography stack, especially the eclectic display-font mix.
- Do not copy the black/off-white designer-culture visual language or media treatment wholesale.
- Do not copy images, GIFs, videos, transition assets, icons, or Framer module behavior.
- Do not use persistent music, hidden-tab title jokes, or zoom-blocking scripts.
- Do not make Affan's work feel like a visual designer portfolio. Affan's portfolio should read as software, systems, and evidence, not culture/design generalism.
- Do not use dense experimentation as a substitute for verified contribution evidence.

## Practical Translation For Affan

Affan's version of this influence should be:

- Hero: signal network and "complex systems" positioning, not a designer identity slogan.
- Selected Work: two evidence-backed flagship case studies, not one design project carousel.
- Lab: smaller repositories and experiments with ownership labels, not only visual thumbnails.
- About: verified chronology and motivation, not borrowed vulnerability or invented biography.
- Case studies: contribution-first, team-aware, artifact-rich, and technically legible.
- Motion: structural signal transformation, not constant scroll atmosphere.
- Accessibility: stricter than the reference, especially around zoom, headings, alt text, and reduced motion.
