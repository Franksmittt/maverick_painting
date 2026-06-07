import { buildSpokeMetadata } from "@/lib/page-metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "wall-cladding";

export const metadata = buildSpokeMetadata(spokeId);

export default function WallCladdingPage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
