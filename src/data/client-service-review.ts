/** Services currently published on the site — used by the client review form. */

export type ReviewService = {
  id: string;
  name: string;
  path: string;
};

export type ReviewCategory = {
  id: string;
  name: string;
  hubPath: string;
  services: ReviewService[];
};

export const REVIEW_SERVICE_CATEGORIES: ReviewCategory[] = [
  {
    id: "structural-repairs",
    name: "Structural repairs",
    hubPath: "/structural-repairs",
    services: [
      {
        id: "concrete-spalling",
        name: "Concrete Spalling Repair",
        path: "/structural-repairs/concrete-spalling",
      },
      {
        id: "crack-injection",
        name: "Structural Crack Injection",
        path: "/structural-repairs/crack-injection",
      },
      {
        id: "expansion-joint-sealing",
        name: "Expansion Joint Sealing",
        path: "/structural-repairs/expansion-joint-sealing",
      },
    ],
  },
  {
    id: "damp-proofing",
    name: "Damp proofing",
    hubPath: "/damp-proofing-services",
    services: [
      {
        id: "rising-damp-treatment",
        name: "Rising Damp Treatment",
        path: "/damp-proofing/rising-damp-treatment",
      },
    ],
  },
  {
    id: "waterproofing",
    name: "Waterproofing",
    hubPath: "/waterproofing-services",
    services: [
      {
        id: "flat-concrete-roofs",
        name: "Flat Concrete Roof Systems",
        path: "/waterproofing/flat-concrete-roofs",
      },
      {
        id: "leaking-balconies",
        name: "Leaking Balcony Repair",
        path: "/waterproofing/leaking-balconies",
      },
      {
        id: "torch-on-liquid-membranes",
        name: "Torch-On & Liquid Membranes",
        path: "/waterproofing/torch-on-liquid-membranes",
      },
      {
        id: "basement-tanking",
        name: "Basement Waterproofing",
        path: "/waterproofing/basement-tanking",
      },
    ],
  },
  {
    id: "specialized-coatings",
    name: "Specialized coatings",
    hubPath: "/specialized-coatings",
    services: [
      {
        id: "industrial-epoxy-flooring",
        name: "Epoxy Floors & PU Flooring",
        path: "/specialized-coatings/industrial-epoxy-flooring",
      },
      {
        id: "cemcrete-floors",
        name: "Cemcrete Floors",
        path: "/specialized-coatings/cemcrete-floors",
      },
      {
        id: "wall-cladding",
        name: "Wall Cladding",
        path: "/specialized-coatings/wall-cladding",
      },
      {
        id: "cemcrete-external-walls",
        name: "Cemcrete External Walls",
        path: "/specialized-coatings/cemcrete-external-walls",
      },
      {
        id: "hygienic-food-grade",
        name: "Hygienic Food-Grade Floors",
        path: "/specialized-coatings/hygienic-food-grade",
      },
      {
        id: "marmoran-wall-systems",
        name: "Marmoran Wall Systems",
        path: "/specialized-coatings/marmoran-wall-systems",
      },
      {
        id: "industrial-corrosion-control",
        name: "Industrial Corrosion Control",
        path: "/specialized-coatings/industrial-corrosion-control",
      },
    ],
  },
  {
    id: "painting",
    name: "Painting",
    hubPath: "/painting-services",
    services: [
      {
        id: "body-corporate",
        name: "Body Corporate Painting",
        path: "/painting/body-corporate",
      },
      {
        id: "industrial",
        name: "Industrial & Factory Painting",
        path: "/painting/industrial",
      },
      {
        id: "commercial-painting",
        name: "Commercial & Healthcare Painting",
        path: "/painting/commercial-painting",
      },
      {
        id: "interior-painting",
        name: "Interior Painting",
        path: "/painting/interior-painting",
      },
      {
        id: "internal-walls",
        name: "Internal Walls",
        path: "/painting/internal-walls",
      },
      {
        id: "external-walls",
        name: "External Walls",
        path: "/painting/external-walls",
      },
      {
        id: "high-volume-commercial-painting",
        name: "High-Volume Airless Spray",
        path: "/painting/high-volume-commercial-painting",
      },
      {
        id: "roof-painting",
        name: "Roof Painting & Restoration",
        path: "/painting/roof-painting",
      },
      {
        id: "warehouse-painting",
        name: "Warehouse Painting",
        path: "/painting/warehouse-painting",
      },
      {
        id: "parking-garage-painting",
        name: "Parking Garage Painting",
        path: "/painting/parking-garage-painting",
      },
      {
        id: "stucco-wall-coatings",
        name: "Stucco & Wall Coatings",
        path: "/painting/stucco-wall-coatings",
      },
      {
        id: "road-marking",
        name: "Road & Yard Line Marking",
        path: "/painting/road-marking",
      },
    ],
  },
  {
    id: "access-solutions",
    name: "Access solutions",
    hubPath: "/access-solutions",
    services: [
      {
        id: "rope-access-painting",
        name: "Rope Access Painting",
        path: "/access-solutions/rope-access-painting",
      },
    ],
  },
];

export const REVIEW_AUDIENCE_PAGES = [
  { id: "for-body-corporates", name: "For Body Corporates", path: "/solutions/for-body-corporates" },
  { id: "for-developers", name: "For Developers", path: "/solutions/for-developers" },
  { id: "for-homeowners", name: "For Homeowners", path: "/solutions/for-homeowners" },
] as const;

export const ALL_REVIEW_SERVICES = REVIEW_SERVICE_CATEGORIES.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categoryId: category.id,
    categoryName: category.name,
  })),
);
