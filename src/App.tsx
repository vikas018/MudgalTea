import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
// import Hero from './components/Hero';
// import FeaturedProducts from './components/FeaturedProducts';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                {/* <Hero />
                <FeaturedProducts />
                <Team />
                <Testimonials /> */}
              </>
            } />
            {/* Other routes will be added later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;