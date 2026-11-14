import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import ImageLightbox from "./ImageLightbox";
import { designData } from "../data/designs";

export default function DesignProjects() {
  const [scrollContainerRef, scroll] = useCarousel();
  const [openIndex, setOpenIndex] = useState(null);
  const posters = designData.map((item) => item.imgSrc);

  return (
    <section className="projects-container" id="design-projects">
      <div className="projects-header-area section-header-compact">
        <h2 className="section-title-large neo-box section-title-compact bg-orange">
          DESIGN PROJECTS
        </h2>
        <CarouselControls onScroll={scroll} />
      </div>
      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {designData.map((item, idx) => (
          <div className="design-card neo-box" key={item.title}>
            <div className="design-content">
              <h3 className="design-title">{item.title}</h3>
              <div className="design-desc">
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
              </div>

              <button
                type="button"
                onClick={() => setOpenIndex(idx)}
                className={`btn-details ${item.btnColor} neo-box`}
              >
                <MdRemoveRedEye size={20} /> View HD Design
              </button>
            </div>
            <div className="design-image-area">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="design-poster"
                onClick={() => setOpenIndex(idx)}
              />
            </div>
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <ImageLightbox
          images={posters}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}
