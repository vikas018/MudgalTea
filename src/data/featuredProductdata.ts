import type { Product, ProductVariant } from './types';

// Image URLs carry explicit sizing so the CDN returns right-sized WebP:
//   cards w=800, detail w=1200 (the detail page requests its own size).
// TODO(vikas): replace these stock photos with real photos of each product's pack.
// TODO(vikas): the `recipe` blocks below are sensible default methods — review and
//   adjust each to match how you'd actually recommend making it. `packContents` is left
//   off deliberately; add it (what's in the pack) when known.

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
    recipe: {
      serves: '2 cups',
      ingredients: [
        '1½ cups water',
        '½ cup milk',
        '2 tsp Kailash BP',
        'Sugar to taste',
      ],
      steps: [
        'Bring the water to a boil in a saucepan.',
        'Add the Kailash BP and simmer for 2 minutes for a strong, brisk brew.',
        'Pour in the milk and sugar, then bring back to a rolling boil for 2–3 minutes.',
        'Strain hot into cups and serve.',
      ],
      tip: 'For extra kadak, simmer a minute longer before adding the milk.',
    },
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
    recipe: {
      serves: '2 cups',
      ingredients: [
        '1½ cups water',
        '½ cup milk',
        '2 tsp Hotel Blend',
        'Sugar to taste',
        'A pinch of Tea Masala (optional)',
      ],
      steps: [
        'Boil the water, add the Hotel Blend and simmer for 2 minutes.',
        'Add the milk and sugar and boil for 2–3 minutes until deep and creamy.',
        'Strain and serve piping hot.',
      ],
      tip: 'A pinch of Mudgal Tea Masala turns it into a fragrant masala chai.',
    },
  },
  {
    id: 3,
    name: 'Green Tea',
    description: 'Whole-leaf green tea, light and clean, for an everyday brew.',
    image:
      'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [{ weightGrams: 100, priceInr: 200 }],
    recipe: {
      serves: '1 cup',
      ingredients: [
        '1 cup water (about 80°C, just off the boil)',
        '1 tsp Green Tea',
        'Honey or lemon (optional)',
      ],
      steps: [
        'Heat the water to about 80°C — let a boiled kettle rest for a minute.',
        'Pour the water over 1 tsp of green tea leaves.',
        'Steep for 2–3 minutes (longer turns it bitter).',
        'Strain, then add honey or lemon if you like.',
      ],
      tip: 'Avoid fully boiling water — it scorches the leaves and adds bitterness.',
    },
  },
  {
    id: 4,
    name: 'Tea Masala',
    description:
      'A fragrant blend of whole spices — add a pinch to bring warmth and aroma to your chai.',
    image:
      'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=70&fm=webp',
    variants: [{ weightGrams: 25, priceInr: 40 }],
    recipe: {
      serves: 'Flavours 2 cups',
      ingredients: [
        'Your regular chai (water, tea, milk, sugar)',
        'A pinch (about ¼ tsp) of Tea Masala per 2 cups',
      ],
      steps: [
        'Prepare your chai as usual.',
        'Add a pinch of Tea Masala while it simmers.',
        'Boil for one more minute so the spices release, then strain.',
      ],
      tip: 'Start with a small pinch — the blend is concentrated; add more to taste.',
    },
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
