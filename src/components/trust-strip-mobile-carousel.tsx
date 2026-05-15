// src/components/trust-strip-mobile-carousel.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";

const MobileTrustCarousel = dynamic(
  () => import("./mobile-trust-carousel").then((mod) => mod.MobileTrustCarousel),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[36px] items-center justify-center text-sm font-medium text-zinc-500">
        Loading…
      </div>
    ),
  },
);

interface TrustSignal {
  id: number;
  text: string;
  icon: string;
  tailwindColor: string;
}

const trustSignals: TrustSignal[] = [
  { id: 1, text: "Independent 3rd Party QA", icon: "ClipboardCheck", tailwindColor: "text-secondary" },
  { id: 2, text: "50+ Years Combined Experience", icon: "Medal", tailwindColor: "text-secondary" },
  { id: 3, text: "Guarantees: 5/7/15 Year Available", icon: "Scroll", tailwindColor: "text-secondary" },
  { id: 4, text: "Fully OHS Compliant", icon: "Stethoscope", tailwindColor: "text-secondary" },
];

export function TrustStripMobileCarousel() {
  return (
    <section className="bg-primary py-3.5 sm:py-4">
      <div className="page-container">
        <div className="hidden text-center text-sm font-medium text-zinc-300 md:grid md:grid-cols-4 md:gap-8">
          {trustSignals.map((signal) => (
            <div key={signal.id} className="flex items-center justify-center gap-2 px-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
              <span className="whitespace-nowrap">{signal.text}</span>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <MobileTrustCarousel signals={trustSignals} />
        </div>
      </div>
    </section>
  );
}
