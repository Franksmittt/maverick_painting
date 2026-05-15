// src/app/our-process-independent-qa/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { QaProcessModule } from '@/components/qa-process-module'; // REMOVED: Replaced by custom module below
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Scroll, CheckSquare, FileText, BarChart } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Independent 3rd Party QA Process & Guarantee | Maverick Painting',
    description: 'Learn how our Independent 3rd Party Quality Assurance (QA) process eliminates project risk. Receive bi-weekly reports on film thickness and application quality, guaranteed.',
    path: '/our-process-independent-qa',
});

// --- TECHNICAL DATA FOR THE PROCESS MODULE ---
const FullQAProcess = [
    {
        step: 1,
        title: "Pre-Project Substrate Assessment",
        description: "An independent coatings inspector conducts the initial hammer tests, moisture readings, and adhesion tests. We use this data to finalize a **non-negotiable technical specification** that includes material type, minimum film thickness, and preparation method.",
        icon: Scroll,
    },
    {
        step: 2,
        title: "Mandatory Surface Preparation Checks",
        description: "The inspector verifies that surface preparation (e.g., crack cleaning, spalling repair, washing) meets SANS and manufacturer standards *before* primer is applied. This ensures maximum adhesion and product lifespan.",
        icon: CheckSquare,
    },
    {
        step: 3,
        title: "Film Thickness Measurement & Verification",
        // FIX: Replaced single quote ' with &apos; to escape the character
        description: "The inspector monitors the **Wet Film Thickness (WFT)** and **Dry Film Thickness (DFT)** of every coat. This is critical: if minimum thickness is not met, the manufacturer guarantee is void. We ensure it&apos;s verified.",
        icon: BarChart,
    },
    {
        step: 4,
        title: "Bi-Weekly Progress & Technical Reporting",
        description: "You receive a comprehensive report every two weeks detailing all tests, compliance checks, and a visual project overview. This provides **total, verifiable transparency** for trustees or building owners.",
        icon: FileText,
    },
];

// --- MAIN PAGE COMPONENT ---
export default function IndependentQAPage() {
    return (
        <div className="bg-gray-50 pt-24">

            <TrustAndCtaStrip />
        </div>
    );
}