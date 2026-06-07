import Image from "next/image";
import type { ServicePageImage } from "@/data/service-page-images";

type ServiceHubGalleryProps = {
  headingId: string;
  title: string;
  subtitle: string;
  images: readonly ServicePageImage[];
};

export function ServiceHubGallery({ headingId, title, subtitle, images }: ServiceHubGalleryProps) {
  return (
    <section className="bg-[#080808] px-4 py-14 md:py-20" aria-labelledby={headingId}>
      <div className="page-container">
        <header className="mb-8 max-w-3xl md:mb-10">
          <p className="type-eyebrow mb-3 text-secondary">Project imagery</p>
          <h2 id={headingId} className="type-h2">
            {title}
          </h2>
          <p className="type-lead mt-4 max-w-2xl text-zinc-500">{subtitle}</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                <span>Image {String(index + 1).padStart(2, "0")}</span>
                <span className="text-secondary">Service photo</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
