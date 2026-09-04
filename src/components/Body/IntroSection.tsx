import { Link } from 'react-router-dom';
import { HERO_IMAGE_URL } from '../../data/images';

const IntroSection = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center">
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
      {/* Warm gradient scrim — darker at the left where the text sits. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/20"
        aria-hidden="true"
      ></div>

      <div className="container-page relative w-full">
        <div className="max-w-2xl">
          <span className="eyebrow text-amber-200">Meerut · since the gardens</span>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05] text-cream tracking-tight">
            Discover the finest Indian teas
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-xl">
            The rich heritage and exquisite flavours of premium teas, sourced from India's most
            renowned tea gardens and packed fresh in Meerut.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/shop" className="btn-primary">
              Shop the collection
            </Link>
            <Link
              to="/about"
              className="btn-outline border-cream/40 text-cream hover:bg-cream hover:text-amber-900"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
