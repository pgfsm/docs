# Contributing to docs

Thank you for your interest in contributing!

## Getting started

```bash
git clone https://github.com/pgfsm/docs.git
cd docs
deno install
cd apps/example-app && deno task start
```

## Repository layout

- `apps/` — deployable applications
- `packages/` — shared libraries consumed by apps (and each other)
- `adr/` — architecture decision records for non-obvious design choices

## Making a change

1. Open an issue first for anything non-trivial, so the approach can be
   agreed on before you invest time.
2. Create a branch off `main`.
3. Keep commits scoped and messages descriptive.
4. Open a pull request against `main` and fill in the PR template.
5. A maintainer will review; CI must pass before merge.

## Reporting bugs

Use the **Bug report** issue template. Include steps to reproduce, what you
expected, and what actually happened.

## Code of conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you agree to abide by it.
