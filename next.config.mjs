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