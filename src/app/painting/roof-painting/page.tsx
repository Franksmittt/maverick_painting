// src/app/painting/roof-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { TrustAndCtaStrip } from '@/components/trust-and-cta-strip';
import { Home, Sun, Droplet, Shield } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Roof Painting & Tile Restoration Contractors | Heat-Reflective Coatings Gauteng',
    description: 'Expert roof painting and tile restoration services. We use heat-reflective roof paint, airless roof spray systems, and weatherproof coatings for tile, IBR, and flat concrete roofs. Starting from R60/m².',
    path: '/painting/roof-painting',
});

// --- KEY SERVICES DATA ---
const RoofServices = [
    {
        title: "Tile Roof Restoration",
        description: "Complete tile roof painting and restoration using breathable, UV-stable coatings. We repair cracked tiles, replace damaged sections, and apply weatherproof finishes that last 10+ years.",
        icon: Home,
        accentColor: "border-tertiary",
    },
    {
        title: "Heat-Reflective Roof Paint",
        description: "Reduce interior temperatures by up to 8°C with our specialized heat-reflective roof coatings. Ideal for Gauteng's hot summers, these coatings extend roof life and lower cooling costs.",
        icon: Sun,
        accentColor: "border-secondary",
    },
    {
        title: "Airless Roof Spray",
        description: "Fast, efficient roof painting using professional airless spray systems. We cover large areas quickly while maintaining consistent film thickness and complete coverage on complex roof geometries.",
        icon: Droplet,
        accentColor: "border-tertiary",
    },
    {
        title: "IBR & Corrugated Roof Coating",
        description: "Specialized coatings for IBR and corrugated metal roofs. We treat rust, apply zinc-rich primers, and finish with durable topcoats that prevent corrosion and extend roof lifespan.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function RoofPaintingPage() {
    const baseUrl = siteConfig.url.replace(/\/$/, "");
    
    // Service with Offer schema for pricing rich snippets
    const serviceWithOfferSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Professional Roof Painting & Tile Restoration Services",
        description: "Expert roof painting and tile restoration services using heat-reflective roof paint, airless roof spray systems, and weatherproof coatings.",
        provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: baseUrl,
        },
        areaServed: siteConfig.serviceAreas,
        serviceType: "Roof Painting & Restoration",
        offers: [
            {
                "@type": "Offer",
                name: "Standard Tile Roof Painting",
                priceCurrency: "ZAR",
                price: "60",
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "60",
                    priceCurrency: "ZAR",
                    unitCode: "MTK",
                    unitText: "per square meter",
                },
                availability: "https://schema.org/InStock",
                url: `${baseUrl}/painting/roof-painting`,
            },
            {
                "@type": "Offer",
                name: "Premium Heat-Reflective Roof System",
                priceCurrency: "ZAR",
                price: "100",
                priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: "100",
                    priceCurrency: "ZAR",
                    unitCode: "MTK",
                    unitText: "per square meter",
                },
                availability: "https://schema.org/InStock",
                url: `${baseUrl}/painting/roof-painting`,
            },
        ],
    };

    return (
        <div className="bg-primary pt-24 text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceWithOfferSchema).replace(/</g, '\\u003c'),
                }}
            />
            
            <Breadcrumbs 
                items={[
                    { label: 'Services', href: '/services' },
                    { label: 'Painting Services', href: '/painting-services' },
                    { label: 'Roof Painting', href: '/painting/roof-painting' },
                ]}
            />
            
            <TrustAndCtaStrip />
        </div>
    );
}

