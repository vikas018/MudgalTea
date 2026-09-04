import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../data/types';

const SectionTitle = () => (
  <>
    <h2 className="text-3xl font-serif text-center text-amber-900 mb-4">
      What Our Customers Say
    </h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Don't just take our word for it - hear from our satisfied customers about their
      experience with Mudgal Tea.
    </p>
  </>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="mb-4">
      <h3 className="font-semibold text-amber-900">{testimonial.name}</h3>
      <p className="text-sm text-gray-600">{testimonial.location}</p>
    </div>
    <div className="flex mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" aria-hidden="true" />
      ))}
    </div>
    <p className="text-gray-600 italic">"{testimonial.text}"</p>
  </div>
);

const Testimonials = () => {
  // Renders nothing until real quotes exist (see src/data/testimonials.ts).
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
