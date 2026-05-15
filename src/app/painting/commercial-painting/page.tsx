// src/app/painting/commercial-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Stethoscope, ClipboardCheck, MessageCircle, Building } from 'lucide-react'; 
import { buildPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/breadcrumbs';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Commercial & Healthcare Painting Contractors | Low-VOC & Sensitive Environment Coatings',
    description: 'Specialist low-VOC and anti-microbial coating application for commercial offices, healthcare facilities, and retail spaces. We ensure minimal disruption and high air quality compliance.',
    path: '/painting/commercial-painting',
});

// --- KEY FEATURES DATA ---
const CommercialFeatures = [
    {
        title: "Low-VOC / Zero-VOC Coatings",
        description: "Application of specialized paints that maintain high air quality and minimize disruption, essential for occupied offices, schools, and hospitals.",
        icon: MessageCircle,
        accentColor: "border-tertiary",
    },
    {
        title: "Healthcare Grade Finishes",
        description: "Anti-microbial and fungicidal coatings for facilities where hygiene is critical, applied following strict healthcare application protocols.",
        icon: Stethoscope,
        accentColor: "border-secondary",
    },
    {
        title: "Managed Disruption",
        description: "Projects are tightly managed, often executed after hours or in phased sections to ensure commercial operations continue seamlessly.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Compliance Documentation",
        description: "Full documentation provided for all products and application methods, ensuring compliance for property managers and facilities.",
        icon: ClipboardCheck,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function CommercialPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            <Breadcrumbs 
                items={[
                    { label: 'Services', href: '/services' },
                    { label: 'Painting Services', href: '/painting-services' },
                    { label: 'Commercial Painting', href: '/painting/commercial-painting' },
                ]}
            />

            <TrustAndCtaStrip />
        </div>
    );
}