import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HOME_HUB_PILLARS } from "@/data/home-page-content";

function pillarBorderClass(index: number) {
  return cn(
    "border-[#2a2e33]",
    index < HOME_HUB_PILLARS.length - 1 && "border-b",
    index % 2 === 0 && "lg:border-r",
    index === 1 && "lg:border-r-0",
    index === 2 && "lg:border-b",
    index === 3 && "lg:border-r-0 lg:border-b-0",
  );
}

export function HomeServicePillars() {
  return (
    <section className="section-flow" aria-labelledby="home-pillars-heading">
      <div className="page-container">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="type-eyebrow mb-3">Core expertise</p>
          <h2 id="home-pillars-heading" className="type-h2 mb-3">
            Four pillars of asset protection
          </h2>
          <p className="type-body m-0 text-zinc-500">
            Start with the hub that matches your defect or procurement brief, then drill into the technical spoke page
            you need.
          </p>
        </header>

        <div className="grid w-full min-w-0 grid-cols-1 overflow-hidden rounded-xl border border-[#2a2e33] bg-[#111111] lg:grid-cols-2">
          {HOME_HUB_PILLARS.map((pillar, index) => (
            <article
              key={pillar.href}
              className={cn(
                "group relative flex flex-col transition-colors hover:bg-[#1a1c1e]",
                pillarBorderClass(index),
              )}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#2a2e33] lg:aspect-[2/1]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                <span
                  className="absolute right-4 top-4 text-3xl font-bold text-transparent sm:right-6 sm:top-6 sm:text-4xl"
                  style={{ WebkitTextStroke: "1px #2a2e33" }}
                  aria-hidden
                >
                  {pillar.num}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
                <h3 className="type-h3 mb-3 text-xl sm:text-2xl">{pillar.title}</h3>
                <p className="type-body mb-5 flex-1">{pillar.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <Link
                      key={tag.href}
                      href={tag.href}
                      className="rounded-sm border border-[#2a2e33] px-2.5 py-1 text-xs text-zinc-500 transition hover:border-secondary hover:text-secondary"
                    >
                      {tag.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={pillar.href}
                  className="inline-block border-b border-secondary pb-1 text-sm font-semibold text-white transition hover:text-secondary"
                >
                  Explore full hub →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
