import { notFound } from "next/navigation";
import { CityLocationPage } from "@/components/locations/city-location-page";
import { serviceLocations, getLocation } from "@/data/locations";
import { withOgImage } from "@/lib/page-metadata";

export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};

  return withOgImage({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return <CityLocationPage loc={loc} />;
}
