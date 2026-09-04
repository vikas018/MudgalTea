import { business } from '../data/business';

const About = () => {
  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-amber-900 mb-6">Our Story</h1>

        <div className="space-y-6 text-gray-700">
          <p>
            {business.name} is a tea and coffee shop in Meerut, bringing the finest Indian
            teas directly from the gardens to your cup.
          </p>

          <div>
            <h2 className="text-xl font-serif text-amber-900 mb-2">Our gardens</h2>
            {/* TODO(vikas): which gardens/regions the tea comes from (Darjeeling estates,
                Assam gardens, etc.) and any long-standing relationships. */}
            <p className="italic text-gray-500">Details about our tea gardens coming soon.</p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-900 mb-2">How we select</h2>
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
