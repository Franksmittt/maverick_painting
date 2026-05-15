// src/app/painting-services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Building, Factory, Wrench, Truck } from 'lucide-react'; // REMOVED: Paintbrush, Phone
import { buildPageMetadata } from '@/lib/metadata';
import { HubSpokeSection } from '@/components/hub-spoke-section';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Commercial & High-Access Painting Contractors | Industrial & Body Corporate',
    description: 'Specialist large-scale painting services for industrial sites, factories, and commercial buildings. Expert high-access, rope access, and cost-effective solutions with Independent QA.',
    path: '/painting-services',
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const CommercialPaintingServices = [
    {
        title: "Industrial & Factory Painting",
        description: "Application of specialized corrosion control and protective coatings for steel structures, silos, and internal factory assets in harsh environments.",
        icon: Factory,
        accentColor: "border-secondary",
    },
    {
        title: "Commercial & Retail Facades",
        description: "High-volume, complex exterior and interior coating solutions for shopping centres, office parks, and multi-story commercial properties.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Advanced Surface Preparation",
        description: "From structural crack repairs to abrasive blasting, preparation dictates longevity. We ensure the surface is scientifically ready for the new system.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "Expert Access Management",
        description: "Utilizing professional scaffolding, boom lifts, and certified rope access to manage costs and ensure safe, compliant high-rise work.",
        icon: Truck,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function PaintingServicesPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}