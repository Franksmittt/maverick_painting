import { serviceLocations, type ServiceLocation } from "@/data/locations";

export type LocationRegionId = "central" | "east-rand" | "west-rand" | "south-rand";

export type LocationRegionHub = {
  slug: LocationRegionId;
  name: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  narrative: string;
  focusAreas: string[];
  primaryLinks: { href: string; label: string }[];
};

export const locationRegionHubs: LocationRegionHub[] = [
  {
    slug: "east-rand",
    name: "East Rand",
    headline: "Industrial coatings, logistics floors & plant maintenance",
    metaTitle: "East Rand Painting & Industrial Coatings Contractors",
    metaDescription:
      "Boksburg, Kempton Park, Germiston, Isando, and Benoni, HACCP floors, warehouse painting, SANS line marking, corrosion control, and structural repairs with independent QA.",
    narrative:
      "The East Rand is Gauteng's logistics and manufacturing corridor. Facility managers need corrosion stacks, rapid-cure resin floors, HEA airless programmes, and OHS-aware phasing, not residential repaint crews. Maverick mobilises across Boksburg, Kempton Park, Germiston, Isando, Benoni, and lifestyle estates with programmes sized for production continuity.",
    focusAreas: [
      "Industrial corrosion control & silo coatings",
      "HACCP and R638-aligned hygienic flooring",
      "Warehouse HEA airless spray & line marking",
      "Parking structure spalling & joint renewal",
    ],
    primaryLinks: [
      { href: "/painting/industrial", label: "Industrial painting" },
      { href: "/specialized-coatings/hygienic-food-grade", label: "Hygienic flooring" },
      { href: "/painting/road-marking", label: "SANS line marking" },
      { href: "/painting/warehouse-painting", label: "Warehouse painting" },
    ],
  },
  {
    slug: "west-rand",
    name: "West Rand",
    headline: "Damp proofing, basement tanking & subsidence-aware structural work",
    metaTitle: "West Rand Waterproofing & Damp Proofing Contractors",
    metaDescription:
      "Roodepoort, Krugersdorp, and West Rand assets, rising damp injection, negative-side basement tanking, concrete spalling, and engineer-aligned remediation.",
    narrative:
      "Mining legacy hydrology and dolomite-aware geology make the West Rand a damp and subterranean challenge. Capillary rise, lateral moisture, and hydrostatic basement pressure need diagnosis before cosmetic seals. Maverick serves Roodepoort, Krugersdorp, and surrounding nodes with chemical DPC, crystalline tanking, and structural repair sequences.",
    focusAreas: [
      "Rising damp chemical DPC injection",
      "Negative-side basement & retaining tanking",
      "Concrete spalling on legacy stock",
      "Moisture profiling before replastering",
    ],
    primaryLinks: [
      { href: "/damp-proofing/rising-damp-treatment", label: "Rising damp treatment" },
      { href: "/waterproofing/basement-tanking", label: "Basement tanking" },
      { href: "/structural-repairs/concrete-spalling", label: "Concrete spalling repair" },
      { href: "/waterproofing/flat-concrete-roofs", label: "Flat roof waterproofing" },
    ],
  },
  {
    slug: "south-rand",
    name: "South Rand",
    headline: "STSMA body corporate, estates & balcony waterproofing",
    metaTitle: "South Rand Body Corporate Painting & Waterproofing",
    metaDescription:
      "Alberton, Glenvista, Meyersdal, and South Rand sectional-title schemes, STSMA maintenance, leaking balconies, roof renewal, and independent QA for trustees.",
    narrative:
      "The South Rand is dense with sectional-title and lifestyle estates where trustees face STSMA, CSOS, and insurance scrutiny. Programmes must document common-property maintenance, balcony and roof interfaces, and manufacturer-backed warranties trustees can file at AGMs.",
    focusAreas: [
      "STSMA-aligned 10-year maintenance planning support",
      "Leaking balcony and podium waterproofing",
      "Body corporate exterior painting & rope access",
      "Estate HOA-compliant finishes",
    ],
    primaryLinks: [
      { href: "/solutions/for-body-corporates", label: "Body corporate solutions" },
      { href: "/painting/body-corporate", label: "Body corporate painting" },
      { href: "/waterproofing/leaking-balconies", label: "Leaking balcony repair" },
      { href: "/access-solutions/rope-access-painting", label: "Rope access painting" },
    ],
  },
  {
    slug: "central",
    name: "Central Gauteng",
    headline: "Sandton, Midrand, Centurion & Pretoria commercial assets",
    metaTitle: "Central Gauteng Painting & Structural Maintenance",
    metaDescription:
      "Sandton, Midrand, Centurion, Pretoria East, and Johannesburg North, high-rise rope access, commercial waterproofing, and mixed industrial programmes.",
    narrative:
      "Central Gauteng combines financial district towers, logistics growth along the N1, and Pretoria East estates. Maverick delivers rope-access façades, podium waterproofing, techno-park industrial coatings, and sectional-title programmes with third-party QA where appointed.",
    focusAreas: [
      "High-rise rope access & sectional-title towers",
      "Midrand logistics and commercial parks",
      "Centurion industrial & HACCP back-of-house",
      "Pretoria East roof and balcony renewals",
    ],
    primaryLinks: [
      { href: "/locations/sandton", label: "Sandton" },
      { href: "/locations/midrand", label: "Midrand" },
      { href: "/locations/centurion", label: "Centurion" },
      { href: "/locations/pretoria-east", label: "Pretoria East" },
    ],
  },
];

export function getLocationRegion(slug: string) {
  return locationRegionHubs.find((region) => region.slug === slug);
}

export function getLocationsByRegion(region: LocationRegionId): ServiceLocation[] {
  return serviceLocations.filter((loc) => loc.region === region);
}
