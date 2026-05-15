import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "torch-on-liquid-membranes";

export const metadata = buildPageMetadata(getServiceSpoke(spokeId).meta);

export default function TorchOnLiquidMembranesPage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
