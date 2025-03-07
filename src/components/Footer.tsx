import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Mudgal Tea</h3>
            <p className="text-sm text-amber-200">
              Bringing the finest Indian teas directly from gardens to your cup since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-amber-200">Shop</Link></li>
              <li><Link to="/about" className="hover:text-amber-200">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-amber-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-amber-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Shop 07,ś Subhash Market</li>
              <li>Meerut, India 250001</li>
              <li>Phone: +91 97564 17585</li>
              <li>Email: vkyadav018@gmail.com</li>
            </ul>
          </div>
          
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
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 Mudgal Tea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}