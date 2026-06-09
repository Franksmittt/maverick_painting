import { siteConfig } from "@/lib/seo";

/** Single source of truth for name, address, phone — footer, contact, and schema. */

export const nap = {
  businessName: siteConfig.name,
  shortName: siteConfig.shortName,
  contactName: "Lawrence Brooks",
  phone: {
    e164: siteConfig.phoneNumber,
    tel: `tel:${siteConfig.phoneNumber.replace(/\s/g, "")}`,
    display: "082 627 7082",
  },
  email: {
    address: siteConfig.email,
    mailto: `mailto:${siteConfig.email}`,
    display: siteConfig.email,
  },
  address: {
    street: siteConfig.address.street,
    suburb: siteConfig.address.suburb,
    city: siteConfig.address.city,
    region: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    country: siteConfig.address.country,
    /** Single-line display for footer and contact. */
    display: `${siteConfig.address.street}, ${siteConfig.address.suburb}, ${siteConfig.address.city}, ${siteConfig.address.postalCode}`,
    mapsQuery: encodeURIComponent(
      `${siteConfig.address.street}, ${siteConfig.address.suburb}, ${siteConfig.address.city}, South Africa`,
    ),
  },
  whatsapp: siteConfig.whatsapp,
  social: siteConfig.social,
} as const;
