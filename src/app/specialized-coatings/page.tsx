import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { specializedCoatingsHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: specializedCoatingsHub.metadata.title,
  description: specializedCoatingsHub.metadata.description,
  path: specializedCoatingsHub.path,
});

export default function SpecializedCoatingsPage() {
  return <ServiceHubPage config={specializedCoatingsHub} />;
}
