import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqSection } from "@/components/faq-section";
import { ServicesOverview } from "@/components/services/services-overview";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Painting, Waterproofing & Structural Repair Services | Gauteng",
  description:
    "Turn-key structural repairs, waterproofing, industrial coatings, rope access, and independent QA for body corporates, developers, and commercial assets across Johannesburg, Pretoria, and the East, West, and South Rand.",
  path: "/services",
});

const servicesFaq = [
  {
    question: "What makes Maverick's structural repairs different from standard painters?",
    answer:
      "Every remedial scope starts with substrate diagnostics, engineer-approved specifications and independent QA sign-off, so defects are fixed at the structural level before we apply coatings.",
  },
  {
    question: "Do you handle waterproofing, painting and access in a single contract?",
    answer:
      "Yes. Our turnkey teams manage advanced access (rope, scaffold, boom lifts), waterproofing membranes and final coating systems, giving body corporates and developers one accountable partner.",
  },
  {
    question: "How do you guarantee compliance and warranties?",
    answer:
      "We partner with leading manufacturers, document film thickness with third-party inspectors and co-sign workmanship + product guarantees ranging from 5 to 15 years.",
  },
  {
    question: "Which Gauteng regions do you cover?",
    answer:
      "We programme work across Central Gauteng, the East Rand, West Rand, and South Rand, including Sandton, Midrand, Boksburg, Roodepoort, Alberton, and surrounding industrial and sectional-title nodes.",
  },
  {
    question: "What is independent third-party QA?",
    answer:
      "On agreed scopes, a separate inspector verifies surface preparation, environmental conditions, and dry film thickness, producing bi-weekly reports trustees and facility managers can defend at AGMs.",
  },
  {
    question: "Do you provide engineer-aligned structural specifications?",
    answer:
      "Yes. Spalling, crack injection, and expansion joint scopes follow manufacturer and engineer requirements with documented preparation records, not cosmetic patch-and-paint shortcuts.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <ServicesOverview />
      <FaqSection
        headingId="services-faq-heading"
        title="Services & procurement FAQs"
        subtitle="How Maverick scopes structural, waterproofing, and coating programmes for Gauteng portfolios."
        items={servicesFaq}
        schemaPath="/services"
      />
    </div>
  );
}
