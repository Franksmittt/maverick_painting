export type ServiceLocation = {
  slug: string;
  name: string;
  region: "central" | "east-rand" | "west-rand" | "south-rand";
  metaTitle: string;
  metaDescription: string;
  landmarks: string[];
  regionalNarrative: string;
  primaryServiceLinks: { href: string; label: string }[];
};

const defaultLinks = {
  structural: { href: "/structural-repairs", label: "Structural repairs" },
  waterproofing: { href: "/waterproofing-services", label: "Waterproofing" },
  bodyCorporate: { href: "/painting/body-corporate", label: "Body corporate painting" },
  industrial: { href: "/painting/industrial", label: "Industrial painting" },
  epoxy: { href: "/specialized-coatings/industrial-epoxy-flooring", label: "Industrial flooring" },
  damp: { href: "/damp-proofing/rising-damp-treatment", label: "Rising damp treatment" },
  tanking: { href: "/waterproofing/basement-tanking", label: "Basement tanking" },
  rope: { href: "/access-solutions/rope-access-painting", label: "Rope access" },
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "midrand",
    name: "Midrand",
    region: "central",
    metaTitle: "Commercial Painting & Waterproofing Contractors Midrand",
    metaDescription:
      "Structural repairs, waterproofing, and painting in Midrand with independent QA. Waterfall City, Kyalami, and logistics nodes.",
    landmarks: ["Waterfall City", "Mall of Africa", "Kyalami Business Park"],
    regionalNarrative:
      "Midrand combines logistics parks, sectional-title growth, and premium commercial assets along the N1. Maverick programmes pair waterproofing, spalling repair, and phased painting with third-party QA for body corporates and facility managers.",
    primaryServiceLinks: [defaultLinks.bodyCorporate, defaultLinks.waterproofing, defaultLinks.structural],
  },
  {
    slug: "sandton",
    name: "Sandton",
    region: "central",
    metaTitle: "Sandton Body Corporate Painting & Asset Maintenance",
    metaDescription:
      "Sectional-title and commercial asset maintenance in Sandton: rope access, waterproofing, spalling repair, and STSMA-aligned documentation with independent QA.",
    landmarks: ["Sandton City", "The Leonardo", "Alice Lane Precinct"],
    regionalNarrative:
      "Sandton towers and sectional-title stock demand rope access, podium waterproofing, and trustee-ready QA files. We phase high-rise programmes to reduce street scaffold and security exposure while documenting film build for AGMs.",
    primaryServiceLinks: [defaultLinks.bodyCorporate, defaultLinks.rope, defaultLinks.waterproofing],
  },
  {
    slug: "centurion",
    name: "Centurion",
    region: "central",
    metaTitle: "Centurion Industrial Coatings & Damp Proofing",
    metaDescription:
      "Industrial coatings, rising damp, and structural repairs in Centurion. Highveld, Irene, and Rooihuiskraal with manufacturer-backed systems.",
    landmarks: ["Centurion Mall", "Highveld Techno Park", "Irene Link"],
    regionalNarrative:
      "Centurion blends techno parks, estates, and older stock with mixed damp and industrial exposure. Programmes span HACCP floors in back-of-house zones, rising damp diagnostics, and corrosion control on plant assets.",
    primaryServiceLinks: [defaultLinks.epoxy, defaultLinks.damp, defaultLinks.industrial],
  },
  {
    slug: "pretoria-east",
    name: "Pretoria East",
    region: "central",
    metaTitle: "Pretoria East Waterproofing & Painting Specialists",
    metaDescription:
      "Water ingress, spalling, and estate painting in Pretoria East—Menlyn, Faerie Glen, and Woodhill with engineer-aligned remediation.",
    landmarks: ["Menlyn Maine", "Woodhill Estate", "The Grove"],
    regionalNarrative:
      "Pretoria East estates and office nodes face Highveld UV and storm loading on flat roofs and balconies. We combine membrane renewal, arris spalling repair, and exterior programmes with documented handover for HOAs and body corporates.",
    primaryServiceLinks: [defaultLinks.waterproofing, defaultLinks.structural, defaultLinks.bodyCorporate],
  },
  {
    slug: "benoni",
    name: "Benoni",
    region: "east-rand",
    metaTitle: "Benoni Painting & Structural Repairs | East Rand",
    metaDescription:
      "East Rand painting, waterproofing, and concrete repairs in Benoni—Farrarmere, Rynfield, Eastlands—with independent QA.",
    landmarks: ["Farrarmere", "Rynfield", "Lakefield", "Northmead", "Eastlands"],
    regionalNarrative:
      "Benoni mixes sectional-title blocks and light industrial edges on the East Rand. Maverick mobilises for balcony leaks, roof renewals, and parking grid spalling with programmes sized for trustee cash flow.",
    primaryServiceLinks: [defaultLinks.bodyCorporate, defaultLinks.waterproofing, defaultLinks.structural],
  },
  {
    slug: "kempton-park",
    name: "Kempton Park",
    region: "east-rand",
    metaTitle: "Kempton Park Industrial Painting | OR Tambo Corridor",
    metaDescription:
      "Industrial painting, epoxy floors, and warehouse coatings near O.R. Tambo—Kempton Park, Allen Grove, and Glen Marais logistics nodes.",
    landmarks: ["Allen Grove", "Aston Manor", "Birch Acres", "Glen Marais"],
    regionalNarrative:
      "Kempton Park sits on Africa's air-freight corridor with dense warehousing and distribution. HEA airless spray, line marking, and rapid-cure resin floors support 24/7 logistics with minimal shutdown windows.",
    primaryServiceLinks: [defaultLinks.industrial, defaultLinks.epoxy, { href: "/painting/warehouse-painting", label: "Warehouse painting" }],
  },
  {
    slug: "boksburg",
    name: "Boksburg",
    region: "east-rand",
    metaTitle: "Boksburg Industrial Coatings & Waterproofing | Maverick",
    metaDescription:
      "East Rand industrial and commercial maintenance in Boksburg: corrosion control, warehouse painting, SANS line marking, and structural repairs.",
    landmarks: ["East Rand Mall", "Boksburg North", "Jet Park adjacency"],
    regionalNarrative:
      "Boksburg anchors heavy industry and logistics on the East Rand. Facility managers search for corrosion stacks, traffic-rated line marking, and roof or slab waterproofing that survives chemical exposure and forklift traffic—documented with independent QA where required.",
    primaryServiceLinks: [defaultLinks.industrial, defaultLinks.epoxy, { href: "/painting/road-marking", label: "Line marking" }],
  },
  {
    slug: "germiston",
    name: "Germiston",
    region: "east-rand",
    metaTitle: "Germiston Industrial Painting & Structural Repairs",
    metaDescription:
      "Germiston plant painting, epoxy flooring, spalling repair, and waterproofing for manufacturing and logistics assets with OHS-aware phasing.",
    landmarks: ["Victoria Lake", "Golden Grove", "Industria"],
    regionalNarrative:
      "Germiston's manufacturing heritage means corrosion, production shutdown windows, and live-plant safety files dominate procurement. Maverick sequences hot-work controls, coating QA, and structural touch-ups without treating industrial assets like residential repaint work.",
    primaryServiceLinks: [defaultLinks.industrial, defaultLinks.structural, defaultLinks.epoxy],
  },
  {
    slug: "isando",
    name: "Isando",
    region: "east-rand",
    metaTitle: "Isando Industrial Flooring & Rope Access | Logistics Hub",
    metaDescription:
      "HACCP floors, warehouse painting, and rope access for Isando logistics, cold storage, and aviation-adjacent facilities near O.R. Tambo.",
    landmarks: ["Isando Industrial", "Jet Park", "Spartan"],
    regionalNarrative:
      "Isando concentrates cold storage, MRO, and distribution facilities needing hygienic PU-cement floors, rapid MMA line marking, and façade access without long scaffold programmes. We speak R638/HACCP context and operational continuity—not generic painting quotes.",
    primaryServiceLinks: [
      { href: "/specialized-coatings/hygienic-food-grade", label: "Hygienic flooring" },
      defaultLinks.epoxy,
      defaultLinks.rope,
    ],
  },
  {
    slug: "alberton",
    name: "Alberton",
    region: "south-rand",
    metaTitle: "Alberton Body Corporate & Estate Painting",
    metaDescription:
      "South Rand sectional-title and estate maintenance in Alberton—Meyersdal, Brackenhurst—with STSMA-aware scopes and independent QA.",
    landmarks: ["Meyersdal Eco Estate", "Brackenhurst", "Randhart"],
    regionalNarrative:
      "Alberton and Meyersdal estates require HOA-compliant palettes, security inductions, and balcony or roof programmes that respect sectional-title boundaries. Maverick supplies trustee documentation and manufacturer-backed warranties trustees can file.",
    primaryServiceLinks: [defaultLinks.bodyCorporate, defaultLinks.waterproofing, { href: "/solutions/for-body-corporates", label: "Body corporate solutions" }],
  },
  {
    slug: "glenvista",
    name: "Glenvista",
    region: "south-rand",
    metaTitle: "Glenvista Painting & Waterproofing Contractors",
    metaDescription:
      "South Rand residential and sectional-title painting in Glenvista: roof, balcony, and exterior programmes with rising damp diagnostics.",
    landmarks: ["Glenvista", "Meyersdal", "Verwoerdpark"],
    regionalNarrative:
      "Glenvista and adjacent South Rand suburbs combine established sectional-title stock with premium freehold homes. Leaking balconies, tile roofs, and north-facing UV degradation are common triggers for combined waterproofing and painting scopes.",
    primaryServiceLinks: [
      defaultLinks.bodyCorporate,
      { href: "/waterproofing/leaking-balconies", label: "Leaking balconies" },
      { href: "/painting/roof-painting", label: "Roof painting" },
    ],
  },
  {
    slug: "roodepoort",
    name: "Roodepoort",
    region: "west-rand",
    metaTitle: "Roodepoort Damp Proofing & Waterproofing | West Rand",
    metaDescription:
      "Rising damp, basement tanking, and structural repairs in Roodepoort—West Rand mining legacy hydrology and dolomite-aware solutions.",
    landmarks: ["Clearwater", "Florida", "Constantia Kloof"],
    regionalNarrative:
      "Roodepoort properties often battle capillary moisture, lateral ingress, and subsidence-related cracking linked to West Rand geology. Maverick diagnoses before injection or tanking—avoiding cosmetic seals on hydrostatic problems.",
    primaryServiceLinks: [defaultLinks.damp, defaultLinks.tanking, defaultLinks.structural],
  },
  {
    slug: "krugersdorp",
    name: "Krugersdorp",
    region: "west-rand",
    metaTitle: "Krugersdorp Basement Tanking & Structural Repairs",
    metaDescription:
      "West Rand basement waterproofing, negative-side tanking, and concrete spalling repair in Krugersdorp with engineer-aligned specifications.",
    landmarks: ["Krugersdorp North", "Monument", "Amberfield"],
    regionalNarrative:
      "Krugersdorp's mining legacy elevates groundwater and AMD-related hydrology risks for basements and retaining structures. Programmes emphasise active leak control, crystalline or cementitious tanking, and structural remediation before finishes.",
    primaryServiceLinks: [defaultLinks.tanking, defaultLinks.damp, defaultLinks.structural],
  },
  {
    slug: "johannesburg-north",
    name: "Johannesburg North",
    region: "central",
    metaTitle: "Johannesburg North Painting Contractors",
    metaDescription:
      "Painting and waterproofing in Johannesburg North—Melville, Rosebank, Parktown—with heritage-sensitive and commercial scopes.",
    landmarks: ["Melville", "Rosebank", "Parktown", "Parkhurst"],
    regionalNarrative:
      "Johannesburg North mixes heritage homes, boutique commercial, and older masonry stock. Rising damp, roof renewals, and interior low-VOC programmes are scoped after moisture profiling—not one-size-fits-all quotes.",
    primaryServiceLinks: [
      { href: "/painting/interior-painting", label: "Interior painting" },
      defaultLinks.damp,
      defaultLinks.waterproofing,
    ],
  },
  {
    slug: "serengeti-estate",
    name: "Serengeti Golf & Wildlife Estate",
    region: "east-rand",
    metaTitle: "Serengeti Estate Painters | HOA Compliant",
    metaDescription:
      "HOA-compliant painting and coatings for Serengeti Estate with mock-ups, low-VOC options, and security-aware access planning.",
    landmarks: ["Serengeti Golf Course", "Wildlife Reserve"],
    regionalNarrative:
      "Serengeti Estate requires approved finishes, escorted access, and noise curfews. Maverick runs mock-up panels and phased elevations so HOA boards lock texture and colour before full façades proceed.",
    primaryServiceLinks: [
      { href: "/specialized-coatings/marmoran-wall-systems", label: "Marmoran wall systems" },
      { href: "/painting/stucco-wall-coatings", label: "Stucco & wall coatings" },
      defaultLinks.bodyCorporate,
    ],
  },
  {
    slug: "ebotse-estate",
    name: "Ebotse Golf Estate",
    region: "east-rand",
    metaTitle: "Ebotse Estate Painting Contractors",
    metaDescription:
      "Premium estate painting and waterproofing at Ebotse Golf Estate with security protocols and manufacturer-backed exterior systems.",
    landmarks: ["Ebotse Golf Course", "Luxury Estates"],
    regionalNarrative:
      "Ebotse and similar lifestyle estates need discreet programmes, estate inductions, and long-life exterior stacks that handle Highveld UV. Waterproofing at roof and balcony interfaces is sequenced before decorative coats.",
    primaryServiceLinks: [
      defaultLinks.bodyCorporate,
      defaultLinks.waterproofing,
      { href: "/painting/stucco-wall-coatings", label: "Stucco coatings" },
    ],
  },
  {
    slug: "meyersdal-estate",
    name: "Meyersdal Eco Estate",
    region: "south-rand",
    metaTitle: "Meyersdal Estate Painters | Low-VOC Coatings",
    metaDescription:
      "Eco-estate painting at Meyersdal with low-VOC systems, HOA compliance, and integration with Alberton sectional-title maintenance corridors.",
    landmarks: ["Meyersdal Eco Estate", "Nature Reserve"],
    regionalNarrative:
      "Meyersdal Eco Estate emphasises environmental standards and architectural control. Low-VOC, breathable, and premium textured systems are specified with estate-approved suppliers and documented QA on larger communal scopes.",
    primaryServiceLinks: [
      { href: "/painting/stucco-wall-coatings", label: "Stucco & wall coatings" },
      defaultLinks.bodyCorporate,
      defaultLinks.waterproofing,
    ],
  },
];

export function getLocation(slug: string) {
  return serviceLocations.find((loc) => loc.slug === slug);
}
