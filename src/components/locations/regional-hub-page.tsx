import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import type { LocationRegionHub } from "@/data/location-regions";
import { getLocationsByRegion } from "@/data/location-regions";
import { locationServiceMatrix } from "@/data/location-service-matrix";

type RegionalHubPageProps = {
  region: LocationRegionHub;
};

export function RegionalHubPage({ region }: RegionalHubPageProps) {
  const cities = getLocationsByRegion(region.slug);
  const citySlugs = new Set(cities.map((c) => c.slug));
  const matrixInRegion = locationServiceMatrix.filter((e) => citySlugs.has(e.citySlug));

  return (
    <div className="bg-primary pt-24 text-white">
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: region.name, href: `/locations/${region.slug}` },
        ]}
      />

      <section className="page-container py-16 md:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
          Regional service hub
        </p>
        <h1 className="type-h1 mb-4 max-w-4xl">{region.headline}</h1>
        <p className="type-body mb-8 max-w-3xl text-zinc-400">{region.narrative}</p>

        <div className="mb-10 flex flex-wrap gap-3">
          {region.primaryLinks.map((link) => (
            <Button key={link.href} asChild variant="outline" className="border-secondary/40 text-white">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>

        <h2 className="type-h2 mb-4 text-white">Regional focus</h2>
        <ul className="mb-12 grid gap-3 sm:grid-cols-2">
          {region.focusAreas.map((item) => (
            <li key={item} className="flex items-start gap-2 text-zinc-300">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-secondary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="type-h2 mb-6 text-white">Cities we serve in {region.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-secondary/40"
            >
              <h3 className="mb-2 text-lg font-bold text-white group-hover:text-secondary">
                {city.name}
              </h3>
              <p className="mb-3 text-sm text-zinc-400 line-clamp-3">{city.regionalNarrative}</p>
              <span className="inline-flex items-center text-sm font-semibold text-secondary">
                View local services
                <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        {matrixInRegion.length > 0 ? (
          <>
            <h2 className="type-h2 mb-6 mt-16 text-white">Localised scopes in {region.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matrixInRegion.slice(0, 9).map((item) => {
                const cityName = cities.find((c) => c.slug === item.citySlug)?.name ?? item.citySlug;
                return (
                  <Link
                    key={`${item.citySlug}-${item.serviceSlug}`}
                    href={`/locations/${item.citySlug}/${item.serviceSlug}`}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-secondary/40"
                  >
                    <h3 className="mb-1 font-bold text-secondary">
                      {item.spokeLabel} — {cityName}
                    </h3>
                    <p className="line-clamp-2 text-sm text-zinc-400">{item.localContext}</p>
                  </Link>
                );
              })}
            </div>
          </>
        ) : null}
      </section>

      <QaProcessModule />
      <FaqSection
        headingId={`region-${region.slug}-faq`}
        title={`${region.name} FAQs`}
        items={[
          {
            question: `Why use a ${region.name} maintenance partner?`,
            answer: region.narrative,
          },
          {
            question: "Do you offer independent QA?",
            answer:
              "On agreed commercial and sectional-title scopes, third-party inspectors verify preparation and film build—see our independent QA process for detail.",
          },
        ]}
        schemaPath={`/locations/${region.slug}`}
      />
      <TrustAndCtaStrip />
    </div>
  );
}
