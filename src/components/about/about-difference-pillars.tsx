import { cn } from "@/lib/utils";
import { ABOUT_DIFFERENCE_PILLARS } from "@/data/about-page-content";

export function AboutDifferencePillars() {
  return (
    <section className="section-flow border-y border-[#2a2e33] bg-[#080808]" aria-labelledby="about-difference-heading">
      <div className="page-container">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="type-eyebrow mb-3">Our standards</p>
          <h2 id="about-difference-heading" className="type-h2 mb-4">
            The Maverick difference
          </h2>
          <p className="type-body m-0 text-zinc-500">
            Four non-negotiable standards that de-risk structural, waterproofing, and coating programmes for
            trustees, developers, and facility managers.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ABOUT_DIFFERENCE_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className={cn(
                "rounded-xl border border-white/[0.08] bg-[#111111] p-6 transition hover:border-secondary/40 hover:bg-[#1a1c1e]",
                pillar.accent === "secondary" ? "border-t-[3px] border-t-secondary" : "border-t-[3px] border-t-tertiary",
              )}
            >
              <h3 className="mb-3 text-lg font-bold text-white">{pillar.title}</h3>
              <p className="type-body m-0 text-sm">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
