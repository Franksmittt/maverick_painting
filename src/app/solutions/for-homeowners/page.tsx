// src/app/solutions/for-homeowners/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { QaProcessModule } from '@/components/qa-process-module'; // REMOVED: Unused - replaced by modular section below
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Users, CheckSquare, Shield, Clock } from 'lucide-react'; // REMOVED: Home, Paintbrush
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Owner Supervised Painting for High-End Homeowners | Guaranteed Quality',
    description: 'Premium exterior and interior painting services for homeowners. Benefit from daily owner supervision, guaranteed workmanship, and meticulous site cleanliness. Gauteng\'s trusted residential contractor.',
    path: '/solutions/for-homeowners',
});

// --- CORE PAIN POINTS DATA ---
const HomeownerAssurances = [
    {
        title: "Daily Owner Supervision",
        description: "The quality of your home is too important to leave to chance. A director is on-site daily to manage the project and quality control.",
        icon: Users,
        accentColor: "border-tertiary",
    },
    {
        title: "Meticulous Cleanliness",
        description: "We treat your home with the utmost respect. Dust control, masking, and daily site cleanup are non-negotiable parts of our service.",
        icon: Clock,
        accentColor: "border-secondary",
    },
    {
        title: "Guaranteed Workmanship",
        description: "We stand by our work. All projects come with a guaranteed warranty, backed by manufacturer-approved application methods.",
        icon: CheckSquare,
        accentColor: "border-tertiary",
    },
    {
        title: "Complete Property Protection",
        description: "Before painting, we fix leaks, cracks, and damp, providing a full structural envelope that protects your investment long-term.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function HomeownerSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            <TrustAndCtaStrip />
        </div>
    );
}