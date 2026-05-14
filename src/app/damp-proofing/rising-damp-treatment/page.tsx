import { buildPageMetadata } from "@/lib/metadata";
import { ServiceDeepPage } from "@/components/service-deep-page";
import { getServiceSpoke } from "@/data/service-deep-registry";

const content = getServiceSpoke("rising-damp-treatment");

export const metadata = buildPageMetadata(content.meta);

export default function RisingDampTreatmentPage() {
  return <ServiceDeepPage content={content} />;
}
