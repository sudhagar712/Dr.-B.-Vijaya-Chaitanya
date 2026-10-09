# Dr. B. Vijaya Chaitanya — Interventional Cardiologist

SEO-friendly, single-page Next.js 16 (App Router) website: Tailwind v4, Poppins, GSAP + Lenis motion,
a real-time Three.js 3D heart, and a spinning preloader.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

> This Next.js version differs from older releases — read `node_modules/next/dist/docs/` before changing framework-level code (see `AGENTS.md`).

## Where to edit

| What | Where |
| --- | --- |
| All copy, phone, hours, timeline, exercises, tips, nav | `lib/site.ts` |
| Site URL (canonical, sitemap, JSON-LD, OG) | env `NEXT_PUBLIC_SITE_URL` (default `https://www.drvijayachaitanya.com`) |
| Colours (palette) + global CSS | `app/globals.css` (`@theme`) |
| Page order | `app/page.tsx` |
| Sections | `components/sections/*` |
| Animation choreography | `components/Motion.tsx` |
| Preloader | `components/Preloader.tsx` |
| 3D heart (procedural) | `components/Heart3D.tsx`, `lib/heartModel.ts` |

**Palette** — Primary `#175486` · Secondary `#409F9D` · Accent `#8DD3CE` · Typography `#102A43` · Background `#FFFFFF`.
**Font** — Poppins (300/400/500/600) for the whole site, loaded through `next/font`.

## Photos

* `public/images/dr-chaitanya-hero.webp` — hero cut-out · `dr-chaitanya-cathlab.webp` — About + showcase · `medstar-hospitals.webp` — leadership.
* **Recommended Exercises** — drop real photos into `public/images/exercises/` named `walking`, `cycling`, `stretching`, `strength`
  (`.jpg/.webp/.png`, ~4:3, 1200×900+). They are picked up automatically; until then the cards use built-in vector scenes.
* Share image: `public/og-image.jpg` (1200×630).

## Before launch checklist

* [ ] Replace the placeholder phone `+91 98765 43210`, hours and map link in `lib/site.ts`.
* [ ] Confirm degrees, years, fellowships and statistics with the doctor (they come from the design mock-up).
* [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain; add real social profile URLs (and `sameAs` in `components/JsonLd.tsx`).
* [ ] Paste a YouTube/Vimeo **embed** URL into `introVideoEmbedUrl` to enable the "Watch Introduction" video.
* [ ] Submit `/sitemap.xml` to Google Search Console; add the verification token in `app/layout.tsx` metadata if needed.

## Notes

* Content is server-rendered; animation only enhances it. If scripts fail, everything is revealed after 10 s; with
  `prefers-reduced-motion` the heart is static and the page uses no scroll animation.
* The 3D heart falls back to an SVG heart when WebGL is unavailable or the device is low-end.
* Exercise advice on the page is general information — the on-page disclaimer should stay.
