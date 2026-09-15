# ADR-001: Use TanStack Start + Fumadocs for the documentation site app

**Status:** Accepted

## Context

`apps/` is an empty scaffold, but README.md and CONTRIBUTING.md already
reference a docs site app living under it. We need a deployable app that
renders this project's documentation content (closes #1).

## Decision

Add `apps/docs-webapp-with-fumadocs`, generated via `create-fumadocs`, using
TanStack Start (React) for routing/SSR and Fumadocs for MDX content, search,
and doc layout. Content lives under `content/docs/` as MDX; the app also
exposes `llms.txt` / `llms-full.txt` endpoints for LLM-friendly access to the
docs.

## Alternatives considered

- **Hand-rolled static site (e.g. plain Vite + markdown loader):** more
  control, but we'd be re-building search, MDX handling, and doc navigation
  that Fumadocs already provides.
- **Other docs frameworks (Docusaurus, Nextra, Starlight):** viable, but
  don't fit the existing TanStack-based tooling direction as directly as
  Fumadocs' TanStack Start integration.

## Consequences

- The docs site is tied to the TanStack Start + React + Vite toolchain;
  swapping frameworks later means redoing routing and content loading.
- Adds `fumadocs-*`, `@tanstack/react-router`/`react-start`, and `react` as
  new dependencies for this app (scoped to `apps/docs-webapp-with-fumadocs`,
  not the workspace root).
- Future doc content should live under this app's `content/docs/` unless a
  later ADR changes that.
