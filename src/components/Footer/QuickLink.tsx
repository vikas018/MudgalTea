import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h4 className="font-semibold mb-4">Quick Links</h4>
    <ul className="space-y-2">
      <li><Link to="/shop" className="hover:text-amber-200">Shop</Link></li>
      <li><Link to="/about" className="hover:text-amber-200">About Us</Link></li>
      <li><Link to="/blog" className="hover:text-amber-200">Blog</Link></li>
      <li><Link to="/contact" className="hover:text-amber-200">Contact</Link></li>
    </ul>
  </div>
);