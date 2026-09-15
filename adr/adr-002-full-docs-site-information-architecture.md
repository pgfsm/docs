# ADR-002: Port `fsm` repo documentation into `content/docs/` as a 1:1 content port

**Status:** Accepted

## Context

`apps/docs-webapp-with-fumadocs` only has the `create-fumadocs` placeholder
content (`index.mdx` "Hello World", `test.mdx`). The real pgFSM
documentation — the root quick-start guide, the contributor/developer guide,
ADRs, design specs, known limitations/TODOs, and every package's own
README/docs — lives in the separate `fsm` development repo
(https://github.com/pgfsm/fsm) and isn't published anywhere as a browsable
site (closes #6).

## Decision

Port the `fsm` repo's documentation into this app's `content/docs/` as a
straight 1:1 content port: copy prose, code blocks, and tables from each
source file into MDX essentially verbatim, changing only what's structurally
necessary (frontmatter, dropping the source's top `# Title` H1 in favor of
frontmatter `title`, and rewriting relative cross-links to their new
locations or to `https://github.com/pgfsm/fsm/blob/main/<path>` GitHub links
for files not being ported). No summarizing, editorializing, or rewriting of
the prose itself.

Organize the ported content with fumadocs `meta.json` nav files into the
following top-level sections, mirroring the `fsm` repo's own directory
structure within each section rather than flattening or re-ordering it:

- **Introduction** — a new, hand-written `index.mdx` replacing the
  placeholder.
- **Getting Started** — the root `README.md`.
- **Guides** — `DEVELOPER.md` and `docs/tooling.md`.
- **Architecture** — `docs/adr/`, `docs/specs/`, and
  `docs/schema-change-propagation.md`.
- **Known issues** — `docs/limitations/` and `docs/todo/`.
- **Packages** — one section per package under `packages/`, each mirroring
  that package's own `README.md` plus any `docs/adr`, `docs/guides`,
  `docs/reference`, `docs/prd`, `docs/todo` subfolders.
- **Apps** — `apps/fsm-core-example/README.md`.

Internal `src/**/README.md` implementation notes (e.g.
`packages/fsm-compiler-ts/src/types/README.md`) and packages with no
README/docs (`fsm-core-ts-hono-deno`) are excluded — they document
implementation details for contributors working in that source tree, not
site-worthy reference documentation.

## Alternatives considered

- **Hand-write fresh docs instead of porting:** would let us tailor content
  to the "docs site" audience (vs. the `fsm` repo's contributor audience) and
  fix stale/inconsistent material as we go, but is far more work and this
  issue's scope is explicitly "port existing content, not write new content."
  Two small pages (`index.mdx` and the `packages`/`apps` section index pages)
  are still hand-written where no equivalent source file exists.
- **Flat, single-level nav (e.g. every package's docs as siblings under one
  `packages/` list, or every doc type collapsed into one page) instead of
  mirroring the `fsm` repo's own directory structure:** simpler `meta.json`
  files, but loses the structure that already reflects how the source repo's
  maintainers group related docs (ADRs vs. guides vs. reference vs. specs),
  and would require re-deriving that grouping by hand for every package
  instead of mapping each source directory straight onto a `content/docs/`
  directory of the same shape.

## Consequences

- This is a manual, one-time port with no automation or sync mechanism, so
  the site's docs can drift from the `fsm` repo as that repo's docs are
  updated. Keeping them in sync going forward requires either a follow-up
  manual port or a separate piece of tooling — neither is in scope here.
- The site's information architecture is coupled to `fsm`'s current
  directory layout (one section per package, subsections for
  adr/guides/reference/prd/todo where they exist). Restructuring `fsm`'s docs
  layout later will require a corresponding restructuring here.
- Internal `src/**/README.md` notes are intentionally not discoverable from
  the docs site; anyone needing them still has to go to the `fsm` repo
  directly.
