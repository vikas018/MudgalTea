import { business, telLink, mailLink } from '../data/business';
import EnquiryForm from '../components/EnquiryForm';
import VisitUs from '../components/VisitUs';
import Seo from '../components/Seo';

const Contact = () => {
  return (
    <>
      <Seo
        title="Contact & Visit — Mudgal Tea, Meerut"
        description="Call, WhatsApp, or visit Mudgal Tea at Shop 07, Subhash Market, Meerut. Send an enquiry or get directions."
        path="/contact"
      />
      <section className="py-20 md:py-24 bg-cream">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Say hello</span>
          <h1 className="section-heading mt-3 mb-8">Get in touch</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-ink-soft">
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

          <h2 className="font-serif text-2xl text-amber-900 mb-4">Send an enquiry</h2>
          <EnquiryForm />

          {/* TODO(vikas): confirm delivery/shipping policy — do you ship, where, and at what
              cost, or is it shop pickup and local delivery only? State it clearly here. */}
          <p className="text-sm text-ink-soft italic mt-8">
            Shop pickup and local delivery in Meerut. Shipping details coming soon.
          </p>
        </div>
      </section>

      <VisitUs />
    </>
  );
};

export default Contact;
