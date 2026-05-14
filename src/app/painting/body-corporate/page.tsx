import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("body-corporate");

export const metadata = buildPageMetadata(content.meta);

export default function BodyCorporatePaintingPage() {
  return <ServiceDeepPage content={content} />;
}
