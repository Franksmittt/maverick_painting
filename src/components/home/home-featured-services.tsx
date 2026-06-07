import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HOME_FEATURED_SERVICES } from "@/data/home-page-content";

export function HomeFeaturedServices({ hideOverviewLink = false }: { hideOverviewLink?: boolean }) {
  return (
    <section className="section-surface section-flow" aria-labelledby="home-featured-services-heading">
      <div className="page-container">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <header className="max-w-2xl">
            <p className="type-eyebrow mb-3">Popular services</p>
            <h2 id="home-featured-services-heading" className="type-h2 mb-3">
              Jump straight to the scope you need
            </h2>
            <p className="type-body m-0 text-zinc-500">
              Twelve high-intent entry points across structural, waterproofing, coatings, painting, and access work.
            </p>
          </header>
          {hideOverviewLink ? (
            <Button asChild className="h-auto shrink-0 rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
              <Link href="/contact">Request assessment</Link>
            </Button>
          ) : (
            <Button asChild className="h-auto shrink-0 rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
              <Link href="/services">View all services</Link>
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {HOME_FEATURED_SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111] transition hover:-translate-y-0.5 hover:border-secondary/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-black/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary backdrop-blur-sm">
                  {service.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="mb-2 text-base font-bold leading-snug text-white group-hover:text-secondary">
                  {service.title}
                </h3>
                <p className="type-body m-0 line-clamp-3 flex-1 text-sm">{service.description}</p>
                <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-secondary">
                  View scope →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
