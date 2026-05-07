// src/components/Hero.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdSend } from "react-icons/md";
import fotoProfil from '../assets/PhotoSakeh.jpeg'; 

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <div className="badge neo-box">👋 Hello, I'm</div>
        <h1 className="title-name neo-box">RIFQI SYEKHI</h1>
        <h2 className="title-role neo-box">Programmer</h2>

        <div className="description neo-box">
          <p>
            As a fresh graduate from <strong>UIN Sunan Gunung Djati Bandung</strong>, I am passionate about 
            web, software, and game development. I enjoy solving problems through clean code while focusing 
            on detail and teamwork.
          </p>
        </div>

        <div className="action-buttons">
          {/* Link ke section Contact (Scroll Down) */}
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button className="btn-primary neo-box">
              Get in touch <MdSend size={22} style={{ marginLeft: '8px' }} />
            </button>
          </a>

          {/* GitHub Link */}
          <a href="https://github.com/rifqisyekhi" target="_blank" rel="noopener noreferrer">
            <button className="btn-icon neo-box" aria-label="Github">
              <FaGithub size={26} />
            </button>
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/rifqisyekhi/" target="_blank" rel="noopener noreferrer">
            <button className="btn-icon neo-box" aria-label="Linkedin">
              <FaLinkedin size={26} />
            </button>
          </a>

          {/* Email Link (Direct Mail) */}
          <a href="mailto:rifqisyekhi@gmail.com">
            <button className="btn-icon neo-box" aria-label="Email">
              <MdOutlineEmail size={28} />
            </button>
          </a>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="photo-backdrop bg-kuning"></div>
        <div className="photo-frame neo-box">
          <img src={fotoProfil} alt="Rifqi Syekhi" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}