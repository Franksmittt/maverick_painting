import type { LocationServiceMatrixEntry } from "@/data/location-service-matrix";
import { getMatrixEntriesForCity } from "@/data/location-service-matrix";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceLocation } from "@/data/locations";
import { getSpokeIdByPath } from "@/lib/get-spoke-id-by-path";
import { spokeToHubConfig } from "@/lib/spoke-to-hub-config";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

function regionLabel(region: ServiceLocation["region"]): string {
  if (region === "east-rand") return "East Rand";
  if (region === "west-rand") return "West Rand";
  if (region === "south-rand") return "South Rand";
  return "Central Gauteng";
}

export function locationToHubConfig(
  matrix: LocationServiceMatrixEntry,
  loc: ServiceLocation,
): ServiceHubPageConfig {
  const spokeId = getSpokeIdByPath(matrix.spokePath);
  if (!spokeId) {
    throw new Error(`No spoke registry entry for path: ${matrix.spokePath}`);
  }

  const spokeContent = getServiceSpoke(spokeId);
  const base = spokeToHubConfig(spokeId, spokeContent);
  const path = `/locations/${matrix.citySlug}/${matrix.serviceSlug}`;
  const region = regionLabel(loc.region);
  const siblings = getMatrixEntriesForCity(matrix.citySlug).filter(
    (entry) => entry.serviceSlug !== matrix.serviceSlug,
  );

  return {
    ...base,
    path,
    breadcrumbLabel: matrix.spokeLabel,
    breadcrumbs: [
      { label: "Locations", href: "/locations" },
      { label: region, href: `/locations/${loc.region}` },
      { label: loc.name, href: `/locations/${loc.slug}` },
      { label: matrix.spokeLabel, href: path },
    ],
    metadata: {
      title: matrix.metaTitle,
      description: matrix.metaDescription,
    },
    jsonLd: {
      name: matrix.h1.replace(/\.$/, ""),
      description: `${matrix.lead} ${matrix.localContext}`,
      serviceType: base.jsonLd.serviceType,
    },
    hero: {
      ...base.hero,
      headingId: `${matrix.citySlug}-${matrix.serviceSlug}-heading`,
      h1: matrix.h1,
      lead: matrix.lead,
      leadParagraphs: [
        matrix.localContext,
        `Mobilisation near ${loc.landmarks.join(", ")} with methodology aligned to our ${matrix.spokeLabel.toLowerCase()} programme.`,
        ...(base.hero.leadParagraphs ?? []).slice(0, 1),
      ],
      interventions: matrix.highlights.slice(0, 6),
    },
    approach: {
      ...base.approach,
      subtitle: `${matrix.spokeLabel} delivery in ${loc.name}, ${region}`,
    },
    hubSpoke: {
      headingId: `${matrix.citySlug}-local-scopes-heading`,
      title: siblings.length > 0 ? `Other scopes in ${loc.name}` : base.hubSpoke.title,
      intro:
        siblings.length > 0
          ? `Localised maintenance programmes across ${region} with links to full technical methodologies and independent QA.`
          : base.hubSpoke.intro,
      links:
        siblings.length > 0
          ? siblings.map((entry) => ({
              href: `/locations/${entry.citySlug}/${entry.serviceSlug}`,
              label: entry.spokeLabel,
              description: entry.localContext,
            }))
          : base.hubSpoke.links,
    },
    faqs: matrix.faqs,
    legalDisclaimer: matrix.disclaimer ?? base.legalDisclaimer,
  };
}
