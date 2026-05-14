import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("basement-tanking");

export const metadata = buildPageMetadata(content.meta);

export default function BasementTankingPage() {
  return <ServiceDeepPage content={content} />;
}
