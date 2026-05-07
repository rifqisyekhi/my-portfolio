// src/components/Projects.jsx
import { useRef } from "react";
import siskaCover from "../assets/SiskaCover.png";
import bpljCover from "../assets/BPLJCover.png";
import roblox1Cover from "../assets/Roblox1cover.png";
import roblox2Cover from "../assets/Roblox2cover.png";
import gamewitcherCover from "../assets/GameWitcher.png";
import mediaCover from "../assets/MediaCover.png";

export default function Projects() {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];
      
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30;
        
        // LOGIKA BARU: Cek apakah user buka di HP (lebar layar <= 768px)?
        const isMobile = window.innerWidth <= 768;
        
        // Kalau di HP, geser 1 kartu. Kalau di Laptop, geser 3 kartu.
        const scrollAmount = isMobile ? (cardWidth + gap) : (cardWidth + gap) * 3;
        
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="projects-container" id="projects">
      <div className="projects-header-area">
        <div className="section-title-cyan neo-box">Featured Projects</div>
        <div className="carousel-controls">
          <button onClick={() => scroll("left")} className="neo-box arrow-btn">
            ←
          </button>
          <button onClick={() => scroll("right")} className="neo-box arrow-btn">
            →
          </button>
        </div>
      </div>

      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {/* Proyek 1 */}
        <div className="project-card neo-box">
          <img src={siskaCover} alt="SisKA Bot" className="project-image" />
          <div className="project-header bg-cyan"> {/* Ganti class cyan menjadi bg-cyan */}
            <h3>Chatbot WhatsApp</h3>
          </div>
          <div className="project-body">
            <p>
              AI-powered WhatsApp Bot for Biro Keuangan and BMN. Automates
              overtime requests, leave applications, and PDF reporting workflows
              in real-time.
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">React</span>
              <span className="neo-box tech-tag">Node.js</span>
              <span className="neo-box tech-tag">HTML/CSS</span>
              <span className="neo-box tech-tag">MongoDB</span>
              <span className="neo-box tech-tag">Ollama</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <button className="btn-live neo-box">↗ Live</button>
            </div>
          </div>
        </div>

        {/* Proyek 2 */}
        <div className="project-card neo-box">
          <img src={bpljCover} alt="BPLJ" className="project-image" />
          <div className="project-header bg-pink"> {/* Ganti class pink menjadi bg-pink */}
            <h3>Meeting Schedule App</h3>
          </div>
          <div className="project-body">
            <p>
              Developed and implemented a meeting scheduling and testing service
              information system
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">React</span>
              <span className="neo-box tech-tag">Node.js</span>
              <span className="neo-box tech-tag">HTML/CSS</span>
              <span className="neo-box tech-tag">PHP</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <button className="btn-live neo-box">↗ Live</button>
            </div>
          </div>
        </div>

        {/* Proyek 3 */}
        <div className="project-card neo-box">
          <img
            src={roblox1Cover}
            alt="Ekspedisi 1001 Curug"
            className="project-image"
            style={{ objectPosition: "15% center" }}
          />
          <div className="project-header bg-yellow"> {/* Ganti class yellow menjadi bg-yellow */}
            <h3>Expedition 1001 Curug</h3>
          </div>
          <div className="project-body">
            <p>
              Game development project created using Roblox Studio and the Lua
              programming language
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">Luau</span>
              <span className="neo-box tech-tag">Roblox Studio</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <button className="btn-live neo-box">↗ Live</button>
            </div>
          </div>
        </div>

        {/* Proyek 4 */}
        <div className="project-card neo-box">
          <img src={roblox2Cover} alt="Game Farmer" className="project-image" />
          <div className="project-header bg-green"> {/* Hapus inline style, gunakan class bg-green */}
            <h3>Game Farmer</h3>
          </div>
          <div className="project-body">
            <p>
              A cozy farming simulator that invites players to escape the hustle
              and bustle of city life to start anew in a peaceful village.
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">Luau</span>
              <span className="neo-box tech-tag">Roblox Studio</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <button className="btn-live neo-box">↗ Live</button>
            </div>
          </div>
        </div>

        {/* Proyek 5 */}
        <div className="project-card neo-box">
          <img
            src={gamewitcherCover}
            alt="Game Witcher"
            className="project-image"
          />
          <div className="project-header bg-purple"> {/* Hapus inline style, gunakan class bg-purple */}
            <h3>Game Witcher Haunted Flight</h3>
          </div>
          <div className="project-body">
            <p>
              This game was developed using Unity Engine with the C# programming
              language. It features a player character, The Witcher, who must
              avoid approaching ghosts in a dynamic environment.
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">C#</span>
              <span className="neo-box tech-tag">Unity Engine</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <a
                href="https://rifqisyekhi.itch.io/witcher-haunted-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live neo-box"
                style={{ textDecoration: "none" }}
              >
                ↗ Live
              </a>
            </div>
          </div>
        </div>

        {/* Proyek 6 */}
        <div className="project-card neo-box">
          <img src={mediaCover} alt="Media Processor" className="project-image" />
          <div className="project-header bg-blue"> {/* Hapus inline style, gunakan class bg-blue */}
            <h3>Media Processor</h3>
          </div>
          <div className="project-body">
            <p>
              This web application provides various features for media processing, including images, audio, and video.
            </p>
            <div className="project-tech">
              <span className="neo-box tech-tag">Python</span>
              <span className="neo-box tech-tag">Lossy Algorithm</span>
            </div>
            <div className="project-actions">
              <button className="btn-code neo-box">🐙 Code</button>
              <button className="btn-live neo-box">↗ Live</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}