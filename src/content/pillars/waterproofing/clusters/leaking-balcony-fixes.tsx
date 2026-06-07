import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";
import { Shield, Droplet, Wrench } from "lucide-react";

export function LeakingBalconyFixesArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Waterproofing", href: "/blog/waterproofing" },
          {
            label:
              "How to Fix a Leaking Balcony Without Removing Tiles (Low-Disruption Repair)",
            href: "/blog/waterproofing/leaking-balcony-fixes",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Balcony Remediation</p>
          <h1 className="type-h1 mb-4 uppercase">
            The Low-Disruption Fix: Leaking Balconies Without Tile Removal.
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>The Balcony Leak Problem: Usually the Grout, Not the Slab</h2>
            <p>
              In many cases, water ingress in a tiled balcony is not caused by a
              failed slab, but by a <strong>failed or cracked grout and joint
              sealant system</strong>. Water penetrates these joints, saturates
              the screed beneath the tiles, and then migrates laterally until it
              reaches the substrate below or the room below. The key is to stop
              the water at the surface without the destructive, expensive process
              of removing all the tiles.
            </p>
          </section>

          <section>
            <h2>Our Low-Disruption Remediation Process</h2>
            <p>
              We specialize in targeted, low-disruption systems that save time,
              money, and most importantly, the original aesthetics of the balcony.
            </p>
            <ul>
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" />{" "}
                <strong>Grout Removal:</strong> Carefully remove old, cracked, or
                compromised grout lines.
              </li>
              <li className="flex items-center space-x-2">
                <Droplet className="w-5 h-5 text-secondary" />{" "}
                <strong>Injection/Sealing:</strong> Injecting specialized flexible
                epoxy sealants into critical joints and re-grouting with
                high-performance, water-repellent grout.
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />{" "}
                <strong>Final Finish:</strong> Applying an invisible, penetrating
                sealer over the entire tile surface to reduce porosity.
              </li>
            </ul>
            <p>
              This method minimizes disruption to residents and is significantly
              faster and more cost-effective than full demolition and
              re-waterproofing.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>A Note for Body Corporates</h3>
            <p>
              When dealing with multiple balconies, the low-disruption fix is
              essential to manage budgets and resident inconvenience. Always
              prioritize a solution that <strong>guarantees against water
              migration</strong> into the screed layer.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/waterproofing-services">
                View All Our Guaranteed Waterproofing Systems &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
