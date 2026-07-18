# cv-remake

Personal CV site built from a [Google Stitch](https://stitch.withgoogle.com/) terminal design — translated from HTML to **Vite + React + TypeScript + Tailwind CSS v4**.

Live site: https://miguelangelbuenorivera.com/ (also https://magalenyo.github.io/cv-remake/ until custom domain is configured)

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

### One-time setup

1. Open **Settings → Pages → Build and deployment → Source**.
2. Select **GitHub Actions** (not “Deploy from a branch”).
3. Re-run the latest **Deploy to GitHub Pages** workflow from the **Actions** tab.

If Pages is set to serve the `main` branch root, the site will load the dev `index.html` and fail with a 404 on `/src/main.tsx`. The workflow builds the production bundle into `dist/` and must be the Pages source.

The Vite `base` path is `/` for custom-domain hosting on GitHub Pages. Use `/cv-remake/` only if serving from the project URL without a custom domain.

## Design source

The original Stitch export lives in `stitch-design/` (`code.html`, `DESIGN.md`).

## Agent guidelines

See [`AGENTS.md`](./AGENTS.md) for commit conventions and workflow rules.
