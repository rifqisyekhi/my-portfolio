import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";

import sertifMaganghub from "../assets/sertif_magang.webp";
import sertifICT from "../assets/Sertifikat_ICT_Excel.webp";
import sertifTOEFA from "../assets/Sertifikat_TOEFA.webp";
import sertifDicoding1 from "../assets/BelajarDasarAi.webp";
import sertifDicoding2 from "../assets/MemulaiPemrogramanDenganPython.webp";
import sertifDicoding3 from "../assets/BelajarDasarVisualisasiData.webp";
import sertifCisco1 from "../assets/CCNAv7.webp";
import sertifCisco2 from "../assets/LINUX.webp";
import sertifOracle1 from "../assets/Oracle1.webp";
import sertifOracle2 from "../assets/Oracle2.webp";
import sertifUIUX from "../assets/UIUX.webp";
import sertifIbm1 from "../assets/IBM1.webp";
import sertifIbm2 from "../assets/IBM2.webp";
import sertifIbm3 from "../assets/IBM3.webp";
import sertifEssentialSkills from "../assets/EssentialSkills.webp";

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
  const [scrollContainerRef, scroll] = useCarousel();

  return (
    <section className="certificates-container" id="certificates">
      <div className="projects-header-area section-header-compact">
        <h2 className="section-title-large neo-box section-title-compact">CERTIFICATES</h2>
        <CarouselControls onScroll={scroll} />
      </div>

      <div className="projects-scroll-container" ref={scrollContainerRef}>
        {certificateData.map((cert) => (
          <div className="cert-card neo-box" key={cert.id}>
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
