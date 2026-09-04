import { useState } from 'react';
import { Phone } from 'lucide-react';
import Title from './Title';
import HeaderNavLink from './HeaderNavLink';
import HamburgerMenu from './HamburgerMenu';
import { telLink, business } from '../../data/business';
import { trackEvent } from '../../lib/analytics';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-amber-900/95 backdrop-blur text-cream shadow-sm">
      <nav className="container-page" aria-label="Main">
        <div className="flex items-center justify-between h-16">
          <Title />
          {!isMenuOpen && <HeaderNavLink isMenuOpen={isMenuOpen} onNavigate={closeMenu} />}
          <div className="flex items-center md:hidden">
            <a
              href={telLink()}
              onClick={() => trackEvent('Call', { location: 'header' })}
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
