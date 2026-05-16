import {
  standaloneBlogArticles,
  type StandaloneBlogArticle,
} from "@/data/standalone-blog-articles";

export function getStandaloneArticle(slug: string): StandaloneBlogArticle | undefined {
  return standaloneBlogArticles.find((article) => article.slug === slug);
}

export function getStandaloneStaticParams() {
  return standaloneBlogArticles.map((article) => ({ pillar: article.slug }));
}

export function getStandaloneJsonLd(article: StandaloneBlogArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metadata.description,
    url: article.metadata.path,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Blog", item: "/blog" },
        { "@type": "ListItem", position: 2, name: article.title, item: article.metadata.path },
      ],
    },
  };
}
