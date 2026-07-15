# Accessibility And Performance QA Plan

Scope: Milestone 6 implementation QA and Milestone 8 final launch-readiness QA for Affan Nadeem's Framer portfolio. This plan does not require editing Framer production pages and does not publish the site.

## Source Constraints

- `SPEC.md` remains the creative, content, motion, accessibility, and performance source of truth.
- `DECISIONS.md` must record any implementation deviation from `SPEC.md`.
- Do not invent factual claims, personal contributions, awards, metrics, or biography.
- Use `NEEDS_AFFAN_CONFIRMATION` for any unverified personal information found during QA.
- Native Framer features are preferred unless a React Code Component materially improves the experience.

## Milestone Coverage

### Milestone 6 QA

Goal: validate the built experience before final polish. Milestone 6 QA should catch layout, interaction, accessibility, motion, and performance regressions while changes are still cheap to make.

Required output:

- Issue log grouped by severity: blocker, high, medium, low.
- Breakpoint screenshots or recordings for every major template and interactive state.
- Accessibility notes for keyboard, focus, semantics, reduced motion, and media.
- Performance trace notes for LCP, CLS, INP, script cost, canvas behavior, and media loading.
- Decision entries for accepted deviations from `SPEC.md`.

### Milestone 8 QA

Goal: final verification before any publication handoff. Milestone 8 repeats the full QA pass against the release candidate and treats regressions as launch blockers.

Required output:

- Final pass/fail checklist.
- Lighthouse reports for mobile and desktop.
- Core Web Vitals measurements from at least one throttled lab run and one unthrottled local run.
- SEO metadata and social preview verification.
- Known browser/device coverage gaps, especially Safari, iOS, and Android.
- Confirmation that no Framer publish action was performed during QA.

## Test Matrix

Validate each core page, section, CMS-driven template, navigation state, modal/overlay if any, and major interactive component at these widths:

| Width | Target | Required checks |
| --- | --- | --- |
| 390 | Mobile portrait | Primary navigation, first viewport, mobile simplification, touch targets, horizontal overflow, media cropping, text wrapping. |
| 768 | Tablet portrait | Navigation state, section rhythm, project cards, typography scale, hover alternatives, image density. |
| 1024 | Small laptop/tablet landscape | Hero composition, pinned/sticky sections, canvas or motion regions, keyboard focus visibility. |
| 1440 | Desktop | Intended desktop composition, hover states, media quality, performance, focus order. |
| 1920 | Large desktop | Max-width behavior, image upscaling, excessive whitespace, canvas framing, line length. |

Failure thresholds:

- Any horizontal page overflow at 390, 768, 1024, 1440, or 1920 fails.
- Any text overlap, clipped essential content, or unreadable text fails.
- Any CTA, nav item, project link, or control below a 44 by 44 CSS pixel touch target on touch layouts fails unless the target is inline text and clearly accessible.
- Any required page content hidden only because of viewport width fails unless `SPEC.md` explicitly defines that simplification.

## Accessibility Validation

### Keyboard Navigation

Steps:

1. Load each page at 390, 768, 1024, and 1440.
2. Start at the browser address bar and use only `Tab`, `Shift+Tab`, `Enter`, `Space`, arrow keys where expected, and `Esc`.
3. Record the focus path through navigation, hero CTAs, project links, CMS cards, forms, media controls, overlays, and footer links.
4. Confirm every interactive element can be reached, operated, and exited by keyboard.
5. Confirm focus never moves into hidden mobile menus, inactive carousel slides, offscreen panels, or decorative elements.

Failure thresholds:

- Unreachable interactive element: blocker.
- Keyboard trap without a visible escape path: blocker.
- Focus order that conflicts with the visual reading order enough to confuse navigation: high.
- Missing visible focus indicator on any custom control, nav item, link, button, or card link: high.
- Focus indicator contrast below 3:1 against adjacent colors: high.

### Focus Order And Focus Management

Steps:

1. Open and close every menu, overlay, project preview, or expanded interaction.
2. Verify focus moves into opened UI and returns to the invoking control on close.
3. Verify `Esc` closes dismissible overlays.
4. Confirm skip link behavior if present.
5. Confirm the current nav/page state is exposed visually and programmatically.

Failure thresholds:

- Focus lost to `body` after closing an overlay: high.
- Focus lands behind an overlay or on obscured content: blocker.
- Current page or selected state unavailable to assistive tech where applicable: medium.

### Screen-Reader Semantics

Steps:

1. Run automated checks with axe or equivalent against every page/template.
2. Inspect the semantic outline: one logical `h1`, ordered heading levels, named landmarks, descriptive links.
3. Verify images have correct alternatives: informative images get useful alt text, decorative images are ignored, project media does not repeat adjacent text.
4. Verify icon-only controls have accessible names.
5. Verify animated/canvas-only content has an accessible text equivalent when it communicates meaning.
6. Verify external links, downloads, forms, and embeds have clear names and states.

Failure thresholds:

- Any critical axe violation fails Milestone 6 and blocks Milestone 8.
- Missing accessible name on interactive controls: blocker.
- More than one unrelated `h1` on a page: high.
- Heading levels skipped in a way that obscures page structure: medium.
- Meaningful image, video, or canvas content without an accessible alternative: high.
- Link text such as "click here", repeated indistinguishable "view", or unnamed card links: medium.

### Color, Contrast, And Text

Steps:

1. Test body text, captions, metadata, nav, buttons, links, focus rings, and disabled states.
2. Check normal text at 4.5:1 minimum contrast and large text at 3:1 minimum contrast.
3. Check non-text UI indicators and focus outlines at 3:1 minimum contrast.
4. Zoom pages to 200 percent at 390 and 1440 widths.
5. Verify content reflows without horizontal scrolling except for intentional two-dimensional content.

Failure thresholds:

- Body, navigation, CTA, or project text below WCAG AA contrast fails.
- Text clipping or overlap at 200 percent zoom fails.
- Information conveyed only by color fails.

## Motion And Interaction Validation

### Reduced Motion

Steps:

1. Enable `prefers-reduced-motion: reduce` in browser devtools or OS settings.
2. Reload every page and repeat navigation, project browsing, and overlay interactions.
3. Verify scroll-linked animation, parallax, large transforms, autoplay motion, and canvas movement are removed, shortened, or replaced with static states.
4. Confirm essential state changes still have non-motion affordances.

Failure thresholds:

- Large continuous motion remains under reduced motion: blocker.
- Scroll position becomes tied to required content reveal with no static fallback: blocker.
- Motion reduction hides content or breaks interaction: blocker.
- Minor opacity or color transition above 200 ms under reduced motion: medium unless justified in `DECISIONS.md`.

### Hover And Touch Parity

Steps:

1. Test all hover states at 1440 and 1920.
2. Emulate touch at 390 and 768.
3. Confirm hover-revealed information is also available on tap, focus, or persistent mobile UI.
4. Verify cards, menus, and media controls do not require hover on touch devices.
5. Confirm active, pressed, selected, and disabled states are visually distinct.

Failure thresholds:

- Essential information or navigation available only on hover: blocker.
- Tap action conflicts with hover reveal and prevents link activation: high.
- Touch target smaller than 44 by 44 CSS pixels: high.

### Autoplay Rules

Steps:

1. Inspect every video, animated embed, background media, and canvas loop.
2. Confirm autoplaying media is muted, non-blocking, and does not include audio.
3. Confirm user controls exist for meaningful video/audio.
4. Confirm autoplay stops, pauses, or becomes static under reduced motion when motion is nonessential.
5. Confirm no autoplay starts inside hidden tabs, offscreen accordions, or inactive templates.

Failure thresholds:

- Autoplaying audio: blocker.
- Autoplaying video with no pause or reduced-motion fallback when visually dominant: high.
- Media that restarts repeatedly while navigating: medium.

## Media And Canvas Performance

### Media Lazy Loading

Steps:

1. Inspect network requests during initial load on each page.
2. Confirm below-the-fold images and videos are lazy loaded.
3. Confirm above-the-fold LCP media is prioritized and not lazy loaded.
4. Confirm responsive image sizes match rendered dimensions at 390, 768, 1024, 1440, and 1920.
5. Confirm video posters load before video payloads where video is not immediately required.

Failure thresholds:

- Below-the-fold project or editorial media eagerly loaded without a documented reason: high.
- LCP image lazy loaded or delayed behind noncritical scripts: high.
- Rendered image exceeds required display size by more than 2x in either dimension: medium.
- Missing width/height or stable aspect-ratio causing layout shift: high.

### Canvas Offscreen Pause

Steps:

1. Identify every canvas, WebGL, or custom code animation.
2. Open Chrome Performance panel and record scroll from above the component to below it.
3. Confirm requestAnimationFrame or equivalent render loops pause when the canvas is offscreen.
4. Confirm loops pause when the tab is hidden and resume without visual corruption.
5. Confirm reduced motion replaces continuous canvas movement with a static or low-motion state.

Failure thresholds:

- Offscreen canvas continues rendering continuously for more than 2 seconds after leaving viewport: high.
- Hidden tab keeps a custom animation loop active: high.
- Canvas consumes more than 15 percent CPU on an idle page after settling: high.
- Canvas is blank, misframed, or overlaps content at any required breakpoint: blocker.

### Mobile Simplification

Steps:

1. Compare mobile layout against desktop for every motion-heavy, media-heavy, or canvas-heavy section.
2. Verify mobile keeps core narrative and project access while reducing nonessential visual complexity.
3. Confirm no desktop-only interaction is required to understand or navigate the page.
4. Confirm mobile media uses lighter sources or fewer concurrent animated elements.

Failure thresholds:

- Mobile removes a required project, CTA, or core portfolio claim without documented approval: high.
- Mobile keeps desktop-grade animation that harms scroll performance or readability: high.
- Mobile layout depends on tiny labels, hidden hover states, or dense overlapping media: high.

## Performance Validation

### Lighthouse Targets

Run Lighthouse in Chrome for mobile and desktop against the release candidate. Use an incognito or clean profile where possible.

Targets:

- Performance: 90 or higher desktop, 85 or higher mobile.
- Accessibility: 95 or higher.
- Best Practices: 95 or higher.
- SEO: 95 or higher.

Failure thresholds:

- Accessibility score below 95 blocks Milestone 8.
- SEO score below 95 blocks Milestone 8 unless the gap is a documented limitation outside project control.
- Mobile Performance below 85 or Desktop Performance below 90 requires remediation or a `DECISIONS.md` entry with evidence and owner approval.
- Any single audit failure involving color contrast, accessible names, crawlability, invalid links, or tap targets must be fixed even if the category score passes.

### Core Web Vitals

Measure at 390 mobile and 1440 desktop minimum. Use Lighthouse, Chrome Performance, WebPageTest, or another agreed lab tool.

Targets:

- LCP: 2.5 s or faster.
- CLS: 0.10 or lower.
- INP: 200 ms or faster.
- Total Blocking Time in Lighthouse: 200 ms or lower mobile, 100 ms or lower desktop.

Failure thresholds:

- LCP above 2.5 s on the primary landing page: high in Milestone 6, blocker in Milestone 8.
- CLS above 0.10 on any primary page/template: blocker.
- INP above 200 ms for navigation, menus, project interactions, or filters: high in Milestone 6, blocker in Milestone 8.
- Long tasks above 50 ms caused by nonessential animation, canvas, or third-party script: medium; high if repeated during interaction.

### Layout Stability

Steps:

1. Record page load with network throttling.
2. Watch hero media, font loading, CMS cards, embedded media, navigation, and footer.
3. Confirm fonts use stable fallback behavior.
4. Confirm image, video, iframe, and canvas containers reserve space before content loads.

Failure thresholds:

- Visible shift in hero, navigation, or primary CTA after initial paint: high.
- CMS card grid shift after media load: high.
- Any ad hoc spacer used only to mask layout shift without fixing source sizing: medium.

### Script And Third-Party Budget

Steps:

1. Review network and coverage panels for JavaScript transferred and executed.
2. Identify Framer runtime, custom code components, analytics, fonts, embeds, and media players.
3. Disable optional third-party scripts locally where possible and compare interaction latency.
4. Confirm code components do not run heavy work during initial render when below the fold.

Failure thresholds:

- Optional third-party script blocks LCP or primary navigation: high.
- Custom code component adds repeated long tasks during idle: high.
- Unused JavaScript above 250 KB transferred on initial page without documented need: medium.

## SEO Validation

Steps:

1. Verify each page has a unique, descriptive title and meta description.
2. Verify canonical URL rules are set correctly for the final domain plan.
3. Verify one meaningful `h1` per page and logical content hierarchy.
4. Verify Open Graph and social preview images exist, are correctly sized, and use approved factual content.
5. Verify project pages/templates have crawlable text and descriptive links.
6. Verify robots, sitemap, and indexing settings before publication handoff.
7. Verify no `NEEDS_AFFAN_CONFIRMATION` text appears in public-facing metadata or page content.

Failure thresholds:

- Missing title, description, canonical, or crawlable primary content on a public page: high.
- Public metadata containing unverified claims or placeholders: blocker.
- Social image missing or badly cropped for the home page or featured project pages: medium.
- Broken internal link, broken project route, or broken primary CTA: blocker.

## Browser And Device Coverage

Required local coverage where available:

- Chrome latest on desktop.
- Edge latest on desktop if available.
- Firefox latest on desktop if available.
- Safari desktop if macOS is available.
- iOS Safari on a real device or BrowserStack/LambdaTest if available.
- Android Chrome on a real device or BrowserStack/LambdaTest if available.

Known limitations when unavailable:

- If Safari desktop is unavailable, mark Safari-specific support as unverified and prioritize testing CSS sticky behavior, backdrop filters, video autoplay behavior, focus outlines, font rendering, and scroll animation on the first available macOS pass.
- If iOS is unavailable, mark iOS Safari as unverified and prioritize testing touch navigation, viewport height behavior, autoplay restrictions, reduced motion, sticky/pinned sections, and canvas memory usage on the first available device pass.
- If Android is unavailable, mark Android Chrome as unverified and prioritize testing tap targets, address-bar viewport changes, scroll smoothness, image memory, and low-end CPU performance on the first available device pass.
- Do not claim cross-browser completion until each unavailable platform is either tested or explicitly recorded as a known limitation in the Milestone 8 QA notes.

Failure thresholds:

- Any browser-specific issue that blocks navigation, reading, project viewing, or contact flow is a blocker.
- Any browser-specific animation defect that does not block content access is medium unless it harms performance or causes motion-safety issues.

## QA Procedure

1. Confirm the QA URL is a staging or preview URL, not a published production update.
2. Capture baseline screenshots at 390, 768, 1024, 1440, and 1920.
3. Run keyboard navigation and focus-order checks on every page/template.
4. Run screen-reader semantic and automated axe checks.
5. Run reduced-motion checks and compare against default motion.
6. Validate hover/touch parity across desktop and mobile emulation.
7. Inspect autoplay, media loading, and canvas behavior.
8. Run Lighthouse mobile and desktop.
9. Record Core Web Vitals and trace any failing metric to a concrete cause.
10. Validate SEO metadata, crawlability, social previews, and placeholder-free content.
11. Retest all fixed issues at the original failing breakpoint/browser.
12. Update `DECISIONS.md` only if a deviation from `SPEC.md` is accepted by the project owner.

## Severity Rules

- Blocker: prevents launch readiness, blocks access to core content, violates motion safety, ships unverified public claims, breaks navigation/contact/project access, or fails required Milestone 8 thresholds.
- High: materially harms accessibility, performance, mobile usability, media loading, or browser support but has a clear remediation path.
- Medium: noticeable quality issue, semantic weakness, performance inefficiency, or inconsistency that should be fixed before final signoff if time allows.
- Low: polish issue that does not affect core access, comprehension, performance targets, or factual accuracy.

## Final Acceptance Criteria

Milestone 6 passes when all blockers are fixed or formally deferred with owner approval, all high issues have owners, and performance/accessibility failures have reproducible traces.

Milestone 8 passes only when:

- No blockers remain.
- Lighthouse category targets are met or documented with approved exceptions.
- LCP, CLS, and INP meet target thresholds on primary pages/templates.
- Keyboard, focus, semantics, reduced motion, hover/touch parity, autoplay, lazy loading, canvas pause, mobile simplification, and SEO checks pass.
- Safari, iOS, and Android are either tested or listed as explicit known limitations.
- No Framer publish action was performed during QA.
