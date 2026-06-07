import type { ServiceDeepFaq } from "@/lib/service-deep-types";

/** Visible hub FAQs aligned with SEO research (PAA / snippet targets). */
export const hubFaqsByPath: Record<string, readonly ServiceDeepFaq[]> = {
  "/structural-repairs": [
    {
      question: "What is the difference between a settlement crack and a structural crack?",
      answer:
        "Hairline settlement cracks under about 1 mm often need cosmetic filler after monitoring. Stair-step cracks, widening gaps, or cracks with rust staining usually indicate structural movement or corrosion and may need engineer review, injection, or underpinning, not paint alone.",
    },
    {
      question: "How does concrete spalling compromise a building's integrity?",
      answer:
        "Carbonation and chlorides lower concrete pH, destroy the passivation layer on steel, and let rebar rust and expand, blowing off cover and reducing section. Maverick treats spalling with breakout, passivation, structural mortars, and protective coatings documented for QA files.",
    },
    {
      question: "Do you provide independent QA on structural repairs?",
      answer:
        "Yes on agreed commercial and sectional-title scopes. Third-party inspection of preparation, environmental conditions, and film build gives trustees and engineers defensible evidence, not contractor-only sign-off.",
    },
    {
      question: "What does concrete spalling repair typically cost in Gauteng?",
      answer:
        "Remedial rates commonly range from roughly R800 to R2,500 per m² depending on breakout depth, steel treatment, access, and coating scope. Maverick quotes after on-site sounding and moisture profiling, not generic m² bait pricing.",
    },
    {
      question: "When is crack injection epoxy vs polyurethane?",
      answer:
        "Epoxy suits dormant structural cracks where stiffness and bond strength matter. Polyurethane or hybrid systems suit active leaks or moving joints where flexibility and water stop are priorities. We diagnose before specifying.",
    },
    {
      question: "Do expansion joints need full replacement or reseal only?",
      answer:
        "Failed sealant with sound joint geometry may need reseal only. Collapsed nosing, water ingress into the joint body, or traffic damage often requires rebuild with traffic-rated systems and engineer review on load-bearing decks.",
    },
  ],
  "/waterproofing-services": [
    {
      question: "Why do flat concrete roofs in Gauteng leak so frequently?",
      answer:
        "Highveld UV, thermal cycling, ponding, and failed detailing at outlets and penetrations age membranes quickly. Maverick specifies systems and maintenance calendars matched to substrate condition, not single-layer shortcuts.",
    },
    {
      question: "Will home insurance cover my leaking roof damage?",
      answer:
        "Policies often cover sudden storm damage but exclude gradual deterioration and lack of maintenance. Documented QA-backed maintenance programmes help trustees and owners show reasonable care, Maverick supplies reports; we do not adjudicate insurance.",
    },
    {
      question: "Torch-on or liquid membrane, which is better?",
      answer:
        "Depends on geometry, fire constraints, and substrate moisture. Open decks may suit torch-on; complex details and occupied podiums often favour liquid or hybrid programmes after adhesion and moisture testing.",
    },
    {
      question: "What do flat roof waterproofing projects cost per m²?",
      answer:
        "Indicative installed rates often sit between roughly R350 and R850 per m² for torch-on or liquid systems, driven by removal scope, falls correction, detailing complexity, and QA requirements. Accurate pricing follows measured surveys and risk items on site.",
    },
    {
      question: "How do you fix leaking balconies on sectional-title blocks?",
      answer:
        "We assess threshold detailing, screed falls, and membrane continuity, then sequence breakout, reinstating falls, and liquid or hybrid membranes with documented handover suitable for CSOS and trustee files.",
    },
    {
      question: "What is basement tanking vs positive-side waterproofing?",
      answer:
        "Positive-side systems are applied externally where excavation allows. Negative-side crystalline or cementitious tanking manages hydrostatic pressure from inside when external access is impossible, subject to engineer design.",
    },
  ],
  "/damp-proofing-services": [
    {
      question: "How can I tell the difference between rising damp and condensation?",
      answer:
        "Rising damp typically shows hygroscopic salt tide marks up to about one metre from the floor via capillary action. Condensation often appears as black mould on cold thermal bridges in bathrooms and bedrooms with poor ventilation, different remedies apply.",
    },
    {
      question: "What is negative side waterproofing for basements?",
      answer:
        "When exterior excavation is impossible, crystalline or cementitious systems are applied internally to manage hydrostatic pressure. Feasibility depends on wall build and engineer design, Maverick implements specified systems with active leak control first.",
    },
    {
      question: "What is a chemical DPC injection programme?",
      answer:
        "Silane/siloxane creams or fluids create a horizontal moisture barrier in masonry at the correct level. Replastering with salt-resistant render and reinstating finishes follows successful injection, we do not paint over active salt contamination.",
    },
    {
      question: "Can rising damp be fixed without removing plaster?",
      answer:
        "Injection may stop new moisture rise, but hygroscopic salts in existing plaster often require removal and specialist replastering. Covering symptoms with standard paint usually fails within one rainy season.",
    },
    {
      question: "Do you treat lateral damp from higher ground levels?",
      answer:
        "Yes where specified. Lateral ingress may need external grading, tanking, or cavity management in addition to DPC work. We diagnose moisture paths before recommending a single-product fix.",
    },
    {
      question: "How long does damp proofing take on occupied buildings?",
      answer:
        "Injection and replaster phases are typically phased room-by-room to limit disruption. Cure times and moisture monitoring are documented before decorative coatings are applied.",
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
    {
      question: "What is Marmoran and when is it specified?",
      answer:
        "Marmoran is a high-build textured wall coating system for estate and commercial façades needing elastomeric performance. We prepare substrates, control texture, and document film build for manufacturer warranty pathways.",
    },
    {
      question: "How does industrial corrosion control work on steel?",
      answer:
        "Typical systems sequence zinc-rich primer, epoxy intermediate, and polyurethane topcoat with documented surface preparation (Sa standards where specified) and independent QA on film thickness.",
    },
    {
      question: "Can resin floors be installed over damp substrates?",
      answer:
        "Only with approved moisture-tolerant primers or after moisture testing proves acceptable readings. We profile slabs and reject shortcuts that cause delamination under forklift traffic.",
    },
    {
      question: "Do you apply Cemcrete and decorative cementitious finishes?",
      answer:
        "Yes on specified external walls and floors. Substrate preparation, curing, and sealer selection follow manufacturer requirements for Gauteng UV and thermal cycling.",
    },
  ],
  "/painting-services": [
    {
      question: "Why is HEA airless spraying used on large commercial buildings?",
      answer:
        "High Efficiency Airless technology reduces overspray while delivering uniform film build on large fields, often 4–10× faster than roller methods on warehouses and logistics shells when preparation is disciplined.",
    },
    {
      question: "How do body corporates reduce painting liability?",
      answer:
        "STSMA requires a 10-year Maintenance, Repair and Replacement Plan (MRRP). Independent QA, manufacturer-backed systems, and phased scopes give trustees auditable proof of fiduciary care, see our body corporate solutions page.",
    },
    {
      question: "Do you paint occupied sectional-title buildings?",
      answer:
        "Yes. We plan containment, low-VOC systems, lift and parking coordination, and resident communication with night or weekend shifts where required.",
    },
    {
      question: "What is the difference between roof painting and waterproofing?",
      answer:
        "Reflective coatings manage UV and aesthetics on sound substrates. Failed membranes or active leaks need remedial waterproofing first. We diagnose before specifying coating-only scopes.",
    },
    {
      question: "Can you mark parking bays and yard lines on site?",
      answer:
        "Yes. We apply SANS-aligned layouts with MMA cold plastic or traffic-rated paints suitable for basements, logistics yards, and commercial car parks.",
    },
    {
      question: "Do you handle industrial plant and factory painting?",
      answer:
        "Yes. Programmes include corrosion control, high-temperature zones, production-friendly phasing, and QA documentation for facility managers and insurers.",
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
        "Heavy breakout, uncertified anchors, or extreme weather may require scaffold or MEWP hybrid programmes. We recommend the access method from risk and cost, not habit.",
    },
    {
      question: "Who certifies anchor points for rope access?",
      answer:
        "Anchors must be tested and tagged by competent persons. We verify existing points or coordinate engineer-designed anchor installations before technicians mobilise.",
    },
    {
      question: "Can rope access combine with waterproofing and painting?",
      answer:
        "Yes. High-rise programmes often sequence remedial repairs, membrane renewal, and final coatings under one project manager with shared QA documentation.",
    },
    {
      question: "How do you manage liability on sectional-title towers?",
      answer:
        "Safety files, method statements, resident communication, and third-party QA give trustees defensible records. We do not provide legal advice on OHS liability allocation.",
    },
    {
      question: "What weather stops rope access work?",
      answer:
        "Lightning, high wind, and wet substrates typically halt work. Programmes include contingency days and alternative access options where weather windows are narrow.",
    },
  ],
};
