import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Title = () => (<>
  <h2 className="text-3xl font-serif text-center text-amber-900 mb-4">
    What Our Customers Say
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
    Don't just take our word for it - hear from our satisfied customers about their
    experience with Mudgal Tea.
  </p>
</>);

const Testimonial = ({ name, image, location, rating, text }: any) => (
  <div key={name} className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h3 className="font-semibold text-amber-900">{name}</h3>
        <p className="text-sm text-gray-600">{location}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600 italic">"{text}"</p>
  </div>
)

export default () => (
  <section className="py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => <Testimonial key={testimonial.id} { ...testimonial } /> )}
      </div>
    </div>
  </section>
);