import Image from "next/image";
import Link from "next/link";
import { HOME_HUB_PILLARS } from "@/data/home-page-content";
import { SERVICES_ADDITIONAL_HUBS } from "@/data/services-page-content";

const ALL_HUBS = [
  ...HOME_HUB_PILLARS.map((hub) => ({
    title: hub.title,
    href: hub.href,
    image: hub.image,
  })),
  ...SERVICES_ADDITIONAL_HUBS.map((hub) => ({
    title: hub.title,
    href: hub.href,
    image: hub.image,
  })),
];

export function AboutHubNav() {
  return (
    <section className="section-flow" aria-labelledby="about-hubs-heading">
      <div className="page-container">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="type-eyebrow mb-3">What we deliver</p>
          <h2 id="about-hubs-heading" className="type-h2 mb-3">
            Explore our service hubs
          </h2>
          <p className="type-body m-0 text-zinc-500">
            Maverick programmes span six technical hubs. Start with the scope closest to your defect or procurement
            brief.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_HUBS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group flex items-center gap-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111] p-3 transition hover:border-secondary/40 sm:p-4"
            >
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={hub.image}
                  alt={hub.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.05]"
                  sizes="112px"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-white group-hover:text-secondary">{hub.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-secondary">
                  View hub →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
