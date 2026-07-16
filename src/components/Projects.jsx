import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/projectData";

// --- IMPORTS ICON BARU ---
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { LuCodeXml } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { IoNavigate } from "react-icons/io5";

export default function Projects() {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // State untuk mengontrol Pop-Up Multiple Links di halaman utama
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  const [selectedLiveLinks, setSelectedLiveLinks] = useState([]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];
      if (card) {
        const cardWidth = card.offsetWidth;
        const computedGap = parseInt(window.getComputedStyle(scrollContainerRef.current).gap) || 30;
        const scrollAmount = cardWidth + computedGap;

        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const handleCardClick = (e, projectId) => {
    if (e.button === 0 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();

      setIsTransitioning(true);

      setTimeout(() => {
        navigate(`/project/${projectId}`);
      }, 500);
    }
  };

  return (
    <section className="projects-container" id="projects">
      {isTransitioning && <div className="circle-transition-overlay circle-enter"></div>}
      <style>{`
        .projects-scroll-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          padding-right: 30px !important;
        }

        .project-card {
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: visible;
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        section#projects .project-card.neo-box {
          transition: transform 0.15s ease-out, box-shadow 0.15s ease-out !important;
        }

        section#projects .project-card.neo-box:hover {
          transform: translate(-4px, -4px) !important;
          box-shadow: 8px 8px 0px #000 !important;
        }

        section#projects .project-card.neo-box:active {
          transform: translate(4px, 4px) !important;
          box-shadow: 0px 0px 0px #000 !important;
        }

        .project-card:last-child {
          margin-right: 30px !important;
        }

        .project-main-link {
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .project-image {
          display: block;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .project-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 20px;
          position: relative;
          z-index: 2;
        }

        .neo-arrow-icon {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s ease-in-out;
          font-size: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .project-main-link:hover .neo-arrow-icon {
          opacity: 1;
          transform: translateX(0);
        }

        .hover-action-btn {
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        
        .hover-btn-code:hover {
          background-color: #ffd700 !important; 
          color: #111111 !important;
        }

        .hover-btn-live:hover {
          background-color: #ff6b6b !important; 
          color: #ffffff !important;
        }

        .carousel-controls {
          display: flex;
          gap: 10px;
        }

        .carousel-controls .arrow-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        /* CSS untuk link di dalam pop-up modal */
        .live-modal-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          color: #000;
          padding: 12px 20px;
          background: #fff;
          font-weight: bold;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .live-modal-link:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px #000 !important;
          background-color: #ff6b6b;
          color: #fff;
        }
      `}</style>

      <div className="projects-header-area">
        <div className="section-title-cyan neo-box">Featured Projects</div>
        <div className="carousel-controls">
          <button onClick={() => scroll("left")} className="neo-box arrow-btn">
            <BsArrowLeft />
          </button>
          <button onClick={() => scroll("right")} className="neo-box arrow-btn">
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {projectData.map((project) => (
          <div className="project-card neo-box" key={project.id}>
            
            <a 
              href={`/project/${project.id}`} 
              onClick={(e) => handleCardClick(e, project.id)} 
              className="project-main-link"
            >
              <img src={project.cover} alt={project.title} className="project-image" />
              
              <div
                className="project-header project-header-flex"
                style={{ backgroundColor: project.bgColor, color: project.textColor }}
              >
                <h3>{project.title}</h3>
                <span className="neo-arrow-icon">
                  <IoNavigate />
                </span>
              </div>

              <div className="project-body" style={{ paddingBottom: "5px" }}>
                <p>{project.shortDesc}</p>
                <div className="project-tech">
                  {project.tech.map((techName, idx) => (
                    <span className="neo-box tech-tag" key={idx}>
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </a>

            <div className="project-actions-wrapper" style={{ padding: "0 20px 20px 20px", position: "relative", zIndex: 3 }}>
              <div className="project-actions">
                <a
                  href={project.github || "#"}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!project.github) e.preventDefault(); 
                  }}
                  target={project.github ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="btn-code neo-box hover-action-btn hover-btn-code"
                  style={{ 
                    textDecoration: "none", 
                    color: "var(--hitam-garis)",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "6px",
                    fontFamily: "inherit",
                    fontSize: "inherit"
                  }}
                >
                  <LuCodeXml size={16} /> Code
                </a>
                
                {/* LOGIKA TOMBOL LIVE MULTIPLE LINKS UNTUK HALAMAN PROJECTS */}
                {Array.isArray(project.live) ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      setSelectedLiveLinks(project.live);
                      setIsLiveModalOpen(true);
                    }}
                    className="btn-live neo-box hover-action-btn hover-btn-live"
                    style={{
                      color: "var(--putih-murni)",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      gap: "6px",
                      cursor: "pointer",
                      border: "3px solid #000",
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      padding: "10px"
                    }}
                  >
                    Live <MdArrowOutward size={18} />
                  </button>
                ) : (
                  <a
                    href={project.live || "#"}
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      if (!project.live) e.preventDefault(); 
                    }}
                    target={project.live ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="btn-live neo-box hover-action-btn hover-btn-live"
                    style={{ 
                      textDecoration: "none", 
                      color: "var(--putih-murni)",
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      gap: "6px",
                      fontFamily: "inherit",
                      fontSize: "inherit"
                    }}
                  >
                    Live <MdArrowOutward size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* --- POP-UP MODAL SELECTION UNTUK MULTIPLE LIVE LINKS --- */}
      {isLiveModalOpen && selectedLiveLinks.length > 0 && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 10000,
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "20px", boxSizing: "border-box", animation: "fadeIn 0.2s ease-out"
          }}
          onClick={(e) => { e.stopPropagation(); setIsLiveModalOpen(false); }}
        >
          <div 
            className="neo-box"
            style={{ 
              position: "relative", animation: "scaleUp 0.2s ease-out", 
              width: "100%", maxWidth: "500px", backgroundColor: "#fff", 
              padding: "35px 25px 30px", border: "4px solid #000",
              fontFamily: "inherit"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="neo-box"
              onClick={() => setIsLiveModalOpen(false)}
              style={{
                position: "absolute", top: "-15px", right: "-15px",
                width: "40px", height: "40px", backgroundColor: "#ff6b6b", color: "#fff",
                border: "3px solid #000", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer", 
                zIndex: 10002, display: "flex", justifyContent: "center", alignItems: "center", padding: 0,
                fontFamily: "inherit"
              }}
            >
              X
            </button>

            <h3 style={{ marginTop: 0, marginBottom: "25px", fontSize: "1.4rem", textTransform: "uppercase" }}>
              Select Project Experience
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {selectedLiveLinks.map((liveItem, index) => (
                <a
                  key={index}
                  href={liveItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-modal-link neo-box"
                  style={{ border: "3px solid #000", boxShadow: "4px 4px 0px #000", fontFamily: "inherit" }}
                >
                  {liveItem.name} <MdArrowOutward size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}