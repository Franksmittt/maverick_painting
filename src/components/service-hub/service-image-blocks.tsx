import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ServicePageImage } from "@/data/service-page-images";

/** Uniform 4:3 frame used across all service page photography. */
export function ServiceImageFrame({
  image,
  className,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 33vw",
}: {
  image: ServicePageImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "group overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-[0_12px_32px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </figure>
  );
}

export function ServiceImageTriptych({ images }: { images: readonly ServicePageImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
      {images.map((image) => (
        <ServiceImageFrame
          key={image.src}
          image={image}
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      ))}
    </div>
  );
}

export function ServiceImagePair({ images }: { images: readonly ServicePageImage[] }) {
  if (images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
      {images.map((image) => (
        <ServiceImageFrame
          key={image.src}
          image={image}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      ))}
    </div>
  );
}
