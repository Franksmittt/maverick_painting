// src/app/specialized-coatings/page.tsx
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { FlaskConical, Layers, Shield, Building } from 'lucide-react'; // REMOVED: Rss, Phone
import { buildPageMetadata } from '@/lib/metadata';
import { HubSpokeSection } from '@/components/hub-spoke-section';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Epoxy & Polyurethane Floor Coatings | Certified Specialized Applicators',
    description: 'Approved applicators for high-performance, industrial-grade floor and wall coatings. We provide guaranteed, chemical-resistant systems for food production, manufacturing, and commercial spaces.',
    path: '/specialized-coatings',
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const CoatingSystems = [
    {
        title: "Epoxy & Polyurethane Floors",
        description: "Seamless, chemical-resistant systems for high-traffic industrial, commercial, and retail environments that require exceptional durability.",
        icon: FlaskConical,
        accentColor: "border-secondary",
    },
    {
        title: "Hygienic/Food-Grade Walls",
        description: "Application of specialized, smooth, and easily cleanable coatings required for food and beverage facilities to comply with health and safety regulations.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Marmoran Decorative Finishes",
        description: "Certified application of Marmoran&apos;s architectural coatings, providing durable, specialized, and aesthetic wall finishes for high-end residential and commercial facades.",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        title: "Industrial Corrosion Control",
        description: "Protective coating systems for steel structures, piping, and plant assets, designed to prevent rust and corrosion in harsh industrial and coastal environments.",
        icon: Building,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function SpecializedCoatingsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}