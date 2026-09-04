import FollowUs from './FollowUs';
import ContactInfo from './ContactInfo';
import QuickLink from './QuickLink';
import { business } from '../../data/business';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-cream">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl mb-4">{business.name}</h3>
            <p className="text-sm text-cream/75 leading-relaxed">
              Bringing the finest Indian teas directly from gardens to your cup.
            </p>
          </div>
          <QuickLink />
          <ContactInfo />
          <FollowUs />
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
          {/* TODO(vikas): add GST / FSSAI numbers in data/business.ts (verify the requirement
              for this business type). They appear here automatically once set. */}
          {(business.registrations.gst || business.registrations.fssai) && (
            <p className="text-amber-100 mb-2">
              {business.registrations.gst && <>GST: {business.registrations.gst}</>}
              {business.registrations.gst && business.registrations.fssai && ' · '}
              {business.registrations.fssai && <>FSSAI: {business.registrations.fssai}</>}
            </p>
          )}
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
