import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { specializedCoatingsHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(specializedCoatingsHub);

export default function SpecializedCoatingsPage() {
  return <ServiceHubPage config={specializedCoatingsHub} />;
}
