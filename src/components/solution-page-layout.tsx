import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { LegalDisclaimer, type LegalDisclaimerVariant } from "@/components/legal-disclaimer";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { SOLUTION_PAGE_IMAGES, type SolutionPageKey } from "@/data/static-pages-content";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";
import { cn } from "@/lib/utils";

export type SolutionValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "secondary" | "tertiary";
};

type SolutionPageLayoutProps = {
  solutionKey: SolutionPageKey;
  path: string;
  breadcrumbLabel: string;
  h1: string;
  lead: string;
  valueProps: SolutionValueProp[];
  narrative: {
    heading: string;
    paragraphs: string[];
  };
  serviceLinks: { href: string; label: string; blurb: string; image?: string }[];
  faqs?: readonly ServiceDeepFaq[];
  legalDisclaimer?: LegalDisclaimerVariant;
};

export function SolutionPageLayout({
  solutionKey,
  path,
  breadcrumbLabel,
  h1,
  lead,
  valueProps,
  narrative,
  serviceLinks,
  faqs = [],
  legalDisclaimer,
}: SolutionPageLayoutProps) {
  const visuals = SOLUTION_PAGE_IMAGES[solutionKey];

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: breadcrumbLabel, href: path },
        ]}
      />

      <section className="section-surface section-pad !pt-8" aria-labelledby={`${solutionKey}-hero-heading`}>
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3">Audience solutions</p>
              <h1 id={`${solutionKey}-hero-heading`} className="type-h1 mb-5 uppercase">
                {h1}
              </h1>
              <p className="type-lead mb-8 max-w-2xl text-zinc-400">{lead}</p>
              <Button asChild className="h-auto w-fit rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request a consultation</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={visuals.hero.src}
                alt={visuals.hero.alt}
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
            <p className="type-eyebrow mb-2">Programme proof</p>
            <h2 className="type-h3 text-xl sm:text-2xl">How we deliver for {breadcrumbLabel.toLowerCase()}</h2>
          </header>
          <ServiceImageTriptych images={visuals.triptych} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="type-eyebrow mb-3">Why Maverick</p>
            <h2 className="type-h2 mb-4">Built for your procurement reality</h2>
          </header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={cn(
                    "rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition hover:border-secondary/40",
                    item.accent === "secondary" ? "border-t-[3px] border-t-secondary" : "border-t-[3px] border-t-tertiary",
                  )}
                >
                  <Icon className="mb-4 h-8 w-8 text-secondary" aria-hidden />
                  <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                  <p className="type-body m-0 text-sm">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <div>
              <p className="type-phase mb-3">Local context</p>
              <h2 className="type-h2 mb-4 uppercase">{narrative.heading}</h2>
              {narrative.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="type-body mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={visuals.editorial.src}
                alt={visuals.editorial.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow border-t border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-8 max-w-3xl">
            <p className="type-eyebrow mb-2">Relevant services</p>
            <h2 className="type-h2 mb-3">Start with the right scope</h2>
            <p className="type-body m-0 text-zinc-500">
              Each link opens the full technical methodology, manufacturer systems, and QA documentation for that
              programme.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition hover:border-secondary/40"
              >
                <h3 className="mb-2 font-bold text-white group-hover:text-secondary">{link.label}</h3>
                <p className="type-body m-0 text-sm">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {legalDisclaimer ? (
        <section className="page-container pb-8">
          <LegalDisclaimer variant={legalDisclaimer} />
        </section>
      ) : null}

      <QaProcessModule />

      {faqs.length > 0 ? (
        <FaqSection
          headingId={`${path.replace(/\//g, "-")}-faq`}
          title={`${breadcrumbLabel} FAQs`}
          items={faqs}
          schemaPath={path}
        />
      ) : null}

      <TrustAndCtaStrip />
    </div>
  );
}
