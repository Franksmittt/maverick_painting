import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import type { StandaloneBlogArticle } from "@/data/standalone-blog-articles";

type StandaloneBlogArticleProps = {
  article: StandaloneBlogArticle;
};

export function StandaloneBlogArticleView({ article }: StandaloneBlogArticleProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 pt-32 text-primary">
      <div className="mx-auto max-w-4xl px-4">
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
      </div>

      <div className="mt-20">
        <CtaFinalStrip />
      </div>
    </div>
  );
}
