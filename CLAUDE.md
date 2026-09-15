# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository status

This is an early scaffold for the `pgfsm/docs` monorepo — `apps/` and `packages/`
are currently empty (no `example-app` / `example-lib` exist yet despite being
referenced in README.md and CONTRIBUTING.md as starter placeholders).

## Commands

Managed with **deno** workspaces (`deno.json` lists workspace members).

```bash
deno install       # install dependencies
deno lint           # lint (run in CI)
deno test -A        # run tests (run in CI)
```

To run a single test file: `deno test -A path/to/file_test.ts`.

Once `apps/example-app` exists: `cd apps/example-app && deno task start`.

## Architecture

- `apps/` — deployable applications.
- `packages/` — shared libraries consumed by apps (and each other).
- `adr/` — architecture decision records (ADRs). Not `docs/adr` — that was
  deliberately moved so `docs/` is free for documentation site content.
- `docs/` — reserved for documentation site content (e.g. GitHub Pages).

## Workflow requirements (from AGENTS.md)

- For anything non-trivial (new component, cross-cutting change, architecture
  decision), write a short ADR under `adr/` **before** writing code — copy
  `adr/TEMPLATE.md` to `adr/adr-NNN-short-slug.md` (next free number). Skip it
  for anything easily changed later.
- Create a branch per issue/feature; never commit directly to `main`.
- Match existing code style/conventions in the file or package being edited
  rather than introducing a new pattern.
- Don't add dependencies without checking if an existing one already covers
  the need.
- Don't rewrite or reformat files that aren't otherwise being changed.
- Don't remove tests to make CI pass — fix the underlying issue.
- Keep PRs/commits scoped to one logical change; unrelated cleanup belongs in
  a separate PR.
