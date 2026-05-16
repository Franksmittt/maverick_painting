import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/breadcrumbs";
import type { HubSpokeLink } from "@/components/hub-spoke-section";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";

export type ServiceHubPhaseStep = {
  phase: string;
  title: string;
  description: string;
};

export type ServiceHubMagazineSection = {
  phase: string;
  title: string;
  image: { src: string; alt: string };
  dropCap?: boolean;
  body: ReactNode;
};

export type ServiceHubPageConfig = {
  path: string;
  breadcrumbLabel: string;
  /** Full trail for spoke pages; hubs use Services + breadcrumbLabel when omitted. */
  breadcrumbs?: BreadcrumbItem[];
  metadata: {
    title: string;
    description: string;
  };
  jsonLd: {
    name: string;
    description: string;
    serviceType: string[];
  };
  hero: {
    headingId: string;
    h1: string;
    lead: string;
    interventionsLabel: string;
    interventions: string[];
  };
  approach: {
    headingId: string;
    title: string;
    subtitle: string;
    steps: ServiceHubPhaseStep[];
  };
  hubSpoke: {
    headingId: string;
    title: string;
    intro: string;
    links: HubSpokeLink[];
  };
  magazine: {
    headingId: string;
    title: ReactNode;
    subtitle: string;
    sections: ServiceHubMagazineSection[];
  };
  /** Visible on-page FAQs (also keep JSON-LD on spokes via ServiceDeepPage). */
  faqs?: readonly ServiceDeepFaq[];
};
