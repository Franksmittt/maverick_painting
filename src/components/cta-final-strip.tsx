// src/components/cta-final-strip.tsx
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import * as T from "@/lib/trust-cta-data";

export function CtaFinalStrip() {
  return (
    <section className="border-t border-primary/50 bg-header-dark py-12">
      <div className="page-container text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-white">{T.TRUST_CTA_HEADLINE}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-400">{T.TRUST_CTA_BODY}</p>
        <Button
          asChild
          className="h-14 bg-secondary text-xl font-bold text-primary shadow-2xl transition hover:scale-105 hover:bg-[#4AD5E2]"
        >
          <a href={T.TRUST_TEL_HREF} className="flex items-center justify-center gap-2">
            <Phone className="h-6 w-6" />
            <span className="hidden md:inline">{T.TRUST_CONTACT_LABEL}</span> {T.TRUST_TEL_DISPLAY}
          </a>
        </Button>
      </div>
    </section>
  );
}
