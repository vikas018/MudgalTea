import { Link } from 'react-router-dom';
import { products, fromPriceLabel, cheapestVariant } from '../../data/featuredProductdata';
import type { Product } from '../../data/types';
import WhatsAppOrderButton from '../WhatsAppOrderButton';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      width={800}
      height={192}
      loading="lazy"
      decoding="async"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-amber-800">{fromPriceLabel(product)}</span>
        <Link
          to={`/shop/${product.id}`}
          className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
        >
          View Details
        </Link>
      </div>
      <WhatsAppOrderButton
        productName={product.name}
        variant={cheapestVariant(product)}
        className="w-full"
      />
    </div>
  </div>
);

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">
          Featured Collections
        </h2>
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
