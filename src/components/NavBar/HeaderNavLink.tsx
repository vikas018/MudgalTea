import { NavLink } from 'react-router-dom';

interface HeaderNavLinkProps {
  isMenuOpen: boolean;
  onNavigate: () => void;
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const HeaderNavLink = ({ isMenuOpen, onNavigate }: HeaderNavLinkProps) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      isMenuOpen ? 'block' : '',
      'px-3 py-2 rounded hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200',
      isActive ? 'text-amber-200 font-semibold' : '',
    ]
      .filter(Boolean)
      .join(' ');

  return (
    <div className={isMenuOpen ? 'md:hidden' : 'hidden md:block'}>
      <div
        className={
          isMenuOpen
            ? 'px-2 pt-2 pb-3 space-y-1 sm:px-3'
            : 'ml-10 flex items-center space-x-4'
        }
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={linkClass}
            onClick={onNavigate}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavLink;
