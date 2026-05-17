import { siteConfig } from "@/lib/seo";

/** Per-route Open Graph images (absolute URLs resolved in metadata.ts). */
const OG_BY_PATH: Record<string, string> = {
  "/": siteConfig.defaultOgImage,
  "/structural-repairs": "/images/eastlands-benoni.jpg",
  "/waterproofing-services": "/images/munyaka-midrand.jpg",
  "/damp-proofing-services": "/images/the-blyde-pretorria.jpg",
  "/specialized-coatings": "/images/painting-industrial-coatings.jpg",
  "/painting-services": "/images/munyaka-midrand.jpg",
  "/access-solutions": "/images/access-solutions-method.png",
  "/structural-repairs/concrete-spalling": "/images/gallery/maverick-gallery-01.jpg",
  "/structural-repairs/crack-injection": "/images/gallery/maverick-gallery-09.jpg",
  "/structural-repairs/expansion-joint-sealing": "/images/gallery/maverick-gallery-09.jpg",
  "/waterproofing/leaking-balconies": "/images/gallery/maverick-gallery-07.jpg",
  "/waterproofing/basement-tanking": "/images/gallery/maverick-gallery-02.jpg",
  "/waterproofing/flat-concrete-roofs": "/images/gallery/maverick-gallery-02.jpg",
  "/waterproofing/torch-on-liquid-membranes": "/images/gallery/maverick-gallery-02.jpg",
  "/damp-proofing/rising-damp-treatment": "/images/gallery/maverick-gallery-06.jpg",
  "/specialized-coatings/industrial-epoxy-flooring": "/images/gallery/maverick-gallery-03.jpg",
  "/specialized-coatings/hygienic-food-grade": "/images/coatings-hygienic-food-grade-01.jpg",
  "/specialized-coatings/marmoran-wall-systems": "/images/munyaka-midrand.jpg",
  "/specialized-coatings/industrial-corrosion-control": "/images/painting-industrial-corrosion.jpg",
  "/painting/body-corporate": "/images/gallery/maverick-gallery-04.jpg",
  "/painting/industrial": "/images/painting-industrial-coatings.jpg",
  "/painting/commercial-painting": "/images/munyaka-midrand.jpg",
  "/painting/roof-painting": "/images/gallery/maverick-gallery-02.jpg",
  "/painting/parking-garage-painting": "/images/gallery/maverick-gallery-01.jpg",
  "/painting/warehouse-painting": "/images/painting-industrial-preparation.jpg",
  "/painting/road-marking": "/images/gallery/maverick-gallery-08.jpg",
  "/access-solutions/rope-access-painting": "/images/gallery/maverick-gallery-05.jpg",
  "/solutions/for-body-corporates": "/images/gallery/maverick-gallery-04.jpg",
  "/solutions/for-developers": "/images/the-blyde-pretorria.jpg",
  "/solutions/for-homeowners": "/images/munyaka-midrand.jpg",
  "/our-process-independent-qa": "/images/access-solutions-compliance.png",
  "/locations": "/images/munyaka-midrand.jpg",
  "/locations/sandton": "/images/gallery/maverick-gallery-05.jpg",
  "/locations/isando": "/images/gallery/maverick-gallery-08.jpg",
  "/blog": "/images/eastlands-benoni.jpg",
};

export function getOgImageForPath(path: string): string {
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return OG_BY_PATH[normalized] ?? siteConfig.defaultOgImage;
}
