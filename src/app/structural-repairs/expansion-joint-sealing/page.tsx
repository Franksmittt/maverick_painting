import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "expansion-joint-sealing";

export const metadata = buildPageMetadata(getServiceSpoke(spokeId).meta);

export default function ExpansionJointSealingPage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
