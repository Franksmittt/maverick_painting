// src/app/structural-repairs/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QaProcessModule } from "@/components/qa-process-module";
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { Wrench, Shield, Layers, Users } from "lucide-react";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { buildPageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HubSpokeSection } from "@/components/hub-spoke-section";

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
      "Removal of delaminated concrete, passivation of rebar to stop rust, and repair using polymer-modified structural mortar — engineered reinstatement, not cosmetic filler.",
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

      {/* --- MODULE 1: TECHNICAL HERO --- */}
      <section className="relative border-b-4 border-secondary bg-gray-900 px-4 py-24 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xl font-medium uppercase tracking-widest text-tertiary">Structural integrity first</p>
          <h1 className="max-w-4xl text-5xl font-extrabold uppercase leading-tight md:text-7xl">
            Engineered concrete spalling & structural repair in Gauteng
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-light text-gray-400">
            Maverick implements{" "}
            <strong className="font-semibold text-gray-200">inspection-led remedial scopes</strong> for sectional-title,
            commercial, and industrial assets — from rebar passivation and structural mortars through to protective coatings
            — with documentation suitable for engineer review and manufacturer warranty paths.
          </p>

          <Button
            asChild
            className="mt-10 h-14 bg-secondary text-lg font-bold text-primary shadow-2xl hover:bg-[#4AD5E2] hover:scale-105"
          >
            <Link href="/contact">Schedule technical assessment &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* --- MODULE 2: THE PROCESS (Technical Grid) --- */}
      <section className="bg-primary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-3 text-4xl font-extrabold uppercase">Our four-phase remedial approach</h2>
            <p className="text-lg font-light text-gray-400">
              We follow manufacturer and engineer-approved protocols so repairs are auditable — not hidden beneath fresh paint.
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
        intro="Each page below targets a distinct failure mode and procurement keyword cluster — improving topical clarity for search engines and giving technical buyers the depth they expect before inviting a site walk-down."
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

      <section className="border-t border-white/5 bg-primary px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
          <h2 className="text-3xl font-extrabold uppercase text-white">Why structural remediation belongs in your maintenance plan</h2>
          <p>
            Deferred spalling repairs increase chloride loading, enlarge breakout zones, and inflate future contractor
            risk premiums. For sectional-title schemes, visible concrete cancer also erodes trustee confidence during
            reserve-fund discussions — especially where{" "}
            <Link href="/painting/body-corporate" className="text-secondary hover:underline">
              exterior painting programmes
            </Link>{" "}
            depend on sound arrises and balcony edges before coatings can perform.
          </p>
          <p>
            Maverick separates{" "}
            <strong className="text-white">diagnostic evidence</strong> from sales copy: hammer sounding, cover surveys,
            moisture profiling, and photographic logs establish why a repair detail exists. Where load-bearing capacity is
            implicated, we defer to engineer specifications rather than improvising on site.
          </p>
          <p>
            Our teams coordinate naturally with{" "}
            <Link href="/waterproofing-services" className="text-secondary hover:underline">
              waterproofing renewals
            </Link>{" "}
            and{" "}
            <Link href="/access-solutions/rope-access-painting" className="text-secondary hover:underline">
              rope access programmes
            </Link>{" "}
            so temporary works, curing windows, and membrane interfaces are sequenced once — avoiding the classic dispute
            where a painter blames a waterproofer and vice versa.
          </p>
          <p>
            For procurement teams comparing Gauteng remedial contractors, request our method statement outline, safety file
            index, and sample QA pack redacted for a recent commercial project. We are comfortable being evaluated on
            paperwork — because that is how serious assets are run.
          </p>
        </div>
      </section>

      <QaProcessModule />
      <AccreditationsStrip />
      <CtaFinalStrip />
    </div>
  );
}
