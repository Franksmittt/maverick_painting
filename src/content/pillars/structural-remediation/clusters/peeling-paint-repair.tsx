import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";

export function PeelingPaintRepairArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          {
            label: "Structural Remediation",
            href: "/blog/structural-remediation",
          },
          {
            label: "Why is My Paint Peeling? Complete Diagnostic Guide",
            href: "/blog/structural-remediation/peeling-paint-repair",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Paint Pathology</p>
          <h1 className="type-h1 mb-4 uppercase">
            Why is My Paint Peeling? The Complete Diagnostic & Repair Guide
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>Understanding Paint Peeling: The Root Causes</h2>
            <p>
              Paint peeling is not a cosmetic issue: it&apos;s a symptom of underlying
              substrate failure. Before applying a new coat, you must diagnose the
              root cause. The three primary culprits are <strong>moisture
              intrusion</strong>, <strong>poor surface preparation</strong>, and{" "}
              <strong>adhesion failure</strong>.
            </p>
          </section>

          <section>
            <h2>Cause #1: Moisture Behind the Paint Film</h2>
            <p>
              The most common cause of peeling paint is moisture trapped between
              the paint and the substrate. This occurs when:
            </p>
            <ul>
              <li>
                <strong>Rising damp</strong> draws water up through masonry walls
                via capillary action
              </li>
              <li>
                <strong>Lateral damp</strong> penetrates from adjacent soil or
                retaining walls
              </li>
              <li>
                <strong>Leaking pipes or gutters</strong> create persistent moisture
                behind the paint
              </li>
              <li>
                <strong>Condensation</strong> forms on cold surfaces in
                high-humidity areas
              </li>
            </ul>
            <p>
              <strong>The Fix:</strong> You cannot paint over moisture. First,
              eliminate the water source. For rising damp, install a chemical DPC
              (Damp Proof Course). For lateral damp, apply a waterproof membrane.
              Only after the substrate is dry (verified with a moisture meter)
              should you proceed with painting.
            </p>
          </section>

          <section>
            <h2>Cause #2: Poor Surface Preparation</h2>
            <p>
              Paint requires a clean, sound, and properly primed surface to
              adhere. Common preparation failures include:
            </p>
            <ul>
              <li>
                Painting over <strong>chalky or powdery surfaces</strong> without
                stabilization
              </li>
              <li>
                Skipping <strong>primer on porous substrates</strong> like raw
                concrete or new plaster
              </li>
              <li>
                Painting over <strong>glossy surfaces</strong> without sanding
                or using a bonding primer
              </li>
              <li>
                Leaving <strong>old flaking paint</strong> in place instead of
                complete removal
              </li>
            </ul>
            <p>
              <strong>The Fix:</strong> Remove all loose and flaking paint using
              scrapers, wire brushes, or power tools. For chalky surfaces, apply a
              stabilizing primer. For glossy surfaces, sand to create a &quot;tooth&quot; or
              use a bonding primer. Always prime porous substrates before applying
              topcoats.
            </p>
          </section>

          <section>
            <h2>Cause #3: Adhesion Failure (Paint Chemistry Mismatch)</h2>
            <p>
              Certain paint types are incompatible with specific substrates or
              previous coatings. For example:
            </p>
            <ul>
              <li>
              Applying <strong>water-based paint over oil-based paint</strong>{" "}
              without proper preparation
              </li>
              <li>
                Using <strong>non-breathable paints</strong> on moisture-prone
                surfaces
              </li>
              <li>
                Applying <strong>flexible coatings</strong> over rigid substrates
                (or vice versa) without a bridging primer
              </li>
            </ul>
            <p>
              <strong>The Fix:</strong> Identify the existing paint type (water or
              oil-based) using a simple test. If switching paint types, use a
              universal primer or bonding primer. For moisture-prone areas, use
              breathable, moisture-resistant paints.
            </p>
          </section>

          <section>
            <h2>The Professional Repair Workflow</h2>
            <p>
              At Maverick Painting, we follow a systematic approach to ensure
              peeling paint never returns:
            </p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>
                <strong>Diagnostic Assessment:</strong> We use moisture meters,
                hammer tests, and visual inspection to identify the root cause.
              </li>
              <li>
                <strong>Moisture Remediation:</strong> If moisture is present, we
                eliminate the source (DPC injection, waterproofing, leak repair)
                before proceeding.
              </li>
              <li>
                <strong>Surface Preparation:</strong> Complete removal of loose
                paint, sanding, and application of appropriate primers.
              </li>
              <li>
                <strong>Substrate Repair:</strong> Fill cracks, repair spalling,
                and stabilize chalky surfaces.
              </li>
              <li>
                <strong>Primer Application:</strong> Select and apply the correct
                primer for the substrate and paint system.
              </li>
              <li>
                <strong>Topcoat Application:</strong> Apply two coats of
                high-quality paint with proper curing time between coats.
              </li>
            </ol>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h2>Don&apos;t Paint Over the Problem</h2>
            <p>
              Peeling paint is a structural issue, not a cosmetic one. A quick
              repaint will fail within months. Our approach fixes the root cause,
              ensuring your paint job lasts 10+ years.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/contact">Get a Professional Assessment</Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
