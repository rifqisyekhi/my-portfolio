import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import useSectionNav from "../hooks/useSectionNav";
import { profile } from "../data/profile";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const goToSection = useSectionNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    setIsMobileMenuOpen(false);
    goToSection(e, targetId);
  };

  const links = navLinks.map((link) => (
    <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)}>
      {link.label}
    </a>
  ));

  const resumeButton = (
    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-lang neo-box btn-resume-nav"
    >
      Resume
    </a>
  );

  return (
    <nav className="navbar-container">
      <div className="logo-custom">
        <span className="logo-text-plain">RIFQI</span>
        <span className="logo-text-box">SYEKHI</span>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      <div className="navbar-right desktop-nav">
        <div className="nav-links-clean">{links}</div>
        {resumeButton}
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button
        type="button"
        className="mobile-menu-btn neo-box"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu neo-box">
          {links}
          {resumeButton}
        </div>
      )}
    </nav>
  );
}
