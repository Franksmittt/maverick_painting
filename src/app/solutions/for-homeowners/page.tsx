import { CheckSquare, Clock, Shield, Users } from "lucide-react";
import { SolutionPageLayout } from "@/components/solution-page-layout";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Premium Home Painting & Structural Protection Gauteng | Maverick",
  description:
    "High-end residential painting with rising damp diagnostics, roof and balcony waterproofing, and manufacturer-backed finishes for Gauteng estates and townhouses—documented QA optional on larger scopes.",
  path: "/solutions/for-homeowners",
});

const faqs = [
  {
    question: "Is rising damp the same as a roof leak?",
    answer:
      "No. Rising damp moves through masonry via capillaries with salt tide marks; roof leaks are lateral or gravitational. We diagnose before recommending chemical DPC injection or membrane renewal.",
  },
  {
    question: "How long until we can repaint after damp treatment?",
    answer:
      "Masonry must equilibrate after injection and replastering. We publish drying curves and compatible primer windows—decoration before stabilisation voids most promises.",
  },
  {
    question: "Do you use low-VOC paints indoors?",
    answer:
      "Yes—ultra-low and zero-VOC systems with documented ventilation guidance for occupied homes and sensitive occupants.",
  },
] as const;

export default function HomeownerSolutionsPage() {
  return (
    <SolutionPageLayout
      path="/solutions/for-homeowners"
      breadcrumbLabel="Homeowners"
      h1="Protect your home from Gauteng weather—not just refresh the colour."
      lead="On the Highveld, UV, thermal cycling, and summer storms destroy generic paint and hardware-store waterproofing within seasons. Maverick diagnoses moisture and structural drivers first, then applies manufacturer-backed systems so your investment is protected—not cosmetically masked."
      valueProps={[
        {
          title: "Diagnostics before decoration",
          description:
            "Rising damp, condensation, and roof leaks are separated with moisture profiling so you do not pay for the wrong remedy.",
          icon: Shield,
          accentColor: "border-secondary",
        },
        {
          title: "Low-VOC interior work",
          description:
            "Dust-controlled prep and low-odour films for occupied homes, with written cure and ventilation guidance at handover.",
          icon: Clock,
          accentColor: "border-tertiary",
        },
        {
          title: "Documented quality",
          description:
            "Larger scopes can include independent QA and manufacturer warranty paths—execution to data sheet, not guesswork.",
          icon: CheckSquare,
          accentColor: "border-secondary",
        },
        {
          title: "Director oversight",
          description:
            "Premium residential projects receive hands-on site leadership—not anonymous subcontractor-only crews.",
          icon: Users,
          accentColor: "border-tertiary",
        },
      ]}
      narrative={{
        heading: "West Rand damp, estate façades, and roof reality",
        paragraphs: [
          "Homeowners in Roodepoort, Krugersdorp, and legacy suburbs often face capillary moisture and subsidence-related cracking—not problems solved by exterior paint alone. We coordinate damp proofing, tanking, and structural notes where needed before decorative programmes.",
          "Estate and townhouse complexes may still require HOA colour approval and security inductions. We supply mock-ups and phased access plans that respect community rules.",
          "Heat-reflective roof coatings and compatible waterproofing stacks extend service life when applied after sound substrate preparation—especially on top-floor units exposed to full Highveld sun.",
        ],
      }}
      serviceLinks={[
        {
          href: "/damp-proofing/rising-damp-treatment",
          label: "Rising damp treatment",
          blurb: "Chemical DPC injection and salt-retardant replastering after diagnosis.",
        },
        {
          href: "/painting/interior-painting",
          label: "Interior painting",
          blurb: "Dustless prep and premium finishes for occupied homes.",
        },
        {
          href: "/painting/roof-painting",
          label: "Roof painting",
          blurb: "Tile, IBR, and membrane-compatible protective roof systems.",
        },
        {
          href: "/waterproofing/leaking-balconies",
          label: "Leaking balconies",
          blurb: "Remediation for sectional-title and freehold balcony slabs.",
        },
      ]}
      faqs={faqs}
    />
  );
}
