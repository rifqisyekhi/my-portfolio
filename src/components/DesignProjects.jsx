// src/components/DesignProjects.jsx
import { useRef } from "react";
import poster1 from "../assets/Poster1.png";
import poster2 from "../assets/Poster2.png";

const designData = [
  {
    id: 1, 
    imgSrc: poster1,
    title: "Poster Kewarganegaraan",
    desc1: "Pancasila reflects the spirit of unity and unity of the Indonesian nation by respecting ethnic, religious, cultural and linguistic diversity, as well as being a moral guide to achieving justice and peace together.",
    desc2: "This poster was entered into the PAKU-XII competition at Suryakancana University Cianjur, and won 2nd place.",
    btnColor: "bg-blue",
    link: "#"
  },
  {
    id: 2,
    imgSrc: poster2,
    title: "Poster Song Analysis With Spotify",
    desc1: "This poster was a collaboration with my friend Audrey. This poster is about learning ideas, technology, and exploration methods.",
    desc2: "Which means creating your own learning ideas by choosing appropriate methods and technology to support these steps.",
    btnColor: "bg-pink",
    link: "#"
  }
];

export default function DesignProjects() {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];
      
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30; // Jarak antar kartu (gap)
        
        // Rumus geser presisi HANYA 1 KARTU
        const scrollAmount = cardWidth + gap; 
        
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="projects-container" id="design-projects">
      
      {/* Header Section */}
      <div className="projects-header-area" style={{ marginBottom: "20px" }}>
        <h2 
          className="section-title-large neo-box" 
          style={{ padding: "12px 24px", fontSize: "2rem", backgroundColor: "var(--oranye)" }}
        >
          DESIGN PROJECTS
        </h2>
        <div className="carousel-controls">
          <button onClick={() => scroll("left")} className="neo-box arrow-btn">←</button>
          <button onClick={() => scroll("right")} className="neo-box arrow-btn">→</button>
        </div>
      </div>

      {/* Container Scroll */}
      <div className="projects-scroll-container" ref={scrollContainerRef}>
        
        {designData.map((item) => (
          <div className="design-card neo-box" key={item.id}>
            
            {/* Bagian Kiri: Teks */}
            <div className="design-content">
              <h3 className="design-title">{item.title}</h3>
              <div className="design-desc">
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
              </div>
              
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-details ${item.btnColor} neo-box`}
                style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', color: 'inherit', marginTop: 'auto', padding: '12px 24px', fontWeight: 'bold' }}
              >
                👁️ View HD Design
              </a>
            </div>

            {/* Bagian Kanan: Gambar (Jurus Absolute Positioning) */}
            <div 
              style={{
                flex: 1,
                backgroundColor: "var(--putih-krem)",
                position: "relative", /* KUNCI 1: Menjadikan kotak krem sebagai titik acuan */
                minHeight: "450px"
              }}
            >
              <img 
                src={item.imgSrc} 
                alt={item.title} 
                style={{
                  position: "absolute", /* KUNCI 2: Lepaskan gambar dari hukum Flexbox */
                  top: "30px",
                  bottom: "30px",
                  left: "30px",
                  right: "30px",
                  width: "calc(100% - 60px)", /* Lebar 100% dikurangi padding kiri-kanan */
                  height: "calc(100% - 60px)", /* Tinggi 100% dikurangi padding atas-bawah */
                  objectFit: "contain"
                }} 
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}