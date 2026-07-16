import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <div className="logo-dark neo-box-dark bg-yellow">&lt;DEV/&gt;</div>
          <p className="brand-text">
            Building digital experiences that make a difference.
          </p>
        </div>

        <div className="footer-column">
          <div className="footer-title neo-box-dark bg-cyan">Quick Links</div>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <div className="footer-title neo-box-dark bg-pink">Connect</div>
          <div className="social-icons">
            <a
              href="https://github.com/rifqisyekhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-btn neo-box-dark" aria-label="Github" style={{ fontFamily: "inherit" }}>
                <FaGithub size={22} />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/rifqisyekhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="icon-btn neo-box-dark" aria-label="Linkedin" style={{ fontFamily: "inherit" }}>
                <FaLinkedin size={22} />
              </button>
            </a>
            <a href="mailto:rifqisyekhi@gmail.com">
              <button className="icon-btn neo-box-dark" aria-label="Email" style={{ fontFamily: "inherit" }}>
                <MdOutlineEmail size={24} />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>
          © 2026 Syekhi Developer. All rights reserved. Built with React.
        </p>
      </div>
    </footer>
  );
}