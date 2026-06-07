import { Building, ClipboardCheck, Scroll, Wrench } from "lucide-react";
import { SolutionPageLayout } from "@/components/solution-page-layout";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Developer Handover & New Build Coatings | SANS-Aligned QA | Maverick",
  description:
    "Practical completion support for developers and QS teams: structural remediation, waterproofing, coatings to manufacturer data sheets, and independent QA documentation for defect-free handovers.",
  path: "/solutions/for-developers",
});

const faqs = [
  {
    question: "How does independent QA help at practical completion?",
    answer:
      "Timestamped records of substrate preparation, environmental readings, and film build give developers defensible evidence during defects liability periods, reducing disputes with body corporates and incoming facility managers.",
  },
  {
    question: "Do you work to SANS 10400-related coating requirements?",
    answer:
      "We implement engineer and manufacturer specifications aligned with national building regulations pathways for structural and fire-related interfaces, execution documentation is our deliverable; engineering sign-off remains with the appointed professional.",
  },
  {
    question: "Can you fix snags before final coat?",
    answer:
      "Yes, spalling, crack injection, balcony waterproofing, and joint rehabilitation can be sequenced in one programme before architectural and protective topcoats close the envelope.",
  },
  {
    question: "Do you coordinate with the project QS and engineer?",
    answer:
      "Yes. We work from issued specifications, submit method statements, and align inspection hold points with the professional team before closing concealed layers.",
  },
  {
    question: "Which manufacturer systems do you install at handover?",
    answer:
      "We apply specified waterproofing, structural repair, and coating systems from approved manufacturers with batch records and film-build logs suitable for defects liability files.",
  },
  {
    question: "How do you manage weather risk on new-build envelopes?",
    answer:
      "Programmes include substrate protection, cure windows, and contingency sequencing so partially completed areas are not left vulnerable through Highveld storm seasons.",
  },
] as const;

export default function DeveloperSolutionsPage() {
  return (
    <SolutionPageLayout
      path="/solutions/for-developers"
      breadcrumbLabel="Developers"
      h1="Handover-ready assets with QA files your QS can audit."
      lead="Developers need coatings and waterproofing that survive defects liability, not cosmetic close-out paint. Maverick delivers manufacturer-aligned application, structural remediation where required, and independent third-party QA so practical completion packs include measurable evidence, not verbal assurances from site."
      valueProps={[
        {
          title: "Manufacturer-aligned execution",
          description:
            "Mix ratios, recoat windows, and film build logged to data sheets so product warranties remain valid after handover to body corporates.",
          icon: Scroll,
          accentColor: "border-secondary",
        },
        {
          title: "Independent QA reporting",
          description:
            "Fortnightly third-party inspection reduces contractor bias and gives quantity surveyors auditable quality records for retention and snag closure.",
          icon: ClipboardCheck,
          accentColor: "border-tertiary",
        },
        {
          title: "Structural envelope integrity",
          description:
            "Spalling, injection, expansion joints, and tanking sequenced before final aesthetics so latent defects are not buried under topcoat.",
          icon: Wrench,
          accentColor: "border-secondary",
        },
        {
          title: "High-volume programmes",
          description:
            "HEA airless and phased mobilisation for multi-block residential and commercial shells across Gauteng logistics and estate nodes.",
          icon: Building,
          accentColor: "border-tertiary",
        },
      ]}
      narrative={{
        heading: "Mitigating latent defects after handover",
        paragraphs: [
          "Water ingress, spalling at podium levels, and failed balcony detailing are among the costliest post-handover disputes. Maverick sequences waterproofing, structural repair, and coatings under one accountable programme with hold points specifiers can witness.",
          "Independent QA captures moisture readings, batch references, and repair maps, documentation that supports SANS 10400 compliance narratives and smoother transitions to sectional-title schemes.",
          "We mobilise across Midrand, Centurion, East Rand logistics corridors, and West Rand nodes where mining legacy hydrology demands engineered tanking, not generic damp paint.",
        ],
      }}
      serviceLinks={[
        {
          href: "/waterproofing/basement-tanking",
          label: "Basement tanking",
          blurb: "Negative- and positive-side systems for hydrostatic pressure on below-grade assets.",
        },
        {
          href: "/structural-repairs",
          label: "Structural repairs",
          blurb: "Spalling, crack injection, and joint sealing before handover coatings.",
        },
        {
          href: "/painting/high-volume-commercial-painting",
          label: "High-volume commercial painting",
          blurb: "HEA airless programmes for large residential and commercial shells.",
        },
        {
          href: "/our-process-independent-qa",
          label: "Independent QA",
          blurb: "Our third-party inspection workflow for developer and BC handover.",
        },
      ]}
      faqs={faqs}
    />
  );
}
