import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import type { ServiceDeepPageContent } from "@/lib/service-deep-types";

function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.legalName,
      url: baseUrl,
      telephone: siteConfig.phoneNumber,
      areaServed: siteConfig.serviceAreas,
    },
    areaServed: siteConfig.serviceAreas,
  };
  return (
    <Script id={`service-jsonld-${path.replace(/\//g, "-")}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

function FaqJsonLd({ faqs, path }: { faqs: ServiceDeepPageContent["faqs"]; path: string }) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
    url,
  };
  return (
    <Script id={`faq-jsonld-${path.replace(/\//g, "-")}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

export function ServiceDeepPage({ content }: { content: ServiceDeepPageContent }) {
  const { meta, h1, eyebrow, heroLead, breadcrumbs, schemaServiceName, schemaServiceDescription, sections, caseAngles, faqs, relatedServices } =
    content;

  return (
    <div className="bg-primary pt-24 text-white">
      <ServiceJsonLd name={schemaServiceName} description={schemaServiceDescription} path={meta.path} />
      <FaqJsonLd faqs={faqs} path={meta.path} />

      <Breadcrumbs items={breadcrumbs} />

      <section className="relative border-b-4 border-secondary bg-gray-900 py-20 md:py-28">
        <div className="page-container">
          <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-tertiary">{eyebrow}</p>
          <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-6xl">{h1}</h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-gray-300 md:text-xl">{heroLead}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button asChild className="h-12 bg-secondary text-lg font-bold text-primary shadow-xl hover:bg-[#4AD5E2]">
              <Link href="/contact">Request a diagnostic site inspection</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-2 border-white/30 bg-transparent text-lg font-bold text-white hover:bg-white/10"
            >
              <a href="tel:+27826277082" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneNumber}
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 border-2 border-tertiary/80 bg-transparent text-lg font-bold text-tertiary hover:bg-tertiary/10">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp photos of the defect
              </a>
            </Button>
          </div>
          <p className="mt-6 max-w-3xl text-sm text-gray-500">
            Maverick implements engineer-specified and manufacturer-approved methodologies. We document substrate condition, preparation, and film-build
            checkpoints, with independent QA available on major commercial scopes, so procurement teams receive defensible records, not marketing claims.
          </p>
        </div>
        </div>
      </section>

      <article className="page-container py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
        {sections.map((section) => (
          <section key={section.title} className="mb-14 border-b border-white/10 pb-14 last:mb-0 last:border-0 last:pb-0">
            <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">{section.title}</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-300">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mt-8">
                <h3 className="mb-3 text-xl font-bold text-secondary">{sub.title}</h3>
                <div className="space-y-3 text-base leading-relaxed text-gray-300">
                  {sub.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}

        <section className="mb-14 rounded-xl border border-secondary/40 bg-gray-900/80 p-8">
          <h2 className="mb-6 text-2xl font-extrabold uppercase text-white">Typical project profiles (anonymised)</h2>
          <ul className="space-y-6">
            {caseAngles.map((c) => (
              <li key={c.title}>
                <h3 className="text-lg font-bold text-tertiary">{c.title}</h3>
                <p className="mt-2 text-gray-300">{c.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-extrabold uppercase text-white">Related technical services</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {relatedServices.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="font-semibold text-secondary underline-offset-4 hover:text-tertiary hover:underline">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-gray-900 p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-extrabold uppercase text-white">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.question} className="group border-b border-white/10 pb-4 last:border-0">
                <summary className="cursor-pointer list-none font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex w-full items-center justify-between gap-2">
                    {f.question}
                    <span className="text-tertiary transition group-open:rotate-180">▼</span>
                  </span>
                </summary>
                <p className="mt-3 pl-0 text-gray-300">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
