import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("rope-access-painting");

export const metadata = buildPageMetadata(content.meta);

export default function RopeAccessPaintingPage() {
  return <ServiceDeepPage content={content} />;
}
