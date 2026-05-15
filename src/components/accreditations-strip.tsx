// src/components/accreditations-strip.tsx
import { Shield, Users } from "lucide-react";
import * as T from "@/lib/trust-cta-data";

const proofIcons = { mba: Users, ohs: Shield } as const;

/** Standalone accreditations band (matches Trust + CTA variation 1 credentials strip). */
export function AccreditationsStrip() {
  return (
    <section className="section-flow text-primary-foreground">
      <div className="page-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-tertiary">{T.TRUST_EYEBROW}</p>
          <h3 className="mt-3 text-3xl font-light text-white md:text-4xl">{T.TRUST_TITLE}</h3>
        </div>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 md:mt-10">
          {T.TRUST_BRANDS.map((b) => (
            <span key={b.key} className="text-base font-semibold tracking-wide text-white/90 md:text-lg">
              {b.label}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-4xl border-t border-white/[0.08] pt-8 md:mt-10 md:pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {T.TRUST_PROOF_POINTS.map((point) => {
              const Icon = proofIcons[point.key];
              return (
                <div key={point.key} className="flex items-center gap-3 text-white">
                  <Icon className="h-5 w-5 shrink-0 text-secondary" />
                  <span className="text-sm font-semibold text-gray-200 md:text-base">{point.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
