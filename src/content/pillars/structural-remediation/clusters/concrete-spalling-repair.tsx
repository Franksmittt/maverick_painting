import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";
import { Wrench, Layers } from "lucide-react";

export function ConcreteSpallingRepairArticle() {
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
            label: "Concrete Spalling Repair: Permanent, Engineering-Led Workflow",
            href: "/blog/structural-remediation/concrete-spalling-repair",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">10 Min Read · Maverick Technical Team</p>
          <h1 className="type-h1 mb-4 uppercase">
            The Core Problem: Why Painting Over Concrete Spalling Fails.
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>The Failure of Cosmetic Patches</h2>
            <p>
              Concrete spalling (often called &quot;concrete cancer&quot;) is not a surface flaw; it&apos;s a symptom of
              internal structural degradation. It occurs when moisture and carbon dioxide penetrate the concrete,
              causing the reinforcing steel (rebar) to rust and expand, exerting immense pressure that pops the
              concrete off the surface.
            </p>
            <p>
              Painting over this defect or using non-structural plaster patches only provides a temporary, cosmetic fix.
              The underlying corrosion process continues, and the patched area will fail again, often within 12 to 18 months,
              leading to costly recurring repairs.
            </p>
          </section>

          <section>
            <h2>The Four-Phase Structural Solution</h2>
            <p>
              A permanent repair must follow a strict engineering protocol that addresses the steel corrosion and restores
              the concrete&apos;s alkalinity. Our four-phase process includes:
            </p>
            <ul>
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" /> Defect removal and rebar cleaning to a bright metal finish.
              </li>
              <li className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-secondary" /> Passivation of the rebar (applying an anti-corrosive coating) to halt the rusting process.
              </li>
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" /> Application of polymer-modified structural mortar to replace the spalled concrete.
              </li>
              <li className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-secondary" /> Final application of a breathable, elastomeric coating to prevent future moisture ingress.
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Key Takeaway for Trustees &amp; Developers</h3>
            <p>
              Always demand an assessment that includes moisture readings and hammer testing. A true structural solution is an{" "}
              <strong>investment</strong> that reduces long-term liability, whereas a patch is merely an <strong>expense</strong>.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/structural-repairs">
                View Our Structural Repair Service Page &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
