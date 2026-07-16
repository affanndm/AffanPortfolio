# Decisions

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
