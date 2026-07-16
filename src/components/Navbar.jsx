import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menggunakan icon untuk Hamburger Menu

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Menutup menu mobile otomatis saat link diklik

    if (location.pathname === "/") {
      // Jika sedang di halaman utama, langsung scroll
      const section = document.getElementById(targetId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Jika di halaman detail, pulang dulu baru scroll
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  };

  return (
    <nav className="navbar-container">
      <style>{`
        .btn-resume-nav {
          text-decoration: none; 
          color: #ffffff; 
          display: inline-block; 
          text-align: center;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        
        .btn-resume-nav:hover {
          background-color: #ff6b6b !important;
          color: #ffffff !important;
        }
      `}</style>

      <div className="logo-custom">
        <span className="logo-text-plain">RIFQI</span>
        <span className="logo-text-box">SYEKHI</span>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      <div className="navbar-right desktop-nav">
        <div className="nav-links-clean">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          <a href="#certificates" onClick={(e) => handleNavClick(e, "certificates")}>Certificates</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
        </div>

        <a
          href="https://drive.google.com/file/d/1XSZQ8uTUZd-ID4qDsUvAY81ElYRjqm4R/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lang neo-box btn-resume-nav"
        >
          Resume
        </a>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="mobile-menu-btn neo-box"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation"
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu neo-box">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, "skills")}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          <a href="#certificates" onClick={(e) => handleNavClick(e, "certificates")}>Certificates</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>Contact</a>
          
          <a
            href="https://drive.google.com/file/d/1XSZQ8uTUZd-ID4qDsUvAY81ElYRjqm4R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lang neo-box btn-resume-nav"
            style={{ marginTop: "10px" }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}