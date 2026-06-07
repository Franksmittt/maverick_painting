import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import type { LocationServiceMatrixEntry } from "@/data/location-service-matrix";
import { getLocation } from "@/data/locations";
import { locationToHubConfig } from "@/lib/location-to-hub-config";

export function LocationServicePage({ matrix }: { matrix: LocationServiceMatrixEntry }) {
  const loc = getLocation(matrix.citySlug);
  if (!loc) return null;

  return <ServiceHubPage config={locationToHubConfig(matrix, loc)} />;
}
