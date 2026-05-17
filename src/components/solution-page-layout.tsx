import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { LegalDisclaimer, type LegalDisclaimerVariant } from "@/components/legal-disclaimer";
import { QaProcessModule } from "@/components/qa-process-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";

export type SolutionValueProp = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
};

type SolutionPageLayoutProps = {
  path: string;
  breadcrumbLabel: string;
  h1: string;
  lead: string;
  valueProps: SolutionValueProp[];
  narrative: {
    heading: string;
    paragraphs: string[];
  };
  serviceLinks: { href: string; label: string; blurb: string }[];
  faqs?: readonly ServiceDeepFaq[];
  legalDisclaimer?: LegalDisclaimerVariant;
};

export function SolutionPageLayout({
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
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: breadcrumbLabel, href: path },
        ]}
      />

      <section className="border-b border-zinc-800 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="type-h1 mb-6 text-white">{h1}</h1>
          <p className="type-body mb-8 max-w-3xl text-zinc-300">{lead}</p>
          <Button asChild className="bg-secondary font-bold text-primary hover:bg-[#4AD5E2]">
            <Link href="/contact">Request a consultation</Link>
          </Button>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 border-t-4 ${item.accentColor}`}
              >
                <Icon className="mb-4 h-10 w-10 text-secondary" aria-hidden />
                <h2 className="mb-2 text-lg font-bold text-white">{item.title}</h2>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/30 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="type-h2 mb-6 text-white">{narrative.heading}</h2>
          {narrative.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="type-body mb-4 text-zinc-300">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="type-h2 mb-8 text-white">Relevant services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-secondary/50"
              >
                <h3 className="mb-2 font-semibold text-secondary">{link.label}</h3>
                <p className="text-sm text-zinc-400">{link.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {legalDisclaimer ? (
        <section className="px-4 pb-8">
          <LegalDisclaimer variant={legalDisclaimer} />
        </section>
      ) : null}

      <QaProcessModule />

      {faqs.length > 0 ? (
        <FaqSection
          headingId={`${path.replace(/\//g, "-")}-faq`}
          items={faqs}
          schemaPath={path}
        />
      ) : null}

      <TrustAndCtaStrip />
    </div>
  );
}
