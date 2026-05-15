// src/app/access-solutions/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { PersonStanding, Shield, TrendingUp, Truck } from 'lucide-react'; // REMOVED: Zap, Phone
import { buildPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HubSpokeSection } from '@/components/hub-spoke-section';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Rope Access & High-Access Painting Solutions | Cost-Effective & OHS Compliant',
    description: 'Expert rope access and high-access painting contractors. We use scaffolding, boom lifts, and certified rope access to provide cost-effective maintenance for high-rise facades and difficult-to-reach industrial areas.',
    path: '/access-solutions',
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const AccessMethods = [
    {
        title: "Certified Rope Access",
        description: "IRATA/SAQA certified rope access teams provide flexible, fast, and cost-effective maintenance for high-rise and complex architectural structures.",
        icon: PersonStanding,
        accentColor: "border-secondary",
    },
    {
        title: "Scaffolding & Boom Lifts",
        description: "Utilizing professional, OHS-compliant scaffolding and mechanical access equipment (e.g., boom lifts) for extensive facade painting and repair projects.",
        icon: Truck,
        accentColor: "border-tertiary",
    },
    {
        title: "Full OHS Compliance",
        description: "Our safety file is comprehensive and audited. We eliminate all client liability by rigorously adhering to Occupational Health and Safety standards on site.",
        icon: Shield,
        accentColor: "border-secondary",
    },
    {
        title: "Cost & Time Efficiency",
        description: "Selecting the optimal access method: rope access for speed, scaffolding for stability: to maximize site efficiency and reduce total project cost.",
        icon: TrendingUp,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function AccessSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/services' },
                    { label: 'Access solutions', href: '/access-solutions' },
                ]}
            />

            <TrustAndCtaStrip />
        </div>
    );
}