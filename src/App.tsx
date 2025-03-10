import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import IntroSection from './components/Body/IntroSection';
// import FeaturedProducts from './components/FeaturedProducts';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <IntroSection />
                {/* <FeaturedProducts />
                <Team />
                <Testimonials /> */}
              </>
            } />
            {/* Other routes will be added later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;