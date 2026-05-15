import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type Props = ServiceHubPageConfig["magazine"];

function EditorialSection({
  section,
  index,
}: {
  section: Props["sections"][number];
  index: number;
}) {
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

export function ServiceHubMagazine({ headingId, title, subtitle, sections }: Props) {
  return (
    <section className="section-surface section-pad" aria-labelledby={headingId}>
      <div className="page-container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <h2 id={headingId} className="type-h2">
            {title}
          </h2>
          <p className="type-lead mx-auto mt-4 max-w-2xl text-zinc-500">{subtitle}</p>
        </header>

        <div className="w-full min-w-0">
          {sections.map((section, index) => (
            <EditorialSection key={section.phase} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
