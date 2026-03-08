# Realis Solutions Group — Website

Production-grade marketing site for Realis Solutions Group: AI security, product safety, and emerging risk advisory. Four pages, three swappable visual themes, **URL-based routing** (`/`, `/services`, `/about`, `/contact`).

## Tech stack

- **React 18** (hooks)
- **Vite** (build and dev server)
- **React Router** (client-side routes)
- **CSS** (variables + theme selectors; no CSS-in-JS)

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**. Use the theme dropdown in the nav to switch between Dark Intelligence, Platinum Executive, and Bold Editorial.

## Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm run dev`  | Start dev server (HMR)      |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally    |

## Project structure

- **`src/constants/`** — Theme config and all site copy (easy to update without touching components).
- **`src/components/`** — Nav, Footer, ThemeSwitcher.
- **`src/pages/`** — Home, Services, About, Contact.
- **`src/styles/`** — `base.css` (layout, reveal, nav) and `themes.css` (per-theme variables and overrides).
- **`src/hooks/`** — `useReveal` (scroll reveal), `useThemeFonts` (Google Fonts per theme).

See **[docs/STRUCTURE.md](docs/STRUCTURE.md)** for conventions and how to add or change content and pages.

## Design and code practices

- Semantic HTML and ARIA where needed; skip link and `:focus-visible` for accessibility.
- Responsive layout: hamburger menu and stacked sections on small viewports.
- Content and theme config centralized for maintainability.
- One component per file; barrel exports (`index.js`) for cleaner imports.

## Deployment

Run `npm run build` and deploy the **`dist/`** directory to any static host. The app uses client-side routing; configure the host to serve `index.html` for all paths (SPA fallback) so `/services`, `/about`, `/contact` work on direct load or refresh.

- **GitHub Pages:** A workflow in `.github/workflows/deploy-pages.yml` builds and deploys on push to `main`. In the repo go to **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**, then push to `main` (or run the “Deploy to GitHub Pages” workflow manually). The site will be at `https://<owner>.github.io/<repo>/`.
- **Vercel:** Root `vercel.json` configures SPA rewrites.
- **Netlify:** `public/_redirects` is copied into `dist/` and configures the SPA redirect.
- **Other hosts:** Add a rule like "rewrite all routes to /index.html" (status 200).
