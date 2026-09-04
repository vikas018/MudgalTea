import IntroSection from '../components/Body/IntroSection';
import FeaturedProducts from '../components/Body/FeaturedProducts';
import Team from '../components/Body/Team';
import Testimonials from '../components/Body/Testimonials';
import VisitUs from '../components/VisitUs';
import Seo from '../components/Seo';
import { LocalBusinessJsonLd } from '../components/JsonLd';
import { defaultTitle } from '../data/site';

const Home = () => (
  <>
    <Seo title={defaultTitle} path="/" />
    <LocalBusinessJsonLd />
    <IntroSection />
    <FeaturedProducts />
    <VisitUs />
    <Team />
    <Testimonials />
  </>
);

export default Home;
