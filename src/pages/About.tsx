import { business } from '../data/business';

const About = () => {
  return (
    <section className="py-20 md:py-24 min-h-[60vh] bg-cream">
      <div className="container-page max-w-3xl">
        <span className="eyebrow">Our story</span>
        <h1 className="section-heading mt-3 mb-8">From the gardens to your cup</h1>

        <div className="space-y-8 text-ink-soft leading-relaxed">
          <p>
            {business.name} is a tea and coffee shop in Meerut, bringing the finest Indian
            teas directly from the gardens to your cup.
          </p>

          <div>
            <h2 className="font-serif text-2xl text-amber-900 mb-2">Our gardens</h2>
            {/* TODO(vikas): which gardens/regions the tea comes from (Darjeeling estates,
                Assam gardens, etc.) and any long-standing relationships. */}
            <p className="italic text-gray-500">Details about our tea gardens coming soon.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-amber-900 mb-2">How we select</h2>
            {/* TODO(vikas): how the tea is chosen — tasting, harvest timing, what you look for. */}
            <p className="italic text-gray-500">
              How we taste and select each harvest — coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
