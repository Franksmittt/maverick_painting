"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery-images";
import { cn } from "@/lib/utils";

export function GalleryGrid({ images }: { images: readonly GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, index) => {
          const cardClass = cn(
            "group relative block aspect-[4/5] overflow-hidden rounded-lg border border-[#2a2e33] bg-[#111111]",
            "transition duration-300 hover:border-secondary/50 hover:shadow-[0_0_24px_rgba(90,213,226,0.12)]",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
          );
          const inner = (
            <>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
              {image.projectHref ? (
                <span className="pointer-events-none absolute bottom-2 left-2 right-2 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-secondary opacity-0 transition group-hover:opacity-100">
                  View case study →
                </span>
              ) : null}
            </>
          );
          if (image.projectHref) {
            return (
              <Link key={image.src} href={image.projectHref} className={cardClass} aria-label={`Case study: ${image.alt}`}>
                {inner}
              </Link>
            );
          }
          return (
            <button
              key={image.src}
              type="button"
              className={cardClass}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${image.alt}`}
            >
              {inner}
            </button>
          );
        })}
      </div>
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged gallery image"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-24 rounded-full border border-white/20 bg-[#111111] p-2 text-white transition hover:border-secondary"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#111111]/90 px-4 py-3 text-2xl text-white hover:border-secondary"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#111111]/90 px-4 py-3 text-2xl text-white hover:border-secondary"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>
          <div
            className="relative h-[min(80vh,900px)] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}

