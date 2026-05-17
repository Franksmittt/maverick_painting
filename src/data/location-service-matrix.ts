import type { LegalDisclaimerVariant } from "@/components/legal-disclaimer";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";

export type LocationServiceMatrixEntry = {
  citySlug: string;
  serviceSlug: string;
  spokePath: string;
  spokeLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  localContext: string;
  highlights: readonly string[];
  disclaimer?: LegalDisclaimerVariant;
  faqs: readonly ServiceDeepFaq[];
};

const HIGHLIGHTS_BY_SERVICE: Record<string, readonly string[]> = {
  "leaking-balconies": [
    "Moisture mapping and outlet investigation before membrane renewal",
    "Torch-on or liquid systems matched to tile-bed and podium interfaces",
    "Phased execution for occupied sectional-title and mixed-use levels",
    "Documentation trustees and insurers can file with QA sign-off",
  ],
  "body-corporate": [
    "STSMA-aware phasing aligned to reserve fund and MRRP items",
    "Rope or mast access where street scaffold is impractical",
    "Waterproofing and spalling sequenced before decorative coats",
    "Manufacturer maintenance calendars for warranty validity",
  ],
  "rope-access": [
    "IRATA-aligned teams with audited rescue and tool-tethering plans",
    "Reduced scaffold footprint on towers and plant structures",
    "After-hours and security-coordinated access for CBD assets",
    "Coating QA on film build—not rope access alone",
  ],
  "commercial-painting": [
    "Occupied-tenant phasing with dust and odour controls",
    "High-build acrylic and DTM systems for façades and atria",
    "Integration with waterproofing and structural touch-ups",
    "Documented handover for facility and property managers",
  ],
  "industrial-epoxy": [
    "Slip-resistant, chemical-resistant epoxy and polyurethane builds",
    "Defined dry film thickness for forklift and hot-tire zones",
    "Rapid-cure options for minimal production shutdown",
    "Line marking bundled under one QA narrative where required",
  ],
  "hygienic-food-grade": [
    "Coved, seamless finishes for R638 and HACCP washdown regimes",
    "Antimicrobial topcoats specified for food and beverage zones",
    "Shutdown windows coordinated with production managers",
    "Substrate moisture testing before resin application",
  ],
  "rising-damp": [
    "Moisture profiling to separate rising damp from condensation",
    "Chemical DPC injection and compatible replastering regimes",
    "Salt-neutralising prep before decorative finishes",
    "Engineer referral where structural movement is suspected",
  ],
  "flat-roofs": [
    "UV-stable torch-on or liquid membranes with outlet detailing",
    "Parapet, penetration, and movement joint review",
    "Holiday testing and moisture readings before handover",
    "SANS 10021-aligned specifications on commercial grids",
  ],
  "warehouse-painting": [
    "HEA airless programmes for tilt-up panels and blockwork",
    "Light-reflectance upgrades to reduce lighting load",
    "Carbonation-aware prep on porous concrete envelopes",
    "Bundled resin floors and yard line marking available",
  ],
  "road-marking": [
    "SANS 731-compliant yard and circulation demarcation",
    "Integration with fresh epoxy or polyurethane floors",
    "Traffic-rated durability for logistics and plant routes",
    "5S and safety audit-ready layouts",
  ],
  "industrial-painting": [
    "Corrosion control on steel, cladding, and plant assets",
    "Abrasive preparation to Sa standards where specified",
    "Hot-work permits and live-plant safety files",
    "DTM and high-build systems for rapid coverage",
  ],
  "concrete-spalling": [
    "Rebar exposure, passivation, and polymer-modified mortars",
    "Chloride and carbonation-aware diagnostic sequencing",
    "Engineer-aligned scopes—not cosmetic patching",
    "Anti-carbonation finishes after structural closure",
  ],
  "basement-tanking": [
    "Active leak chase before crystalline or cementitious systems",
    "Negative-side tanking under hydrostatic pressure",
    "Crystalline slurry compatible with manufacturer data sheets",
    "Moisture barriers before topcoat or flooring installation",
  ],
  "stucco-coatings": [
    "Breathable elastomeric and textured estate façades",
    "Crack and movement joint review before coating",
    "HOA mock-up panels and colour lock-in",
    "Highveld UV-resistant manufacturer stacks",
  ],
};

const DEFAULT_HIGHLIGHTS = [
  "On-site assessment with photographic condition documentation",
  "Manufacturer-backed systems applied to published data sheets",
  "Independent third-party QA available on agreed scopes",
  "Phased execution to reduce disruption for occupants and operations",
] as const;

function entry(
  citySlug: string,
  cityName: string,
  serviceSlug: string,
  spokePath: string,
  spokeLabel: string,
  localContext: string,
  disclaimer: LegalDisclaimerVariant | undefined,
  extraFaqs: readonly ServiceDeepFaq[] = [],
): LocationServiceMatrixEntry {
  const highlights = HIGHLIGHTS_BY_SERVICE[serviceSlug] ?? DEFAULT_HIGHLIGHTS;
  return {
    citySlug,
    serviceSlug,
    spokePath,
    spokeLabel,
    metaTitle: `${spokeLabel} in ${cityName}`,
    metaDescription: `Professional ${spokeLabel.toLowerCase()} in ${cityName}, Gauteng. Manufacturer-backed specs, engineer-aligned scopes, and independent QA for commercial and sectional-title assets.`,
    h1: `${spokeLabel} in ${cityName}.`,
    lead: `Localised ${spokeLabel.toLowerCase()} for assets in ${cityName}—scoped to regional building stock, access constraints, and compliance expectations trustees and facility managers can defend.`,
    localContext,
    highlights,
    disclaimer,
    faqs: [
      {
        question: `Do you mobilise quickly in ${cityName}?`,
        answer: `Yes. We maintain Gauteng-wide crews and can schedule condition assessments near your asset, typically within a few business days subject to access and safety file requirements.`,
      },
      {
        question: "How does independent QA work on local programmes?",
        answer:
          "On agreed scopes, a third-party inspector verifies preparation, environmental conditions, and dry film thickness—producing bi-weekly reports trustees and insurers can file without relying on contractor self-certification.",
      },
      ...extraFaqs,
    ],
  };
}

export const locationServiceMatrix: LocationServiceMatrixEntry[] = [
  entry(
    "sandton",
    "Sandton",
    "leaking-balconies",
    "/waterproofing/leaking-balconies",
    "Leaking balcony repair",
    "Sandton sectional-title towers and mixed-use podiums see thermal movement, failed outlet seals, and tile-bed saturation on upper levels. We document moisture paths and membrane compatibility before recommending partial or full renewal—phased where occupied levels cannot be vacated.",
    "sans-waterproofing",
  ),
  entry(
    "sandton",
    "Sandton",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "Trustees in Sandton face fiduciary scrutiny on MRRP items and façade renewals. Maverick phases high-rise programmes with rope or mast access where scaffold is impractical, pairing coatings with waterproofing and spalling scopes under one QA narrative.",
    "stsma",
  ),
  entry(
    "sandton",
    "Sandton",
    "rope-access",
    "/access-solutions/rope-access-painting",
    "Rope access painting",
    "Alice Lane and Sandton CBD towers favour rope access to reduce street scaffold, security exposure, and programme length. Our IRATA-aligned teams coordinate with body corporate access protocols and after-hours logistics.",
    undefined,
  ),
  entry(
    "midrand",
    "Midrand",
    "commercial-painting",
    "/painting/commercial-painting",
    "Commercial painting",
    "Waterfall City and Kyalami business parks combine logistics façades, atria, and sectional-title interfaces. Programmes balance occupied-tenant phasing with manufacturer maintenance calendars.",
    undefined,
  ),
  entry(
    "midrand",
    "Midrand",
    "industrial-epoxy",
    "/specialized-coatings/industrial-epoxy-flooring",
    "Industrial epoxy flooring",
    "Midrand distribution and light-industrial floors endure forklift traffic, chemical splash, and thermal shock. We specify slip-resistant, high-build epoxy and polyurethane systems with documented DFT for warranty validity.",
    undefined,
  ),
  entry(
    "centurion",
    "Centurion",
    "hygienic-food-grade",
    "/specialized-coatings/hygienic-food-grade",
    "HACCP hygienic flooring",
    "Centurion techno parks and food-adjacent back-of-house zones require coved, seamless finishes that survive R638 cleaning regimes. We coordinate shutdown windows with production managers.",
    "haccp",
  ),
  entry(
    "centurion",
    "Centurion",
    "rising-damp",
    "/damp-proofing/rising-damp-treatment",
    "Rising damp treatment",
    "Older Centurion and Irene stock often shows lateral damp misdiagnosed as condensation. We combine moisture profiling with chemical DPC injection and compatible internal finishes.",
    "structural",
  ),
  entry(
    "pretoria-east",
    "Pretoria East",
    "leaking-balconies",
    "/waterproofing/leaking-balconies",
    "Leaking balcony repair",
    "Menlyn and Woodhill estates see Highveld storm loading on tiled balconies and planter interfaces. Maverick isolates active leaks before membrane renewal to avoid trapping moisture in screeds.",
    "sans-waterproofing",
  ),
  entry(
    "pretoria-east",
    "Pretoria East",
    "flat-roofs",
    "/waterproofing/flat-concrete-roofs",
    "Flat concrete roof waterproofing",
    "Pretoria East commercial and sectional-title flat roofs need UV-stable torch-on or liquid systems with outlet and parapet detailing aligned to SANS 10021 principles.",
    "sans-waterproofing",
  ),
  entry(
    "isando",
    "Isando",
    "hygienic-food-grade",
    "/specialized-coatings/hygienic-food-grade",
    "HACCP hygienic flooring",
    "Isando logistics and food-processing nodes demand audit-ready floors: coved transitions, antimicrobial topcoats, and documented preparation for third-party hygiene reviews.",
    "haccp",
  ),
  entry(
    "isando",
    "Isando",
    "industrial-epoxy",
    "/specialized-coatings/industrial-epoxy-flooring",
    "Industrial epoxy flooring",
    "Warehouse and production floors near OR Tambo industrial corridors require high-build epoxy with defined slip resistance and hot-tire resistance at loading bays.",
    undefined,
  ),
  entry(
    "isando",
    "Isando",
    "warehouse-painting",
    "/painting/warehouse-painting",
    "Warehouse painting",
    "Tilt-up panels and internal blockwork in Isando benefit from HEA airless programmes that lift luminance and protect against carbonation—often bundled with floor and line-marking scopes.",
    undefined,
  ),
  entry(
    "isando",
    "Isando",
    "road-marking",
    "/painting/road-marking",
    "SANS line marking",
    "Distribution yards and plant circulation routes in Isando need SANS 731-compliant demarcation integrated with fresh floor coatings for a single QA file.",
    undefined,
  ),
  entry(
    "boksburg",
    "Boksburg",
    "industrial-painting",
    "/painting/industrial",
    "Industrial painting",
    "Boksburg manufacturing and logistics assets face corrosion on structural steel and cladding. Maverick sequences abrasive preparation, DTM coatings, and adjacent epoxy floors under manufacturer specifications.",
    undefined,
  ),
  entry(
    "boksburg",
    "Boksburg",
    "industrial-epoxy",
    "/specialized-coatings/industrial-epoxy-flooring",
    "Industrial epoxy flooring",
    "Heavy forklift and chemical exposure in Boksburg plants demands defined film build and repair protocols—documented for insurer and ISO audits.",
    undefined,
  ),
  entry(
    "boksburg",
    "Boksburg",
    "road-marking",
    "/painting/road-marking",
    "SANS line marking",
    "Yard safety and 5S compliance in Boksburg industrial sites start with durable line marking tied to refreshed floor coatings.",
    undefined,
  ),
  entry(
    "germiston",
    "Germiston",
    "concrete-spalling",
    "/structural-repairs/concrete-spalling",
    "Concrete spalling repair",
    "Germiston parking grids and industrial structures show chloride and carbonation-driven spalling. We expose rebar, passivate, and rebuild with polymer-modified mortars before protective coatings.",
    "structural",
  ),
  entry(
    "germiston",
    "Germiston",
    "industrial-painting",
    "/painting/industrial",
    "Industrial painting",
    "Plant and warehouse envelopes in Germiston require corrosion control coordinated with production shutdowns and hot-work permits.",
    undefined,
  ),
  entry(
    "kempton-park",
    "Kempton Park",
    "warehouse-painting",
    "/painting/warehouse-painting",
    "Warehouse painting",
    "Logistics parks around Kempton Park need rapid-coverage exterior and interior programmes that improve reflectance without extended tenant disruption.",
    undefined,
  ),
  entry(
    "kempton-park",
    "Kempton Park",
    "industrial-epoxy",
    "/specialized-coatings/industrial-epoxy-flooring",
    "Industrial epoxy flooring",
    "Distribution centres in Kempton Park benefit from seamless epoxy with defined slip resistance at loading docks and pedestrian zones.",
    undefined,
  ),
  entry(
    "benoni",
    "Benoni",
    "rope-access",
    "/access-solutions/rope-access-painting",
    "Rope access painting",
    "Benoni commercial and sectional-title assets with height access constraints use rope teams to avoid costly scaffold cycles on towers and plant structures.",
    undefined,
  ),
  entry(
    "benoni",
    "Benoni",
    "industrial-painting",
    "/painting/industrial",
    "Industrial painting",
    "East Rand industrial stock in Benoni pairs corrosion control with waterproofing interfaces on roofs and plant steel.",
    undefined,
  ),
  entry(
    "alberton",
    "Alberton",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "Alberton sectional-title schemes need STSMA-aware phasing, reserve-friendly budgets, and QA files managing agents can present at AGMs.",
    "stsma",
  ),
  entry(
    "alberton",
    "Alberton",
    "leaking-balconies",
    "/waterproofing/leaking-balconies",
    "Leaking balcony repair",
    "Alberton mid-rise stock frequently shows failed waterproofing at door thresholds and tile beds—scoped with moisture mapping before renewal.",
    "sans-waterproofing",
  ),
  entry(
    "glenvista",
    "Glenvista",
    "leaking-balconies",
    "/waterproofing/leaking-balconies",
    "Leaking balcony repair",
    "South Rand estates in Glenvista see podium and balcony saturation from storm ingress. We coordinate with trustees on owner versus common-property documentation.",
    "sans-waterproofing",
  ),
  entry(
    "glenvista",
    "Glenvista",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "Glenvista sectional-title façades and common property renewals are phased to protect landscaping and access routes while meeting manufacturer maintenance windows.",
    "stsma",
  ),
  entry(
    "roodepoort",
    "Roodepoort",
    "basement-tanking",
    "/waterproofing/basement-tanking",
    "Basement tanking",
    "West Rand basements and lift pits in Roodepoort face hydrostatic pressure where paint-on sealants fail. Crystalline and negative-side systems are specified after active leak routing.",
    "sans-waterproofing",
  ),
  entry(
    "roodepoort",
    "Roodepoort",
    "rising-damp",
    "/damp-proofing/rising-damp-treatment",
    "Rising damp treatment",
    "Older Roodepoort stock on reactive soils often shows rising damp and salt efflorescence—diagnosed with moisture profiles before DPC injection.",
    "structural",
  ),
  entry(
    "roodepoort",
    "Roodepoort",
    "concrete-spalling",
    "/structural-repairs/concrete-spalling",
    "Concrete spalling repair",
    "Parking and retaining structures in Roodepoort benefit from engineer-aligned spalling repair before decorative repaints—avoiding cosmetic concealment of active corrosion.",
    "structural",
  ),
  entry(
    "krugersdorp",
    "Krugersdorp",
    "basement-tanking",
    "/waterproofing/basement-tanking",
    "Basement tanking",
    "Krugersdorp commercial basements and heritage conversions need negative-pressure tanking after mechanical leak chase and crystalline slurry application.",
    "sans-waterproofing",
  ),
  entry(
    "krugersdorp",
    "Krugersdorp",
    "rising-damp",
    "/damp-proofing/rising-damp-treatment",
    "Rising damp treatment",
    "West Rand lateral damp in Krugersdorp is common in pre-2000 stock—treated with injection DPC and compatible plaster regimes.",
    "structural",
  ),
  entry(
    "johannesburg-north",
    "Johannesburg North",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "North Johannesburg sectional-title and mixed-use schemes require trustee-ready documentation and phased exterior programmes.",
    "stsma",
  ),
  entry(
    "serengeti-estate",
    "Serengeti Estate",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "Estate-scale sectional-title programmes in Serengeti demand consistent colour schedules, access control, and manufacturer-backed exterior systems.",
    "stsma",
  ),
  entry(
    "meyersdal-estate",
    "Meyersdal Estate",
    "stucco-coatings",
    "/painting/stucco-wall-coatings",
    "Stucco wall coatings",
    "Meyersdal estate façades use textured and elastomeric stucco systems that must breathe while resisting Highveld UV—specified with crack and movement joint review.",
    undefined,
  ),
  entry(
    "meyersdal-estate",
    "Meyersdal Estate",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "High-end Meyersdal sectional-title stock expects discreet phasing, security coordination, and independent QA on major renewals.",
    "stsma",
  ),
  entry(
    "ebotse-estate",
    "Ebotse Estate",
    "body-corporate",
    "/painting/body-corporate",
    "Body corporate painting",
    "Ebotse body corporates benefit from integrated waterproofing, painting, and QA documentation for MRRP updates.",
    "stsma",
  ),
];

export function getLocationServiceEntry(citySlug: string, serviceSlug: string) {
  return locationServiceMatrix.find(
    (e) => e.citySlug === citySlug && e.serviceSlug === serviceSlug,
  );
}

export function getMatrixEntriesForCity(citySlug: string) {
  return locationServiceMatrix.filter((e) => e.citySlug === citySlug);
}

export function getLocationServiceMatrixPaths() {
  return locationServiceMatrix.map((e) => `/locations/${e.citySlug}/${e.serviceSlug}`);
}
