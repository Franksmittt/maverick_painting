import { HeroSection } from "@/components/hero-section";
import { TrustStripMobileCarousel } from "@/components/trust-strip-mobile-carousel";
import { ClientLogoStrip } from "@/components/client-logo-strip";
import { HomeAudienceStrip } from "@/components/home/home-audience-strip";
import { HomeServicePillars } from "@/components/home/home-service-pillars";
import { HomeVisualStrip } from "@/components/home/home-visual-strip";
import { HomeFeaturedServices } from "@/components/home/home-featured-services";
import { HomeLocationsNav } from "@/components/home/home-locations-nav";
import { CtaStripModule } from "@/components/cta-strip-module";
import { ProjectShowcaseModule } from "@/components/project-showcase-module";
import { QaProcessModule } from "@/components/qa-process-module";
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { FaqSection } from "@/components/faq-section";
import { homeFaqs } from "@/data/home-faqs";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Gauteng Painting, Waterproofing & Structural Repairs",
  description:
    "Owner-supervised contractors for concrete spalling, flat roofs, body corporate programmes, industrial coatings, and independent QA, serving Johannesburg, Pretoria, Midrand, and the East, West, and South Rand.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStripMobileCarousel />
      <ClientLogoStrip />

      <HomeAudienceStrip />
      <HomeServicePillars />
      <HomeVisualStrip />
      <HomeFeaturedServices />
      <HomeLocationsNav />

      <CtaStripModule />
      <ProjectShowcaseModule />
      <QaProcessModule />
      <AccreditationsStrip />

      <FaqSection
        headingId="home-faq-heading"
        title="Gauteng asset maintenance FAQs"
        subtitle="Answers for trustees, facility managers, and property owners researching Maverick Painting."
        items={homeFaqs}
        schemaPath="/"
      />
    </>
  );
}
