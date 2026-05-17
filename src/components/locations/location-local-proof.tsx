import Link from "next/link";
import type { ServiceLocation } from "@/data/locations";

export function LocationLocalProof({ loc }: { loc: ServiceLocation }) {
  return (
    <section className="border-t border-gray-800 bg-gray-900/50 px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-2xl font-bold uppercase text-white">
          Proven work near {loc.name}
        </h2>
        <p className="mb-6 max-w-3xl text-gray-400">
          Maverick mobilises across {loc.landmarks.join(", ")} and neighbouring suburbs. Our portfolio includes
          sectional-title towers, logistics parks, and estate programmes documented with photographic condition
          packs and—on agreed scopes—independent third-party QA.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-lg border border-secondary/40 px-5 py-3 text-sm font-semibold text-secondary hover:bg-secondary/10"
          >
            View Gauteng projects
          </Link>
          <Link
            href="/gallery"
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white hover:border-secondary/40"
          >
            Photo gallery
          </Link>
          <Link
            href={`/locations/${loc.region}`}
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-white hover:border-secondary/40"
          >
            {loc.region === "east-rand"
              ? "East Rand"
              : loc.region === "west-rand"
                ? "West Rand"
                : loc.region === "south-rand"
                  ? "South Rand"
                  : "Central"}{" "}
            regional hub
          </Link>
        </div>
      </div>
    </section>
  );
}
