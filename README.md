# 🚀 Rifqi Syekhi - Personal Web Portfolio

Sebuah *website* portofolio interaktif yang dibangun menggunakan **React + Vite** dengan mengusung gaya desain **Neobrutalism**. Desain ini menonjolkan warna-warna *vibrant*, batas garis yang tebal, bayangan *solid*, dan animasi mekanik yang tegas.

🌍 **Live Demo:** [Klik di sini untuk melihat website](https://web-portfolio-rifqisyekhi.vercel.app/)

---

## ✨ Fitur Utama
- **🎨 Neobrutalism UI:** Antarmuka yang unik, berani, dan anti-mainstream.
- **📱 Fully Responsive:** Tampilan yang sudah dioptimalkan secara mutlak untuk perangkat *Mobile*, *Tablet*, maupun *Desktop*.
- **🖱️ Swipeable Carousels:** Bagian *Projects*, *Documentation*, dan *Certificates* dapat digeser ke samping (horizontal scroll) dengan rapi, baik menggunakan *mouse* maupun sentuhan layar (*touch-swipe*).
- **⚡ Bouncy Animations:** Efek transisi *hover* dan *load* yang menghentak dan interaktif tanpa menghilangkan identitas brutalismenya.

---

## 🛠️ Tech Stack
- **Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Custom CSS (Pure CSS3) tanpa *library* eksternal untuk kontrol penuh pada gaya Neobrutalism.
- **Deployment:** Vercel (CI/CD Integrated)

---

## 📂 Struktur Halaman
1. **Hero:** Perkenalan singkat dan *call-to-action*.
2. **About:** Ringkasan profil dan keseharian.
3. **Skills:** Daftar keahlian teknis (bahasa pemrograman & alat pendukung).
4. **Documentation:** Galeri foto bergaya Polaroid jadul yang berisi pengalaman operasional dan proyek di lapangan.
5. **Projects:** Daftar aplikasi, program, dan *game* yang pernah dikembangkan (dilengkapi tombol *Source Code* & *Live Preview*).
6. **Design Projects:** Etalase desain antarmuka dan grafis.
7. **Certificates:** Bukti pencapaian dan kompetensi.
8. **Contact:** Formulir dan tautan media sosial untuk kolaborasi.

---

## 🗂️ Struktur Folder
```
my-portfolio
├─ public/                  # File statis (favicon)
├─ src/
│  ├─ assets/               # Gambar project, sertifikat, dokumentasi
│  ├─ components/           # Komponen per section + komponen reusable
│  │  ├─ CarouselControls.jsx
│  │  ├─ ImageLightbox.jsx
│  │  ├─ LiveLinksModal.jsx
│  │  └─ Hero, About, Skills, Documentation, Projects, ProjectDetail,
│  │     DesignProjects, Certificates, Contact, Navbar, Footer
│  ├─ data/
│  │  ├─ profile.js         # Email, nomor HP, link sosial media & resume
│  │  └─ projectData.js     # Data semua project (dipakai Projects & ProjectDetail)
│  ├─ hooks/
│  │  ├─ useCarousel.js     # Logika geser carousel horizontal
│  │  ├─ useEscapeKey.js    # Menutup modal dengan tombol Esc
│  │  └─ useSectionNav.js   # Navigasi ke section dari halaman mana pun
│  ├─ App.jsx               # Routing (/ dan /project/:projectId)
│  ├─ index.css             # Seluruh styling
│  └─ main.jsx
├─ vercel.json              # Rewrite SPA agar refresh tidak 404
└─ vite.config.js
```

## ➕ Menambah Project Baru
1. Simpan gambar di `src/assets/`.
2. Import gambar lalu tambahkan objek baru di `src/data/projectData.js`
   (`id`, `title`, `cover`, `gallery`, `tech`, `github`, `live`, `systemOverview`, `systemAnalyst`, dll).
3. `live` bisa berupa string URL, atau array `{ name, url }` untuk menampilkan pop-up pilihan link.

## 💻 Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
