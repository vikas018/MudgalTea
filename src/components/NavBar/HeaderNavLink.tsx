import { Link } from 'react-router-dom';

export default ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const linkStyle = `${isMenuOpen ? 'block' : ''} hover:text-amber-200 px-3 py-2`;

  return (
    <div className={isMenuOpen ? "md:hidden" : "hidden md:block"}>
      <div className={isMenuOpen ? "px-2 pt-2 pb-3 space-y-1 sm:px-3" : "ml-10 flex items-center space-x-4"}>
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/shop" className={linkStyle}>Shop</Link>
        <Link to="/about" className={linkStyle}>About</Link>
        <Link to="/blog" className={linkStyle}>Blog</Link>
        <Link to="/contact" className={linkStyle}>Contact</Link>
        {/* cart will enable later */}
        {/* {!isMenuOpen && <Link to="/cart" className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">0</span>
        </Link>} */}
      </div>
    </div>
  );
};
