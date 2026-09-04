import { Instagram, Mail, Phone } from 'lucide-react';
import { business, telLink, mailLink } from '../../data/business';
import { trackEvent } from '../../lib/analytics';

// "Get in touch" — phone and email aren't social links, so this block groups
// contact actions plus any real social handles from business.socials.
const FollowUs = () => (
  <div>
    <h4 className="font-semibold mb-4">Get in touch</h4>
    <div className="flex space-x-4">
      <a
        href={telLink()}
        onClick={() => trackEvent('Call', { location: 'footer' })}
        className="hover:text-amber-100 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
        aria-label={`Call ${business.name}`}
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={mailLink()}
        className="hover:text-amber-100 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
        aria-label={`Email ${business.name}`}
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
      </a>
      {business.socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-amber-100 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          aria-label={`${business.name} on ${social.label}`}
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
        </a>
      ))}
    </div>
  </div>
);

export default FollowUs;
