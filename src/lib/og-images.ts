import { CITY_HERO_IMAGES, DEFAULT_CITY_HERO } from "@/data/locations-page-content";
import { locationServiceMatrix } from "@/data/location-service-matrix";
import { serviceLocations } from "@/data/locations";
import { projectCaseStudies } from "@/data/projects";
import { siteConfig } from "@/lib/seo";

/** Per-route Open Graph images (absolute URLs resolved in metadata.ts). */
const OG_BY_PATH: Record<string, string> = {
  "/": siteConfig.defaultOgImage,
  "/about-us": "/images/painting-body-corporate-qa.jpg",
  "/services": "/images/painting-industrial-coatings.jpg",
  "/contact": "/images/access-solutions-compliance.jpg",
  "/gallery": "/images/gallery/maverick-gallery-01.jpg",
  "/projects": "/images/the-blyde-pretorria.jpg",
  "/accreditations": "/images/access-solutions-compliance.jpg",
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
  "/locations/central": "/images/painting-commercial-campus.jpg",
  "/locations/east-rand": "/images/eastlands-benoni.jpg",
  "/locations/west-rand": "/images/greencreek-estate.jpg",
  "/locations/south-rand": "/images/painting-body-corporate-estate.jpg",
  "/blog": "/images/eastlands-benoni.jpg",
  "/blog/waterproofing": "/images/waterproofing-flat-roof-02.jpg",
  "/blog/industrial": "/images/painting-industrial-01.jpg",
  "/blog/structural-remediation": "/images/structural-concrete-spalling-01.jpg",
};

function getOgImageForSpokePath(spokePath: string): string {
  return OG_BY_PATH[spokePath] ?? siteConfig.defaultOgImage;
}

const CITY_OG: Record<string, string> = Object.fromEntries(
  serviceLocations.map((loc) => [
    `/locations/${loc.slug}`,
    (CITY_HERO_IMAGES[loc.slug] ?? DEFAULT_CITY_HERO).src,
  ]),
);

const MATRIX_OG: Record<string, string> = Object.fromEntries(
  locationServiceMatrix.map((entry) => [
    `/locations/${entry.citySlug}/${entry.serviceSlug}`,
    getOgImageForSpokePath(entry.spokePath),
  ]),
);

const PROJECT_OG: Record<string, string> = Object.fromEntries(
  projectCaseStudies.map((project) => [
    `/projects/${project.slug}`,
    project.image ?? siteConfig.defaultOgImage,
  ]),
);

export function getOgImageForPath(path: string): string {
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return (
    OG_BY_PATH[normalized] ??
    CITY_OG[normalized] ??
    MATRIX_OG[normalized] ??
    PROJECT_OG[normalized] ??
    siteConfig.defaultOgImage
  );
}
