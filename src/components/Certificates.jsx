import { useRef } from "react";
// --- IMPORTS ICON ---
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import sertifMaganghub from "../assets/sertif_magang.jpg";
import sertifICT from "../assets/Sertifikat_ICT_Excel.jpeg";
import sertifTOEFA from "../assets/Sertifikat_TOEFA.jpg";
import sertifDicoding1 from "../assets/BelajarDasarAi.png";
import sertifDicoding2 from "../assets/MemulaiPemrogramanDenganPython.png";
import sertifDicoding3 from "../assets/BelajarDasarVisualisasiData.png";
import sertifCisco1 from "../assets/CCNAv7.png";
import sertifCisco2 from "../assets/LINUX.png";
import sertifOracle1 from "../assets/Oracle1.png";
import sertifOracle2 from "../assets/Oracle2.png";
import sertifUIUX from "../assets/UIUX.png";
import sertifIbm1 from "../assets/IBM1.png";
import sertifIbm2 from "../assets/IBM2.png";
import sertifIbm3 from "../assets/IBM3.png";
import sertifEssentialSkills from "../assets/EssentialSkills.png";

const certificateData = [
  {
    id: 1,
    imgSrc: sertifMaganghub,
    altText: "Sertifikat MagangHUB",
    btnColor: "bg-blue",
    link: "https://drive.google.com/file/d/1bTg8Arpq1SEhVODVSMN3SiCY3YkpPera/view?usp=sharing",
  },
  {
    id: 2,
    imgSrc: sertifTOEFA,
    altText: "Certificate TOEFA",
    btnColor: "bg-blue",
    link: "https://drive.google.com/file/d/1eOL-GYeCA1_9KAZ02elUWEUuIAO6NwVF/view?usp=sharing",
  },
  {
    id: 3,
    imgSrc: sertifICT,
    altText: "Certificate ICT Excel",
    btnColor: "bg-purple",
    link: "https://drive.google.com/file/d/1ZHx5oxR6dOZLobOh2rPdDizd7pyLbn5n/view?usp=sharing",
  },
  {
    id: 4,
    imgSrc: sertifDicoding1,
    altText: "Belajar Dasar AI",
    btnColor: "bg-green",
    link: "https://drive.google.com/file/d/1S1s0UFjPWl-pmnduajUT4wBs4usmIsP0/view?usp=sharing",
  },
  {
    id: 5,
    imgSrc: sertifDicoding2,
    altText: "Memulai Pemrograman Dengan Python",
    btnColor: "bg-yellow",
    link: "https://drive.google.com/file/d/1BnZkDJ323QLp8a1ybUJ6Wra01QGzFnfu/view?usp=sharing",
  },
  {
    id: 6,
    imgSrc: sertifDicoding3,
    altText: "Belajar Dasar Visualisasi Data",
    btnColor: "bg-pink",
    link: "https://drive.google.com/file/d/1a8YOW3YkPo9D3T3aJ96yvFvVwdUFyGEi/view?usp=sharing",
  },
  {
    id: 7,
    imgSrc: sertifCisco1,
    altText: "CCNAv7: Introduction to Networks",
    btnColor: "bg-cyan",
    link: "https://drive.google.com/file/d/1s9GR1lpvL3GgUuw0Nr-3VUQaj_3WhmX2/view?usp=sharing",
  },
  {
    id: 8,
    imgSrc: sertifCisco2,
    altText: "THE LINUX ESSENTIALS PROFESSIONAL DEVELOPMENT CERTIFICATE",
    btnColor: "bg-blue",
    link: "https://drive.google.com/file/d/1wa7WFRoBNPzlHzJ2ifEgYqh3wg0fmw6M/view?usp=sharing",
  },
  {
    id: 9,
    imgSrc: sertifOracle1,
    altText: "Database Design",
    btnColor: "bg-purple",
    link: "https://drive.google.com/file/d/1VM-f4xNLeCN29owwuWazWXuVRjHJ4GVT/view?usp=sharing",
  },
  {
    id: 10,
    imgSrc: sertifOracle2,
    altText: "Database Programming with SQL",
    btnColor: "bg-green",
    link: "https://drive.google.com/file/d/1A4j2Dem4elk_HGL9gjqtqDPfEOWt2P6j/view?usp=sharing",
  },
  {
    id: 11,
    imgSrc: sertifUIUX,
    altText: "Intro to UI/UX Design",
    btnColor: "bg-yellow",
    link: "https://drive.google.com/file/d/1ofJ69EJJOFQHLne7vyqjTE58yQqkC6Qt/view?usp=sharing",
  },
  {
    id: 12,
    imgSrc: sertifIbm1,
    altText: "AI Ethics",
    btnColor: "bg-pink",
    link: "https://drive.google.com/file/d/14CWEjkU2uOitHha1HhSXfDoHV-6XWg6M/view?usp=sharing",
  },
  {
    id: 13,
    imgSrc: sertifIbm2,
    altText: "Introduction to Artificial Intelligence",
    btnColor: "bg-cyan",
    link: "https://drive.google.com/file/d/1mJqConbilcEhkUlhK-UJz9MHXacd6nF0/view?usp=sharing",
  },
  {
    id: 14,
    imgSrc: sertifIbm3,
    altText: "Introduction to Generative AI",
    btnColor: "bg-blue",
    link: "https://drive.google.com/file/d/1Xdn2yJcOM02h8OezSKWIKib_s7EChLgL/view?usp=sharing",
  },
  {
    id: 15,
    imgSrc: sertifEssentialSkills,
    altText: "Essential Skills: Design Thinking",
    btnColor: "bg-purple",
    link: "https://drive.google.com/file/d/1TTe426uEIR6I8HyoXFbreDi2rnEMbDA2/view?usp=sharing",
  },
];

export default function Certificates() {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[0];
      
      if (card) {
        const cardWidth = card.offsetWidth;
        const computedGap = parseInt(window.getComputedStyle(scrollContainerRef.current).gap) || 30;
        
        const scrollAmount = cardWidth + computedGap;
        
        scrollContainerRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="certificates-container" id="certificates">
      <style>{`
        .certificates-container .projects-scroll-container {
          display: flex !important;
          overflow-x: auto !important;
          scroll-snap-type: x mandatory !important;
          scroll-behavior: smooth !important;
          gap: 30px !important;
          padding: 0 !important;
          margin: 0 !important;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .certificates-container .projects-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .certificates-container .cert-card {
          scroll-snap-align: start !important;
          transform: translateZ(0) !important;
          will-change: transform !important;
          backface-visibility: hidden !important;
          box-sizing: border-box !important;
          margin: 0 !important;
          min-width: 0 !important;
          flex: 0 0 calc((100% - 60px) / 3) !important; 
        }

        .carousel-controls {
          display: flex;
          gap: 10px;
        }

        .carousel-controls .arrow-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .certificates-container .cert-card {
            flex: 0 0 calc((100% - 30px) / 2) !important;
          }
        }

        @media (max-width: 768px) {
          .certificates-container .cert-card {
            flex: 0 0 100% !important;
          }
        }
      `}</style>

      <div className="projects-header-area" style={{ marginBottom: "20px" }}>
        <h2
          className="section-title-large neo-box"
          style={{ padding: "12px 24px", fontSize: "2rem" }}
        >
          CERTIFICATES
        </h2>
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
        {certificateData.map((cert) => (
          <div className="cert-card neo-box" key={cert.id}>
            <div className="cert-image-wrapper">
              <img
                src={cert.imgSrc}
                alt={cert.altText}
                className="cert-image"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-details ${cert.btnColor} neo-box`}
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
                color: "inherit",
                fontWeight: "bold",
                padding: "10px"
              }}
            >
              DETAILS
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}