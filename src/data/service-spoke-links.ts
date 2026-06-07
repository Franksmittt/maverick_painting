/** Canonical spoke URLs used on /services pillar tags and cross-links. */
export type ServiceSpokeLink = { label: string; href: string };

export const SERVICE_OVERVIEW_TAGS: Record<
  "structural" | "coatings" | "waterproofing" | "painting",
  readonly ServiceSpokeLink[]
> = {
  structural: [
    { label: "Concrete Spalling Repair", href: "/structural-repairs/concrete-spalling" },
    { label: "Structural Crack Injection", href: "/structural-repairs/crack-injection" },
    { label: "Expansion Joint Sealing", href: "/structural-repairs/expansion-joint-sealing" },
    { label: "Rising Damp Treatment", href: "/damp-proofing/rising-damp-treatment" },
  ],
  coatings: [
    { label: "Epoxy Floors & PU Flooring", href: "/specialized-coatings/industrial-epoxy-flooring" },
    { label: "Cemcrete Floors", href: "/specialized-coatings/cemcrete-floors" },
    { label: "Wall Cladding", href: "/specialized-coatings/wall-cladding" },
    { label: "Cemcrete External Walls", href: "/specialized-coatings/cemcrete-external-walls" },
    { label: "Hygienic Food-Grade Floors", href: "/specialized-coatings/hygienic-food-grade" },
    { label: "Marmoran Master Applicator", href: "/specialized-coatings/marmoran-wall-systems" },
    { label: "Industrial Corrosion Control", href: "/specialized-coatings/industrial-corrosion-control" },
  ],
  waterproofing: [
    { label: "Flat Concrete Roof Systems", href: "/waterproofing/flat-concrete-roofs" },
    { label: "Leaking Balcony Repair", href: "/waterproofing/leaking-balconies" },
    { label: "Torch-On & Liquid Membranes", href: "/waterproofing/torch-on-liquid-membranes" },
    { label: "Basement Waterproofing", href: "/waterproofing/basement-tanking" },
  ],
  painting: [
    { label: "Body Corporate Painting", href: "/painting/body-corporate" },
    { label: "Industrial & Factory Painting", href: "/painting/industrial" },
    { label: "Commercial & Healthcare Painting", href: "/painting/commercial-painting" },
    { label: "Interior Painting", href: "/painting/interior-painting" },
    { label: "Internal Walls", href: "/painting/internal-walls" },
    { label: "External Walls", href: "/painting/external-walls" },
    { label: "High-Volume Airless Spray", href: "/painting/high-volume-commercial-painting" },
    { label: "Rope Access Painting", href: "/access-solutions/rope-access-painting" },
    { label: "Roof Painting & Restoration", href: "/painting/roof-painting" },
    { label: "Warehouse Painting", href: "/painting/warehouse-painting" },
    { label: "Parking Garage Painting", href: "/painting/parking-garage-painting" },
    { label: "Stucco & Wall Coatings", href: "/painting/stucco-wall-coatings" },
    { label: "Road & Yard Line Marking", href: "/painting/road-marking" },
  ],
};
