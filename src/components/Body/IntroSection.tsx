import { Link } from 'react-router-dom';
import { HERO_IMAGE_URL } from '../../data/images';

const IntroSection = () => {
  return (
    <div className="relative h-[80vh]">
      {/* Real <img> (not a CSS background) so the browser can prioritise it.
          Keep the src identical to the preload in index.html to avoid a double download. */}
      <img
        src={HERO_IMAGE_URL}
        alt="Freshly brewed Indian tea"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true"></div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Discover the Finest Indian Teas
          </h1>
          <p className="text-xl text-amber-50 mb-8 max-w-2xl mx-auto">
            Experience the rich heritage and exquisite flavors of premium teas sourced from
            India's most renowned tea gardens.
          </p>
          <div className="space-x-4">
            <Link
              to="/shop"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-900 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
