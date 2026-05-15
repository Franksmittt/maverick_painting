import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { dampProofingHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: dampProofingHub.metadata.title,
  description: dampProofingHub.metadata.description,
  path: dampProofingHub.path,
});

export default function DampProofingServicesPage() {
  return <ServiceHubPage config={dampProofingHub} />;
}
