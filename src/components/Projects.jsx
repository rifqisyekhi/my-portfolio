import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectData } from "../data/projectData";
import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import LiveLinksModal from "./LiveLinksModal";

import { LuCodeXml } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { IoNavigate } from "react-icons/io5";

// Mencegah link kosong dibuka
const blockIfEmpty = (url) => (e) => {
  e.stopPropagation();
  if (!url) e.preventDefault();
};

export default function Projects() {
  const [scrollContainerRef, scroll] = useCarousel();
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedLiveLinks, setSelectedLiveLinks] = useState(null);

  const handleCardClick = (e, projectId) => {
    // Biarkan ctrl/cmd/shift-click membuka tab baru seperti link biasa
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => navigate(`/project/${projectId}`), 500);
  };

  return (
    <section className="projects-container" id="projects">
      {isTransitioning && <div className="circle-transition-overlay circle-enter"></div>}

      <div className="projects-header-area">
        <div className="section-title-cyan neo-box">Featured Projects</div>
        <CarouselControls onScroll={scroll} />
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

              <div className="project-body">
                <p>{project.shortDesc}</p>
                <div className="project-tech">
                  {project.tech.map((techName) => (
                    <span className="neo-box tech-tag" key={techName}>
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </a>

            <div className="project-actions-wrapper">
              <div className="project-actions">
                <a
                  href={project.github || "#"}
                  onClick={blockIfEmpty(project.github)}
                  target={project.github ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`btn-code neo-box hover-btn-code ${project.github ? "" : "is-disabled"}`}
                >
                  <LuCodeXml size={16} /> Code
                </a>

                {/* Project dengan banyak link Live membuka pop-up pilihan */}
                {Array.isArray(project.live) ? (
                  <button
                    type="button"
                    onClick={() => setSelectedLiveLinks(project.live)}
                    className="btn-live neo-box hover-btn-live"
                  >
                    Live <MdArrowOutward size={18} />
                  </button>
                ) : (
                  <a
                    href={project.live || "#"}
                    onClick={blockIfEmpty(project.live)}
                    target={project.live ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`btn-live neo-box hover-btn-live ${project.live ? "" : "is-disabled"}`}
                  >
                    Live <MdArrowOutward size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedLiveLinks && (
        <LiveLinksModal links={selectedLiveLinks} onClose={() => setSelectedLiveLinks(null)} />
      )}
    </section>
  );
}
