import { Breadcrumbs } from "@/components/breadcrumbs";
import { AboutHero } from "@/components/about/about-hero";
import { AboutDifferencePillars } from "@/components/about/about-difference-pillars";
import { AboutThesisSection } from "@/components/about/about-thesis-section";
import { AboutHubNav } from "@/components/about/about-hub-nav";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { QaProcessModule } from "@/components/qa-process-module";
import { FaqSection } from "@/components/faq-section";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { aboutFaqs, ABOUT_VISUAL_STRIP } from "@/data/about-page-content";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Owner Supervised Painting Contractors | 50+ Years Experience",
  description:
    "Established in 2004, Maverick Painting offers structural repair and specialized coatings, backed by Independent 3rd Party Quality Assurance on every high-value project.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "About us", href: "/about-us" }]} />

      <AboutHero />

      <section className="section-flow border-b border-[#2a2e33]" aria-label="Gauteng project photography">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Gauteng programmes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Assets we maintain across the Rand</h2>
          </header>
          <ServiceImageTriptych images={ABOUT_VISUAL_STRIP} />
        </div>
      </section>

      <AboutDifferencePillars />
      <AboutThesisSection />
      <AboutHubNav />
      <QaProcessModule />
      <AccreditationsStrip />

      <FaqSection
        headingId="about-faq-heading"
        title="About Maverick Painting"
        subtitle="Company background, QA, and how we differ from general painting contractors in Gauteng."
        items={aboutFaqs}
        schemaPath="/about-us"
      />

      <TrustAndCtaStrip />
    </div>
  );
}
