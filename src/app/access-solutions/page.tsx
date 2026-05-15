import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildPageMetadata } from "@/lib/metadata";
import { accessSolutionsHub } from "@/data/service-hub-pages";

export const metadata = buildPageMetadata({
  title: accessSolutionsHub.metadata.title,
  description: accessSolutionsHub.metadata.description,
  path: accessSolutionsHub.path,
});

export default function AccessSolutionsPage() {
  return <ServiceHubPage config={accessSolutionsHub} />;
}
