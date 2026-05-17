import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { dampProofingHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(dampProofingHub);

export default function DampProofingServicesPage() {
  return <ServiceHubPage config={dampProofingHub} />;
}
