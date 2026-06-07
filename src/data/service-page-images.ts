export type ServicePageImage = {
  src: string;
  alt: string;
};

export const SERVICE_PAGE_IMAGE_COUNT = 9;

const STRUCTURAL_REPAIRS_PATHS = new Set([
  "/structural-repairs",
  "/structural-repairs/concrete-spalling",
  "/structural-repairs/crack-injection",
  "/structural-repairs/expansion-joint-sealing",
]);

const SPECIALIZED_COATINGS_PATHS = new Set([
  "/specialized-coatings",
  "/specialized-coatings/industrial-epoxy-flooring",
  "/specialized-coatings/cemcrete-floors",
  "/specialized-coatings/wall-cladding",
  "/specialized-coatings/cemcrete-external-walls",
  "/specialized-coatings/hygienic-food-grade",
  "/specialized-coatings/marmoran-wall-systems",
  "/specialized-coatings/industrial-corrosion-control",
]);

/** Shared nine-slot pool for the structural repairs hub and spokes. */
const STRUCTURAL_REPAIRS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Completed concrete spalling repair with structural mortar on a Gauteng façade",
  },
  {
    src: "/images/structural-concrete-spalling-assessment.jpg",
    alt: "Concrete spalling assessment and hammer testing on a Gauteng high-rise",
  },
  {
    src: "/images/structural-crack-injection-injection.jpg",
    alt: "Epoxy crack injection with ports on a Gauteng commercial concrete element",
  },
  {
    src: "/images/structural-crack-injection-qa.jpg",
    alt: "Structural crack injection QA documentation on a Gauteng commercial asset",
  },
  {
    src: "/images/structural-concrete-spalling-handover.jpg",
    alt: "Completed concrete spalling repair with protective anti-carbonation finish",
  },
  {
    src: "/images/structural-crack-injection-assessment.jpg",
    alt: "Structural crack mapping and injection assessment on a Gauteng concrete slab",
  },
  {
    src: "/images/structural-expansion-joint-assessment.jpg",
    alt: "Expansion joint condition assessment on a Gauteng parking or podium slab",
  },
  {
    src: "/images/structural-expansion-joint-installation.jpg",
    alt: "Traffic-rated expansion joint rebuild with sealant and armour detailing",
  },
  {
    src: "/images/structural-expansion-joint-finish.jpg",
    alt: "Completed expansion joint sealing ready for traffic reopening",
  },
];

/** Shared nine-slot pool for the specialized coatings hub and spokes. */
const SPECIALIZED_COATINGS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
    alt: "Completed industrial epoxy flooring in a Gauteng logistics warehouse",
  },
  {
    src: "/images/coatings-industrial-epoxy-surface-prep.jpg",
    alt: "Diamond grinding and surface preparation for industrial epoxy flooring",
  },
  {
    src: "/images/coatings-industrial-epoxy-resin-application.jpg",
    alt: "Multi-coat epoxy resin flooring application with controlled film build",
  },
  {
    src: "/images/coatings-hygienic-food-grade-02.jpg",
    alt: "Completed hygienic PU-cement floor with coving in a food production area",
  },
  {
    src: "/images/coatings-industrial-corrosion-02.jpg",
    alt: "Completed industrial corrosion protection on pipe bridge steelwork",
  },
  {
    src: "/images/coatings-hygienic-food-grade-01.jpg",
    alt: "Hygienic floor and wall preparation before PU-cement application",
  },
  {
    src: "/images/coatings-industrial-corrosion-01.jpg",
    alt: "Industrial corrosion assessment on steel structures in Gauteng",
  },
  {
    src: "/images/coatings-marmoran-wall-02.jpg",
    alt: "Premium textured wall coating application on a Gauteng façade",
  },
  {
    src: "/images/coatings-marmoran-wall-03.jpg",
    alt: "Completed Marmoran-style decorative wall finish on an estate elevation",
  },
];

const SERVICE_IMAGE_PLACEHOLDERS: readonly ServicePageImage[] = [
  { src: "/images/placeholders/service-image-01.svg", alt: "Placeholder service image slot 1" },
  { src: "/images/placeholders/service-image-02.svg", alt: "Placeholder service image slot 2" },
  { src: "/images/placeholders/service-image-03.svg", alt: "Placeholder service image slot 3" },
  { src: "/images/placeholders/service-image-04.svg", alt: "Placeholder service image slot 4" },
  { src: "/images/placeholders/service-image-05.svg", alt: "Placeholder service image slot 5" },
  { src: "/images/placeholders/service-image-06.svg", alt: "Placeholder service image slot 6" },
  { src: "/images/placeholders/service-image-07.svg", alt: "Placeholder service image slot 7" },
  { src: "/images/placeholders/service-image-08.svg", alt: "Placeholder service image slot 8" },
  { src: "/images/placeholders/service-image-09.svg", alt: "Placeholder service image slot 9" },
];

function serviceLabelFromPath(path: string): string {
  const slug = path.split("/").filter(Boolean).pop() ?? "service";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function dedupeImages(images: readonly ServicePageImage[]): ServicePageImage[] {
  const seen = new Set<string>();
  const unique: ServicePageImage[] = [];

  for (const image of images) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    unique.push(image);
  }

  return unique;
}

export function getServicePageImages(
  path: string,
  seedImages: readonly ServicePageImage[] = [],
): ServicePageImage[] {
  if (STRUCTURAL_REPAIRS_PATHS.has(path)) {
    return [...STRUCTURAL_REPAIRS_IMAGE_POOL];
  }

  if (SPECIALIZED_COATINGS_PATHS.has(path)) {
    return [...SPECIALIZED_COATINGS_IMAGE_POOL];
  }

  const serviceLabel = serviceLabelFromPath(path);
  const placeholders = SERVICE_IMAGE_PLACEHOLDERS.map((image, index) => ({
    src: image.src,
    alt: `${serviceLabel} project image ${index + 1}`,
  }));

  const merged = dedupeImages([...seedImages, ...placeholders]);

  while (merged.length < SERVICE_PAGE_IMAGE_COUNT) {
    const filler = placeholders[merged.length % placeholders.length];
    merged.push({
      ...filler,
      alt: `${serviceLabel} project image ${merged.length + 1}`,
    });
  }

  return merged.slice(0, SERVICE_PAGE_IMAGE_COUNT);
}
