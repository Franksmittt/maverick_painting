import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "gal");
const destDir = path.join(root, "public", "images", "gallery");
const outFile = path.join(root, "src", "data", "gallery-images.ts");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

if (!fs.existsSync(srcDir)) {
  console.error("gal/ folder not found");
  process.exit(1);
}

fs.mkdirSync(destDir, { recursive: true });

const files = fs
  .readdirSync(srcDir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort();

const shuffled = shuffle(files);

const entries = shuffled.map((file, index) => {
  const ext = path.extname(file).toLowerCase() === ".jpeg" ? ".jpg" : path.extname(file).toLowerCase();
  const destName = `maverick-gallery-${String(index + 1).padStart(2, "0")}${ext}`;
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName));
  return {
    src: `/images/gallery/${destName}`,
    alt: `Maverick Painting project work — Gauteng ${index + 1}`,
  };
});

const contents = `/** Auto-generated gallery image list (shuffled). Re-run scripts/setup-gallery.mjs to refresh. */
export type GalleryImage = { src: string; alt: string };

export const GALLERY_IMAGES: readonly GalleryImage[] = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(outFile, contents);
console.log(`Copied ${entries.length} images to public/images/gallery/`);
