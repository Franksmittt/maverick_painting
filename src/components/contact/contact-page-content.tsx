import { Phone, Mail, MapPin, MessageCircle, Layers, ClipboardCheck, Scroll } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroContactForm } from "@/components/hero-contact-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";

export function ContactPageContent() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-6">
              <header>
                <p className="type-phase mb-3">Talk to a specialist</p>
                <h1 className="type-h1 mb-5 uppercase">Eliminate risk. Get a verifiable quote.</h1>
                <p className="type-lead max-w-2xl text-zinc-400">
                  Schedule your free on-site assessment. Our technical team is ready to assist with
                  substrate-specific specifications for your high-value asset.
                </p>
              </header>

              <div className="space-y-6 rounded-xl border border-white/10 bg-[#111111] p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-10 w-10 shrink-0 text-tertiary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase text-zinc-500">Call Lawrence Brooks (owner supervision)</p>
                    <a href="tel:0826277082" className="text-2xl font-extrabold text-tertiary transition hover:text-white sm:text-3xl">
                      082 627 7082
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <Mail className="h-10 w-10 shrink-0 text-secondary" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold uppercase text-zinc-500">Email for technical specifications</p>
                    <a
                      href="mailto:maverickpainters1984@gmail.com"
                      className="text-lg font-bold text-white transition hover:text-tertiary"
                    >
                      maverickpainters1984@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-bold uppercase text-secondary">Why quote with Maverick?</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { icon: Layers, text: "Specialized structural solutions" },
                    { icon: ClipboardCheck, text: "Independent 3rd party QA" },
                    { icon: Scroll, text: "Manufacturer guarantees issued" },
                    { icon: MapPin, text: "Gauteng-wide service area" },
                  ].map((item) => (
                    <p key={item.text} className="flex items-center gap-2 text-sm text-zinc-400">
                      <item.icon className="h-5 w-5 text-tertiary" aria-hidden />
                      {item.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:col-span-6 lg:pl-4">
              <HeroContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow border-y border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">On-site programmes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">What we assess before quoting</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.contact} />
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="page-container text-center">
          <h2 className="type-h2 mb-4">Prefer WhatsApp? Get a quick response.</h2>
          <p className="type-body mx-auto mb-6 max-w-2xl text-zinc-400">
            Send photos of your defect or project scope for immediate attention from our technical team.
          </p>
          <Button asChild className="h-auto bg-[#25D366] px-8 py-4 text-lg font-bold text-primary hover:bg-[#25C356]">
            <a href="https://wa.me/27826277082" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6" aria-hidden />
              WhatsApp Maverick Painting
            </a>
          </Button>
          <p className="mt-6 text-sm text-zinc-500">
            Or browse{" "}
            <Link href="/services" className="text-secondary hover:underline">
              our services
            </Link>{" "}
            and{" "}
            <Link href="/projects" className="text-secondary hover:underline">
              project portfolio
            </Link>{" "}
            before you call.
          </p>
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
