/** Structural repairs hub hero: headline + "At a glance" panel (card height matches headline + intro on lg+). */
export function StructuralRepairsHero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-secondary bg-gray-900 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" aria-hidden />
      <div className="page-container relative">
        {/* In-flow column sets parent height; card is absolutely stretched to that height on large screens. */}
        <div className="lg:w-1/2 lg:max-w-[50%] lg:pr-7">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Structural repairs for concrete that is failing in plain sight
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-400">
            If you are managing spalling edges, gridlines in parking, or cracks that will not stop moving, you need a
            contractor who can sequence breakout, steel protection, reinstatement, and downstream waterproofing or
            coatings without drama.
          </p>
        </div>

        <div className="mt-10 lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:mt-0 lg:pl-7">
          <div className="flex h-full min-h-0 flex-col rounded-2xl border border-secondary/30 bg-black/40 p-6 shadow-2xl md:p-8">
            <p className="shrink-0 text-xs font-bold uppercase tracking-[0.25em] text-secondary">At a glance</p>
            <dl className="mt-4 flex min-h-0 flex-1 flex-col justify-between gap-4 overflow-y-auto font-mono text-sm leading-relaxed text-gray-300 lg:mt-5">
              <div className="border-b border-white/10 pb-4">
                <dt className="text-[11px] uppercase tracking-wider text-gray-500">Asset classes</dt>
                <dd className="mt-1.5 text-base text-gray-100">Sectional title · Commercial · Industrial</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-gray-500">Core interventions</dt>
                <dd className="mt-1.5">
                  Rebar passivation · Structural mortars · Crack injection · Joint rebuilds · Specified protective
                  coatings
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
