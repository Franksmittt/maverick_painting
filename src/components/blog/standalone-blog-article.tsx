import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import type { StandaloneBlogArticle } from "@/data/standalone-blog-articles";
import { getStandaloneRelatedServices } from "@/lib/standalone-blog";

type StandaloneBlogArticleProps = {
  article: StandaloneBlogArticle;
};

const DEFAULT_FAQ = [
  {
    question: "Does Maverick provide legal or insurance advice in these guides?",
    answer:
      "No. Our guides explain technical maintenance and coating principles. Scheme governance, CSOS, and insurance outcomes remain with your attorney, managing agent, or broker.",
  },
  {
    question: "Can you assess my building in Gauteng?",
    answer:
      "Yes. We schedule condition assessments across Johannesburg, Pretoria, and the Rand subject to access and safety requirements. Contact us with your address and urgency.",
  },
] as const;

export function StandaloneBlogArticleView({ article }: StandaloneBlogArticleProps) {
  const path = article.metadata.path ?? `/blog/${article.slug}`;
  const related = getStandaloneRelatedServices(article);
  const faqs = article.faqs?.length ? article.faqs : DEFAULT_FAQ;

  return (
    <div className="min-h-screen bg-gray-50 pb-24 pt-32 text-primary">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.categoryLabel, href: path },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4">
        <header className="mb-12 border-b border-gray-200 pb-6">
          <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
            <Link href={article.pillarHref} className="font-semibold uppercase hover:text-secondary">
              {article.pillarLabel}
            </Link>
            <span>|</span>
            <span>{article.categoryLabel}</span>
          </div>
          <h1 className="text-4xl font-extrabold uppercase leading-tight text-primary md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{article.lead}</p>
          <p className="mt-3 text-sm text-gray-500">
            Technical guide by {article.pillarLabel} · Maverick Painting Contractors · Updated 2026
          </p>
        </header>

        <div className="space-y-8 text-lg leading-relaxed text-gray-700">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 text-3xl font-bold text-primary">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mb-4">
                  {paragraph}
                </p>
              ))}
              {section.bulletList && section.bulletList.length > 0 ? (
                <ul className="ml-6 list-inside list-disc space-y-2 font-semibold">
                  {section.bulletList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section>
            <h2 className="mb-4 text-3xl font-bold text-primary">When to engage a specialist contractor</h2>
            <p className="mb-4">
              If moisture ingress, spalling, coating failure, or reserve-funded renewals are on your AGM agenda,
              document condition before approving tenders. Maverick supplies photographic surveys, manufacturer-backed
              specifications, and independent QA on agreed scopes, so trustees and facility managers can defend the
              programme, not just the quote.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-primary">Related services</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-semibold text-secondary hover:underline"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-primary p-6 text-white shadow-xl">
            <h3 className="mb-3 text-2xl font-bold text-tertiary">{article.cta.heading}</h3>
            <p className="mb-4">{article.cta.body}</p>
            <Button
              asChild
              className="h-12 bg-secondary text-lg font-bold text-primary hover:bg-[#4AD5E2]"
            >
              <Link href={article.cta.href}>{article.cta.label}</Link>
            </Button>
          </section>
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-4">
        <FaqSection
          headingId={`blog-${article.slug}-faq`}
          title="Guide FAQs"
          items={faqs}
          schemaPath={path}
        />
      </div>

      <div className="mt-20">
        <CtaFinalStrip />
      </div>
    </div>
  );
}
