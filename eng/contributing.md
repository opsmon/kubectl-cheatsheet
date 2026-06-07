---
layout: docs
title: Contributing — kubectl Cheatsheet
---

# Contributing

> Fix inaccuracies, add useful commands, and help keep the English and Russian editions in sync.

## Quick workflow

1. Open the [GitHub repository](https://github.com/opsmon/kubectl-cheatsheet).
2. Create a fork and a branch for your change.
3. Update the matching files in `eng/` and `ru/`.
4. Run the local checks.
5. Open a pull request with a short description.

## Local checks

```bash
ruby scripts/build_search_index.rb
ruby scripts/check_repo.rb
node --check assets/app.js
node --check assets/docs.js
```

## Good contributions

- add a useful command or practical workflow;
- fix a deprecated `kubectl` flag;
- improve a translation or explanation;
- report a broken link;
- improve accessibility or the mobile experience.

## Content guidelines

- Add commands to both the English and Russian editions.
- Keep the section order consistent.
- Never publish real tokens, cluster addresses, or other secrets.
- Explain the impact of potentially destructive commands.
- Use clear placeholders: `<pod-name>`, `<namespace>`, `<deployment>`.

## Report a problem

For a bug or suggestion, [create an issue](https://github.com/opsmon/kubectl-cheatsheet/issues/new). If the fix is ready, open a pull request directly.

