import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { buildHubMetadata } from "@/lib/page-metadata";
import { accessSolutionsHub } from "@/data/service-hub-pages";

export const metadata = buildHubMetadata(accessSolutionsHub);

export default function AccessSolutionsPage() {
  return <ServiceHubPage config={accessSolutionsHub} />;
}
