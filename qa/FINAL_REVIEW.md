# Final Review Checklist

Date: 2026-07-15

Scope: Local Next.js production build and public routes in this repository.

## Resolved Findings

- Generic student-portfolio patterns avoided: no headshot hero, no skills cloud, no percentage bars, no contribution graph, no identical project-card grid.
- Reference resemblance risk reduced: public homepage uses Affan's signal/network system, not copied reference layouts, palettes, or assets.
- Framer platform removed from production architecture; remaining references are bans, superseded decisions, or public reference-site observations.
- Public copy no longer exposes internal `NEEDS_AFFAN_CONFIRMATION` or draft contribution notes.
- Project ownership appears before project detail through visible ownership labels.
- Vantage and gRNAlytics are presented as team projects with evidence links and caution language.
- Homepage signal labels no longer cross the hero headline.
- Mobile hero CTAs fit inside the first viewport.
- Navigation uses native disclosure behavior on mobile and has an automated smoke test.
- Lighthouse favicon and label-content-name warnings were resolved.
- Axe checks pass with color-contrast enabled.
- Responsive smoke tests pass at 390, 768, 1024, 1440, and 1920px with no horizontal overflow.
- Real Vantage deployment media replaces the former generic flagship placeholder.
- The gRNAlytics visual is explicitly a source-backed software pipeline, not fabricated biological output.
- Lab items expose ownership and current status before visitors follow project links.
- Mobile navigation returns focus on Escape and closes after section selection.
- The ticker has keyboard pause/resume behavior and offscreen/visibility lifecycle handling.
- Public-route Canvas 2D work is progressive: no initialization on mobile, coarse pointers, reduced motion, or before pointer intent.
- Full production QA passes: 49 Playwright tests.
- Lighthouse category targets are met on the Webpack production build: mobile retained samples scored 91-95/100/100/100 and desktop scored 100/100/100/100.

## Remaining Limitations

- Richer project recordings, device footage, portrait photography, and a resume asset are still needed for the final media ceiling.
- Resume link, portrait, availability, detailed biography, preferred team names/roles, and some current-product context need Affan confirmation.
- Authenticated GitHub CLI contribution search could not run because `gh` is not installed.
- Figma Make reinspecting remains blocked because the concrete URL is not present.
- The Vercel preview is protected by account login, so an anonymous reviewer cannot inspect it until project access settings are deliberately changed.
- An earlier Vercel command unexpectedly created a production deployment and aliases; no rollback was attempted without approval.
- Some Lighthouse CLI runs produced valid reports and then emitted a Windows temporary-directory cleanup `EPERM` warning.
- Mobile LCP varied from 2.48s to 2.62s locally, so the below-2.5s target is achieved in the best sample but not claimed as repeatable until preview/CI measurement.

## Follow-Up Before Production

- Add richer project recordings and portrait/resume media when Affan supplies or approves them.
- Re-run authenticated GitHub audit if `gh` becomes available.
- Re-run Lighthouse against the final public Vercel URL after access permits anonymous inspection.
- Add a final resume asset after Affan confirms it for publication.
- Deploy only with the explicit `--target=preview` flag and smoke-check what preview protection permits.
- Do not promote to production or connect the custom domain without explicit approval.
