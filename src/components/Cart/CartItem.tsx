export default function CartItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">₹{item.price} × {item.quantity}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="font-semibold">₹{item.quantity * parseInt(item.price)}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
