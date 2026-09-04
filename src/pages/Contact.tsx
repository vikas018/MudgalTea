import { business, telLink, mailLink, addressLine } from '../data/business';

const Contact = () => {
  return (
    <section className="py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-amber-900 mb-6">Visit Us</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="font-semibold text-amber-900 mb-1">Address</h2>
            <p>{addressLine()}</p>
          </div>

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

          <div>
            <h2 className="font-semibold text-amber-900 mb-1">Opening hours</h2>
            {/* TODO(vikas): real opening hours (per day). Needed here and for schema markup. */}
            <p className="italic text-gray-500">Opening hours coming soon.</p>
          </div>

          {/* TODO(vikas): Phase 2 — embedded Google Map, "Get Directions" link,
              and the enquiry form (name / phone / tea / quantity / message). */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
