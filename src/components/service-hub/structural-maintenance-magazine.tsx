import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
        <p className="drop-cap mb-4 text-[0.95rem] leading-relaxed text-zinc-300">
          It warns you in small pieces first, then it invoices you in big ones. Keeping spalling inside a proper
          maintenance rhythm is how you protect reserves, keep insurers calm, and avoid the repaint that lands on edges
          that are already tired.
        </p>
        <p className="text-[0.95rem] leading-relaxed text-zinc-300">
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
        <p className="mb-4 text-[0.95rem] leading-relaxed text-zinc-300">
          Edges take the weather, cars track chloride in under tyres, and a small delamination becomes a line item nobody
          wanted on the AGM agenda. These jobs are seldom a single edge. They are whole façades, parking grids, and
          trustees who need a plan they can explain without reaching for a dictionary of defects.
        </p>
        <p className="text-[0.95rem] leading-relaxed text-zinc-300">
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
        <p className="mb-4 text-[0.95rem] leading-relaxed text-zinc-300">
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
        <p className="mb-4 text-[0.95rem] leading-relaxed text-zinc-300">
          Access, water, and concrete talk to each other whether we draw them in separate boxes or not. We prefer the
          drawing that matches how your asset actually behaves.
        </p>
        <p className="text-[0.95rem] leading-relaxed text-zinc-500">
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
      className={`relative mb-16 flex flex-col items-center md:mb-20 lg:flex-row lg:items-center ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <ImageWrap section={section} />
      <TextWrap section={section} reversed={reversed} />
    </article>
  );
}

function ImageWrap({ section }: { section: MagazineSection }) {
  return (
    <div className="relative z-[1] h-[300px] w-full shrink-0 md:h-[400px] lg:w-[55%]">
      <Image
        src={section.image.src}
        alt={section.image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 550px"
      />
    </div>
  );
}

function TextWrap({ section, reversed }: { section: MagazineSection; reversed: boolean }) {
  return (
    <div
      className={`relative z-[2] w-[85%] bg-[#111111] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:p-10 lg:w-[55%] ${
        reversed
          ? "mt-[-2.5rem] border-b-[3px] border-secondary lg:mt-0 lg:-mr-[10%] lg:ml-0 lg:border-t-0 lg:shadow-[10px_10px_30px_rgba(0,0,0,0.8)]"
          : "mt-[-2.5rem] border-t-[3px] border-secondary lg:mt-0 lg:-ml-[10%] lg:shadow-[-10px_10px_30px_rgba(0,0,0,0.8)]"
      } ${
        section.dropCap
          ? "[&_.drop-cap:first-letter]:float-left [&_.drop-cap:first-letter]:mr-3 [&_.drop-cap:first-letter]:mt-1.5 [&_.drop-cap:first-letter]:text-[3.2rem] [&_.drop-cap:first-letter]:font-bold [&_.drop-cap:first-letter]:leading-[2.5rem] [&_.drop-cap:first-letter]:text-secondary"
          : ""
      }`}
    >
      <span className="mb-4 block text-[0.85rem] font-semibold uppercase tracking-[0.2em] text-secondary">
        {section.phase}
      </span>
      <h3 className="mb-4 text-[2.2rem] font-bold leading-[1.1] tracking-[-0.5px] text-white">{section.title}</h3>
      {section.body}
    </div>
  );
}

export function StructuralMaintenanceMagazine() {
  return (
    <section className="border-t border-white/5 bg-[#080808] py-14 md:py-16">
      <div className="page-container">
        <h2 className="mb-12 text-center text-[2.5rem] font-bold tracking-[-1px] text-white md:mb-16">
          Maintenance <span className="text-secondary">Philosophy</span>
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-lg font-light leading-relaxed text-zinc-400 md:mb-16">
          Why structural remediation belongs in your maintenance plan
        </p>

        {SECTIONS.map((section, index) => (
          <EditorialSection key={section.phase} section={section} index={index} />
        ))}
      </div>
    </section>
  );
}
