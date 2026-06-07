import { SERVICE_OVERVIEW_TAGS } from "@/data/service-spoke-links";

export const SERVICES_ADDITIONAL_HUBS = [
  {
    title: "Damp proofing & rising damp",
    description:
      "Chemical DPC injection, salt-resistant replastering, and moisture diagnostics before decorative finishes.",
    href: "/damp-proofing-services",
    image: "/images/damp-rising-damp-diagnosis.jpg",
    tags: [
      { label: "Rising damp treatment", href: "/damp-proofing/rising-damp-treatment" },
      ...SERVICE_OVERVIEW_TAGS.structural.filter((t) => t.href.includes("damp")),
    ],
  },
  {
    title: "Access solutions",
    description:
      "IRATA rope access, scaffold coordination, and hybrid programmes for high-rise façades and towers.",
    href: "/access-solutions",
    image: "/images/access-solutions-method.jpg",
    tags: [
      { label: "Rope access painting", href: "/access-solutions/rope-access-painting" },
      { label: "Body corporate façades", href: "/painting/body-corporate" },
    ],
  },
] as const;

export const SERVICES_VISUAL_STRIP = [
  {
    src: "/images/structural-crack-injection-qa.jpg",
    alt: "Structural crack injection QA documentation on a Gauteng commercial asset",
  },
  {
    src: "/images/coatings-hygienic-food-grade-01.jpg",
    alt: "Hygienic resin flooring installation in a food-grade facility",
  },
  {
    src: "/images/waterproofing-flat-roof-01.jpg",
    alt: "Flat roof waterproofing programme on a Gauteng commercial building",
  },
] as const;
