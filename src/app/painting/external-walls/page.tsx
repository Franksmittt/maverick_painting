import { buildSpokeMetadata } from "@/lib/page-metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "external-walls";

export const metadata = buildSpokeMetadata(spokeId);

export default function ExternalWallsPage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
