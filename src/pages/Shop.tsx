import { Link } from 'react-router-dom';
import { products, fromPriceLabel } from '../data/featuredProductdata';
import Seo from '../components/Seo';

const Shop = () => {
  return (
    <section className="py-20 md:py-24 bg-cream min-h-[60vh]">
      <Seo
        title="Shop Loose-Leaf Teas — Mudgal Tea, Meerut"
        description="Browse Mudgal Tea's loose-leaf teas: Darjeeling First Flush, Special Masala and Green Tea. Order on WhatsApp or pick up in Meerut."
        path="/shop"
      />
      <div className="container-page">
        <div className="text-center mb-14">
          <span className="eyebrow">The collection</span>
          <h1 className="section-heading mt-3">Our teas</h1>
          <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
            Loose-leaf teas and blends, sourced and packed for freshness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`} className="card block group">
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl text-amber-900 mb-2">{product.name}</h2>
                <p className="text-ink-soft text-sm leading-relaxed mb-4">{product.description}</p>
                <span className="text-lg font-semibold text-amber-800">
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
