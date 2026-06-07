import type { BuildMetadataParams } from "@/lib/metadata";

export type StandaloneBlogSection = {
  heading: string;
  paragraphs: string[];
  bulletList?: string[];
};

export type StandaloneBlogArticle = {
  slug: string;
  title: string;
  lead: string;
  pillarLabel: string;
  pillarHref: string;
  categoryLabel: string;
  metadata: BuildMetadataParams;
  sections: StandaloneBlogSection[];
  cta: { heading: string; body: string; label: string; href: string };
  relatedServices?: { href: string; label: string }[];
  faqs?: { question: string; answer: string }[];
};

const articles: StandaloneBlogArticle[] = [
  {
    slug: "stsma-10-year-maintenance-plan-guide",
    title: "Demystifying the STSMA 10-Year Maintenance Plan for Trustees",
    lead:
      "Prescribed Management Rule 22 requires a Maintenance, Repair and Replacement Plan (MRRP). This guide explains what trustees must document, and how independent QA protects fiduciary decisions.",
    pillarLabel: "Structural remediation guides",
    pillarHref: "/blog/structural-remediation",
    categoryLabel: "STSMA & sectional title",
    metadata: {
      title: "STSMA 10-Year Maintenance Plan Guide for Body Corporate Trustees",
      description:
        "How PMR 22 and PMR 24 shape your 10-year MRRP, reserve planning, and defensible maintenance decisions for Gauteng sectional-title schemes.",
      path: "/blog/stsma-10-year-maintenance-plan-guide",
    },
    sections: [
      {
        heading: "Why the MRRP is not optional",
        paragraphs: [
          "The Sectional Titles Schemes Management Act (STSMA) obliges trustees to plan maintenance across common property, not react only when paint fails or roofs leak. Prescribed Management Rule 22 requires a Maintenance, Repair and Replacement Plan (MRRP) that looks forward at least ten years, while PMR 24 governs how reserve funds are raised and applied.",
          "Trustees who cannot show a credible plan, and evidence that major works followed engineer or manufacturer specifications, face personal fiduciary risk when owners or the Community Schemes Ombud Service (CSOS) challenge decisions.",
        ],
      },
      {
        heading: "What belongs in a credible MRRP",
        paragraphs: [
          "A defensible plan inventories common property elements (roofs, façades, podiums, parking structures, waterproofing, fire equipment interfaces) and assigns condition grades, remaining life, and budget phasing. Painting-only quotes without substrate diagnostics fail this test.",
        ],
        bulletList: [
          "Photographic condition logs with dated moisture and DFT readings where coatings are involved.",
          "Engineer-aligned scopes for spalling, cracks, and structural elements, not cosmetic patches.",
          "Manufacturer maintenance calendars tied to warranty validity (torch-on, liquids, membranes).",
          "Independent QA sign-off on high-value renewals to create an auditable paper trail.",
        ],
      },
      {
        heading: "How Maverick supports trustees without giving legal advice",
        paragraphs: [
          "We supply technical surveys, phased programmes, and QA documentation that managing agents can embed into MRRP updates. We do not draft PMR resolutions or interpret CSOS rulings, that remains your attorney or managing agent’s role.",
        ],
      },
    ],
    cta: {
      heading: "Request a maintenance audit",
      body: "Align your next AGM pack with engineer-aligned condition data and manufacturer-backed systems.",
      label: "Body corporate solutions",
      href: "/solutions/for-body-corporates",
    },
  },
  {
    slug: "sectional-title-reserve-fund-calculation",
    title: "Calculating Reserve Fund Contributions: A Guide for Body Corporates",
    lead:
      "Administrative versus reserve fund splits under STSMA determine whether special levies are lawful. Understand the 15% and 25% thresholds before you approve the next painting tender.",
    pillarLabel: "Structural remediation guides",
    pillarHref: "/blog/structural-remediation",
    categoryLabel: "Reserve funds",
    metadata: {
      title: "STSMA Reserve Fund Calculation Guide for Sectional Title Schemes",
      description:
        "How trustees budget reserve fund contributions, avoid unlawful special levies, and align major painting and waterproofing projects with STSMA requirements.",
      path: "/blog/sectional-title-reserve-fund-calculation",
    },
    sections: [
      {
        heading: "Administrative fund vs reserve fund",
        paragraphs: [
          "Day-to-day expenses, security, gardening, insurance administration, flow through the administrative fund. Capital renewals (roof membranes, structural spalling, podium waterproofing) should be funded from the reserve fund when properly budgeted in the MRRP.",
          "When reserve balances are insufficient, trustees may need special levies, but only within statutory processes. Under-budgeting painting while ignoring waterproofing guarantees is a common trigger for owner disputes.",
        ],
      },
      {
        heading: "The 15% and 25% planning thresholds",
        paragraphs: [
          "Scheme budgets must allocate sufficient contributions to reserves. Many managing agents model 15% of total budget as a minimum planning line, with 25% used as a stress-test when stock is ageing or prior maintenance was deferred.",
          "A single ‘cheapest painter’ quote that excludes removal, detailing, and QA often forces illegal mid-project special levies when latent defects appear on site.",
        ],
      },
      {
        heading: "Itemised bills of quantities protect trustees",
        paragraphs: [
          "Request line items for access, substrate repairs, membranes, coatings, and QA, not one blended m² rate. Maverick provides itemised responses for tender committees so reserve drawdowns map to defensible scope.",
        ],
      },
    ],
    cta: {
      heading: "Plan capital works with technical scope",
      body: "Pair reserve modelling with condition surveys so levies match real remedial need.",
      label: "Consult our team",
      href: "/contact",
    },
  },
  {
    slug: "rising-damp-vs-condensation-gauteng",
    title: "Rising Damp vs. Condensation: Diagnostic Guide for Gauteng Homes",
    lead:
      "Black mould in a bedroom is not always rising damp. Misdiagnosis wastes injection budgets and traps moisture under new paint.",
    pillarLabel: "Waterproofing guides",
    pillarHref: "/blog/waterproofing",
    categoryLabel: "Moisture diagnostics",
    metadata: {
      title: "Rising Damp vs Condensation in Gauteng | Diagnostic Guide",
      description:
        "Capillary rise, hygroscopic salts, thermal bridges, and HVAC condensation, how to tell them apart before chemical DPC injection or replastering.",
      path: "/blog/rising-damp-vs-condensation-gauteng",
    },
    sections: [
      {
        heading: "Rising damp signatures",
        paragraphs: [
          "Moisture travels upward through porous masonry when the damp proof course is bridged or absent. Tide marks with fluffy salt efflorescence typically appear up to about one metre from the floor. Ground levels, planters, and paved patios that bridge the DPC are frequent culprits on Gauteng homes.",
        ],
      },
      {
        heading: "Condensation signatures",
        paragraphs: [
          "Condensation forms where warm, humid air meets cold surfaces, bathroom ceilings, north-facing corners, and uninsulated steel windows. Black mould without salt bands often points to ventilation or leak paths, not capillary rise.",
        ],
      },
      {
        heading: "The right remedy for each mechanism",
        paragraphs: [
          "Rising damp may need chemical DPC injection and salt-retardant replaster systems. Condensation may need leak repair, extraction fans, or insulation, not injection. Maverick profiles moisture before recommending spend.",
        ],
      },
    ],
    cta: {
      heading: "Book a damp diagnostic survey",
      body: "Stop funding the wrong remedy. Get moisture profiling before injection or replastering.",
      label: "Rising damp treatment",
      href: "/damp-proofing/rising-damp-treatment",
    },
  },
  {
    slug: "highveld-climate-concrete-roof-damage",
    title: "The Highveld Climate: How Thermal Cycling Damages Concrete Roofs",
    lead:
      "Intense UV, hail, and daily thermal swing age flat concrete roofs faster than inland owners expect. Membrane choice must match climate stress, not brochure aesthetics.",
    pillarLabel: "Waterproofing guides",
    pillarHref: "/blog/waterproofing",
    categoryLabel: "Flat roofs",
    metadata: {
      title: "Highveld Climate & Concrete Roof Waterproofing in Gauteng",
      description:
        "How UV, thermal cycling, and hailstorms degrade flat concrete roofs, and which membrane systems and maintenance calendars protect Gauteng assets.",
      path: "/blog/highveld-climate-concrete-roof-damage",
    },
    sections: [
      {
        heading: "UV and polymer embrittlement",
        paragraphs: [
          "Unprotected bitumen and some acrylic topcoats embrittle under Highveld UV. Manufacturer warranties on torch-on systems often require bi-annual maintenance and reflective aluminium or elastic acrylic UV coats.",
        ],
      },
      {
        heading: "Thermal movement at outlets and parapets",
        paragraphs: [
          "Daily expansion cycles work detailing at outlets, HVAC penetrations, and parapet cants. Failed turn-ups and cracked screeds let water bypass even ‘new’ membranes if the hydraulic path is wrong.",
        ],
      },
      {
        heading: "Hail and emergency make-safe",
        paragraphs: [
          "Summer hail can fracture protection courses and expose membranes. Documented maintenance and QA logs help distinguish storm events from gradual deterioration when insurers assess claims.",
        ],
      },
    ],
    cta: {
      heading: "Upgrade to UV-stable systems",
      body: "Specify torch-on or liquid programmes with maintenance calendars matched to Highveld exposure.",
      label: "Flat roof waterproofing",
      href: "/waterproofing/flat-concrete-roofs",
    },
  },
  {
    slug: "positive-negative-side-waterproofing",
    title: "Positive vs. Negative Side Waterproofing for West Rand Basements",
    lead:
      "When you cannot excavate externally, crystalline and cementitious tanking applied internally can manage hydrostatic pressure, if the wall build and engineer design allow it.",
    pillarLabel: "Waterproofing guides",
    pillarHref: "/blog/waterproofing",
    categoryLabel: "Basement tanking",
    metadata: {
      title: "Positive vs Negative Side Basement Waterproofing | South Africa",
      description:
        "Hydrostatic pressure, crystalline slurry tanking, and when external positive-side membranes are mandatory for West Rand basements and commercial substructures.",
      path: "/blog/positive-negative-side-waterproofing",
    },
    sections: [
      {
        heading: "Positive-side (external) waterproofing",
        paragraphs: [
          "Applying membranes on the exterior ‘wet’ face keeps water out before it reaches the structure. New builds and open excavations favour positive-side sheets or liquids with protection boards.",
        ],
      },
      {
        heading: "Negative-side (internal) tanking",
        paragraphs: [
          "Retrofits in Roodepoort, Krugersdorp, and built-up nodes often cannot expose external walls. Crystalline or cementitious systems are applied internally to manage pressure, after active leaks are controlled.",
        ],
      },
      {
        heading: "Feasibility and engineer involvement",
        paragraphs: [
          "Double-leaf walls, high hydrostatic heads, and AMD-influenced groundwater may require structural upgrades, not paint-grade sealers. Maverick implements specified systems; we do not self-certify structural designs.",
        ],
      },
    ],
    cta: {
      heading: "Secure subterranean assets",
      body: "Combine active leak control with specified negative-side or hybrid tanking programmes.",
      label: "Basement tanking",
      href: "/waterproofing/basement-tanking",
    },
  },
  {
    slug: "sans-731-warehouse-line-marking",
    title: "SANS 731 Compliance: The Complete Guide to Warehouse Line Marking",
    lead:
      "Forklift routing, disabled bays, and fire lanes must survive tyre scrub. Material choice and layout standards matter for OHS audits, not only colour.",
    pillarLabel: "Industrial guides",
    pillarHref: "/blog/industrial",
    categoryLabel: "Line marking",
    metadata: {
      title: "SANS 731 Warehouse Line Marking Guide | Gauteng Contractors",
      description:
        "Safety demarcation, SANS-aligned layouts, MMA cold plastic vs acrylic, and durability for East Rand logistics and warehouse facilities.",
      path: "/blog/sans-731-warehouse-line-marking",
    },
    sections: [
      {
        heading: "Layout and visibility",
        paragraphs: [
          "Aisles, pedestrian routes, disabled parking, and fire lanes must be visible under warehouse lighting. Layouts follow SANS and facility OHS plans, not ad-hoc floor painting.",
        ],
      },
      {
        heading: "Material selection",
        paragraphs: [
          "Acrylics suit light traffic; MMA cold plastic and epoxy line systems survive heavy forklift scrub and rapid turnaround windows on logistics floors.",
        ],
      },
      {
        heading: "Surface prep and cure windows",
        paragraphs: [
          "Oil contamination and weak laitance cause peel-off within weeks. Maverick profiles substrates and publishes lane reopening times based on datasheet cure, not guesswork.",
        ],
      },
    ],
    cta: {
      heading: "Ensure OHS compliance",
      body: "Specify traffic-rated systems with documented layout and material datasheets.",
      label: "Road & yard line marking",
      href: "/painting/road-marking",
    },
  },
  {
    slug: "parking-garage-concrete-spalling-repair",
    title: "Concrete Spalling in Parking Garages: Causes and Structural Repair",
    lead:
      "Chlorides, carbonation, and traffic impact destroy parking grids. Cosmetic filler fails when rebar is still corroding beneath the patch.",
    pillarLabel: "Structural remediation guides",
    pillarHref: "/blog/structural-remediation",
    categoryLabel: "Parking structures",
    metadata: {
      title: "Parking Garage Concrete Spalling Repair | Gauteng",
      description:
        "Carbonation, chloride attack, and structural repair methodology for Gauteng parking decks, with passivation, structural mortars, and QA documentation.",
      path: "/blog/parking-garage-concrete-spalling-repair",
    },
    sections: [
      {
        heading: "Why parking decks fail faster",
        paragraphs: [
          "Vehicles carry de-icing salts and moisture into open decks. Carbonation lowers pH at rebar depth; expanding rust blows off cover. Map cracking at drainage dishes often pairs with membrane failure upstream.",
        ],
      },
      {
        heading: "Engineer-aligned repair sequence",
        paragraphs: [
          "Breakout, rebar cleaning, passivation, structural mortar build-up, and protective coatings must follow specified details. Load-bearing elements need competent-person or engineer sign-off under National Building Regulations pathways.",
        ],
      },
      {
        heading: "Phasing for occupied buildings",
        paragraphs: [
          "Lane closures, night shifts, and dust extraction are planned with facility managers so retail or office parking keeps operating on agreed bays.",
        ],
      },
    ],
    cta: {
      heading: "Schedule a structural assessment",
      body: "Document spalling extent before your next waterproofing or line-marking overlay hides active corrosion.",
      label: "Concrete spalling repair",
      href: "/structural-repairs/concrete-spalling",
    },
  },
  {
    slug: "r638-food-safety-flooring-regulations",
    title: "R638 Food Safety Regulations: Flooring Requirements for Abattoirs",
    lead:
      "Regulation R638 and HACCP programmes demand seamless, cleanable floors with integral coving, not painted concrete that chips under washdown.",
    pillarLabel: "Industrial guides",
    pillarHref: "/blog/industrial",
    categoryLabel: "HACCP floors",
    metadata: {
      title: "R638 & HACCP Food-Safe Flooring Requirements | South Africa",
      description:
        "Seamless polyurethane coving, drainage falls, chemical resistance, and documentation for abattoirs and food processing plants in Gauteng.",
      path: "/blog/r638-food-safety-flooring-regulations",
    },
    sections: [
      {
        heading: "What auditors look for",
        paragraphs: [
          "Floors must be impervious, washable, and free of joints that trap bacteria. Floor–wall coves must be continuous. Falls to drains must match hygiene zone risk.",
        ],
      },
      {
        heading: "PU-cement vs epoxy in wet zones",
        paragraphs: [
          "Thermal shock from steam cleaning pushes many plants toward polyurethane cement screeds rather than standard epoxy coatings that may chalk or delaminate under aggressive washdown.",
        ],
      },
      {
        heading: "Documentation for facility HACCP",
        paragraphs: [
          "Maverick supplies product and application evidence; the facility’s HACCP certification remains the owner’s programme. We coordinate hold points when third-party hygiene auditors are appointed.",
        ],
      },
    ],
    cta: {
      heading: "Upgrade to accredited hygienic floors",
      body: "Specify seamless systems with integral coving and chemical resistance matrices matched to your process.",
      label: "Hygienic food-grade floors",
      href: "/specialized-coatings/hygienic-food-grade",
    },
  },
  {
    slug: "rope-access-vs-scaffolding-costs",
    title: "Why Commercial Rope Access is Cheaper and Safer Than Scaffolding",
    lead:
      "For many Gauteng façades, rope access cuts mobilisation time, street footprint, and security exposure, when anchors and rescue plans are competent.",
    pillarLabel: "Industrial guides",
    pillarHref: "/blog/industrial",
    categoryLabel: "Access methods",
    metadata: {
      title: "Rope Access vs Scaffolding Costs for Commercial Painting",
      description:
        "Financial and safety comparison of IRATA-aligned rope access versus scaffold for sectional-title and commercial façade programmes in Gauteng.",
      path: "/blog/rope-access-vs-scaffolding-costs",
    },
    sections: [
      {
        heading: "Where rope access wins",
        paragraphs: [
          "High-rise sectional-title towers and plant structures often need weeks of scaffold erection, street permits, and security cordons. Certified dual-rope systems can mobilise faster on suitable elevations when anchorages are tested.",
        ],
      },
      {
        heading: "Where scaffold still applies",
        paragraphs: [
          "Heavy material hoisting, wide working platforms, or failed anchor surveys may still require scaffold or MEWP hybrids. Maverick selects access method from risk assessment, not habit.",
        ],
      },
      {
        heading: "OHS documentation trustees expect",
        paragraphs: [
          "Method statements, rescue plans, IRATA training records, and anchor test certificates belong in the safety file before work at height starts on occupied buildings.",
        ],
      },
    ],
    cta: {
      heading: "Get a rope access quote",
      body: "Reduce programme duration on suitable façades without compromising OHS files.",
      label: "Rope access painting",
      href: "/access-solutions/rope-access-painting",
    },
  },
  {
    slug: "industrial-expansion-joint-failure",
    title: "Expansion Joint Failure: Risks to Heavy Industrial Flooring",
    lead:
      "Forklift wheels destroy failed joint arrises. Traffic-rated sealants and armour must match slab movement, not hardware-store polyurethane.",
    pillarLabel: "Structural remediation guides",
    pillarHref: "/blog/structural-remediation",
    categoryLabel: "Expansion joints",
    metadata: {
      title: "Industrial Expansion Joint Failure & Repair | Gauteng",
      description:
        "Thermal movement, forklift damage, and traffic-rated joint rebuilds for warehouses, parking decks, and manufacturing slabs.",
      path: "/blog/industrial-expansion-joint-failure",
    },
    sections: [
      {
        heading: "Failure modes",
        paragraphs: [
          "Armour angles pop, elastomer inserts crack, and sealant extrudes under wheel load. Once arrises spall, tyres hammer the joint every pass.",
        ],
      },
      {
        heading: "Traffic-rated rebuilds",
        paragraphs: [
          "Manufacturer-listed sealants and armour systems are selected for movement class and wheel load. Primer, recess depth, and cure windows are documented before lanes reopen.",
        ],
      },
      {
        heading: "Interface with waterproofing",
        paragraphs: [
          "Podium and parking joints must maintain membrane continuity through the joint box, blind sealant shots risk voiding waterproofing guarantees.",
        ],
      },
    ],
    cta: {
      heading: "Repair joints before slab replacement",
      body: "Phase joint renewal around live logistics and retail traffic.",
      label: "Expansion joint sealing",
      href: "/structural-repairs/expansion-joint-sealing",
    },
  },
  {
    slug: "roof-leak-insurance-claims-maintenance",
    title: "Insurance Claims for Roof Leaks: Storm Damage vs. Maintenance",
    lead:
      "Insurers distinguish sudden storm events from gradual deterioration. QA-backed maintenance logs are your best defence when trustees file claims.",
    pillarLabel: "Waterproofing guides",
    pillarHref: "/blog/waterproofing",
    categoryLabel: "Insurance",
    metadata: {
      title: "Roof Leak Insurance Claims vs Maintenance | South Africa Guide",
      description:
        "Storm damage vs gradual wear exclusions, trustee maintenance duties, and how documented QA programmes support Gauteng sectional-title insurance claims.",
      path: "/blog/roof-leak-insurance-claims-maintenance",
    },
    sections: [
      {
        heading: "Gradual deterioration exclusions",
        paragraphs: [
          "Many policies cover sudden storm ingress but exclude leaks caused by lack of maintenance, ponding, or aged membranes. Trustees must show reasonable care, not only emergency patch quotes after failure.",
        ],
      },
      {
        heading: "What to document",
        paragraphs: [
          "Bi-annual roof inspections, outlet clearing, membrane condition photos, and manufacturer maintenance sign-offs create evidence chains managing agents can present to assessors.",
        ],
      },
      {
        heading: "Maverick’s role",
        paragraphs: [
          "We supply technical cause narratives and reinstatement specifications; we do not adjudicate insurance outcomes. Pair waterproofing renewal with QA files trustees can archive.",
        ],
      },
    ],
    cta: {
      heading: "Partner for documented maintenance",
      body: "Align waterproofing renewals with manufacturer calendars and independent QA where appointed.",
      label: "Waterproofing services",
      href: "/waterproofing-services",
    },
  },
  {
    slug: "property-developer-handover-checklist",
    title: "The Developer's Handover Checklist: Mitigating Latent Defects",
    lead:
      "SANS 10400 compliance, waterproofing warranties, and timestamped QA records protect developers during the defects liability period.",
    pillarLabel: "Structural remediation guides",
    pillarHref: "/blog/structural-remediation",
    categoryLabel: "Developers",
    metadata: {
      title: "Property Developer Handover Checklist South Africa | QA & SANS 10400",
      description:
        "Building handover checklist for developers: SANS 10400 Parts B, J, and T, waterproofing warranties, film thickness logs, and independent QA sign-off.",
      path: "/blog/property-developer-handover-checklist",
    },
    sections: [
      {
        heading: "Structural and waterproofing interfaces",
        paragraphs: [
          "Handover packs should include engineer sign-off where required, membrane holiday tests, moisture readings at coating application, and curing records for structural mortars, not only aesthetic snagging lists.",
        ],
      },
      {
        heading: "Independent QA as liability shield",
        paragraphs: [
          "Third-party verification of preparation, DFT, and environmental conditions creates timestamped proof if latent defect claims arise after transfer to body corporates or facility managers.",
        ],
      },
      {
        heading: "Developer solutions alignment",
        paragraphs: [
          "Maverick sequences remedial, waterproofing, and coating trades under one programme manager so handover dates are not undermined by access conflicts between subcontractors.",
        ],
      },
    ],
    cta: {
      heading: "Defect-free handovers",
      body: "Use our independent QA process to close the defects liability period with defensible records.",
      label: "Solutions for developers",
      href: "/solutions/for-developers",
    },
  },
  {
    slug: "sans-10021-waterproofing",
    title: "SANS 10021 Waterproofing: What Facility Managers Must Specify",
    lead:
      "South Africa’s national standard for waterproofing buildings defines how membranes, flashings, and outlets must perform, not how contractors should market generic paint-on sealants.",
    pillarLabel: "Waterproofing guides",
    pillarHref: "/blog/waterproofing",
    categoryLabel: "SANS compliance",
    metadata: {
      title: "SANS 10021 Waterproofing Guide for Commercial Buildings",
      description:
        "How SANS 10021 shapes flat roof, podium, and balcony waterproofing specifications in Gauteng, outlets, laps, curing, and independent QA for warranty validity.",
      path: "/blog/sans-10021-waterproofing",
    },
    sections: [
      {
        heading: "Why SANS 10021 matters on commercial assets",
        paragraphs: [
          "Facility managers and engineers reference SANS 10021 (waterproofing of buildings, including damp-proofing and vapour barriers) when specifying torch-on, liquid, and sheet systems. Deviations from lap widths, outlet detailing, and curing windows are common causes of premature failure, not product brand alone.",
        ],
      },
      {
        heading: "Specification elements auditors expect",
        paragraphs: [
          "A defensible scope names substrate preparation, primer compatibility, membrane build-up, termination details, and protection layers before finishes. Holiday testing and moisture readings should be scheduled before closing occupied levels.",
        ],
        bulletList: [
          "Parapet and door threshold flashings tied to movement joints.",
          "Outlet boxes and overflows independent of tile bed saturation.",
          "Compatible anti-root or trafficable protection where planters or decks apply.",
          "Third-party QA records on film build and environmental conditions.",
        ],
      },
      {
        heading: "Maverick’s role",
        paragraphs: [
          "We apply manufacturer systems aligned to SANS 10021 principles and document execution for trustees and insurers. Municipal or professional sign-off remains with your appointed engineer where required.",
        ],
      },
    ],
    cta: {
      heading: "Scope your waterproofing renewal",
      body: "Pair membrane design with independent QA so warranties survive the next Highveld storm season.",
      label: "Waterproofing services",
      href: "/waterproofing-services",
    },
  },
  {
    slug: "rope-access-ohs-compliance",
    title: "Rope Access OHS Compliance for High-Rise Painting in Gauteng",
    lead:
      "IRATA-trained teams, audited safety files, and rescue plans are non-negotiable when sectional-title towers choose rope access over street scaffold.",
    pillarLabel: "Access solutions",
    pillarHref: "/access-solutions",
    categoryLabel: "OHS & rope access",
    metadata: {
      title: "Rope Access OHS Compliance Guide | High-Rise Painting Gauteng",
      description:
        "Occupational Health and Safety Act requirements for rope access painting: IRATA levels, rescue plans, tool tethering, and coordination with body corporate security.",
      path: "/blog/rope-access-ohs-compliance",
    },
    sections: [
      {
        heading: "Legal framework",
        paragraphs: [
          "The Occupational Health and Safety Act requires a documented risk assessment, competent supervision, and emergency rescue capability for work at height. Rope access is not a shortcut around scaffold regulations, it is a specialised method with its own codes of practice.",
        ],
      },
      {
        heading: "What trustees should verify before appointing",
        paragraphs: [
          "Request IRATA operator and supervisor certifications, proof of rescue drills, public liability and COIDA cover, and a site-specific safety file addressing occupied buildings, weather holds, and dropped-object controls.",
        ],
        bulletList: [
          "Exclusion zones and resident communication for drop zones.",
          "Tool tethering and debris netting on podiums.",
          "Lightning and wind speed hold points.",
          "Coordination with estate security and access control.",
        ],
      },
      {
        heading: "Quality still requires QA",
        paragraphs: [
          "OHS compliance does not replace coating QA. Film thickness, preparation, and manufacturer data sheet adherence should still be verified by an independent inspector on major renewals.",
        ],
      },
    ],
    cta: {
      heading: "High-rise programmes with rope access",
      body: "Reduce scaffold footprint on Sandton and East Rand towers while maintaining documented coating quality.",
      label: "Rope access painting",
      href: "/access-solutions/rope-access-painting",
    },
  },
];

export const standaloneBlogArticles = articles;
