// src/app/painting/parking-garage-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Car, Shield, Layers, CheckSquare } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Parking Garage Painting & Floor Marking Contractors | After-Hours Services',
    description: 'Professional parking garage painting and floor marking services. We paint stairwells, parking lots, and apply durable epoxy floor coatings with minimal disruption. After-hours painting available.',
    path: '/painting/parking-garage-painting',
});

// --- KEY SERVICES DATA ---
const ParkingGarageServices = [
    {
        title: "After-Hours Painting",
        description: "Minimize disruption with our after-hours and weekend painting services. We work around your business schedule to ensure parking facilities remain operational during peak hours.",
        icon: Car,
        accentColor: "border-tertiary",
    },
    {
        title: "Durable Epoxy Floor Coatings",
        description: "High-traffic epoxy floor systems designed for parking garages. Resistant to oil, chemicals, and constant vehicle traffic. Available in multiple colors with clear demarcation lines.",
        icon: Shield,
        accentColor: "border-secondary",
    },
    {
        title: "Stairwell & Wall Painting",
        description: "Complete painting of parking garage stairwells, walls, and structural elements. We use moisture-resistant paints and anti-graffiti coatings for long-lasting protection.",
        icon: Layers,
        accentColor: "border-tertiary",
    },
    {
        title: "Floor Marking & Demarcation",
        description: "Professional floor marking for parking bays, directional arrows, and safety zones. We use durable traffic paint and clear epoxy lines that last for years.",
        icon: CheckSquare,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function ParkingGaragePaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            <TrustAndCtaStrip />
        </div>
    );
}

