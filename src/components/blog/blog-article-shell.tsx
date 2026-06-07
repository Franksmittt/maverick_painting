import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { BreadcrumbItem } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";

export const blogProseClassName =
  "space-y-8 [&_h2]:type-h3 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_p]:type-body [&_li]:type-body [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_strong]:font-semibold [&_strong]:text-white [&_a]:text-secondary [&_a]:hover:underline";

type BlogArticleShellProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  lead?: string;
  metaLine?: string;
  children: ReactNode;
  relatedLinks?: { href: string; label: string; blurb: string }[];
  faqs?: readonly ServiceDeepFaq[];
  schemaPath: string;
  faqTitle?: string;
};

export function BlogArticleShell({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  metaLine,
  children,
  relatedLinks = [],
  faqs,
  schemaPath,
  faqTitle = "Technical guide FAQs",
}: BlogArticleShellProps) {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs items={breadcrumbs} />

      <article className="page-container pb-16">
        <header className="mb-12 max-w-4xl border-b border-[#2a2e33] pb-8">
          {eyebrow ? <p className="type-eyebrow mb-3">{eyebrow}</p> : null}
          <h1 className="type-h1 mb-4 uppercase">{title}</h1>
          {lead ? <p className="type-lead text-zinc-400">{lead}</p> : null}
          {metaLine ? <p className="mt-4 text-sm text-zinc-500">{metaLine}</p> : null}
        </header>

        <div className={`max-w-4xl ${blogProseClassName}`}>{children}</div>

        {relatedLinks.length > 0 ? (
          <section className="mt-16 max-w-4xl border-t border-[#2a2e33] pt-10">
            <h2 className="type-h3 mb-6 text-xl sm:text-2xl">Related Maverick services</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-white/[0.08] bg-[#111111] p-5 transition hover:border-secondary/40"
                >
                  <h3 className="mb-2 font-bold text-white">{link.label}</h3>
                  <p className="type-body m-0 text-sm">{link.blurb}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </article>

      {faqs && faqs.length > 0 ? (
        <FaqSection
          headingId={`${schemaPath.replace(/\//g, "-")}-faq`}
          title={faqTitle}
          items={faqs}
          schemaPath={schemaPath}
        />
      ) : null}

      <TrustAndCtaStrip />
    </div>
  );
}
