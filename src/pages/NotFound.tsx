import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-28 min-h-[60vh] bg-cream flex items-center">
      <div className="container-page max-w-2xl text-center">
        <p className="font-serif text-7xl text-amber-800 mb-2">404</p>
        <h1 className="font-serif text-2xl text-amber-900 mb-4">Page not found</h1>
        <p className="text-ink-soft mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
