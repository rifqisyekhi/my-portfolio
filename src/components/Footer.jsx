// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Kolom 1: Brand & Moto */}
        <div className="footer-column">
          <div className="logo-dark neo-box-dark bg-yellow">&lt;DEV/&gt;</div>
          <p className="brand-text">Building digital experiences that make a difference.</p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div className="footer-column">
          <div className="footer-title neo-box-dark bg-cyan">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Kolom 3: Connect (Social Media) */}
        <div className="footer-column">
          <div className="footer-title neo-box-dark bg-pink">Connect</div>
          <div className="social-icons">
            {/* GitHub Link */}
            <a href="https://github.com/rifqisyekhi" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn neo-box-dark" aria-label="Github">
                <FaGithub size={22} />
              </button>
            </a>

            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/rifqisyekhi/" target="_blank" rel="noopener noreferrer">
              <button className="icon-btn neo-box-dark" aria-label="Linkedin">
                <FaLinkedin size={22} />
              </button>
            </a>

            {/* Email Link */}
            <a href="mailto:rifqisyekhi@gmail.com">
              <button className="icon-btn neo-box-dark" aria-label="Email">
                <MdOutlineEmail size={24} />
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Bagian Bawah: Garis Pembatas & Copyright */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>© 2026 Syekhi Developer. All rights reserved. Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}