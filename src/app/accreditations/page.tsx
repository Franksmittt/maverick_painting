import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { QaProcessModule } from "@/components/qa-process-module";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";
import {
  Shield,
  Layers,
  Users,
  Factory,
  Award,
  Scroll,
  ClipboardCheck,
  Paintbrush,
} from "lucide-react";
import { withOgImage } from "@/lib/page-metadata";
import { cn } from "@/lib/utils";

export const metadata = withOgImage({
  title: "Manufacturer Applicators & Certified Contractors",
  description:
    "Sika, Plascon, Dulux, and Marmoran applicator status plus MBA, NAMA, OHS compliance and independent third-party QA, verifiable credentials for Gauteng structural, waterproofing, and coating programmes.",
  path: "/accreditations",
});

const ManufacturerPartners = [
  {
    name: "Sika Approved Contractor",
    expertise: "Waterproofing, structural mortars, and injection systems",
    icon: Layers,
    accent: "secondary" as const,
  },
  {
    name: "Plascon Preferred Applicator",
    expertise: "Commercial, industrial, and high-performance coatings",
    icon: Factory,
    accent: "tertiary" as const,
  },
  {
    name: "Dulux Accredited Painter",
    expertise: "High-volume residential, body corporate, and façade programmes",
    icon: Award,
    accent: "secondary" as const,
  },
  {
    name: "Marmoran Master Applicator",
    expertise: "Specialized decorative and textured wall systems",
    icon: Paintbrush,
    accent: "tertiary" as const,
  },
  {
    name: "Penetron Approved Applicator",
    expertise: "Crystalline tanking, negative-side waterproofing, and active leak routing",
    icon: Layers,
    accent: "secondary" as const,
  },
  {
    name: "StonCor & A.B.E. Systems",
    expertise: "Industrial linings, epoxy mortars, and corrosion control",
    icon: Factory,
    accent: "tertiary" as const,
  },
  {
    name: "Mapei & Bostik",
    expertise: "Tile-bed remediation, flexible sealants, and movement joint chemistry",
    icon: Scroll,
    accent: "secondary" as const,
  },
] as const;

const ComplianceChecklist = [
  {
    title: "MBA & NAMA Registered",
    description:
      "Registration with the Master Builders Association and National Association of Managing Agents supports sectional-title and commercial procurement requirements.",
    icon: Users,
  },
  {
    title: "Full OHS Compliance",
    description:
      "Audited safety files, site management, COIDA, and public liability documentation for rope access, hot works, and occupied buildings.",
    icon: Shield,
  },
  {
    title: "Independent QA Process",
    description:
      "Third-party inspectors verify preparation, environmental conditions, and film build, defensible evidence for trustees, developers, and insurers.",
    icon: ClipboardCheck,
  },
  {
    title: "Manufacturer-Backed Guarantees",
    description:
      "Workmanship and product guarantees co-signed by manufacturers where systems and maintenance calendars are met (typically 5–15 years depending on scope).",
    icon: Scroll,
  },
] as const;

export default function AccreditationsPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Accreditations", href: "/accreditations" },
        ]}
      />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <p className="type-phase mb-3">Verifiable credentials</p>
              <h1 className="type-h1 mb-5 max-w-3xl uppercase">Accreditations, manufacturer partnerships & compliance</h1>
              <p className="type-lead mb-8 max-w-2xl text-zinc-400">
                High-value assets need contractors whose credentials survive trustee meetings, insurer reviews,
                and engineer sign-off. Maverick maintains manufacturer applicator relationships, industry
                registrations, and an independent QA pathway on agreed commercial and sectional-title scopes.
              </p>
              <Button asChild className="h-auto w-fit rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request credential pack</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/painting-industrial-coatings.jpg"
                alt="Manufacturer-approved coating application on a Gauteng industrial asset"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Approved systems</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Manufacturer-backed application in the field</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.accreditations} />
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <h2 className="type-h2 mb-10 text-center">Manufacturer applicator status</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {ManufacturerPartners.map((partner) => {
              const Icon = partner.icon;
              return (
                <article
                  key={partner.name}
                  className={cn(
                    "rounded-xl border border-white/[0.08] bg-[#111111] p-6",
                    partner.accent === "secondary" ? "border-t-[3px] border-t-secondary" : "border-t-[3px] border-t-tertiary",
                  )}
                >
                  <Icon className="mb-3 h-8 w-8 text-secondary" aria-hidden />
                  <h3 className="mb-2 text-lg font-bold text-white">{partner.name}</h3>
                  <p className="type-body m-0 text-sm">{partner.expertise}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-surface section-pad">
        <div className="page-container">
          <h2 className="type-h2 mb-10 text-center">Compliance & quality assurance</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ComplianceChecklist.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-white/[0.08] bg-[#111111] p-6"
                >
                  <Icon className="h-8 w-8 shrink-0 text-tertiary" aria-hidden />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                    <p className="type-body m-0 text-sm">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="type-body mx-auto mt-10 max-w-3xl text-center text-zinc-500">
            Structural repairs affecting load-bearing elements are implemented to engineer or competent-person
            specifications under National Building Regulations pathways. Maverick does not self-certify
            engineering designs; we supply documented execution evidence for your professional team.
          </p>
        </div>
      </section>

      <QaProcessModule />
      <TrustAndCtaStrip />
    </div>
  );
}
