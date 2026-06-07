import Link from "next/link";
import { cn } from "@/lib/utils";
import * as T from "@/lib/trust-cta-data";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { HomeAudienceStrip } from "@/components/home/home-audience-strip";
import { HomeServicePillars } from "@/components/home/home-service-pillars";
import { HomeFeaturedServices } from "@/components/home/home-featured-services";
import { HomeLocationsNav } from "@/components/home/home-locations-nav";
import { ServicesAdditionalHubs } from "@/components/services/services-additional-hubs";
import { SERVICES_VISUAL_STRIP } from "@/data/services-page-content";

const QA_STEPS = [
  {
    n: "01",
    title: "Substrate Specification & Assessment",
    body: "A dedicated project manager and the independent body conduct an on-site assessment to determine the correct coating system and technical specification required for your specific asset.",
  },
  {
    n: "02",
    title: "Continuous Application Inspection",
    body: "The independent company performs continuous application inspections at every critical stage (surface prep, primer, film thickness) to ensure manufacturer requirements are met before the final coat.",
  },
  {
    n: "03",
    title: "Verifiable Bi-Weekly Reporting",
    body: "You receive bi-weekly progress and substrate reports providing a complete, recorded history of the project. This delivers objective proof of quality and total peace of mind for trustees and facility managers.",
  },
] as const;

const MARQUEE_ITEMS = [
  ...T.TRUST_BRANDS.map((b) => b.label),
  ...T.TRUST_PROOF_POINTS.map((p) => p.text),
];

function SectionShell({
  children,
  className,
  bordered = true,
}: {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24 lg:py-28",
        bordered && "border-b border-[#2a2e33]",
        className,
      )}
    >
      <div className="page-container">{children}</div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <>
      <section
        className="relative border-b border-[#2a2e33] bg-[#080808] pt-8 pb-12 md:pb-16"
        aria-labelledby="services-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(90,213,226,0.05),transparent_50%)]"
          aria-hidden
        />
        <div className="page-container relative">
          <p className="type-phase mb-5 text-secondary">The turn-key asset solution</p>
          <h1 id="services-hero-heading" className="type-h1 max-w-4xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Beyond paint. Specialized contractor services.
          </h1>
          <p className="type-lead mt-6 max-w-3xl text-zinc-500">
            We are not general painters. We are structural remediation specialists, approved applicators, and advanced
            coating experts, delivering guaranteed programmes from defect identification through to the final protective
            layer across Gauteng.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/our-process-independent-qa"
              className="inline-flex items-center gap-4 rounded border border-[#2a2e33] bg-[#111111] px-6 py-3 text-base font-semibold text-white transition hover:border-secondary/50"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_10px_#5AD5E2]" aria-hidden />
              Independent QA guarantee
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded border border-secondary/30 px-6 py-3 text-base font-semibold text-secondary transition hover:bg-secondary/10"
            >
              Request assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33] bg-[#080808]" aria-label="Service programme photography">
        <div className="page-container">
          <header className="mb-6 max-w-2xl md:mb-8">
            <p className="type-eyebrow mb-2">Technical scopes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Structural, coatings, and waterproofing in the field</h2>
          </header>
          <ServiceImageTriptych images={SERVICES_VISUAL_STRIP} />
        </div>
      </section>

      <HomeAudienceStrip />
      <HomeServicePillars />
      <ServicesAdditionalHubs />
      <HomeFeaturedServices hideOverviewLink />
      <HomeLocationsNav />

      <SectionShell bordered={false} className="pb-16 md:pb-24 lg:pb-28">
        <div className="mb-12 border-l-4 border-secondary pl-6 md:mb-16 md:pl-8">
          <p className="type-eyebrow mb-5">Quality assurance</p>
          <h2 className="type-h2 mb-4">Our unbeatable guarantee</h2>
          <p className="type-lead mb-3 font-medium text-white">De-risking your multi-million rand asset.</p>
          <p className="type-lead m-0 max-w-3xl text-zinc-500">
            Unlike standard contractors who rely on biased, in-house quality checks, we use a trusted, independent
            third-party QA company on agreed projects. This is our commitment to verifiably superior quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {QA_STEPS.map((step) => (
            <article
              key={step.n}
              className="rounded border border-white/5 bg-[#1a1c1e]/40 p-8 transition hover:-translate-y-1 hover:border-secondary hover:bg-[#1a1c1e]/80"
            >
              <div className="mb-5 flex items-start gap-4 border-b border-[#2a2e33] pb-5">
                <span className="shrink-0 rounded-sm bg-secondary px-2.5 py-1 text-sm font-bold text-primary">
                  {step.n}
                </span>
                <h3 className="text-lg font-bold leading-snug text-white">{step.title}</h3>
              </div>
              <p className="type-body m-0">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="my-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-y border-dashed border-[#2a2e33] py-8 opacity-90 md:my-16 md:gap-x-10 md:py-10">
          {MARQUEE_ITEMS.map((label, i) => (
            <span key={label} className="flex items-center gap-6 text-lg font-bold text-zinc-300 md:text-xl">
              <span className={i >= T.TRUST_BRANDS.length ? "text-secondary" : undefined}>{label}</span>
              {i < MARQUEE_ITEMS.length - 1 && (
                <span className="font-normal text-secondary/50" aria-hidden>
                  //
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="text-center">
          <h2 className="type-h2 mb-4 text-3xl sm:text-4xl lg:text-5xl">Don&apos;t risk your asset.</h2>
          <p className="type-lead mx-auto mb-8 max-w-2xl text-zinc-500">
            Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
          </p>
          <a
            href={T.TRUST_TEL_HREF}
            className="inline-flex items-center gap-3 border-b-2 border-secondary pb-1 text-xl font-bold text-secondary transition hover:border-white hover:text-white sm:text-2xl"
          >
            Talk to a specialist → {T.TRUST_TEL_DISPLAY}
          </a>
        </div>
      </SectionShell>
    </>
  );
}
