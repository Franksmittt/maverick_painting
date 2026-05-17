import { buildPageMetadata, type BuildMetadataParams } from "@/lib/metadata";
import { getOgImageForPath } from "@/lib/og-images";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

export function withOgImage(params: BuildMetadataParams) {
  return buildPageMetadata({
    ...params,
    image: params.image ?? getOgImageForPath(params.path ?? "/"),
  });
}

export function buildSpokeMetadata(spokeId: ServiceSpokeId) {
  const spoke = getServiceSpoke(spokeId);
  return withOgImage(spoke.meta);
}

export function buildHubMetadata(config: ServiceHubPageConfig) {
  return withOgImage({
    title: config.metadata.title,
    description: config.metadata.description,
    path: config.path,
  });
}
