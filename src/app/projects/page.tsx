import { buildPageMetadata } from "@/lib/metadata";
import { ProjectsPageContent } from "@/components/projects/projects-page-content";

export const metadata = buildPageMetadata({
  title: "Gauteng Painting & Structural Repair Project Portfolio | Maverick",
  description:
    "View our portfolio of high-value commercial, body corporate, and industrial projects across Gauteng, including Midrand, Pretoria East, and North Riding. Verifiable quality assurance on every job.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
