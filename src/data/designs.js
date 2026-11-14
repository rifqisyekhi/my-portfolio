import { image } from "./images";

/*
 * Cara menambah desain:
 * 1. Simpan gambar di src/assets/designs/<nama-file>.webp
 * 2. Tambahkan objek di bawah dengan image("designs/<nama-file>") (tanpa ekstensi)
 */
export const designData = [
  {
    imgSrc: image("designs/poster-kewarganegaraan"),
    title: "Poster Kewarganegaraan",
    desc1:
      "Pancasila reflects the spirit of unity and unity of the Indonesian nation by respecting ethnic, religious, cultural and linguistic diversity, as well as being a moral guide to achieving justice and peace together.",
    desc2:
      "This poster was entered into the PAKU-XII competition at Suryakancana University Cianjur, and won 2nd place.",
    btnColor: "bg-blue",
  },
  {
    imgSrc: image("designs/poster-song-analysis-spotify"),
    title: "Poster Song Analysis With Spotify",
    desc1:
      "This poster was a collaboration with my friend Audrey. This poster is about learning ideas, technology, and exploration methods.",
    desc2:
      "Which means creating your own learning ideas by choosing appropriate methods and technology to support these steps.",
    btnColor: "bg-pink",
  },
];
