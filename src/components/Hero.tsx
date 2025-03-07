import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[80vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover the Finest Indian Teas
          </h1>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Experience the rich heritage and exquisite flavors of premium teas sourced from India's most renowned tea gardens.
          </p>
          <div className="space-x-4">
            <Link
              to="/shop"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-900 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}