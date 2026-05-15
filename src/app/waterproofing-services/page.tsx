// src/app/waterproofing-services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Shield, Droplet, Layers, FileText } from 'lucide-react'; // REMOVED: Phone
import { buildPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HubSpokeSection } from '@/components/hub-spoke-section';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Flat Roof & Balcony Waterproofing Services | Guaranteed Membrane Systems',
    description: 'Specialist waterproofing contractors in Gauteng. We use guaranteed liquid-applied and torch-on membrane systems to permanently solve flat roof, balcony, and basement water ingress. Independent QA verified.',
    path: '/waterproofing-services',
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const WaterproofingSolutions = [
    {
        title: "Torch-On Membrane Systems",
        description: "High-performance bituminous felt membranes, torch-applied by certified staff for flat concrete roofs and exposed areas requiring exceptional durability.",
        icon: FileText,
        accentColor: "border-secondary",
    },
    {
        title: "Liquid Applied Membranes (LAM)",
        description: "Seamless, cold-applied polyurethane and acrylic systems, ideal for complex areas like parapet walls, flashings, and under-tile balcony applications.",
        icon: Droplet,
        accentColor: "border-tertiary",
    },
    {
        title: "Basement & Below-Ground Waterproofing",
        description: "Specialized slurry and crystalline systems applied to negative-side structures to stop rising damp and water ingress in basements and lift pits.",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        title: "Under-Tile Balcony Remediation",
        description: "Fixing leaking balconies without destructive tile removal, using targeted injection and re-grouting systems, providing a less disruptive and cost-effective fix.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function WaterproofingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            <Breadcrumbs 
                items={[
                    { label: 'Services', href: '/services' },
                    { label: 'Waterproofing Services', href: '/waterproofing-services' },
                ]}
            />

            {/* --- MODULE 1: WATERPROOFING HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Water Ingress Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Guaranteed Waterproofing. Eliminate Water Ingress Risk.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We provide **co-signed guarantees** on both our workmanship and the manufacturer&apos;s product, ensuring your high-value asset is protected from the single greatest cause of structural damage: water. Learn more about our <Link href="/blog/waterproofing" className="text-secondary hover:text-tertiary underline">waterproofing guides</Link> or explore our <Link href="/damp-proofing-services" className="text-secondary hover:text-tertiary underline">damp proofing services</Link>.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Guaranteed Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: SYSTEM BREAKDOWN (Technical Grid) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Certified Waterproofing Systems
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our team is manufacturer-approved to apply both specialized liquid membranes and traditional torch-on systems.
                        </p>
                    </header>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {WaterproofingSolutions.map((system, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${system.accentColor}`}>
                                <system.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {system.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {system.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <HubSpokeSection
                title="Dedicated waterproofing service pages"
                intro="Thin, catch-all waterproofing pages dilute intent for high-value queries like flat slab renewals, under-tile balconies, and basement tanking. Maverick’s spoke pages unpack methodology, compliance context, and BC documentation separately."
                links={[
                    {
                        href: "/waterproofing/flat-concrete-roofs",
                        label: "Flat concrete roof waterproofing",
                        description:
                            "Torch-on vs liquid trade-offs, drainage and ponding risk, UV protection, hybrid programmes, and manufacturer-backed maintenance calendars.",
                    },
                    {
                        href: "/waterproofing/leaking-balconies",
                        label: "Leaking balcony remediation",
                        description:
                            "Sectional-title documentation, low-disruption options, exclusive-use interfaces, and coordination with structural arris repairs.",
                    },
                    {
                        href: "/waterproofing/basement-tanking",
                        label: "Basement tanking & sub-structure waterproofing",
                        description:
                            "Negative- vs positive-side logic, active leak management, lift pits, and parking slabs with hydrostatic pressure risk.",
                    },
                ]}
            />

            <section className="border-t border-white/5 bg-primary px-4 py-20">
                <div className="mx-auto max-w-4xl space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
                    <h2 className="text-3xl font-extrabold uppercase text-white">Waterproofing as a portfolio risk discipline</h2>
                    <p>
                        Water ingress is the fastest way to destroy coating warranties, accelerate concrete carbonation, and
                        force unplanned special levies. Maverick treats waterproofing as{" "}
                        <strong className="text-white">systems engineering</strong>: preparation, detailing at penetrations,
                        compatible protection courses, and realistic maintenance, not a single-layer miracle product.
                    </p>
                    <p>
                        Our teams are comfortable working alongside{" "}
                        <Link href="/structural-repairs" className="text-secondary hover:underline">
                            structural remedial contractors
                        </Link>{" "}
                        when spalling and membrane renewal must be sequenced, and we speak the language of{" "}
                        <Link href="/painting/body-corporate" className="text-secondary hover:underline">
                            sectional-title maintenance plans
                        </Link>{" "}
                        where trustees need transparent scope boundaries for insurers and attorneys.
                    </p>
                    <p>
                        Explore our technical blog cluster on{" "}
                        <Link href="/blog/waterproofing/liquid-vs-torch-on" className="text-secondary hover:underline">
                            liquid vs torch-on membranes
                        </Link>{" "}
                        and{" "}
                        <Link href="/blog/waterproofing/leaking-balcony-fixes" className="text-secondary hover:underline">
                            low-disruption balcony repairs
                        </Link>{" "}
                       , then invite us to translate those principles into a site-specific specification for your asset.
                    </p>
                </div>
            </section>

            {/* --- MODULE 3: THE QA PROCESS (Reusing Trust Module) --- */}
            <QaProcessModule />

            {/* --- MODULE 4: ACCREDITATIONS (Visual Trust) --- */}
            <TrustAndCtaStrip />

            {/* --- MODULE 5: FINAL CTA STRIP (Conversion Funnel) --- */}
        </div>
    );
}