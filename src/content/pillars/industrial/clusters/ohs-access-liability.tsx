import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { blogProseClassName } from "@/components/blog/blog-article-shell";

export function OhsAccessLiabilityArticle() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Industrial", href: "/blog/industrial" },
          {
            label: "OHS Compliance: Managing High-Access Liability on Industrial Sites",
            href: "/blog/industrial/ohs-access-liability",
          },
        ]}
      />

      <article className="page-container pb-16 max-w-4xl">
        <header className="mb-12 border-b border-[#2a2e33] pb-8">
          <p className="type-eyebrow mb-3">OHS & Access</p>
          <h1 className="type-h1 mb-4 uppercase">
            OHS Compliance: Managing High-Access Liability on Industrial Sites
          </h1>
        </header>

        <div className={blogProseClassName}>
          <section>
            <h2>The Liability Chain</h2>
            <p>
              Even when work-at-height is outsourced, the facility owner retains residual liability.
              South African OHS Act requirements mandate that clients verify training, rescue plans,
              and equipment inspection records for every contractor. Failure to do so can invalidate
              insurance coverage after an incident.
            </p>
          </section>

          <section>
            <h2>Mandatory Documentation Checklist</h2>
            <ul>
              <li>Letter of Good Standing and rope-access certifications.</li>
              <li>Method statements referencing SANS 50795.</li>
              <li>Daily toolbox talks logged and signed by all personnel.</li>
              <li>Emergency rescue drills recorded before work commences.</li>
            </ul>
          </section>

          <section className="rounded-xl border border-white/10 bg-[#111111] p-6">
            <h3>Building an Audit Trail</h3>
            <p>
              We supply a cloud-based compliance pack so facility managers can prove due diligence
              within minutes. Each job card logs anchor inspections, PPE serial numbers, and altitude
              permits, making third-party audits painless.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/access-solutions">Review our access protocols &rarr;</Link>
            </Button>
          </section>
        </div>
      </article>

      <TrustAndCtaStrip />
    </div>
  );
}
