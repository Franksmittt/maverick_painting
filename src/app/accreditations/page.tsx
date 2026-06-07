import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
    accentColor: "border-secondary",
  },
  {
    name: "Plascon Preferred Applicator",
    expertise: "Commercial, industrial, and high-performance coatings",
    icon: Factory,
    accentColor: "border-tertiary",
  },
  {
    name: "Dulux Accredited Painter",
    expertise: "High-volume residential, body corporate, and façade programmes",
    icon: Award,
    accentColor: "border-secondary",
  },
  {
    name: "Marmoran Master Applicator",
    expertise: "Specialized decorative and textured wall systems",
    icon: Paintbrush,
    accentColor: "border-tertiary",
  },
  {
    name: "Penetron Approved Applicator",
    expertise: "Crystalline tanking, negative-side waterproofing, and active leak routing",
    icon: Layers,
    accentColor: "border-secondary",
  },
  {
    name: "StonCor & A.B.E. Systems",
    expertise: "Industrial linings, epoxy mortars, and corrosion control",
    icon: Factory,
    accentColor: "border-tertiary",
  },
  {
    name: "Mapei & Bostik",
    expertise: "Tile-bed remediation, flexible sealants, and movement joint chemistry",
    icon: Scroll,
    accentColor: "border-secondary",
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
    <div className="bg-primary pt-24 text-white">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Accreditations", href: "/accreditations" },
        ]}
      />

      <section className="page-container py-16 md:py-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
          Verifiable credentials
        </p>
        <h1 className="type-h1 mb-6 max-w-3xl text-white">
          Accreditations, manufacturer partnerships & compliance
        </h1>
        <p className="type-body mb-10 max-w-3xl text-zinc-400">
          High-value assets need contractors whose credentials survive trustee meetings, insurer reviews,
          and engineer sign-off. Maverick maintains manufacturer applicator relationships, industry
          registrations, and an independent QA pathway on agreed commercial and sectional-title scopes.
        </p>
        <Button asChild className="bg-tertiary font-bold text-primary hover:bg-[#9ED529]">
          <Link href="/contact">Request credential pack</Link>
        </Button>
      </section>

      <section className="border-t border-white/10 bg-gray-900/50 py-16">
        <div className="page-container">
          <h2 className="type-h2 mb-10 text-center text-white">Manufacturer applicator status</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ManufacturerPartners.map((partner) => {
              const Icon = partner.icon;
              return (
                <article
                  key={partner.name}
                  className={`rounded-xl border-t-4 ${partner.accentColor} bg-primary p-6 shadow-xl`}
                >
                  <Icon className="mb-3 h-8 w-8 text-secondary" aria-hidden />
                  <h3 className="mb-2 text-lg font-bold text-white">{partner.name}</h3>
                  <p className="text-sm text-zinc-400">{partner.expertise}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-container py-16 md:py-24">
        <h2 className="type-h2 mb-10 text-center text-white">Compliance & quality assurance</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {ComplianceChecklist.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-gray-900/40 p-6"
              >
                <Icon className="h-8 w-8 shrink-0 text-tertiary" aria-hidden />
                <div>
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
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
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}

