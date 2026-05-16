import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import { spokeToHubConfig } from "@/lib/spoke-to-hub-config";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

/** Renders a spoke service page using the same hub template as /structural-repairs. */
export function ServiceDeepPage({ spokeId }: { spokeId: ServiceSpokeId }) {
  const content = getServiceSpoke(spokeId);
  const config = spokeToHubConfig(spokeId, content);
  return <ServiceHubPage config={config} />;
}
