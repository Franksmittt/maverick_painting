import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { waterproofingHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(waterproofingHub);

export default function WaterproofingServicesPage() {
  return <ServiceHubPage config={waterproofingHub} />;
}
