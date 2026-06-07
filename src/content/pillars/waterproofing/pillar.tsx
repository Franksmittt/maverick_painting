import Link from "next/link";
import { BlogPillarLayout } from "@/components/blog/blog-pillar-layout";
import { Shield, Droplet, Layers } from "lucide-react";

const featuredArticles = [
  {
    title: "Liquid Applied Membranes vs. Torch-On: Which System is Right for Your Roof?",
    description:
      "A technical comparison of durability, installation complexity, and warranty implications for flat concrete roofs.",
    icon: Droplet,
    href: "/blog/waterproofing/liquid-vs-torch-on",
  },
  {
    title: "The Ultimate Guide to Eliminating Rising Damp Permanently",
    description:
      "Detailing the chemical DPC injection process and the necessary subsequent plastering and finishing work.",
    icon: Layers,
    href: "/blog/waterproofing/rising-damp-guide",
  },
  {
    title: "Why Your Under-Tile Balcony Keeps Leaking (and how to fix it)",
    description:
      "Diagnosing failed joint sealants and applying low-disruption remediation methods to save your tiles.",
    icon: Shield,
    href: "/blog/waterproofing/leaking-balcony-fixes",
  },
];

export function WaterproofingPillarPage() {
  return (
    <BlogPillarLayout
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "Waterproofing", href: "/blog/waterproofing" },
      ]}
      icon={Layers}
      title="Waterproofing & structural protection guides."
      lead={
        <>
          In-depth articles from our specialists on <strong className="text-white">solving structural water ingress</strong>,
          chemical damp proofing, and selecting certified membrane systems.
        </>
      }
      articles={featuredArticles}
      triptych={[
        { src: "/images/waterproofing-flat-roof-02.jpg", alt: "Flat roof membrane installation in Gauteng" },
        { src: "/images/waterproofing-leaking-balcony-01.jpg", alt: "Balcony waterproofing remediation" },
        { src: "/images/waterproofing-leaking-balcony-02.jpg", alt: "Podium and balcony membrane renewal" },
      ]}
      triptychHeading="Waterproofing programmes across Gauteng assets"
    />
  );
}
