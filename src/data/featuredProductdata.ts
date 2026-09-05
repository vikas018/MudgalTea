import type { Product, ProductVariant } from './types';

// Image URLs carry explicit sizing so the CDN returns right-sized WebP:
//   cards w=800, detail w=1200 (the detail page requests its own size).
// TODO(vikas): replace these stock photos with real photos of each product's pack.
// TODO(vikas): add per-product `brewing` ({ waterTempC, gramsPerCup, steepMinutes })
//   and `packContents` (what's actually in the pack). Left off deliberately rather than
//   guessed; the detail page shows "coming soon" until they're filled in.

export const products: Product[] = [
  {
    id: 1,
    name: 'Kailash BP',
    description:
      'A bold, full-bodied broken-leaf black tea — brisk and strong, made for a proper cup with milk.',
    image:
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [
      { weightGrams: 500, priceInr: 180 },
      { weightGrams: 1000, priceInr: 360 },
    ],
  },
  {
    id: 2,
    name: 'Hotel Blend',
    description:
      'Our strong everyday blend — the kadak, deep-coloured chai poured at tea stalls and hotels.',
    image:
      'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [
      { weightGrams: 500, priceInr: 180 },
      { weightGrams: 1000, priceInr: 360 },
    ],
  },
  {
    id: 3,
    name: 'Green Tea',
    description: 'Whole-leaf green tea, light and clean, for an everyday brew.',
    image:
      'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [{ weightGrams: 100, priceInr: 200 }],
  },
  {
    id: 4,
    name: 'Tea Masala',
    description:
      'A fragrant blend of whole spices — add a pinch to bring warmth and aroma to your chai.',
    image:
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [{ weightGrams: 25, priceInr: 40 }],
  },
];

export const findProduct = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const cheapestVariant = (product: Product): ProductVariant =>
  product.variants.reduce((a, b) => (b.priceInr < a.priceInr ? b : a));

// "500 g", "1 kg", "25 g" — grams below 1000, kilograms at/above.
export const formatWeight = (grams: number): string =>
  grams >= 1000 ? `${grams / 1000} kg` : `${grams} g`;

// "₹180 · 500 g" for the cheapest variant, used on cards.
export const fromPriceLabel = (product: Product): string => {
  const cheapest = cheapestVariant(product);
  return `₹${cheapest.priceInr} · ${formatWeight(cheapest.weightGrams)}`;
};

export const variantLabel = (v: ProductVariant): string =>
  `₹${v.priceInr} · ${formatWeight(v.weightGrams)}`;

// Cards store the w=800 URL; the detail page wants a larger w=1200 render.
export const detailImage = (product: Product): string =>
  product.image.replace('w=800', 'w=1200');
