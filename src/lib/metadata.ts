import type { Metadata } from "next";

import { siteConfig } from "@/lib/seo";

export type BuildMetadataParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  /** Open Graph type, use `article` for blog posts. */
  ogType?: "website" | "article";
};

const baseUrl = siteConfig.url.replace(/\/$/, "");

const toAbsoluteUrl = (value?: string) => {
  if (!value) {
    return `${baseUrl}${siteConfig.defaultOgImage}`;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${baseUrl}${value.startsWith("/") ? value : `/${value}`}`;
};

const BRAND_SUFFIXES = [
  /\s*\|\s*Maverick Painting Contractors\s*$/i,
  /\s*\|\s*Maverick Painting\s*$/i,
  /\s*\|\s*Maverick\s*$/i,
] as const;

/** Strip redundant brand suffix so layout title.template appends it once. */
export function normalizePageTitle(title: string): string {
  let normalized = title.trim();
  for (const pattern of BRAND_SUFFIXES) {
    normalized = normalized.replace(pattern, "").trim();
  }
  return normalized;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
  ogType = "website",
}: BuildMetadataParams): Metadata {
  // Ensure canonical URLs have no trailing slash (matching next.config.mjs trailingSlash: false)
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonical = `${baseUrl}${normalizedPath}`;
  const ogImage = toAbsoluteUrl(image);
  const pageTitle = normalizePageTitle(title);
  const fullTitle = `${pageTitle} | ${siteConfig.shortName}`;

  return {
    title: pageTitle,
    description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_ZA",
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 628,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      site: siteConfig.twitterHandle,
      images: [ogImage],
    },
  };
}

