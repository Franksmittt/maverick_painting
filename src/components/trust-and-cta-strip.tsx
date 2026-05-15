// src/components/trust-and-cta-strip.tsx
import { Phone, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as T from "@/lib/trust-cta-data";

function CtaPhoneButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      className={
        className ??
        "h-14 bg-secondary px-8 text-lg font-bold text-primary shadow-2xl transition hover:scale-[1.02] hover:bg-[#4AD5E2]"
      }
    >
      <a href={T.TRUST_TEL_HREF} className="flex items-center justify-center gap-2">
        <Phone className="h-6 w-6 shrink-0" aria-hidden />
        <span className="hidden sm:inline">{T.TRUST_CONTACT_LABEL}</span>
        <span>{T.TRUST_TEL_DISPLAY}</span>
      </a>
    </Button>
  );
}

function BrandRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-8 gap-y-2", className)}>
      {T.TRUST_BRANDS.map((b) => (
        <span key={b.key} className="text-base font-semibold tracking-wide text-white/90 md:text-lg">
          {b.label}
        </span>
      ))}
    </div>
  );
}

function ProofRow({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-10 gap-y-4", className)}>
      {T.TRUST_PROOF_POINTS.map((point) => {
        const Icon = point.key === "mba" ? Users : Shield;
        return (
          <div key={point.key} className="flex items-center gap-3 text-white">
            <Icon className="h-5 w-5 shrink-0 text-secondary" />
            <span className="text-sm font-semibold text-gray-200 md:text-base">{point.text}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Accreditations + final phone CTA (split card: credentials left, CTA right on large screens). */
export function TrustAndCtaStrip() {
  return (
    <section className="section-flow bg-primary">
      <div className="page-container">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] shadow-lg lg:grid lg:min-h-[300px] lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-white/[0.06] bg-[#141413] p-8 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{T.TRUST_EYEBROW}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{T.TRUST_TITLE}</h3>
            <BrandRow className="mt-8 justify-start gap-x-6 gap-y-3" />
            <div className="mt-8 border-t border-white/[0.06] pt-8">
              <ProofRow />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-primary px-8 py-10 text-center sm:px-12">
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">{T.TRUST_CTA_HEADLINE}</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-400 md:text-base">{T.TRUST_CTA_BODY}</p>
            <div className="mt-8 flex justify-center">
              <CtaPhoneButton className="h-14 w-full max-w-md bg-secondary px-6 text-base font-bold text-primary shadow-xl transition hover:bg-[#4AD5E2] sm:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
