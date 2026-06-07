import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BlogArticleShell } from "@/components/blog/blog-article-shell";
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
  {
    question: "How do these guides relate to your service pages?",
    answer:
      "Blog clusters explain why systems fail and how to specify repairs. Service spokes document Maverick's methodology, products, and QA process for procurement teams.",
  },
  {
    question: "Do you use manufacturer-approved systems mentioned in articles?",
    answer:
      "Yes where specified. Product selection follows exposure, substrate tests, and data sheet requirements documented in our QA files, not generic brand mentions.",
  },
  {
    question: "Can trustees share your technical guides at AGMs?",
    answer:
      "Yes. Guides and linked service pages help explain maintenance decisions. Legal and fiduciary advice remains with your managing agent or attorney.",
  },
  {
    question: "How do I request a site assessment after reading a guide?",
    answer:
      "Contact us with photos, address, and urgency. We typically schedule assessments within a few business days and link findings to the relevant service methodology.",
  },
] as const;

export function StandaloneBlogArticleView({ article }: StandaloneBlogArticleProps) {
  const path = article.metadata.path ?? `/blog/${article.slug}`;
  const related = getStandaloneRelatedServices(article);
  const faqs = article.faqs?.length ? article.faqs : DEFAULT_FAQ;

  return (
    <BlogArticleShell
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: article.categoryLabel, href: path },
      ]}
      eyebrow={article.pillarLabel}
      title={article.title}
      lead={article.lead}
      metaLine={`Technical guide by ${article.pillarLabel} · Maverick Painting Contractors · Updated 2026`}
      relatedLinks={related.map((link) => ({ href: link.href, label: link.label, blurb: "View full methodology and QA documentation." }))}
      faqs={faqs}
      schemaPath={path}
    >
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {section.bulletList && section.bulletList.length > 0 ? (
            <ul>
              {section.bulletList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section>
        <h2>When to engage a specialist contractor</h2>
        <p>
          If moisture ingress, spalling, coating failure, or reserve-funded renewals are on your AGM agenda,
          document condition before approving tenders. Maverick supplies photographic surveys, manufacturer-backed
          specifications, and independent QA on agreed scopes, so trustees and facility managers can defend the
          programme, not just the quote.
        </p>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
        <h3 className="!text-tertiary">{article.cta.heading}</h3>
        <p>{article.cta.body}</p>
        <Button asChild className="mt-4 h-auto bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
          <Link href={article.cta.href}>{article.cta.label}</Link>
        </Button>
      </section>

      <p className="text-sm text-zinc-500">
        More from{" "}
        <Link href={article.pillarHref} className="text-secondary hover:underline">
          {article.pillarLabel}
        </Link>
        .
      </p>
    </BlogArticleShell>
  );
}
