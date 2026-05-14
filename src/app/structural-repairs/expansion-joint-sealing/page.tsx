import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("expansion-joint-sealing");

export const metadata = buildPageMetadata(content.meta);

export default function ExpansionJointSealingPage() {
  return <ServiceDeepPage content={content} />;
}
