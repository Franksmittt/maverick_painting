import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("leaking-balconies");

export const metadata = buildPageMetadata(content.meta);

export default function LeakingBalconiesPage() {
  return <ServiceDeepPage content={content} />;
}
