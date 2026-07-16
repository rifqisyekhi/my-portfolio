import { useRef } from "react";
// --- IMPORTS ICON ---
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import dok2 from "../assets/2.png";
import dok3 from "../assets/3.png";
import dok4 from "../assets/4.png";
import dok5 from "../assets/5.png";
import dok6 from "../assets/6.png";

export default function Documentation() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];

      if (card) {
        const cardWidth = card.offsetWidth;
        const computedGap =
          parseInt(window.getComputedStyle(scrollContainerRef.current).gap) ||
          30;
        const scrollAmount = cardWidth + computedGap;

        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="gallery-container" id="documentation">
      <style>{`
        .gallery-container .projects-scroll-container {
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory !important;
          scroll-behavior: smooth !important;
          gap: 30px !important;
          padding: 0 !important; /* Paksa 0 agar math 100% tidak bocor */
          margin: 0 !important;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .gallery-container .projects-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .gallery-container .photo-card {
          scroll-snap-align: start !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          min-width: 0 !important;
          
          flex: 0 0 calc((100% - 60px) / 3) !important; 
        }

        .gallery-container .photo-card:last-child {
          margin-right: 30px !important;
        }

        @media (max-width: 1024px) {
          .gallery-container .photo-card {
            flex: 0 0 calc((100% - 30px) / 2) !important;
          }
        }

        @media (max-width: 768px) {
          .gallery-container .photo-card {
            flex: 0 0 100% !important;
          }
        }
      `}</style>

      <div className="projects-header-area">
        <div className="section-title-pink neo-box">Documentation</div>
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
        {/* Foto 1 */}
        <div className="photo-card neo-box">
          <img
            src={dok2}
            alt="Dokumentasi 1"
            style={{ width: "100%", display: "block" }}
          />
          <p className="photo-caption">
            Project di Kementerian PUPR Balai Perkerasan dan Lingkungan Jalan
          </p>
        </div>

        {/* Foto 2 */}
        <div className="photo-card neo-box">
          <img
            src={dok3}
            alt="Dokumentasi 2"
            style={{ width: "100%", display: "block" }}
          />
          <p className="photo-caption">
            Operator Acara Seminar Aktivasi Akun Coretax DJP
          </p>
        </div>

        {/* Foto 3 */}
        <div className="photo-card neo-box">
          <img
            src={dok4}
            alt="Dokumentasi 3"
            style={{ width: "100%", display: "block" }}
          />
          <p className="photo-caption">
            Operator Acara Hybrid Pembekalan Pelaksanaan Anggaran TA 2026
            Kementerian Ketenagakerjaan
          </p>
        </div>

        {/* Foto 4 */}
        <div className="photo-card neo-box">
          <img
            src={dok5}
            alt="Dokumentasi 4"
            style={{ width: "100%", display: "block" }}
          />
          <p className="photo-caption">Masukkan caption foto 4 di sini</p>
        </div>

        {/* Foto 5 */}
        <div className="photo-card neo-box">
          <img
            src={dok6}
            alt="Dokumentasi 5"
            style={{ width: "100%", display: "block" }}
          />
          <p className="photo-caption">Masukkan caption foto 5 di sini</p>
        </div>
      </div>
    </section>
  );
}