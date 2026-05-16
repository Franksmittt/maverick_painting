import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outFile = path.join(root, "src", "data", "gallery-images.ts");

const altTemplates = [
  "Concrete spalling repair and rebar passivation on a Gauteng parking structure",
  "Torch-on flat roof waterproofing with UV protection course on a commercial building",
  "Industrial epoxy flooring with integral coving in a food-processing facility",
  "Body corporate exterior painting programme on a sectional-title tower",
  "IRATA rope access façade painting on a high-rise building in Sandton",
  "Chemical rising damp injection and salt-retardant replastering on a townhouse",
  "Leaking balcony waterproofing detailing at a sectional-title podium",
  "SANS-compliant warehouse line marking and traffic demarcation in Isando",
  "Expansion joint sealing on a logistics warehouse floor slab",
  "HACCP hygienic polyurethane floor coating in an abattoir wash bay",
  "Structural epoxy crack injection on a commercial concrete slab",
  "Commercial interior low-VOC painting in a healthcare facility",
  "Industrial corrosion control coating on structural steel pipe racks",
  "Marmoran textured wall coating on a luxury estate home",
  "Basement negative-side crystalline tanking in a West Rand property",
  "Parking garage structural mortar repair before protective topcoat",
  "HEA airless spray painting on a warehouse tilt-up panel field",
  "Roof tile restoration and heat-reflective coating on a residential estate",
];

const galleryDir = path.join(root, "public", "images", "gallery");
const files = fs
  .readdirSync(galleryDir)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort();

const entries = files.map((file, index) => ({
  src: `/images/gallery/${file}`,
  alt: altTemplates[index % altTemplates.length],
}));

const contents = `/** Gallery images with SEO-descriptive alt text. Re-run scripts/update-gallery-alts.mjs to refresh. */
export type GalleryImage = { src: string; alt: string };

export const GALLERY_IMAGES: readonly GalleryImage[] = ${JSON.stringify(entries, null, 2)};
`;

fs.writeFileSync(outFile, contents);
console.log(`Updated ${entries.length} gallery alt texts.`);
