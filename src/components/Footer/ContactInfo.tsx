import { business, telLink, mailLink } from '../../data/business';

const ContactInfo = () => (
  <div>
    <h4 className="font-semibold mb-4">Contact Info</h4>
    <ul className="space-y-2 text-sm">
      <li>{business.address.line1}</li>
      <li>
        {business.address.city}, {business.address.country} {business.address.postalCode}
      </li>
      <li>
        Phone:{' '}
        <a href={telLink()} className="hover:text-amber-100">
          {business.phoneDisplay}
        </a>
      </li>
      <li>
        Email:{' '}
        <a href={mailLink()} className="hover:text-amber-100">
          {business.email}
        </a>
      </li>
    </ul>
  </div>
);

export default ContactInfo;
