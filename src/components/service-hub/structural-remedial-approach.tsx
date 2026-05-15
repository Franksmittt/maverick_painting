import { cn } from "@/lib/utils";

const STEPS = [
  {
    phase: "PHASE_01",
    title: "Defect Diagnosis & Spec",
    description:
      "Our assessment team uses moisture meters and hammer tests to diagnose the root cause (e.g., carbonation, chloride ingress) and prepares a substrate-specific, engineer-approved specification.",
  },
  {
    phase: "PHASE_02",
    title: "Concrete Remediation",
    description:
      "Removal of delaminated concrete, passivation of rebar to stop rust, and repair using polymer-modified structural mortar, engineered reinstatement, not cosmetic filler.",
  },
  {
    phase: "PHASE_03",
    title: "Crack Injection",
    description:
      "Epoxy or polyurethane injection selected by crack behaviour: structural bonding vs active leak sealing. Ports, pressures, and batch records are documented for commercial QA files.",
  },
  {
    phase: "PHASE_04",
    title: "Protective Coating",
    description:
      "Application of manufacturer-approved breathable membranes and elastomeric coatings that resist UV, manage water vapour, and accommodate movement where specified.",
  },
] as const;

function matrixColBorderClass(index: number) {
  return cn(
    "border-[#2a2e33]",
    index < 3 && "border-b",
    index % 2 === 0 && "min-[601px]:border-r",
    (index === 1 || index === 3) && "min-[601px]:border-r-0",
    index >= 2 && "min-[601px]:border-t",
    "lg:border-b-0 lg:border-t-0",
    index < 3 && "lg:border-r",
    index === 3 && "lg:border-r-0",
    index >= 2 && "min-[601px]:max-lg:border-t",
    index >= 2 && "lg:border-t-0",
  );
}

export function StructuralRemedialApproach() {
  return (
    <section className="section-surface section-pad" aria-labelledby="remedial-approach-heading">
      <div className="page-container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 id="remedial-approach-heading" className="type-h2 mb-4">
            Our remedial approach
          </h2>
          <p className="type-lead m-0 text-zinc-500">
            Engineer-approved protocols. Auditable repairs. Zero fluff.
          </p>
        </header>

        <div className="grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-lg border border-[#2a2e33] bg-[#111111] min-[601px]:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <article
              key={step.phase}
              className={cn(
                "group relative p-6 transition-colors duration-300 hover:bg-[#1a1c1e] sm:p-8 lg:p-10",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-[width] after:duration-300 after:ease-out group-hover:after:w-full",
                matrixColBorderClass(index),
              )}
            >
              <p className="type-phase mb-4">{step.phase}</p>
              <h3 className="mb-3 text-lg font-bold leading-snug text-white sm:mb-4 sm:text-xl">{step.title}</h3>
              <p className="type-body m-0 text-zinc-500">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
