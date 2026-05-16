import { buildPageMetadata } from "@/lib/metadata";
import { getLocationRegion } from "@/data/location-regions";
import { RegionalHubPage } from "@/components/locations/regional-hub-page";
import { notFound } from "next/navigation";

const regionId = "central" as const;
const regionMeta = getLocationRegion(regionId)!;

export const metadata = buildPageMetadata({
  title: regionMeta.metaTitle,
  description: regionMeta.metaDescription,
  path: `/locations/${regionId}`,
});

export default function CentralGautengLocationsPage() {
  const region = getLocationRegion(regionId);
  if (!region) notFound();
  return <RegionalHubPage region={region} />;
}
