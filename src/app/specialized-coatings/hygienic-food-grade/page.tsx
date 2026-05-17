import { buildSpokeMetadata } from "@/lib/page-metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

const spokeId: ServiceSpokeId = "hygienic-food-grade";

export const metadata = buildSpokeMetadata(spokeId);

export default function HygienicFoodGradePage() {
  return <ServiceDeepPage spokeId={spokeId} />;
}
