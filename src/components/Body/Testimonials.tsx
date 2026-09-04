import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../data/types';

const SectionTitle = () => (
  <div className="text-center mb-14">
    <span className="eyebrow">Kind words</span>
    <h2 className="section-heading mt-3">What our customers say</h2>
    <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
      Don't just take our word for it — hear from our customers about their experience with
      Mudgal Tea.
    </p>
  </div>
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <figure className="card p-7">
    <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
      {Array.from({ length: testimonial.rating }).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" aria-hidden="true" />
      ))}
    </div>
    <blockquote className="text-ink-soft leading-relaxed mb-5">"{testimonial.text}"</blockquote>
    <figcaption>
      <span className="block font-serif text-amber-900">{testimonial.name}</span>
      <span className="block text-sm text-ink-soft">{testimonial.location}</span>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  // Renders nothing until real quotes exist (see src/data/testimonials.ts).
  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-page">
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
