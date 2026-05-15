import type { ReactNode } from "react";
import type { HubSpokeLink } from "@/components/hub-spoke-section";

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
};
