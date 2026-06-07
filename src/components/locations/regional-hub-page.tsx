import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import type { LocationRegionHub } from "@/data/location-regions";
import { getLocationsByRegion } from "@/data/location-regions";
import { locationServiceMatrix } from "@/data/location-service-matrix";
import { REGION_VISUAL_STRIPS } from "@/data/locations-page-content";

type RegionalHubPageProps = {
  region: LocationRegionHub;
};

export function RegionalHubPage({ region }: RegionalHubPageProps) {
  const cities = getLocationsByRegion(region.slug);
  const citySlugs = new Set(cities.map((c) => c.slug));
  const matrixInRegion = locationServiceMatrix.filter((e) => citySlugs.has(e.citySlug));
  const triptych = REGION_VISUAL_STRIPS[region.slug];
  const heroImage = triptych[0];

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: region.name, href: `/locations/${region.slug}` },
        ]}
      />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3">Regional service hub</p>
              <h1 className="type-h1 mb-5 max-w-4xl uppercase">{region.headline}</h1>
              <p className="type-lead mb-8 max-w-3xl text-zinc-400">{region.narrative}</p>
              <div className="flex flex-wrap gap-3">
                {region.primaryLinks.map((link) => (
                  <Button key={link.href} asChild variant="outline" className="border-secondary/40 text-white hover:bg-white/5">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">{region.name} programmes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">On-site work across the region</h2>
          </header>
          <ServiceImageTriptych images={triptych} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <h2 className="type-h2 mb-4">Regional focus</h2>
          <ul className="mb-12 grid gap-3 sm:grid-cols-2">
            {region.focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-2 text-zinc-300">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="type-h2 mb-6">Cities we serve in {region.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-[#111111] p-5 transition hover:border-secondary/40"
              >
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-secondary">{city.name}</h3>
                <p className="mb-3 line-clamp-3 text-sm text-zinc-400">{city.regionalNarrative}</p>
                <span className="inline-flex items-center text-sm font-semibold text-secondary">
                  View local services
                  <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          {matrixInRegion.length > 0 ? (
            <>
              <h2 className="type-h2 mb-6 mt-16">Localised scopes in {region.name}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {matrixInRegion.slice(0, 9).map((item) => {
                  const cityName = cities.find((c) => c.slug === item.citySlug)?.name ?? item.citySlug;
                  return (
                    <Link
                      key={`${item.citySlug}-${item.serviceSlug}`}
                      href={`/locations/${item.citySlug}/${item.serviceSlug}`}
                      className="rounded-xl border border-white/[0.08] bg-[#111111] p-5 transition hover:border-secondary/40"
                    >
                      <h3 className="mb-1 font-bold text-secondary">
                        {item.spokeLabel}, {cityName}
                      </h3>
                      <p className="line-clamp-2 text-sm text-zinc-400">{item.localContext}</p>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
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
              "On agreed commercial and sectional-title scopes, third-party inspectors verify preparation and film build, see our independent QA process for detail.",
          },
          {
            question: `Which cities are covered in ${region.name}?`,
            answer: `We serve ${cities.map((c) => c.name).join(", ")} and surrounding nodes. Each city page lists local landmarks, scopes, and mobilisation detail.`,
          },
          {
            question: "Can you combine structural, waterproofing, and painting scopes?",
            answer:
              "Yes. Regional programmes often sequence spalling repair, membrane renewal, and final coatings under one project manager with shared QA documentation.",
          },
          {
            question: "How quickly can you assess an asset in this region?",
            answer:
              "Subject to access and safety files, condition assessments are typically scheduled within a few business days across Gauteng regional hubs.",
          },
          {
            question: "Do you provide documentation for trustees and insurers?",
            answer:
              "On agreed scopes we supply photographic condition packs, manufacturer adherence records, and third-party QA reports supporting MRRP and maintenance-of-cover arguments.",
          },
        ]}
        schemaPath={`/locations/${region.slug}`}
      />
      <TrustAndCtaStrip />
    </div>
  );
}
