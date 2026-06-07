import { SERVICE_OVERVIEW_TAGS, type ServiceSpokeLink } from "@/data/service-spoke-links";

export type HomeFeaturedService = {
  title: string;
  description: string;
  href: string;
  image: string;
  category: string;
};

export const HOME_HERO_IMAGE = {
  src: "/images/munyaka-midrand.jpg",
  alt: "Sectional-title and commercial asset maintenance programme in Midrand, Gauteng",
};

export const HOME_VISUAL_STRIP = [
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Concrete spalling and structural repair on a Gauteng commercial façade",
  },
  {
    src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
    alt: "Completed industrial epoxy flooring in a logistics facility",
  },
  {
    src: "/images/painting-body-corporate-estate.jpg",
    alt: "Body corporate exterior painting on a Gauteng estate",
  },
] as const;

export const HOME_AUDIENCES = [
  {
    title: "Body corporates & trustees",
    description:
      "STSMA-aware maintenance, waterproofing, spalling repair, and independent QA documentation for sectional-title AGMs.",
    href: "/solutions/for-body-corporates",
    cta: "Body corporate solutions",
  },
  {
    title: "Developers & engineers",
    description:
      "Practical completion support, manufacturer-backed systems, and verifiable QA files for handover and defects liability.",
    href: "/solutions/for-developers",
    cta: "Developer programmes",
  },
  {
    title: "Homeowners & facilities",
    description:
      "Rising damp diagnostics, roof and balcony waterproofing, and low-VOC interior programmes across Gauteng estates.",
    href: "/solutions/for-homeowners",
    cta: "Residential scopes",
  },
] as const;

export const HOME_HUB_PILLARS: {
  num: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tags: readonly ServiceSpokeLink[];
}[] = [
  {
    num: "01",
    title: "Structural & remedial repairs",
    description:
      "Concrete spalling, crack injection, expansion joints, and protective coatings before any decorative finish.",
    href: "/structural-repairs",
    image: "/images/structural-concrete-spalling-assessment.jpg",
    tags: SERVICE_OVERVIEW_TAGS.structural,
  },
  {
    num: "02",
    title: "Specialized coating systems",
    description:
      "Epoxy and PU floors, hygienic HACCP surfaces, Marmoran walls, and industrial corrosion control.",
    href: "/specialized-coatings",
    image: "/images/coatings-industrial-epoxy-resin-application.jpg",
    tags: SERVICE_OVERVIEW_TAGS.coatings.slice(0, 4),
  },
  {
    num: "03",
    title: "Advanced waterproofing",
    description:
      "Flat roofs, leaking balconies, torch-on and liquid membranes, and basement tanking for Gauteng assets.",
    href: "/waterproofing-services",
    image: "/images/waterproofing-flat-roof-01.jpg",
    tags: SERVICE_OVERVIEW_TAGS.waterproofing,
  },
  {
    num: "04",
    title: "Commercial & high-access painting",
    description:
      "Body corporate, industrial, warehouse, rope access, and high-volume airless programmes with QA reporting.",
    href: "/painting-services",
    image: "/images/painting-industrial-coatings.jpg",
    tags: SERVICE_OVERVIEW_TAGS.painting.slice(0, 4),
  },
];

export const HOME_FEATURED_SERVICES: HomeFeaturedService[] = [
  {
    title: "Concrete spalling repair",
    description: "Breakout, steel passivation, structural mortars, and anti-carbonation finishes.",
    href: "/structural-repairs/concrete-spalling",
    image: "/images/structural-concrete-spalling-repair.jpg",
    category: "Structural",
  },
  {
    title: "Structural crack injection",
    description: "Epoxy and polyurethane injection for dormant and active cracks.",
    href: "/structural-repairs/crack-injection",
    image: "/images/structural-crack-injection-injection.jpg",
    category: "Structural",
  },
  {
    title: "Flat roof waterproofing",
    description: "Torch-on, liquid, and hybrid membranes for podium and flat concrete roofs.",
    href: "/waterproofing/flat-concrete-roofs",
    image: "/images/waterproofing-flat-roof-02.jpg",
    category: "Waterproofing",
  },
  {
    title: "Leaking balcony repair",
    description: "Threshold detailing, screed falls, and liquid membrane renewals.",
    href: "/waterproofing/leaking-balconies",
    image: "/images/waterproofing-flat-roof-03.jpg",
    category: "Waterproofing",
  },
  {
    title: "Industrial epoxy flooring",
    description: "Heavy-duty resin screeds for warehouses, plants, and logistics hubs.",
    href: "/specialized-coatings/industrial-epoxy-flooring",
    image: "/images/coatings-industrial-epoxy-surface-prep.jpg",
    category: "Coatings",
  },
  {
    title: "Hygienic food-grade floors",
    description: "Seamless PU-cement systems with coving for HACCP facilities.",
    href: "/specialized-coatings/hygienic-food-grade",
    image: "/images/coatings-hygienic-food-grade-02.jpg",
    category: "Coatings",
  },
  {
    title: "Body corporate painting",
    description: "Phased exterior programmes with trustee-ready QA documentation.",
    href: "/painting/body-corporate",
    image: "/images/painting-body-corporate-sandton.jpg",
    category: "Painting",
  },
  {
    title: "Industrial & factory painting",
    description: "Corrosion control, production-friendly phasing, and plant coatings.",
    href: "/painting/industrial",
    image: "/images/painting-industrial-corrosion.jpg",
    category: "Painting",
  },
  {
    title: "Rope access painting",
    description: "IRATA-aligned façade work without full scaffold footprint.",
    href: "/access-solutions/rope-access-painting",
    image: "/images/access-solutions-method.png",
    category: "Access",
  },
  {
    title: "Rising damp treatment",
    description: "Chemical DPC injection and salt-resistant replastering.",
    href: "/damp-proofing/rising-damp-treatment",
    image: "/images/damp-rising-damp-injection.jpg",
    category: "Damp proofing",
  },
  {
    title: "Industrial corrosion control",
    description: "Zinc primer, epoxy, and polyurethane stacks for steel assets.",
    href: "/specialized-coatings/industrial-corrosion-control",
    image: "/images/coatings-industrial-corrosion-02.jpg",
    category: "Coatings",
  },
  {
    title: "Warehouse & line marking",
    description: "Interior coatings, 5S colour zones, and SANS yard marking.",
    href: "/painting/warehouse-painting",
    image: "/images/painting-industrial-preparation.jpg",
    category: "Painting",
  },
];

export const HOME_LOCATION_LINKS = [
  { label: "Central Gauteng", href: "/locations/central", blurb: "Sandton, Midrand, Centurion, Pretoria East" },
  { label: "East Rand", href: "/locations/east-rand", blurb: "Boksburg, Kempton Park, Germiston, Benoni" },
  { label: "West Rand", href: "/locations/west-rand", blurb: "Roodepoort, Krugersdorp, damp-prone stock" },
  { label: "South Rand", href: "/locations/south-rand", blurb: "Alberton, estates, sectional-title nodes" },
] as const;
