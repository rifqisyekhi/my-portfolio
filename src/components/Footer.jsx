import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import useSectionNav from "../hooks/useSectionNav";
import { profile } from "../data/profile";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const goToSection = useSectionNav();

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
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => goToSection(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <div className="footer-title neo-box-dark bg-pink">Connect</div>
          <div className="social-icons">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn neo-box-dark" aria-label="Github">
              <FaGithub size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn neo-box-dark" aria-label="Linkedin">
              <FaLinkedin size={22} />
            </a>
            <a href={`mailto:${profile.email}`} className="icon-btn neo-box-dark" aria-label="Email">
              <MdOutlineEmail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p>
          © {new Date().getFullYear()} Syekhi Developer. All rights reserved. Built with React.
        </p>
      </div>
    </footer>
  );
}
