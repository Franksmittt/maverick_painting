import Link from "next/link";
import type { ReactNode } from "react";
import { serviceHubPages } from "@/data/service-hub-pages";
import type { ServiceDeepPageContent, ServiceSpokeId } from "@/lib/service-deep-types";
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

const linkClass = "text-secondary no-underline hover:underline";

const SPOKE_PARENT_HUB: Record<ServiceSpokeId, string> = {
  "concrete-spalling": "/structural-repairs",
  "crack-injection": "/structural-repairs",
  "expansion-joint-sealing": "/structural-repairs",
  "rising-damp-treatment": "/damp-proofing-services",
  "industrial-epoxy-flooring": "/specialized-coatings",
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
  "warehouse-painting": "/painting-services",
  "parking-garage-painting": "/painting-services",
  "road-marking": "/painting-services",
};

function leadForDropCap(text: string): string {
  const trimmed = text.trim();
  if (/^(It|We|They|Salt|Concrete|Masonry|Trustees|Industrial|Waterproofing|Rope)\b/i.test(trimmed)) {
    return trimmed;
  }
  const lower = trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
  return `It is rarely obvious at first glance: ${lower}`;
}

function buildApproachSteps(
  content: ServiceDeepPageContent,
  parentSteps: ServiceHubPhaseStep[],
): ServiceHubPhaseStep[] {
  const fromSections = content.sections.map((section, index) => ({
    phase: `PHASE_${String(index + 1).padStart(2, "0")}`,
    title: section.title,
    description: section.paragraphs[0] ?? "",
  }));

  const fromSubsections = content.sections.flatMap((section) =>
    (section.subsections ?? []).map((sub) => ({
      phase: "",
      title: sub.title,
      description: sub.paragraphs[0] ?? "",
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

function buildMagazineSections(
  content: ServiceDeepPageContent,
  parentMagazine: ServiceHubPageConfig["magazine"],
): ServiceHubPageConfig["magazine"]["sections"] {
  const phases = ["Phase 01 / Assessment", "Phase 02 / Execution", "Phase 03 / Handover"];
  const sources: { title: string; paragraphs: string[] }[] = [];

  for (const angle of content.caseAngles) {
    sources.push({ title: angle.title, paragraphs: [angle.summary] });
  }
  for (const section of content.sections) {
    if (sources.length >= 3) break;
    sources.push({ title: section.title, paragraphs: section.paragraphs.slice(0, 2) });
  }

  while (sources.length < 3) {
    sources.push({
      title: content.h1,
      paragraphs: [content.heroLead],
    });
  }

  return sources.slice(0, 3).map((source, index) => {
    const primary = source.paragraphs[0] ?? "";
    const secondary = source.paragraphs[1];
    const related = content.relatedServices[index] ?? content.relatedServices[0];

    const body: ReactNode = (
      <>
        <p className={index === 0 ? "drop-cap type-body mb-4 text-zinc-300" : "type-body mb-4 text-zinc-300"}>
          {index === 0 ? leadForDropCap(primary) : primary}
        </p>
        {secondary ? <p className="type-body mb-4 text-zinc-300">{secondary}</p> : null}
        {related ? (
          <p className="type-body text-zinc-300">
            Explore our{" "}
            <Link href={related.href} className={linkClass}>
              {related.label}
            </Link>{" "}
            scope for methodology, QA checkpoints, and Gauteng mobilisation detail.
          </p>
        ) : null}
      </>
    );

    return {
      phase: phases[index] ?? `Phase 0${index + 1}`,
      title: source.title,
      image: MAGAZINE_IMAGES[index % MAGAZINE_IMAGES.length],
      dropCap: index === 0,
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
      sections: buildMagazineSections(content, parentHub.magazine),
    },
  };
}
