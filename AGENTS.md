# AGENTS.md

Protocol for coding agents working in this repository — Claude Code,
Cursor, Codex, Gemini CLI, or any other. Humans pairing with an agent can
follow the same flow.

## Before making changes

1. Read the relevant `README.md` for the package/app you're touching.
2. For anything non-trivial (new component, cross-cutting change,
   architecture decision), write a short design note under `docs/adr/`
   before writing code — see [docs/adr/README.md](docs/adr/README.md).
3. Check open issues for related, in-progress work before starting.

## Making changes

- Create a branch per issue/feature; don't commit directly to `main`.
- Keep commits scoped to one logical change with a descriptive message.
- Match existing code style and conventions in the file/package you're
  editing rather than introducing a new pattern.
- Add or update tests for behavior you change.
- Run the lint/test commands in the package's `README.md` before opening a
  pull request.

## Opening a pull request

- Fill in the PR template, including a link to the issue it closes.
- Keep the diff focused — unrelated cleanup belongs in a separate PR.
- Don't merge your own PR; wait for review unless explicitly told otherwise.

## What not to do

- Don't add dependencies without checking if an existing one already covers
  the need.
- Don't rewrite or reformat files you're not otherwise changing.
- Don't remove tests to make CI pass — fix the underlying issue.
