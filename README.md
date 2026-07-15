# cv-remake

Personal CV site built from a [Google Stitch](https://stitch.withgoogle.com/) terminal design — translated from HTML to **Vite + React + TypeScript + Tailwind CSS v4**.

Live site: https://magalenyo.github.io/cv-remake/

## Stack

- Vite 8
- React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- GitHub Pages (GitHub Actions)

## Development

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy-pages.yml`, which builds and deploys to GitHub Pages.

Ensure **Settings → Pages → Build and deployment → Source** is set to **GitHub Actions**.

The Vite `base` path is `/cv-remake/` for project-page hosting.

## Design source

The original Stitch export lives in `stitch-design/` (`code.html`, `DESIGN.md`).

## Agent guidelines

See [`AGENTS.md`](./AGENTS.md) for commit conventions and workflow rules.
