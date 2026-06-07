import { buildPageMetadata } from "@/lib/metadata";
import { BlogIndexContent } from "@/components/blog/blog-index-content";

export const metadata = buildPageMetadata({
  title: "Structural Repair, Waterproofing & Coating Guides",
  description:
    "Technical guides on concrete spalling, epoxy coatings, STSMA maintenance, rising damp, rope access, and body corporate asset protection in Gauteng.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return <BlogIndexContent />;
}
