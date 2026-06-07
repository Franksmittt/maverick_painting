import { ClipboardCheck, MessageCircle, Scroll, Shield } from "lucide-react";
import { SolutionPageLayout } from "@/components/solution-page-layout";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Body Corporate & Sectional Title Asset Maintenance | STSMA-Aligned | Maverick",
  description:
    "STSMA and CSOS-aware maintenance for Gauteng body corporates: 10-year MRRP support, independent QA, waterproofing, spalling repair, and phased painting with manufacturer-backed guarantees.",
  path: "/solutions/for-body-corporates",
});

const faqs = [
  {
    question: "What is a 10-year maintenance plan under the STSMA?",
    answer:
      "Prescribed Management Rule 22 requires a written Maintenance, Repair and Replacement Plan (MRRP) covering major capital items over ten years, funded from the reserve fund. Maverick supplies condition data and scoped quotations to support plan updates, we do not draft legal PMR documents.",
  },
  {
    question: "Who pays for a leaking balcony, the owner or the body corporate?",
    answer:
      "It depends on scheme rules, exclusive-use allocations, and where the failure occurs. Maverick documents technical cause so managing agents and attorneys can route decisions, we do not adjudicate law.",
  },
  {
    question: "How does independent QA protect trustees?",
    answer:
      "Third-party verification of preparation, film build, and adherence to specifications creates an auditable file for AGMs, insurers, and CSOS disputes, reducing allegations of self-monitored contractor bias.",
  },
  {
    question: "Can Maverick help update our 10-year maintenance plan?",
    answer:
      "We supply condition surveys, photographic logs, and scoped quotations trustees can map to MRRP line items. Legal drafting of PMR documents remains with your managing agent or attorney.",
  },
  {
    question: "Do you handle waterproofing and painting in one programme?",
    answer:
      "Yes. Podium, balcony, and façade scopes often combine membrane renewal, spalling repair, and final coatings under one project manager with shared QA reporting.",
  },
] as const;

export default function BodyCorporateSolutionsPage() {
  return (
    <SolutionPageLayout
      solutionKey="body-corporates"
      path="/solutions/for-body-corporates"
      breadcrumbLabel="Body corporates"
      h1="Sectional title maintenance trustees can defend at the AGM."
      lead="Trustees are not buying paint, they are managing fiduciary risk under the STSMA. Maverick helps execute Maintenance, Repair and Replacement Plan (MRRP) items with engineer-aligned structural work, manufacturer-backed waterproofing, phased exterior programmes, and independent third-party QA your managing agent can file."
      valueProps={[
        {
          title: "STSMA & MRRP alignment",
          description:
            "Condition surveys, photographic logs, and phased scopes that map to reserve fund planning, supporting PMR 22 without surprise special levies after the first storms.",
          icon: Scroll,
          accent: "secondary" as const,
        },
        {
          title: "Independent QA",
          description:
            "Bi-weekly third-party reporting on preparation, film build, and manufacturer compliance, so trustees are not relying on the contractor marking their own homework.",
          icon: ClipboardCheck,
          accent: "tertiary" as const,
        },
        {
          title: "Structural & waterproofing first",
          description:
            "Spalling arrises, leaking balconies, and flat roofs are sequenced before decorative coats so the repaint is not funding repeat failures within two seasons.",
          icon: Shield,
          accent: "secondary" as const,
        },
        {
          title: "Low-disruption access",
          description:
            "Rope access, phased elevations, and resident communication plans reduce scaffold footprints and estate security friction on Sandton, Alberton, and South Rand complexes.",
          icon: MessageCircle,
          accent: "tertiary" as const,
        },
      ]}
      narrative={{
        heading: "Common property, exclusive use, and insurance reality",
        paragraphs: [
          "The body corporate maintains common property, including exterior walls, roofs, and shared structures, while exclusive-use areas can shift responsibility for balconies and finishes. Maverick scopes work with clear technical boundaries documented for insurers and CSOS, not vague promises.",
          "Insurers frequently reject claims citing gradual deterioration or lack of maintenance. Manufacturer-backed systems plus independent QA create evidence of reasonable care, context only; we do not provide legal or insurance advice.",
          "South Rand and Highveld assets face intense UV, thermal cycling, and summer storm damage. Coating and membrane choices must match exposure on north and west elevations, not a single spec recycled from another complex.",
        ],
      }}
      serviceLinks={[
        {
          href: "/painting/body-corporate",
          label: "Body corporate painting",
          blurb: "Phased exterior programmes, rope access, and QA packs for sectional-title towers and estates.",
        },
        {
          href: "/waterproofing/leaking-balconies",
          label: "Leaking balcony remediation",
          blurb: "Trustee-ready reports, low-disruption options, and coordination with structural arris repairs.",
        },
        {
          href: "/structural-repairs/concrete-spalling",
          label: "Concrete spalling repair",
          blurb: "Engineer-aligned concrete cancer remediation before waterproofing and topcoats.",
        },
        {
          href: "/our-process-independent-qa",
          label: "Independent QA process",
          blurb: "How third-party inspection de-risks multi-million rand common property spend.",
        },
      ]}
      faqs={faqs}
      legalDisclaimer="stsma"
    />
  );
}
