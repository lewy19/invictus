# Invictus

Free browser-based tools and practical guides for Kenyan students and developers, built with React and Vite. Tool inputs stay on the user's device.

## Run locally

```powershell
npm install
npm run dev
```

Vite serves the development site at `http://localhost:5155`.

## Build and verify

```powershell
npm test
npm run build
npm run preview
```

The build creates a static HTML page for each tool and guide route, plus the SPA fallback. `scripts/sitemap.mjs` regenerates `public/sitemap.xml` from the route data.

## Content and deployment setup

- `src/tools.js` defines browser tools. KCSE grade points follow KNEC's 2024 regulations and result guide. KUCCPS does not publish enough candidate-level data to reproduce its cluster weights; use the official student portal.
- `src/data.js` contains guide content. Expand and fact-check every guide before an AdSense application; current drafts are not yet 800 words each.
- Replace `YOURDOMAIN.com` in `src/config.js` and `public/robots.txt` only after choosing a domain.
- Add the real AdSense publisher and slot IDs only after approval. The ad loader waits for cookie consent and remains disabled while IDs are placeholders.
- Deploy with Vercel using `vercel.json` when the Vercel account is linked.
