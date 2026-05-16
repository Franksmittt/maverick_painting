import type { MetadataRoute } from "next";
import { siteConfig, defaultChangeFrequency } from "@/lib/seo";
import { projectCaseStudies } from "@/data/projects";
import { getPillars } from "@/lib/pillars";
import { serviceLocations } from "@/data/locations";
import { locationRegionHubs } from "@/data/location-regions";
import { standaloneBlogArticles } from "@/data/standalone-blog-articles";

// GSC Optimization: Set max duration for sitemap generation to prevent Googlebot timeouts
export const maxDuration = 30;

const baseUrl = siteConfig.url.replace(/\/$/, "");

const normalizePath = (path: string) =>
  path === "/" ? baseUrl : `${baseUrl}${path}`;

const getPrimaryEntries = (now: Date): MetadataRoute.Sitemap =>
  siteConfig.primaryPages.map((path) => ({
    url: normalizePath(path),
    changeFrequency: defaultChangeFrequency,
    priority: path === "/" ? 1 : 0.7,
    lastModified: now,
  }));

const getProjectEntries = async (now: Date): Promise<MetadataRoute.Sitemap> =>
  projectCaseStudies.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: project.lastModified ? new Date(project.lastModified) : now,
  }));

const getPillarEntries = (now: Date): MetadataRoute.Sitemap => {
  const pillars = getPillars();

  return pillars.flatMap((pillar) => [
    {
      url: normalizePath(pillar.metadata.path ?? `/blog/${pillar.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.75,
      lastModified: now,
    },
    ...pillar.clusters.map((cluster) => ({
      url: normalizePath(cluster.metadata.path ?? `/blog/${pillar.slug}/${cluster.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.65,
      lastModified: now,
    })),
  ]);
};

// <--- NEW FUNCTION FOR LOCATION PAGES
const getLocationEntries = (now: Date): MetadataRoute.Sitemap => [
  ...locationRegionHubs.map((region) => ({
    url: `${baseUrl}/locations/${region.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.88,
    lastModified: now,
  })),
  ...serviceLocations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
    lastModified: now,
  })),
];

const getStandaloneBlogEntries = (now: Date): MetadataRoute.Sitemap =>
  standaloneBlogArticles.map((article) => ({
    url: normalizePath(article.metadata.path ?? `/blog/${article.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.7,
    lastModified: now,
  }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [projectEntries] = await Promise.all([getProjectEntries(now)]);

  const merged = [
    ...getPrimaryEntries(now),
    ...getLocationEntries(now),
    ...getPillarEntries(now),
    ...getStandaloneBlogEntries(now),
    ...projectEntries,
  ];

  const seen = new Set<string>();
  return merged.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}