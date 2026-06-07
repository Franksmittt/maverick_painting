import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";

export function ZincPrimerCorrosionControlArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Industrial", href: "/blog/industrial" },
          {
            label: "The Science of Stopping Rust: Choosing the Right Zinc Primer",
            href: "/blog/industrial/zinc-primer-corrosion-control",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Corrosion Control</p>
          <h1 className="type-h1 mb-4 uppercase">
            The Science of Stopping Rust: Choosing the Right Zinc Primer
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>Sacrificial vs. Barrier Protection</h2>
            <p>
              A zinc-rich primer is more than a coating: it is an engineered, sacrificial system.
              When the coating contains &gt;80% metallic zinc by weight, it becomes conductive and
              sacrifices itself before the structural steel corrodes. Barrier primers, by contrast,
              rely purely on film build to keep oxygen and moisture away from the substrate.
            </p>
            <p>
              Asset owners should evaluate the service environment: immersion, splash zones,
              or atmospheric C5 locations almost always warrant a zinc-rich epoxy or inorganic zinc
              primer beneath the build-coat system.
            </p>
          </section>

          <section>
            <h2>ISO 12944 exposure classes on the Highveld</h2>
            <p>
              Inland atmospheric corrosion (often C3–C4) still demands disciplined stripe coats at
              edges and welds. Coastal logistics corridors near OR Tambo may approach C5-I. Match
              primer chemistry to the specifier&apos;s exposure class, not a favourite brand from the yard.
            </p>
            <p>
              Maverick documents blast profile, ambient conditions, and dry film thickness per layer
              so insurer and engineer reviews survive loss events.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Specification Checklist</h3>
            <ul>
              <li>Confirm the zinc loading (minimum 80% by weight in dry film).</li>
              <li>Verify compatibility between the zinc primer and intermediate coats.</li>
              <li>Measure surface profile (Sa 2.5 / 50–75μm) before priming.</li>
              <li>Document DFT readings for each layer to satisfy warranty requirements.</li>
            </ul>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/painting/industrial">Request a plant coating audit &rarr;</Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
