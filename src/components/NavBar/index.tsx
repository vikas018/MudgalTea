import { useState } from 'react';
import Title from './Title';
import HeaderNavLink from './HeaderNavLink';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-amber-900 text-amber-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-16">
          <Title />
          {!isMenuOpen && <HeaderNavLink isMenuOpen={isMenuOpen} onNavigate={closeMenu} />}
          <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        {isMenuOpen && <HeaderNavLink isMenuOpen={isMenuOpen} onNavigate={closeMenu} />}
      </nav>
    </header>
  );
};

export default Navbar;
