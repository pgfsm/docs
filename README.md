# docs



[![CI](https://github.com/pgfsm/docs/actions/workflows/ci.yml/badge.svg)](https://github.com/pgfsm/docs/actions/workflows/ci.yml)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache-2.0-blue.svg)](https://github.com/pgfsm/docs/blob/main/LICENSE)

## Repository layout

This is a monorepo managed with **deno** workspaces:

```
docs/
├── apps/                 # deployable applications
│   └── example-app/      # starter app — replace or delete
├── packages/              # shared, importable libraries
│   └── example-lib/      # starter package — replace or delete
├── docs/adr/               # architecture decision records
└── .github/                 # CI workflows, issue/PR templates
```

## Getting started

```bash
deno install
cd apps/example-app && deno task start
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to propose changes, and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community guidelines.

## License

Apache License 2.0 — see [LICENSE](LICENSE).
