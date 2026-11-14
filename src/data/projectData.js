import { projectImages } from "./images";

/*
 * Cara menambah project:
 * 1. Buat folder src/assets/projects/<id>/ berisi:
 *      cover.webp          -> gambar kartu & fallback galeri
 *      1.webp, 2.webp, ... -> galeri screenshot (opsional)
 *      analyst-1.webp, ... -> diagram System Analyst (opsional)
 * 2. Tambahkan objek di bawah dengan `id` yang sama persis dengan nama folder.
 *
 * `live` bisa berupa string URL, atau array { name, url } untuk pop-up pilihan link.
 * `design`, `github`, `live` yang kosong ("") otomatis jadi tombol nonaktif.
 */
const projects = [
  // Sozo Skin Clinic Project
  {
    id: "sozo-skin-clinic",
    title: "Sozo Skin Clinic Website",
    bgColor: "#1a2080",
    textColor: "#ffffff",
    shortDesc: "Website klinik kecantikan multi-halaman dengan katalog treatment, promo, pencarian cabang, dan reservasi via WhatsApp.",
    tech: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/rifqisyekhi/sozo-clinic",
    live: "https://sozo-clinic.vercel.app/",
    role: "Frontend Developer",
    systemOverview: "Sozo Skin Clinic Website adalah replika frontend dari website resmi Sozo Skin Clinic, sebuah klinik kecantikan dengan puluhan cabang di Indonesia. Website ini terdiri dari beberapa halaman, yaitu Beranda, Treatment, Promo, Lokasi, Tentang Kami, dan Tim Dokter, dengan tampilan yang responsif untuk desktop maupun mobile.\n\nFitur yang dibuat antara lain header sticky dengan mega-menu dan drawer mobile, hero slider before/after, filter dan pencarian treatment berdasarkan kategori maupun keluhan, pencarian cabang klinik per nama/provinsi/kota, FAQ accordion, serta tombol reservasi yang langsung terhubung ke WhatsApp dengan pesan otomatis. Dibangun menggunakan Vite, Tailwind CSS v4, dan JavaScript murni tanpa framework, dengan seluruh konten dipisahkan ke dalam file data agar mudah dikelola."
  },
  // SisKA Project
  {
    id: "chatbot-whatsapp",
    title: "SisKA - WhatsApp Helpdesk System",
    bgColor: "#15406a",
    textColor: "#ffffff",
    shortDesc: "Chatbot WhatsApp yang membantu pengajuan layanan administrasi secara cepat dan otomatis.",
    tech: ["React", "Node.js", "HTML/CSS", "MongoDB", "Ollama"],
    github: "https://github.com/rifqisyekhi/chatbot-whatsapp-siska",
    live: "",
    role: "Software Developer / Fullstack Developer",
    systemOverview: "SisKA (Sistem Keuangan dan BMN Assistant) adalah chatbot WhatsApp yang dibuat untuk membantu proses administrasi di Biro Keuangan dan BMN. Melalui WhatsApp, pegawai bisa mengajukan lembur, cuti, peminjaman kendaraan, laporan WFA, hingga layanan administrasi lainnya tanpa perlu membuka aplikasi terpisah. \n\nSistem ini menangani proses pengajuan, persetujuan oleh atasan, hingga pembuatan dokumen PDF secara otomatis. Dibangun menggunakan JavaScript dan Node.js, SisKA juga terhubung dengan database sehingga data pegawai dapat diisi otomatis. Tujuan utamanya adalah membuat proses administrasi menjadi lebih cepat, praktis, dan mengurangi pekerjaan yang masih dilakukan secara manual."
  },
  // BPLJ Project
  {
    id: "meeting-schedule-app",
    title: "BPLJ Meeting & Information System",
    bgColor: "#f8bb19",
    textColor: "#111111",
    shortDesc: "Website untuk mengelola jadwal rapat dan menyajikan informasi layanan pengujian secara online di Balai Perkerasan dan Lingkungan Jalan.",
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/rifqisyekhi/kp-adminpanel-bplj-baru",
    live: "",
    role: "Fullstack Web Developer",
    systemOverview: "Sistem Jadwal Rapat dan Informasi Layanan Pengujian adalah aplikasi web yang dikembangkan untuk membantu Balai Perkerasan dan Lingkungan Jalan (BPLJ) dalam mengelola jadwal rapat dan menyampaikan informasi layanan pengujian secara digital. Sebelumnya, proses tersebut masih dilakukan secara manual sehingga kurang efisien.\n\nMelalui website ini, karyawan dapat membuat dan mengatur jadwal rapat secara online, sementara informasi layanan pengujian dapat diakses dengan mudah oleh karyawan maupun pengunjung melalui website dan tampilan monitor di area lobi. Sistem dibangun menggunakan JavaScript, PHP, HTML/CSS, dan MySQL untuk membantu proses administrasi menjadi lebih praktis, terorganisir, dan mudah diakses."
  },
  // Samaria Project
  {
    id: "samaria-restaurant",
    title: "Samaria Restaurant Management System",
    bgColor: "#f4b4d7",
    textColor: "#111111",
    shortDesc: "Sistem pemesanan makanan berbasis web untuk pelanggan dan operasional restoran.",
    tech: ["React.js", "Tailwind CSS", "HTML/CSS", "MongoDB"],
    design: "https://www.figma.com/design/o1MEWiVoEAhKy72dMDykp0/draft-samaria--2?node-id=254-371&t=4ERWNYnauTjDeat1-0",
    github: "https://github.com/rifqisyekhi/samaria-restaurant-app",
    live: "https://samaria-restaurant-app.vercel.app/",
    role: "Fullstack Developer",
    systemOverview: "Samaria Restaurant App adalah aplikasi web pemesanan makanan berbasis mobile yang dirancang untuk memudahkan pelanggan memesan makanan di restoran, baik untuk dine-in maupun take-away. Pelanggan dapat memilih menu, menambahkan pesanan ke keranjang, lalu melakukan pembayaran di kasir atau melalui QRIS dengan alur yang cepat dan mudah.\n\nSelain aplikasi untuk pelanggan, sistem ini juga dilengkapi dengan dashboard kasir untuk mengelola transaksi dan melihat laporan penjualan, dashboard gudang untuk mengelola stok bahan dan persediaan, serta dashboard dapur untuk menerima pesanan yang masuk dan melihat riwayat pesanan. Dibangun menggunakan React.js dan Tailwind CSS, aplikasi ini berfokus pada pengalaman pengguna yang modern, responsif, dan membantu operasional restoran menjadi lebih efisien.\n\nProject ini dikembangkan secara kolaboratif. UI/UX Design dan System Analysis dikerjakan oleh Amanda Salsabila, Nabila Oktaviansyah, Magali Ilana Meta, Inaya Aidella, dan Saqilla Nur Alaida, yang bertanggung jawab atas desain antarmuka, wireframe, flowchart, dan ERD sebagai bagian dari Tugas Akhir Semester mereka."
  },
  // Roblox Studio Project
  {
    id: "roblox-projects",
    title: "Roblox Studio Game Projects",
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
    systemOverview: "Sebagai Roblox Developer Freelancer, saya mengembangkan berbagai map dan sistem game sesuai kebutuhan klien menggunakan Roblox Studio. Setiap project dirancang dengan gameplay yang menarik, performa yang optimal, serta dilengkapi berbagai fitur seperti sistem gameplay, UI, scripting, DataStore, NPC, hingga mekanisme multiplayer sesuai konsep yang diinginkan."
  },
  // Media Processor Project
  {
    id: "media-processor",
    title: "Media Processor",
    bgColor: "#b3d9ff",
    textColor: "#111111",
    shortDesc: "Aplikasi web pemrosesan media dengan fitur edit gambar, konversi audio, dan text-to-speech.",
    tech: ["Python", "Streamlit", "OpenCV", "NumPy", "Pillow", "Pydub", "gTTS", "FFmpeg"],
    github: "https://github.com/rifqisyekhi/Mediaprocessor",
    live: "",
    role: "Backend Engineer",
    systemOverview: "Media Processor adalah aplikasi web berbasis Streamlit yang dirancang untuk memudahkan pengguna melakukan berbagai pengolahan media dalam satu platform. Aplikasi ini menyediakan fitur untuk mengedit gambar, mengonversi dan mengompresi audio, serta mengubah teks menjadi suara (Text-to-Speech) dengan tampilan yang sederhana dan mudah digunakan.\n\nProject ini dibuat menggunakan Python, Streamlit, OpenCV, Pillow, dan Pydub, aplikasi ini memungkinkan pengguna melakukan berbagai proses multimedia secara cepat tanpa memerlukan software tambahan."
  },
  // Game Witcher Project
  {
    id: "game-witcher-haunted-flight",
    title: "Game Witcher Haunted Flight",
    bgColor: "#d1b3ff",
    textColor: "#111111",
    shortDesc: "This game was developed using Unity Engine with the C# programming language. It features a player character, The Witcher, who must avoid approaching ghosts in a dynamic environment.",
    tech: ["C#", "Unity Engine"],
    github: "",
    live: "https://rifqisyekhi.itch.io/witcher-haunted-flight",
    role: "Game Developer",
    systemOverview: "Game arcade survival 2D/3D di mana pemain mengendalikan karakter Witcher untuk bertahan hidup dari kejaran musuh.\n\nFitur utama: AI pergerakan musuh (ghosts), sistem skor, dynamic environment, dan built menggunakan Unity & C#."
  }
];

// Gambar dimuat otomatis dari folder sesuai id project
export const projectData = projects.map((project) => ({
  ...projectImages(project.id),
  ...project,
}));
