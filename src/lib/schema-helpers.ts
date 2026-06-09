import { nap } from "@/lib/nap";
import { siteConfig } from "@/lib/seo";

export const baseUrl = siteConfig.url.replace(/\/$/, "");

export const organizationId = `${baseUrl}/#organization`;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function postalAddressSchema() {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  };
}

export function organizationProviderSchema() {
  return {
    "@type": "HomeAndConstructionBusiness" as const,
    "@id": organizationId,
    name: siteConfig.name,
    url: baseUrl,
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    address: postalAddressSchema(),
    ...(siteConfig.address.latitude
      ? {
          geo: {
            "@type": "GeoCoordinates" as const,
            latitude: siteConfig.address.latitude,
            longitude: siteConfig.address.longitude,
          },
        }
      : {}),
  };
}

export function cityAreaServed(cityName: string) {
  return {
    "@type": "City" as const,
    name: cityName,
    containedInPlace: {
      "@type": "AdministrativeArea" as const,
      name: "Gauteng",
    },
  };
}

export function localServiceSchema({
  name,
  description,
  cityName,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  cityName?: string;
  path?: string;
  serviceType?: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: path ? absoluteUrl(path) : undefined,
    provider: organizationProviderSchema(),
    areaServed: cityName ? cityAreaServed(cityName) : siteConfig.serviceAreas,
    ...(serviceType ? { serviceType } : {}),
  };
}
