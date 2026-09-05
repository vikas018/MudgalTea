# Mudgal Tea

Marketing and ordering website for **Mudgal Tea**, a tea & coffee shop in Meerut
(Shop 07, Subhash Market, Meerut 250001). The site's job is to get people to visit the
shop, call, or order on WhatsApp.

🔗 **Live:** https://vikas018.github.io/MudgalTea/

## Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (build/dev)
- **Tailwind CSS 3** (warm-editorial theme; amber/brown + Playfair Display / Inter)
- **react-router-dom 6** (BrowserRouter)
- **lucide-react** (icons)
- Deployed to **GitHub Pages** via the `gh-pages` branch

## Features

- Home, Shop, Product detail, About, Contact, and a 404 page
- **WhatsApp ordering** — order buttons per product/variant, a floating chat button, and
  click-to-call on mobile
- **Enquiry form** on Contact (Formspree) with validation, spam honeypot, and a WhatsApp fallback
- **Visit Us** block with a lazy-loaded Google Map, directions, and opening hours
- **SEO**: per-route meta/Open Graph tags, LocalBusiness + Product JSON-LD, `robots.txt`,
  `sitemap.xml`
- **Privacy-light analytics** (Plausible) that tracks WhatsApp and Call clicks — off unless configured
- Optimised images and accessible, keyboard-navigable UI

## Getting started

```bash
npm install
npm run dev        # start the dev server (http://localhost:5173)
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch (updates the live site) |

## Environment variables

Copy `.env.example` to `.env` and fill in as needed. All are optional — the site works
without them (the enquiry form falls back to WhatsApp; analytics stays off).

| Variable | Purpose |
|---|---|
| `VITE_FORM_ENDPOINT` | Formspree form endpoint URL for the enquiry form |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible domain to enable analytics (e.g. `vikas018.github.io`) |
| `VITE_PLAUSIBLE_SRC` | Optional override for the Plausible script URL (self-hosted / proxy) |

## Deployment

The live site is served from the **`gh-pages`** branch. To publish the latest changes:

```bash
npm run deploy
```

Pushing to `main` updates the source only — it does **not** publish. Only `npm run deploy`
updates the live site.

### Routing note (GitHub Pages)

The app uses `BrowserRouter` with clean URLs (no `#`). Since GitHub Pages has no server-side
routing, `public/404.html` implements the standard SPA fallback: it rewrites unknown paths
into a query string that `index.html` decodes back before the router boots. This makes hard
refreshes and shared deep links (e.g. `/MudgalTea/shop`) work. If the site moves to a custom
domain, prerendering (e.g. `vite-react-ssg`) is the cleaner long-term replacement.

## Configuration / single sources of truth

- `src/data/business.ts` — name, phone, email, address, socials, opening hours, WhatsApp & map helpers
- `src/data/featuredProductdata.ts` — products, variants (weight/price), pricing/label helpers
- `src/data/site.ts` — canonical site URL, base path, default SEO metadata
- `src/data/testimonials.ts` — customer testimonials (empty until real quotes are added)

## Outstanding content (`TODO(vikas:)`)

Search the codebase for `TODO(vikas)` for the full list. Highlights:

- Confirm phone/email; add real product photos and pack details
- Fill in opening hours and set `openingHoursConfirmed = true` in `business.ts`
- Add per-tea brewing guides and pack contents
- Add GST / FSSAI numbers (verify the requirement first)
- Provide three real customer testimonials and 400×400 team photos
- Set the Formspree endpoint and (optionally) the Plausible domain
