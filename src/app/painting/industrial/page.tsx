import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("industrial-painting");

export const metadata = buildPageMetadata(content.meta);

export default function IndustrialPaintingPage() {
  return <ServiceDeepPage content={content} />;
}
