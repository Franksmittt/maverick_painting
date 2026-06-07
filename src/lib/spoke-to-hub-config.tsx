import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { serviceHubPages } from "@/data/service-hub-pages";
import type { ServiceDeepPageContent, ServiceSpokeId } from "@/lib/service-deep-types";
import type { LegalDisclaimerVariant } from "@/components/legal-disclaimer";
import type { ServiceHubPageConfig, ServiceHubPhaseStep } from "@/lib/service-hub-types";

const MAGAZINE_IMAGES = [
  {
    src: "/images/munyaka-midrand.jpg",
    alt: "Commercial asset maintenance on a Gauteng sectional-title development",
  },
  {
    src: "/images/the-blyde-pretorria.jpg",
    alt: "High-rise façade and podium works in Pretoria",
  },
  {
    src: "/images/eastlands-benoni.jpg",
    alt: "Industrial and structural coating application in Gauteng",
  },
] as const;

const SPOKE_MAGAZINE_IMAGES: Partial<
  Record<ServiceSpokeId, readonly { src: string; alt: string }[]>
> = {
  "industrial-painting": [
    {
      src: "/images/painting-industrial-preparation.jpg",
      alt: "Industrial surface preparation and coating work on warehouse steel structures",
    },
    {
      src: "/images/painting-industrial-corrosion.jpg",
      alt: "Corrosion control and protective coatings on industrial silo and plant exteriors",
    },
    {
      src: "/images/painting-industrial-coatings.jpg",
      alt: "Multicoat epoxy and polyurethane application on a chemical plant pipe rack",
    },
  ],
  "hygienic-food-grade": [
    {
      src: "/images/coatings-hygienic-food-grade-01.jpg",
      alt: "Hygienic PU-cement or resin flooring in a food or beverage production area in Gauteng",
    },
    {
      src: "/images/coatings-hygienic-food-grade-02.jpg",
      alt: "Seamless hygienic floor with integral coving and drainage detailing for HACCP-driven facilities",
    },
    {
      src: "/images/coatings-hygienic-food-grade-03.jpg",
      alt: "Completed food-grade resin floor system ready for washdown and audit sign-off",
    },
  ],
  "body-corporate": [
    {
      src: "/images/painting-body-corporate-sandton.jpg",
      alt: "Phased exterior repainting of a Sandton sectional-title tower",
    },
    {
      src: "/images/painting-body-corporate-estate.jpg",
      alt: "Townhouse estate exterior painting and balcony edge repairs in Centurion",
    },
    {
      src: "/images/painting-body-corporate-qa.jpg",
      alt: "Body corporate painting programme with QA documentation at a Gauteng complex",
    },
  ],
  "commercial-painting": [
    {
      src: "/images/painting-commercial-healthcare.jpg",
      alt: "Healthcare suite interior painting with containment and low-VOC coatings",
    },
    {
      src: "/images/painting-commercial-campus.jpg",
      alt: "Corporate campus interior repaint with phased weekend programmes",
    },
    {
      src: "/images/painting-commercial-retail.jpg",
      alt: "Retail flagship commercial painting completed during night shifts",
    },
  ],
  "concrete-spalling": [
    {
      src: "/images/structural-concrete-spalling-assessment.jpg",
      alt: "Concrete spalling assessment and breakout on a Gauteng high-rise façade",
    },
    {
      src: "/images/structural-concrete-spalling-repair.jpg",
      alt: "Rebar passivation and structural mortar repair during concrete cancer remediation",
    },
    {
      src: "/images/structural-concrete-spalling-handover.jpg",
      alt: "Completed concrete spalling repair with protective anti-carbonation finish",
    },
  ],
  "crack-injection": [
    {
      src: "/images/structural-crack-injection-02.jpg",
      alt: "Crack mapping with chalk marks on a concrete garage column",
    },
    {
      src: "/images/structural-crack-injection-03.jpg",
      alt: "Injection ports along a single vertical crack on a boundary wall",
    },
    {
      src: "/images/structural-crack-injection-04.jpg",
      alt: "Completed injected crack on a balcony soffit with ports filled flush",
    },
  ],
  "expansion-joint-sealing": [
    {
      src: "/images/structural-expansion-joint-02.jpg",
      alt: "Worn expansion joint sealant with light arris wear before repair",
    },
    {
      src: "/images/structural-expansion-joint-03.jpg",
      alt: "Fresh saw-cut expansion joint with sealant installation in a small warehouse aisle",
    },
    {
      src: "/images/structural-expansion-joint-04.jpg",
      alt: "Completed expansion joint with flush elastomeric sealant on a parking slab",
    },
  ],
  "rising-damp-treatment": [
    {
      src: "/images/damp-rising-damp-diagnosis.jpg",
      alt: "Rising damp diagnosis and moisture profiling on masonry walls in a Gauteng home or sectional-title unit",
    },
    {
      src: "/images/damp-rising-damp-injection.jpg",
      alt: "Chemical damp-proof course injection at bed joint level with regulated drill pattern",
    },
    {
      src: "/images/damp-rising-damp-replaster.jpg",
      alt: "Salt-retardant replastering and compatible finishes after rising damp remediation",
    },
  ],
  "industrial-epoxy-flooring": [
    {
      src: "/images/coatings-industrial-epoxy-04.jpg",
      alt: "Completed cold-room epoxy or polyurethane-cement floor with coved wall base",
    },
    {
      src: "/images/coatings-industrial-epoxy-06.jpg",
      alt: "Completed epoxy lining in a small chemical storage bund",
    },
    {
      src: "/images/coatings-industrial-epoxy-07.jpg",
      alt: "Completed epoxy floor with line marking in a small fulfilment unit",
    },
  ],
  "cemcrete-floors": [
    {
      src: "/images/coatings-cemcrete-floors-05.jpg",
      alt: "Completed decorative cement floor in a small furniture showroom",
    },
    {
      src: "/images/coatings-cemcrete-floors-08.jpg",
      alt: "Finished cement floor in a suburban room renovation handover",
    },
    {
      src: "/images/coatings-cemcrete-floors-09.jpg",
      alt: "Completed decorative cement floor in a small café or guesthouse entrance",
    },
  ],
  "wall-cladding": [
    {
      src: "/images/coatings-wall-cladding-01.jpg",
      alt: "Completed external wall cladding on a Gauteng office block with composite panels",
    },
    {
      src: "/images/coatings-wall-cladding-02.jpg",
      alt: "Finished fibre-cement cladding on a Gauteng townhouse gable end",
    },
    {
      src: "/images/coatings-wall-cladding-03.jpg",
      alt: "Completed cladding on a simple estate entrance feature wall in warm grey",
    },
  ],
  "cemcrete-external-walls": [
    {
      src: "/images/coatings-cemcrete-external-walls-05.jpg",
      alt: "Completed boundary wall refresh at a sectional-title entrance",
    },
    {
      src: "/images/coatings-cemcrete-external-walls-08.jpg",
      alt: "Finished decorative cement feature wall on a normal Gauteng home",
    },
    {
      src: "/images/coatings-cemcrete-external-walls-09.jpg",
      alt: "Completed cementitious finish on a small commercial street front",
    },
  ],
  "marmoran-wall-systems": [
    {
      src: "/images/coatings-marmoran-wall-01.jpg",
      alt: "Marmoran-class decorative wall preparation and high-build textured coating work on a Gauteng façade",
    },
    {
      src: "/images/coatings-marmoran-wall-02.jpg",
      alt: "Premium textured wall coating application with granule control and signed-off mock-up reference",
    },
    {
      src: "/images/coatings-marmoran-wall-03.jpg",
      alt: "Completed Marmoran-style decorative wall finish on an estate or commercial elevation",
    },
  ],
  "industrial-corrosion-control": [
    {
      src: "/images/coatings-industrial-corrosion-01.jpg",
      alt: "Industrial corrosion assessment and coating specification on steel or concrete structures in Gauteng",
    },
    {
      src: "/images/coatings-industrial-corrosion-02.jpg",
      alt: "Surface preparation and protective coating application for corrosion control on plant or warehouse assets",
    },
    {
      src: "/images/coatings-industrial-corrosion-03.jpg",
      alt: "Completed protective coating system handover on industrial steelwork or tankage",
    },
  ],
  "flat-concrete-roofs": [
    {
      src: "/images/waterproofing-flat-roof-06.jpg",
      alt: "Completed liquid-applied flat roof renewal on a small commercial unit",
    },
    {
      src: "/images/waterproofing-flat-roof-09.jpg",
      alt: "Finished flat roof with flashed AC bases on a small office strip",
    },
    {
      src: "/images/waterproofing-flat-roof-10.jpg",
      alt: "Completed flat roof waterproofing handover on a sectional-title block",
    },
  ],
  "leaking-balconies": [
    {
      src: "/images/waterproofing-leaking-balcony-01.jpg",
      alt: "Balcony or slab edge assessment for water ingress and failed detailing on a sectional-title or commercial block",
    },
    {
      src: "/images/waterproofing-leaking-balcony-02.jpg",
      alt: "Breakout, reinstating falls, and reseating waterproofing or screed at a leaking balcony threshold",
    },
    {
      src: "/images/waterproofing-leaking-balcony-03.jpg",
      alt: "Completed balcony waterproofing and finish reinstatement with documented handover",
    },
  ],
  "torch-on-liquid-membranes": [
    {
      src: "/images/waterproofing-flat-roof-01.jpg",
      alt: "Flat roof membrane assessment before torch-on or liquid-applied renewal in Gauteng",
    },
    {
      src: "/images/waterproofing-flat-roof-02.jpg",
      alt: "Torch-on or liquid membrane installation with detailing at outlets and penetrations",
    },
    {
      src: "/images/waterproofing-flat-roof-03.jpg",
      alt: "Completed hybrid membrane programme ready for protection course and QA sign-off",
    },
  ],
  "basement-tanking": [
    {
      src: "/images/waterproofing-basement-tanking-01.jpg",
      alt: "Below-ground structure assessment for hydrostatic pressure and active leak paths",
    },
    {
      src: "/images/waterproofing-basement-tanking-02.jpg",
      alt: "Active leak management and tanking membrane installation ahead of basement handover",
    },
    {
      src: "/images/waterproofing-basement-tanking-03.jpg",
      alt: "Completed basement tanking handover with protection screed and monitoring notes",
    },
  ],
  "roof-painting": [
    {
      src: "/images/waterproofing-flat-roof-01.jpg",
      alt: "Flat or pitched roof assessment before coating or restoration in Gauteng",
    },
    {
      src: "/images/painting-industrial-preparation.jpg",
      alt: "Roof surface preparation, rust treatment, or membrane-compatible primer application",
    },
    {
      src: "/images/waterproofing-flat-roof-03.jpg",
      alt: "Completed heat-reflective or protective roof coating programme",
    },
  ],
  "stucco-wall-coatings": [
    {
      src: "/images/coatings-marmoran-wall-01.jpg",
      alt: "High-build stucco or textured wall preparation on a Gauteng estate or commercial façade",
    },
    {
      src: "/images/coatings-marmoran-wall-02.jpg",
      alt: "Stucco or elastomeric wall coating application with texture control",
    },
    {
      src: "/images/coatings-marmoran-wall-03.jpg",
      alt: "Completed stucco or specialized wall finish on an estate elevation",
    },
  ],
  "rope-access-painting": [
    {
      src: "/images/access-solutions-method.jpg",
      alt: "IRATA rope access rigging on a Gauteng high-rise façade",
    },
    {
      src: "/images/access-solutions-compliance.jpg",
      alt: "Rope access safety equipment and compliance documentation for sectional-title programmes",
    },
    {
      src: "/images/access-solutions-coordination.jpg",
      alt: "Coordinated rope access painting with remedial and waterproofing scopes",
    },
  ],
  "high-volume-commercial-painting": [
    {
      src: "/images/painting-industrial-preparation.jpg",
      alt: "Large-scale commercial surface preparation ahead of airless spray application",
    },
    {
      src: "/images/painting-industrial-coatings.jpg",
      alt: "High-volume airless spray coating on warehouse or logistics interior",
    },
    {
      src: "/images/painting-industrial-corrosion.jpg",
      alt: "Completed high-volume commercial coating programme with QA documentation",
    },
  ],
  "interior-painting": [
    {
      src: "/images/painting-commercial-campus.jpg",
      alt: "Interior commercial painting with dust control and low-VOC systems",
    },
    {
      src: "/images/painting-commercial-healthcare.jpg",
      alt: "Occupied interior repaint with containment and ventilation planning",
    },
    {
      src: "/images/painting-commercial-retail.jpg",
      alt: "Interior handover with clean-down and cure guidance for tenants",
    },
  ],
  "internal-walls": [
    {
      src: "/images/painting-commercial-campus.jpg",
      alt: "Internal wall preparation and painting in an occupied commercial interior",
    },
    {
      src: "/images/painting-commercial-healthcare.jpg",
      alt: "Low-odour internal wall coating work with containment and protection",
    },
    {
      src: "/images/painting-commercial-retail.jpg",
      alt: "Completed internal wall feature finish in a retail or office interior",
    },
  ],
  "external-walls": [
    {
      src: "/images/painting-body-corporate-sandton.jpg",
      alt: "External wall painting on a Gauteng sectional-title or commercial facade",
    },
    {
      src: "/images/painting-body-corporate-estate.jpg",
      alt: "Estate external wall coating and boundary wall preparation",
    },
    {
      src: "/images/painting-body-corporate-qa.jpg",
      alt: "External wall coating quality checks and handover documentation",
    },
  ],
  "warehouse-painting": [
    {
      src: "/images/painting-industrial-preparation.jpg",
      alt: "Warehouse interior preparation for coatings and light-reflective finishes",
    },
    {
      src: "/images/painting-industrial-coatings.jpg",
      alt: "Industrial warehouse wall and steel coating application in Gauteng",
    },
    {
      src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
      alt: "Warehouse programme coordinating walls, steel, and resin floor handover",
    },
  ],
  "parking-garage-painting": [
    {
      src: "/images/structural-expansion-joint-assessment.jpg",
      alt: "Parking deck joint and slab edge assessment before coating renewal",
    },
    {
      src: "/images/structural-expansion-joint-installation.jpg",
      alt: "Traffic-rated deck preparation and coating application in a basement garage",
    },
    {
      src: "/images/structural-expansion-joint-finish.jpg",
      alt: "Completed parking structure coatings with wayfinding-ready surfaces",
    },
  ],
  "road-marking": [
    {
      src: "/images/painting-industrial-preparation.jpg",
      alt: "Yard or car park surface preparation before line marking application",
    },
    {
      src: "/images/coatings-industrial-epoxy-completed-floor.jpg",
      alt: "Traffic-rated line marking and demarcation on industrial or commercial paving",
    },
    {
      src: "/images/painting-industrial-coatings.jpg",
      alt: "Completed SANS-aligned parking bay and yard marking programme",
    },
  ],
};

function sectionDescription(paragraphs: string[]): string {
  const parts = paragraphs.filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[1]}`.trim();
}

const linkClass = "text-secondary no-underline hover:underline";

const SPOKE_PARENT_HUB: Record<ServiceSpokeId, string> = {
  "concrete-spalling": "/structural-repairs",
  "crack-injection": "/structural-repairs",
  "expansion-joint-sealing": "/structural-repairs",
  "rising-damp-treatment": "/damp-proofing-services",
  "industrial-epoxy-flooring": "/specialized-coatings",
  "cemcrete-floors": "/specialized-coatings",
  "wall-cladding": "/specialized-coatings",
  "cemcrete-external-walls": "/specialized-coatings",
  "hygienic-food-grade": "/specialized-coatings",
  "marmoran-wall-systems": "/specialized-coatings",
  "industrial-corrosion-control": "/specialized-coatings",
  "flat-concrete-roofs": "/waterproofing-services",
  "leaking-balconies": "/waterproofing-services",
  "torch-on-liquid-membranes": "/waterproofing-services",
  "basement-tanking": "/waterproofing-services",
  "body-corporate": "/painting-services",
  "industrial-painting": "/painting-services",
  "roof-painting": "/painting-services",
  "stucco-wall-coatings": "/painting-services",
  "rope-access-painting": "/access-solutions",
  "commercial-painting": "/painting-services",
  "high-volume-commercial-painting": "/painting-services",
  "interior-painting": "/painting-services",
  "internal-walls": "/painting-services",
  "external-walls": "/painting-services",
  "warehouse-painting": "/painting-services",
  "parking-garage-painting": "/painting-services",
  "road-marking": "/painting-services",
};

function buildApproachSteps(
  content: ServiceDeepPageContent,
  parentSteps: ServiceHubPhaseStep[],
): ServiceHubPhaseStep[] {
  const fromSections = content.sections.map((section, index) => ({
    phase: `PHASE_${String(index + 1).padStart(2, "0")}`,
    title: section.title,
    description: sectionDescription(section.paragraphs),
  }));

  const fromSubsections = content.sections.flatMap((section) =>
    (section.subsections ?? []).map((sub) => ({
      phase: "",
      title: sub.title,
      description: sectionDescription(sub.paragraphs),
    })),
  );

  const combined = [...fromSections, ...fromSubsections].filter((s) => s.description);
  const steps: ServiceHubPhaseStep[] = [];

  for (let i = 0; i < 4; i++) {
    if (combined[i]) {
      steps.push({
        phase: `PHASE_${String(i + 1).padStart(2, "0")}`,
        title: combined[i].title,
        description: combined[i].description,
      });
    } else if (parentSteps[i]) {
      steps.push(parentSteps[i]);
    }
  }

  return steps.length >= 3 ? steps : parentSteps.slice(0, 4);
}

function buildHeroLeadParagraphs(content: ServiceDeepPageContent): string[] {
  const paragraphs = [content.heroLead];
  let charCount = content.heroLead.length;

  for (const section of content.sections) {
    for (const paragraph of section.paragraphs) {
      if (paragraphs.length >= 4 || charCount >= 900) break;
      paragraphs.push(paragraph);
      charCount += paragraph.length;
    }
    if (paragraphs.length >= 4 || charCount >= 900) break;
  }

  return paragraphs;
}

function buildMagazineEditorialParagraphs(
  content: ServiceDeepPageContent,
  index: number,
): string[] {
  const paragraphs: string[] = [];
  const caseAngle = content.caseAngles[index];

  if (caseAngle?.summary) {
    paragraphs.push(caseAngle.summary);
  }

  const primarySection = content.sections[index];
  const secondarySection = content.sections[(index + 1) % content.sections.length];
  const tertiarySection = content.sections[(index + 2) % content.sections.length];

  if (primarySection) {
    paragraphs.push(...primarySection.paragraphs);
    for (const subsection of primarySection.subsections ?? []) {
      paragraphs.push(...subsection.paragraphs);
    }
  }

  if (paragraphs.length < 3 && secondarySection) {
    paragraphs.push(...secondarySection.paragraphs);
  }

  if (paragraphs.length < 4 && tertiarySection && tertiarySection !== primarySection) {
    paragraphs.push(tertiarySection.paragraphs[0] ?? "");
  }

  return paragraphs.filter(Boolean).slice(0, 5);
}

function buildMagazineSections(
  spokeId: ServiceSpokeId,
  content: ServiceDeepPageContent,
): ServiceHubPageConfig["magazine"]["sections"] {
  const images = SPOKE_MAGAZINE_IMAGES[spokeId] ?? MAGAZINE_IMAGES;
  const phases = ["Phase 01 / Assessment", "Phase 02 / Execution", "Phase 03 / Handover"];
  const titles: string[] = [];

  for (const angle of content.caseAngles) {
    titles.push(angle.title);
  }
  for (const section of content.sections) {
    if (titles.length >= 3) break;
    titles.push(section.title);
  }

  while (titles.length < 3) {
    titles.push(content.h1);
  }

  return titles.slice(0, 3).map((title, index) => {
    const editorialParagraphs = buildMagazineEditorialParagraphs(content, index);
    const related = content.relatedServices[index] ?? content.relatedServices[0];

    const body: ReactNode = (
      <>
        {editorialParagraphs.map((paragraph, paragraphIndex) => (
          <p
            key={`${index}-${paragraphIndex}`}
            className={cn(
              "type-body",
              paragraphIndex === 0 ? "text-zinc-300" : "text-zinc-400",
            )}
          >
            {paragraph}
          </p>
        ))}
        {related ? (
          <p className="type-body text-zinc-500">
            Related scope:{" "}
            <Link href={related.href} className={linkClass}>
              {related.label}
            </Link>
          </p>
        ) : null}
      </>
    );

    return {
      phase: phases[index] ?? `Phase 0${index + 1}`,
      title,
      image: images[index % images.length],
      dropCap: false,
      body,
    };
  });
}

function buildInterventions(content: ServiceDeepPageContent, parentHub: ServiceHubPageConfig): string[] {
  const fromSubs = content.sections.flatMap((s) => (s.subsections ?? []).map((sub) => sub.title));
  if (fromSubs.length >= 3) return fromSubs.slice(0, 5);

  const fromRelated = content.relatedServices.map((r) => r.label).filter((l) => !l.toLowerCase().includes("hub"));
  if (fromRelated.length >= 3) return fromRelated.slice(0, 5);

  if (content.sections.length >= 3) {
    return content.sections.map((s) => s.title).slice(0, 5);
  }

  return parentHub.hero.interventions;
}

const SPOKE_LEGAL_DISCLAIMER: Partial<Record<ServiceSpokeId, LegalDisclaimerVariant>> = {
  "body-corporate": "stsma",
  "hygienic-food-grade": "haccp",
  "concrete-spalling": "structural",
  "crack-injection": "structural",
  "expansion-joint-sealing": "structural",
  "rising-damp-treatment": "structural",
  "basement-tanking": "sans-waterproofing",
  "leaking-balconies": "sans-waterproofing",
  "flat-concrete-roofs": "sans-waterproofing",
  "torch-on-liquid-membranes": "sans-waterproofing",
};

export function spokeToHubConfig(spokeId: ServiceSpokeId, content: ServiceDeepPageContent): ServiceHubPageConfig {
  const parentPath = SPOKE_PARENT_HUB[spokeId];
  const parentHub = serviceHubPages[parentPath];
  const currentLabel = content.breadcrumbs[content.breadcrumbs.length - 1]?.label ?? content.h1;

  const hubSpokeLinks = parentHub.hubSpoke.links
    .filter((link) => link.href !== content.meta.path)
    .slice(0, 3);

  return {
    path: content.meta.path,
    breadcrumbLabel: currentLabel,
    breadcrumbs: content.breadcrumbs,
    metadata: {
      title: content.meta.title,
      description: content.meta.description,
    },
    jsonLd: {
      name: content.schemaServiceName,
      description: content.schemaServiceDescription,
      serviceType: buildInterventions(content, parentHub),
    },
    hero: {
      headingId: `${spokeId}-heading`,
      h1: content.h1,
      lead: content.heroLead,
      leadParagraphs: buildHeroLeadParagraphs(content),
      interventionsLabel: parentHub.hero.interventionsLabel,
      interventions: buildInterventions(content, parentHub),
    },
    approach: {
      headingId: `${spokeId}-approach-heading`,
      title: parentHub.approach.title,
      subtitle: parentHub.approach.subtitle,
      steps: buildApproachSteps(content, parentHub.approach.steps),
    },
    hubSpoke: {
      headingId: `${spokeId}-hub-spoke-heading`,
      title: parentHub.hubSpoke.title,
      intro: parentHub.hubSpoke.intro,
      links: hubSpokeLinks.length >= 3 ? hubSpokeLinks : parentHub.hubSpoke.links.slice(0, 3),
    },
    magazine: {
      headingId: `${spokeId}-philosophy-heading`,
      title: parentHub.magazine.title,
      subtitle: parentHub.magazine.subtitle,
      sections: buildMagazineSections(spokeId, content),
    },
    faqs: content.faqs.slice(0, 6),
    legalDisclaimer: SPOKE_LEGAL_DISCLAIMER[spokeId],
  };
}
