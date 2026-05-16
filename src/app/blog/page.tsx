import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { BookOpen, Wrench, Layers, Building } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import { getPillars } from "@/lib/pillars";
import { standaloneBlogArticles } from "@/data/standalone-blog-articles";

export const metadata = buildPageMetadata({
  title: "Structural Repair, Waterproofing & Coating Guides",
  description:
    "Technical guides on concrete spalling, epoxy coatings, STSMA maintenance, rising damp, rope access, and body corporate asset protection in Gauteng.",
  path: "/blog",
});

const ContentCategories = [
  {
    title: "Structural Remediation",
    icon: Wrench,
    description: "Concrete cancer, crack injection, expansion joints, and spalling repair.",
    href: "/blog/structural-remediation",
  },
  {
    title: "Waterproofing & Damp",
    icon: Layers,
    description: "Torch-on vs liquid membranes, balconies, rising damp, and roof maintenance.",
    href: "/blog/waterproofing",
  },
  {
    title: "Commercial & Industrial",
    icon: Building,
    description: "Corrosion control, HACCP floors, line marking, and OHS at height.",
    href: "/blog/industrial",
  },
];

export default function BlogIndexPage() {
  const pillars = getPillars();
  const pillarClusters = pillars.flatMap((pillar) =>
    pillar.clusters.map((cluster) => ({
      title: cluster.title,
      description: cluster.description,
      href: cluster.metadata.path ?? `/blog/${pillar.slug}/${cluster.slug}`,
    }))
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
    <div className="min-h-screen bg-primary pt-24 text-white">
      <section className="relative border-b-4 border-secondary bg-gray-900 px-4 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <BookOpen className="mb-4 h-12 w-12 text-tertiary" />
          <h1 className="max-w-5xl text-5xl font-extrabold uppercase leading-tight md:text-7xl">
            The Expertise Hub. Technical Guides & Insights.
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-light text-gray-400">
            Expert resources on structural defects, waterproofing, STSMA compliance, and industrial
            coatings for Gauteng assets.
          </p>
          <Button
            asChild
            className="mt-10 h-14 transform bg-secondary text-lg font-bold text-primary shadow-2xl hover:scale-105 hover:bg-[#4AD5E2]"
          >
            <Link href="/contact">Contact an expert</Link>
          </Button>
        </div>
      </section>

      <section className="bg-primary px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto mb-16 max-w-4xl text-center">
            <h2 className="mb-3 text-4xl font-extrabold uppercase">Explore technical categories</h2>
            <p className="text-lg font-light text-gray-400">
              Jump into the knowledge required to protect your asset.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ContentCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group transform rounded-xl border-t-4 border-tertiary bg-gray-900 p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-tertiary/50"
              >
                <category.icon className="mb-4 h-8 w-8 text-secondary group-hover:text-tertiary" />
                <h3 className="mb-2 text-2xl font-bold uppercase text-white">{category.title}</h3>
                <p className="text-base text-gray-400">{category.description}</p>
                <span className="mt-4 block font-bold text-tertiary transition-colors group-hover:text-white">
                  View articles →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-extrabold uppercase">Featured guides</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-xl border border-gray-800 bg-primary p-8 text-left transition hover:border-secondary"
              >
                <h3 className="mb-3 text-xl font-bold text-white">{article.title}</h3>
                <p className="line-clamp-4 text-gray-400">{article.description}</p>
                <span className="mt-4 block font-semibold text-secondary">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinalStrip />
    </div>
  );
}

