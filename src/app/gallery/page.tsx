import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceImageTriptych } from "@/components/service-hub/service-image-blocks";
import { GALLERY_IMAGES } from "@/data/gallery-images";
import { STATIC_PAGE_VISUALS } from "@/data/static-pages-content";
import { withOgImage } from "@/lib/page-metadata";

export const metadata = withOgImage({
  title: "Project Gallery | Maverick Painting Gauteng",
  description:
    "Browse recent Maverick Painting projects across Gauteng, commercial, industrial, body corporate, waterproofing, and structural repair work.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <Breadcrumbs items={[{ label: "Gallery", href: "/gallery" }]} />

      <section className="section-surface section-pad !pt-8">
        <div className="page-container">
          <p className="type-eyebrow mb-3">On-site work</p>
          <h1 className="type-display max-w-3xl">Project gallery</h1>
          <p className="type-lead mt-4 max-w-2xl text-zinc-400">
            A selection of recent painting, waterproofing, and structural remediation projects across
            Gauteng, body corporates, industrial plants, logistics yards, and sectional-title assets. Tap any
            image to view full size or explore linked case studies where available.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            {GALLERY_IMAGES.length} photos ·{" "}
            <a href="/projects" className="text-secondary hover:underline">
              View project case studies
            </a>
          </p>
        </div>
      </section>

      <section className="section-flow border-b border-[#2a2e33]">
        <div className="page-container">
          <header className="mb-6 max-w-2xl">
            <p className="type-eyebrow mb-2">Featured programmes</p>
            <h2 className="type-h3 text-xl sm:text-2xl">Recent Gauteng case studies</h2>
          </header>
          <ServiceImageTriptych images={STATIC_PAGE_VISUALS.projects} />
        </div>
      </section>

      <section className="section-flow">
        <div className="page-container">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>

      <TrustAndCtaStrip />
    </div>
  );
}
