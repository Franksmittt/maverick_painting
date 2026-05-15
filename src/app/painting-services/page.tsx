import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { paintingServicesHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: paintingServicesHub.metadata.title,
  description: paintingServicesHub.metadata.description,
  path: paintingServicesHub.path,
});

export default function PaintingServicesPage() {
  return <ServiceHubPage config={paintingServicesHub} />;
}
