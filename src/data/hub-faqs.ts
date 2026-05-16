import type { ServiceDeepFaq } from "@/lib/service-deep-types";

/** Visible hub FAQs aligned with SEO research (PAA / snippet targets). */
export const hubFaqsByPath: Record<string, readonly ServiceDeepFaq[]> = {
  "/structural-repairs": [
    {
      question: "What is the difference between a settlement crack and a structural crack?",
      answer:
        "Hairline settlement cracks under about 1 mm often need cosmetic filler after monitoring. Stair-step cracks, widening gaps, or cracks with rust staining usually indicate structural movement or corrosion and may need engineer review, injection, or underpinning—not paint alone.",
    },
    {
      question: "How does concrete spalling compromise a building's integrity?",
      answer:
        "Carbonation and chlorides lower concrete pH, destroy the passivation layer on steel, and let rebar rust and expand—blowing off cover and reducing section. Maverick treats spalling with breakout, passivation, structural mortars, and protective coatings documented for QA files.",
    },
    {
      question: "Do you provide independent QA on structural repairs?",
      answer:
        "Yes on agreed commercial and sectional-title scopes. Third-party inspection of preparation, environmental conditions, and film build gives trustees and engineers defensible evidence—not contractor-only sign-off.",
    },
    {
      question: "What does concrete spalling repair typically cost in Gauteng?",
      answer:
        "Remedial rates commonly range from roughly R800 to R2,500 per m² depending on breakout depth, steel treatment, access, and coating scope. Maverick quotes after on-site sounding and moisture profiling—not generic m² bait pricing.",
    },
  ],
  "/waterproofing-services": [
    {
      question: "Why do flat concrete roofs in Gauteng leak so frequently?",
      answer:
        "Highveld UV, thermal cycling, ponding, and failed detailing at outlets and penetrations age membranes quickly. Maverick specifies systems and maintenance calendars matched to substrate condition—not single-layer shortcuts.",
    },
    {
      question: "Will home insurance cover my leaking roof damage?",
      answer:
        "Policies often cover sudden storm damage but exclude gradual deterioration and lack of maintenance. Documented QA-backed maintenance programmes help trustees and owners show reasonable care—Maverick supplies reports; we do not adjudicate insurance.",
    },
    {
      question: "Torch-on or liquid membrane—which is better?",
      answer:
        "Depends on geometry, fire constraints, and substrate moisture. Open decks may suit torch-on; complex details and occupied podiums often favour liquid or hybrid programmes after adhesion and moisture testing.",
    },
    {
      question: "What do flat roof waterproofing projects cost per m²?",
      answer:
        "Indicative installed rates often sit between roughly R350 and R850 per m² for torch-on or liquid systems, driven by removal scope, falls correction, detailing complexity, and QA requirements. Accurate pricing follows measured surveys and risk items on site.",
    },
  ],
  "/damp-proofing-services": [
    {
      question: "How can I tell the difference between rising damp and condensation?",
      answer:
        "Rising damp typically shows hygroscopic salt tide marks up to about one metre from the floor via capillary action. Condensation often appears as black mould on cold thermal bridges in bathrooms and bedrooms with poor ventilation—different remedies apply.",
    },
    {
      question: "What is negative side waterproofing for basements?",
      answer:
        "When exterior excavation is impossible, crystalline or cementitious systems are applied internally to manage hydrostatic pressure. Feasibility depends on wall build and engineer design—Maverick implements specified systems with active leak control first.",
    },
  ],
  "/specialized-coatings": [
    {
      question: "What are the requirements for an HACCP-aligned food-safe floor?",
      answer:
        "Food premises need seamless, cleanable surfaces with integral coving at floor–wall junctions, drainage falls, and systems that tolerate washdown and thermal shock. Maverick supplies product and application evidence; facility HACCP certification remains the owner's programme.",
    },
    {
      question: "How do you select epoxy vs polyurethane flooring?",
      answer:
        "Epoxy suits dry industrial traffic and chemical resistance where flexibility is secondary; polyurethane and PU-cement hybrids tolerate thermal shock and moderate movement. Maverick matches resin class to exposure, drainage, and washdown chemistry after moisture and contamination profiling.",
    },
  ],
  "/painting-services": [
    {
      question: "Why is HEA airless spraying used on large commercial buildings?",
      answer:
        "High Efficiency Airless technology reduces overspray while delivering uniform film build on large fields—often 4–10× faster than roller methods on warehouses and logistics shells when preparation is disciplined.",
    },
    {
      question: "How do body corporates reduce painting liability?",
      answer:
        "STSMA requires a 10-year Maintenance, Repair and Replacement Plan (MRRP). Independent QA, manufacturer-backed systems, and phased scopes give trustees auditable proof of fiduciary care—see our body corporate solutions page.",
    },
  ],
  "/access-solutions": [
    {
      question: "Is commercial rope access safer than scaffolding?",
      answer:
        "When executed under OHS requirements with certified anchors, dual-rope systems, and rescue plans, rope access reduces ground footprint and programme time. Maverick uses vetted IRATA-aligned partners and documents safety files for sectional-title and commercial sites.",
    },
    {
      question: "When is rope access not appropriate?",
      answer:
        "Heavy breakout, uncertified anchors, or extreme weather may require scaffold or MEWP hybrid programmes. We recommend the access method from risk and cost—not habit.",
    },
  ],
};
