/** Primary navigation — shared by header and mobile nav for crawl consistency. */

export type NavItem = { name: string; href: string };

export const PRIMARY_NAV: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact" },
];

export const SOLUTION_NAV: NavItem[] = [
  { name: "Body corporates", href: "/solutions/for-body-corporates" },
  { name: "Developers", href: "/solutions/for-developers" },
  { name: "Homeowners", href: "/solutions/for-homeowners" },
];
