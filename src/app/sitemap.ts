import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/sitemap-builder";

// GSC: allow up to 30s for sitemap generation on large catalogs
export const maxDuration = 30;

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries(new Date());
}
