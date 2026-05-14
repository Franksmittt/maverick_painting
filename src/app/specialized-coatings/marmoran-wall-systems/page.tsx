import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("marmoran-wall-systems");

export const metadata = buildPageMetadata(content.meta);

export default function MarmoranWallSystemsPage() {
  return <ServiceDeepPage content={content} />;
}
