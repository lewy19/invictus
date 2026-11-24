# Invictus: Kenya money tools site (React + Vite)

## Run
npm install
npm run dev        # local
npm run build      # outputs dist/

## Before applying to AdSense
1. Replace YOURDOMAIN.com in src/config.js, public/robots.txt, public/sitemap.xml.
2. Write 15+ real guides in src/data.js (800+ words each) and add them to sitemap.xml.
3. Verify every rate in src/tax.js against KRA, NSSF and SHA.
4. Deploy (Cloudflare Pages, Netlify or Vercel), connect your own domain, submit sitemap to Google Search Console.
5. Apply at adsense.google.com, add your site, then uncomment the AdSense script in index.html.
6. After approval: set adsenseClient and slot IDs in src/config.js and put your pub ID in public/ads.txt.
