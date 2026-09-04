import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll to the top on every route change. Without this, navigating from a
// footer link lands you at the bottom of the next page.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
