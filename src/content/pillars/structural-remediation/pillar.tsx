import Link from "next/link";
import { BlogPillarLayout } from "@/components/blog/blog-pillar-layout";
import { Layers, ShieldCheck, Wrench } from "lucide-react";

const featuredArticles = [
  {
    title: "Concrete Spalling Repair: A Step-by-Step Engineering Guide",
    description:
      "Defect diagnostics, rebar passivation, structural mortars, and protective anti-carbonation finishes for Gauteng assets.",
    icon: ShieldCheck,
    href: "/blog/structural-remediation/concrete-spalling-repair",
  },
  {
    title: "Why Paint Peels After Waterproofing (and how to fix it properly)",
    description:
      "Moisture movement, salt contamination, and compatible coating stacks after structural and damp remediation.",
    icon: Wrench,
    href: "/blog/structural-remediation/peeling-paint-repair",
  },
  {
    title: "Structural repair services",
    description:
      "Full Maverick methodology for spalling, crack injection, and expansion joint sealing with independent QA.",
    icon: Layers,
    href: "/structural-repairs",
  },
];

export function StructuralRemediationPillarPage() {
  return (
    <BlogPillarLayout
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "Structural remediation", href: "/blog/structural-remediation" },
      ]}
      icon={Layers}
      title="Permanent repairs for concrete spalling & structural defects."
      lead={
        <>
          Engineering-led playbooks covering defect diagnostics, rebar passivation, polymer-modified mortars,
          and the protective coatings that lock in the repair. Designed for trustees, developers, and consulting
          engineers.{" "}
          <Link href="/structural-repairs" className="text-secondary hover:underline">
            View structural repair services →
          </Link>
        </>
      }
      articles={featuredArticles}
      triptych={[
        { src: "/images/structural-concrete-spalling-assessment.jpg", alt: "Concrete spalling assessment on a Gauteng façade" },
        { src: "/images/structural-concrete-spalling-repair.jpg", alt: "Structural mortar repair during spalling remediation" },
        { src: "/images/structural-concrete-spalling-handover.jpg", alt: "Completed spalling repair with protective finish" },
      ]}
      triptychHeading="Structural remediation programmes in Gauteng"
    />
  );
}
