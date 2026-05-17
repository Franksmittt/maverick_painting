import {
  standaloneBlogArticles,
  type StandaloneBlogArticle,
} from "@/data/standalone-blog-articles";
import { siteConfig } from "@/lib/seo";

const baseUrl = siteConfig.url.replace(/\/$/, "");

export function getStandaloneArticle(slug: string): StandaloneBlogArticle | undefined {
  return standaloneBlogArticles.find((article) => article.slug === slug);
}

export function getStandaloneStaticParams() {
  return standaloneBlogArticles.map((article) => ({ pillar: article.slug }));
}

/** Default related services by pillar href for internal linking. */
export function getStandaloneRelatedServices(article: StandaloneBlogArticle) {
  if (article.relatedServices?.length) return article.relatedServices;

  const byPillar: Record<string, { href: string; label: string }[]> = {
    "/blog/structural-remediation": [
      { href: "/structural-repairs/concrete-spalling", label: "Concrete spalling repair" },
      { href: "/structural-repairs/crack-injection", label: "Crack injection" },
      { href: "/our-process-independent-qa", label: "Independent QA" },
    ],
    "/blog/waterproofing": [
      { href: "/waterproofing/leaking-balconies", label: "Leaking balcony repair" },
      { href: "/waterproofing/basement-tanking", label: "Basement tanking" },
      { href: "/waterproofing-services", label: "Waterproofing services" },
    ],
    "/blog/industrial": [
      { href: "/specialized-coatings/hygienic-food-grade", label: "HACCP flooring" },
      { href: "/painting/industrial", label: "Industrial painting" },
      { href: "/painting/road-marking", label: "SANS line marking" },
    ],
    "/access-solutions": [
      { href: "/access-solutions/rope-access-painting", label: "Rope access painting" },
      { href: "/painting/body-corporate", label: "Body corporate painting" },
      { href: "/our-process-independent-qa", label: "Independent QA" },
    ],
    "/solutions/for-body-corporates": [
      { href: "/solutions/for-body-corporates", label: "Body corporate solutions" },
      { href: "/painting/body-corporate", label: "Body corporate painting" },
      { href: "/waterproofing/leaking-balconies", label: "Leaking balconies" },
    ],
  };

  return (
    byPillar[article.pillarHref] ?? [
      { href: "/services", label: "All services" },
      { href: "/contact", label: "Request assessment" },
      { href: "/our-process-independent-qa", label: "Independent QA" },
    ]
  );
}

export function getStandaloneJsonLd(article: StandaloneBlogArticle) {
  const path = article.metadata.path ?? `/blog/${article.slug}`;
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metadata.description,
    url,
    inLanguage: "en-ZA",
    datePublished: "2025-01-15",
    dateModified: "2026-05-16",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
