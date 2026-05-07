// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignProjects from './components/DesignProjects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      {/* Wadah snap-container sudah dihapus, komponen berjejer bebas */}
      <div className="bg-hero-section">
        <Hero />
      </div>
      
      <div className="bg-white-section">
        <About />
      </div>
      
      <div className="bg-skills-section">
        <Skills />
      </div>
      
      <div className="bg-white-section">
        <Projects />
      </div>

      <div className="bg-hero-section">
        <DesignProjects />
      </div>
      
      <div className="bg-yellow-solid-section">
        <Certificates />
      </div>
      
      <div className="bg-contact-section">
        <Contact />
      </div>
      
      <div className="bg-footer-section">
        <Footer />
      </div>
    </>
  );
}

export default App;