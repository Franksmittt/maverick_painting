import Link from "next/link";
import { HeroContactForm } from "@/components/hero-contact-form";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#121111] via-primary to-primary pb-10 pt-28 sm:pb-12 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(90,213,226,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="page-container relative grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:pt-4">
        <div className="p-1 text-center md:p-0 md:text-left">
          <h1 className="mb-3 text-4xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl">
            Gauteng Painting, Waterproofing &amp; Structural Repair Contractors.
          </h1>
          <p className="mx-auto mb-3 max-w-xl text-lg font-semibold text-zinc-200 sm:text-xl md:mx-0">
            Owner-supervised programmes for body corporates, developers, and commercial assets: concrete spalling,
            flat roofs, industrial coatings, and IRATA rope access across Johannesburg, Pretoria, and the Rand.
          </p>
          <p className="mx-auto mb-6 max-w-xl text-base font-medium leading-relaxed text-zinc-400 md:mx-0">
            Independent third-party QA on agreed scopes, so trustees and facility managers receive defensible
            documentation, not contractor self-certification.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-secondary px-8 py-3 text-lg font-bold text-primary shadow-lg transition duration-300 hover:bg-[#4AD5E2] focus:outline-none focus:ring-4 focus:ring-secondary/40"
            >
              Browse all services
            </Link>
            <Link
              href="/our-process-independent-qa"
              className="inline-block rounded-lg border border-white/15 px-8 py-3 text-base font-semibold text-white transition hover:border-secondary/50 hover:text-secondary"
            >
              Our QA process
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm pt-2 md:mx-0 md:max-w-none md:pt-0">
          <HeroContactForm />
        </div>
      </div>
    </section>
  );
}
