import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { LegalDisclaimer } from "@/components/legal-disclaimer";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import type { LocationServiceMatrixEntry } from "@/data/location-service-matrix";
import { getMatrixEntriesForCity } from "@/data/location-service-matrix";
import { getLocation } from "@/data/locations";
import { siteConfig } from "@/lib/seo";

const PROCESS_STEPS = [
  { title: "Condition assessment", body: "On-site survey with moisture readings, photography, and documented scope boundaries." },
  { title: "Technical specification", body: "Manufacturer-backed system selection, film build targets, and preparation standards." },
  { title: "Phased execution", body: "Programmes sequenced for occupied buildings, live plant, or sectional-title access." },
  { title: "QA sign-off", body: "Independent inspection of preparation and DFT with bi-weekly reports on agreed scopes." },
] as const;

export function LocationServicePage({ matrix }: { matrix: LocationServiceMatrixEntry }) {
  const loc = getLocation(matrix.citySlug);
  if (!loc) return null;

  const path = `/locations/${matrix.citySlug}/${matrix.serviceSlug}`;
  const siblings = getMatrixEntriesForCity(matrix.citySlug).filter((e) => e.serviceSlug !== matrix.serviceSlug);
  const regionLabel =
    loc.region === "east-rand" ? "East Rand" : loc.region === "west-rand" ? "West Rand" : loc.region === "south-rand" ? "South Rand" : "Central Gauteng";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: matrix.h1.replace(/\.$/, ""),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url.replace(/\/$/, ""),
      telephone: siteConfig.phoneNumber,
    },
    areaServed: { "@type": "City", name: loc.name },
    url: `${siteConfig.url.replace(/\/$/, "")}${path}`,
    description: `${matrix.lead} ${matrix.localContext}`,
  };

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Breadcrumbs items={[
        { label: "Locations", href: "/locations" },
        { label: regionLabel, href: `/locations/${loc.region}` },
        { label: loc.name, href: `/locations/${loc.slug}` },
        { label: matrix.spokeLabel, href: path },
      ]} />
      <section className="border-b border-zinc-800 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary">
            <MapPin className="h-5 w-5" aria-hidden />{loc.name} · {regionLabel}
          </p>
          <h1 className="type-h1 mb-6 text-white">{matrix.h1}</h1>
          <p className="type-body mb-6 max-w-3xl">{matrix.lead}</p>
          <p className="type-body mb-8 max-w-3xl text-zinc-400">{matrix.localContext}</p>
          <p className="mb-8 text-sm text-zinc-500">
            Near {loc.landmarks.join(", ")}. Methodology:{" "}
            <Link href={matrix.spokePath} className="font-semibold text-secondary hover:underline">{matrix.spokeLabel}</Link>.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-secondary font-bold text-primary hover:bg-[#4AD5E2]"><Link href="/contact">Request assessment</Link></Button>
            <Button asChild variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800"><Link href="/our-process-independent-qa">Independent QA</Link></Button>
          </div>
        </div>
      </section>
      <section className="border-b border-zinc-800 bg-zinc-900/20 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="type-h2 mb-6 text-white">What&apos;s included in {loc.name}</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {matrix.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="type-h2 mb-8 text-white">Delivery process</h2>
          <ol className="grid gap-6 md:grid-cols-2">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
                <p className="mb-2 text-xs font-bold uppercase text-secondary">Step {i + 1}</p>
                <h3 className="mb-2 font-bold text-white">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {siblings.length > 0 ? (
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="type-h2 mb-4 text-white">Other scopes in {loc.name}</h2>
            <div className="flex flex-wrap gap-3">
              {siblings.map((s) => (
                <Link key={s.serviceSlug} href={`/locations/${s.citySlug}/${s.serviceSlug}`} className="rounded-full border border-zinc-700 px-4 py-2 text-sm hover:border-secondary hover:text-secondary">{s.spokeLabel}</Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {matrix.disclaimer ? <section className="px-4 pb-12"><LegalDisclaimer variant={matrix.disclaimer} /></section> : null}
      <QaProcessModule />
      <FaqSection headingId={`${path.replace(/\//g, "-")}-faq`} title={`${matrix.spokeLabel} FAQs, ${loc.name}`} items={matrix.faqs} schemaPath={path} />
      <TrustAndCtaStrip />
    </div>
  );
}
