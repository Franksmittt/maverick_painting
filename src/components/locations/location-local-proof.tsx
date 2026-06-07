import Link from "next/link";
import type { ServiceLocation } from "@/data/locations";

export function LocationLocalProof({ loc }: { loc: ServiceLocation }) {
  const regionLabel =
    loc.region === "east-rand"
      ? "East Rand"
      : loc.region === "west-rand"
        ? "West Rand"
        : loc.region === "south-rand"
          ? "South Rand"
          : "Central Gauteng";

  return (
    <section className="section-flow border-t border-[#2a2e33] bg-[#111111]/40">
      <div className="page-container">
        <h2 className="type-h3 mb-4 text-xl sm:text-2xl">Proven work near {loc.name}</h2>
        <p className="type-body mb-6 max-w-3xl">
          Maverick mobilises across {loc.landmarks.join(", ")} and neighbouring suburbs. Our portfolio includes
          sectional-title towers, logistics parks, and estate programmes documented with photographic condition
          packs and, on agreed scopes, independent third-party QA.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg border border-secondary/40 px-5 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
          >
            View Gauteng projects
          </Link>
          <Link
            href="/gallery"
            className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-secondary/40"
          >
            Photo gallery
          </Link>
          <Link
            href={`/locations/${loc.region}`}
            className="rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-secondary/40"
          >
            {regionLabel} regional hub
          </Link>
        </div>
      </div>
    </section>
  );
}
