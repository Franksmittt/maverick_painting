import type { Metadata } from "next";
import type { BreadcrumbItem } from "@/components/breadcrumbs";

export type ServiceDeepFaq = { question: string; answer: string };

export type ServiceDeepSection = {
  title: string;
  paragraphs: string[];
  subsections?: { title: string; paragraphs: string[] }[];
};

export type ServiceDeepCaseAngle = {
  title: string;
  summary: string;
};

export type ServiceDeepPageContent = {
  meta: { title: string; description: string; path: string };
  h1: string;
  eyebrow: string;
  heroLead: string;
  breadcrumbs: BreadcrumbItem[];
  /** JSON-LD @type Service name */
  schemaServiceName: string;
  schemaServiceDescription: string;
  sections: ServiceDeepSection[];
  caseAngles: ServiceDeepCaseAngle[];
  faqs: ServiceDeepFaq[];
  relatedServices: { href: string; label: string }[];
};

export type ServiceSpokeDefinition = ServiceDeepPageContent;

export type ServiceSpokeId =
  | "concrete-spalling"
  | "crack-injection"
  | "expansion-joint-sealing"
  | "rising-damp-treatment"
  | "industrial-epoxy-flooring"
  | "hygienic-food-grade"
  | "marmoran-wall-systems"
  | "flat-concrete-roofs"
  | "leaking-balconies"
  | "basement-tanking"
  | "body-corporate"
  | "industrial-painting"
  | "rope-access-painting";
