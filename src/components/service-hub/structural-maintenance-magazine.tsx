import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
  { src: "/images/munyaka-midrand.jpg", alt: "Concrete structure diagnostics on a Gauteng sectional-title development" },
  { src: "/images/the-blyde-pretorria.jpg", alt: "Gauteng high-rise façade and podium with parking levels" },
  { src: "/images/eastlands-benoni.jpg", alt: "Structural remediation and access planning on a commercial exterior" },
] as const;

type MagazineSection = {
  phase: string;
  title: string;
  image: (typeof IMAGES)[number];
  dropCap?: boolean;
  body: ReactNode;
};

const SECTIONS: MagazineSection[] = [
  {
    phase: "Phase 01 / Assessment",
    title: "Concrete does not negotiate.",
    image: IMAGES[0],
    dropCap: true,
    body: (
      <>
        <p className="drop-cap type-body mb-4 text-zinc-300">
          It warns you in small pieces first, then it invoices you in big ones. Keeping spalling inside a proper
          maintenance rhythm is how you protect reserves, keep insurers calm, and avoid the repaint that lands on edges
          that are already tired.
        </p>
        <p className="type-body text-zinc-300">
          When breakouts are left in the “we will see” pile, chlorides ride deeper, patches get bigger, and the next
          contractor has to price risk you could have trimmed months ago. In sectional-title schemes, visible concrete
          cancer also arrives in trustee conversations at exactly the wrong time, often beside a{" "}
          <Link href="/painting/body-corporate" className="text-secondary no-underline hover:underline">
            body corporate painting programme
          </Link>{" "}
          that needs sound arrises and balcony edges before any coating system can do its job.
        </p>
      </>
    ),
  },
  {
    phase: "Phase 02 / The Pattern",
    title: "Gauteng estates repeat the pattern.",
    image: IMAGES[1],
    body: (
      <>
        <p className="type-body mb-4 text-zinc-300">
          Edges take the weather, cars track chloride in under tyres, and a small delamination becomes a line item nobody
          wanted on the AGM agenda. These jobs are seldom a single edge. They are whole façades, parking grids, and
          trustees who need a plan they can explain without reaching for a dictionary of defects.
        </p>
        <p className="type-body text-zinc-300">
          On site, we treat evidence as the brief. Hammer sounding, cover surveys, moisture context, and photographs that
          explain why a repair detail exists, not why a sales deck says it should. Where load-bearing capacity is part of
          the story, we work to engineer specifications instead of improvising under time pressure.
        </p>
      </>
    ),
  },
  {
    phase: "Phase 03 / Coordination",
    title: "Repair rarely travels alone.",
    image: IMAGES[2],
    body: (
      <>
        <p className="type-body mb-4 text-zinc-300">
          We sequence naturally with{" "}
          <Link href="/waterproofing-services" className="text-secondary no-underline hover:underline">
            waterproofing renewals
          </Link>{" "}
          and{" "}
          <Link
            href="/access-solutions/rope-access-painting"
            className="text-secondary no-underline hover:underline"
          >
            rope access programmes
          </Link>{" "}
          so temporary works, curing windows, and membrane interfaces are planned once. That is the boring kind of
          coordination that stops the classic argument where the painter blames the waterproofer, and the other way
          around. One programme, one sequence, fewer return visits.
        </p>
        <p className="type-body mb-4 text-zinc-300">
          Access, water, and concrete talk to each other whether we draw them in separate boxes or not. We prefer the
          drawing that matches how your asset actually behaves.
        </p>
        <p className="type-body text-zinc-500">
          If you are comparing Gauteng remedial contractors, ask for a method statement outline, a safety file index, and
          a redacted QA sample from a recent commercial job. We are comfortable being judged on paperwork, because that is
          how serious portfolios are run.
        </p>
      </>
    ),
  },
];

function EditorialSection({ section, index }: { section: MagazineSection; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <article
      className={cn(
        "relative mb-12 flex w-full min-w-0 flex-col items-stretch md:mb-16 lg:mb-20 lg:flex-row lg:items-center",
        reversed && "lg:flex-row-reverse",
      )}
    >
      <div className="relative z-[1] h-[260px] w-full shrink-0 sm:h-[300px] md:h-[360px] lg:h-[400px] lg:w-[55%]">
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 550px"
        />
      </div>

      <div
        className={cn(
          "relative z-[2] w-[calc(100%-1.5rem)] max-w-full bg-[#111111] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.8)] sm:w-[90%] sm:p-8 md:p-10 lg:w-[55%]",
          reversed
            ? "-mt-8 border-b-[3px] border-secondary sm:-mt-10 lg:mt-0 lg:-mr-[10%] lg:ml-0 lg:border-t-0 lg:shadow-[10px_10px_30px_rgba(0,0,0,0.8)]"
            : "-mt-8 border-t-[3px] border-secondary sm:-mt-10 lg:mt-0 lg:-ml-[10%] lg:shadow-[-10px_10px_30px_rgba(0,0,0,0.8)]",
          section.dropCap &&
            "[&_.drop-cap:first-letter]:float-left [&_.drop-cap:first-letter]:mr-3 [&_.drop-cap:first-letter]:mt-1 [&_.drop-cap:first-letter]:text-4xl [&_.drop-cap:first-letter]:font-bold [&_.drop-cap:first-letter]:leading-none [&_.drop-cap:first-letter]:text-secondary sm:[&_.drop-cap:first-letter]:text-5xl",
        )}
      >
        <p className="type-phase mb-3">{section.phase}</p>
        <h3 className="type-h3 mb-4 text-2xl sm:text-3xl">{section.title}</h3>
        {section.body}
      </div>
    </article>
  );
}

export function StructuralMaintenanceMagazine() {
  return (
    <section className="section-surface section-pad" aria-labelledby="maintenance-philosophy-heading">
      <div className="page-container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 id="maintenance-philosophy-heading" className="type-h2">
            Maintenance <span className="text-secondary">Philosophy</span>
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-2xl text-zinc-500">
            Why structural remediation belongs in your maintenance plan
          </p>
        </header>

        <div className="w-full min-w-0">
          {SECTIONS.map((section, index) => (
            <EditorialSection key={section.phase} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
