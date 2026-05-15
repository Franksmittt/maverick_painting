import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { waterproofingHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: waterproofingHub.metadata.title,
  description: waterproofingHub.metadata.description,
  path: waterproofingHub.path,
});

export default function WaterproofingServicesPage() {
  return <ServiceHubPage config={waterproofingHub} />;
}
