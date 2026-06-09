import Link from "next/link";
import type { ServiceHubPageConfig } from "@/lib/service-hub-types";

type MatrixLocalDeliveryProps = NonNullable<ServiceHubPageConfig["localDelivery"]>;

export function MatrixLocalDelivery({
  cityName,
  region,
  landmarks,
  regionalNarrative,
  localContext,
  highlights,
  methodologyHref,
  cityHref,
}: MatrixLocalDeliveryProps) {
  return (
    <section
      className="section-flow border-b border-[#2a2e33] bg-[#111111]/50"
      aria-labelledby="matrix-local-delivery-heading"
    >
      <div className="page-container">
        <header className="mb-8 max-w-3xl">
          <p className="type-eyebrow mb-2">{region} · {cityName}</p>
          <h2 id="matrix-local-delivery-heading" className="type-h2 mb-3">
            Local delivery in {cityName}
          </h2>
          <p className="type-body m-0 text-zinc-400">{localContext}</p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">Coverage near {cityName}</h3>
            <p className="type-body mb-4 text-zinc-400">
              Mobilisation across {landmarks.join(", ")} and neighbouring suburbs. Maverick programmes are
              owner-supervised from our Centurion base with photographic condition packs and, on agreed scopes,
              independent third-party QA.
            </p>
            <p className="type-body m-0 text-sm text-zinc-500">{regionalNarrative}</p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold text-white">What we prioritise on site</h3>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-zinc-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={methodologyHref}
            className="rounded-lg border border-secondary/40 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
          >
            Full technical methodology
          </Link>
          <Link
            href={cityHref}
            className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-secondary/40"
          >
            All services in {cityName}
          </Link>
          <Link
            href="/projects"
            className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-secondary/40"
          >
            Gauteng project portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
