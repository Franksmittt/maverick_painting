import { notFound } from "next/navigation";
import { LocationServicePage } from "@/components/location-service-page";
import {
  getLocationServiceEntry,
  locationServiceMatrix,
} from "@/data/location-service-matrix";
import { getLocation } from "@/data/locations";
import { withOgImage } from "@/lib/page-metadata";
import { getOgImageForPath } from "@/lib/og-images";

export function generateStaticParams() {
  return locationServiceMatrix.map((entry) => ({
    city: entry.citySlug,
    service: entry.serviceSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const matrix = getLocationServiceEntry(city, service);
  if (!matrix || !getLocation(city)) return {};

  const path = `/locations/${city}/${service}`;
  return withOgImage({
    title: matrix.metaTitle,
    description: matrix.metaDescription,
    path,
    image: getOgImageForPath(matrix.spokePath),
  });
}

export default async function LocationServiceRoutePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city, service } = await params;
  const matrix = getLocationServiceEntry(city, service);
  if (!matrix || !getLocation(city)) notFound();

  return <LocationServicePage matrix={matrix} />;
}
