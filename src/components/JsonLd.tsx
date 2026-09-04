import { business, openingHours, openingHoursConfirmed } from '../data/business';
import { siteUrl, ogImage, canonicalFor } from '../data/site';
import { detailImage } from '../data/featuredProductdata';
import type { Product } from '../data/types';

// Renders a JSON-LD <script>. React puts it in the DOM; Google reads it after render.
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

const dayName = (day: string) => `https://schema.org/${day}`;

export const LocalBusinessJsonLd = () => {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: business.name,
    image: ogImage,
    url: `${siteUrl}/`,
    telephone: `+${business.phoneDigits}`,
    email: business.email,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.line1,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: 'IN',
    },
    sameAs: business.socials.map((s) => s.href),
    // Opening hours are only emitted once confirmed, to avoid publishing wrong data.
    ...(openingHoursConfirmed
      ? {
          openingHoursSpecification: openingHours.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: dayName(h.day),
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  };
  return <JsonLd data={data} />;
};

export const ProductJsonLd = ({ product }: { product: Product }) => {
  const prices = product.variants.map((v) => v.priceInr);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: detailImage(product),
    brand: { '@type': 'Brand', name: business.name },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: product.variants.length,
      availability: 'https://schema.org/InStock',
      url: canonicalFor(`/shop/${product.id}`),
    },
  };
  return <JsonLd data={data} />;
};

export default JsonLd;
