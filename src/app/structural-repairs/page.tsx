import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { structuralRepairsHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: structuralRepairsHub.metadata.title,
  description: structuralRepairsHub.metadata.description,
  path: structuralRepairsHub.path,
});

export default function StructuralRepairsPage() {
  return <ServiceHubPage config={structuralRepairsHub} />;
}
