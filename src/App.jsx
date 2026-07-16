import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Documentation from "./components/Documentation";
import Projects from "./components/Projects";
import DesignProjects from "./components/DesignProjects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

const MainContent = () => {
  return (
    <>
      <div className="bg-hero-section">
        <Hero />
      </div>
      <div className="bg-white-section">
        <About />
      </div>
      <div className="bg-skills-section">
        <Skills />
      </div>
      <div className="bg-yellow-solid-section">
        <Documentation />
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
    </>
  );
};

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>

      <div className="bg-footer-section">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
