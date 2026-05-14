import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("flat-concrete-roofs");

export const metadata = buildPageMetadata(content.meta);

export default function FlatConcreteRoofsPage() {
  return <ServiceDeepPage content={content} />;
}
