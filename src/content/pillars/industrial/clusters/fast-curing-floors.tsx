import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";

export function FastCuringFloorsArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Industrial", href: "/blog/industrial" },
          {
            label: "Minimizing Downtime: Fast-Curing Floors for Food Production",
            href: "/blog/industrial/fast-curing-floors",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Fast-Curing Systems</p>
          <h1 className="type-h1 mb-4 uppercase">
            Minimizing Downtime: Fast-Curing Floors for Food Production
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>Why Polyurethane Screeds Beat Epoxy in Hygienic Zones</h2>
            <p>
              Food processors cannot afford multi-day shutdowns. Polyurethane cement screeds deliver
              chemical resistance, steam-clean tolerance, and walk-on readiness in as little as 6 hours.
              That combination makes them ideal for cook lines, blast freezers, and wash bays where HACCP compliance
              is non-negotiable.
            </p>
          </section>

          <section>
            <h2>Program for Zero Production Interruptions</h2>
            <ul>
              <li>Phase work by aisle or zone and use mobile hoarding.</li>
              <li>Specify slip-resistant top coats (R11+) without trapping debris.</li>
              <li>Coordinate QA sign-offs with swab testing before reopening the line.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Implementation Snapshot</h3>
            <p>
              A recent retrofit swapped 1,200 m² of delaminated epoxy with 9mm PU screed, executed over
              a single weekend shift. Production resumed Monday morning with documented temperature logs
              and cure certificates for the client&apos;s auditors.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/specialized-coatings/hygienic-food-grade">
                Plan my floor replacement &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
