// src/app/solutions/for-body-corporates/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { ClipboardCheck, MessageCircle, Scroll, Shield } from 'lucide-react'; // REMOVED: Users
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Painting & Waterproofing Solutions for Body Corporates & HOAs | Maverick',
    description: 'Specialized asset maintenance for Body Corporates and Homeowners\' Associations. We offer guaranteed compliance, minimal disturbance, and Independent QA for long-term asset security.',
    path: '/solutions/for-body-corporates',
});

// --- CORE PAIN POINTS DATA ---
const PainPoints = [
    {
        title: "Risk-Free Compliance",
        description: "Independent QA verifies film thickness and application quality, providing trustees with auditable proof of work for AGMs.",
        icon: ClipboardCheck,
        accentColor: "border-secondary",
    },
    {
        title: "Long-Term Security",
        description: "Our structural repairs and guaranteed waterproofing systems eliminate recurring defects, securing the long-term value of the entire block.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Minimal Disturbance",
        description: "We use advanced high-access methods and strict project management protocols to ensure minimal disturbance and inconvenience to residents.",
        icon: MessageCircle,
        accentColor: "border-secondary",
    },
    {
        title: "Transparent Guarantees",
        description: "All guarantees are co-signed by the manufacturer, the contractor, and the independent inspector, providing unparalleled warranty transparency.",
        icon: Scroll,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function BodyCorporateSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}