import { useState } from 'react';
import CartItem from './CartItem';

export default () => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * parseInt(item.price),
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} onRemove={handleRemove} />
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-semibold">Total: ₹{total}</p>
            <button className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
