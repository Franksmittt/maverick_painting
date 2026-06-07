import Link from "next/link";
import Image from "next/image";
import { MapPin, Shield, CheckSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { LocationLocalProof } from "@/components/locations/location-local-proof";
import { getLocationFaqs } from "@/data/location-faqs";
import { getMatrixEntriesForCity } from "@/data/location-service-matrix";
import { serviceLinkBlurbs } from "@/data/location-service-blurbs";
import type { ServiceLocation } from "@/data/locations";
import {
  CITY_HERO_IMAGES,
  DEFAULT_CITY_HERO,
  REGION_VISUAL_STRIPS,
} from "@/data/locations-page-content";
import { siteConfig } from "@/lib/seo";

function regionLabel(region: ServiceLocation["region"]): string {
  if (region === "east-rand") return "East Rand";
  if (region === "west-rand") return "West Rand";
  if (region === "south-rand") return "South Rand";
  return "Central Gauteng";
}

function regionBlurb(region: ServiceLocation["region"]): string {
  if (region === "east-rand") return "Industrial coatings, HACCP floors, and logistics maintenance.";
  if (region === "west-rand") return "Damp proofing, basement tanking, and subsidence-aware structural work.";
  if (region === "south-rand") return "STSMA-aligned body corporate and estate programmes.";
  return "Commercial, sectional-title, and mixed industrial assets.";
}

type CityLocationPageProps = {
  loc: ServiceLocation;
};

export function CityLocationPage({ loc }: CityLocationPageProps) {
  const localMatrix = getMatrixEntriesForCity(loc.slug);
  const region = regionLabel(loc.region);
  const heroImage = CITY_HERO_IMAGES[loc.slug] ?? DEFAULT_CITY_HERO;
  const triptych = REGION_VISUAL_STRIPS[loc.region];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Painting & Waterproofing in ${loc.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url.replace(/\/$/, ""),
      telephone: siteConfig.phoneNumber,
      address: {
        "@type": "PostalAddress",
        addressLocality: loc.name,
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    },
    areaServed: { "@type": "City", name: loc.name },
  };

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema).replace(/</g, "\\u003c") }}
      />
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: region, href: `/locations/${loc.region}` },
          { label: loc.name, href: `/locations/${loc.slug}` },
        ]}
      />

      <section className="section-surface section-pad !pt-8" aria-labelledby={`${loc.slug}-hero-heading`}>
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" aria-hidden />
                {loc.name} · {region}
              </p>
              <h1 id={`${loc.slug}-hero-heading`} className="type-h1 mb-5 uppercase">
                Reliable asset maintenance in {loc.name}.
              </h1>
              <p className="type-lead mb-4 max-w-2xl text-zinc-400">
                Structural repairs, waterproofing, and painting with independent QA for assets near{" "}
                <span className="font-semibold text-white">{loc.landmarks.join(", ")}</span>.
              </p>
              <p className="type-body mb-4 max-w-2xl">{loc.regionalNarrative}</p>
              <p className="type-body mb-8 max-w-2xl text-sm text-zinc-500">
                Part of our{" "}
                <Link href={`/locations/${loc.region}`} className="font-semibold text-secondary hover:underline">
                  {region} regional hub
                </Link>
                .
              </p>
              <Button asChild className="h-auto w-fit rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request a {loc.name} assessment</Link>
              </Button>
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

      <section className="section-flow border-b border-[#2a2e33]" aria-label={`${loc.name} project photography`}>
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">{region} programmes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Recent work across {loc.name} and surrounds</h2>
          </header>
          <ServiceImageTriptych images={triptych} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-8 max-w-3xl">
            <p className="type-eyebrow mb-2">Priority scopes</p>
            <h2 className="type-h2 mb-3">Services in {loc.name}</h2>
            <p className="type-body m-0 text-zinc-500">
              Start with the scope closest to your defect brief, each links to full technical methodology and QA
              documentation.
            </p>
          </header>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.primaryServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition hover:border-secondary/40"
              >
                <h3 className="mb-2 text-lg font-bold text-white group-hover:text-secondary">{link.label}</h3>
                <p className="type-body m-0 text-sm">
                  {serviceLinkBlurbs[link.href] ?? "Manufacturer-backed scope and methodology"} →
                </p>
              </Link>
            ))}
          </div>

          {localMatrix.length > 0 ? (
            <>
              <header className="mb-6 max-w-3xl">
                <p className="type-eyebrow mb-2">Localised pages</p>
                <h2 className="type-h3 text-xl sm:text-2xl">High-intent scopes in {loc.name}</h2>
              </header>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {localMatrix.map((item) => (
                  <Link
                    key={item.serviceSlug}
                    href={`/locations/${item.citySlug}/${item.serviceSlug}`}
                    className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111] transition hover:border-secondary/40"
                  >
                    <div className="p-5">
                      <h3 className="mb-2 font-bold text-secondary group-hover:text-white">{item.spokeLabel}</h3>
                      <p className="type-body m-0 line-clamp-3 text-sm">{item.localContext}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33] bg-[#080808]">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            <article className="rounded-xl border border-t-[3px] border-white/[0.08] border-t-tertiary bg-[#111111] p-6">
              <Shield className="mb-4 h-8 w-8 text-tertiary" aria-hidden />
              <h3 className="mb-2 text-lg font-bold text-white">Regional focus</h3>
              <p className="type-body m-0 text-sm">{regionBlurb(loc.region)}</p>
            </article>
            <article className="rounded-xl border border-t-[3px] border-white/[0.08] border-t-secondary bg-[#111111] p-6">
              <CheckSquare className="mb-4 h-8 w-8 text-secondary" aria-hidden />
              <h3 className="mb-2 text-lg font-bold text-white">Independent QA</h3>
              <p className="type-body m-0 text-sm">
                Third-party inspection on major scopes with documented film build for trustees and facility
                managers.{" "}
                <Link href="/our-process-independent-qa" className="text-secondary hover:underline">
                  View our QA process
                </Link>
                .
              </p>
            </article>
            <article className="rounded-xl border border-t-[3px] border-white/[0.08] border-t-tertiary bg-[#111111] p-6">
              <Phone className="mb-4 h-8 w-8 text-tertiary" aria-hidden />
              <h3 className="mb-2 text-lg font-bold text-white">Rapid assessment</h3>
              <p className="type-body m-0 text-sm">
                Mobilisation across {loc.landmarks[0]} and surrounds with photographic condition packs.
              </p>
            </article>
          </div>
        </div>
      </section>

      <LocationLocalProof loc={loc} />
      <QaProcessModule />
      <FaqSection
        headingId={`location-${loc.slug}-faq`}
        title={`${loc.name} service FAQs`}
        items={getLocationFaqs(loc)}
        schemaPath={`/locations/${loc.slug}`}
      />
      <TrustAndCtaStrip />
    </div>
  );
}
