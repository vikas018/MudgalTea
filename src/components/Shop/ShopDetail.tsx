import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../data/featuredProductdata';

const ShopDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center mt-10 text-xl text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to Shop</Link>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 flex-1">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">Price: ₹{product.price}</p>

          <div className="mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              className="border rounded px-3 py-1 w-24"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
