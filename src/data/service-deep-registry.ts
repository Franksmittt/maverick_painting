import type { ServiceDeepPageContent, ServiceSpokeId } from "@/lib/service-deep-types";
import { serviceDeepRegistryA } from "@/data/service-deep-registry-a";
import { serviceDeepRegistryB } from "@/data/service-deep-registry-b";

export const SERVICE_DEEP_REGISTRY: Record<ServiceSpokeId, ServiceDeepPageContent> = {
  ...serviceDeepRegistryA,
  ...serviceDeepRegistryB,
};

export function getServiceSpoke(id: ServiceSpokeId): ServiceDeepPageContent {
  return SERVICE_DEEP_REGISTRY[id];
}
