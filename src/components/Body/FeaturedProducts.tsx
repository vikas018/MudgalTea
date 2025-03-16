import { Link } from 'react-router-dom';
import { products } from '../../data/featuredProductdata';

interface iProduct {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
}

const Product = ({ id, image, name, description, price }: iProduct) => (
  <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-amber-900 mb-2">
        {name}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-amber-800">{price}</span>
        <Link
          to={`/shop/${id}`}
          className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center text-amber-900 mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => <Product key={product.id} {...product} />)}
        </div>
      </div>
    </section>
  );
}