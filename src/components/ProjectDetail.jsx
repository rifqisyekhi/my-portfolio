import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../data/projectData";

// --- IMPORTS ICON ---
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { LuCodeXml } from "react-icons/lu";
import { MdOutlineDesignServices, MdArrowOutward } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find((item) => item.id === projectId);
  const navigate = useNavigate();

  const [isRevealing, setIsRevealing] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);
  
  const mainGalleryRef = useRef(null);
  const analystGalleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    const timer = setTimeout(() => {
      setIsRevealing(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [projectId]);

  const handleBackToProjects = (e) => {
    e.preventDefault();
    setIsExiting(true);
    
    setTimeout(() => {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }, 500);
  };
  
  const scrollGallery = (direction, targetRef) => {
    if (targetRef.current) {
      const scrollAmount = targetRef.current.clientWidth; 
      targetRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!project) {
    return (
      <div style={{ padding: "120px 20px 100px", textAlign: "center", position: "relative" }}>
        {isRevealing && <div className="circle-transition-overlay circle-exit"></div>}
        {isExiting && <div className="circle-transition-overlay circle-enter"></div>}
        <h2 className="neo-box" style={{ display: "inline-block", padding: "20px", backgroundColor: "#ff6b6b" }}>
          Project Tidak Ditemukan!
        </h2>
        <br /><br />
        <a 
          href="/#projects" 
          onClick={handleBackToProjects} 
          className="neo-box arrow-btn" 
          style={{ 
            textDecoration: "none", 
            padding: "10px 20px", 
            background: "#fff", 
            color: "#000", 
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <IoMdReturnLeft size={20} /> Return to Vault
        </a>
      </div>
    );
  }

  const imagesToShow = project.gallery && project.gallery.length > 0 ? project.gallery : [project.cover];

  const handleNextImage = (e) => {
    e.stopPropagation();
    const currentIndex = imagesToShow.indexOf(selectedImage);
    const nextIndex = currentIndex === imagesToShow.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(imagesToShow[nextIndex]);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const currentIndex = imagesToShow.indexOf(selectedImage);
    const prevIndex = currentIndex === 0 ? imagesToShow.length - 1 : currentIndex - 1;
    setSelectedImage(imagesToShow[prevIndex]);
  };

  return (
    <div
      className="project-detail-page"
      style={{ padding: "120px 20px 60px", maxWidth: "1200px", margin: "0 auto", position: "relative" }}
    >
      {isRevealing && <div className="circle-transition-overlay circle-exit"></div>}
      {isExiting && <div className="circle-transition-overlay circle-enter"></div>}

      <style>{`
        .detail-gallery-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          gap: 0;
          background: #fff;
          padding: 0;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .detail-gallery-container::-webkit-scrollbar {
          display: none;
        }
        .detail-gallery-image {
          scroll-snap-align: start;
          flex: 0 0 100%;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          border: none;
          cursor: zoom-in;
        }
        
        .zoomable-img {
          cursor: zoom-in;
          transition: transform 0.2s;
        }
        .zoomable-img:hover {
          transform: scale(1.02);
        }

        .detail-action-btn {
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        }
        .hover-btn-design:hover {
          background-color: #ff90e8 !important; 
          color: #000 !important;
        }
        .hover-btn-code:hover {
          background-color: #ffd700 !important; 
          color: #111 !important;
        }
        .hover-btn-live:hover {
          background-color: #ff6b6b !important; 
          color: #fff !important;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }

        .modal-arrow-btn:hover {
          background-color: #fff !important;
          color: #000 !important;
        }
        
        .carousel-controls .arrow-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

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

      <a
        href="/#projects"
        onClick={handleBackToProjects}
        className="neo-box"
        style={{
          textDecoration: "none",
          padding: "10px 20px",
          backgroundColor: "#fff",
          color: "#000",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          fontFamily: "inherit"
        }}
      >
        <IoMdReturnLeft size={20} /> Return to Vault
      </a>

      <header className="detail-header" style={{ marginBottom: "30px" }}>
        <div className="projects-header-area" style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1
            className="section-title-cyan neo-box"
            style={{
              backgroundColor: project.bgColor,
              color: project.textColor,
              margin: 0,
              padding: "15px 20px",
              fontSize: "1.8rem"
            }}
          >
            {project.title}
          </h1>

          {imagesToShow.length > 1 && (
            <div className="carousel-controls" style={{ margin: 0, display: "flex", gap: "10px" }}>
              <button onClick={() => scrollGallery("left", mainGalleryRef)} className="neo-box arrow-btn" style={{ fontFamily: "inherit" }}>
                <BsArrowLeft />
              </button>
              <button onClick={() => scrollGallery("right", mainGalleryRef)} className="neo-box arrow-btn" style={{ fontFamily: "inherit" }}>
                <BsArrowRight />
              </button>
            </div>
          )}
        </div>

        <div className="neo-box detail-gallery-container" ref={mainGalleryRef}>
          {imagesToShow.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="detail-gallery-image"
              onClick={() => setSelectedImage(imgSrc)}
            />
          ))}
        </div>
      </header>

      <div 
        style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "40px", 
          flexWrap: "wrap", 
          gap: "20px" 
        }}
      >
        <div className="project-actions-detail" style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          
          <a
            href={project.design || "#"}
            onClick={(e) => { if (!project.design) e.preventDefault(); }}
            target={project.design ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="neo-box detail-action-btn hover-btn-design"
            style={{
              textDecoration: "none", color: "#000", padding: "10px 25px", fontWeight: "bold", background: "#fff",
              opacity: project.design ? 1 : 0.5, cursor: project.design ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "inherit"
            }}
          >
            <MdOutlineDesignServices size={20} /> Design
          </a>
          
          <a
            href={project.github || "#"}
            onClick={(e) => { if (!project.github) e.preventDefault(); }}
            target={project.github ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="neo-box detail-action-btn hover-btn-code"
            style={{
              textDecoration: "none", color: "#000", padding: "10px 25px", fontWeight: "bold", background: "#fff",
              opacity: project.github ? 1 : 0.5, cursor: project.github ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "inherit"
            }}
          >
            <LuCodeXml size={18} /> Code
          </a>

          {/* PERUBAHAN DI SINI: Menambahkan fontFamily dan fontSize inherit ke tombol Live */}
          {Array.isArray(project.live) ? (
            <button
              onClick={() => setIsLiveModalOpen(true)}
              className="neo-box detail-action-btn hover-btn-live"
              style={{
                color: "#000", padding: "10px 25px", fontWeight: "bold", background: "#fff",
                display: "flex", alignItems: "center", gap: "8px", cursor: "pointer",
                border: "3px solid #000",
                fontFamily: "inherit", 
                fontSize: "inherit"
              }}
            >
              Live <MdArrowOutward size={20} />
            </button>
          ) : (
            <a
              href={project.live || "#"}
              onClick={(e) => { if (!project.live) e.preventDefault(); }}
              target={project.live ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="neo-box detail-action-btn hover-btn-live"
              style={{
                textDecoration: "none", color: "#000", padding: "10px 25px", fontWeight: "bold", background: "#fff",
                opacity: project.live ? 1 : 0.5, cursor: project.live ? "pointer" : "not-allowed",
                display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "inherit"
              }}
            >
              Live <MdArrowOutward size={20} />
            </a>
          )}

        </div>

        <div className="neo-box" style={{ backgroundColor: "#ffd700", padding: "10px 25px", fontWeight: "bold" }}>
          {project.role || "Software Developer / Fullstack Developer"}
        </div>
      </div>

      <section className="detail-content" style={{ display: "block" }}>
        
        <div style={{ marginBottom: "40px" }}>
          <h2 className="section-title-yellow neo-box" style={{ display: "inline-block", marginBottom: "15px", padding: "10px 20px", fontSize: "1.5rem" }}>
            System Overview
          </h2>
          <div className="neo-box" style={{ backgroundColor: "#fff", padding: "25px" }}>
            <p style={{ lineHeight: "1.6", fontSize: "16px", whiteSpace: "pre-line", margin: 0 }}>
              {project.systemOverview}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <h2 className="section-title-cyan neo-box" style={{ display: "inline-block", marginBottom: "15px", padding: "10px 20px", fontSize: "1.5rem", backgroundColor: "#a8e6cf" }}>
            Tools
          </h2>
          <div className="project-tech" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {project.tech.map((techName, idx) => (
              <span
                className="neo-box tech-tag"
                key={idx}
                style={{ display: "inline-block", margin: 0 }}
              >
                {techName}
              </span>
            ))}
          </div>
        </div>

        {project.systemAnalyst && project.systemAnalyst.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <h2 className="section-title-pink neo-box" style={{ margin: 0, padding: "10px 20px", fontSize: "1.5rem" }}>
                System Analyst
              </h2>
              {project.systemAnalyst.length > 1 && (
                <div className="carousel-controls" style={{ margin: 0, display: "flex", gap: "10px" }}>
                  <button onClick={() => scrollGallery("left", analystGalleryRef)} className="neo-box arrow-btn" style={{ fontFamily: "inherit" }}>
                    <BsArrowLeft />
                  </button>
                  <button onClick={() => scrollGallery("right", analystGalleryRef)} className="neo-box arrow-btn" style={{ fontFamily: "inherit" }}>
                    <BsArrowRight />
                  </button>
                </div>
              )}
            </div>
            
            <div className="neo-box detail-gallery-container" ref={analystGalleryRef} style={{ backgroundColor: "#fff" }}>
              {project.systemAnalyst.map((imgSrc, idx) => (
                <img 
                  key={idx}
                  src={imgSrc} 
                  alt={`System Analyst Diagram ${idx + 1}`} 
                  className="detail-gallery-image"
                  onClick={() => setSelectedImage(imgSrc)}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {isLiveModalOpen && Array.isArray(project.live) && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 10000,
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "20px", boxSizing: "border-box", animation: "fadeIn 0.2s ease-out"
          }}
          onClick={() => setIsLiveModalOpen(false)}
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
              {project.live.map((liveItem, index) => (
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

      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 9999,
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
            animation: "fadeIn 0.2s ease-out"
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{ position: "relative", animation: "scaleUp 0.2s ease-out", maxWidth: "80%", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {(imagesToShow.includes(selectedImage) || (project.systemAnalyst && project.systemAnalyst.includes(selectedImage))) && (() => {
              const currentArray = imagesToShow.includes(selectedImage) ? imagesToShow : project.systemAnalyst;
              if (currentArray.length > 1) {
                return (
                  <button
                    className="neo-box modal-arrow-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = currentArray.indexOf(selectedImage);
                      const prevIndex = currentIndex === 0 ? currentArray.length - 1 : currentIndex - 1;
                      setSelectedImage(currentArray[prevIndex]);
                    }}
                    style={{
                      position: "absolute", left: "-65px", top: "50%", transform: "translateY(-50%)",
                      width: "50px", height: "50px", backgroundColor: "#ffd700", color: "#000",
                      fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", zIndex: 10001,
                      display: "flex", justifyContent: "center", alignItems: "center", padding: 0,
                      fontFamily: "inherit"
                    }}
                  >
                    <BsArrowLeft />
                  </button>
                );
              }
              return null;
            })()}

            <button 
              className="neo-box"
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute", top: "-15px", right: "-15px",
                width: "40px", height: "40px", backgroundColor: "#ff6b6b", color: "#fff",
                border: "3px solid #000", borderRadius: "0",
                fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer", zIndex: 10000,
                display: "flex", justifyContent: "center", alignItems: "center", padding: 0,
                fontFamily: "inherit"
              }}
            >
              X
            </button>
            
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="neo-box"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                backgroundColor: "#fff",
                display: "block",
                padding: "0"
              }} 
            />

            {(imagesToShow.includes(selectedImage) || (project.systemAnalyst && project.systemAnalyst.includes(selectedImage))) && (() => {
              const currentArray = imagesToShow.includes(selectedImage) ? imagesToShow : project.systemAnalyst;
              if (currentArray.length > 1) {
                return (
                  <button
                    className="neo-box modal-arrow-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = currentArray.indexOf(selectedImage);
                      const nextIndex = currentIndex === currentArray.length - 1 ? 0 : currentIndex + 1;
                      setSelectedImage(currentArray[nextIndex]);
                    }}
                    style={{
                      position: "absolute", right: "-65px", top: "50%", transform: "translateY(-50%)",
                      width: "50px", height: "50px", backgroundColor: "#ffd700", color: "#000",
                      fontSize: "1.5rem", fontWeight: "bold", cursor: "pointer", zIndex: 10001,
                      display: "flex", justifyContent: "center", alignItems: "center", padding: 0,
                      fontFamily: "inherit"
                    }}
                  >
                    <BsArrowRight />
                  </button>
                );
              }
              return null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
}