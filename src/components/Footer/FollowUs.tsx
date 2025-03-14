import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default () => (
  <div>
    <h4 className="font-semibold mb-4">Follow Us</h4>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-amber-200">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="https://www.instagram.com/mudgal_tea_coffee/" className="hover:text-amber-200">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-amber-200">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="#" className="hover:text-amber-200">
        <Mail className="h-5 w-5" />
      </a>
    </div>
  </div>
);