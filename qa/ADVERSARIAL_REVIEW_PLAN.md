# Adversarial Review Plan

Scope: prebuild adversarial checklist and risk review for Affan Nadeem's Next.js portfolio. This is a planning QA artifact only. Do not publish production or connect the custom domain.

## Source Basis

- `SPEC.md` is the source of truth.
- `PRODUCT.md` defines the brand promise: evidence-backed, precise, experimental, cinematic, and credible.
- `PLAN.md` places adversarial review after responsive refinement, but this plan identifies risks before build work starts.
- `STATUS.md` shows Milestone 1 is still in progress. Treat missing audit deliverables as blockers before production construction.
- `reference-audit/FILIPPO.md` and `reference-audit/ABHIJIT.md` define usable influence and non-copy boundaries.
- `implementation-planning/DESIGN_SYSTEM_BRIEF.md`, `implementation-planning/MOTION_PROTOTYPE_BRIEF.md`, and `qa/ACCESSIBILITY_PERFORMANCE_PLAN.md` define design, motion, accessibility, and performance checks.

## Prebuild Readiness Gate

Before page construction begins, answer these gate questions. Any failure blocks production page work.

| Question | Failure condition |
| --- | --- |
| Are all Milestone 1 required deliverables present? | `reference-audit/TIGRAN.md`, `reference-audit/SYNTHESIS.md`, `content-audit/PROJECT_AUDIT.md`, `content-audit/CLAIMS_LEDGER.md`, or `content-audit/MEDIA_NEEDED.md` is missing. |
| Is every factual project claim backed by evidence or marked `NEEDS_AFFAN_CONFIRMATION`? | Any claim about role, impact, metrics, users, awards, biological accuracy, revenue, or personal biography lacks a source or confirmation marker. |
| Is the fixed architecture respected? | Any Framer platform, Figma Sites, production publish, custom-domain action, or paid hosting dependency is introduced. |
| Is the design-system work still hidden/internal? | Hidden system or prototype pages are linked from public navigation, indexed, or treated as launch pages. |
| Is the portfolio direction distinct from reference sites? | A reviewer can identify Filippo, Tigran, or Abhijit as the direct visual template rather than as an influence. |

## Adversarial Review Standard

The reviewer assumes the site fails until evidence proves otherwise. Passing requires observable behavior, source-backed content, and breakpoint-tested layouts, not intent statements.

Severity:

- Blocker: would publish misleading claims, break access to core work/contact, violate motion safety, clone a reference, or fail required accessibility/performance targets.
- High: materially damages credibility, mobile usability, hierarchy, performance, or ownership clarity.
- Medium: weakens polish, clarity, consistency, or maintainability but does not block core access.
- Low: minor refinement issue.

## Risk Checklist

### 1. Generic AI Visual Patterns

| Review question | Failure condition |
| --- | --- |
| Does the first viewport feel specific to "Signal / Systems" rather than a generic student portfolio? | Hero could be swapped into any developer portfolio by replacing the name. |
| Are there gradient blobs, glass cards, generic bento grids, skill bars, GitHub contribution calendars, or six identical project cards? | Any prohibited pattern appears as a primary layout device. |
| Is lime used as a signal accent rather than painted across every CTA and badge? | Lime dominates buttons, backgrounds, or section fills without information value. |
| Do rules, metadata, media, and alignment carry the system instead of decorative panels? | The page relies on repeated rounded cards, oversized shadows, or icon-heading-text blocks. |

### 2. Unsupported Claims

| Review question | Failure condition |
| --- | --- |
| Can each Vantage and gRNAlytics claim be traced to commits, PRs, repository history, public docs, or Affan confirmation? | Any case-study sentence implies unverified impact, authorship, scientific validity, adoption, or outcome. |
| Are unresolved personal facts visibly marked in planning and absent from public copy? | `NEEDS_AFFAN_CONFIRMATION` content appears in public-facing metadata or page content. |
| Is "available for collaboration" confirmed before use? | The phrase appears without Affan confirmation. |
| Is final About copy based on resume or LinkedIn export? | Personal chronology or biography is inferred from public scraps or invented. |

### 3. Misleading Ownership

| Review question | Failure condition |
| --- | --- |
| Is Affan's role visible before entering every team or contribution-only project? | Role or ownership appears only deep in the case study, on hover, or not at all. |
| Do team projects include team and credits? | Vantage or gRNAlytics implies sole authorship or omits collaborators/credits. |
| Is "My Contribution" based on exact diffs or verified sources? | Contribution copy is written from README-level inference. |
| Do Lab items use the correct ownership label? | A team, archive, or experiment item is presented as a sole build without evidence. |

### 4. Excessive Animation

| Review question | Failure condition |
| --- | --- |
| Does every motion system explain structure, focus, continuity, or feedback? | Motion exists only as spectacle or repeats on ordinary paragraphs. |
| Does reduced motion provide a complete experience? | Content is hidden, broken, or meaningfully reduced when `prefers-reduced-motion` is active. |
| Are loops and canvas effects paused offscreen and in hidden tabs? | Ticker, signal network, cursor, or WebGL/canvas loops continue running when invisible. |
| Is the opening sequence brief, real, and non-blocking? | It behaves like a fake loader, lasts too long, shows fake progress, or blocks navigation. |

### 5. Weak Hierarchy

| Review question | Failure condition |
| --- | --- |
| Can a recruiter understand the homepage path in 10 seconds: identity, flagship work, role, proof, contact? | Visual drama obscures what Affan does or what to click next. |
| Are Vantage and gRNAlytics clearly the two flagship case studies? | Lab items, decorative media, or experiments compete equally with flagship work. |
| Is metadata adjacent to titles and media? | Role, team, ownership, repository, or evidence status is buried below long prose. |
| Are headings semantically and visually ordered? | Multiple unrelated `h1`s, skipped headings, or oversized compact-panel text confuse reading order. |

### 6. Inconsistent Spacing And Layout

| Review question | Failure condition |
| --- | --- |
| Do sections align to the 12/6/4-column system and defined gutters? | Major text, rules, media, and metadata drift without an intentional reason. |
| Does rhythm vary intentionally while staying disciplined? | Every section has identical spacing, or spacing feels arbitrary between related elements. |
| Are media frames square or lightly rounded as specified? | Generic 24px+ SaaS card radii or decorative shadows dominate. |
| Is there no horizontal overflow at 390, 768, 1024, 1440, and 1920? | Any viewport shows horizontal scrolling or clipped essential content. |

### 7. Unnecessary Dependencies

| Review question | Failure condition |
| --- | --- |
| Is each client component justified by interaction, accessibility, or performance needs? | Client components are used for ordinary cards, buttons, static metadata, or simple layout that could stay server-rendered. |
| Are native browser/CSS/React features used where sufficient? | External libraries duplicate simple layout, hover, reveal, or routing behavior without measurable benefit. |
| Are animation libraries limited to cases that need them? | GSAP, Lenis, Three.js, or similar tools are added for simple reveals, hover states, or smooth-scroll fashion. |
| Are component cleanup paths defined before build? | Planned code lacks cleanup for animation frames, observers, listeners, media queries, or WebGL/canvas resources. |

### 8. Mobile Compromises

| Review question | Failure condition |
| --- | --- |
| Does mobile preserve core project access and ownership clarity? | Mobile hides role, ownership, project links, contact, or required content. |
| Are hover and custom-cursor interactions replaced with persistent touch UI? | Any essential information requires hover, pointer precision, or desktop scroll choreography. |
| Is the signal network simplified on mobile and low-power hardware? | Desktop-grade canvas/WebGL complexity runs on mobile without fallback. |
| Are text wraps and metadata readable at 390px? | Long headings, mono labels, buttons, or project rows overlap or shrink below readable size. |

### 9. Accessibility Failures

| Review question | Failure condition |
| --- | --- |
| Can the site be used with keyboard only? | Any nav item, project link, menu, reel, sequence, or contact action is unreachable or traps focus. |
| Are focus states visible and contrast-safe? | Custom controls remove outlines or focus contrast is below 3:1. |
| Does every meaningful image, video, canvas, and interaction have an accessible equivalent? | Project media has generic alt text, empty alt where informative, or canvas-only meaning. |
| Are autoplay rules respected? | Any autoplay audio exists, or dominant autoplay motion lacks pause/reduced-motion fallback. |
| Is zoom respected? | Any script blocks browser zoom or 200 percent zoom causes overlap/clipping. |

### 10. Unclear Project Explanations

| Review question | Failure condition |
| --- | --- |
| Does each case study answer: signal, noise, contribution, system, decisions, outcome, reflection, team? | A project page reads like a visual trailer without enough technical explanation or evidence. |
| Is gRNAlytics explained without overclaiming biology? | Copy implies scientific accuracy, clinical relevance, or research outcome not evidenced by the audit. |
| Is Vantage explained as team/local discovery work without sole ownership claims? | Copy makes Affan appear to own or lead the entire product without evidence. |
| Do links to commits/PRs appear where useful? | Contribution claims remain unsupported even when source links are available. |

### 11. Repetitive Copy

| Review question | Failure condition |
| --- | --- |
| Is "signal/noise/systems" language used with discipline? | The same metaphor appears in every section until it becomes filler. |
| Are section labels varied and useful? | Repeated tiny uppercase labels or numbered eyebrows scaffold every section by default. |
| Is microcopy authored but not borrowed? | Copy echoes "Scroll & scavenge", "get in touch right now", or other reference-site phrasing. |
| Does each project have a distinct explanation? | Vantage, gRNAlytics, and Lab items share interchangeable verbs and generic outcomes. |

### 12. Broken Links

| Review question | Failure condition |
| --- | --- |
| Do email, GitHub, LinkedIn, resume, repository, live URL, and project routes resolve? | Any primary CTA, contact method, project route, repo link, or resume link is broken. |
| Are external links clearly marked? | External project/social links lack visible affordance or accessible names. |
| Are empty CMS link fields handled safely? | Blank live URLs render as broken buttons or misleading unavailable links. |
| Are hidden/internal pages excluded from public navigation? | Design-system or prototype pages appear as public links. |

### 13. Placeholder Content

| Review question | Failure condition |
| --- | --- |
| Is every placeholder clearly labeled as missing media or pending confirmation? | Placeholder visuals masquerade as real project evidence. |
| Are stock/generic visuals avoided for project proof? | Stock imagery is represented as Vantage, gRNAlytics, or Lab project media. |
| Are missing assets tracked in `content-audit/MEDIA_NEEDED.md`? | Required media is absent without a documented request. |
| Is placeholder text absent from SEO/social metadata? | Draft labels, lorem ipsum, or `NEEDS_AFFAN_CONFIRMATION` appears in public metadata. |

### 14. Performance Regressions

| Review question | Failure condition |
| --- | --- |
| Does the build meet or have a documented path to the SPEC targets? | Desktop Lighthouse <95, mobile <90, Accessibility <95, SEO <95, LCP >2.5s, CLS >0.1, or INP >200ms without remediation. |
| Are media dimensions, posters, lazy loading, and preload priorities correct? | Below-fold media loads eagerly, LCP media is delayed, or late media causes layout shift. |
| Are fonts limited to required families and weights? | Extra font families/weights are loaded without documented need. |
| Are long tasks caused by nonessential animation or third-party scripts removed? | Idle animation, ticker, smooth scroll, analytics, or canvas creates repeated long tasks. |

### 15. Reference-Site Similarity

| Review question | Failure condition |
| --- | --- |
| Is Filippo influence limited to discipline, grid confidence, and motion quality? | The site copies black/orange energy, split-name treatment, puzzle menu, WebGL object spectacle, or project-list mechanics. |
| Is Abhijit influence limited to personal depth, lab structure, chronology, and artifact-rich case studies? | The site copies copy tone, section names, audio gimmick, zoom blocking, dense designer-culture aesthetics, or exact media rhythm. |
| Is Tigran influence limited to media evidence before explanation and modular project presentation? | The site copies ticker formats, trailer mechanics, page structure, slogans, colors, or project-presentation choreography. |
| Could a neutral reviewer mistake the portfolio for a remix of a reference site? | Any layout, palette, typography pairing, transition, microcopy, or media mechanism is recognizably derivative. |

## Prebuild Risk Register

| Risk | Current signal | Severity | Required mitigation |
| --- | --- | --- | --- |
| Milestone 1 incompleteness | `STATUS.md` lists missing/active Tigran, synthesis, and GitHub audit work. | Blocker | Finish required audit files before production page work. |
| Claim fabrication | SPEC requires exact contribution evidence; content audit files are not present yet. | Blocker | Build copy only from `CLAIMS_LEDGER.md`; otherwise use `NEEDS_AFFAN_CONFIRMATION`. |
| Reference drift | Reference sites are strong and visually memorable. | High | Run a side-by-side originality pass before accepting design-system, motion, and page comps. |
| Editorial-template drift | The spec uses dark canvas, serif statements, mono labels, and rules, which can become a saturated AI/editorial pattern. | High | Require project-specific evidence media, signal-network logic, ownership metadata, and non-repeated section grammar. |
| Motion overreach | Hero network, ticker, split text, shared transitions, and project interactions are all planned. | High | Prototype and budget motion before production; remove any effect that does not clarify structure. |
| Mobile degradation | Desktop interactions include hover, cursor, canvas, ticker, and shared transitions. | High | Design persistent mobile states first for project entry, ownership, and contact. |
| Dependency creep | Planned components could invite WebGL, smooth scroll, animation libraries, or custom code. | Medium | Require a documented quality, accessibility, or performance justification for every non-baseline dependency. |
| Placeholder leakage | Media and personal inputs are still outstanding. | High | Use clearly labeled missing-media states and block public metadata with unresolved placeholders. |

## Review Procedure

1. Confirm the QA target is a preview/staging state and no publish action is involved.
2. Check Milestone 1 readiness files before evaluating design polish.
3. Review homepage, case-study template, Lab, About, Contact, navigation, hidden system pages, and CMS states against this checklist.
4. Test 390, 768, 1024, 1440, and 1920 widths.
5. Run keyboard, focus, reduced-motion, hover/touch, media, link, and performance checks from `qa/ACCESSIBILITY_PERFORMANCE_PLAN.md`.
6. Compare the build side by side with Filippo, Tigran, and Abhijit references for similarity risks.
7. Record every finding with severity, page/section, evidence, expected behavior, and owner.
8. Re-test the exact failing viewport or interaction after fixes.

## Acceptance Bar

The portfolio is not ready for final validation until:

- No blocker or high credibility issue remains.
- Every public claim is sourced or removed.
- Every team project shows role, ownership, team, and credits before long-form explanation.
- The site feels specific to Affan's software/systems work, not like a generic AI portfolio or reference-site remix.
- Reduced motion, mobile, keyboard, links, placeholders, media loading, and performance checks pass or have approved documented exceptions.
