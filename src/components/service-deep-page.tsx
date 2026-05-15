import Script from "next/script";
import { ServiceHubPage } from "@/components/service-hub/service-hub-page";
import { getServiceSpoke } from "@/data/service-deep-registry";
import { spokeToHubConfig } from "@/lib/spoke-to-hub-config";
import { siteConfig } from "@/lib/seo";
import type { ServiceDeepPageContent, ServiceSpokeId } from "@/lib/service-deep-types";

function FaqJsonLd({ faqs, path }: { faqs: ServiceDeepPageContent["faqs"]; path: string }) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
    url,
  };
  return (
    <Script id={`faq-jsonld-${path.replace(/\//g, "-")}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}

/** Renders a spoke service page using the same hub template as /structural-repairs. */
export function ServiceDeepPage({ spokeId }: { spokeId: ServiceSpokeId }) {
  const content = getServiceSpoke(spokeId);
  const config = spokeToHubConfig(spokeId, content);

  return (
    <>
      <FaqJsonLd faqs={content.faqs} path={content.meta.path} />
      <ServiceHubPage config={config} />
    </>
  );
}
