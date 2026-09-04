import { Menu, X } from 'lucide-react';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => (
  <div className="md:hidden">
    <button
      type="button"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>
);

export default HamburgerMenu;
