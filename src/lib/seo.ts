export type SocialProfiles = {
  linkedin: string;
  facebook: string;
  instagram?: string;
  youtube?: string;
};

export type SiteAddress = {
  street: string;
  suburb: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
};

export const siteConfig = {
  name: "Maverick Painting Contractors",
  shortName: "Maverick Painting",
  legalName: "Maverick Painting Contractors",
  slogan: "Owner supervised structural repairs, coatings & waterproofing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maverickpainting.co.za",
  defaultOgImage: "/images/munyaka-midrand.jpg",
  description:
    "Owner supervised painting contractors in Gauteng specialising in structural repairs, waterproofing, industrial coatings and independent QA for body corporates, developers and high-end homeowners.",
  keywords: [
    "painting contractors gauteng",
    "commercial painting johannesburg",
    "industrial coatings south africa",
    "body corporate waterproofing",
    "structural repairs maverick painting",
    "rope access painters gauteng",
    "independent qa coating inspection",
    "roof painting contractors",
    "interior painting services",
    "dustless sanding",
    "low-VOC paints",
    "tile roof restoration",
    "heat-reflective roof paint",
    "parking garage painting",
    "road marking contractors",
    "warehouse painting",
    "after-hours painting",
    "concrete spalling repair",
    "rising damp treatment",
    "peeling paint repair",
    "parapet wall waterproofing",
    "balcony sealing",
    "concrete cancer repair",
  ],
  email: "maverickpainters1984@gmail.com",
  phoneNumber: "+27 82 627 7082",
  whatsapp: "https://wa.me/27826277082",
  twitterHandle: "@maverickpainting",
  social: {
    linkedin: "https://www.linkedin.com/company/maverickpainting",
    facebook: "https://www.facebook.com/maverickpaintingcontractors",
    instagram: "https://www.instagram.com/maverickpainting",
  } satisfies SocialProfiles,
  address: {
    street: "15 Highveld Techno Park",
    suburb: "Centurion",
    city: "Pretoria",
    region: "Gauteng",
    postalCode: "0157",
    country: "ZA",
    latitude: -25.89052,
    longitude: 28.18904,
  } satisfies SiteAddress,
  serviceAreas: [
    "Gauteng",
    "Johannesburg",
    "Pretoria",
    "Midrand",
    "Centurion",
    "Sandton",
    "Benoni",
    "Boksburg",
    "Kempton Park",
    "Germiston",
    "Isando",
    "Roodepoort",
    "Krugersdorp",
    "Alberton",
    "East Rand",
    "West Rand",
    "South Rand",
  ],
  /**
   * Legacy list — sitemap is generated from `src/lib/sitemap-builder.ts` (single source of truth).
   * Kept for backwards compatibility if referenced elsewhere.
   */
  primaryPages: [] as string[],
};

export const defaultChangeFrequency = "monthly";

