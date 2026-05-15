# Maverick service pages, execution checklist

Source docs: `SEO Strategy for Contractor Service Pages.txt`, `Contractor Website Strategy & Implementation.txt`, `Contractor Website Audit & Strategy.txt`.

## Phase A, IA & deep spoke pages (one URL per core service)

- [x] Add reusable `ServiceDeepPage` layout (hero, long-form sections, case angles, FAQs, JSON-LD Service + FAQPage, internal links).
- [x] `/structural-repairs/concrete-spalling`
- [x] `/structural-repairs/crack-injection`
- [x] `/structural-repairs/expansion-joint-sealing`
- [x] `/damp-proofing/rising-damp-treatment`
- [x] `/specialized-coatings/industrial-epoxy-flooring`
- [x] `/specialized-coatings/hygienic-food-grade`
- [x] `/specialized-coatings/marmoran-wall-systems`
- [x] `/waterproofing/flat-concrete-roofs`
- [x] `/waterproofing/leaking-balconies`
- [x] `/waterproofing/basement-tanking`
- [x] `/painting/body-corporate`
- [x] `/painting/industrial`
- [x] `/access-solutions/rope-access-painting`

## Phase B, Hub pages (pillar depth + spokes)

- [x] Link hubs to all child spokes; add long-form intro + methodology copy on hubs where feasible.
- [ ] Client follow-up: replace placeholder metrics (“years on site”, “m² completed”) with verified numbers when available.

## Phase C, Routing, discovery, CRO

- [x] `next.config.mjs` redirects from legacy URLs to canonical spokes where applicable.
- [x] `siteConfig.primaryPages` + homepage/service grid links.
- [x] Sitemap picks up new URLs via `primaryPages`.

## Phase D, Still recommended (from research; not all automatable)

- [ ] WhatsApp floating CTA + GA4 events (`click_to_call`, `generate_lead`, etc.).
- [ ] GBP review velocity + estate case studies (unique narratives per estate).
- [ ] Trust page PDFs: COIDA, PL, PI, CIDB, B-BBEE (redacted), only after client supplies.

## Phase E, Other painting verticals (existing routes)

These already have routes under `/painting/*` (commercial, roof, stucco, etc.). Expand copy using the same `ServiceDeepPage` pattern when prioritized.

---

**Last updated:** execution pass completed in-repo (Next.js build green).

### Notes from implementation

- **Canonical URLs (research-aligned):** 13 deep spokes listed in Phase A.
- **301 redirects** in `next.config.mjs`:  
  `/painting/body-corporate-painting` → `/painting/body-corporate`  
  `/painting/industrial-painting` → `/painting/industrial`  
  `/coatings/hygienic-food-grade-flooring` → `/specialized-coatings/hygienic-food-grade`
- **Removed thin duplicate routes:** old `page.tsx` files for the three redirected paths were deleted to avoid maintaining parallel content.
