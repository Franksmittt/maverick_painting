import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("industrial-epoxy-flooring");

export const metadata = buildPageMetadata(content.meta);

export default function IndustrialEpoxyFlooringPage() {
  return <ServiceDeepPage content={content} />;
}
