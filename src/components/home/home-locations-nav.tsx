import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOME_LOCATION_LINKS } from "@/data/home-page-content";

export function HomeLocationsNav() {
  return (
    <section className="section-surface section-flow" aria-labelledby="home-locations-heading">
      <div className="page-container">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="type-eyebrow mb-3">Gauteng coverage</p>
            <h2 id="home-locations-heading" className="type-h2 mb-3">
              Local programmes across the Rand
            </h2>
            <p className="type-body m-0 text-zinc-500">
              Regional hubs link to city pages and high-intent local scopes such as Sandton balconies or East Rand
              warehouse floors.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-secondary/40 text-white hover:bg-white/5">
            <Link href="/locations">All locations</Link>
          </Button>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_LOCATION_LINKS.map((region) => (
            <Link
              key={region.href}
              href={region.href}
              className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-secondary/40 hover:bg-white/[0.06]"
            >
              <MapPin className="mb-3 h-5 w-5 text-secondary" aria-hidden />
              <h3 className="mb-2 font-bold text-white group-hover:text-secondary">{region.label}</h3>
              <p className="type-body m-0 text-sm">{region.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
