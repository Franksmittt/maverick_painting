import { cn } from "@/lib/utils";
import { ServiceImageFrame } from "@/components/service-hub/service-image-blocks";
import type { ServicePageImage } from "@/data/service-page-images";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type Props = Pick<ServiceHubPageConfig["hero"], "headingId" | "h1" | "lead" | "interventionsLabel" | "interventions"> & {
  heroImage?: ServicePageImage;
};

export function ServiceHubHero({
  headingId,
  h1,
  lead,
  interventionsLabel,
  interventions,
  heroImage,
}: Props) {
  return (
    <section className="section-surface" aria-labelledby={headingId}>
      <div className="page-container section-pad !py-12 md:!py-16 lg:!py-20">
        <div
          className={cn(
            "grid grid-cols-1 gap-8 lg:gap-12",
            heroImage && "lg:grid-cols-2 lg:items-center",
          )}
        >
          <div className="relative min-w-0">
            <div
              className="pointer-events-none absolute left-0 top-2.5 max-h-[120px] w-[3px] bg-[#2a2e33] sm:max-h-[200px] lg:max-h-[250px]"
              aria-hidden
            />
            <div className="relative pl-5 sm:pl-9">
              <h1 id={headingId} className="type-h1 mb-4 sm:mb-5">
                {h1}
              </h1>
              <p className="type-lead mb-0 max-w-[640px]">{lead}</p>
            </div>
          </div>

          {heroImage ? (
            <ServiceImageFrame
              image={heroImage}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : null}
        </div>

        <div className="mt-10 w-full min-w-0 overflow-hidden rounded-lg border border-[#2a2e33] bg-[#111111] px-6 py-8 transition-colors duration-300 hover:border-secondary/40 sm:mt-12 sm:px-10 sm:py-10 lg:mt-14">
          <p className="type-eyebrow mb-5 text-center">{interventionsLabel}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 text-center sm:gap-x-[15px]">
            {interventions.map((item, index) => (
              <span
                key={item}
                className={cn(
                  "type-body inline-flex items-center text-secondary",
                  index < interventions.length - 1 &&
                    "after:ml-3 after:text-base after:leading-none after:text-[#2a2e33] after:content-['•'] sm:after:ml-[15px]",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
