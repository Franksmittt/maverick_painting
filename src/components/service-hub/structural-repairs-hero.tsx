import { cn } from "@/lib/utils";

const ASSET_CLASSES = ["Sectional title", "Commercial", "Industrial"] as const;

const CORE_INTERVENTIONS = [
  "Rebar passivation",
  "Structural mortars",
  "Crack injection",
  "Joint rebuilds",
  "Protective coatings",
] as const;

function HudList({ items }: { items: readonly string[] }) {
  return (
    <div className="m-0 flex flex-wrap gap-x-3 gap-y-2 p-0 sm:gap-x-[15px] sm:gap-y-2.5 max-sm:flex-col max-sm:gap-2.5">
      {items.map((item, index) => (
        <span
          key={item}
          className={cn(
            "type-body flex items-center text-secondary",
            index < items.length - 1 &&
              "max-sm:after:hidden after:ml-3 after:text-base after:leading-none after:text-[#2a2e33] after:content-['•'] sm:after:ml-[15px]",
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function HudBox({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="w-full min-w-0 rounded border border-[#2a2e33] bg-[#111111] px-5 py-5 transition-colors duration-300 hover:border-secondary/40 sm:px-8 sm:py-6 min-[901px]:w-auto">
      <p className="type-eyebrow mb-4">{title}</p>
      <HudList items={items} />
    </div>
  );
}

/** Structural repairs hub hero — single h1, HUD glance panels. */
export function StructuralRepairsHero() {
  return (
    <section className="section-surface" aria-labelledby="structural-repairs-heading">
      <div className="page-container section-pad !py-12 md:!py-16 lg:!py-20">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 top-2.5 max-h-[120px] w-[3px] bg-[#2a2e33] sm:max-h-[200px] lg:max-h-[250px]"
            aria-hidden
          />

          <div className="relative min-w-0 pl-5 sm:pl-9">
            <h1 id="structural-repairs-heading" className="type-h1 mb-4 max-w-[850px] sm:mb-5">
              Structural repairs for concrete that is failing in plain sight.
            </h1>

            <p className="type-lead mb-10 max-w-[800px] lg:mb-12">
              If you are managing spalling edges, gridlines in parking, or cracks that will not stop moving, you need a
              contractor who can sequence breakout, steel protection, reinstatement, and downstream waterproofing or
              coatings without drama.
            </p>

            <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 min-[901px]:grid-cols-2 min-[901px]:gap-[30px] lg:max-w-4xl">
              <HudBox title="Asset Classes" items={ASSET_CLASSES} />
              <HudBox title="Core Interventions" items={CORE_INTERVENTIONS} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
