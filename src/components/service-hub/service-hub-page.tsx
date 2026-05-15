import { Breadcrumbs } from "@/components/breadcrumbs";
import { HubSpokeSection } from "@/components/hub-spoke-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceHubApproach } from "@/components/service-hub/service-hub-approach";
import { ServiceHubHero } from "@/components/service-hub/service-hub-hero";
import { ServiceHubMagazine } from "@/components/service-hub/service-hub-magazine";
import { siteConfig } from "@/lib/seo";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

export function ServiceHubPage({ config }: { config: ServiceHubPageConfig }) {
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
        items={[
          { label: "Services", href: "/services" },
          { label: config.breadcrumbLabel, href: config.path },
        ]}
      />

      <ServiceHubHero {...config.hero} />
      <ServiceHubApproach {...config.approach} />
      <HubSpokeSection variant="dark" {...config.hubSpoke} />
      <ServiceHubMagazine {...config.magazine} />
      <QaProcessModule />
      <TrustAndCtaStrip />
    </div>
  );
}
