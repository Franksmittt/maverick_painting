// src/components/project-showcase-module.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectShowcaseImageCard } from './project-showcase-image-card'; // <-- NEW IMPORT
import { featuredProjects } from '@/data/projects';
export function ProjectShowcaseModule() {
    return (
        <section className="section-flow bg-primary">
            <div className="page-container">
                
                {/* --- HEADER: Bespoke, Magazine-Style Heading --- */}
                <header className="mx-auto mb-12 max-w-4xl text-center text-white md:mb-14">
                    {/* Subtext: Highlighting Local Authority (Local SEO Strategy) */}
                    <p className="text-xl font-medium uppercase tracking-wider text-secondary mb-2">
                        Verifiable Proof: Our Latest High-Value Projects
                    </p>
                    
                    {/* Headline: Uses large, confident typography */}
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Built for Gauteng&apos;s Premier Assets.
                    </h2>
                    <p className="text-lg font-light mt-4 text-gray-400">
                        Showcasing work in Midrand, Pretoria East, North Riding, and Benoni.
                    </p>
                </header>

                {/* --- PROJECT GRID: Elegant List with Image Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <ProjectShowcaseImageCard
                            key={project.slug}
                            name={project.name}
                            location={project.location}
                            href={`/projects/${project.slug}`}
                            imageSrc={project.image}
                        />
                    ))}
                </div>

                {/* --- FINAL CTA BUTTON (View All Projects) --- */}
                <div className="mt-12 text-center md:mt-14">
                    <Button asChild 
                        className="text-lg font-bold h-12 bg-secondary hover:bg-[#4AD5E2] text-white shadow-lg"
                    >
                        <Link href="/projects">
                            View All Projects and Portfolio
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}