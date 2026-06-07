import { cn } from "@/lib/utils";
import { ServiceImageFrame } from "@/components/service-hub/service-image-blocks";
import type { ServicePageImage } from "@/data/service-page-images";
import type { ServiceHubMagazineSection } from "@/lib/service-hub-types";

type Props = {
  section: ServiceHubMagazineSection;
  image: ServicePageImage;
  reversed?: boolean;
};

export function ServiceEditorialSplit({ section, image, reversed = false }: Props) {
  return (
    <article
      className={cn(
        "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12",
        reversed && "[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1",
      )}
    >
      <ServiceImageFrame
        image={image}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div
        className={cn(
          "rounded-xl border border-white/[0.06] bg-[#111111]/80 p-6 sm:p-8 lg:p-10",
          section.dropCap &&
            "[&_.drop-cap:first-letter]:mr-1 [&_.drop-cap:first-letter]:text-4xl [&_.drop-cap:first-letter]:font-bold [&_.drop-cap:first-letter]:leading-none [&_.drop-cap:first-letter]:text-secondary sm:[&_.drop-cap:first-letter]:text-5xl",
        )}
      >
        <p className="type-phase mb-3">{section.phase}</p>
        <h3 className="type-h3 mb-4 text-2xl sm:text-3xl">{section.title}</h3>
        <div className="space-y-4 [&_.type-body]:text-zinc-400">{section.body}</div>
      </div>
    </article>
  );
}
