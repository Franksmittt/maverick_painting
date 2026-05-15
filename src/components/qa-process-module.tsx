// src/components/qa-process-module.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EYEBROW = "Our Unbeatable Guarantee";
const TITLE = "De-Risking Your Multi-Million Rand Asset.";
const BODY =
  "Unlike standard contractors who rely on biased, in-house quality checks, we use a trusted, independent third-party QA company on all projects. This is our commitment to verifiably superior quality.";

const STEPS = [
  {
    n: "01",
    title: "Substrate Specification & Assessment",
    body: "A dedicated project manager and the independent body conduct an on-site assessment to determine the correct coating system and technical specification required for your specific asset.",
  },
  {
    n: "02",
    title: "Continuous Application Inspection",
    body: "The independent company performs continuous application inspections at every critical stage (surface prep, primer, film thickness) to ensure manufacturer requirements are met before the final coat.",
  },
  {
    n: "03",
    title: "Verifiable Bi-Weekly Reporting",
    body: "You receive bi-weekly progress and substrate reports providing a complete, recorded history of the project. This delivers objective proof of quality and total peace of mind for trustees and facility managers.",
  },
] as const;

export function QaProcessModule() {
  return (
    <section className="section-flow">
      <div className="page-container">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-none lg:flex lg:min-h-[400px]">
          <div className="flex flex-col justify-center border-b border-white/[0.06] bg-[#141413] px-8 py-10 text-white lg:w-[38%] lg:shrink-0 lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{EYEBROW}</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">{TITLE}</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">{BODY}</p>
            <div className="mt-8">
              <Button
                asChild
                className="h-auto w-full rounded-lg bg-secondary px-6 py-3 text-base font-bold text-primary shadow-lg transition hover:bg-[#4AD5E2] sm:w-auto"
              >
                <Link href="/our-process-independent-qa">Read the Full QA Process</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center bg-primary px-6 py-8 lg:px-10 lg:py-10">
            <ol className="divide-y divide-white/[0.06]">
              {STEPS.map((s) => (
                <li key={s.n} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="shrink-0 pt-0.5 font-mono text-lg font-bold tabular-nums text-secondary/70">{s.n}</span>
                  <div>
                    <h3 className="text-base font-bold text-white md:text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
