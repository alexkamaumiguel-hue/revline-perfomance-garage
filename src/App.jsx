import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/features';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import CTA from './components/sections/CTA';
import Products from './components/sections/Products';
import Footer from './components/layout/Footer';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;