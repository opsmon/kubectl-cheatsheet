# kubectl Cheatsheet

A bilingual `kubectl` command reference for everyday Kubernetes work.

<p align="center">
  <a href="https://opsmon.github.io/kubectl-cheatsheet/">
    <img src="https://img.shields.io/badge/Open-kubectl%20Cheatsheet-0071e3?style=for-the-badge" alt="Open kubectl Cheatsheet">
  </a>
</p>

The site is a static Svelte/Vite app. Markdown files in `ru/` and `eng/` remain the source of the documentation, while Vite builds deployable HTML into `public/`.

## Links

- Live site: <https://opsmon.github.io/kubectl-cheatsheet/>
- Home: `index.html`
- Russian docs: `ru/viewing.html`
- English docs: `eng/viewing.html`
- Source markdown: `ru/*.md`, `eng/*.md`

## Local Development

```bash
npm install
npm run dev
```

Open the Vite URL printed in the terminal.

## Checks

```bash
npm run verify
```

This rebuilds the search index, checks anchors, and runs `svelte-check`.

## Build

```bash
npm run build
```

The production site is written to `public/`.

## GitLab Pages

GitLab Pages is configured in `.gitlab-ci.yml`.

The `pages` job runs:

```bash
npm ci
npm run verify
npm run build
```

Then it publishes `public/` as the Pages artifact.

## GitHub Pages

GitHub Pages is still supported through `.github/workflows/pages.yml`. It uses the same Svelte/Vite build and uploads `public/`.

## Updating Content

1. Update matching files in both `ru/` and `eng/` when possible.
2. Keep section order consistent between languages.
3. Add new visual navigation entries in `src/lib/catalog.svelte`.
4. Run `npm run verify` before opening a merge request or pull request.
