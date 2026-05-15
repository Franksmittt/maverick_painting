import Link from "next/link";

export type HubSpokeLink = {
  href: string;
  label: string;
  description: string;
};

export function HubSpokeSection({ title, intro, links }: { title: string; intro: string; links: HubSpokeLink[] }) {
  return (
    <section className="border-t border-white/5 bg-gray-950 py-20">
      <div className="page-container">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">{intro}</p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="rounded-xl border border-white/10 bg-primary p-6 shadow-lg transition hover:border-secondary/60">
              <Link href={l.href} className="text-lg font-bold text-secondary hover:text-tertiary md:text-xl">
                {l.label}
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{l.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
