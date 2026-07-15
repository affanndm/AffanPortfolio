# Decisions

## 2026-07-15: Reconstruct Working SPEC.md

Decision: The workspace did not contain `SPEC.md`, even though the brief named it as the source of truth. I reconstructed `SPEC.md` from Affan's pasted prompt and marked it as the working source of truth until a separate canonical file is provided.

Reason: Subagents and future work need a durable local spec. Continuing without a local source-of-truth file would make the project harder to audit and easier to contradict.

Deviation From Original Brief: The brief expected `SPEC.md` to already exist. This is a recovery step, not a change to the creative direction.

## 2026-07-15: Create PRODUCT.md From Existing Brief Without Additional Interview

Decision: I created `PRODUCT.md` from the detailed prompt and reconstructed `SPEC.md`.

Reason: The `impeccable` workflow requires `PRODUCT.md`, and Affan's prompt already answered the strategic questions: register, users, purpose, personality, anti-references, design principles, and accessibility targets. Affan also explicitly requested autonomous execution without ordinary confirmation pauses.

Rejected Alternative: Stop to ask strategic setup questions. That would contradict the autonomy instruction and duplicate information already provided in the brief.

## 2026-07-15: Defer Framer Project Edits

Decision: Run Framer setup but do not connect/edit production pages until Milestone 1 is complete.

Reason: The brief explicitly requires evidence and reference audits before Framer edits.

## 2026-07-15: Defer Framer Code Component Skill

Decision: Do not apply Framer Code Component guidance until after a Framer session exists and the generated Framer task map's Components row has been read.

Reason: The code-component skill explicitly forbids loading it directly as the entry point.

## 2026-07-15: Use Public GitHub Evidence Instead Of Authenticated gh Search

Decision: Milestone 1 GitHub auditing used public GitHub pages/API, public repository history, and subagent local mirror notes instead of authenticated `gh` searches.

Reason: The GitHub CLI (`gh`) is not installed in the environment, and direct PowerShell/curl API access was unreliable. Public GitHub evidence was sufficient to identify owned repositories, Vantage PRs/commits, gRNAlytics commits, repository tiers, and claim confidence levels.

Deviation From Original Brief: The brief requested authenticated GitHub history search. This remains a limitation and should be rerun before final content freeze if `gh` or another authenticated GitHub path becomes available.
