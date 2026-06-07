import { BlogPillarLayout } from "@/components/blog/blog-pillar-layout";
import { Factory, Shield, Wrench } from "lucide-react";

const featured = [
  {
    title: "The Science of Stopping Rust: Choosing the Right Zinc Primer",
    description:
      "A technical guide to sacrificial and barrier protection systems for structural steel and exposed plant assets.",
    icon: Wrench,
    href: "/blog/industrial/zinc-primer-corrosion-control",
  },
  {
    title: "Minimizing Downtime: Fast-Curing Floors for Food Production",
    description:
      "How fast-curing polyurethane screeds minimize disruption and ensure HACCP compliance in processing plants.",
    icon: Factory,
    href: "/blog/industrial/fast-curing-floors",
  },
  {
    title: "OHS Compliance: Managing High-Access Liability on Industrial Sites",
    description:
      "A checklist for facility managers to ensure contractors meet all OHS requirements for work performed at height.",
    icon: Shield,
    href: "/blog/industrial/ohs-access-liability",
  },
];

export function IndustrialPillarPage() {
  return (
    <BlogPillarLayout
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "Industrial", href: "/blog/industrial" },
      ]}
      icon={Factory}
      title="Industrial asset protection insights."
      lead={
        <>
          Technical articles dedicated to <strong className="text-white">corrosion control, high-performance coatings</strong>,
          floor systems, and structural preservation for manufacturing assets across Gauteng.
        </>
      }
      articles={featured}
      triptych={[
        { src: "/images/painting-industrial-corrosion.jpg", alt: "Industrial corrosion control on plant exteriors" },
        { src: "/images/coatings-hygienic-food-grade-01.jpg", alt: "HACCP-compliant resin flooring in production" },
        { src: "/images/coatings-industrial-epoxy-completed-floor.jpg", alt: "Completed industrial epoxy floor system" },
      ]}
      triptychHeading="Industrial coating and flooring programmes"
    />
  );
}
