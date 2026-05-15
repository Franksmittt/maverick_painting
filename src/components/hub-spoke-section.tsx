import Link from "next/link";
import { cn } from "@/lib/utils";

export type HubSpokeLink = {
  href: string;
  label: string;
  description: string;
};

type HubSpokeSectionProps = {
  title: string;
  intro: string;
  links: HubSpokeLink[];
  /** Match structural hub dark surface */
  variant?: "default" | "dark";
  headingId?: string;
};

export function HubSpokeSection({
  title,
  intro,
  links,
  variant = "default",
  headingId = "hub-spoke-heading",
}: HubSpokeSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={isDark ? "section-surface section-pad" : "border-t border-white/5 bg-gray-950 py-20"}
      aria-labelledby={headingId}
    >
      <div className="page-container">
        <h2 id={headingId} className={isDark ? "type-h2" : "text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl"}>
          {title}
        </h2>
        <p className={cn("mt-4 max-w-3xl", isDark ? "type-lead text-zinc-500" : "text-lg leading-relaxed text-gray-400")}>
          {intro}
        </p>
        <ul className="mt-8 grid w-full min-w-0 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li
              key={l.href}
              className="min-w-0 rounded-xl border border-white/10 bg-[#111111] p-5 transition hover:border-secondary/60 sm:p-6"
            >
              <h3 className="text-lg font-bold leading-snug sm:text-xl">
                <Link href={l.href} className="text-secondary hover:text-secondary/90">
                  {l.label}
                </Link>
              </h3>
              <p className="type-body mt-3">{l.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
