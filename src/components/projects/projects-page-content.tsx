import Link from "next/link";
import { MapPin, Layers, CheckSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProjectShowcaseModule } from "@/components/project-showcase-module";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { QaProcessModule } from "@/components/qa-process-module";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";

const proofPoints = [
  { text: "Hyper-local focus: Midrand, Pretoria, Benoni", icon: MapPin },
  { text: "Structural complexity handled", icon: Layers },
  { text: "Independent QA verified quality", icon: CheckSquare },
];

export function ProjectsPageContent() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <p className="type-phase mb-3">Verifiable track record</p>
          <h1 className="type-h1 mb-6 max-w-4xl uppercase">Proof in paint. Our commercial portfolio.</h1>
          <div className="flex flex-wrap gap-6">
            {proofPoints.map((point) => (
              <div key={point.text} className="flex items-center gap-2 text-zinc-400">
                <point.icon className="h-5 w-5 text-secondary" aria-hidden />
                <span className="text-sm font-medium sm:text-base">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Featured estates</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Recent Gauteng programmes</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.projects} />
        </div>
      </section>

      <ProjectShowcaseModule />
      <QaProcessModule />

      <section className="section-flow border-t border-[#2a2e33]">
        <div className="page-container text-center">
          <p className="type-body mx-auto mb-4 max-w-2xl text-zinc-500">
            Need a similar programme scoped for your asset?{" "}
            <Link href="/contact" className="font-semibold text-secondary hover:underline">
              Request a condition assessment
            </Link>{" "}
            or browse the{" "}
            <Link href="/gallery" className="font-semibold text-secondary hover:underline">
              photo gallery
            </Link>
            .
          </p>
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
