// src/app/painting/road-marking/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { MapPin, Shield, Layers, CheckSquare } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Road Marking & Warehouse Demarcation Contractors | Traffic Paint Specialists',
    description: 'Professional road marking and warehouse floor demarcation services. We apply durable traffic paint, epoxy lines, and safety markings for parking lots, warehouses, and industrial facilities.',
    path: '/painting/road-marking',
});

// --- KEY SERVICES DATA ---
const RoadMarkingServices = [
    {
        title: "Traffic Paint Application",
        description: "Durable road marking paint for parking lots, driveways, and access roads. We use high-visibility, weather-resistant paints that withstand constant vehicle traffic and weather exposure.",
        icon: MapPin,
        accentColor: "border-tertiary",
    },
    {
        title: "Warehouse Demarcation",
        description: "Professional floor marking for warehouses and distribution centers. Clear epoxy lines, safety zones, and directional markings that improve workflow and safety compliance.",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        title: "Safety Zone Marking",
        description: "Fire lanes, loading zones, pedestrian crossings, and hazard areas. We use compliant colors and reflective materials where required for maximum visibility and safety.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Parking Bay Marking",
        description: "Precise parking bay lines, directional arrows, and accessibility markings. We ensure compliance with SANS standards and provide clear, long-lasting demarcation.",
        icon: CheckSquare,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function RoadMarkingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            <TrustAndCtaStrip />
        </div>
    );
}

