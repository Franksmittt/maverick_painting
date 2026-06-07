import Link from "next/link";
import { BookOpen, Wrench, Layers, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { getPillars } from "@/lib/pillars";
import { standaloneBlogArticles } from "@/data/standalone-blog-articles";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";

const contentCategories = [
  {
    title: "Structural remediation",
    icon: Wrench,
    description: "Concrete cancer, crack injection, expansion joints, and spalling repair.",
    href: "/blog/structural-remediation",
  },
  {
    title: "Waterproofing & damp",
    icon: Layers,
    description: "Torch-on vs liquid membranes, balconies, rising damp, and roof maintenance.",
    href: "/blog/waterproofing",
  },
  {
    title: "Commercial & industrial",
    icon: Building,
    description: "Corrosion control, HACCP floors, line marking, and OHS at height.",
    href: "/blog/industrial",
  },
];

export function BlogIndexContent() {
  const pillars = getPillars();
  const pillarClusters = pillars.flatMap((pillar) =>
    pillar.clusters.map((cluster) => ({
      title: cluster.title,
      description: cluster.description,
      href: cluster.metadata.path ?? `/blog/${pillar.slug}/${cluster.slug}`,
    })),
  );

  const featured = [
    ...standaloneBlogArticles.slice(0, 6).map((article) => ({
      title: article.title,
      description: article.lead,
      href: article.metadata.path ?? `/blog/${article.slug}`,
    })),
    ...pillarClusters.slice(0, 3),
  ].slice(0, 9);

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <BookOpen className="mb-4 h-10 w-10 text-secondary" aria-hidden />
          <h1 className="type-h1 mb-5 max-w-4xl uppercase">The expertise hub. Technical guides & insights.</h1>
          <p className="type-lead mb-8 max-w-3xl text-zinc-400">
            Expert resources on structural defects, waterproofing, STSMA compliance, and industrial coatings for
            Gauteng assets.
          </p>
          <Button asChild className="h-auto rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
            <Link href="/contact">Contact an expert</Link>
          </Button>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Field photography</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Guides grounded in on-site work</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.blog} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="type-eyebrow mb-3">Categories</p>
            <h2 className="type-h2 mb-3">Explore technical categories</h2>
            <p className="type-body m-0 text-zinc-500">Jump into the knowledge required to protect your asset.</p>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {contentCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group rounded-xl border border-t-[3px] border-white/[0.08] border-t-tertiary bg-[#111111] p-8 transition hover:border-secondary/40"
              >
                <category.icon className="mb-4 h-8 w-8 text-secondary group-hover:text-tertiary" aria-hidden />
                <h3 className="mb-2 text-xl font-bold text-white">{category.title}</h3>
                <p className="type-body m-0 text-sm">{category.description}</p>
                <span className="mt-4 block text-sm font-semibold text-secondary group-hover:text-white">
                  View articles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-flow">
        <div className="page-container">
          <h2 className="type-h2 mb-8">Featured guides</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-xl border border-white/[0.08] bg-[#111111] p-6 text-left transition hover:border-secondary/40"
              >
                <h3 className="mb-3 text-lg font-bold text-white group-hover:text-secondary">{article.title}</h3>
                <p className="type-body m-0 line-clamp-4 text-sm">{article.description}</p>
                <span className="mt-4 block text-sm font-semibold text-secondary">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
