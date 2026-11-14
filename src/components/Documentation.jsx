import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";

import dok2 from "../assets/2.webp";
import dok3 from "../assets/3.webp";
import dok4 from "../assets/4.webp";
import dok5 from "../assets/5.webp";
import dok6 from "../assets/6.webp";

const documentationData = [
  { imgSrc: dok2, caption: "Project di Kementerian PUPR Balai Perkerasan dan Lingkungan Jalan" },
  { imgSrc: dok3, caption: "Operator Acara Seminar Aktivasi Akun Coretax DJP" },
  { imgSrc: dok4, caption: "Operator Acara Hybrid Pembekalan Pelaksanaan Anggaran TA 2026 Kementerian Ketenagakerjaan" },
  { imgSrc: dok5, caption: "Seminar Aktivasi Akun Coretax DJP di Lingkungan Kementerian Ketenagakerjaan" },
  { imgSrc: dok6, caption: "Foto Bersama Peserta dan Narasumber Acara" },
];

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
