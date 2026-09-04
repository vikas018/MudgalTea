import { Link, useParams } from 'react-router-dom';
import { findProduct, detailImage } from '../data/featuredProductdata';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';

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
            <ul className="space-y-3 mb-8">
              {product.variants.map((v) => (
                <li
                  key={v.weightGrams}
                  className="flex items-center justify-between gap-4 border-b border-amber-100 pb-3"
                >
                  <span className="text-gray-700">
                    {v.weightGrams} g · <span className="font-bold text-amber-800">₹{v.priceInr}</span>
                  </span>
                  <WhatsAppOrderButton productName={product.name} variant={v} />
                </li>
              ))}
            </ul>

            {product.brewing ? (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wide mb-2">
                  How to brew
                </h2>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Water: {product.brewing.waterTempC}°C</li>
                  <li>Tea: {product.brewing.gramsPerCup} g per cup</li>
                  <li>Steep: {product.brewing.steepMinutes} min</li>
                </ul>
              </div>
            ) : (
              // TODO(vikas): add per-tea brewing guide (water temp, grams/cup, steep time)
              // in src/data/featuredProductdata.ts to replace this line.
              <p className="text-sm text-gray-500 italic mb-6">Brewing guide coming soon.</p>
            )}

            {product.packContents ? (
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-amber-900">In the pack: </span>
                {product.packContents}
              </p>
            ) : (
              // TODO(vikas): describe what's in the pack (loose leaf, whole spices, etc.).
              <p className="text-sm text-gray-500 italic">Pack details coming soon.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
