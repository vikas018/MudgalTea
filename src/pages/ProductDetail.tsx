import { Link, useParams } from 'react-router-dom';
import { findProduct, detailImage, variantLabel } from '../data/featuredProductdata';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? findProduct(Number(id)) : undefined;

  if (!product) {
    return (
      <section className="py-24 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif text-amber-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-8">
            We couldn't find that tea. It may have moved or sold out.
          </p>
          <Link
            to="/shop"
            className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="text-amber-800 hover:text-amber-600 text-sm">
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <img
            src={detailImage(product)}
            alt={product.name}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg shadow-lg object-cover"
          />

          <div>
            <h1 className="text-3xl font-serif text-amber-900 mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wide mb-3">
              Pack sizes
            </h2>
            <ul className="space-y-2 mb-8">
              {product.variants.map((v) => (
                <li
                  key={v.weightGrams}
                  className="flex items-center justify-between border-b border-amber-100 pb-2"
                >
                  <span className="text-gray-700">{v.weightGrams} g</span>
                  <span className="font-bold text-amber-800">₹{v.priceInr}</span>
                </li>
              ))}
            </ul>

            {/* TODO(vikas): brewing guide (water temp, quantity, steep time),
                garden / sourcing story, and what's in the pack — these come in Phase 2.4. */}
            <p className="text-sm text-gray-500 italic">
              Brewing guide and sourcing details coming soon.
            </p>

            <p className="mt-6 text-xs text-gray-400">
              Example price: {variantLabel(product.variants[0])}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
