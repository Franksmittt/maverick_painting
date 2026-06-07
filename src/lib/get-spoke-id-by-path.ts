import { SERVICE_DEEP_REGISTRY } from "@/data/service-deep-registry";
import type { ServiceSpokeId } from "@/lib/service-deep-types";

export function getSpokeIdByPath(path: string): ServiceSpokeId | null {
  for (const [id, content] of Object.entries(SERVICE_DEEP_REGISTRY)) {
    if (content.meta.path === path) {
      return id as ServiceSpokeId;
    }
  }
  return null;
}
