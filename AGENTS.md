# Agent Instructions

This repository is the production source of truth for Affan Nadeem's portfolio website.

## Source Of Truth

- `SPEC.md` is authoritative for creative direction, structure, content rules, motion principles, accessibility, and performance targets.
- `PLAN.md`, `STATUS.md`, and `DECISIONS.md` must stay current as work progresses.
- `DESIGN.md` is the code-aligned visual-system reference; update it when tokens, typography, component rules, or motion doctrine materially change.
- If implementation reality requires a deviation from `SPEC.md`, record it in `DECISIONS.md`.
- Do not invent factual claims, personal contributions, awards, metrics, outcomes, or biography.
- Use `NEEDS_AFFAN_CONFIRMATION` for unverified personal information and unresolved project facts.

## Fixed Architecture

- Build the site in this repository with Next.js App Router, React, and TypeScript.
- Keep all production source code, local content, design tokens, and project history in GitHub.
- Host previews and the final approved site on Vercel.
- Figma may be used for visual and interaction references only.
- Do not use Figma Sites.
- Framer is removed from the production architecture.
- Do not use Framer hosting, Framer CMS, Framer Agent, Framer Code Components, or Framer external-agent workflows.
- The Motion or `framer-motion` React animation library is allowed only as a normal React dependency when technically justified.

## Design Principles

- The portfolio should feel like `AFFAN NADEEM - SIGNAL / SYSTEMS`: a precise, cinematic system for turning noisy problems into understandable software.
- Avoid generic student-portfolio patterns: centered headshot hero, skills cloud, skill bars, six identical rounded cards, GitHub contribution graph, generic gradients, and resume-dump layouts.
- Show project media and evidence before long explanation.
- Make ownership and role visible before visitors enter team-project case studies.
- Use motion to clarify structure, continuity, and focus; do not animate everything.
- Build mobile intentionally, with persistent labels and no hover-only information.

## Evidence Rules

- Distinguish overall project behavior, team work, and Affan's personal contribution.
- Use repository history, commits, pull requests, public docs, live deployments, or Affan-confirmed information as evidence.
- Do not publish claims about metrics, adoption, revenue, awards, scientific validity, production impact, or team size without evidence.
- Keep `content-audit/CLAIMS_LEDGER.md` aligned with public copy.

## Code Quality

- Prefer the existing project patterns once the Next.js app exists.
- Use TypeScript strict mode.
- Keep components focused and reusable where reuse removes real complexity.
- Prefer native browser APIs and CSS for simple interactions.
- Add dependencies only when they materially improve quality, accessibility, or performance.
- Clean up event listeners, observers, timers, animation frames, and media-query listeners.

## Accessibility

- Use semantic HTML, a logical heading hierarchy, skip navigation, visible focus states, keyboard-accessible controls, descriptive alt text, and sufficient color contrast.
- Respect `prefers-reduced-motion` globally.
- Do not make essential information depend on hover, custom cursor behavior, canvas animation, or JavaScript-only visuals.
- Autoplay media must be muted; meaningful video needs appropriate controls or an accessible alternative.

## Performance

- Target Lighthouse Performance 95+ desktop, 90+ mobile, Accessibility 95+, SEO 95+.
- Target LCP under 2.5s, CLS below 0.1, and INP below 200ms.
- Optimize fonts, images, video, JavaScript bundles, canvas loops, and route loading.
- Pause expensive animation loops offscreen, in hidden tabs, under reduced motion, and on low-power/mobile fallbacks.

## Git Workflow

- Work on a dedicated branch such as `portfolio-rebuild`.
- Create checkpoint commits before major implementation milestones when the repository has commits available.
- Keep changes scoped and recoverable.
- Do not force-push or rewrite unrelated history.
- Do not revert user changes unless explicitly requested.
- Do not commit credentials or private tokens.

## Publishing Restrictions

- Vercel preview deployments are allowed when authentication permits.
- Do not publish to production.
- Do not connect or change the custom domain without explicit approval.
- Do not introduce paid hosting dependencies.

## Required Deliverables

- `reference-audit/FILIPPO.md`
- `reference-audit/TIGRAN.md`
- `reference-audit/ABHIJIT.md`
- `reference-audit/SYNTHESIS.md`
- `content-audit/PROJECT_AUDIT.md`
- `content-audit/CLAIMS_LEDGER.md`
- `content-audit/MEDIA_NEEDED.md`
- `PLAN.md`
- `STATUS.md`
- `DECISIONS.md`
- `DESIGN.md`
