import Link from "next/link";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

const STRUCTURAL_MAGAZINE_IMAGES = [
  {
    src: "/images/structural-concrete-spalling-assessment.jpg",
    alt: "Concrete spalling assessment and hammer testing on a Gauteng high-rise façade",
  },
  {
    src: "/images/structural-concrete-spalling-repair.jpg",
    alt: "Rebar passivation and structural mortar repair during concrete cancer remediation",
  },
  {
    src: "/images/structural-concrete-spalling-handover.jpg",
    alt: "Completed concrete spalling repair with protective anti-carbonation finish",
  },
] as const;

const COATINGS_MAGAZINE_IMAGES = [
  {
    src: "/images/coatings-industrial-epoxy-surface-prep.jpg",
    alt: "Industrial epoxy floor surface preparation in a Gauteng warehouse",
  },
  {
    src: "/images/coatings-hygienic-food-grade-02.jpg",
    alt: "Completed hygienic PU-cement floor system in a food-grade facility",
  },
  {
    src: "/images/coatings-marmoran-wall-03.jpg",
    alt: "Completed Marmoran-style textured wall finish on a Gauteng façade",
  },
] as const;

const MAGAZINE_IMAGES = [
  {
    src: "/images/munyaka-midrand.jpg",
    alt: "Concrete structure diagnostics on a Gauteng sectional-title development",
  },
  {
    src: "/images/the-blyde-pretorria.jpg",
    alt: "Gauteng high-rise façade and podium with parking levels",
  },
  {
    src: "/images/eastlands-benoni.jpg",
    alt: "Structural remediation and access planning on a commercial exterior",
  },
] as const;

const ACCESS_MAGAZINE_IMAGES = [
  {
    src: "/images/access-solutions-method.jpg",
    alt: "Rope access technicians working on a high-rise façade in Gauteng",
  },
  {
    src: "/images/access-solutions-compliance.png",
    alt: "Rope access team with safety equipment on a commercial building exterior",
  },
  {
    src: "/images/access-solutions-coordination.png",
    alt: "Coordinated rope access and remedial work on a multi-storey structure",
  },
] as const;

const linkClass = "text-secondary no-underline hover:underline";

export const structuralRepairsHub: ServiceHubPageConfig = {
  path: "/structural-repairs",
  breadcrumbLabel: "Structural repairs",
  metadata: {
    title: "Structural Repairs & Remedial Concrete Contractors | Gauteng",
    description:
      "Gauteng structural repair contractors for concrete spalling, crack injection, expansion joints, and protective coatings. Engineer-aligned specifications, manufacturer-approved systems, and independent third-party QA for East Rand, West Rand, and South Rand commercial assets.",
  },
  jsonLd: {
    name: "Structural Repairs & Concrete Remediation",
    description:
      "Concrete spalling repair, crack injection, expansion joint sealing, and protective coatings for sectional-title, commercial, and industrial assets in Gauteng.",
    serviceType: [
      "Concrete spalling repair",
      "Structural crack injection",
      "Expansion joint sealing",
      "Protective coating application",
    ],
  },
  hero: {
    headingId: "structural-repairs-heading",
    h1: "Structural repairs for concrete that is failing in plain sight.",
    lead:
      "On the Gauteng Highveld, aggressive UV, thermal cycling, and chloride-laden parking environments accelerate concrete cancer faster than inland owners expect. If you are managing spalling edges, gridlines in parking, or cracks that will not stop moving, you need an asset maintenance partner who can sequence breakout, steel passivation, structural mortars, and downstream waterproofing, with independent QA your trustees can file.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Rebar passivation",
      "Structural mortars",
      "Crack injection",
      "Joint rebuilds",
      "Protective coatings",
    ],
  },
  approach: {
    headingId: "structural-remedial-approach-heading",
    title: "Our remedial approach",
    subtitle: "Engineer-approved protocols. Auditable repairs. Zero fluff.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Defect Diagnosis & Spec",
        description:
          "Moisture meters, hammer tests, and visual maps separate carbonation, chlorides, and movement before we document breakout limits and an engineer-aligned, substrate-specific specification the site team can execute without guesswork.",
      },
      {
        phase: "PHASE_02",
        title: "Concrete Remediation",
        description:
          "Delaminated concrete is removed, reinforcement is cleaned and conditioned, and section loss is rebuilt with polymer-modified structural mortars so reinstatement is engineered, not filler hiding active corrosion.",
      },
      {
        phase: "PHASE_03",
        title: "Crack Injection",
        description:
          "Epoxy or polyurethane is chosen from crack stability, moisture, and structural intent; port layouts, pressures, batch IDs, and environmental readings are logged for commercial QA files and specifier review.",
      },
      {
        phase: "PHASE_04",
        title: "Protective Coating",
        description:
          "Breathable or elastomeric manufacturer stacks close exposed concrete with disciplined film build, holidays, and adhesion checks so UV and carbonation exposure are managed on datasheet terms, not optimism.",
      },
    ],
  },
  hubSpoke: {
    headingId: "structural-services-heading",
    title: "Deep-dive structural services",
    intro:
      "Each page below targets a distinct failure mode and procurement keyword cluster, improving topical clarity for search engines and giving technical buyers the depth they expect before inviting a site walk-down.",
    links: [
      {
        href: "/structural-repairs/concrete-spalling",
        label: "Concrete spalling & concrete cancer",
        description:
          "Rebar exposure, passivation, polymer-modified mortars, anti-carbonation finishes, and QA documentation for façades, parking grids, and plant assets.",
      },
      {
        href: "/structural-repairs/crack-injection",
        label: "Structural & leak crack injection",
        description:
          "Epoxy vs polyurethane decision logic, injection porting, pressure discipline, and integration with waterproofing renewals.",
      },
      {
        href: "/structural-repairs/expansion-joint-sealing",
        label: "Expansion joint sealing",
        description:
          "Traffic-rated joint rebuilds, armour angles, podium interfaces, and phased programmes for live logistics and retail facilities.",
      },
    ],
  },
  magazine: {
    headingId: "structural-maintenance-philosophy-heading",
    title: (
      <>
        Maintenance <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why structural remediation belongs in your maintenance plan",
    sections: [
      {
        phase: "Phase 01 / Assessment",
        title: "Concrete does not negotiate.",
        image: STRUCTURAL_MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              It warns you in small pieces first, then it invoices you in big ones. Keeping spalling inside a proper
              maintenance rhythm is how you protect reserves, keep insurers calm, and avoid the repaint that lands on edges
              that are already tired.
            </p>
            <p className="type-body text-zinc-300">
              When breakouts are left in the “we will see” pile, chlorides ride deeper, patches get bigger, and the next
              contractor has to price risk you could have trimmed months ago. In sectional-title schemes, visible concrete
              cancer also arrives in trustee conversations at exactly the wrong time, often beside a{" "}
              <Link href="/painting/body-corporate" className={linkClass}>
                body corporate painting programme
              </Link>{" "}
              that needs sound arrises and balcony edges before any coating system can do its job.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / The Pattern",
        title: "Gauteng estates repeat the pattern.",
        image: STRUCTURAL_MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Edges take the weather, cars track chloride in under tyres, and a small delamination becomes a line item nobody
              wanted on the AGM agenda. These jobs are seldom a single edge. They are whole façades, parking grids, and
              trustees who need a plan they can explain without reaching for a dictionary of defects.
            </p>
            <p className="type-body text-zinc-300">
              On site, we treat evidence as the brief. Hammer sounding, cover surveys, moisture context, and photographs that
              explain why a repair detail exists, not why a sales deck says it should. Where load-bearing capacity is part of
              the story, we work to engineer specifications instead of improvising under time pressure.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Coordination",
        title: "Repair rarely travels alone.",
        image: STRUCTURAL_MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              We sequence naturally with{" "}
              <Link href="/waterproofing-services" className={linkClass}>
                waterproofing renewals
              </Link>{" "}
              and{" "}
              <Link href="/access-solutions/rope-access-painting" className={linkClass}>
                rope access programmes
              </Link>{" "}
              so temporary works, curing windows, and membrane interfaces are planned once. That is the boring kind of
              coordination that stops the classic argument where the painter blames the waterproofer, and the other way
              around. One programme, one sequence, fewer return visits.
            </p>
            <p className="type-body mb-4 text-zinc-300">
              Access, water, and concrete talk to each other whether we draw them in separate boxes or not. We prefer the
              drawing that matches how your asset actually behaves.
            </p>
            <p className="type-body text-zinc-500">
              If you are comparing Gauteng remedial contractors, ask for a method statement outline, a safety file index, and
              a redacted QA sample from a recent commercial job. We are comfortable being judged on paperwork, because that is
              how serious portfolios are run.
            </p>
          </>
        ),
      },
    ],
  },
};

export const waterproofingHub: ServiceHubPageConfig = {
  path: "/waterproofing-services",
  breadcrumbLabel: "Waterproofing services",
  metadata: {
    title: "Flat Roof & Balcony Waterproofing Services | Guaranteed Membrane Systems",
    description:
      "Specialist waterproofing contractors in Gauteng for flat concrete roofs, leaking balconies, and basement tanking. Torch-on, liquid-applied, and crystalline systems with independent third-party QA, serving East Rand logistics assets, West Rand sectional-title stock, and South Rand podium decks.",
  },
  jsonLd: {
    name: "Waterproofing & Membrane Systems",
    description:
      "Guaranteed torch-on and liquid-applied membrane systems for flat concrete roofs, leaking balconies, and basement tanking across Gauteng commercial and sectional-title assets.",
    serviceType: [
      "Flat concrete roof waterproofing",
      "Leaking balcony remediation",
      "Basement tanking",
      "Liquid-applied membrane systems",
    ],
  },
  hero: {
    headingId: "waterproofing-services-heading",
    h1: "Guaranteed waterproofing that treats water ingress as a systems problem.",
    lead:
      "Gauteng’s intense diurnal temperature swings and high-volume summer storms stress membranes at outlets, plant bases, and balcony thresholds. We specify torch-on, liquid polyurethane, or hybrid programmes after moisture risk assessment, with detailing, protection courses, and independent QA so manufacturer guarantees survive the first storm season.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Torch-on membranes",
      "Liquid-applied membranes",
      "Balcony remediation",
      "Basement tanking",
      "Parapet & flashing detail",
    ],
  },
  approach: {
    headingId: "waterproofing-approach-heading",
    title: "Our waterproofing approach",
    subtitle: "Diagnostics first. Detailing discipline. Co-signed guarantees.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Ingress Diagnosis",
        description:
          "Moisture mapping, targeted cores when justified, and written narratives separate active leaks, capillary rise, and condensation so membrane spend fixes the mechanism, not whichever symptom photographed first.",
      },
      {
        phase: "PHASE_02",
        title: "Substrate Preparation",
        description:
          "Structural repairs, screed rebuilds, and fall corrections finish before membranes bond; we refuse to glue guaranteed systems to hollow screeds, saturated concrete, or arrises that still need breakout.",
      },
      {
        phase: "PHASE_03",
        title: "Membrane Installation",
        description:
          "Torch-on or liquid manufacturer stacks are detailed at outlets, penetrations, and movement planes with reinforcement and sequential QA holds so every risky interface is built once, not patched later in the rain.",
      },
      {
        phase: "PHASE_04",
        title: "Protection & QA Handover",
        description:
          "Protection courses, traffickable wear layers where required, maintenance calendars, and independent QA records accompany handover so trustees and FMs file evidence, not apologies, after the first storm season.",
      },
    ],
  },
  hubSpoke: {
    headingId: "waterproofing-hub-spoke-heading",
    title: "Dedicated waterproofing service pages",
    intro:
      "Thin, catch-all waterproofing pages dilute intent for high-value queries like flat slab renewals, under-tile balconies, and basement tanking. Maverick’s spoke pages unpack methodology, compliance context, and BC documentation separately.",
    links: [
      {
        href: "/waterproofing/flat-concrete-roofs",
        label: "Flat concrete roof waterproofing",
        description:
          "Torch-on vs liquid trade-offs, drainage and ponding risk, UV protection, hybrid programmes, and manufacturer-backed maintenance calendars.",
      },
      {
        href: "/waterproofing/leaking-balconies",
        label: "Leaking balcony remediation",
        description:
          "Sectional-title documentation, low-disruption options, exclusive-use interfaces, and coordination with structural arris repairs.",
      },
      {
        href: "/waterproofing/basement-tanking",
        label: "Basement tanking & sub-structure waterproofing",
        description:
          "Negative- vs positive-side logic, active leak management, lift pits, and parking slabs with hydrostatic pressure risk.",
      },
      {
        href: "/waterproofing/torch-on-liquid-membranes",
        label: "Torch-on & liquid applied membranes",
        description:
          "System selection, hybrid programmes, fire constraints, and manufacturer-backed detailing for torch-on and liquid membrane stacks.",
      },
    ],
  },
  magazine: {
    headingId: "waterproofing-philosophy-heading",
    title: (
      <>
        Waterproofing <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why membrane renewals belong in your portfolio risk plan",
    sections: [
      {
        phase: "Phase 01 / Risk",
        title: "Water destroys warranties first.",
        image: MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              Ingress is the fastest way to accelerate carbonation, force unplanned special levies, and turn a cosmetic repaint
              into a structural conversation. Treating waterproofing as systems engineering, not a product pitch, is how you
              keep coating warranties alive.
            </p>
            <p className="type-body text-zinc-300">
              Our teams sequence naturally with{" "}
              <Link href="/structural-repairs" className={linkClass}>
                structural remedial work
              </Link>{" "}
              when spalling and membrane renewal must happen in one programme, and we speak the language of{" "}
              <Link href="/painting/body-corporate" className={linkClass}>
                sectional-title maintenance plans
              </Link>{" "}
              where trustees need transparent scope boundaries for insurers and attorneys.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / Systems",
        title: "Torch-on and liquid each have a place.",
        image: MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Flat concrete roofs favour disciplined falls, outlet detailing, and UV-stable protection courses. Complex parapets
              and flashings often suit seamless liquid membranes. We choose by substrate behaviour and maintenance reality, not
              by whichever system our sales desk stocks this quarter.
            </p>
            <p className="type-body text-zinc-300">
              Explore our technical guides on{" "}
              <Link href="/blog/waterproofing/liquid-vs-torch-on" className={linkClass}>
                liquid vs torch-on membranes
              </Link>{" "}
              and{" "}
              <Link href="/blog/waterproofing/leaking-balcony-fixes" className={linkClass}>
                low-disruption balcony repairs
              </Link>
              , then invite us to translate those principles into a site-specific specification for your asset.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Coordination",
        title: "Membranes rarely fail alone.",
        image: MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Balcony edges, expansion joints, and podium interfaces need one sequence, not three contractors arguing on site.
              We plan curing windows, protection courses, and handover inspections so the painter is not pricing risk the
              waterproofer left behind.
            </p>
            <p className="type-body text-zinc-500">
              When comparing Gauteng waterproofing contractors, ask for manufacturer approval letters, a redacted QA file, and
              a method statement that names penetrations and movement joints explicitly. Serious assets deserve serious paperwork.
            </p>
          </>
        ),
      },
    ],
  },
};

export const dampProofingHub: ServiceHubPageConfig = {
  path: "/damp-proofing-services",
  breadcrumbLabel: "Damp proofing services",
  metadata: {
    title: "Rising Damp & Damp Proofing Solutions | Chemical DPC & Moisture Control",
    description:
      "Specialized rising damp treatment and damp proofing contractors in Gauteng: chemical DPC injection, salt-retardant replastering, basement tanking, and diagnostics that separate capillary rise from leaks and condensation.",
  },
  jsonLd: {
    name: "Rising Damp & Damp Proofing",
    description:
      "Chemical DPC injection, salt-retardant replastering, and moisture diagnostics that separate capillary rise from leaks and condensation in Gauteng residential and commercial assets.",
    serviceType: [
      "Chemical DPC injection",
      "Rising damp treatment",
      "Salt-retardant replastering",
      "Moisture diagnostics",
    ],
  },
  hero: {
    headingId: "damp-proofing-services-heading",
    h1: "Rising damp treatment grounded in diagnostics, not guesswork.",
    lead:
      "Salt bands, blistering paint, and musty ground-floor rooms can be rising damp, lateral ingress, or condensation. We diagnose before we inject, replaster, or promise a barrier that the wall never needed.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Chemical DPC injection",
      "Salt-retardant replastering",
      "Moisture diagnostics",
      "Negative-side tanking",
      "Mould remediation protocol",
    ],
  },
  approach: {
    headingId: "damp-proofing-approach-heading",
    title: "Our damp proofing approach",
    subtitle: "Measure first. Treat the mechanism. Document the barrier.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Moisture Diagnostics",
        description:
          "Profiled readings, thermography where useful, and invasive samples when needed distinguish capillary rise, lateral bridges, and HVAC condensation before anyone drills for a chemical barrier.",
      },
      {
        phase: "PHASE_02",
        title: "Chemical DPC Injection",
        description:
          "Silane, siloxane, or resin creams are placed in regulated drill patterns to reinstate a horizontal barrier matched to single-leaf, cavity, or infill construction, spacing follows manufacturer and wall-build logic.",
      },
      {
        phase: "PHASE_03",
        title: "Salt-Retardant Replastering",
        description:
          "Contaminated plaster comes off in controlled lifts and returns with salt-retardant systems and compatible primers so finishes do not blister through hygroscopic salts left behind after the barrier installs.",
      },
      {
        phase: "PHASE_04",
        title: "Finishes & Verification",
        description:
          "Drying curves, moisture re-checks, and compatible topcoat windows are published for trustees and homeowners so decoration starts only when equilibration, not calendar optimism, supports the paint warranty.",
      },
    ],
  },
  hubSpoke: {
    headingId: "damp-proofing-hub-spoke-heading",
    title: "Dedicated damp proofing service pages",
    intro:
      "Each page below targets a distinct moisture mechanism and procurement keyword cluster, giving technical buyers the depth they expect before inviting a site walk-down.",
    links: [
      {
        href: "/damp-proofing/rising-damp-treatment",
        label: "Rising damp treatment",
        description:
          "Chemical DPC injection, salt analysis, replastering protocols, and sectional-title documentation for capillary rise in masonry walls.",
      },
      {
        href: "/waterproofing/basement-tanking",
        label: "Basement tanking & sub-structure waterproofing",
        description:
          "Negative- vs positive-side logic, active leak management, lift pits, and parking slabs with hydrostatic pressure risk.",
      },
      {
        href: "/waterproofing/leaking-balconies",
        label: "Leaking balcony remediation",
        description:
          "Sectional-title documentation, low-disruption options, exclusive-use interfaces, and coordination with structural arris repairs.",
      },
    ],
  },
  magazine: {
    headingId: "damp-proofing-philosophy-heading",
    title: (
      <>
        Damp <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why rising damp needs diagnosis before demolition",
    sections: [
      {
        phase: "Phase 01 / Diagnosis",
        title: "Not every tide mark is rising damp.",
        image: MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              It is rarely obvious which moisture mechanism you are fighting. Ground-floor staining can be a failed DPC, a bridged
              cavity, a leaking pipe, or condensation that never crossed a chemical barrier. Injecting cream into the wrong problem
              wastes reserves and leaves the real defect laughing at your repaint schedule.
            </p>
            <p className="type-body text-zinc-300">
              Our{" "}
              <Link href="/damp-proofing/rising-damp-treatment" className={linkClass}>
                rising damp treatment
              </Link>{" "}
              page walks through injection, replastering, and drying windows in the language trustees and homeowners can file,
              not the language of a product datasheet alone.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / Masonry",
        title: "Salts outlive the water you see.",
        image: MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Hygroscopic salts in plaster keep pulling moisture long after a barrier is installed. Skipping salt-retardant
              replastering is how you get the callback where the painter is blamed for a damp problem the substrate never
              finished shedding.
            </p>
            <p className="type-body text-zinc-300">
              Where below-ground structures are part of the story, we coordinate with{" "}
              <Link href="/waterproofing/basement-tanking" className={linkClass}>
                basement tanking
              </Link>{" "}
              scopes so negative-side pressure and capillary rise are not treated as the same defect with different names.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Finishes",
        title: "Paint is the last witness.",
        image: MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Finishes fail on damp walls whether the specification said “breathable” or not. We document drying targets and
              compatible primers so{" "}
              <Link href="/painting-services" className={linkClass}>
                painting programmes
              </Link>{" "}
              start on a substrate that has actually stabilised, not one that merely looks dry on a sunny Tuesday.
            </p>
            <p className="type-body text-zinc-500">
              Read our{" "}
              <Link href="/blog/waterproofing/rising-damp-guide" className={linkClass}>
                rising damp guide
              </Link>{" "}
              for the owner-facing version, then invite us to map diagnostics to a method statement you can defend at the AGM.
            </p>
          </>
        ),
      },
    ],
  },
};

export const specializedCoatingsHub: ServiceHubPageConfig = {
  path: "/specialized-coatings",
  breadcrumbLabel: "Specialized coatings",
  metadata: {
    title: "Epoxy & Polyurethane Floor Coatings | Certified Specialized Applicators",
    description:
      "Manufacturer-approved epoxy, PU-cement, Cemcrete-style floors, wall cladding, and Marmoran systems for Gauteng warehouses, food plants, homes, and premium facades.",
  },
  jsonLd: {
    name: "Specialized Coatings & High-Performance Systems",
    description:
      "Manufacturer-approved epoxy and polyurethane floors, hygienic food-grade coatings, Marmoran wall systems, and industrial corrosion control for Gauteng commercial and industrial assets.",
    serviceType: [
      "Industrial epoxy flooring",
      "Cemcrete floors",
      "Wall cladding",
      "Cemcrete external walls",
      "Hygienic food-grade coatings",
      "Marmoran wall systems",
      "Industrial corrosion control",
    ],
  },
  hero: {
    headingId: "specialized-coatings-heading",
    h1: "Epoxy, polyurethane, and architectural coatings built for traffic and compliance.",
    lead:
      "Standard paint is not a floor in a brewery, a loading bay, or a food-grade wall. We are approved applicators for high-performance systems where substrate preparation, film thickness, and manufacturer sign-off are non-negotiable.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Epoxy floors & PU floors",
      "Cemcrete floors",
      "Wall cladding",
      "Hygienic food-grade",
      "Cemcrete external walls",
    ],
  },
  approach: {
    headingId: "specialized-coatings-approach-heading",
    title: "Our coatings approach",
    subtitle: "Approved systems. Measured films. Auditable handover.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Substrate Assessment",
        description:
          "Moisture, contamination, and flatness are baselined before resin kits arrive; engineer or manufacturer hold points cover food-grade, chemical, or structural substrates that need written acceptance criteria.",
      },
      {
        phase: "PHASE_02",
        title: "Surface Preparation",
        description:
          "Diamond grind, shot blast, or scarify to the CSP the stack demands, then repair cracks and install mitigation when vapour readings say the slab is lying about being dry enough to coat.",
      },
      {
        phase: "PHASE_03",
        title: "System Application",
        description:
          "Epoxy, polyurethane, hygienic, or decorative builds follow wet-film checks, embedded reinforcement, and recoat windows with batch numbers retained for audits and manufacturer disputes.",
      },
      {
        phase: "PHASE_04",
        title: "QA & Warranty Handover",
        description:
          "Independent thickness or holiday inspection, cure verification, and co-signed warranties close only when the full specification stack, not a shortcut “practical completion” photo, is actually complete.",
      },
    ],
  },
  hubSpoke: {
    headingId: "specialized-coatings-hub-spoke-heading",
    title: "Specialized coating service pages",
    intro:
      "Industrial floors, hygienic walls, and architectural texture systems carry different compliance expectations. Each spoke below targets the procurement language and QA artefacts buyers expect before mobilisation.",
    links: [
      {
        href: "/specialized-coatings/industrial-epoxy-flooring",
        label: "Epoxy floors & polyurethane flooring",
        description:
          "Chemical resistance, traffic ratings, fast-cure options, and QA documentation for warehouses, plants, and retail back-of-house.",
      },
      {
        href: "/specialized-coatings/cemcrete-floors",
        label: "Cemcrete floors",
        description:
          "Decorative cement floor finishes with slab checks, colour samples, sealer selection, and clean maintenance handover.",
      },
      {
        href: "/specialized-coatings/wall-cladding",
        label: "Wall cladding",
        description:
          "Preparation, sealing, coating, and maintenance for feature walls, facade cladding, fixings, joints, and exposed edges.",
      },
      {
        href: "/specialized-coatings/cemcrete-external-walls",
        label: "Cemcrete external walls",
        description:
          "Exterior cementitious wall finishes with damp checks, crack preparation, sample-led texture control, and weatherproof sealing.",
      },
      {
        href: "/specialized-coatings/hygienic-food-grade",
        label: "Hygienic food-grade coatings",
        description:
          "Smooth, cleanable wall and floor systems for food and beverage facilities with audit-friendly documentation.",
      },
      {
        href: "/specialized-coatings/marmoran-wall-systems",
        label: "Marmoran wall systems",
        description:
          "Certified Marmoran application for durable architectural façades and feature walls with manufacturer-backed warranties.",
      },
      {
        href: "/specialized-coatings/industrial-corrosion-control",
        label: "Industrial corrosion control",
        description:
          "Zinc-rich primers, epoxies, and polyurethanes for steel, silos, and plant assets with DFT verification and shutdown-sensitive programmes.",
      },
    ],
  },
  magazine: {
    headingId: "specialized-coatings-philosophy-heading",
    title: (
      <>
        Coatings <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why high-performance systems fail on preparation, not product",
    sections: [
      {
        phase: "Phase 01 / Substrate",
        title: "The floor tells the truth under traffic.",
        image: COATINGS_MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              A glossy topcoat on weak concrete or rising moisture is an expensive way to learn the substrate was never ready.
              We treat industrial floors as engineered systems: preparation, primer, build coats, and protection windows that
              match how the space is actually used.
            </p>
            <p className="type-body text-zinc-300">
              Explore our{" "}
              <Link href="/specialized-coatings/industrial-epoxy-flooring" className={linkClass}>
                industrial epoxy flooring
              </Link>{" "}
              scope for chemical resistance, traffic ratings, and QA artefacts plant managers can file without translation.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / Compliance",
        title: "Food-grade is a specification, not a colour.",
        image: COATINGS_MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Hygienic environments need smooth, cleanable surfaces and documentation auditors recognise. Our{" "}
              <Link href="/specialized-coatings/hygienic-food-grade" className={linkClass}>
                hygienic food-grade
              </Link>{" "}
              programmes align film build and coving details with the hygiene outcomes the facility actually certifies against.
            </p>
            <p className="type-body text-zinc-300">
              Where plant steel is part of the same maintenance cycle, we integrate{" "}
              <Link href="/painting/industrial" className={linkClass}>
                industrial corrosion control
              </Link>{" "}
              so floors and structures are not painted by two philosophies in the same month.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Architecture",
        title: "Texture systems need certified hands.",
        image: COATINGS_MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Marmoran and other architectural coatings fail when applicators improvise outside manufacturer stacks. Our{" "}
              <Link href="/specialized-coatings/marmoran-wall-systems" className={linkClass}>
                Marmoran wall systems
              </Link>{" "}
              work is delivered by certified teams who understand humidity control, primer selection, and the maintenance
              calendar that keeps façades looking intentional, not accidental.
            </p>
            <p className="type-body text-zinc-500">
              If you are comparing specialized contractors, ask for manufacturer approval letters and a redacted thickness log
              from a recent industrial or food-grade job. Product names are easy; proof of application discipline is harder.
            </p>
          </>
        ),
      },
    ],
  },
};

export const paintingServicesHub: ServiceHubPageConfig = {
  path: "/painting-services",
  breadcrumbLabel: "Painting services",
  metadata: {
    title: "Commercial & High-Access Painting Contractors | Industrial & Body Corporate",
    description:
      "Gauteng commercial painting for body corporates, factories, warehouses, and healthcare: HEA airless spray, IRATA rope access, low-VOC hygienic coatings, and independent third-party QA across the East Rand, West Rand, and South Rand.",
  },
  jsonLd: {
    name: "Commercial & High-Access Painting",
    description:
      "Large-scale body corporate, industrial, and commercial painting with advanced access, surface preparation, and independent QA for Gauteng portfolios.",
    serviceType: [
      "Body corporate painting",
      "Industrial & factory painting",
      "Commercial façade painting",
      "Internal wall painting",
      "External wall coatings",
      "Rope access painting",
    ],
  },
  hero: {
    headingId: "painting-services-heading",
    h1: "Commercial painting programmes trustees and plant managers can defend.",
    lead:
      "Commercial painting on the Highveld is an asset maintenance decision, not a colour refresh. Maverick programmes combine substrate repairs, UV-stable 100% acrylics, HEA airless throughput for large logistics shells, IRATA rope access on towers, and bi-weekly independent QA reporting trustees and facility managers can defend at the AGM.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Body corporate programmes",
      "Industrial & factory",
      "External walls",
      "Internal walls",
      "Surface preparation",
    ],
  },
  approach: {
    headingId: "painting-services-approach-heading",
    title: "Our painting approach",
    subtitle: "Preparation discipline. Access realism. Independent QA.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Scope & Specification",
        description:
          "Surveys and maintenance-plan alignment pick coating stacks for measured substrate condition, Highveld UV, and rain exposure, no recycled specs from a building we never inspected.",
      },
      {
        phase: "PHASE_02",
        title: "Repairs & Preparation",
        description:
          "Arris repairs, crack treatment, and abrasive preparation finish before decorative coats so films are not asked to bridge defects or chloride cells they were never designed to carry.",
      },
      {
        phase: "PHASE_03",
        title: "Access & Application",
        description:
          "Rope, scaffold, or MEWP programmes match elevation geometry and resident disruption; film build and recoat windows follow datasheets while security and pavement logistics stay in the same programme narrative.",
      },
      {
        phase: "PHASE_04",
        title: "QA & Handover",
        description:
          "Photo registers, thickness checks where specified, and cleaning or re-coat guidance produce a handover trustees and asset managers can file beside manufacturer warranties without rewriting facts later.",
      },
    ],
  },
  hubSpoke: {
    headingId: "painting-services-hub-spoke-heading",
    title: "Dedicated painting service pages",
    intro:
      "Body corporate, industrial, and rope-access programmes carry different procurement keywords, safety files, and QA expectations. Each spoke below gives technical buyers the depth they need before a site walk-down.",
    links: [
      {
        href: "/painting/body-corporate",
        label: "Body corporate & sectional-title painting",
        description:
          "STSMA-aligned documentation, phasing, exclusive-use interfaces, waterproofing coordination, and QA artefacts for Gauteng complexes.",
      },
      {
        href: "/painting/industrial",
        label: "Industrial & factory painting",
        description:
          "Corrosion control, production-friendly phasing, OHS compliance, and protective systems for steel, silos, and harsh interior environments.",
      },
      {
        href: "/access-solutions/rope-access-painting",
        label: "Rope access painting",
        description:
          "IRATA-certified high-rise programmes that reduce scaffold footprints, security exposure, and programme duration on towers and complex façades.",
      },
      {
        href: "/painting/roof-painting",
        label: "Roof painting & restoration",
        description:
          "Heat-reflective coatings, tile restoration, and IBR metal roof systems with membrane-compatible protection courses.",
      },
      {
        href: "/painting/stucco-wall-coatings",
        label: "Stucco & specialized wall coatings",
        description:
          "Traditional 3-coat stucco, elastomeric crack-defense, and vapor-permeable masonry finishes with signed-off mock-ups.",
      },
      {
        href: "/painting/commercial-painting",
        label: "Commercial & healthcare painting",
        description:
          "Low-VOC and anti-microbial coatings for offices, clinics, and retail with managed disruption and compliance documentation.",
      },
      {
        href: "/painting/interior-painting",
        label: "Interior painting",
        description:
          "Dustless preparation, low-VOC systems, ceiling work, and cabinet respray for occupied homes and commercial interiors.",
      },
      {
        href: "/painting/internal-walls",
        label: "Internal walls",
        description:
          "Wall repairs, skim preparation, low-VOC coatings, feature walls, and clean occupied-building programmes.",
      },
      {
        href: "/painting/external-walls",
        label: "External walls",
        description:
          "Exterior wall coatings, crack preparation, breathable or elastomeric systems, facade access, and boundary wall maintenance.",
      },
      {
        href: "/painting/warehouse-painting",
        label: "Warehouse painting",
        description:
          "Industrial interior coatings, floor coordination, and production-friendly phasing for logistics facilities.",
      },
      {
        href: "/painting/high-volume-commercial-painting",
        label: "High-volume commercial painting",
        description:
          "HEA airless spray programmes for warehouses, logistics hubs, and large façades, 4–10× faster coverage with documented film build.",
      },
      {
        href: "/painting/parking-garage-painting",
        label: "Parking garage & basement painting",
        description:
          "Chloride-aware deck prep, traffic-rated coatings, light-reflective finishes, and line marking for occupied parking structures.",
      },
      {
        href: "/painting/road-marking",
        label: "Road, yard & car park line marking",
        description:
          "SANS-aligned layouts, MMA cold plastic, retro-reflective beads, and durable traffic paints for commercial sites.",
      },
    ],
  },
  magazine: {
    headingId: "painting-services-philosophy-heading",
    title: (
      <>
        Painting <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why commercial painting is an asset maintenance decision",
    sections: [
      {
        phase: "Phase 01 / Trustees",
        title: "Trustees do not buy paint.",
        image: MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              They buy defensible decisions: scopes aligned with 10-year maintenance thinking, safety files residents can
              scrutinise, and coating systems that survive Highveld weather without becoming next year’s special levy. Our{" "}
              <Link href="/painting/body-corporate" className={linkClass}>
                body corporate painting
              </Link>{" "}
              programmes are built for that conversation, not for a one-page quote that hides preparation.
            </p>
            <p className="type-body text-zinc-300">
              Visible cracks and spalling at balcony edges belong in{" "}
              <Link href="/structural-repairs" className={linkClass}>
                structural remedial
              </Link>{" "}
              scopes before topcoats, or the repaint fails on the same arrises within two seasons.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / Industrial",
        title: "Plant painting is production planning.",
        image: MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Factories and logistics assets need corrosion control, fast-cure options, and phasing that respects production,
              not a residential crew scaled up with bigger rollers. Our{" "}
              <Link href="/painting/industrial" className={linkClass}>
                industrial painting
              </Link>{" "}
              scopes treat OHS, surface preparation, and coating compatibility as contractual facts.
            </p>
            <p className="type-body text-zinc-300">
              Premium masonry and texture façades sit in a different discipline entirely. When trustees or developers specify{" "}
              <Link href="/painting/stucco-wall-coatings" className={linkClass}>
                stucco and specialized wall coatings
              </Link>
              , we apply manufacturer stacks with humidity control and primer systems that differ from standard exterior emulsion
              programmes.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Access",
        title: "Access choice is a cost and safety decision.",
        image: MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              High-rise complexes often benefit from{" "}
              <Link href="/access-solutions/rope-access-painting" className={linkClass}>
                rope access painting
              </Link>{" "}
              for upper elevations, reducing street-level scaffold footprints and security exposure. We integrate rope, MEWPs,
              and scaffold where each is safest and most cost-effective, not where whichever subcontractor arrived first owns
              the programme.
            </p>
            <p className="type-body text-zinc-500">
              When comparing Gauteng painting contractors, ask for a method statement outline, safety file index, and redacted QA
              from a recent commercial or sectional-title job. We are comfortable being judged on paperwork.
            </p>
          </>
        ),
      },
    ],
  },
};

export const accessSolutionsHub: ServiceHubPageConfig = {
  path: "/access-solutions",
  breadcrumbLabel: "Access solutions",
  metadata: {
    title: "Rope Access & High-Access Painting Solutions | Cost-Effective & OHS Compliant",
    description:
      "IRATA-aligned industrial rope access for Gauteng high-rise façades, silos, and sectional-title towers, integrated with waterproofing, spalling repair, and painting. OHS-compliant safety files, rescue plans, and programme savings versus scaffold-only approaches.",
  },
  jsonLd: {
    name: "Rope Access & High-Access Solutions",
    description:
      "IRATA-certified rope access, scaffolding, and MEWP programmes for high-rise façade painting, structural repairs, and industrial maintenance in Gauteng.",
    serviceType: [
      "Certified rope access",
      "Scaffolding & MEWP access",
      "High-rise façade painting",
      "OHS-compliant maintenance programmes",
    ],
  },
  hero: {
    headingId: "access-solutions-heading",
    h1: "Rope access and high-access programmes that shrink scaffold footprints.",
    lead:
      "Towers, podiums, and industrial silos need access chosen for safety, programme duration, and resident disruption, not whichever method the last contractor owned. We integrate rope, scaffold, and MEWPs into one accountable sequence.",
    interventionsLabel: "Core interventions",
    interventions: [
      "Certified rope access",
      "Scaffolding & boom lifts",
      "OHS compliance",
      "Façade painting",
      "Programme sequencing",
    ],
  },
  approach: {
    headingId: "access-solutions-approach-heading",
    title: "Our access approach",
    subtitle: "Certified teams. Audited safety files. Optimal method selection.",
    steps: [
      {
        phase: "PHASE_01",
        title: "Access Strategy",
        description:
          "Façade walks, resident constraints, and temporary works cost drive the choice between rope, scaffold, and MEWPs, logistics and security risk sit in the same comparison, not a single-line hire quote.",
      },
      {
        phase: "PHASE_02",
        title: "Safety File & Mobilisation",
        description:
          "OHS packs, rescue methodology, equipment inspections, and estate or plant inductions land before ropes tension so liability is managed with paperwork that matches how the site actually runs.",
      },
      {
        phase: "PHASE_03",
        title: "Integrated Execution",
        description:
          "Painting, waterproofing, and structural trades share one access plan and sequence so curing membranes, breakout dust, and swing stages are not fighting for the same elevation twice.",
      },
      {
        phase: "PHASE_04",
        title: "Demobilisation & QA",
        description:
          "Kit is stripped, pavements are photographed clean, and access equipment is signed off so facility teams know public realm, podiums, or bays return without rigging hardware or paint debris left behind.",
      },
    ],
  },
  hubSpoke: {
    headingId: "access-solutions-hub-spoke-heading",
    title: "Dedicated access solution service pages",
    intro:
      "Each page below targets a distinct access method and procurement keyword cluster, giving technical buyers the depth they expect before inviting a site walk-down.",
    links: [
      {
        href: "/access-solutions/rope-access-painting",
        label: "Rope access painting",
        description:
          "IRATA-certified façade painting and repairs for sectional-title towers, commercial buildings, and complex architectural elevations.",
      },
      {
        href: "/painting/body-corporate",
        label: "Body corporate & sectional-title painting",
        description:
          "STSMA-aligned documentation, phasing, and rope or scaffold strategies for Gauteng sectional-title complexes.",
      },
      {
        href: "/structural-repairs/concrete-spalling",
        label: "Concrete spalling & concrete cancer",
        description:
          "Façade and podium spalling repairs often sequenced with rope access to reduce scaffold footprints on occupied estates.",
      },
    ],
  },
  magazine: {
    headingId: "access-solutions-philosophy-heading",
    title: (
      <>
        Access <span className="text-secondary">Philosophy</span>
      </>
    ),
    subtitle: "Why access method is a programme decision, not a line item",
    sections: [
      {
        phase: "Phase 01 / Method",
        title: "The wrong access costs twice.",
        image: ACCESS_MAGAZINE_IMAGES[0],
        dropCap: true,
        body: (
          <>
            <p className="drop-cap type-body mb-4 text-zinc-300">
              A twelve-week scaffold footprint on a Sandton tower is not just expensive; it is security exposure, resident
              frustration, and a programme that outlives the weather window you needed for coatings. Rope access is not a stunt;
              it is a mobilisation strategy when certified teams and rescue plans are in place.
            </p>
            <p className="type-body text-zinc-300">
              Our{" "}
              <Link href="/access-solutions/rope-access-painting" className={linkClass}>
                rope access painting
              </Link>{" "}
              programmes combine IRATA teams with the coating and remedial scopes they actually touch, so upper elevations are
              not painted twice because access and specification were split across vendors.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 02 / Compliance",
        title: "Safety files are how serious portfolios run.",
        image: ACCESS_MAGAZINE_IMAGES[1],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Trustees, managing agents, and plant HSE managers ask for method statements, rescue plans, and induction records
              before they ask for colour charts. We treat OHS documentation as part of the deliverable, not a folder assembled
              the night before council inspection.
            </p>
            <p className="type-body text-zinc-300">
              Where structural arris repairs precede coatings, we sequence{" "}
              <Link href="/structural-repairs" className={linkClass}>
                structural remedial work
              </Link>{" "}
              under the same access plan so curing windows and handover points are owned once.
            </p>
          </>
        ),
      },
      {
        phase: "Phase 03 / Coordination",
        title: "One programme beats three mobilisations.",
        image: ACCESS_MAGAZINE_IMAGES[2],
        body: (
          <>
            <p className="type-body mb-4 text-zinc-300">
              Façade maintenance rarely stops at paint. We coordinate with{" "}
              <Link href="/waterproofing-services" className={linkClass}>
                waterproofing renewals
              </Link>{" "}
              and{" "}
              <Link href="/painting-services" className={linkClass}>
                commercial painting programmes
              </Link>{" "}
              so rope teams, membrane contractors, and QA inspectors are not tripping over separate mobilisations on the same
              elevation.
            </p>
            <p className="type-body text-zinc-500">
              When comparing access contractors, ask for IRATA certification scope, a redacted rescue plan, and a recent sectional-title
              or commercial reference. Speed without paperwork is how programmes become headlines.
            </p>
          </>
        ),
      },
    ],
  },
};

export const serviceHubPages: Record<string, ServiceHubPageConfig> = {
  "/structural-repairs": structuralRepairsHub,
  "/waterproofing-services": waterproofingHub,
  "/damp-proofing-services": dampProofingHub,
  "/specialized-coatings": specializedCoatingsHub,
  "/painting-services": paintingServicesHub,
  "/access-solutions": accessSolutionsHub,
};
