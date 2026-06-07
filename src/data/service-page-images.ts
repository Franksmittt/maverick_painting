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

const WATERPROOFING_PATHS = new Set([
  "/waterproofing-services",
  "/waterproofing/flat-concrete-roofs",
  "/waterproofing/leaking-balconies",
  "/waterproofing/basement-tanking",
  "/waterproofing/torch-on-liquid-membranes",
]);

const PAINTING_SERVICES_PATHS = new Set([
  "/painting-services",
  "/painting/body-corporate",
  "/painting/industrial",
  "/painting/roof-painting",
  "/painting/stucco-wall-coatings",
  "/painting/commercial-painting",
  "/painting/interior-painting",
  "/painting/internal-walls",
  "/painting/external-walls",
  "/painting/warehouse-painting",
  "/painting/high-volume-commercial-painting",
  "/painting/parking-garage-painting",
  "/painting/road-marking",
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

/** Shared nine-slot pool for the waterproofing hub and spokes. */
const WATERPROOFING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/waterproofing-flat-roof-02.jpg",
    alt: "Completed liquid-applied waterproofing membrane on a Gauteng flat roof podium",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Completed torch-on waterproofing membrane on a flat concrete roof in Gauteng",
  },
  {
    src: "/images/waterproofing-flat-roof-03.jpg",
    alt: "Completed balcony waterproofing remediation with tile reinstatement in Gauteng",
  },
  {
    src: "/images/waterproofing-leaking-balcony-01.jpg",
    alt: "Leaking balcony assessment and moisture tracing on a sectional-title unit",
  },
  {
    src: "/images/waterproofing-leaking-balcony-02.jpg",
    alt: "Balcony threshold breakout and membrane renewal at a leaking slab edge",
  },
  {
    src: "/images/waterproofing-leaking-balcony-03.jpg",
    alt: "Completed leaking balcony waterproofing with documented handover",
  },
  {
    src: "/images/waterproofing-basement-tanking-01.jpg",
    alt: "Basement tanking assessment for hydrostatic pressure and active leak paths",
  },
  {
    src: "/images/waterproofing-basement-tanking-02.jpg",
    alt: "Crystalline or cementitious tanking application on a below-ground structure",
  },
  {
    src: "/images/waterproofing-basement-tanking-03.jpg",
    alt: "Completed basement tanking handover with protection screed and monitoring notes",
  },
];

/** Shared nine-slot pool for the painting services hub and spokes. */
const PAINTING_SERVICES_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/painting-industrial-coatings.jpg",
    alt: "Completed industrial protective coating on steel structures at a Gauteng plant",
  },
  {
    src: "/images/painting-body-corporate-sandton.jpg",
    alt: "Phased exterior repainting of a Sandton sectional-title tower",
  },
  {
    src: "/images/painting-body-corporate-estate.jpg",
    alt: "Townhouse estate exterior painting in Gauteng",
  },
  {
    src: "/images/painting-industrial-corrosion.jpg",
    alt: "Industrial corrosion control coatings on silos and plant exteriors",
  },
  {
    src: "/images/painting-industrial-preparation.jpg",
    alt: "Industrial surface preparation ahead of protective coating application",
  },
  {
    src: "/images/painting-body-corporate-qa.jpg",
    alt: "Body corporate painting programme with QA documentation",
  },
  {
    src: "/images/painting-commercial-healthcare.jpg",
    alt: "Healthcare interior painting with containment and low-VOC coatings",
  },
  {
    src: "/images/painting-commercial-campus.jpg",
    alt: "Corporate campus interior repaint with phased weekend programmes",
  },
  {
    src: "/images/painting-commercial-retail.jpg",
    alt: "Retail commercial painting completed during night shifts",
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

  if (WATERPROOFING_PATHS.has(path)) {
    return [...WATERPROOFING_IMAGE_POOL];
  }

  if (PAINTING_SERVICES_PATHS.has(path)) {
    return [...PAINTING_SERVICES_IMAGE_POOL];
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
