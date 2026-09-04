import type { Product, ProductVariant } from './types';

// Image URLs carry explicit sizing so the CDN returns right-sized WebP:
//   cards w=800, detail w=1200 (the detail page requests its own size).
// TODO(vikas): confirm the weight/price variants below — placeholders where noted.
// TODO(vikas): add per-product `brewing` ({ waterTempC, gramsPerCup, steepMinutes })
//   and `packContents` (what's actually in the pack). Left off deliberately rather than
//   guessed; the detail page shows "coming soon" until they're filled in.

export const products: Product[] = [
  {
    id: 1,
    name: 'Darjeeling First Flush',
    description: 'Delicate and floral — the first spring harvest from Darjeeling.',
    image:
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=70&fm=webp',
    // TODO(vikas): exact weight/price pairs for the "120 to 400" range (pack sizes?).
    variants: [
      { weightGrams: 100, priceInr: 120 },
      { weightGrams: 500, priceInr: 400 },
    ],
  },
  {
    id: 2,
    name: 'Special Masala',
    description: 'A secret blend of whole spices that lifts every cup.',
    image:
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=70&fm=webp',
    // TODO(vikas): what weight is the ₹80 pack?
    variants: [{ weightGrams: 100, priceInr: 80 }],
  },
  {
    id: 3,
    name: 'Green Tea',
    description: 'Whole-leaf green tea, light and clean, for an everyday brew.',
    image:
      'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=70&fm=webp',
    // TODO(vikas): what weight is the ₹80 pack?
    variants: [{ weightGrams: 100, priceInr: 80 }],
  },
];

export const findProduct = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const cheapestVariant = (product: Product): ProductVariant =>
  product.variants.reduce((a, b) => (b.priceInr < a.priceInr ? b : a));

// "₹80 · 100 g" for the cheapest variant, used on cards.
export const fromPriceLabel = (product: Product): string => {
  const cheapest = cheapestVariant(product);
  return `₹${cheapest.priceInr} · ${cheapest.weightGrams} g`;
};

export const variantLabel = (v: { priceInr: number; weightGrams: number }): string =>
  `₹${v.priceInr} · ${v.weightGrams} g`;

// Cards store the w=800 URL; the detail page wants a larger w=1200 render.
export const detailImage = (product: Product): string =>
  product.image.replace('w=800', 'w=1200');
