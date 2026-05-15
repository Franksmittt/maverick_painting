// src/app/painting/stucco-wall-coatings/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Home, Shield, Droplet, Wrench, Sun, Building } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Stucco & Specialized Wall Coatings | Premium Masonry Cladding Gauteng',
    description: 'Expert stucco application and specialized wall coating services. Monolithic masonry cladding systems with vapor-permeable, fire-resistant finishes. Traditional 3-coat systems and restoration services. Gauteng contractors.',
    path: '/painting/stucco-wall-coatings',
});

// --- KEY SERVICES DATA ---
const StuccoServices = [
    {
        title: "Traditional 3-Coat System",
        description: "Superior durability with lath reinforcement, scratch coat, brown coat, and decorative finish. Creates a monolithic, rock-hard shell that becomes an extension of your building's foundation.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Re-Dash & Restoration",
        description: "Renew faded, stained, or hairline-cracked surfaces with acrylic-modified finish coats. Restores waterproofing and provides fresh color without full rebuild costs.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "Vapor-Permeable Finishes",
        description: "Water-resistant yet breathable coatings that shed rain while allowing internal moisture vapor to escape. Prevents rot and mold buildup within wall cavities.",
        icon: Droplet,
        accentColor: "border-tertiary",
    },
    {
        title: "Elastomeric Crack-Defense",
        description: "High-build, rubberized coatings that stretch up to 300% to bridge hairline fractures as buildings settle. Maintains waterproofing seal integrity over time.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- TEXTURE OPTIONS DATA ---
const TextureOptions = [
    {
        title: "Float Finish (Sand Finish)",
        description: "Fine, gritty texture popular for modern, minimalist, and contemporary homes. Provides a subtle, elegant appearance.",
    },
    {
        title: "Spanish Lace / Skip Trowel",
        description: "Classic, elegant finish with flattened high spots and rough low spots. Excellent for hiding dirt and minor imperfections.",
    },
    {
        title: "Dash Finish (Roughcast)",
        description: "Gravel-like, bumpy texture sprayed onto walls. Most durable finish, highly effective at masking uneven brickwork.",
    },
    {
        title: "Smooth / Santa Barbara",
        description: "Ultra-smooth, almost polished concrete look. Requires highest skill level to apply. Premium finish option.",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function StuccoWallCoatingsPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            <TrustAndCtaStrip />
        </div>
    );
}

