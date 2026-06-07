import { cn } from "@/lib/utils";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type Props = ServiceHubPageConfig["approach"];

const MAX_PHASE_DESCRIPTION_LENGTH = 145;

function compactPhaseDescription(description: string) {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length <= MAX_PHASE_DESCRIPTION_LENGTH) return normalized;

  const firstSentenceMatch = normalized.match(/^.+?[.!?](?:\s|$)/);
  const firstSentence = firstSentenceMatch?.[0]?.trim();
  if (firstSentence && firstSentence.length <= MAX_PHASE_DESCRIPTION_LENGTH) {
    return firstSentence;
  }

  const clipped = normalized.slice(0, MAX_PHASE_DESCRIPTION_LENGTH);
  const lastSpace = clipped.lastIndexOf(" ");
  const trimmed = (lastSpace > 90 ? clipped.slice(0, lastSpace) : clipped).replace(/[,:;]+$/, "").trim();
  return `${trimmed}.`;
}

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
  const compactSteps = steps.map((step) => ({
    ...step,
    description: compactPhaseDescription(step.description),
  }));
  const colClass =
    compactSteps.length === 4
      ? "min-[601px]:grid-cols-2 lg:grid-cols-4"
      : compactSteps.length === 3
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

        <div className={cn("grid w-full min-w-0 grid-cols-1 items-stretch overflow-hidden rounded-lg border border-[#2a2e33] bg-[#111111]", colClass)}>
          {compactSteps.map((step, index) => (
            <article
              key={step.phase}
              className={cn(
                "group relative flex h-full flex-col p-6 transition-colors duration-300 hover:bg-[#1a1c1e] sm:p-8 lg:p-10",
                "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-secondary after:transition-[width] after:duration-300 after:ease-out group-hover:after:w-full",
                matrixColBorderClass(index, compactSteps.length),
              )}
            >
              <p className="type-phase mb-4 shrink-0">{step.phase}</p>
              <h3 className="mb-3 line-clamp-3 min-h-[4.75rem] text-lg font-bold leading-snug text-white sm:mb-4 sm:min-h-[5.25rem] sm:text-xl lg:min-h-[5.75rem]">
                {step.title}
              </h3>
              <p className="type-body m-0 line-clamp-4 min-h-[6.75rem] text-zinc-500 sm:min-h-[7.25rem] lg:min-h-[7.5rem]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
