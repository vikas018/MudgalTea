import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Assam Gold',
    description: 'Premium black tea with rich malty flavor',
    price: 599,
    image: 'https://images.unsplash.com/photo-1571934811356-5cc819f525dc?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Darjeeling First Flush',
    description: 'Delicate and floral spring harvest tea',
    price: 899,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Nilgiri Blue Mountain',
    description: 'Smooth and aromatic high-grown tea',
    price: 499,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-800">
                    ₹{product.price}
                  </span>
                  <Link
                    to={`/shop/${product.id}`}
                    className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}