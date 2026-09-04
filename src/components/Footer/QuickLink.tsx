import { Link } from 'react-router-dom';

// Blog intentionally omitted — see brief 1.1. Add it back only when posts exist.
const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const QuickLink = () => (
  <div>
    <h4 className="font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className="hover:text-amber-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 rounded"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLink;
