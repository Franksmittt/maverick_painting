import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";
import {
  Scroll,
  CheckSquare,
  FileText,
  BarChart,
  Shield,
  Factory,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Independent 3rd Party QA Process & Guarantee | Maverick Painting",
  description:
    "Learn how our independent third-party QA process eliminates project risk: substrate assessment, SANS-aligned preparation checks, WFT/DFT verification, and bi-weekly reports for trustees and facility managers.",
  path: "/our-process-independent-qa",
});

const FullQAProcess = [
  {
    step: 1,
    title: "Pre-Project Substrate Assessment",
    description:
      "An independent coatings inspector conducts hammer tests, moisture readings, and adhesion tests. We use this data to finalize a non-negotiable technical specification, material type, minimum film thickness, and preparation method.",
    icon: Scroll,
  },
  {
    step: 2,
    title: "Mandatory Surface Preparation Checks",
    description:
      "The inspector verifies that surface preparation (crack cleaning, spalling repair, washing) meets SANS and manufacturer standards before primer is applied, protecting adhesion and warranty validity.",
    icon: CheckSquare,
  },
  {
    step: 3,
    title: "Film Thickness Measurement & Verification",
    description:
      "The inspector monitors Wet Film Thickness (WFT) and Dry Film Thickness (DFT) of every coat. If minimum thickness is not met, manufacturer guarantees may be void, we verify before sign-off.",
    icon: BarChart,
  },
  {
    step: 4,
    title: "Bi-Weekly Progress & Technical Reporting",
    description:
      "You receive a comprehensive report every two weeks detailing tests, compliance checks, and visual progress, verifiable transparency for trustees, developers, and insurers.",
    icon: FileText,
  },
] as const;

const ManufacturerSystems = [
  {
    name: "Sika",
    focus: "Structural mortars, injection, and waterproofing systems",
    href: "/structural-repairs/concrete-spalling",
  },
  {
    name: "Penetron",
    focus: "Crystalline tanking and negative-side waterproofing",
    href: "/waterproofing/basement-tanking",
  },
  {
    name: "StonCor / A.B.E.",
    focus: "Industrial linings, epoxy, and corrosion control",
    href: "/specialized-coatings/industrial-corrosion-control",
  },
  {
    name: "Mapei & Bostik",
    focus: "Tile-bed remediation and flexible sealants",
    href: "/waterproofing/leaking-balconies",
  },
  {
    name: "Plascon & Dulux",
    focus: "Commercial, body corporate, and high-performance coatings",
    href: "/painting/body-corporate",
  },
  {
    name: "Marmoran",
    focus: "Decorative textured façade systems",
    href: "/specialized-coatings/marmoran-wall-systems",
  },
] as const;

const qaFaqs = [
  {
    question: "Is independent QA mandatory on every Maverick project?",
    answer:
      "Independent QA is deployed on agreed commercial, sectional-title, and structural scopes where film build and preparation directly affect manufacturer warranties. Smaller maintenance tasks may follow internal checklists, your quotation will state the QA tier.",
  },
  {
    question: "Who employs the independent inspector?",
    answer:
      "The third-party QA body is contracted separately from the application crew so inspection findings are not influenced by production pressure. Reports go to the client and managing agent.",
  },
  {
    question: "Does QA replace engineer sign-off?",
    answer:
      "No. QA documents coating execution against an agreed specification. Load-bearing structural designs, NHBRC pathways, and municipal approvals remain with your engineer or competent person.",
  },
  {
    question: "What do bi-weekly QA reports include?",
    answer:
      "Reports typically cover surface preparation verification, environmental conditions, dry film thickness readings, product batch references, and photographic progress suitable for trustee AGMs and insurer files.",
  },
  {
    question: "Can trustees share QA reports with insurers?",
    answer:
      "Yes. Independent documentation helps demonstrate reasonable maintenance care. Maverick supplies technical records; insurance outcomes remain between the owner, scheme, and broker.",
  },
] as const;

export default function IndependentQAPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Independent QA", href: "/our-process-independent-qa" },
        ]}
      />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3">Engineer&apos;s hub</p>
              <h1 className="type-h1 mb-5 uppercase">Independent third-party QA, not contractor self-certification.</h1>
              <p className="type-lead mb-6 max-w-2xl text-zinc-400">
                Maverick Painting positions quality assurance as a risk-mitigation layer for multi-million-rand
                assets. Where scopes demand it, a separate inspector verifies preparation, environmental
                conditions, and film build, creating evidence trustees, developers, and insurers can file without
                relying on biased in-house checks.
              </p>
              <Button asChild className="h-auto w-fit rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request QA on your scope</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/painting-body-corporate-qa.jpg"
                alt="Independent QA documentation on a Gauteng sectional-title programme"
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
            <p className="type-eyebrow mb-2">Verification in practice</p>
            <h2 className="type-h3 text-xl sm:text-2xl">What independent QA looks like on site</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.qa} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {FullQAProcess.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="rounded-xl border border-t-[3px] border-white/[0.08] border-t-secondary bg-[#111111] p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-secondary" aria-hidden />
                  <p className="mb-1 text-xs font-bold uppercase text-zinc-500">Step {item.step}</p>
                  <h2 className="mb-3 text-lg font-bold text-white">{item.title}</h2>
                  <p className="type-body m-0 text-sm">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="page-container max-w-4xl">
          <h2 className="type-h2 mb-6 text-white">ISO, OHS & compliance alignment</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="flex gap-4 rounded-lg border border-white/10 bg-[#111111] p-5">
              <Shield className="h-8 w-8 shrink-0 text-tertiary" aria-hidden />
              <div>
                <h3 className="mb-2 font-bold text-white">Occupational health & safety</h3>
                <p className="text-sm text-zinc-400">
                  Site-specific safety files, COIDA, and public liability documentation support rope access,
                  hot works, and occupied sectional-title buildings under the Occupational Health and Safety Act.
                </p>
              </div>
            </article>
            <article className="flex gap-4 rounded-lg border border-white/10 bg-[#111111] p-5">
              <ClipboardCheck className="h-8 w-8 shrink-0 text-tertiary" aria-hidden />
              <div>
                <h3 className="mb-2 font-bold text-white">Quality management</h3>
                <p className="text-sm text-zinc-400">
                  QA documentation aligns with ISO 9001 principles, traceable inspections, corrective actions,
                  and manufacturer data sheet adherence, even where formal certification is held at group level.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-flow border-t border-[#2a2e33]">
        <div className="page-container">
          <h2 className="type-h2 mb-4 text-center text-white">Manufacturer-backed systems we apply</h2>
          <p className="type-body mx-auto mb-10 max-w-3xl text-center text-zinc-400">
            Approved applicator networks for procurement officers searching brand + application in Gauteng.
            Full credential overview on{" "}
            <Link href="/accreditations" className="text-secondary hover:underline">
              accreditations
            </Link>
            .
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ManufacturerSystems.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition hover:border-secondary/50"
              >
                <Factory className="mb-3 h-7 w-7 text-secondary" aria-hidden />
                <h3 className="mb-2 font-bold text-white">{brand.name}</h3>
                <p className="text-sm text-zinc-400">{brand.focus}</p>
              </Link>
            ))}
          </div>
          <p className="type-body mt-8 text-center text-sm text-zinc-500">
            <Layers className="mr-1 inline h-4 w-4 text-secondary" aria-hidden />
            SprayLock SCP and other crystalline systems are specified on basement and slab moisture scopes
            where hard scheduling of topcoats is required.
          </p>
        </div>
      </section>

      <QaProcessModule />

      <FaqSection
        headingId="independent-qa-faq"
        items={qaFaqs}
        schemaPath="/our-process-independent-qa"
      />

      <TrustAndCtaStrip />
    </div>
  );
}
