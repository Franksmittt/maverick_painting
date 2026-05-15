import Script from "next/script";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServicesOverview } from "@/components/services/services-overview";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title:
    "Specialized Painting, Waterproofing & Structural Repair Services | Gauteng Contractor",
  description:
    "A structural asset maintenance partner offering guaranteed, turn-key solutions for commercial, industrial, and body corporate properties, including structural repairs, specialized coatings, and Independent QA. Johannesburg & Pretoria.",
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
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const serviceRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Specialized Painting, Waterproofing & Structural Repair Services",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    areaServed: siteConfig.serviceAreas,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Script id="services-rating-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(serviceRatingSchema)}
      </Script>
      <Script id="services-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: servicesFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>

      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <ServicesOverview />
    </div>
  );
}
