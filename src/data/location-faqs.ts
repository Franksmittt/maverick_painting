import type { ServiceLocation } from "@/data/locations";
import type { ServiceDeepFaq } from "@/lib/service-deep-types";

export function getLocationFaqs(loc: ServiceLocation): readonly ServiceDeepFaq[] {
  const regionName =
    loc.region === "east-rand"
      ? "East Rand"
      : loc.region === "west-rand"
        ? "West Rand"
        : loc.region === "south-rand"
          ? "South Rand"
          : "Central Gauteng";

  return [
    {
      question: `Which suburbs and landmarks in ${loc.name} do you serve?`,
      answer: `We mobilise across ${loc.landmarks.join(", ")} and surrounding ${loc.name} nodes. Scopes are scheduled from our Gauteng operations with site-specific safety files and access coordination.`,
    },
    {
      question: `How does ${loc.name} fit into Maverick's ${regionName} programmes?`,
      answer: `${loc.regionalNarrative} See our ${regionName} regional hub for neighbouring cities and shared technical priorities.`,
    },
    {
      question: "Can you supply documentation for trustees or insurers?",
      answer:
        "On agreed scopes we provide photographic condition packs, manufacturer data sheet adherence records, and third-party QA reports, supporting MRRP updates, AGM packs, and maintenance-of-cover arguments. We do not provide legal or insurance advice.",
    },
    {
      question: `How do I get a ${loc.name} assessment?`,
      answer:
        "Contact us with the asset address, access constraints, and urgency. We typically schedule a condition assessment within a few business days, subject to security inductions and occupied-building protocols.",
    },
  ];
}
