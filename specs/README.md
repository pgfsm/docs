# Design Specs

Specs are the artifact of the design/architecture session path defined in
[`AGENTS.md`](../AGENTS.md). A spec captures a design decision _before_
implementation starts, so humans review the design — not a PR that already
committed to one.

Specs differ from ADRs ([`adr/`](../adr/)): a spec is a **proposal under
review**; an ADR is the **record of a decision already made and lived with**.
A spec whose decision proves durable and hard to reverse graduates to an ADR
(usually by condensing it after implementation has settled).

## Lifecycle

| Status          | Meaning                                                      |
| --------------- | ------------------------------------------------------------ |
| **Draft**       | Being written or under review in its spec-only PR            |
| **Accepted**    | Spec PR merged after human review; implementation may start  |
| **Implemented** | All implementation issues closed; links to the landed PRs    |
| **Superseded**  | Replaced by a later spec/ADR — header links to the successor |
| **Rejected**    | Reviewed and declined; kept for the record                   |

## Flow

1. Copy [`TEMPLATE.md`](TEMPLATE.md) to `spec-NNN-short-slug.md` (next free
   number), fill it in, status **Draft**.
2. Create a `design`-labeled issue and open a spec-only PR on a
   `design/<issue-number>-short-slug` branch. PR body must contain
   `Spec: specs/spec-NNN-short-slug.md` and `Closes #<issue-number>`.
3. Review happens in the PR. Merging it flips the status to **Accepted**
   (update the header in the merge or a follow-up commit).
4. Cut implementation issues that link back to the spec; implementation PRs
   reference those issues as usual.
5. When implementation lands, set status **Implemented** and add links to the
   landed PRs. Graduate durable, hard-to-reverse decisions to
   [`adr/`](../adr/).

## Index

| Spec | Title | Status |
| ---- | ----- | ------ |
| _none yet_ | | |
