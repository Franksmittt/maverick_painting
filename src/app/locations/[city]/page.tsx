import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { MapPin, CheckSquare, Shield, Phone } from "lucide-react";
import { serviceLocations, getLocation } from "@/data/locations";
import { siteConfig } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};

  return buildPageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Painting & Waterproofing in ${loc.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: loc.name,
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    },
    areaServed: {
      "@type": "City",
      name: loc.name,
    },
  };

  const regionBlurb =
    loc.region === "east-rand"
      ? "Industrial coatings, HACCP floors, and logistics maintenance."
      : loc.region === "west-rand"
        ? "Damp proofing, basement tanking, and subsidence-aware structural work."
        : loc.region === "south-rand"
          ? "STSMA-aligned body corporate and estate programmes."
          : "Commercial, sectional-title, and mixed industrial assets.";

  return (
    <div className="bg-primary pt-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative border-b-4 border-secondary bg-gray-900 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center space-x-2 text-tertiary">
            <MapPin className="h-5 w-5" />
            <span className="font-bold uppercase tracking-widest">{loc.name} Contractor</span>
          </div>
          <h1 className="mb-6 max-w-5xl text-5xl font-extrabold uppercase leading-tight md:text-7xl">
            Reliable Asset Maintenance in {loc.name}.
          </h1>
          <p className="mb-6 max-w-3xl text-xl text-gray-400">
            Structural repairs, waterproofing, and painting with independent QA for assets near{" "}
            <span className="font-semibold text-white">{loc.landmarks.join(", ")}</span>.
          </p>
          <p className="mb-4 max-w-3xl text-lg text-gray-500">{loc.regionalNarrative}</p>
          <p className="mb-8 text-sm text-gray-500">
            Part of our{" "}
            <Link href={`/locations/${loc.region}`} className="font-semibold text-secondary hover:underline">
              {loc.region === "east-rand"
                ? "East Rand"
                : loc.region === "west-rand"
                  ? "West Rand"
                  : loc.region === "south-rand"
                    ? "South Rand"
                    : "Central Gauteng"}{" "}
              regional hub
            </Link>
            .
          </p>
          <Button asChild className="h-14 bg-secondary px-8 text-lg font-bold text-primary hover:bg-[#4AD5E2]">
            <Link href="/contact">Get a {loc.name} Quote &rarr;</Link>
          </Button>
        </div>
      </section>

      <section className="bg-primary px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold uppercase">Priority services in {loc.name}</h2>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {loc.primaryServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-gray-800 bg-gray-900 p-8 transition hover:border-secondary"
              >
                <h3 className="mb-2 text-xl font-bold text-secondary">{link.label}</h3>
                <p className="text-gray-400">Scope and methodology &rarr;</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border-t-4 border-tertiary bg-gray-900 p-8">
              <Shield className="mb-4 h-10 w-10 text-tertiary" />
              <h3 className="mb-2 text-2xl font-bold">Regional focus</h3>
              <p className="text-gray-400">{regionBlurb}</p>
            </div>
            <div className="rounded-xl border-t-4 border-secondary bg-gray-900 p-8">
              <CheckSquare className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="mb-2 text-2xl font-bold">Independent QA</h3>
              <p className="text-gray-400">
                Third-party inspection on major scopes—documented film build for trustees and facility
                managers.
              </p>
            </div>
            <div className="rounded-xl border-t-4 border-tertiary bg-gray-900 p-8">
              <Phone className="mb-4 h-10 w-10 text-tertiary" />
              <h3 className="mb-2 text-2xl font-bold">Rapid assessment</h3>
              <p className="text-gray-400">
                Mobilisation across {loc.landmarks[0]} and surrounds with photographic condition packs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
