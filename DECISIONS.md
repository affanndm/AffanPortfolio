# Decisions

## 2026-07-16: Publish And Deploy The Equal-Stage Carousel

Decision: Publish the equal-stage carousel release to the GitHub feature branch and default `portfolio-rebuild` branch, then promote the same source tree through the linked Vercel project to the canonical production domain.

Reason: Affan explicitly approved committing, publishing, and deploying the completed carousel after the clean production build, 84-test browser suite, accessibility scan, responsive checks, and private-project scan passed.

Verification:

- Vercel reports the production target Ready with aliases for `https://www.affannadeem.me` and the apex domain.
- The canonical homepage, Vantage, gRNAlytics, Lab, robots, and sitemap routes return 200.
- The apex domain redirects to canonical `www` with 308.
- The production homepage contains neither removed private tracker name.

## 2026-07-16: Replace The Vantage Lead With An Equal-Stage Project Carousel

Decision: Replace the Vantage-led homepage chapter, secondary work rail, and dedicated gRNAlytics chapter with one selectable six-project stage. Keep Vantage and gRNAlytics deeper because they have case-study evidence, but do not give either more homepage stage time than the other public projects.

Reason: Affan explicitly said Vantage should not read as the main subject of the portfolio. A single stable editorial frame with six different project artworks makes the work feel curated without making the homepage a hierarchy of one flagship plus leftovers.

Implementation boundaries:

- Use the existing Lenis and GSAP stack rather than adding another carousel dependency.
- Pin, scrub, and directionally snap only on qualifying desktop viewports.
- Use native horizontal scrolling and CSS scroll snap on mobile, and immediate state changes under reduced motion.
- Preserve previous/next controls, direct selection, keyboard operation, live status, real links, and non-hover access.
- Give each project a materially different visual transition while keeping one consistent grid and theme.
- Start DOM-mutating motion only after React hydration; no GSAP pin spacer may be inserted during hydration.
- Production deployment required separate explicit approval, which Affan provided after local validation.

## 2026-07-16: Deploy B / Lanes And Remove Private-Roster Projects

Decision: Promote the selected B lane/scanner identity to the production homepage, remove the two tracker projects from every portfolio and audit surface, and deploy the current workspace to Vercel production after Affan's explicit approval.

Reason: Deploying the review route without translating B would have left the public homepage on the rejected identity direction. Affan also explicitly removed both tracker projects from the intended public roster, so stale links, copy, evidence notes, and test expectations had to be deleted before launch.

Consequences:

- The opening artwork itself reveals student, developer, builder, competitor, algorithms, biology, and life-off-screen information.
- The public work rail now contains six entries and the Lab contains three.
- Production deployment `dpl_GKU63ZGMjhq2Az7bNewjSHi98um7` is Ready and aliased to `https://www.affannadeem.me`.
- Commit `55d8025` checkpoints the deployed workspace on `filippo-visual-redesign`, restoring GitHub as the recoverable production source after push.
- Future production or domain changes still require explicit approval.

## 2026-07-16: Select Identity B — Lanes

Decision: Select Direction B — Lanes as the production identity foundation.

Reason: B is closest to the primary reference's underlying strength without becoming a clone. The typography is the artwork, the cursor interaction reveals Affan's roles inside that artwork, and the strict dark field has enough theatrical confidence to carry the opening sequence.

Governing Principle: `It is not information with art. It is art that shows information.`

Consequences:

- Do not average B with A or C into a safer hybrid.
- Typography, imagery, motion, and interaction must carry meaning directly.
- Personal media and projects should enter as masks, textures, transitions, and full scenes rather than cards or adjacent illustrations.
- Report-like evidence layouts and art-as-background compositions fail this direction even when they are visually polished.
- A and C remain archived studies, not co-equal production directions.

## 2026-07-16: Make Affan The Subject And Demote Signal To A Metaphor

Decision: Reset the portfolio's public narrative around Affan Nadeem as a complete person: student, developer, competitor, builder, computational-biology enthusiast, hackathon participant, leader where confirmed, and person with a life outside GitHub. `Signal / Systems` is no longer the site subject or repeated copy framework; “signal” may remain only as a subtle visual or interaction metaphor.

Reason: Affan explicitly rejected a project-first strategy that made Vantage, evidence, and methodology feel more important than the person. Projects should support the portrait, not replace it.

Consequences:

- About and personal visual material move before Selected Work.
- The homepage no longer opens with a methodology, evidence count, stack list, contribution disclaimer, or Vantage sequence.
- Detailed verification remains mandatory but moves into case studies and internal audits instead of becoming the homepage aesthetic.

## 2026-07-16: Use Filippo As Primary Craft Reference Without Cloning

Decision: Treat Filippo Ruffini as the primary quality, structure, personal-storytelling, and motion-craft reference for the Affan-first reset. Preserve the same categories of ambition—strict grid, typographic theatre, image-led autobiography, authored menu, interaction detail, media-rich work, and mobile reinterpretation—while creating original Affan-specific composition, palette, copy, media, and motion.

Reason: Filippo's site demonstrates the personal authorship and sustained interaction quality Affan wants. The attached brief also explicitly prohibits copying source code, exact measurements, fonts, colors, wording, images, and frame-for-frame animation.

Rejected Alternative: A literal clone. It would contradict the supplied brief, erase Affan's identity, and import another designer's branded objects and autobiography.

## 2026-07-16: Stop Production Work At An Eight-Composition Review Gate

Decision: Build only three identity directions, one full-screen menu, one design-system reveal, one About layout, one personal-image sequence, and one Selected Work index under `/design-lab/filippo-study/`, with desktop/mobile captures and rationale. Do not choose the winner automatically and do not change the production homepage.

Reason: The reset prompt explicitly requires a composition review before another broad implementation. Isolating the study keeps the existing production source recoverable and prevents another unreviewed redesign.

Implementation Boundary: The study uses an original ultramarine candidate palette, CSS/React interactions, verified project metadata, and clearly labeled personal-content requests. No deployment or domain action is authorized.

## 2026-07-15: Reconstruct Working SPEC.md

Decision: The workspace did not contain `SPEC.md`, even though the brief named it as the source of truth. I reconstructed `SPEC.md` from Affan's pasted prompt and marked it as the working source of truth until a separate canonical file is provided.

Reason: Subagents and future work need a durable local spec. Continuing without a local source-of-truth file would make the project harder to audit and easier to contradict.

Deviation From Original Brief: The brief expected `SPEC.md` to already exist. This is a recovery step, not a change to the creative direction.

## 2026-07-15: Create PRODUCT.md From Existing Brief Without Additional Interview

Decision: I created `PRODUCT.md` from the detailed prompt and reconstructed `SPEC.md`.

Reason: The `impeccable` workflow requires `PRODUCT.md`, and Affan's prompt already answered the strategic questions: register, users, purpose, personality, anti-references, design principles, and accessibility targets. Affan also explicitly requested autonomous execution without ordinary confirmation pauses.

Rejected Alternative: Stop to ask strategic setup questions. That would contradict the autonomy instruction and duplicate information already provided in the brief.

## 2026-07-15: Defer Framer Project Edits (Superseded)

Decision: Run Framer setup but do not connect/edit production pages until Milestone 1 is complete.

Reason: The brief explicitly requires evidence and reference audits before Framer edits.

Superseded: The production architecture was later changed to Next.js/Vercel with no Framer platform work.

## 2026-07-15: Defer Framer Code Component Skill (Superseded)

Decision: Do not apply Framer Code Component guidance until after a Framer session exists and the generated Framer task map's Components row has been read.

Reason: The code-component skill explicitly forbids loading it directly as the entry point.

Superseded: The production architecture was later changed to Next.js/Vercel with no Framer platform work.

## 2026-07-15: Use Public GitHub Evidence Instead Of Authenticated gh Search

Decision: Milestone 1 GitHub auditing used public GitHub pages/API, public repository history, and subagent local mirror notes instead of authenticated `gh` searches.

Reason: The GitHub CLI (`gh`) is not installed in the environment, and direct PowerShell/curl API access was unreliable. Public GitHub evidence was sufficient to identify owned repositories, Vantage PRs/commits, gRNAlytics commits, repository tiers, and claim confidence levels.

Deviation From Original Brief: The brief requested authenticated GitHub history search. This remains a limitation and should be rerun before final content freeze if `gh` or another authenticated GitHub path becomes available.

## 2026-07-15: Replace Framer Platform Architecture With Next.js And Vercel

Decision: The production architecture is now fixed as a Next.js App Router, React, and TypeScript site in this GitHub repository, hosted by Vercel when approved. Figma remains a visual-design and interaction-reference tool only. Framer platform workflows are removed from the project.

Reason: Affan explicitly changed the final production architecture: GitHub is the source of truth, Vercel is the hosting target, Figma is not hosting, and Framer is completely removed from the website-building workflow.

Rejected Alternatives:

- Continue with the previous Framer CMS/page-building plan.
- Use Figma Sites or Framer hosting for the portfolio.
- Split production code across an external website builder and this repository.

Implementation Notes:

- The Motion or `framer-motion` React library remains allowed if it is the right React animation tool; the restriction applies to the Framer website-building platform.
- Future implementation must use local typed content or MDX unless a headless CMS becomes clearly necessary and is documented separately.
- Vercel preview deployments are allowed when authenticated, but production promotion and custom-domain connection remain blocked until explicit approval.

## 2026-07-15: Preserve Useful Planning Artifacts As Platform-Neutral Briefs

Decision: Preserve the old design-system and motion-prototype planning files, but rename `framer-planning/` to `implementation-planning/` and revise the contents for Next.js implementation.

Reason: The design and motion content contains useful project-specific strategy, component inventories, reduced-motion rules, and performance constraints. The Framer-specific workflow and platform assumptions are stale, but the underlying creative and engineering direction should not be discarded.

Rejected Alternative: Delete the planning briefs entirely. That would remove useful prior audit work and make the rebuild less traceable.

## 2026-07-15: Remove `.framer-temp/`

Decision: Remove the untracked `.framer-temp/` directory.

Reason: It contained only Framer helper scripts from the previous platform direction. Under the new fixed architecture, those files are obsolete and should not remain as active tooling.

Risk: None identified; the directory was untracked and not part of the useful audit deliverables.

## 2026-07-15: Figma Make Reference Temporarily Blocked By Missing URL

Decision: Confirm the Figma MCP server is available, but treat Figma Make reinspecting as blocked until a concrete Make URL is available.

Reason: The current prompt describes the Make interaction reference, but no URL appears in the prompt or repository. The Figma MCP tools require a file key or URL to inspect the file.

Fallback: Use the written interaction principles from the brief for the `/design-lab` dotted-grid bloom experiment, and mark the missing URL as `NEEDS_AFFAN_CONFIRMATION` in status until provided.

## 2026-07-15: Use Local Typed Content For The First Production Build

Decision: Store project, lab, metadata, evidence links, and draft-only contribution notes in local typed TypeScript content rather than adding MDX or a CMS.

Reason: The current content surface is small, evidence-sensitive, and tightly tied to `CLAIMS_LEDGER.md`. Typed local content makes unsupported claims easier to catch during code review and avoids a headless CMS or paid dependency before the portfolio needs one.

Rejected Alternatives:

- Add a CMS before the content model has stabilized.
- Use loose JSON without TypeScript validation.
- Put long-form public claims directly into page components.

## 2026-07-15: Build Motion With CSS And One Canvas 2D Island

Decision: Use CSS transitions/keyframes and a single lightweight Canvas 2D `SignalField` client component for the first implementation. Remove GSAP after review.

Reason: The required motion can be achieved without a full animation framework. The signal field directly supports the concept, while CSS handles ticker, hover, and reveal polish. This keeps the JavaScript surface smaller and makes reduced-motion behavior simpler to enforce.

Rejected Alternatives:

- Keep GSAP as a baseline dependency for possible future choreography.
- Add Lenis smooth scrolling.
- Use Rive, Lottie, Three.js, or Vimeo embeds for the opening system before real project media exists.

## 2026-07-15: Keep Confirmation-Gated Claims Out Of Public Copy

Decision: Public pages use verified or conservative project language. More specific Affan-attribution details that require alias, role, or contribution confirmation are kept in audit docs or marked as draft contribution notes rather than presented as final public claims.

Reason: Vantage and gRNAlytics are team projects with nuanced authorship evidence. The portfolio should be visually confident without overstating individual ownership, biological validity, shipped status, or current production responsibility.

Rejected Alternatives:

- Use all promising audit findings as public portfolio copy.
- Hide ownership complexity until deep in a case study.
- Present lab projects as polished production products.

## 2026-07-15: Select Signal Network As The Production Hero Direction

Decision: Use the Signal Network as the production hero base, supported by media-first project trailers. Keep the Dotted Grid Bloom as a design-lab experiment and reference principle, not as the public homepage's dominant background.

Reason: The Signal Network most directly expresses Affan's strategy: resolving noisy constraints into useful systems. The Dotted Bloom is atmospheric but more generic and carries resemblance risk to the unavailable Figma Make reference. The Editorial Project Reel is useful for selected-work presentation, but it is not strong enough alone as Affan's first-viewport identity.

Rejected Alternatives:

- Make Dotted Grid Bloom the main homepage art direction.
- Lead with a conventional project reel.
- Use a fake loader or long opening animation before content appears.

## 2026-07-15: Make The Hero Signal Field Progressive

Decision: Render a static signal network immediately on the homepage, and load the Canvas 2D `SignalField` only after first pointer movement on desktop-width, fine-pointer, no-reduced-motion devices.

Reason: The interaction is valuable on desktop, but it is not essential to comprehension and should not hurt mobile Lighthouse, reduced-motion users, or first paint. A static network preserves the visual metaphor while the canvas becomes a progressive enhancement.

Rejected Alternatives:

- Eagerly hydrate the canvas on all devices.
- Load the canvas on idle, which still affected Lighthouse's measurement window.
- Remove the signal system entirely from the hero.

## 2026-07-15: Use Native Disclosure Navigation

Decision: Replace the React stateful mobile menu with a server-rendered `<details>/<summary>` disclosure menu.

Reason: Native disclosure behavior keeps mobile navigation keyboard-accessible while reducing client-side hydration work. The portfolio does not need a custom animated menu state for the first preview.

Rejected Alternatives:

- Keep React state and effects solely to close on Escape.
- Add a heavier menu animation library.
- Hide mobile navigation behind a non-semantic custom button.

## 2026-07-15: Require Explicit Preview Target For Future Vercel Deploys

Decision: Future preview deployments must use `npx vercel deploy --target=preview` rather than `npx vercel deploy --yes`.

Reason: A deployment attempt using `npx vercel deploy --yes` created production deployment `dpl_6vzX1pXuE2riUKnQJyJsunvVw9hb` and aliased `https://affanndm.me`, even though no `--prod` flag was passed. This violated the intended preview-only constraint. No rollback or alias removal was performed because that would further change production/domain state and requires Affan's explicit approval. A later explicit preview command, `npx vercel deploy --target=preview --yes`, correctly created preview deployment `dpl_3Y5bcLcyCXL7dJJdYc5Q9PgyEecL`.

Rejected Alternatives:

- Attempt rollback or alias removal without approval.
- Continue using the default linked-project deployment command.
- Treat the production deployment as an approved launch.

## 2026-07-15: Use Verified Media And Source-Backed System Visuals

Decision: Use a real capture of the public Vantage deployment and a code-native gRNAlytics pipeline visual based on the current public repository. Label the pipeline as software flow, not as a biological result.

Reason: Flagship media must show real project evidence. Vantage has a verifiable public deployment. gRNAlytics does not provide a stable public product recording, but its source clearly exposes the input, BLAST, annotation, scoring, and comparison flow.

Rejected Alternatives:

- Keep generic placeholder gradients in flagship trailers.
- Fabricate terminal output, scientific measurements, or biological accuracy.
- Present repository-wide behavior as Affan's sole implementation.

## 2026-07-15: Publish Public Contributor Handles Without Inventing Roles

Decision: Credit public GitHub contributor handles for Vantage and gRNAlytics while stating that commit history does not establish private team roles.

Reason: Visible team attribution is more credible than a generic "team project" label, but public history cannot verify preferred names, responsibilities, or organizational context.

Rejected Alternative: Infer role titles or ownership percentages from commit counts.

## 2026-07-15: Use A Server-Rendered Public Shell With Progressive Enhancements

Decision: Keep public routes server rendered. Implement navigation, ticker lifecycle, and desktop signal activation as small native scripts attached to semantic markup. Keep React client components only for hidden design-lab experiments.

Reason: The interactions are small and do not require React state. Removing public client boundaries preserves the visual system while reducing hydration and making mobile/reduced-motion fallbacks immediate.

Implementation Notes:

- The hero canvas is created only after fine-pointer intent on a wide viewport.
- The ticker and menu remain useful before script enhancement.
- Internal public navigation uses ordinary anchors and full-document navigation intentionally; this ensures each inline enhancement initializes from a clean document lifecycle and avoids prefetch/runtime overhead.
- A future strict Content Security Policy must nonce or externalize these scripts.

## 2026-07-15: Use One Downloaded Interface Font And System Contrasts

Decision: Load Geist as the single optimized webfont, use Georgia for editorial serif contrast, and use the system monospace stack for technical labels.

Reason: Three downloaded font families created unnecessary mobile transfer and layout work. The reduced stack preserves typographic hierarchy while lowering cost and avoiding additional licensing or hosting dependencies.

## 2026-07-15: Build Next.js 16 Production Output With Webpack

Decision: Set `npm run build` to `next build --webpack`.

Reason: On the same local production candidate, the default Turbopack build scored 89 on mobile Lighthouse with 279ms TBT. The Webpack build scored 95 with 151ms TBT and 2.48s LCP; desktop scored 100 with 9ms TBT and 0.58s LCP. The implementation and route output are otherwise unchanged.

Rejected Alternative: Accept a slower default production runtime solely because it is the framework default.

## 2026-07-15: Limit Content-Visibility Deferral To Mobile Below-Fold Sections

Decision: Keep desktop sections fully painted. On small mobile viewports only, use `content-visibility: auto` for below-fold section work, with intrinsic sizing and an explicit print override.

Reason: Rendering the entire long-form homepage immediately doubled mobile style/layout time and moved LCP above the target. Mobile browsers render deferred sections ahead of normal scrolling, while desktop review captures and print remain complete. Automated responsive tests still verify every route and required width.

The small-screen opening state is immediate rather than clip-animated. Desktop retains the short session-gated resolve sequence; mobile prioritizes first-read clarity and paint stability.

## 2026-07-16: Configure Vercel Explicitly As Next.js

Decision: Add `vercel.json` with `framework: nextjs` and update the linked Vercel project from the `Other` framework preset to `Next.js`.

Reason: Under the `Other` preset, Vercel detected the repository's asset-only `public/` directory as the deployment output. The Next.js build succeeded, but its `.next`/Build Output API artifacts were not served, so every application route returned platform-level `NOT_FOUND`. The Next.js preset now uses the framework's default output and deploys all App Router routes.

## 2026-07-16: Canonicalize Production At www.affannadeem.me

Decision: Use `https://www.affannadeem.me` as the canonical production origin and redirect the apex domain to it.

Reason: The registered and DNS-configured domain is `affannadeem.me`, not the earlier misspelled alias `affanndm.me`. Production metadata and sitemap fallbacks now use the canonical host instead of localhost.

## 2026-07-16: Replace The Report-Like Homepage With An Identity-First Sequence

Decision: Rebuild the homepage around `AFFAN NADEEM` as the dominant first read, followed by five authored scenes: dark identity hero, neutral media-led selected work, signal-lime Lab, dark first-person About, and a neutral direct-contact close.

Reason: Affan correctly rejected the first homepage because evidence scaffolding had become the visual product. The page accurately described the portfolio but felt like an analyst report: method steps, metadata, status rows, and third-person explanation appeared before personal identity and project energy. The new sequence keeps the verified content boundaries while changing the hierarchy and emotional pacing.

Rejected Alternatives:

- Recolor the existing report-like layout.
- Remove evidence and ownership detail entirely for spectacle.
- Clone the split-name, showreel, experiment ticker, or personal-story mechanics of the reference sites.

## 2026-07-16: Add GSAP Only For Two Structural Homepage Motions

Decision: Add `gsap` and `@gsap/react` for one desktop pinned-work sequence and one scroll-scrubbed About statement. Keep the canvas, ticker lifecycle, navigation, press states, and media hover responses in native code and CSS.

Reason: The user explicitly requested the `gpt-taste` motion workflow and a materially richer result. Two bounded ScrollTrigger interactions materially clarify continuity without turning the entire public shell into a client application. Reduced-motion users bypass both effects, and the initial word state remains contrast-compliant. After an initial mobile Lighthouse sample loaded the static GSAP bundle and scored 83, the motion implementation was split into a lazy desktop-only chunk; mobile and reduced-motion users do not request it.

This is a deliberate deviation from the earlier "no GSAP baseline dependency" performance decision. The dependency is now justified by the revised creative brief and remains isolated to a null-rendering client island on the homepage.

## 2026-07-16: Permit One Committed Signal-Lime Chapter

Decision: Allow the Lab section to use signal lime as a full-field background while keeping lime scarce everywhere else.

Reason: A single committed color chapter separates exploratory work from flagship evidence and breaks the previous one-surface report feel. The exception is narrow: the hero, selected work, About, project pages, navigation, and contact retain restrained signal usage.

## 2026-07-16: Supersede The First Identity-First Correction With A Filippo-Led Art Direction

Decision: Treat Filippo Ruffini as the dominant composition and motion reference for the new local homepage, with Tigran informing saturated color energy and Abhijit informing long-form chapter variety.

Reason: Affan explicitly rejected the prior correction as static and unlike the references. The new direction therefore prioritizes monumental identity, a persistent responsive object, type/object collision, stacked work, saturated chapter changes, and project entry theatre.

Boundary: The site does not copy the reference source code, GLTF model, shaders, visual assets, personal copy, exact color values, split-name motif, custom cursor, or loader. The palette family was explicitly requested; distinct values and Affan-specific content/composition are used.

## 2026-07-16: Replace The Homepage Canvas Metaphor With A Responsive Signal Sculpture

Decision: Remove the public homepage's progressive signal-field canvas and replace it with server-rendered DOM/CSS geometry enhanced by a lazy desktop GSAP island.

Reason: The old canvas read as a background effect. The new sculpture behaves as an authored object: it carries verified Vantage texture, intersects the name, responds to pointer depth, and exits with the hero. It is visible without JavaScript, lighter than a copied Three.js/WebGL stack, and simple to resolve under reduced motion.

## 2026-07-16: Add A Native Project Side-Stage

Decision: Add a right-side full-viewport project preview using the native HTML dialog element before visitors enter the full case-study route.

Reason: Affan asked for projects to open into a side page or the comparable behavior used by the references. The side-stage preserves homepage continuity while surfacing real media, ownership, discipline, stack, and direct evidence. Native dialog semantics provide focus management, Escape behavior, and modal accessibility without a routing framework or new dependency.

## 2026-07-16: Stop At The First Vantage Sequence

Decision: Temporarily remove the Lab, About, gRNAlytics homepage chapter, and full contact chapter from the homepage review build.

Reason: The attached recovery brief explicitly makes the first 20% a visual approval gate. Continuing the remaining 80% before that gate would repeat the failed broad-redesign workflow. Existing routes, content audits, project pages, and evidence remain intact.

## 2026-07-16: Select Typographic Distortion Plus Interface Artifact

Decision: Use Prototype C for the identity behavior and Prototype B for the central object and transition source.

Reason: C best matches the reference's type-led confidence; B keeps the spectacle anchored to Affan's real Vantage work. Prototype A is coherent but reads more like a technical visualization and therefore risks returning to the rejected report aesthetic.

Boundary: The implementation borrows proportion, pacing, layered hierarchy, edge metadata, limited palette mechanics, and scroll expansion. It does not reuse Filippo's model, shaders, images, text, project list, source code, or exact branded object.

## 2026-07-16: Integrate Lenis And Selected React Bits Patterns Into The Desktop Motion Island

Decision: Use Lenis for qualifying desktop scroll interpolation, GSAP SplitText and ScrollTrigger for coordinated type/scroll choreography, and adapted React Bits Magnet and ScrollFloat patterns at the project-entry and closing-statement moments.

Reason: Affan explicitly requested all three sources. The selected integrations strengthen the approved Filippo-led sequence without turning the interface into an effects catalog: Lenis improves continuity, SplitText makes the name entrance genuinely typographic, Magnet makes the project opener tactile, and ScrollFloat gives the final project argument a controlled reveal.

Boundaries:

- Do not import React Bits wholesale or add effects without a narrative or interaction purpose.
- Keep the GSAP/Lenis runtime inside the existing lazy desktop-only island so mobile and reduced-motion users retain native scrolling and avoid the bundle.
- Stop Lenis while the modal project stage is open, preserve native nested scrolling, and clean up ticker, observer, SplitText, and Lenis state on unmount.
- Preserve semantic text independently from split-character presentation and keep all information available without JavaScript.

## 2026-07-16: Keep Vantage As The Lead And Index Every Verified Build

Decision: Preserve Vantage as the homepage's cinematic opening project, then introduce a horizontal chooser containing eight verified work entries. Give gRNAlytics a dedicated chapter and collect smaller, early, or archival repositories in the Lab rather than presenting every repository as an equally deep case study.

Reason: Affan asked for every project to be incorporated without losing the Vantage treatment he approved. The reference sites establish a clear lead project while also providing a selectable work index or experiments layer. This hierarchy provides breadth without inventing case-study depth that the available evidence and media cannot support.

## 2026-07-16: Use GitHub For The Work Roster And Keep LinkedIn Claims Gated

Decision: Use Affan's public GitHub repositories and known contribution evidence to define the visible work roster. Make GitHub and LinkedIn first-class navigation, About, and contact destinations, but do not publish LinkedIn-derived awards, dates, or biography claims until Affan confirms them.

Reason: Public repository ownership and source links are directly verifiable. The public LinkedIn surface is useful as a professional destination but does not provide enough accessible evidence to safely expand biography or awards copy under the repository's evidence rules.

## 2026-07-16: Deliver Homepage Motion As A Desktop-Only Standalone Module

Decision: Replace the React motion wrapper with a small server-rendered viewport bootstrap and an esbuild-generated GSAP/Lenis module. Pre-optimize the reused Vantage capture as local responsive WebP assets and use native images on the homepage.

Reason: The complete homepage is substantially longer than the first-sequence build. Mobile Lighthouse showed that hydrating a React boundary solely to reject desktop motion added avoidable work. The standalone module keeps the full desktop choreography, drawer/Lenis synchronization, and cleanup while preventing mobile and reduced-motion profiles from requesting the animation code. Native responsive images preserve the visual treatment without requiring a homepage image client boundary.

Tradeoff: The retained Windows mobile Lighthouse sample remains 87 Performance because the shared Next.js App Router runtime is still the largest blocking task. Accessibility, Best Practices, and SEO remain 100, and the measured result is recorded without claiming the 90 stretch target was met.

## 2026-07-16: Add A LinkedIn-Backed Beyond-GitHub Chapter

Decision: Preserve every approved homepage scene and add one isolated tabbed chapter between About and Contact for Experience, Competition, and School. The About statement changes only by removing `too much`.

Reason: Affan explicitly asked for the portfolio to show more than GitHub projects and directed the site to use his LinkedIn material. A separate chapter adds that missing dimension without diluting the art-led project sequence or turning the existing About section into a résumé.

Evidence boundary: Publish only facts directly visible on Affan's public LinkedIn and explicitly authorized by his 2026-07-16 request. Do not publish role titles hidden by the public LinkedIn surface or inferred by third-party profile aggregators.

Interaction boundary: Use semantic tabs with visible selection, roving focus, arrow/Home/End keyboard operation, touch access, and a no-JavaScript reading fallback. Production remains unchanged until Affan separately requests a deployment.
