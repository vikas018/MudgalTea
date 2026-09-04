import { useState } from 'react';
import { Phone } from 'lucide-react';
import Title from './Title';
import HeaderNavLink from './HeaderNavLink';
import HamburgerMenu from './HamburgerMenu';
import { telLink, business } from '../../data/business';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-amber-900 text-amber-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-16">
          <Title />
          {!isMenuOpen && <HeaderNavLink isMenuOpen={isMenuOpen} onNavigate={closeMenu} />}
          <div className="flex items-center md:hidden">
            <a
              href={telLink()}
              aria-label={`Call ${business.name}`}
              className="p-2 rounded hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
            </a>
            <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
        {isMenuOpen && <HeaderNavLink isMenuOpen={isMenuOpen} onNavigate={closeMenu} />}
      </nav>
    </header>
  );
};

export default Navbar;
