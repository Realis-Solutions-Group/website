# Codebase Structure

This document describes how the Realis Solutions Group website is organized for maintainability.

## Overview

- **Build**: Vite + React 18
- **Routing**: React Router (client-side). Paths: `/` (home), `/services`, `/about`, `/contact`. Unknown paths redirect to `/`.
- **Theming**: Three themes (Dark Intelligence, Platinum Executive, Bold Editorial) applied via `data-theme` and CSS variables.

## Directory Layout

```
src/
├── main.jsx              # Entry: mounts App, imports global CSS
├── App.jsx               # Shell: theme state, Routes, Nav/Footer, layout
├── constants/            # Config and copy (no UI)
│   ├── themes.js         # Theme ids, labels, Google Fonts URLs
│   └── content.js        # Nav links (with path), company info, services, personas, etc.
├── hooks/                # Reusable React hooks
│   ├── useReveal.js      # IntersectionObserver for .reveal scroll animation
│   └── useThemeFonts.js  # Injects Google Fonts link for active theme
├── components/           # Shared UI
│   ├── Nav.jsx           # Sticky nav, desktop/mobile menu, theme switcher slot
│   ├── Footer.jsx        # Site footer
│   ├── ThemeSwitcher.jsx # Theme dropdown
│   └── index.js          # Barrel export
├── pages/                # One component per route
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── index.js          # Barrel export
└── styles/               # Global CSS
    ├── base.css          # Reset, layout, nav responsive, reveal, keyframes
    └── themes.css        # [data-theme="..."] variables and component overrides
```

## Conventions

1. **Content and config**  
   Keep copy and theme config in `src/constants/`. Components import from there so copy changes don’t require touching JSX.

2. **Pages**  
   One file per page; pages are presentational and use content from `constants/content.js`.

3. **Navigation**  
   Use React Router's `<Link to="/path">` for in-app navigation. `NAV_LINKS` in `content.js` includes a `path` for each page (`/`, `/services`, `/about`, `/contact`). Nav highlights the current page using `useLocation().pathname`.

4. **Theming**  
   Theme id is stored in React state and applied as `data-theme` on the root and `body`. All theme-specific styles live in `themes.css` under `[data-theme="dark"]`, etc.

5. **Accessibility**  
   Semantic HTML (`nav`, `main`, `section`, `article`), skip link, ARIA where needed, and `:focus-visible` in `base.css`.

## Adding or Changing Content

- **Copy (taglines, services, personas, etc.)**: Edit `src/constants/content.js`.
- **Theme labels or fonts**: Edit `src/constants/themes.js`.
- **New theme**: Add an id and entry in `THEMES` and `FONT_LINKS`, then add a matching `[data-theme="..."]` block in `src/styles/themes.css`.

## Adding a New Page

1. Add `{ id, label, path }` to `NAV_LINKS` in `src/constants/content.js` (e.g. `path: '/your-page'`).
2. Create `src/pages/YourPage.jsx` and export it from `src/pages/index.js`.
3. In `App.jsx`, add `<Route path="/your-page" element={<YourPage />} />`.
4. For production, ensure your host serves `index.html` for all routes (SPA fallback). See README Deployment.

## Scripts

- `npm run dev` — Start Vite dev server (default port 5173).
- `npm run build` — Production build to `dist/`.
- `npm run preview` — Serve the production build locally.
