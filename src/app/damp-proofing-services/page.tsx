// src/app/damp-proofing-services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Droplet, Sprout, Building, MessageSquare } from 'lucide-react'; // REMOVED: AirVent
import { buildPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HubSpokeSection } from '@/components/hub-spoke-section';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Rising Damp & Damp Proofing Solutions | Chemical DPC & Moisture Control',
    description: 'Specialized rising damp treatment and damp proofing contractors in Gauteng: chemical DPC injection, salt-retardant replastering, basement tanking, and diagnostics that separate capillary rise from leaks and condensation.',
    path: '/damp-proofing-services',
});

// --- KEY FEATURES DATA ---
const DampFeatures = [
    {
        title: "Chemical DPC Injection",
        description: "Permanent solution for rising damp via pressure injection of silicone-based cream to form a new, effective damp-proof barrier in the masonry.",
        icon: Droplet,
        accentColor: "border-secondary",
    },
    {
        title: "Basement Waterproofing",
        description: "Internal tanking and cementitious slurry systems applied to negative-side walls to stop moisture ingress in below-ground structures.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Mold Remediation Protocol",
        description: "Full cleaning and treatment protocol to remediate mold and mildew resulting from condensation or rising damp, ensuring a healthy indoor environment.",
        icon: Sprout,
        accentColor: "border-secondary",
    },
    {
        title: "Verifiable Diagnostics",
        description: "Utilizing professional moisture meters and thermal imaging to accurately diagnose the source of damp before specifying treatment.",
        icon: MessageSquare,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function DampProofingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/services' },
                    { label: 'Damp proofing services', href: '/damp-proofing-services' },
                ]}
            />

            <TrustAndCtaStrip />
        </div>
    );
}