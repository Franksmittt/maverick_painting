import { Breadcrumbs } from "@/components/breadcrumbs";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceEditorialFlow } from "@/components/service-hub/service-editorial-flow";
import { ServiceHubHero } from "@/components/service-hub/service-hub-hero";
import { FaqSection } from "@/components/faq-section";
import { LegalDisclaimer } from "@/components/legal-disclaimer";
import { hubFaqsByPath } from "@/data/hub-faqs";
import { getServicePageImages } from "@/data/service-page-images";
import { enrichHubPageConfig } from "@/lib/enrich-hub-page-config";
import { siteConfig } from "@/lib/seo";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

export function ServiceHubPage({ config: rawConfig }: { config: ServiceHubPageConfig }) {
  const config = enrichHubPageConfig(rawConfig);
  const serviceImages = getServicePageImages(
    config.path,
    config.magazine.sections.map((section) => section.image),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.jsonLd.name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url.replace(/\/$/, ""),
    },
    areaServed: siteConfig.serviceAreas,
    description: config.jsonLd.description,
    serviceType: config.jsonLd.serviceType,
  };

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumbs
        items={
          config.breadcrumbs ?? [
            { label: "Services", href: "/services" },
            { label: config.breadcrumbLabel, href: config.path },
          ]
        }
      />

      <ServiceHubHero {...config.hero} heroImage={serviceImages[0]} />
      <ServiceEditorialFlow
        images={serviceImages.slice(1)}
        approach={config.approach}
        hubSpoke={config.hubSpoke}
        magazine={config.magazine}
      />
      {(config.faqs ?? hubFaqsByPath[config.path]) ? (
        <FaqSection
          headingId={`${config.path.replace(/\//g, "-")}-faq-heading`}
          items={config.faqs ?? hubFaqsByPath[config.path] ?? []}
          schemaPath={config.path}
        />
      ) : null}
      {config.legalDisclaimer ? (
        <section className="px-4 pb-8">
          <LegalDisclaimer variant={config.legalDisclaimer} />
        </section>
      ) : null}
      <QaProcessModule />
      <TrustAndCtaStrip />
    </div>
  );
}
