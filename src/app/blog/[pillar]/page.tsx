import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { withOgImage } from "@/lib/page-metadata";
import { getOgImageForPath } from "@/lib/og-images";
import { StandaloneBlogArticleView } from "@/components/blog/standalone-blog-article";
import {
  getPillarBySlug,
  getPillarStaticParams,
  getPillarJsonLd,
} from "@/lib/pillars";
import {
  getStandaloneArticle,
  getStandaloneJsonLd,
  getStandaloneStaticParams,
} from "@/lib/standalone-blog";

type PillarPageProps = {
  params: Promise<{ pillar: string }>;
};

export function generateStaticParams() {
  return [...getPillarStaticParams(), ...getStandaloneStaticParams()];
}

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const { pillar: pillarSlug } = await params;
  const standalone = getStandaloneArticle(pillarSlug);
  if (standalone) {
    const path = standalone.metadata.path ?? `/blog/${standalone.slug}`;
    return withOgImage({
      ...standalone.metadata,
      path,
      image: getOgImageForPath(path),
      ogType: "article",
    });
  }
  const pillar = getPillarBySlug(pillarSlug);
  if (!pillar) {
    return {};
  }
  return withOgImage({ ...pillar.metadata, image: getOgImageForPath(pillar.metadata.path ?? `/blog/${pillar.slug}`) });
}

export default async function PillarPage({ params }: PillarPageProps) {
  const { pillar: pillarSlug } = await params;
  const standalone = getStandaloneArticle(pillarSlug);
  if (standalone) {
    const jsonLd = getStandaloneJsonLd(standalone);
    return (
      <>
        {jsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
        ) : null}
        <StandaloneBlogArticleView article={standalone} />
      </>
    );
  }

  const pillar = getPillarBySlug(pillarSlug);
  if (!pillar) {
    notFound();
  }

  const PillarComponent = pillar.component;

  const jsonLd = getPillarJsonLd(pillar.slug);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      ) : null}
      <PillarComponent />
    </>
  );
}

