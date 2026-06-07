import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { HOME_VISUAL_STRIP } from "@/data/home-page-content";

export function HomeVisualStrip() {
  return (
    <section className="section-flow" aria-label="Recent project photography">
      <div className="page-container">
        <header className="mb-6 max-w-2xl md:mb-8">
          <p className="type-eyebrow mb-2">On-site proof</p>
          <h2 className="type-h3 text-xl sm:text-2xl">What our programmes look like in Gauteng</h2>
        </header>
        <ServiceImageTriptych images={HOME_VISUAL_STRIP} />
      </div>
    </section>
  );
}
