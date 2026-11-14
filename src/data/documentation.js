import { image } from "./images";

/*
 * Cara menambah foto dokumentasi:
 * 1. Simpan foto di src/assets/documentation/<nama-file>.webp
 * 2. Tambahkan objek di bawah dengan image("documentation/<nama-file>") (tanpa ekstensi)
 */
export const documentationData = [
  { imgSrc: image("documentation/1"), caption: "Magang di Kementerian Ketenagakerjaan RI, Biro Keuangan dan BMN" },
  { imgSrc: image("documentation/2"), caption: "Bersama Rekan Magang di Kementerian Ketenagakerjaan RI, Biro Keuangan dan BMN" },
  { imgSrc: image("documentation/3"), caption: "Project di Kementerian PUPR Balai Perkerasan dan Lingkungan Jalan" },
  { imgSrc: image("documentation/4"), caption: "Operator Acara Seminar Aktivasi Akun Coretax DJP" },
  { imgSrc: image("documentation/5"), caption: "Operator Acara Hybrid Pembekalan Pelaksanaan Anggaran TA 2026 Kementerian Ketenagakerjaan" },
  { imgSrc: image("documentation/6"), caption: "Seminar Aktivasi Akun Coretax DJP di Lingkungan Kementerian Ketenagakerjaan" },
  { imgSrc: image("documentation/7"), caption: "Foto Bersama Peserta dan Narasumber Acara" },
];
