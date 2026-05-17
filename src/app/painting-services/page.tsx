import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { paintingServicesHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(paintingServicesHub);

export default function PaintingServicesPage() {
  return <ServiceHubPage config={paintingServicesHub} />;
}
