/**
 * Validates sitemap paths against Next.js prerender manifest.
 * Run: npm run build && npx tsx scripts/validate-sitemap.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  buildSitemapEntries,
  getAllSitemapPathEntries,
  getSitemapBaseUrl,
  EXPECTED_SITEMAP_URL_COUNT,
} from "../src/lib/sitemap-builder";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const prerenderPath = path.join(root, ".next", "prerender-manifest.json");

function formatLastMod(value: string | Date | undefined): string {
  if (value == null) return new Date().toISOString();
  if (value instanceof Date) return value.toISOString();
  return new Date(value).toISOString();
}

function main() {
  const entries = getAllSitemapPathEntries();
  const sitemap = buildSitemapEntries();
  const baseUrl = getSitemapBaseUrl();

  console.log(`Base URL: ${baseUrl}`);
  console.log(`Sitemap URLs: ${entries.length}`);
  console.log(`Expected (approx): ${EXPECTED_SITEMAP_URL_COUNT}`);

  // URL format checks
  const errors: string[] = [];
  const urls = new Set<string>();

  for (const item of sitemap) {
    if (!item.url.startsWith("https://")) {
      errors.push(`Non-HTTPS URL: ${item.url}`);
    }
    if (item.url.endsWith("/") && item.url !== `${baseUrl}/`) {
      errors.push(`Trailing slash: ${item.url}`);
    }
    if (item.url.includes("?") || item.url.includes("#")) {
      errors.push(`Query/hash in URL: ${item.url}`);
    }
    if (urls.has(item.url)) {
      errors.push(`Duplicate URL: ${item.url}`);
    }
    urls.add(item.url);

    if (item.priority !== undefined && (item.priority < 0 || item.priority > 1)) {
      errors.push(`Invalid priority ${item.priority} for ${item.url}`);
    }
  }

  if (errors.length) {
    console.error("\nSitemap validation FAILED:\n", errors.join("\n"));
    process.exit(1);
  }

  if (!fs.existsSync(prerenderPath)) {
    console.warn("\nWarn: prerender-manifest.json missing, run npm run build first.");
  } else {
    const prerender = JSON.parse(fs.readFileSync(prerenderPath, "utf8")) as {
      routes: Record<string, unknown>;
    };
    const SYSTEM_ROUTES = new Set([
      "/_not-found",
      "/_global-error",
      "/favicon.ico",
      "/robots.txt",
      "/sitemap.xml",
    ]);

    const builtRoutes = Object.keys(prerender.routes).filter(
      (r) =>
        !r.startsWith("/api/") &&
        !r.includes("[") &&
        !r.includes("opengraph-image") &&
        !SYSTEM_ROUTES.has(r)
    );

    const sitemapPaths = new Set(entries.map((e) => e.path));
    const missingFromSitemap = builtRoutes.filter((r) => !sitemapPaths.has(r));
    const extraInSitemap = [...sitemapPaths].filter((r) => !builtRoutes.includes(r));

    if (missingFromSitemap.length) {
      console.warn("\nBuilt routes NOT in sitemap:", missingFromSitemap);
    }
    if (extraInSitemap.length) {
      console.warn("\nSitemap paths NOT in build (404 risk):", extraInSitemap);
      errors.push(...extraInSitemap.map((p) => `404 risk: ${p}`));
    }
  }

  const critical = [
    "/",
    "/blog",
    "/blog/stsma-10-year-maintenance-plan-guide",
    "/locations/east-rand",
    "/locations/sandton",
    "/structural-repairs/concrete-spalling",
    "/solutions/for-body-corporates",
  ];
  for (const p of critical) {
    if (!entries.some((e) => e.path === p)) {
      errors.push(`Missing critical path: ${p}`);
    }
  }

  if (errors.length) {
    console.error("\nFinal validation FAILED:\n", errors.join("\n"));
    process.exit(1);
  }

  // Write human-readable report for GSC
  const reportPath = path.join(root, "sitemap-urls.txt");
  const lines = [
    `# Maverick Painting Sitemap, ${new Date().toISOString().slice(0, 10)}`,
    `# Submit this index URL in Google Search Console:`,
    `# ${baseUrl}/sitemap.xml`,
    `# Total URLs: ${entries.length}`,
    "",
    ...entries.map((e) => `${baseUrl}${e.path === "/" ? "" : e.path}`),
  ];
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8");

  // Export XML for GSC review (not in public/, would override app/sitemap.ts)
  const xmlPath = path.join(root, "sitemap-export.xml");
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemap.map((item) => {
      const lastmod = formatLastMod(item.lastModified);
      return [
        "  <url>",
        `    <loc>${escapeXml(item.url)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${item.changeFrequency ?? "monthly"}</changefreq>`,
        `    <priority>${(item.priority ?? 0.5).toFixed(2)}</priority>`,
        "  </url>",
      ].join("\n");
    }),
    "</urlset>",
  ].join("\n");
  fs.writeFileSync(xmlPath, xml, "utf8");

  console.log(`\n✓ Sitemap validation passed (${entries.length} URLs).`);
  console.log(`✓ URL list: sitemap-urls.txt`);
  console.log(`✓ XML export: sitemap-export.xml (for review; live sitemap is /sitemap.xml)`);
  console.log(`\nGoogle Search Console → Sitemaps → submit:`);
  console.log(`  ${baseUrl}/sitemap.xml`);
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

main();
