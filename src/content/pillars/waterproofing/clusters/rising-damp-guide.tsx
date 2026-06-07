import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";
import { Layers, CheckSquare, Wrench } from "lucide-react";

export function RisingDampGuideArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Waterproofing", href: "/blog/waterproofing" },
          {
            label: "The Permanent Fix for Rising Damp: Chemical DPC Injection Guide",
            href: "/blog/waterproofing/rising-damp-guide",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">Moisture Control</p>
          <h1 className="type-h1 mb-4 uppercase">
            The Permanent Fix for Rising Damp: Chemical DPC Injection.
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>Rising Damp vs. Condensation: The Correct Diagnosis</h2>
            <p>
              The first mistake is treating all internal dampness as rising damp.
              Rising damp draws moisture up from the ground via capillary action,
              typically affecting only the lowest meter of the wall. Condensation
              is an airborne moisture problem, usually appearing in high-humidity
              areas like bathrooms. We use <strong>moisture profiling
              equipment</strong> to definitively diagnose the source before
              recommending treatment.
            </p>
          </section>

          <section>
            <h2>The Chemical DPC Injection Process</h2>
            <p>
              Since many older properties have failed or absent damp-proof courses,
              the modern solution is a <strong>Chemical DPC</strong>. This involves
              drilling a series of holes into the lowest mortar course, injecting a
              water-repellent (silane or siloxane-based) cream under pressure, and
              allowing it to cure.
            </p>
            <ul>
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" />{" "}
                <strong>Injection:</strong> Forming a new, permanent, horizontal
                barrier within the wall fabric.
              </li>
              <li className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-secondary" />{" "}
                <strong>Plaster Remediation:</strong> All contaminated plaster must
                be removed and replaced with salt-retardant render to prevent salt
                migration.
              </li>
              <li className="flex items-center space-x-2">
                <CheckSquare className="w-5 h-5 text-secondary" />{" "}
                <strong>Finishing:</strong> Applying a final coat of breathable,
                decorative paint.
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Why DIY Damp Proofing Fails</h3>
            <p>
              The failure of DIY or non-specialized damp proofing usually occurs in
              the <strong>plaster remediation</strong> phase. If salt-contaminated
              plaster is not fully removed, the salts will continue to draw moisture
              from the air, causing the damp to reappear. Always use a professional
              who guarantees the entire process.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/damp-proofing-services">
                View Our Full Damp Proofing Solutions &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
