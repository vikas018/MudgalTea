import { business } from '../data/business';

const About = () => {
  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-amber-900 mb-6">Our Story</h1>

        <div className="space-y-4 text-gray-700">
          <p>
            {business.name} is a tea and coffee shop in Meerut, bringing the finest Indian
            teas directly from the gardens to your cup.
          </p>
          {/* TODO(vikas): the real story — which gardens the tea comes from, how it's
              selected, how long the shop has been running, what makes it different.
              This is the heart of the "About" page and currently a placeholder. */}
          <p className="italic text-gray-500">
            More about our gardens, sourcing, and the people behind the shop is coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
