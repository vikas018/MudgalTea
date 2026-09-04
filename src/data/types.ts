// Shared domain types.

export interface ProductVariant {
  weightGrams: number;
  priceInr: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}
