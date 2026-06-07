export type ServicePageImage = {
  src: string;
  alt: string;
};

export const SERVICE_PAGE_IMAGE_COUNT = 9;

const STRUCTURAL_REPAIRS_PATHS = new Set([
  "/structural-repairs",
  "/structural-repairs/concrete-spalling",
]);

const CRACK_INJECTION_PATHS = new Set(["/structural-repairs/crack-injection"]);

const EXPANSION_JOINT_PATHS = new Set(["/structural-repairs/expansion-joint-sealing"]);

const WALL_CLADDING_PATHS = new Set(["/specialized-coatings/wall-cladding"]);

const SPECIALIZED_COATINGS_PATHS = new Set([
  "/specialized-coatings",
  "/specialized-coatings/industrial-epoxy-flooring",
  "/specialized-coatings/cemcrete-floors",
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

const DAMP_PROOFING_PATHS = new Set([
  "/damp-proofing-services",
  "/damp-proofing/rising-damp-treatment",
]);

const ACCESS_SOLUTIONS_PATHS = new Set([
  "/access-solutions",
  "/access-solutions/rope-access-painting",
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

/** Dedicated nine-slot pool for the wall cladding spoke. */
const WALL_CLADDING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/coatings-wall-cladding-01.jpg",
    alt: "Completed external wall cladding on a Gauteng office block with composite panels",
  },
  {
    src: "/images/coatings-wall-cladding-02.jpg",
    alt: "Finished fibre-cement cladding on a Gauteng townhouse gable end",
  },
  {
    src: "/images/coatings-wall-cladding-03.jpg",
    alt: "Completed cladding on a simple estate entrance feature wall in warm grey",
  },
  {
    src: "/images/coatings-wall-cladding-04.jpg",
    alt: "Completed cladding on a single-storey commercial unit in a Gauteng industrial park",
  },
  {
    src: "/images/coatings-wall-cladding-05.jpg",
    alt: "Finished cladding junction at a window reveal with aluminium trim",
  },
  {
    src: "/images/coatings-wall-cladding-06.jpg",
    alt: "Completed boundary wall cladding with cap coping at a Gauteng estate",
  },
  {
    src: "/images/coatings-wall-cladding-07.jpg",
    alt: "Finished interior feature wall cladding in a commercial reception area",
  },
  {
    src: "/images/coatings-wall-cladding-08.jpg",
    alt: "Completed mixed elevation with off-white cladding on a Gauteng sectional-title building",
  },
  {
    src: "/images/coatings-wall-cladding-09.jpg",
    alt: "Completed cladding elevation on a Gauteng school or community building",
  },
];

/** Dedicated nine-slot pool for the crack injection spoke. */
const CRACK_INJECTION_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-crack-injection-01.jpg",
    alt: "Repaired crack injection patch on a modest Gauteng sectional-title building",
  },
  {
    src: "/images/structural-crack-injection-02.jpg",
    alt: "Crack mapping with chalk marks on a concrete garage column",
  },
  {
    src: "/images/structural-crack-injection-03.jpg",
    alt: "Injection ports along a single vertical crack on a boundary wall",
  },
  {
    src: "/images/structural-crack-injection-04.jpg",
    alt: "Completed injected crack on a balcony soffit with ports filled flush",
  },
  {
    src: "/images/structural-crack-injection-05.jpg",
    alt: "Moisture mark and crack at a modest apartment balcony slab edge",
  },
  {
    src: "/images/structural-crack-injection-06.jpg",
    alt: "Close-up of injection ports on a short workshop floor crack",
  },
  {
    src: "/images/structural-crack-injection-07.jpg",
    alt: "Injection resin and site documentation in a small plant room with capped ports",
  },
  {
    src: "/images/structural-crack-injection-08.jpg",
    alt: "Injection ports along a crack at a single basement parking wall pillar base",
  },
  {
    src: "/images/structural-crack-injection-09.jpg",
    alt: "Completed crack injection on a double garage slab at a Gauteng house",
  },
];

/** Dedicated nine-slot pool for the expansion joint sealing spoke (batch 1–2: slots 0–5). */
const EXPANSION_JOINT_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/structural-expansion-joint-01.jpg",
    alt: "Renewed expansion joint line in a small basement parking area",
  },
  {
    src: "/images/structural-expansion-joint-02.jpg",
    alt: "Worn expansion joint sealant with light arris wear before repair",
  },
  {
    src: "/images/structural-expansion-joint-03.jpg",
    alt: "Fresh saw-cut expansion joint with sealant installation in a small warehouse aisle",
  },
  {
    src: "/images/structural-expansion-joint-04.jpg",
    alt: "Completed expansion joint with flush elastomeric sealant on a parking slab",
  },
  {
    src: "/images/structural-expansion-joint-05.jpg",
    alt: "Renewed expansion joint at a sectional-title podium walkway edge",
  },
  {
    src: "/images/structural-expansion-joint-06.jpg",
    alt: "Aluminium armour angle and sealant bead at a small loading bay joint",
  },
  {
    src: "/images/placeholders/service-image-07.svg",
    alt: "Expansion joint sealing project image 7",
  },
  {
    src: "/images/placeholders/service-image-08.svg",
    alt: "Expansion joint sealing project image 8",
  },
  {
    src: "/images/placeholders/service-image-09.svg",
    alt: "Expansion joint sealing project image 9",
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

/** Shared nine-slot pool for the damp proofing hub and rising-damp spoke. */
const DAMP_PROOFING_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/damp-rising-damp-injection.jpg",
    alt: "Chemical damp-proof course injection at bed joint level in Gauteng masonry",
  },
  {
    src: "/images/damp-rising-damp-diagnosis.jpg",
    alt: "Rising damp diagnosis and moisture profiling on a Gauteng interior wall",
  },
  {
    src: "/images/damp-rising-damp-replaster.jpg",
    alt: "Salt-retardant replastering after rising damp remediation",
  },
  {
    src: "/images/waterproofing-basement-tanking-01.jpg",
    alt: "Below-ground moisture assessment related to damp and tanking programmes",
  },
  {
    src: "/images/waterproofing-basement-tanking-02.jpg",
    alt: "Cementitious tanking application on a below-ground structure",
  },
  {
    src: "/images/waterproofing-basement-tanking-03.jpg",
    alt: "Completed basement tanking handover with protection screed",
  },
  {
    src: "/images/waterproofing-leaking-balcony-01.jpg",
    alt: "Moisture assessment at a slab threshold related to ingress diagnostics",
  },
  {
    src: "/images/waterproofing-leaking-balcony-02.jpg",
    alt: "Threshold breakout and membrane renewal at a leaking slab edge",
  },
  {
    src: "/images/waterproofing-leaking-balcony-03.jpg",
    alt: "Completed waterproofing handover after moisture remediation",
  },
];

/** Shared nine-slot pool for the access solutions hub and rope-access spoke. */
const ACCESS_SOLUTIONS_IMAGE_POOL: readonly ServicePageImage[] = [
  {
    src: "/images/access-solutions-method.jpg",
    alt: "IRATA rope access rigging on a Gauteng high-rise façade",
  },
  {
    src: "/images/access-solutions-compliance.jpg",
    alt: "Rope access safety equipment and compliance documentation on site",
  },
  {
    src: "/images/access-solutions-coordination.jpg",
    alt: "Coordinated rope access and remedial staging on a multi-storey structure",
  },
  {
    src: "/images/painting-body-corporate-sandton.jpg",
    alt: "High-rise sectional-title tower suited to rope access programmes",
  },
  {
    src: "/images/structural-concrete-spalling-assessment.jpg",
    alt: "Façade spalling assessment often sequenced with rope access",
  },
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Completed spalling repair on an elevated façade element",
  },
  {
    src: "/images/painting-body-corporate-qa.jpg",
    alt: "High-access painting programme with independent QA documentation",
  },
  {
    src: "/images/structural-crack-injection-injection.jpg",
    alt: "Structural crack injection on concrete elements accessed at height",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Parapet and flat roof detailing accessed via rope or MEWP programmes",
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
  if (CRACK_INJECTION_PATHS.has(path)) {
    return [...CRACK_INJECTION_IMAGE_POOL];
  }

  if (EXPANSION_JOINT_PATHS.has(path)) {
    return [...EXPANSION_JOINT_IMAGE_POOL];
  }

  if (STRUCTURAL_REPAIRS_PATHS.has(path)) {
    return [...STRUCTURAL_REPAIRS_IMAGE_POOL];
  }

  if (WALL_CLADDING_PATHS.has(path)) {
    return [...WALL_CLADDING_IMAGE_POOL];
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

  if (DAMP_PROOFING_PATHS.has(path)) {
    return [...DAMP_PROOFING_IMAGE_POOL];
  }

  if (ACCESS_SOLUTIONS_PATHS.has(path)) {
    return [...ACCESS_SOLUTIONS_IMAGE_POOL];
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
