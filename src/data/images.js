// Memuat gambar otomatis berdasarkan folder, jadi tidak perlu import satu per satu.
// Format yang didukung: webp, png, jpg, jpeg.
const allImages = import.meta.glob("../assets/**/*.{webp,png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const fileName = (path) => path.split("/").pop().replace(/\.\w+$/, "");

// Urutan natural: 2 sebelum 10
const byNumber = (a, b) => fileName(a).localeCompare(fileName(b), undefined, { numeric: true });

const imagesIn = (folder) =>
  Object.keys(allImages)
    .filter((path) => path.startsWith(`../assets/${folder}/`))
    .sort(byNumber);

/**
 * Gambar sebuah project dari folder src/assets/projects/<projectId>/
 *   cover.webp        -> cover
 *   1.webp, 2.webp    -> gallery (urut angka)
 *   analyst-1.webp    -> systemAnalyst (urut angka)
 */
export function projectImages(projectId) {
  const paths = imagesIn(`projects/${projectId}`);
  const coverPath = paths.find((path) => fileName(path) === "cover");

  if (!coverPath) console.error(`[images] cover tidak ditemukan di src/assets/projects/${projectId}/`);

  return {
    cover: allImages[coverPath],
    gallery: paths.filter((path) => /^\d+$/.test(fileName(path))).map((path) => allImages[path]),
    systemAnalyst: paths.filter((path) => fileName(path).startsWith("analyst-")).map((path) => allImages[path]),
  };
}

// Satu gambar berdasarkan path relatif dari src/assets, contoh: image("certificates/toefa")
export function image(name) {
  const path = Object.keys(allImages).find((key) => key.replace(/\.\w+$/, "") === `../assets/${name}`);
  if (!path) console.error(`[images] gambar tidak ditemukan: src/assets/${name}`);
  return allImages[path];
}

// Semua gambar dalam satu folder, urut angka/nama
export const imagesInFolder = (folder) => imagesIn(folder).map((path) => allImages[path]);
