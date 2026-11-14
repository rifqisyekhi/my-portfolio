import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import { certificateData } from "../data/certificates";

export default function Certificates() {
  const [scrollContainerRef, scroll] = useCarousel();

  return (
    <section className="certificates-container" id="certificates">
      <div className="projects-header-area section-header-compact">
        <h2 className="section-title-large neo-box section-title-compact">CERTIFICATES</h2>
        <CarouselControls onScroll={scroll} />
      </div>

      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {certificateData.map((cert) => (
          <div className="cert-card neo-box" key={cert.link}>
            <div className="cert-image-wrapper">
              <img src={cert.imgSrc} alt={cert.altText} className="cert-image" />
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-details ${cert.btnColor} neo-box`}
            >
              DETAILS
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
