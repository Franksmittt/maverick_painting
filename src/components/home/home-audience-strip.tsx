import Link from "next/link";
import { HOME_AUDIENCES } from "@/data/home-page-content";

export function HomeAudienceStrip() {
  return (
    <section className="section-surface section-flow" aria-labelledby="home-audience-heading">
      <div className="page-container">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="type-eyebrow mb-3">Who we serve</p>
          <h2 id="home-audience-heading" className="type-h2 mb-3">
            Find the path that matches your role
          </h2>
          <p className="type-body m-0 text-zinc-500">
            Trustees, developers, and facility managers land on different compliance and documentation needs. Start
            with the profile closest to yours.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {HOME_AUDIENCES.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-secondary/40 hover:bg-white/[0.06] md:p-8"
            >
              <div>
                <h3 className="mb-3 text-lg font-bold text-white group-hover:text-secondary">{card.title}</h3>
                <p className="type-body m-0">{card.description}</p>
              </div>
              <span className="mt-6 text-sm font-semibold uppercase tracking-wide text-secondary">
                {card.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
