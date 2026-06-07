import type { ReactNode } from "react";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

function isSpokePage(config: ServiceHubPageConfig): boolean {
  return (config.breadcrumbs?.length ?? 2) > 2;
}

function enrichHubMagazineBody(
  body: ReactNode,
  config: ServiceHubPageConfig,
  index: number,
): ReactNode {
  const approachStep = config.approach.steps[index];
  const spokeLink = config.hubSpoke.links[index];

  return (
    <>
      {body}
      {approachStep ? (
        <p className="type-body text-zinc-400">{approachStep.description}</p>
      ) : null}
      {spokeLink ? (
        <p className="type-body text-zinc-400">{spokeLink.description}</p>
      ) : null}
    </>
  );
}

/** Adds hero and editorial depth for hub pages without spoke registry content. */
export function enrichHubPageConfig(config: ServiceHubPageConfig): ServiceHubPageConfig {
  if (isSpokePage(config)) return config;

  const heroParagraphs = [
    config.hero.lead,
    ...config.approach.steps.slice(0, 2).map((step) => step.description),
  ].slice(0, 3);

  return {
    ...config,
    hero: {
      ...config.hero,
      leadParagraphs: heroParagraphs,
    },
    magazine: {
      ...config.magazine,
      sections: config.magazine.sections.map((section, index) => ({
        ...section,
        body: enrichHubMagazineBody(section.body, config, index),
      })),
    },
  };
}
