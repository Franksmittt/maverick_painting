import Link from "next/link";
import { ServiceGridItem } from "./service-grid-item";
import { Button } from "@/components/ui/button";
import { Wrench, Umbrella, AirVent, PersonStanding, FlaskConical, Stethoscope, Building, Home } from "lucide-react";

const servicesData = [
  { title: "Structural & Spalling Repairs", description: "Fixing concrete cancer and structural defects.", href: "/structural-repairs/", icon: Wrench },
  { title: "Roof & Balcony Waterproofing", description: "Guaranteed systems for flat roofs and under-tile leaks.", href: "/waterproofing-services/", icon: Umbrella },
  { title: "Rising Damp Treatment", description: "Permanent chemical injection DPC solutions.", href: "/damp-proofing-services/", icon: AirVent },
  { title: "Rope Access & High Access", description: "Cost-effective maintenance for high-rise buildings.", href: "/access-solutions/", icon: PersonStanding },
  { title: "Industrial Corrosion Control", description: "Protective coatings for factory assets and steelwork.", href: "/painting/industrial", icon: Wrench },
  { title: "Hygienic Food-Grade Floors", description: "Seamless, chemical-resistant systems for food plants.", href: "/specialized-coatings/hygienic-food-grade", icon: FlaskConical },
  { title: "Body Corporate Painting", description: "Managing complex projects with minimal disturbance.", href: "/painting/body-corporate", icon: Building },
  { title: "Commercial & Healthcare", description: "Low-VOC, specialized coatings for sensitive environments.", href: "/painting/commercial-painting/", icon: Stethoscope },
  { title: "Stucco & Wall Coatings", description: "Premium masonry cladding with vapor-permeable finishes.", href: "/painting/stucco-wall-coatings/", icon: Home },
];

export function ServiceExpertiseGrid() {
  return (
    <section className="section-flow">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:col-span-2 lg:min-h-[280px] lg:p-10">
            <header>
              <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-white lg:text-4xl">
                Expertise in high-performance assets
              </h2>
              <p className="text-base font-medium leading-relaxed text-zinc-400 lg:text-lg">
                Advanced systems and specialized access to protect complex assets where others cannot reach.
              </p>
            </header>
            <Button asChild className="mt-8 h-auto self-start rounded-lg bg-secondary px-6 py-3 text-base font-bold text-primary shadow-lg transition hover:bg-[#4AD5E2] lg:mt-10">
              <Link href="/services">View all technical services</Link>
            </Button>
          </div>
          <div className="col-span-1 grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-2 md:grid-cols-4 lg:col-span-3 lg:gap-3">
            {servicesData.map((service, index) => (
              <ServiceGridItem key={index} title={service.title} description={service.description} href={service.href} icon={service.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
