import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPageContent } from "@/components/projects/project-detail-page";
import { projectCaseStudies } from "@/data/projects";
import { buildPageMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCaseStudies.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Maverick",
      description: "The requested project could not be found.",
    };
  }

  const metadata = buildPageMetadata({
    title: `${project.name} | Structural Repair & Painting Case Study | Maverick`,
    description: `Case study for ${project.name} in ${project.location}. Scope: ${project.scope}. Project completed ${project.date}.`,
    path: `/projects/${project.slug}`,
    image: project.image,
  });

  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article" },
  };
}

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectCaseStudies.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetailPageContent project={project} />;
}
