import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { Button } from "@/components/ui/button";
import { locationRegionHubs } from "@/data/location-regions";
import { serviceLocations } from "@/data/locations";
import { LOCATIONS_VISUAL_STRIP } from "@/data/locations-page-content";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Gauteng Service Locations | East, West, South & Central Rand",
  description:
    "Maverick Painting serves Sandton, Midrand, Boksburg, Roodepoort, Alberton, and 17+ Gauteng nodes, structural repairs, waterproofing, industrial coatings, and independent QA by region.",
  path: "/locations",
});

const locationsFaq = [
  {
    question: "Which Gauteng regions does Maverick cover?",
    answer:
      "We programme work across Central Gauteng (Sandton, Midrand, Centurion, Pretoria East), the East Rand (Boksburg, Isando, Germiston, Kempton Park, Benoni), the West Rand (Roodepoort, Krugersdorp), and the South Rand (Alberton, Glenvista, Meyersdal, and estates).",
  },
  {
    question: "Do you offer localised service pages?",
    answer:
      "Yes. High-intent combinations, such as leaking balcony repair in Sandton or HACCP flooring in Isando, have dedicated local pages that link to full technical methodologies and independent QA documentation.",
  },
  {
    question: "How quickly can you assess an asset?",
    answer:
      "Subject to access and safety file requirements, condition assessments are typically scheduled within a few business days. Photographic packs support trustee AGMs, insurer reviews, and MRRP updates.",
  },
  {
    question: "Do you supply documentation for trustees or insurers?",
    answer:
      "On agreed scopes we provide photographic condition packs, manufacturer data sheet adherence records, and third-party QA reports supporting MRRP updates and maintenance-of-cover arguments.",
  },
  {
    question: "Which services are available on local pages?",
    answer:
      "High-intent combinations include leaking balcony repair, body corporate painting, rope access, HACCP flooring, concrete spalling, and flat roof waterproofing, each linking to full technical methodologies.",
  },
] as const;

export default function LocationsIndexPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      <section className="page-container py-16 md:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
          Gauteng coverage
        </p>
        <h1 className="type-h1 mb-6 max-w-4xl text-white">
          Local asset maintenance across Johannesburg, Pretoria & the Rand.
        </h1>
        <p className="type-body mb-8 max-w-3xl text-zinc-400">
          Maverick programmes structural repairs, waterproofing, industrial coatings, and sectional-title
          painting with manufacturer-backed systems and independent third-party QA. Choose your region or
          city for localised scopes, landmarks, and mobilisation detail.
        </p>
        <Button asChild className="bg-secondary font-bold text-primary hover:bg-[#4AD5E2]">
          <Link href="/contact">Request a site assessment</Link>
        </Button>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Gauteng coverage</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Programmes across Johannesburg, Pretoria & the Rand</h2>
          </header>
          <ServiceImageTriptych images={LOCATIONS_VISUAL_STRIP} />
        </div>
      </section>

      <section className="border-y border-[#2a2e33] bg-[#111111]/30 py-16">
        <div className="page-container">
          <h2 className="type-h2 mb-8 text-white">Regional hubs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {locationRegionHubs.map((region) => (
              <Link
                key={region.slug}
                href={`/locations/${region.slug}`}
                className="group rounded-xl border border-white/[0.08] bg-[#111111] p-8 transition hover:border-secondary/50"
              >
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-secondary">
                  {region.name}
                </h3>
                <p className="mb-4 text-sm text-zinc-400">{region.headline}</p>
                <span className="inline-flex items-center text-sm font-semibold text-secondary">
                  Explore {region.name}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16">
        <h2 className="type-h2 mb-8 text-white">All service cities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLocations.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="rounded-lg border border-white/[0.08] bg-[#111111] p-5 transition hover:border-secondary/40"
            >
              <h3 className="mb-1 font-bold text-white">{city.name}</h3>
              <p className="text-xs uppercase tracking-wide text-zinc-500">{city.region.replace("-", " ")}</p>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{city.regionalNarrative}</p>
            </Link>
          ))}
        </div>
      </section>

      <QaProcessModule />

      <FaqSection
        headingId="locations-index-faq"
        title="Locations & mobilisation FAQs"
        items={locationsFaq}
        schemaPath="/locations"
      />

      <TrustAndCtaStrip />
    </div>
  );
}
