import { buildSpokeMetadata } from "@/lib/page-metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "industrial-corrosion-control";

export const metadata = buildSpokeMetadata(spokeId);

export default function IndustrialCorrosionControlPage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
