import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import ImageLightbox from "./ImageLightbox";

import poster1 from "../assets/Poster1.webp";
import poster2 from "../assets/Poster2.webp";

const designData = [
  {
    id: 1,
    imgSrc: poster1,
    title: "Poster Kewarganegaraan",
    desc1:
      "Pancasila reflects the spirit of unity and unity of the Indonesian nation by respecting ethnic, religious, cultural and linguistic diversity, as well as being a moral guide to achieving justice and peace together.",
    desc2:
      "This poster was entered into the PAKU-XII competition at Suryakancana University Cianjur, and won 2nd place.",
    btnColor: "bg-blue",
  },
  {
    id: 2,
    imgSrc: poster2,
    title: "Poster Song Analysis With Spotify",
    desc1:
      "This poster was a collaboration with my friend Audrey. This poster is about learning ideas, technology, and exploration methods.",
    desc2:
      "Which means creating your own learning ideas by choosing appropriate methods and technology to support these steps.",
    btnColor: "bg-pink",
  },
];

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
          <div className="design-card neo-box" key={item.id}>
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
