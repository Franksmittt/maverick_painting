import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import * as T from "@/lib/trust-cta-data";
import { SERVICE_OVERVIEW_TAGS, type ServiceSpokeLink } from "@/data/service-spoke-links";

const AUDIENCES = [
  {
    title: "Developers & Engineers",
    description:
      "Verifiable specifications, on-time delivery, and full compliance to eliminate delays and hand-over issues.",
    href: "/solutions/for-developers",
    cta: "View Technical Solutions",
  },
  {
    title: "Body Corporates & Trustees",
    description:
      "Independent QA, co-signed guarantees, and minimal disturbance for long-term asset security and peace of mind.",
    href: "/solutions/for-body-corporates",
    cta: "View Maintenance Solutions",
  },
  {
    title: "Homeowners & Facilities",
    description:
      "Owner supervised excellence, guaranteed workmanship, and the highest standards of cleanliness and efficiency for your property.",
    href: "/solutions/for-homeowners",
    cta: "View Project Solutions",
  },
] as const;

const PILLARS: {
  num: string;
  title: string;
  description: string;
  href: string;
  tags: readonly ServiceSpokeLink[];
}[] = [
  {
    num: "01",
    title: "Structural & Remedial Repairs",
    description:
      "The foundation of asset maintenance. We fix concrete cancer, spalling, structural cracks, and joint defects before any coating is applied.",
    href: "/structural-repairs",
    tags: SERVICE_OVERVIEW_TAGS.structural,
  },
  {
    num: "02",
    title: "Specialized Coating Systems",
    description:
      "Beyond standard paint. We are approved applicators for high-performance, durable floor, wall, and industrial coating systems.",
    href: "/specialized-coatings",
    tags: SERVICE_OVERVIEW_TAGS.coatings,
  },
  {
    num: "03",
    title: "Advanced Waterproofing",
    description:
      "Guaranteed systems for high-stakes water ingress problems in flat roofs, slabs, and balconies, using both Torch-On and Liquid Applied Membranes.",
    href: "/waterproofing-services",
    tags: SERVICE_OVERVIEW_TAGS.waterproofing,
  },
  {
    num: "04",
    title: "Commercial & High-Access Painting",
    description:
      "High-volume painting solutions for Body Corporates, industrial sites, and commercial spaces, including complex access and full project management.",
    href: "/painting-services",
    tags: SERVICE_OVERVIEW_TAGS.painting,
  },
];

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
  children: ReactNode;
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

function pillarBorderClass(index: number) {
  return cn(
    "border-[#2a2e33]",
    index < PILLARS.length - 1 && "border-b",
    index % 2 === 0 && "lg:border-r",
    index >= 2 && "lg:border-t-0",
    index < 2 && "lg:border-b",
    index === 1 && "lg:border-r-0",
    index === 3 && "lg:border-r-0 lg:border-b-0",
    index === 2 && "lg:border-b",
  );
}

export function ServicesOverview() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative border-b border-[#2a2e33] bg-[#080808] pt-8 pb-16 md:pb-20 lg:pb-28"
        aria-labelledby="services-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(90,213,226,0.05),transparent_50%)]"
          aria-hidden
        />
        <div className="page-container relative">
          <p className="type-phase mb-5 text-secondary">The Turn-Key Asset Solution</p>
          <h1 id="services-hero-heading" className="type-h1 max-w-4xl text-4xl sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Beyond Paint. Specialized Contractor Services.
          </h1>
          <p className="type-lead mt-6 max-w-3xl text-zinc-500">
            We are not general painters. We are structural remediation specialists, approved applicators, and advanced
            coating experts. We provide guaranteed, turn-key solutions from defect identification to the final
            protective layer.
          </p>
          <Link
            href="/our-process-independent-qa"
            className="mt-6 inline-flex items-center gap-4 rounded border border-[#2a2e33] bg-[#111111] px-6 py-3 text-base font-semibold text-white transition hover:border-secondary/50"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-secondary shadow-[0_0_10px_#5AD5E2]" aria-hidden />
            Our Independent QA Guarantee
          </Link>
        </div>
      </section>

      {/* Who we serve */}
      <SectionShell>
        <p className="type-eyebrow mb-5">Client Profiles</p>
        <h2 id="who-we-serve-heading" className="type-h2 mb-4">
          Who We Serve
        </h2>
        <p className="type-lead mb-10 max-w-3xl text-zinc-500 md:mb-14">
          Select your role below to view the solutions, guarantees, and compliance you require.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {AUDIENCES.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col justify-between border-t-[3px] border-[#2a2e33] bg-[#111111] p-8 transition duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-[#1a1c1e] md:p-10"
            >
              <div>
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">{card.title}</h3>
                <p className="type-body mb-8">{card.description}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white transition group-hover:text-secondary">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>

      {/* Four pillars */}
      <SectionShell>
        <p className="type-eyebrow mb-5">Core Expertise</p>
        <h2 id="pillars-heading" className="type-h2 mb-4">
          The Four Pillars of Asset Protection
        </h2>
        <p className="type-lead mb-10 max-w-3xl text-zinc-500 md:mb-14">
          Select an expertise area below to see how we apply advanced methods and verifiable quality to your specific
          maintenance challenge.
        </p>

        <div className="grid w-full min-w-0 grid-cols-1 overflow-hidden border border-[#2a2e33] bg-[#111111] lg:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <article
              key={pillar.href}
              className={cn(
                "group relative p-8 transition-colors duration-300 hover:bg-[#1a1c1e] sm:p-10 lg:p-12 xl:p-14",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-[width] after:duration-300 group-hover:after:w-full",
                pillarBorderClass(index),
              )}
            >
              <span
                className="pointer-events-none absolute right-6 top-6 text-4xl font-bold text-transparent transition group-hover:text-secondary/30 sm:right-10 sm:top-8 sm:text-5xl"
                style={{ WebkitTextStroke: "1px #2a2e33" }}
                aria-hidden
              >
                {pillar.num}
              </span>
              <h3 className="type-h3 mb-4 max-w-[85%] text-xl sm:text-2xl">{pillar.title}</h3>
              <p className="type-body mb-6">{pillar.description}</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <Link
                    key={tag.href}
                    href={tag.href}
                    className="inline-block rounded-sm border border-[#2a2e33] px-3 py-1.5 text-xs text-zinc-500 transition hover:border-secondary hover:bg-[#1a1c1e] hover:text-secondary"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
              <Link
                href={pillar.href}
                className="inline-block border-b border-secondary pb-1 text-sm font-semibold text-white transition hover:text-secondary"
              >
                Explore Full Expertise
              </Link>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* QA command center */}
      <SectionShell bordered={false} className="pb-16 md:pb-24 lg:pb-28">
        <div className="mb-12 border-l-4 border-secondary pl-6 md:mb-16 md:pl-8">
          <p className="type-eyebrow mb-5">Quality Assurance</p>
          <h2 className="type-h2 mb-4">Our Unbeatable Guarantee</h2>
          <p className="type-lead mb-3 font-medium text-white">De-Risking Your Multi-Million Rand Asset.</p>
          <p className="type-lead m-0 max-w-3xl text-zinc-500">
            Unlike standard contractors who rely on biased, in-house quality checks, we use a trusted, independent
            third-party QA company on all projects. This is our commitment to verifiably superior quality.
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
          <h2 className="type-h2 mb-4 text-3xl sm:text-4xl lg:text-5xl">Don&apos;t Risk Your Asset.</h2>
          <p className="type-lead mx-auto mb-8 max-w-2xl text-zinc-500">
            Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
          </p>
          <a
            href={T.TRUST_TEL_HREF}
            className="inline-flex items-center gap-3 border-b-2 border-secondary pb-1 text-xl font-bold text-secondary transition hover:border-white hover:text-white sm:text-2xl"
          >
            Talk to a Specialist → {T.TRUST_TEL_DISPLAY}
          </a>
        </div>
      </SectionShell>
    </>
  );
}
