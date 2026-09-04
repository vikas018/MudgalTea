import { business, telLink, mailLink } from '../data/business';
import EnquiryForm from '../components/EnquiryForm';
import VisitUs from '../components/VisitUs';

const Contact = () => {
  return (
    <>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif text-amber-900 mb-6">Get in touch</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-gray-700">
            <div>
              <h2 className="font-semibold text-amber-900 mb-1">Phone</h2>
              <a href={telLink()} className="text-amber-800 hover:text-amber-600">
                {business.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="font-semibold text-amber-900 mb-1">Email</h2>
              <a href={mailLink()} className="text-amber-800 hover:text-amber-600">
                {business.email}
              </a>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-amber-900 mb-4">Send an enquiry</h2>
          <EnquiryForm />

          {/* TODO(vikas): confirm delivery/shipping policy — do you ship, where, and at what
              cost, or is it shop pickup and local delivery only? State it clearly here. */}
          <p className="text-sm text-gray-500 italic mt-8">
            Shop pickup and local delivery in Meerut. Shipping details coming soon.
          </p>
        </div>
      </section>

      <VisitUs />
    </>
  );
};

export default Contact;
