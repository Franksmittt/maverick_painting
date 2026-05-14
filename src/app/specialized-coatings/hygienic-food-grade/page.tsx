import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("hygienic-food-grade");

export const metadata = buildPageMetadata(content.meta);

export default function HygienicFoodGradePage() {
  return <ServiceDeepPage content={content} />;
}
