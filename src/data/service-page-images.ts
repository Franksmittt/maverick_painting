export type ServicePageImage = {
  src: string;
  alt: string;
};

export const MIN_SERVICE_PAGE_IMAGES = 6;

const SERVICE_IMAGE_PLACEHOLDERS: readonly ServicePageImage[] = [
  { src: "/images/placeholders/service-image-01.svg", alt: "Placeholder service image slot 1" },
  { src: "/images/placeholders/service-image-02.svg", alt: "Placeholder service image slot 2" },
  { src: "/images/placeholders/service-image-03.svg", alt: "Placeholder service image slot 3" },
  { src: "/images/placeholders/service-image-04.svg", alt: "Placeholder service image slot 4" },
  { src: "/images/placeholders/service-image-05.svg", alt: "Placeholder service image slot 5" },
  { src: "/images/placeholders/service-image-06.svg", alt: "Placeholder service image slot 6" },
];

function serviceLabelFromPath(path: string): string {
  const slug = path.split("/").filter(Boolean).pop() ?? "service";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function dedupeImages(images: readonly ServicePageImage[]): ServicePageImage[] {
  const seen = new Set<string>();
  const unique: ServicePageImage[] = [];

  for (const image of images) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    unique.push(image);
  }

  return unique;
}

export function getServicePageImages(
  path: string,
  seedImages: readonly ServicePageImage[] = [],
): ServicePageImage[] {
  const serviceLabel = serviceLabelFromPath(path);
  const placeholders = SERVICE_IMAGE_PLACEHOLDERS.map((image, index) => ({
    src: image.src,
    alt: `${serviceLabel} project image placeholder ${index + 1} - replace with completed work photography`,
  }));

  return dedupeImages([...seedImages, ...placeholders]).slice(0, MIN_SERVICE_PAGE_IMAGES);
}
