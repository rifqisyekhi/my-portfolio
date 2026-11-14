import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail, MdSend } from "react-icons/md";
import fotoProfil from "../assets/PhotoSakeh.webp";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero-container" id="home">
      <div className="hero-content">
        <div className="badge neo-box">👋 Hello, I'm</div>
        <h1 className="title-name neo-box">RIFQI SYEKHI</h1>
        <h2 className="title-role neo-box">Programmer</h2>

        <div className="description neo-box">
          <p>
            As a fresh graduate from{" "}
            <strong>UIN Sunan Gunung Djati Bandung</strong>, I am passionate
            about web, software, and game development. I enjoy solving problems
            through clean code while focusing on detail and teamwork.
          </p>
        </div>

        <div className="action-buttons">
          <a href="#contact" className="btn-primary neo-box">
            Get in touch <MdSend size={22} />
          </a>

          {/* Dibungkus agar ketiga ikon turun baris bersamaan */}
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-icon neo-box" aria-label="Github">
              <FaGithub size={26} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon neo-box" aria-label="Linkedin">
              <FaLinkedin size={26} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-icon neo-box" aria-label="Email">
              <MdOutlineEmail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="photo-backdrop"></div>
        <div className="photo-frame neo-box">
          <img src={fotoProfil} alt="Rifqi Syekhi" className="profile-photo" />
        </div>
      </div>
    </section>
  );
}
