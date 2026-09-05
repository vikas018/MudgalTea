// Shared domain types.

export interface ProductVariant {
  weightGrams: number;
  priceInr: number;
}

export interface BrewingGuide {
  waterTempC: number;
  gramsPerCup: number;
  steepMinutes: number;
}

export interface Recipe {
  serves?: string; // e.g. "2 cups"
  ingredients: string[];
  steps: string[];
  tip?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
  // Optional trust content — rendered on the detail page when present.
  recipe?: Recipe;
  brewing?: BrewingGuide;
  packContents?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}
