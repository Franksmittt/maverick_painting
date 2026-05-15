// src/app/painting/warehouse-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Factory, Shield, Layers, Clock } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Warehouse Painting & Industrial Floor Coating Contractors | High-Traffic Solutions',
    description: 'Professional warehouse painting and industrial floor coating services. We paint warehouses, distribution centers, and apply high-traffic epoxy floor systems with minimal operational disruption.',
    path: '/painting/warehouse-painting',
});

// --- KEY SERVICES DATA ---
const WarehouseServices = [
    {
        title: "High-Traffic Floor Coatings",
        description: "Durable epoxy and polyurethane floor systems designed for forklift traffic, heavy machinery, and constant foot traffic. Resistant to chemicals, oils, and abrasion.",
        icon: Factory,
        accentColor: "border-tertiary",
    },
    {
        title: "Low-Disruption Painting",
        description: "After-hours and phased painting services that allow your warehouse to remain operational. We work around your schedule to minimize downtime and revenue loss.",
        icon: Clock,
        accentColor: "border-secondary",
    },
    {
        title: "Structural Steel Coating",
        description: "Corrosion protection for warehouse structural steel, mezzanines, and racking systems. We use zinc-rich primers and durable topcoats for long-term protection.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Wall & Ceiling Painting",
        description: "Complete interior painting of warehouse walls and high ceilings. We use industrial-grade paints that resist dust, moisture, and provide excellent light reflectivity.",
        icon: Layers,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function WarehousePaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            <TrustAndCtaStrip />
        </div>
    );
}

