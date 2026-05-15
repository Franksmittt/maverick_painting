// src/app/structural-repairs/page.tsx
import { QaProcessModule } from "@/components/qa-process-module";
import { buildPageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HubSpokeSection } from "@/components/hub-spoke-section";
import { StructuralRepairsHero } from "@/components/service-hub/structural-repairs-hero";
import { StructuralRemedialApproach } from "@/components/service-hub/structural-remedial-approach";
import { StructuralMaintenanceMagazine } from "@/components/service-hub/structural-maintenance-magazine";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Concrete Spalling, Structural Crack & Remedial Repair Specialists | Maverick",
  description:
    "Gauteng structural repair contractors for concrete spalling, crack injection, expansion joints, and protective coatings. Engineer-aligned specifications, manufacturer-approved systems, and independent QA on major commercial scopes.",
  path: "/structural-repairs",
});

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Structural Repairs & Concrete Remediation",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url.replace(/\/$/, ""),
  },
  areaServed: siteConfig.serviceAreas,
  description:
    "Concrete spalling repair, crack injection, expansion joint sealing, and protective coatings for sectional-title, commercial, and industrial assets in Gauteng.",
  serviceType: [
    "Concrete spalling repair",
    "Structural crack injection",
    "Expansion joint sealing",
    "Protective coating application",
  ],
};

export default function StructuralRepairsPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Structural repairs", href: "/structural-repairs" },
        ]}
      />

      <StructuralRepairsHero />
      <StructuralRemedialApproach />

      <HubSpokeSection
        variant="dark"
        headingId="structural-services-heading"
        title="Deep-dive structural services"
        intro="Each page below targets a distinct failure mode and procurement keyword cluster, improving topical clarity for search engines and giving technical buyers the depth they expect before inviting a site walk-down."
        links={[
          {
            href: "/structural-repairs/concrete-spalling",
            label: "Concrete spalling & concrete cancer",
            description:
              "Rebar exposure, passivation, polymer-modified mortars, anti-carbonation finishes, and QA documentation for façades, parking grids, and plant assets.",
          },
          {
            href: "/structural-repairs/crack-injection",
            label: "Structural & leak crack injection",
            description:
              "Epoxy vs polyurethane decision logic, injection porting, pressure discipline, and integration with waterproofing renewals.",
          },
          {
            href: "/structural-repairs/expansion-joint-sealing",
            label: "Expansion joint sealing",
            description:
              "Traffic-rated joint rebuilds, armour angles, podium interfaces, and phased programmes for live logistics and retail facilities.",
          },
        ]}
      />

      <StructuralMaintenanceMagazine />
      <QaProcessModule />
      <TrustAndCtaStrip />
    </div>
  );
}
