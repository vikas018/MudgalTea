import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import IntroSection from './components/Body/IntroSection';
import FeaturedProducts from './components/Body/FeaturedProducts';
import Team from './components/Body/Team';
import Testimonials from './components/Body/Testimonials';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ShopDetail from './components/Shop/ShopDetail';
import Footer from './components/Footer';
import BetaBanner from './BetaBanner';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <BetaBanner />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <IntroSection />
                <FeaturedProducts />
                <Team />
                <Testimonials />
              </>
            } />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;