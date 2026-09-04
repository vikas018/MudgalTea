import { Link } from 'react-router-dom';
import { products, fromPriceLabel } from '../data/featuredProductdata';

const Shop = () => {
  return (
    <section className="py-16 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-center text-amber-900 mb-4">Our Teas</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Loose-leaf teas and blends, sourced and packed for freshness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
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
                <h2 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-lg font-bold text-amber-800">
                  {fromPriceLabel(product)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
