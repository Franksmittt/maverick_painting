// src/app/solutions/for-developers/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Building, ClipboardCheck, Scroll, Wrench } from 'lucide-react'; // REMOVED: Hammer, Layers
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'New Build & Developer Painting Solutions | Technical Compliance & Auditable QA',
    description: 'Verifiable painting and coating specifications for developers, engineers, and quantity surveyors. We guarantee compliance with SANS standards and ensure zero hand-over risk through Independent 3rd Party QA.',
    path: '/solutions/for-developers',
});

// --- CORE PAIN POINTS DATA ---
const DeveloperValueProps = [
    {
        title: "Technical Compliance",
        description: "Application strictly adheres to manufacturer specifications and SANS 10047/10051 for verifiable film thickness and quality.",
        icon: Scroll,
        accentColor: "border-secondary",
    },
    {
        title: "Auditable Quality",
        description: "Independent QA provides fortnightly reports, eliminating contractor bias and giving the QS or engineer verifiable quality assurance documentation.",
        icon: ClipboardCheck,
        accentColor: "border-tertiary",
    },
    {
        title: "Structural Hand-over",
        description: "Our capability includes fixing spalling, crack injection, and waterproofing, ensuring the structure is sound before final coatings.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "High-Volume Efficiency",
        description: "Experienced in large-scale residential and commercial complex painting, ensuring on-time delivery without compromising on final quality.",
        icon: Building,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function DeveloperSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}