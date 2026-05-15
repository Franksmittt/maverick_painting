import { cn } from "@/lib/utils";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type Props = ServiceHubPageConfig["approach"];

function matrixColBorderClass(index: number, total: number) {
  return cn(
    "border-[#2a2e33]",
    index < total - 1 && "border-b",
    index % 2 === 0 && "min-[601px]:border-r",
    index % 2 === 1 && "min-[601px]:border-r-0",
    index >= 2 && "min-[601px]:border-t",
    "lg:border-b-0 lg:border-t-0",
    index < total - 1 && "lg:border-r",
    index === total - 1 && "lg:border-r-0",
    index >= 2 && "min-[601px]:max-lg:border-t",
    index >= 2 && "lg:border-t-0",
  );
}

export function ServiceHubApproach({ headingId, title, subtitle, steps }: Props) {
  const colClass =
    steps.length === 4
      ? "min-[601px]:grid-cols-2 lg:grid-cols-4"
      : steps.length === 3
        ? "min-[601px]:grid-cols-3"
        : "min-[601px]:grid-cols-2";

  return (
    <section className="section-surface section-pad" aria-labelledby={headingId}>
      <div className="page-container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 id={headingId} className="type-h2 mb-4">
            {title}
          </h2>
          <p className="type-lead m-0 text-zinc-500">{subtitle}</p>
        </header>

        <div className={cn("grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-lg border border-[#2a2e33] bg-[#111111]", colClass)}>
          {steps.map((step, index) => (
            <article
              key={step.phase}
              className={cn(
                "group relative p-6 transition-colors duration-300 hover:bg-[#1a1c1e] sm:p-8 lg:p-10",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-[width] after:duration-300 after:ease-out group-hover:after:w-full",
                matrixColBorderClass(index, steps.length),
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
