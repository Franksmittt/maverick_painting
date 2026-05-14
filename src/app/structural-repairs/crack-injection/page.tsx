import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("crack-injection");

export const metadata = buildPageMetadata(content.meta);

export default function CrackInjectionPage() {
  return <ServiceDeepPage content={content} />;
}
