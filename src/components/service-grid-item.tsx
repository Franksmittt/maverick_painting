import Link from "next/link";
import React from "react";
import { Wrench, Umbrella, AirVent, PersonStanding, FlaskConical, Stethoscope, Building, Tent } from "lucide-react";

interface ServiceGridItemProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const iconMap: Record<string, React.ElementType> = {
  "Structural & Spalling Repairs": Wrench,
  "Roof & Balcony Waterproofing": Umbrella,
  "Rising Damp Treatment": AirVent,
  "Rope Access & High Access": PersonStanding,
  "Industrial Corrosion Control": Wrench,
  "Hygienic Food-Grade Floors": FlaskConical,
  "Body Corporate Painting": Building,
  "Commercial & Healthcare": Stethoscope,
};

export function ServiceGridItem({ title, description, href, icon: IconComponent }: ServiceGridItemProps) {
  const FinalIconComponent = (typeof IconComponent === "string" ? iconMap[title] : IconComponent) || Tent;
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-3 py-5 transition duration-300 hover:border-secondary/35 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-black/20 md:px-4 md:py-6"
    >
      <FinalIconComponent className="mb-2 h-6 w-6 text-secondary transition group-hover:text-tertiary" />
      <h3 className="flex-grow text-sm font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-zinc-500 group-hover:text-zinc-400">{description}</p>
    </Link>
  );
}
