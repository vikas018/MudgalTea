import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-24 min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-6xl font-serif text-amber-800 mb-4">404</p>
        <h1 className="text-2xl font-serif text-amber-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
