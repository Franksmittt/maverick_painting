// src/app/structural-repairs/page.tsx
import { QaProcessModule } from "@/components/qa-process-module";
import { Wrench, Shield, Layers, Users } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HubSpokeSection } from "@/components/hub-spoke-section";
import { StructuralRepairsHero } from "@/components/service-hub/structural-repairs-hero";
import { StructuralMaintenanceMagazine } from "@/components/service-hub/structural-maintenance-magazine";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
  title: "Concrete Spalling, Structural Crack & Remedial Repair Specialists | Maverick",
  description:
    "Gauteng structural repair contractors for concrete spalling, crack injection, expansion joints, and protective coatings. Engineer-aligned specifications, manufacturer-approved systems, and independent QA on major commercial scopes.",
  path: "/structural-repairs",
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const RepairProcessSteps = [
  {
    title: "Defect Diagnosis & Technical Specification",
    description:
      "Our assessment team uses moisture meters and hammer tests to diagnose the root cause (e.g., carbonation, chloride ingress) and prepares a substrate-specific, engineer-approved specification.",
    icon: Wrench,
  },
  {
    title: "Spalling & Concrete Cancer Remediation",
    description:
      "Removal of delaminated concrete, passivation of rebar to stop rust, and repair using polymer-modified structural mortar, engineered reinstatement, not cosmetic filler.",
    icon: Shield,
  },
  {
    title: "Structural Crack Injection & Sealing",
    description:
      "Epoxy or polyurethane injection selected by crack behaviour: structural bonding vs active leak sealing. Ports, pressures, and batch records are documented for commercial QA files.",
    icon: Layers,
  },
  {
    title: "Protective Coating Application",
    description:
      "Application of manufacturer-approved breathable membranes and elastomeric coatings that resist UV, manage water vapour, and accommodate movement where specified.",
    icon: Users,
  },
];

// --- MAIN PAGE COMPONENT ---
export default function StructuralRepairsPage() {
  return (
    <div className="bg-primary pt-24 text-white">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Structural repairs", href: "/structural-repairs" },
        ]}
      />

      <StructuralRepairsHero />

      {/* --- MODULE 2: THE PROCESS (Technical Grid) --- */}
      <section className="bg-primary px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-4xl font-extrabold uppercase">Our four-phase remedial approach</h2>
            <p className="text-lg font-light text-gray-400">
              We follow manufacturer and engineer-approved protocols so repairs are auditable, not hidden beneath fresh paint.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {RepairProcessSteps.map((step, index) => (
              <div key={index} className="rounded-xl border-t-4 border-tertiary bg-gray-900 p-6 shadow-xl">
                <step.icon className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-xl font-bold uppercase text-white">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HubSpokeSection
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
