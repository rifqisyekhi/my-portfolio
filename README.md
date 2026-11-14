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
├─ public/                     # File statis (favicon)
├─ src/
│  ├─ assets/                  # Semua gambar (format .webp)
│  │  ├─ projects/<id-project>/   # cover.webp, 1.webp, 2.webp, analyst-1.webp, ...
│  │  ├─ certificates/
│  │  ├─ designs/
│  │  ├─ documentation/
│  │  └─ profile.webp
│  ├─ components/              # Komponen tampilan (tidak perlu disentuh untuk update konten)
│  ├─ data/                    # ✏️ SEMUA KONTEN ADA DI SINI
│  │  ├─ projectData.js
│  │  ├─ certificates.js
│  │  ├─ designs.js
│  │  ├─ documentation.js
│  │  ├─ skills.js
│  │  ├─ profile.js            # Email, nomor HP, link sosial media & resume
│  │  └─ images.js             # Pemuat gambar otomatis (import.meta.glob)
│  ├─ hooks/                   # useCarousel, useSectionNav, useEscapeKey
│  ├─ App.jsx                  # Routing (/ dan /project/:projectId)
│  ├─ index.css                # Seluruh styling
│  └─ main.jsx
├─ vercel.json                 # Rewrite SPA agar refresh tidak 404
└─ vite.config.js
```

## ✏️ Update Konten

### Menambah project
1. Buat folder `src/assets/projects/<id-project>/` berisi:
   - `cover.webp` → gambar kartu (wajib)
   - `1.webp`, `2.webp`, ... → galeri screenshot (opsional, otomatis urut angka)
   - `analyst-1.webp`, `analyst-2.webp`, ... → diagram System Analyst (opsional)
2. Tambahkan objek di `src/data/projectData.js` dengan `id` **sama persis** dengan nama folder.
   Gambar tidak perlu di-import, semuanya terbaca otomatis.
3. `live` bisa berupa string URL, atau array `{ name, url }` untuk pop-up pilihan link.

### Menambah sertifikat / desain / dokumentasi
1. Simpan gambar di `src/assets/certificates/`, `designs/`, atau `documentation/`.
2. Tambahkan objek di file data yang sesuai, contoh: `imgSrc: image("certificates/nama-file")` (tanpa ekstensi).

### Tips gambar
- Pakai format **.webp**, lebar maksimal sekitar **1920px**, supaya website tetap ringan.
- Nama file pakai huruf kecil dan tanda hubung, contoh `sertifikat-aws.webp`.
- Kalau gambar tidak muncul, buka console browser: ada pesan `[images] ... tidak ditemukan` yang menunjukkan path yang salah.

## 💻 Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
