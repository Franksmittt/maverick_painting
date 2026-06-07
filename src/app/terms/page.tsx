import { LegalPageLayout } from "@/components/static/legal-page-layout";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Service | Maverick Painting Contractors",
  description:
    "Review the official Terms of Service for all contracting work and use of the Maverick Painting website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPageLayout
      breadcrumbs={[{ label: "Terms of service", href: "/terms" }]}
      title="Terms of service"
      updated="November 9, 2025"
    >
      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By engaging Maverick Painting for services, or by using this website, you agree to be bound by these
          Terms and Conditions (&quot;Terms&quot;). These Terms govern your access to and use of our services and
          our website. If you disagree with any part of the terms then you may not access the Service.
        </p>
      </section>

      <section>
        <h2>2. Service provision and scope of work</h2>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            All project work, including structural repairs, painting, and waterproofing, will be executed
            strictly in accordance with the signed quotation and technical specification provided to the client.
          </li>
          <li>
            The scope of work is defined exclusively by the written agreement and does not include any verbal
            modifications unless formalized in writing.
          </li>
          <li>
            Payment terms and conditions, including deposit schedules and final settlement, are outlined in the
            official quotation document.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Quality assurance and guarantees</h2>
        <p>
          We warrant that the work will be performed in a professional and workmanlike manner. Product guarantees
          are issued by the respective material manufacturer (e.g., Plascon, Dulux, Sika) and are subject to their
          terms and conditions. Our independent third-party QA process is designed to mitigate risk but does not
          replace manufacturer guarantees.
        </p>
      </section>

      <section>
        <h2>4. Limitation of liability</h2>
        <p>
          Maverick Painting&apos;s liability is limited to the total value of the contract price for the services
          rendered. We are not liable for consequential damages or latent defects in the original structure that
          were not identifiable during the initial inspection.
        </p>
      </section>

      <section>
        <h2>5. Governing law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of South Africa, without regard
          to its conflict of law provisions.
        </p>
      </section>
    </LegalPageLayout>
  );
}
