import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import type { BreadcrumbItem } from "@/components/breadcrumbs";

type BlogPillarLayoutProps = {
  breadcrumbs: BreadcrumbItem[];
  icon: LucideIcon;
  title: string;
  lead: ReactNode;
  articles: { title: string; description: string; href: string; icon: LucideIcon }[];
  triptych: readonly { src: string; alt: string }[];
  triptychHeading: string;
};

export function BlogPillarLayout({
  breadcrumbs,
  icon: Icon,
  title,
  lead,
  articles,
  triptych,
  triptychHeading,
}: BlogPillarLayoutProps) {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs items={breadcrumbs} />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <Icon className="mb-4 h-10 w-10 text-secondary" aria-hidden />
          <h1 className="type-h1 mb-5 max-w-4xl uppercase">{title}</h1>
          <div className="type-lead mb-8 max-w-3xl text-zinc-400">{lead}</div>
          <Button asChild className="h-auto rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
            <Link href="/contact">Consult an expert</Link>
          </Button>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Technical context</p>
            <h2 className="type-h3 text-xl sm:text-2xl">{triptychHeading}</h2>
          </header>
          <ServiceImageTriptych images={triptych} />
        </div>
      </section>

      <section className="section-flow">
        <div className="page-container">
          <header className="mb-10 max-w-3xl">
            <p className="type-eyebrow mb-3">Featured articles</p>
            <h2 className="type-h2">Essential guides</h2>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {articles.map((article) => {
              const ArticleIcon = article.icon;
              return (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-xl border border-t-[3px] border-white/[0.08] border-t-tertiary bg-[#111111] p-6 transition hover:border-secondary/40"
                >
                  <ArticleIcon className="mb-4 h-8 w-8 text-secondary" aria-hidden />
                  <h3 className="mb-2 text-lg font-bold leading-snug text-white group-hover:text-secondary">
                    {article.title}
                  </h3>
                  <p className="type-body m-0 text-sm">{article.description}</p>
                  <span className="mt-4 block text-sm font-semibold text-secondary group-hover:text-white">
                    Read article →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
