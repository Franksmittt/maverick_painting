import { siteConfig } from "@/lib/seo";

/** Per-route Open Graph images (absolute URLs resolved in metadata.ts). */
const OG_BY_PATH: Record<string, string> = {
  "/": siteConfig.defaultOgImage,
  "/structural-repairs": "/images/eastlands-benoni.jpg",
  "/waterproofing-services": "/images/munyaka-midrand.jpg",
  "/damp-proofing-services": "/images/the-blyde-pretorria.jpg",
  "/specialized-coatings": "/images/painting-industrial-coatings.jpg",
  "/painting-services": "/images/munyaka-midrand.jpg",
  "/access-solutions": "/images/access-solutions-method.jpg",
  "/structural-repairs/concrete-spalling": "/images/structural-concrete-spalling-01.jpg",
  "/structural-repairs/crack-injection": "/images/structural-crack-injection-01.jpg",
  "/structural-repairs/expansion-joint-sealing": "/images/structural-expansion-joint-01.jpg",
  "/waterproofing/leaking-balconies": "/images/waterproofing-leaking-balcony-04.jpg",
  "/waterproofing/basement-tanking": "/images/waterproofing-basement-tanking-01.jpg",
  "/waterproofing/flat-concrete-roofs": "/images/waterproofing-flat-roof-02.jpg",
  "/waterproofing/torch-on-liquid-membranes": "/images/waterproofing-torch-on-liquid-01.jpg",
  "/damp-proofing/rising-damp-treatment": "/images/gallery/maverick-gallery-06.jpg",
  "/specialized-coatings/industrial-epoxy-flooring": "/images/coatings-industrial-epoxy-completed-floor.jpg",
  "/specialized-coatings/cemcrete-floors": "/images/coatings-cemcrete-floors-01.jpg",
  "/specialized-coatings/wall-cladding": "/images/coatings-wall-cladding-01.jpg",
  "/specialized-coatings/cemcrete-external-walls": "/images/coatings-cemcrete-external-walls-01.jpg",
  "/specialized-coatings/hygienic-food-grade": "/images/coatings-hygienic-food-grade-01.jpg",
  "/specialized-coatings/marmoran-wall-systems": "/images/coatings-marmoran-wall-01.jpg",
  "/specialized-coatings/industrial-corrosion-control": "/images/coatings-industrial-corrosion-01.jpg",
  "/painting/body-corporate": "/images/painting-body-corporate-01.jpg",
  "/painting/industrial": "/images/painting-industrial-01.jpg",
  "/painting/commercial-painting": "/images/painting-commercial-01.jpg",
  "/painting/stucco-wall-coatings": "/images/painting-stucco-01.jpg",
  "/painting/roof-painting": "/images/painting-roof-painting-01.jpg",
  "/painting/parking-garage-painting": "/images/painting-parking-garage-01.jpg",
  "/painting/interior-painting": "/images/painting-interior-01.jpg",
  "/painting/high-volume-commercial-painting": "/images/painting-high-volume-commercial-01.jpg",
  "/painting/warehouse-painting": "/images/painting-warehouse-01.jpg",
  "/painting/internal-walls": "/images/painting-internal-walls-01.jpg",
  "/painting/external-walls": "/images/painting-external-walls-01.jpg",
  "/painting/road-marking": "/images/painting-road-marking-01.jpg",
  "/access-solutions/rope-access-painting": "/images/access-rope-access-01.jpg",
  "/solutions/for-body-corporates": "/images/gallery/maverick-gallery-04.jpg",
  "/solutions/for-developers": "/images/the-blyde-pretorria.jpg",
  "/solutions/for-homeowners": "/images/munyaka-midrand.jpg",
  "/our-process-independent-qa": "/images/access-solutions-compliance.jpg",
  "/locations": "/images/munyaka-midrand.jpg",
  "/locations/sandton": "/images/gallery/maverick-gallery-05.jpg",
  "/locations/isando": "/images/gallery/maverick-gallery-08.jpg",
  "/blog": "/images/eastlands-benoni.jpg",
};

export function getOgImageForPath(path: string): string {
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return OG_BY_PATH[normalized] ?? siteConfig.defaultOgImage;
}
