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
      src: "/images/painting-industrial-05.jpg",
      alt: "Completed logistics hall interior repaint with refreshed walls and columns in Isando",
    },
    {
      src: "/images/painting-industrial-08.jpg",
      alt: "Completed low-odour interior wall repaint in a small Gauteng food production washdown area",
    },
    {
      src: "/images/painting-industrial-09.jpg",
      alt: "Completed workshop interior and steel coating handover at a Gauteng assembly plant",
    },
  ],
  "hygienic-food-grade": [
    {
      src: "/images/coatings-hygienic-food-grade-05.jpg",
      alt: "Completed hygienic floor in a small Gauteng craft beverage bottling room",
    },
    {
      src: "/images/coatings-hygienic-food-grade-08.jpg",
      alt: "Completed thermal-shock hygienic floor at a cold-room threshold in Gauteng",
    },
    {
      src: "/images/coatings-hygienic-food-grade-09.jpg",
      alt: "Completed hygienic floor and bund walkway in a small Gauteng beverage plant",
    },
  ],
  "body-corporate": [
    {
      src: "/images/painting-body-corporate-04.jpg",
      alt: "Completed double-storey body corporate block after full exterior repaint handover",
    },
    {
      src: "/images/painting-body-corporate-estate.jpg",
      alt: "Townhouse estate exterior painting and balcony edge repairs in Centurion",
    },
    {
      src: "/images/painting-body-corporate-05.jpg",
      alt: "Completed townhouse estate exterior painting along paved driveways in Gauteng",
    },
  ],
  "commercial-painting": [
    {
      src: "/images/painting-commercial-05.jpg",
      alt: "Completed ward hallway with antimicrobial wall coatings and seamless flooring in a new Gauteng hospital",
    },
    {
      src: "/images/painting-commercial-08.jpg",
      alt: "Completed low-VOC wall and floor coatings in an empty hospital consultation room in Gauteng",
    },
    {
      src: "/images/painting-commercial-09.jpg",
      alt: "Completed empty hospital wing corridor intersection with resin floors and wall coatings in Gauteng",
    },
  ],
  "concrete-spalling": [
    {
      src: "/images/structural-concrete-spalling-05.jpg",
      alt: "Completed spalling repair on a townhouse carport beam and column in Gauteng",
    },
    {
      src: "/images/structural-concrete-spalling-08.jpg",
      alt: "Completed concrete spalling repair on a small Gauteng warehouse tilt-up panel",
    },
    {
      src: "/images/structural-concrete-spalling-09.jpg",
      alt: "Completed spalling repair on a modest Gauteng estate retaining wall",
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
      src: "/images/coatings-marmoran-wall-05.jpg",
      alt: "Completed Marmoran decorative finish on an estate boundary feature wall in Gauteng",
    },
    {
      src: "/images/coatings-marmoran-wall-08.jpg",
      alt: "Completed Marmoran decorative textured feature wall in a Gauteng living area",
    },
    {
      src: "/images/coatings-marmoran-wall-09.jpg",
      alt: "Completed Marmoran decorative textured façade on a small Gauteng commercial unit",
    },
  ],
  "industrial-corrosion-control": [
    {
      src: "/images/coatings-industrial-corrosion-05.jpg",
      alt: "Completed corrosion protection on warehouse portal frame steel in Gauteng",
    },
    {
      src: "/images/coatings-industrial-corrosion-08.jpg",
      alt: "Completed corrosion protection on bund wall steel at a small Gauteng chemical plant",
    },
    {
      src: "/images/coatings-industrial-corrosion-09.jpg",
      alt: "Completed protective coating on plant walkway handrail and support steel in Gauteng",
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
      src: "/images/waterproofing-leaking-balcony-02.jpg",
      alt: "Balcony threshold breakout and membrane renewal at a leaking slab edge",
    },
    {
      src: "/images/waterproofing-leaking-balcony-07.jpg",
      alt: "Completed estate townhouse balcony with sealed balustrade junction",
    },
    {
      src: "/images/waterproofing-leaking-balcony-08.jpg",
      alt: "Finished waterproofed patio at a small restaurant or café",
    },
  ],
  "torch-on-liquid-membranes": [
    {
      src: "/images/waterproofing-torch-on-liquid-05.jpg",
      alt: "Completed liquid membrane renewal on a small flat roof wing",
    },
    {
      src: "/images/waterproofing-torch-on-liquid-08.jpg",
      alt: "Finished cold-applied liquid membrane on a small retail podium roof",
    },
    {
      src: "/images/waterproofing-torch-on-liquid-09.jpg",
      alt: "Completed hybrid torch-on and liquid membrane roof on a small office unit",
    },
  ],
  "basement-tanking": [
    {
      src: "/images/waterproofing-basement-tanking-05.jpg",
      alt: "Completed negative-side tanking in a small office basement car park corner",
    },
    {
      src: "/images/waterproofing-basement-tanking-08.jpg",
      alt: "Finished basement parking under a normal townhouse or apartment block",
    },
    {
      src: "/images/waterproofing-basement-tanking-09.jpg",
      alt: "Wide completed basement car park waterproofing handover with dry bays",
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
      src: "/images/painting-stucco-05.jpg",
      alt: "Completed soft greige interior stucco wall in a formal dining room in Gauteng",
    },
    {
      src: "/images/painting-stucco-08.jpg",
      alt: "Completed soft greige interior stucco in a styled living or dining space in Gauteng",
    },
    {
      src: "/images/painting-stucco-09.jpg",
      alt: "Completed warm off-white interior stucco on a lounge corner wall in a Gauteng home",
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
      src: "/images/painting-parking-garage-05.jpg",
      alt: "Completed deck and wall coatings in a small neighbourhood shopping centre parking garage in Gauteng",
    },
    {
      src: "/images/painting-parking-garage-08.jpg",
      alt: "Completed parking deck coatings on a larger shopping centre level in Gauteng",
    },
    {
      src: "/images/painting-parking-garage-09.jpg",
      alt: "Completed ramp and wall coatings at a Gauteng residential or retail parking structure",
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
