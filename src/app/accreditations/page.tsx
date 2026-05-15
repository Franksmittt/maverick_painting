// src/app/accreditations/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
// FIX: Added Paintbrush to resolve TypeScript error.
import { Shield, Layers, Users, Factory, Award, Scroll, ClipboardCheck, Paintbrush } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Approved Manufacturer Applicators & Certified Contractors | Maverick',
    description: 'View our official accreditations, manufacturer applicator status (Sika, Plascon, Marmoran), and compliance certificates (OHS, MBA, NAMA). Your guarantee of verifiable quality.',
    path: '/accreditations',
});

// --- DATA: MANUFACTURER PARTNERSHIPS ---
const ManufacturerPartners = [
    {
        name: "Sika Approved Contractor",
        expertise: "Waterproofing & Structural Repairs",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        name: "Plascon Preferred Applicator",
        expertise: "Commercial & Industrial Coatings",
        icon: Factory,
        accentColor: "border-tertiary",
    },
    {
        name: "Dulux Accredited Painter",
        expertise: "High-Volume Residential & Facades",
        icon: Award,
        accentColor: "border-secondary",
    },
    {
        name: "Marmoran Master Applicator",
        expertise: "Specialized Decorative Finishes",
        icon: Paintbrush, 
        accentColor: "border-tertiary",
    },
];

// --- DATA: COMPLIANCE & SAFETY ---
const ComplianceChecklist = [
    {
        title: "MBA & NAMA Registered",
        description: "Official registration with Master Builders Association and National Association of Managing Agents.",
        icon: Users,
    },
    {
        title: "Full OHS Compliance",
        description: "Rigorously audited safety file, site management, and liability coverage for all high-access work.",
        icon: Shield,
    },
    {
        title: "Independent QA Process",
        description: "Commitment to using third-party inspectors for auditable proof of film thickness and application quality.",
        icon: ClipboardCheck,
    },
    {
        title: "Manufacturer Guarantees",
        description: "Ability to issue 5, 7, and 15-year guarantees co-signed by the material manufacturer.",
        icon: Scroll,
    },
];

// --- MAIN PAGE COMPONENT ---
export default function AccreditationsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}