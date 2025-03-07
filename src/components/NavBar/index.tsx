import { useState } from 'react';
import Title from './Title';
import HeaderNavLink from './HeaderNavLink';
import HamburgerMenu from './HamburgerMenu';

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Title />
          {!isMenuOpen && <HeaderNavLink {...{ isMenuOpen }}/>}
          <HamburgerMenu {...{ isMenuOpen, setIsMenuOpen }}/>
        </div>
      </div>
      {isMenuOpen && <HeaderNavLink {...{ isMenuOpen }}/>}
    </nav>
  );
};