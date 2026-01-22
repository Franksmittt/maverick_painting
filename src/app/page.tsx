// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TrustStripMobileCarousel } from "@/components/trust-strip-mobile-carousel";
import { ClientLogoStrip } from "@/components/client-logo-strip"; // <-- NEW IMPORT
import { ServiceExpertiseGrid } from "@/components/service-expertise-grid";
import { CtaStripModule } from "@/components/cta-strip-module"; 
import { ProjectShowcaseModule } from "@/components/project-showcase-module";
import { QaProcessModule } from "@/components/qa-process-module";
// Position Swapped
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/seo";

// SEO Checklist: Explicit homepage metadata (inherits from layout but explicit is better)
export const metadata = buildPageMetadata({
    title: "Gauteng Painting & Waterproofing Experts | Structural Repairs & Industrial Coatings",
    description: "Owner supervised painting contractors in Gauteng specialising in structural repairs, waterproofing, industrial coatings and independent QA for body corporates, developers and high-end homeowners.",
    path: "/",
});

export default function Home() {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  
  // AggregateRating schema using Service-as-Product strategy for star ratings in SERP
  const serviceRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Professional Painting, Structural Repairs & Waterproofing Services",
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
    serviceType: [
      "Commercial & Industrial Painting",
      "Structural & Concrete Repairs",
      "Waterproofing & Damp Proofing",
      "High-Access Rope Painting",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceRatingSchema).replace(/</g, '\\u003c'),
        }}
      />
      <HeroSection />
      
      {/* --- Trust Strip / Mobile Carousel --- */}
      <TrustStripMobileCarousel />

      {/* --- NEW MODULE: CLIENT LOGO STRIP (Authority/Trust) --- */}
      <ClientLogoStrip />

      {/* --- Service Expertise Grid --- */}
      <ServiceExpertiseGrid />
      
      {/* --- HIGH-VALUE CTA STRIP --- */}
      <CtaStripModule />
      
     
      {/* NEW ORDERING:
        1. Project Showcase (Visual Proof)
        2. QA Process Module (The Mechanism)
      */}
      
      {/* 1. PROJECT SHOWCASE MODULE (Visual Proof / Hyper-Local SEO) */}
      <ProjectShowcaseModule /> 

      {/* 2. QA Process / De-Risking Engine (The Mechanism) */}
      <QaProcessModule /> 
      
   
      {/* --- Accreditations / Logos Strip --- */}
      <AccreditationsStrip />
    </>
  );
}