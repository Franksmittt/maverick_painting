import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";
import { Droplet, CheckSquare } from "lucide-react";

export function LiquidVsTorchOnArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Waterproofing", href: "/blog/waterproofing" },
          {
            label:
              "Liquid Applied Membranes vs. Torch-On: Which System is Right for Your Roof?",
            href: "/blog/waterproofing/liquid-vs-torch-on",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Technical Specification</p>
          <h1 className="type-h1 mb-4 uppercase">
            Liquid Applied vs. Torch-On: Which Waterproofing System is Superior?
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>The Seamless Advantage of Liquid Membranes</h2>
            <p>
              <strong>Liquid Applied Membranes (LAMs)</strong>, particularly
              polyurethane systems, offer a fundamentally superior seal for
              complex flat roofs and structures. Unlike felt-based systems, LAMs
              cure to form a single, seamless, monolithic barrier. This
              eliminates the weakest point of any traditional system: the joins
              and overlaps.
            </p>
            <ul>
              <li className="flex items-center space-x-2">
                <Droplet className="w-5 h-5 text-secondary" /> Forms a single,
                monolithic, and joint-free barrier.
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-5 h-5 text-secondary" /> Adheres fully
                to substrates, reducing risk of water migration beneath the
                membrane.
              </li>
              <li className="flex items-center space-x-2">
                <Droplet className="w-5 h-5 text-secondary" /> Ideal for complex
                details like parapet walls, vents, and flashings where torch-on
                often fails.
              </li>
            </ul>
          </section>

          <section>
            <h2>The Trade-offs of Torch-On Systems</h2>
            <p>
              <strong>Torch-On Systems</strong> (bituminous felt) are robust and
              widely used, but their reliance on heat application introduces site
              risks and inherent limitations. Every overlap is a potential point
              of failure. While they offer excellent resistance to foot traffic
              and puncture, the system&apos;s performance is entirely dependent
              on the skill and precision of the applicator fusing the seams.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Maverick&apos;s Specification Recommendation</h3>
            <p>
              For critical, high-value assets (like multi-story commercial roofs
              and balconies), we generally specify{" "}
              <strong>high-quality polyurethane LAMs</strong> due to their
              seamless, long-term integrity. For large, open, and accessible
              industrial roofs, an expertly applied torch-on system can still be
              cost-effective. The choice is always substrate and project-specific.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/waterproofing-services">
                Request a Waterproofing Specification Audit &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
