import Image from "next/image";
import Link from "next/link";
import { SERVICES_ADDITIONAL_HUBS } from "@/data/services-page-content";

export function ServicesAdditionalHubs() {
  return (
    <section className="section-surface section-flow" aria-labelledby="services-additional-hubs-heading">
      <div className="page-container">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="type-eyebrow mb-3">Specialist hubs</p>
          <h2 id="services-additional-hubs-heading" className="type-h2 mb-3">
            Damp proofing &amp; high-access work
          </h2>
          <p className="type-body m-0 text-zinc-500">
            Moisture ingress and façade access often sit alongside structural and painting scopes. These hubs cover
            the programmes procurement teams search for separately.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {SERVICES_ADDITIONAL_HUBS.map((hub) => (
            <article
              key={hub.href}
              className="group overflow-hidden rounded-xl border border-[#2a2e33] bg-[#111111] transition hover:border-secondary/40"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={hub.image}
                  alt={hub.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="type-h3 mb-3 text-xl">{hub.title}</h3>
                <p className="type-body mb-5">{hub.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {hub.tags.map((tag) => (
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
                  href={hub.href}
                  className="inline-block border-b border-secondary pb-1 text-sm font-semibold text-white transition hover:text-secondary"
                >
                  Explore hub →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
