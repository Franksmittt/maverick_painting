import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { GALLERY_IMAGES } from "@/data/gallery-images";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Project Gallery | Maverick Painting Gauteng",
  description:
    "Browse recent Maverick Painting projects across Gauteng, commercial, industrial, body corporate, waterproofing, and structural repair work.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="bg-[#080808] pt-24 text-white">
      <section className="section-surface border-b border-[#2a2e33] py-16 md:py-24">
        <div className="page-container">
          <p className="type-eyebrow mb-3 text-secondary">On-site work</p>
          <h1 className="type-display max-w-3xl">Project gallery</h1>
          <p className="type-lead mt-4 max-w-2xl text-white/70">
            A selection of recent painting, waterproofing, and structural remediation projects across
            Gauteng, body corporates, industrial plants, logistics yards, and sectional-title assets. Tap any
            image to view full size or explore linked case studies where available.
          </p>
          <p className="mt-3 text-sm text-white/50">
            {GALLERY_IMAGES.length} photos ·{" "}
            <a href="/projects" className="text-secondary hover:underline">
              View project case studies
            </a>
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="page-container">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>

      <CtaFinalStrip />
    </div>
  );
}

