// SisKA Image
import siskaCover from "../assets/siskacover.png";
import siskaDokumentasi1 from "../assets/Siska1.png";
import siskaDokumentasi2 from "../assets/Siska2.png";
import siskaDokumentasi3 from "../assets/Siska3.png";
import siskaDokumentasi4 from "../assets/Siska4.png";
import siskaSystemAnalyst from "../assets/siskaFlowchart.png";

// BPLJ Image
import BPLJCover from "../assets/bpljcover.png";
import BPLJDokumentasi1 from "../assets/bplj1.png";
import BPLJDokumentasi2 from "../assets/bplj2.png";
import BPLJDokumentasi3 from "../assets/bplj3.png";
import BPLJDokumentasi4 from "../assets/bplj4.png";
import BPLJDokumentasi5 from "../assets/bplj5.png";
import BPLJDokumentasi6 from "../assets/bplj6.png";
import BPLJSystemAnalyst1 from "../assets/systemanalystbplj1.png";
import BPLJSystemAnalyst2 from "../assets/systemanalystbplj2.png";

// Samaria Image
import samariaCover from "../assets/samariacover.png";
import SamariaDokumentasi1 from "../assets/samaria1.png";
import SamariaDokumentasi2 from "../assets/samaria2.png";
import SamariaDokumentasi3 from "../assets/samaria3.png";
import SamariaDokumentasi4 from "../assets/samaria4.png";
import SamariaDokumentasi5 from "../assets/samaria5.png";
import SamariaDokumentasi6 from "../assets/samaria6.png";

// Roblox Studio Image
import RobloxStudioCover from "../assets/Roblox1cover.png";
import RobloxStudioDokumentasi1 from "../assets/robloxstudio1.png";
import RobloxStudioDokumentasi2 from "../assets/robloxstudio2.png";
import RobloxStudioDokumentasi3 from "../assets/robloxstudio3.png";

// Media Processor Image
import MediaProcessorCover from "../assets/mediaProcessorCover.png";
import MediaProcessorDokumentasi1 from "../assets/mediaProcessor1.png";
import MediaProcessorDokumentasi2 from "../assets/mediaProcessor2.png";
import MediaProcessorDokumentasi3 from "../assets/mediaProcessor3.png";
import MediaProcessorDokumentasi4 from "../assets/mediaProcessor4.png";

// Game Witcher Image
import gamewitcherCover from "../assets/GameWitcher.png";

export const projectData = [
  // SisKA Project
  {
    id: "chatbot-whatsapp",
    title: "SisKA - WhatsApp Helpdesk System",
    cover: siskaCover,
    gallery: [ 
      siskaDokumentasi1, 
      siskaDokumentasi2, 
      siskaDokumentasi3, 
      siskaDokumentasi4
    ],
    bgColor: "#15406a",
    textColor: "#ffffff",
    shortDesc: "Chatbot WhatsApp yang membantu pengajuan layanan administrasi secara cepat dan otomatis.",
    tech: ["React", "Node.js", "HTML/CSS", "MongoDB", "Ollama"],
    github: "https://github.com/rifqisyekhi/chatbot-whatsapp-siska",
    live: "",
    role: "Software Developer / Fullstack Developer",
    systemOverview: "SisKA (Sistem Keuangan dan BMN Assistant) adalah chatbot WhatsApp yang dibuat untuk membantu proses administrasi di Biro Keuangan dan BMN. Melalui WhatsApp, pegawai bisa mengajukan lembur, cuti, peminjaman kendaraan, laporan WFA, hingga layanan administrasi lainnya tanpa perlu membuka aplikasi terpisah. \n\nSistem ini menangani proses pengajuan, persetujuan oleh atasan, hingga pembuatan dokumen PDF secara otomatis. Dibangun menggunakan JavaScript dan Node.js, SisKA juga terhubung dengan database sehingga data pegawai dapat diisi otomatis. Tujuan utamanya adalah membuat proses administrasi menjadi lebih cepat, praktis, dan mengurangi pekerjaan yang masih dilakukan secara manual.",
    systemAnalyst: [
      siskaSystemAnalyst
    ]
  },
  // BPLJ Project
  {
    id: "meeting-schedule-app",
    title: "BPLJ Meeting & Information System",
    cover: BPLJCover,
    gallery: [ 
      BPLJDokumentasi1, 
      BPLJDokumentasi2, 
      BPLJDokumentasi3, 
      BPLJDokumentasi4,
      BPLJDokumentasi5,
      BPLJDokumentasi6
    ],
    bgColor: "#f8bb19",
    textColor: "#111111",
    shortDesc: "Website untuk mengelola jadwal rapat dan menyajikan informasi layanan pengujian secara online di Balai Perkerasan dan Lingkungan Jalan.",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/rifqisyekhi/kp-adminpanel-bplj-baru",
    live: "",
    role: "Fullstack Web Developer",
    systemOverview: "Sistem Jadwal Rapat dan Informasi Layanan Pengujian adalah aplikasi web yang dikembangkan untuk membantu Balai Perkerasan dan Lingkungan Jalan (BPLJ) dalam mengelola jadwal rapat dan menyampaikan informasi layanan pengujian secara digital. Sebelumnya, proses tersebut masih dilakukan secara manual sehingga kurang efisien.\n\nMelalui website ini, karyawan dapat membuat dan mengatur jadwal rapat secara online, sementara informasi layanan pengujian dapat diakses dengan mudah oleh karyawan maupun pengunjung melalui website dan tampilan monitor di area lobi. Sistem dibangun menggunakan JavaScript, PHP, HTML/CSS, dan MySQL untuk membantu proses administrasi menjadi lebih praktis, terorganisir, dan mudah diakses.",
    systemAnalyst: [
      BPLJSystemAnalyst1, 
      BPLJSystemAnalyst2
    ]
  },
  // Samaria Project
  {
    id: "samaria-restaurant",
    title: "Samaria Restaurant Management System",
    cover: samariaCover,
    gallery: [ 
      SamariaDokumentasi1, 
      SamariaDokumentasi2, 
      SamariaDokumentasi3, 
      SamariaDokumentasi4,
      SamariaDokumentasi5,
      SamariaDokumentasi6
    ],
    bgColor: "#f4b4d7",
    textColor: "#111111",
    shortDesc: "Sistem pemesanan makanan berbasis web untuk pelanggan dan operasional restoran.",
    tech: ["React.js", "Tailwind CSS", "HTML/CSS", "MongoDB"],
    design: "https://www.figma.com/design/o1MEWiVoEAhKy72dMDykp0/draft-samaria--2?node-id=254-371&t=4ERWNYnauTjDeat1-0",
    github: "https://github.com/rifqisyekhi/samaria-restaurant-app",
    live: "https://samaria-restaurant-app.vercel.app/",
    role: "Fullstack Developer",
    systemOverview: "Samaria Restaurant App adalah aplikasi web pemesanan makanan berbasis mobile yang dirancang untuk memudahkan pelanggan memesan makanan di restoran, baik untuk dine-in maupun take-away. Pelanggan dapat memilih menu, menambahkan pesanan ke keranjang, lalu melakukan pembayaran di kasir atau melalui QRIS dengan alur yang cepat dan mudah.\n\nSelain aplikasi untuk pelanggan, sistem ini juga dilengkapi dengan dashboard kasir untuk mengelola transaksi dan melihat laporan penjualan, dashboard gudang untuk mengelola stok bahan dan persediaan, serta dashboard dapur untuk menerima pesanan yang masuk dan melihat riwayat pesanan. Dibangun menggunakan React.js dan Tailwind CSS, aplikasi ini berfokus pada pengalaman pengguna yang modern, responsif, dan membantu operasional restoran menjadi lebih efisien.\n\nProject ini dikembangkan secara kolaboratif. UI/UX Design dan System Analysis dikerjakan oleh Amanda Salsabila, Nabila Oktaviansyah, Magali Ilana Meta, Inaya Aidella, dan Saqilla Nur Alaida, yang bertanggung jawab atas desain antarmuka, wireframe, flowchart, dan ERD sebagai bagian dari Tugas Akhir Semester mereka.",
    systemAnalyst: ""
  },
  // Roblox Studio Project
  {
    id: "roblox-projects",
    title: "Roblox Studio Game Projects",
    cover: RobloxStudioCover,
    gallery: [ 
      RobloxStudioDokumentasi1, 
      RobloxStudioDokumentasi2, 
      RobloxStudioDokumentasi3,
    ],
    bgColor: "#f3ccf3",
    textColor: "#111111",
    shortDesc: "Mengembangkan map/experience dan sistem game Roblox sesuai kebutuhan klien",
    tech: ["Luau", "Roblox Studio"],
    github: "",
    live: [
      { name: "Ekspedisi 1001 Curug", url: "https://www.roblox.com/games/111951050190848/Ekspedisi-1001-Curug" },
      { name: "Desa Beruang", url: "https://www.roblox.com/games/74779016946962/DESA-BERUANG" }
    ],
    role: "Lead Game Programmer and Designer",
    systemOverview: "Sebagai Roblox Developer Freelancer, saya mengembangkan berbagai map dan sistem game sesuai kebutuhan klien menggunakan Roblox Studio. Setiap project dirancang dengan gameplay yang menarik, performa yang optimal, serta dilengkapi berbagai fitur seperti sistem gameplay, UI, scripting, DataStore, NPC, hingga mekanisme multiplayer sesuai konsep yang diinginkan.",
    systemAnalyst: ""
  },
  // Media Processor Project
  {
    id: "media-processor",
    title: "Media Processor",
    cover: MediaProcessorCover,
    gallery: [ 
      MediaProcessorDokumentasi1, 
      MediaProcessorDokumentasi2, 
      MediaProcessorDokumentasi3, 
      MediaProcessorDokumentasi4
    ],
    bgColor: "#b3d9ff",
    textColor: "#111111",
    shortDesc: "Aplikasi web pemrosesan media dengan fitur edit gambar, konversi audio, dan text-to-speech.",
    tech: ["Python", "Streammlit", "OpenCV", "NumPy", "Pillow", "Pydub", "gTTS", "FFmpeg"],
    github: "https://github.com/rifqisyekhi/Mediaprocessor",
    live: "",
    role: "Backend Engineer",
    systemOverview: "Media Processor adalah aplikasi web berbasis Streamlit yang dirancang untuk memudahkan pengguna melakukan berbagai pengolahan media dalam satu platform. Aplikasi ini menyediakan fitur untuk mengedit gambar, mengonversi dan mengompresi audio, serta mengubah teks menjadi suara (Text-to-Speech) dengan tampilan yang sederhana dan mudah digunakan.\n\nProject ini dibuat menggunakan Python, Streamlit, OpenCV, Pillow, dan Pydub, aplikasi ini memungkinkan pengguna melakukan berbagai proses multimedia secara cepat tanpa memerlukan software tambahan.",
    systemAnalyst: ""
  },
  {
    id: "game-witcher-haunted-flight",
    title: "Game Witcher Haunted Flight",
    cover: gamewitcherCover,
    bgColor: "#d1b3ff",
    textColor: "#111111",
    shortDesc: "This game was developed using Unity Engine with the C# programming language. It features a player character, The Witcher, who must avoid approaching ghosts in a dynamic environment.",
    tech: ["C#", "Unity Engine"],
    github: "",
    live: "https://rifqisyekhi.itch.io/witcher-haunted-flight",
    role: "Game Developer",
    systemOverview: "Game arcade survival 2D/3D di mana pemain mengendalikan karakter Witcher untuk bertahan hidup dari kejaran musuh.\n\nFitur utama: AI pergerakan musuh (ghosts), sistem skor, dynamic environment, dan built menggunakan Unity & C#.",
    systemAnalyst: [
      gamewitcherCover
    ]
  }
];