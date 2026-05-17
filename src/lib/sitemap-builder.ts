import type { MetadataRoute } from "next";
import { projectCaseStudies } from "@/data/projects";
import { serviceLocations } from "@/data/locations";
import { locationRegionHubs } from "@/data/location-regions";
import { locationServiceMatrix } from "@/data/location-service-matrix";
import { standaloneBlogArticles } from "@/data/standalone-blog-articles";
import { SERVICE_DEEP_REGISTRY } from "@/data/service-deep-registry";
import { serviceHubPages } from "@/data/service-hub-pages";
import { getPillars } from "@/lib/pillars";
import { siteConfig } from "@/lib/seo";

export type SitemapPathEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
};

/** Paths that must never appear in the sitemap (non-indexable). */
const EXCLUDED_PATH_PREFIXES = ["/api/", "/_next/"] as const;

const CORE_PAGES: SitemapPathEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.75 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.65 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.7 },
  { path: "/accreditations", changeFrequency: "monthly", priority: 0.7 },
  { path: "/locations", changeFrequency: "weekly", priority: 0.87 },
  { path: "/our-process-independent-qa", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

const SOLUTION_PAGES: SitemapPathEntry[] = [
  { path: "/solutions/for-body-corporates", changeFrequency: "monthly", priority: 0.88 },
  { path: "/solutions/for-developers", changeFrequency: "monthly", priority: 0.88 },
  { path: "/solutions/for-homeowners", changeFrequency: "monthly", priority: 0.85 },
];

function normalizePath(path: string): string {
  if (!path.startsWith("/")) {
    return `/${path}`.replace(/\/+/g, "/").replace(/\/$/, "") || "/";
  }
  const trimmed = path.replace(/\/+/g, "/");
  if (trimmed === "/") return "/";
  return trimmed.replace(/\/$/, "");
}

function isValidIndexablePath(path: string): boolean {
  if (!path.startsWith("/")) return false;
  if (path.includes("?") || path.includes("#")) return false;
  if (path.includes("[") || path.includes("]")) return false;
  return !EXCLUDED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function getHubEntries(): SitemapPathEntry[] {
  return Object.keys(serviceHubPages).map((path) => ({
    path: normalizePath(path),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
}

function getSpokeEntries(): SitemapPathEntry[] {
  return Object.values(SERVICE_DEEP_REGISTRY).map((spoke) => ({
    path: normalizePath(spoke.meta.path),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

function getBlogEntries(): SitemapPathEntry[] {
  const entries: SitemapPathEntry[] = [
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  ];

  for (const pillar of getPillars()) {
    entries.push({
      path: normalizePath(pillar.metadata.path ?? `/blog/${pillar.slug}`),
      changeFrequency: "weekly",
      priority: 0.75,
    });
    for (const cluster of pillar.clusters) {
      entries.push({
        path: normalizePath(cluster.metadata.path ?? `/blog/${pillar.slug}/${cluster.slug}`),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  for (const article of standaloneBlogArticles) {
    entries.push({
      path: normalizePath(article.metadata.path ?? `/blog/${article.slug}`),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}

function getLocationEntries(): SitemapPathEntry[] {
  const regions: SitemapPathEntry[] = locationRegionHubs.map((region) => ({
    path: `/locations/${region.slug}`,
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  const cities: SitemapPathEntry[] = serviceLocations.map((loc) => ({
    path: `/locations/${loc.slug}`,
    changeFrequency: "weekly",
    priority: 0.86,
  }));

  const matrix: SitemapPathEntry[] = locationServiceMatrix.map((entry) => ({
    path: `/locations/${entry.citySlug}/${entry.serviceSlug}`,
    changeFrequency: "weekly" as const,
    priority: 0.84,
  }));

  return [...regions, ...cities, ...matrix];
}

function getProjectEntries(now: Date): SitemapPathEntry[] {
  return projectCaseStudies.map((project) => ({
    path: `/projects/${project.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
    lastModified: project.lastModified ? new Date(project.lastModified) : now,
  }));
}

/**
 * Single source of truth for every indexable URL on the site.
 * Used by app/sitemap.ts and scripts/validate-sitemap.mjs.
 */
export function getAllSitemapPathEntries(now = new Date()): SitemapPathEntry[] {
  const merged = [
    ...CORE_PAGES,
    ...SOLUTION_PAGES,
    ...getHubEntries(),
    ...getSpokeEntries(),
    ...getBlogEntries(),
    ...getLocationEntries(),
    ...getProjectEntries(now),
  ];

  const seen = new Set<string>();
  const valid: SitemapPathEntry[] = [];

  for (const entry of merged) {
    const path = normalizePath(entry.path);
    if (!isValidIndexablePath(path)) continue;
    if (seen.has(path)) continue;
    seen.add(path);
    valid.push({ ...entry, path });
  }

  return valid.sort((a, b) => a.path.localeCompare(b.path));
}

export function getSitemapBaseUrl(): string {
  return siteConfig.url.replace(/\/$/, "");
}

export function pathToAbsoluteUrl(path: string, baseUrl = getSitemapBaseUrl()): string {
  const normalized = normalizePath(path);
  return normalized === "/" ? baseUrl : `${baseUrl}${normalized}`;
}

export function buildSitemapEntries(now = new Date()): MetadataRoute.Sitemap {
  return getAllSitemapPathEntries(now).map((entry) => ({
    url: pathToAbsoluteUrl(entry.path),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
    lastModified: entry.lastModified ?? now,
  }));
}

/** Expected indexable page count for CI validation (update if routes change). */
export const EXPECTED_SITEMAP_URL_COUNT = 132;
