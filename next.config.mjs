/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/painting/body-corporate-painting",
                destination: "/painting/body-corporate",
                permanent: true,
            },
            {
                source: "/painting/industrial-painting",
                destination: "/painting/industrial",
                permanent: true,
            },
            {
                source: "/coatings/hygienic-food-grade-flooring",
                destination: "/specialized-coatings/hygienic-food-grade",
                permanent: true,
            },
            {
                source: "/basement-tanking",
                destination: "/waterproofing/basement-tanking",
                permanent: true,
            },
            {
                source: "/expansion-joints",
                destination: "/structural-repairs/expansion-joint-sealing",
                permanent: true,
            },
            {
                source: "/parking-garage",
                destination: "/painting/parking-garage-painting",
                permanent: true,
            },
            {
                source: "/sans-line-marking",
                destination: "/painting/road-marking",
                permanent: true,
            },
            {
                source: "/crack-injection",
                destination: "/structural-repairs/crack-injection",
                permanent: true,
            },
            {
                source: "/waterproofing",
                destination: "/waterproofing-services",
                permanent: true,
            },
            {
                source: "/painting",
                destination: "/painting-services",
                permanent: true,
            },
            {
                source: "/coatings",
                destination: "/specialized-coatings",
                permanent: true,
            },
            {
                source: "/damp-proofing",
                destination: "/damp-proofing-services",
                permanent: true,
            },
            {
                source: "/line-marking",
                destination: "/painting/road-marking",
                permanent: true,
            },
            {
                source: "/rope-access",
                destination: "/access-solutions/rope-access-painting",
                permanent: true,
            },
            {
                source: "/body-corporate-painting",
                destination: "/painting/body-corporate",
                permanent: true,
            },
            {
                source: "/industrial-painting",
                destination: "/painting/industrial",
                permanent: true,
            },
            {
                source: "/flat-roof-waterproofing",
                destination: "/waterproofing/flat-concrete-roofs",
                permanent: true,
            },
            {
                source: "/leaking-balconies",
                destination: "/waterproofing/leaking-balconies",
                permanent: true,
            },
            {
                source: "/concrete-spalling",
                destination: "/structural-repairs/concrete-spalling",
                permanent: true,
            },
            {
                source: "/rising-damp",
                destination: "/damp-proofing/rising-damp-treatment",
                permanent: true,
            },
            {
                source: "/epoxy-flooring",
                destination: "/specialized-coatings/industrial-epoxy-flooring",
                permanent: true,
            },
        ];
    },
    // SEO Checklist: React Strict Mode for better development experience and error detection
    reactStrictMode: true,
    
    // GSC Optimization: Trailing slash consistency for canonical URLs
    trailingSlash: false,
    
    // FIX: Removing the problematic experimental block entirely to prevent the "Cannot find module 'critters'" build failure
    // The previous flags (optimizeCss: true) introduced an unstable, complex dependency.
    experimental: {
        // Keeping a blank experimental block is safest for build stability.
    },
};

export default nextConfig;