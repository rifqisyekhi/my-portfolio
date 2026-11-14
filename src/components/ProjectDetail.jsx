import { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../data/projectData";
import CarouselControls from "./CarouselControls";
import LiveLinksModal from "./LiveLinksModal";
import ImageLightbox from "./ImageLightbox";

import { LuCodeXml } from "react-icons/lu";
import { MdOutlineDesignServices, MdArrowOutward } from "react-icons/md";
import { IoMdReturnLeft } from "react-icons/io";

// Tombol aksi (Design/Code/Live) yang otomatis nonaktif jika URL kosong
function ActionLink({ url, hoverClass, children }) {
  return (
    <a
      href={url || "#"}
      onClick={(e) => { if (!url) e.preventDefault(); }}
      target={url ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className={`neo-box detail-action-btn ${hoverClass} ${url ? "" : "is-disabled"}`}
    >
      {children}
    </a>
  );
}

function BackLink({ onClick }) {
  return (
    <a href="/#projects" onClick={onClick} className="neo-box detail-back-link">
      <IoMdReturnLeft size={20} /> Return to Vault
    </a>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projectData.find((item) => item.id === projectId);
  const navigate = useNavigate();

  const [isRevealing, setIsRevealing] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  const mainGalleryRef = useRef(null);
  const analystGalleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const timer = setTimeout(() => setIsRevealing(false), 500);
    return () => clearTimeout(timer);
  }, [projectId]);

  const handleBackToProjects = (e) => {
    e.preventDefault();
    setIsExiting(true);

    setTimeout(() => {
      navigate("/");
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }, 500);
  };

  const scrollGallery = (direction, targetRef) => {
    const container = targetRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -container.clientWidth : container.clientWidth,
      behavior: "smooth",
    });
  };

  const transitionOverlays = (
    <>
      {isRevealing && <div className="circle-transition-overlay circle-exit"></div>}
      {isExiting && <div className="circle-transition-overlay circle-enter"></div>}
    </>
  );

  if (!project) {
    return (
      <div className="project-not-found">
        {transitionOverlays}
        <h2 className="neo-box project-not-found-title">Project Tidak Ditemukan!</h2>
        <BackLink onClick={handleBackToProjects} />
      </div>
    );
  }

  const galleryImages = project.gallery?.length > 0 ? project.gallery : [project.cover];
  const analystImages = project.systemAnalyst || [];

  const renderGallery = (images, ref, altPrefix) => (
    <div className="neo-box detail-gallery-container" ref={ref}>
      {images.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${altPrefix} ${idx + 1}`}
          className="detail-gallery-image"
          onClick={() => setLightbox({ images, index: idx })}
        />
      ))}
    </div>
  );

  return (
    <div className="project-detail-page">
      {transitionOverlays}

      <BackLink onClick={handleBackToProjects} />

      <header className="detail-header">
        <div className="projects-header-area detail-title-row">
          <h1
            className="section-title-cyan neo-box detail-title"
            style={{ backgroundColor: project.bgColor, color: project.textColor }}
          >
            {project.title}
          </h1>
          {galleryImages.length > 1 && <CarouselControls onScroll={(dir) => scrollGallery(dir, mainGalleryRef)} />}
        </div>

        {renderGallery(galleryImages, mainGalleryRef, `${project.title} screenshot`)}
      </header>

      <div className="detail-actions-row">
        <div className="project-actions-detail">
          <ActionLink url={project.design} hoverClass="hover-btn-design">
            <MdOutlineDesignServices size={20} /> Design
          </ActionLink>

          <ActionLink url={project.github} hoverClass="hover-btn-code">
            <LuCodeXml size={18} /> Code
          </ActionLink>

          {Array.isArray(project.live) ? (
            <button
              type="button"
              onClick={() => setIsLiveModalOpen(true)}
              className="neo-box detail-action-btn hover-btn-live"
            >
              Live <MdArrowOutward size={20} />
            </button>
          ) : (
            <ActionLink url={project.live} hoverClass="hover-btn-live">
              Live <MdArrowOutward size={20} />
            </ActionLink>
          )}
        </div>

        <div className="neo-box detail-role">
          {project.role || "Software Developer / Fullstack Developer"}
        </div>
      </div>

      <section className="detail-content">
        <div className="detail-section">
          <h2 className="section-title-yellow neo-box detail-section-title">System Overview</h2>
          <div className="neo-box detail-overview">
            <p>{project.systemOverview}</p>
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-title-cyan neo-box detail-section-title bg-mint">Tools</h2>
          <div className="project-tech">
            {project.tech.map((techName) => (
              <span className="neo-box tech-tag" key={techName}>
                {techName}
              </span>
            ))}
          </div>
        </div>

        {analystImages.length > 0 && (
          <div className="detail-section">
            <div className="detail-title-row">
              <h2 className="section-title-pink neo-box detail-section-title">System Analyst</h2>
              {analystImages.length > 1 && <CarouselControls onScroll={(dir) => scrollGallery(dir, analystGalleryRef)} />}
            </div>

            {renderGallery(analystImages, analystGalleryRef, "System Analyst Diagram")}
          </div>
        )}
      </section>

      {isLiveModalOpen && Array.isArray(project.live) && (
        <LiveLinksModal links={project.live} onClose={() => setIsLiveModalOpen(false)} />
      )}

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          index={lightbox.index}
          onChange={(index) => setLightbox({ ...lightbox, index })}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
