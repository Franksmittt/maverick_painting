import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { QaProcessModule } from "@/components/qa-process-module";
import type { ProjectCaseStudy } from "@/data/projects";
import { siteConfig } from "@/lib/seo";

type ProjectDetailPageProps = {
  project: ProjectCaseStudy;
};

export function ProjectDetailPageContent({ project }: ProjectDetailPageProps) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.name,
    description: `Case study for ${project.name} in ${project.location}. Scope: ${project.scope}.`,
    image: `${baseUrl}${project.image}`,
    datePublished: project.lastModified || project.date,
    dateModified: project.lastModified || project.date,
    author: { "@type": "Organization", name: siteConfig.name, url: baseUrl },
    publisher: { "@type": "Organization", name: siteConfig.name, url: baseUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/projects/${project.slug}` },
    articleSection: "Case Studies",
  };

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Breadcrumbs
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.name, href: `/projects/${project.slug}` },
        ]}
      />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3">Project case study</p>
              <h1 className="type-h1 mb-5 uppercase">{project.name}</h1>
              <div className="mb-4 flex flex-wrap gap-6">
                <p className="flex items-center gap-2 text-zinc-400">
                  <MapPin className="h-5 w-5 text-secondary" aria-hidden />
                  {project.location}
                </p>
                <p className="flex items-center gap-2 text-zinc-400">
                  <Clock className="h-5 w-5 text-secondary" aria-hidden />
                  Completed: {project.date}
                </p>
              </div>
              <p className="type-lead mb-8 max-w-2xl">{project.scope}</p>
              <Button asChild className="h-auto w-fit rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request assessment for a similar project</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.location}`}
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
          <header className="mb-8 max-w-3xl">
            <p className="type-eyebrow mb-2">Programme highlights</p>
            <h2 className="type-h2 mb-3">Key project outcomes</h2>
          </header>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {project.details.map((detail) => {
              const Icon = detail.icon;
              return (
                <article
                  key={detail.text.slice(0, 40)}
                  className="rounded-xl border border-t-[3px] border-white/[0.08] border-t-tertiary bg-[#111111] p-6"
                >
                  <Icon className="mb-4 h-8 w-8 text-secondary" aria-hidden />
                  <p className="type-body m-0 text-sm">{detail.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <QaProcessModule />
      <TrustAndCtaStrip />
    </div>
  );
}
