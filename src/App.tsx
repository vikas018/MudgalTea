import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import IntroSection from './components/Body/IntroSection';
import FeaturedProducts from './components/Body/FeaturedProducts';
import Team from './components/Body/Team';
import Testimonials from './components/Body/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;