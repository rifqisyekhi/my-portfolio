import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import { documentationData } from "../data/documentation";

export default function Documentation() {
  const [scrollContainerRef, scroll] = useCarousel();

  return (
    <section className="gallery-container" id="documentation">
      <div className="projects-header-area">
        <div className="section-title-pink neo-box">Documentation</div>
        <CarouselControls onScroll={scroll} />
      </div>
      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {documentationData.map((item, idx) => (
          <div className="photo-card neo-box" key={item.imgSrc}>
            <img src={item.imgSrc} alt={`Dokumentasi ${idx + 1}`} />
            <p className="photo-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
