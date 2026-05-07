import { useRef } from "react";
// Import gambar dari folder assets
import dok2 from "../assets/2.png";
import dok3 from "../assets/3.png";
import dok4 from "../assets/4.png";
import dok5 from "../assets/5.png"; 
import dok6 from "../assets/6.png"; 

export default function Documentation() {
  // Mesin pengontrol scroll
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];

      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30; // Jarak antar kartu
        const isMobile = window.innerWidth <= 768;
        // Kalau di HP geser 1 kartu, kalau di laptop geser 2 kartu sekaligus
        const scrollAmount = isMobile ? cardWidth + gap : (cardWidth + gap) * 2;

        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="gallery-container" id="documentation">
      {/* Meminjam struktur header milik Projects agar seragam */}
      <div className="projects-header-area">
        <div className="section-title-pink neo-box">Documentation</div>
        <div className="carousel-controls">
          <button onClick={() => scroll("left")} className="neo-box arrow-btn">
            ←
          </button>
          <button onClick={() => scroll("right")} className="neo-box arrow-btn">
            →
          </button>
        </div>
      </div>
      
      {/* Meminjam wadah scroll milik Projects */}
      <div className="projects-scroll-container" ref={scrollContainerRef}>
        
        {/* Foto 1 */}
        <div className="photo-card neo-box">
          <img src={dok2} alt="Dokumentasi 1" />
          <p className="photo-caption">Project di Kementerian PUPR Balai Perkerasan dan Lingkungan Jalan</p>
        </div>

        {/* Foto 2 */}
        <div className="photo-card neo-box">
          <img src={dok3} alt="Dokumentasi 2" />
          <p className="photo-caption">Operator Acara Seminar Aktivasi Akun Coretax DJP</p>
        </div>

        {/* Foto 3 */}
        <div className="photo-card neo-box">
          <img src={dok4} alt="Dokumentasi 3" />
          <p className="photo-caption">Operator Acara Hybrid Pembekalan Pelaksanaan Anggaran TA 2026 Kementerian Ketenagakerjaan</p>
        </div>

        {/* Foto 4 */}
        <div className="photo-card neo-box">
          <img src={dok5} alt="Dokumentasi 4" />
          <p className="photo-caption">Masukkan caption foto 4 di sini</p>
        </div>

        {/* Foto 5 */}
        <div className="photo-card neo-box">
          <img src={dok6} alt="Dokumentasi 5" />
          <p className="photo-caption">Masukkan caption foto 5 di sini</p>
        </div>
            
      </div>
    </section>
  );
}