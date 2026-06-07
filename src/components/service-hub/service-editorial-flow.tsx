import type { ReactNode } from "react";
import { HubSpokeSection } from "@/components/hub-spoke-section";
import { ServiceHubApproach } from "@/components/service-hub/service-hub-approach";
import { ServiceEditorialSplit } from "@/components/service-hub/service-editorial-split";
import {
  ServiceImagePair,
  ServiceImageTriptych,
} from "@/components/service-hub/service-image-blocks";
import type { ServicePageImage } from "@/data/service-page-images";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type Props = {
  /** Eight images after the hero: triptych, editorial, pair, two editorials. */
  images: readonly ServicePageImage[];
  approach: ServiceHubPageConfig["approach"];
  hubSpoke: ServiceHubPageConfig["hubSpoke"];
  magazine: ServiceHubPageConfig["magazine"];
};

function MagazineIntro({
  headingId,
  title,
  subtitle,
}: {
  headingId: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <h2 id={headingId} className="type-h2">
        {title}
      </h2>
      <p className="type-lead mx-auto mt-4 max-w-2xl text-zinc-500">{subtitle}</p>
    </header>
  );
}

export function ServiceEditorialFlow({ images, approach, hubSpoke, magazine }: Props) {
  const triptych = images.slice(0, 3);
  const editorialImages = [images[3], images[6], images[7]];
  const pair = images.slice(4, 6);
  const sections = magazine.sections;

  return (
    <>
      {triptych.length > 0 ? (
        <section className="section-surface border-t-0 pb-0 pt-0">
          <div className="page-container pb-10 md:pb-14">
            <ServiceImageTriptych images={triptych} />
          </div>
        </section>
      ) : null}

      <ServiceHubApproach {...approach} />

      <section className="section-surface section-pad" aria-labelledby={magazine.headingId}>
        <div className="page-container">
          <MagazineIntro
            headingId={magazine.headingId}
            title={magazine.title}
            subtitle={magazine.subtitle}
          />

          {sections[0] && editorialImages[0] ? (
            <ServiceEditorialSplit section={sections[0]} image={editorialImages[0]} />
          ) : null}
        </div>
      </section>

      <HubSpokeSection variant="dark" {...hubSpoke} />

      {pair.length > 0 ? (
        <section className="section-surface section-pad !pt-0">
          <div className="page-container">
            <ServiceImagePair images={pair} />
          </div>
        </section>
      ) : null}

      <section className="section-surface section-pad !pt-0">
        <div className="page-container space-y-12 md:space-y-16 lg:space-y-20">
          {sections[1] && editorialImages[1] ? (
            <ServiceEditorialSplit section={sections[1]} image={editorialImages[1]} reversed />
          ) : null}
          {sections[2] && editorialImages[2] ? (
            <ServiceEditorialSplit section={sections[2]} image={editorialImages[2]} />
          ) : null}
        </div>
      </section>
    </>
  );
}
