import { Link, useParams } from 'react-router-dom';
import { findProduct, detailImage, formatWeight } from '../data/featuredProductdata';
import WhatsAppOrderButton from '../components/WhatsAppOrderButton';
import Seo from '../components/Seo';
import { ProductJsonLd } from '../components/JsonLd';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? findProduct(Number(id)) : undefined;

  if (!product) {
    return (
      <section className="py-24 min-h-[60vh] bg-cream">
        <div className="container-page max-w-3xl text-center">
          <h1 className="section-heading mb-4">Product not found</h1>
          <p className="text-ink-soft mb-8">
            We couldn't find that tea. It may have moved or sold out.
          </p>
          <Link to="/shop" className="btn-primary">
            Back to shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 min-h-[60vh] bg-cream">
      <Seo
        title={`${product.name} — Mudgal Tea, Meerut`}
        description={product.description}
        path={`/shop/${product.id}`}
        image={detailImage(product)}
        type="product"
      />
      <ProductJsonLd product={product} />
      <div className="container-page max-w-5xl">
        <Link to="/shop" className="text-amber-800 hover:text-amber-600 text-sm">
          ← Back to shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-6">
          <img
            src={detailImage(product)}
            alt={product.name}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full rounded-2xl shadow-card ring-1 ring-ink/5 object-cover"
          />

          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-3 tracking-tight">
              {product.name}
            </h1>
            <p className="text-ink-soft mb-8 leading-relaxed">{product.description}</p>

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
                    {formatWeight(v.weightGrams)} ·{' '}
                    <span className="font-bold text-amber-800">₹{v.priceInr}</span>
                  </span>
                  <WhatsAppOrderButton productName={product.name} variant={v} />
                </li>
              ))}
            </ul>

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

        {product.recipe && (
          <div className="card p-7 md:p-10 mt-10 md:mt-14">
            <span className="eyebrow">For better taste</span>
            <h2 className="section-heading mt-3 mb-6">
              How to make it{product.recipe.serves ? ` · ${product.recipe.serves}` : ''}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wide mb-3">
                  You'll need
                </h3>
                <ul className="space-y-2 text-ink-soft">
                  {product.recipe.ingredients.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="text-amber-500">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-900 uppercase tracking-wide mb-3">
                  Method
                </h3>
                <ol className="space-y-3 text-ink-soft">
                  {product.recipe.steps.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-amber-900 text-cream text-xs font-semibold">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            {product.recipe.tip && (
              <p className="mt-8 text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <span className="font-semibold">Tip: </span>
                {product.recipe.tip}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
