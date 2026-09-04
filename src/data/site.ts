// Canonical site config for SEO. Single source for absolute URLs and default metadata.
// TODO(vikas): update siteUrl if you move to a custom domain (e.g. https://mudgaltea.in).
export const siteUrl = 'https://vikas018.github.io/MudgalTea';

// Router base path (GitHub Pages project site). Keep in sync with vite.config base
// and BrowserRouter basename.
export const basePath = '/MudgalTea/';

export const defaultTitle = 'Mudgal Tea — Premium Loose-Leaf Tea Shop in Meerut';
export const defaultDescription =
  'Mudgal Tea is a tea & coffee shop in Meerut offering premium loose-leaf Indian teas — Darjeeling, masala chai and green tea. Order on WhatsApp or visit us at Subhash Market.';

// Default share image: a 1200x630 crop of the hero (real raster JPG, previews on WhatsApp).
// TODO(vikas): optionally replace with a branded 1200x630 image (logo + name) in public/.
export const ogImage =
  'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1200&h=630&q=70';

// Absolute canonical URL for a route path (e.g. "/shop" -> siteUrl + "/shop").
export const canonicalFor = (path: string): string =>
  path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;

// Static routes, used to generate the sitemap. Product routes are appended from data.
export const staticRoutes = ['/', '/shop', '/about', '/contact'];
