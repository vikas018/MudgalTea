import { Link } from 'react-router-dom';
import { products, fromPriceLabel, cheapestVariant } from '../../data/featuredProductdata';
import type { Product } from '../../data/types';
import WhatsAppOrderButton from '../WhatsAppOrderButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <article className="card flex flex-col">
    <Link to={`/shop/${product.id}`} className="block overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        width={800}
        height={224}
        loading="lazy"
        decoding="async"
        className="w-full h-56 object-cover transition duration-500 hover:scale-105"
      />
    </Link>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-serif text-xl text-amber-900 mb-2">{product.name}</h3>
      <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-amber-800">{fromPriceLabel(product)}</span>
        <Link
          to={`/shop/${product.id}`}
          className="text-sm font-medium text-amber-800 hover:text-amber-600"
        >
          View details →
        </Link>
      </div>
      <WhatsAppOrderButton
        productName={product.name}
        variant={cheapestVariant(product)}
        className="w-full"
      />
    </div>
  </article>
);

const FeaturedProducts = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="text-center mb-14">
          <span className="eyebrow">Featured collections</span>
          <h2 className="section-heading mt-3">Our most-loved teas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
