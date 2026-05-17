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
