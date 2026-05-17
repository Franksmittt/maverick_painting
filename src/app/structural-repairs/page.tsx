import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { structuralRepairsHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(structuralRepairsHub);

export default function StructuralRepairsPage() {
  return <ServiceHubPage config={structuralRepairsHub} />;
}
