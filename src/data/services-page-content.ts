import {
  SERVICE_OVERVIEW_TAGS,
  type ServiceSpokeLink,
} from "@/data/service-spoke-links";
import type { HomeFeaturedService } from "@/data/home-page-content";

export const SERVICES_ADDITIONAL_HUBS = [
  {
    title: "Damp proofing & rising damp",
    description:
      "Chemical DPC injection, salt-resistant replastering, and moisture diagnostics before decorative finishes.",
    href: "/damp-proofing-services",
    image: "/images/damp-rising-damp-diagnosis.jpg",
    tags: [
      { label: "Rising damp treatment", href: "/damp-proofing/rising-damp-treatment" },
      ...SERVICE_OVERVIEW_TAGS.structural.filter((t) => t.href.includes("damp")),
    ],
  },
  {
    title: "Access solutions",
    description:
      "IRATA rope access, scaffold coordination, and hybrid programmes for high-rise façades and towers.",
    href: "/access-solutions",
    image: "/images/access-solutions-method.jpg",
    tags: [
      { label: "Rope access painting", href: "/access-solutions/rope-access-painting" },
      { label: "Body corporate façades", href: "/painting/body-corporate" },
    ],
  },
] as const;

export const SERVICES_VISUAL_STRIP = [
  {
    src: "/images/structural-crack-injection-qa.jpg",
    alt: "Structural crack injection QA documentation on a Gauteng commercial asset",
  },
  {
    src: "/images/coatings-hygienic-food-grade-02.jpg",
    alt: "Hygienic resin flooring installation in a food-grade facility",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Flat roof waterproofing programme on a Gauteng commercial building",
  },
] as const;

const SPOKE_CATEGORY: Record<
  keyof typeof SERVICE_OVERVIEW_TAGS,
  HomeFeaturedService["category"]
> = {
  structural: "Structural",
  coatings: "Coatings",
  waterproofing: "Waterproofing",
  painting: "Painting",
};

const SPOKE_IMAGES: Record<string, string> = {
  "/structural-repairs/concrete-spalling": "/images/structural-concrete-spalling-repair.jpg",
  "/structural-repairs/crack-injection": "/images/structural-crack-injection-injection.jpg",
  "/structural-repairs/expansion-joint-sealing": "/images/structural-expansion-joint-01.jpg",
  "/damp-proofing/rising-damp-treatment": "/images/damp-rising-damp-injection.jpg",
  "/specialized-coatings/industrial-epoxy-flooring": "/images/coatings-industrial-epoxy-completed-floor.jpg",
  "/specialized-coatings/cemcrete-floors": "/images/coatings-cemcrete-floors-01.jpg",
  "/specialized-coatings/wall-cladding": "/images/coatings-wall-cladding-01.jpg",
  "/specialized-coatings/cemcrete-external-walls": "/images/coatings-cemcrete-external-walls-01.jpg",
  "/specialized-coatings/hygienic-food-grade": "/images/coatings-hygienic-food-grade-02.jpg",
  "/specialized-coatings/marmoran-wall-systems": "/images/coatings-marmoran-wall-02.jpg",
  "/specialized-coatings/industrial-corrosion-control": "/images/coatings-industrial-corrosion-02.jpg",
  "/waterproofing/flat-concrete-roofs": "/images/waterproofing-flat-roof-02.jpg",
  "/waterproofing/leaking-balconies": "/images/waterproofing-leaking-balcony-04.jpg",
  "/waterproofing/torch-on-liquid-membranes": "/images/waterproofing-torch-on-liquid-01.jpg",
  "/waterproofing/basement-tanking": "/images/waterproofing-basement-tanking-01.jpg",
  "/painting/body-corporate": "/images/painting-body-corporate-01.jpg",
  "/painting/industrial": "/images/painting-industrial-01.jpg",
  "/painting/commercial-painting": "/images/painting-commercial-01.jpg",
  "/painting/interior-painting": "/images/painting-commercial-08.jpg",
  "/painting/internal-walls": "/images/painting-commercial-05.jpg",
  "/painting/external-walls": "/images/painting-body-corporate-sandton.jpg",
  "/painting/high-volume-commercial-painting": "/images/painting-industrial-coatings.jpg",
  "/access-solutions/rope-access-painting": "/images/access-solutions-method.jpg",
  "/painting/roof-painting": "/images/waterproofing-flat-roof-03.jpg",
  "/painting/warehouse-painting": "/images/painting-industrial-03.jpg",
  "/painting/parking-garage-painting": "/images/painting-parking-garage-01.jpg",
  "/painting/stucco-wall-coatings": "/images/painting-stucco-01.jpg",
  "/painting/road-marking": "/images/painting-industrial-06.jpg",
};

const SPOKE_DESCRIPTIONS: Record<string, string> = {
  "/structural-repairs/concrete-spalling":
    "Breakout, steel passivation, structural mortars, and anti-carbonation finishes.",
  "/structural-repairs/crack-injection":
    "Epoxy and polyurethane injection for dormant and active cracks.",
  "/structural-repairs/expansion-joint-sealing":
    "Traffic-rated joint rebuilds, sealant, and armour detailing on decks and slabs.",
  "/damp-proofing/rising-damp-treatment":
    "Chemical DPC injection and salt-resistant replastering at ground-floor zones.",
  "/specialized-coatings/industrial-epoxy-flooring":
    "Heavy-duty resin screeds for warehouses, plants, and logistics hubs.",
  "/specialized-coatings/cemcrete-floors":
    "Decorative seamless cement floors for residential and light commercial interiors.",
  "/specialized-coatings/wall-cladding":
    "External fibre-cement and composite cladding on estates and commercial units.",
  "/specialized-coatings/cemcrete-external-walls":
    "Decorative cementitious finishes on homes, boundary walls, and garden features.",
  "/specialized-coatings/hygienic-food-grade":
    "Seamless PU-cement systems with coving for HACCP facilities.",
  "/specialized-coatings/marmoran-wall-systems":
    "Premium textured Marmoran-style decorative wall systems.",
  "/specialized-coatings/industrial-corrosion-control":
    "Zinc primer, epoxy, and polyurethane stacks for steel assets.",
  "/waterproofing/flat-concrete-roofs":
    "Torch-on, liquid, and hybrid membranes for podium and flat concrete roofs.",
  "/waterproofing/leaking-balconies":
    "Threshold detailing, screed falls, and liquid membrane renewals.",
  "/waterproofing/torch-on-liquid-membranes":
    "Torch-on and liquid-applied membrane renewals on flat slabs.",
  "/waterproofing/basement-tanking":
    "Cementitious and negative-side tanking for basement parking and lift pits.",
  "/painting/body-corporate":
    "Phased exterior programmes with trustee-ready QA documentation.",
  "/painting/industrial":
    "Corrosion control, production-friendly phasing, and plant coatings.",
  "/painting/commercial-painting":
    "Low-VOC and hygienic coatings for offices, clinics, and retail.",
  "/painting/interior-painting":
    "Dustless preparation and low-VOC systems for occupied interiors.",
  "/painting/internal-walls":
    "Wall repairs, skim preparation, and feature finishes inside homes and offices.",
  "/painting/external-walls":
    "Breathable and elastomeric exterior wall coatings with façade access.",
  "/painting/high-volume-commercial-painting":
    "HEA airless spray for warehouses, logistics hubs, and large façades.",
  "/access-solutions/rope-access-painting":
    "IRATA-aligned façade work without full scaffold footprint.",
  "/painting/roof-painting":
    "Heat-reflective coatings and membrane-compatible roof protection courses.",
  "/painting/warehouse-painting":
    "Industrial interior coatings and production-friendly phasing for logistics sites.",
  "/painting/parking-garage-painting":
    "Chloride-aware deck prep and traffic-rated coatings for parking structures.",
  "/painting/stucco-wall-coatings":
    "Interior and exterior stucco, elastomeric crack-defense, and textured wall finishes.",
  "/painting/road-marking":
    "SANS-aligned yard marking, MMA cold plastic, and traffic paints.",
};

function spokeToFeatured(
  category: keyof typeof SERVICE_OVERVIEW_TAGS,
  tag: ServiceSpokeLink,
): HomeFeaturedService {
  return {
    title: tag.label,
    description:
      SPOKE_DESCRIPTIONS[tag.href] ??
      `Specialist ${tag.label.toLowerCase()} programmes across Gauteng.`,
    href: tag.href,
    image: SPOKE_IMAGES[tag.href] ?? "/images/munyaka-midrand.jpg",
    category: SPOKE_CATEGORY[category],
  };
}

/** Every spoke linked from SERVICE_OVERVIEW_TAGS — used on /services only. */
export const SERVICES_ALL_SPOKES: HomeFeaturedService[] = (
  Object.keys(SERVICE_OVERVIEW_TAGS) as Array<keyof typeof SERVICE_OVERVIEW_TAGS>
).flatMap((category) =>
  SERVICE_OVERVIEW_TAGS[category].map((tag) => spokeToFeatured(category, tag)),
);
