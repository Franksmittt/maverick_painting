/** Shared footer copy and navigation (single source for all layout variants). */

export const FOOTER_TAGLINE =
  "The trusted asset maintenance partner for high-value properties in Gauteng. We solve problems from the structure up.";

export const FOOTER_LOGO_PATH =
  "m423.5,40h-0.5v-8.5c0-17.369-14.131-31.5-31.5-31.5h-288c-17.369,0-31.5,14.131-31.5,31.5v8.5h-0.5c-12.958,0-23.5,10.542-23.5,23.5v8.5h-0.5c-17.369,0-31.5,14.131-31.5,31.5v64c0,17.369 14.131,31.5 31.5,31.5h176c9.098,0 16.5,7.402 16.5,16.5v16.5h-8.5c-12.958,0-23.5,10.542-23.5,23.5v168c0,21.78 17.72,39.5 39.5,39.5s39.5-17.72 39.5-39.5v-168c0-12.958-10.542-23.5-23.5-23.5h-8.5v-16.5c0-17.369-14.131-31.5-31.5-31.5h-176c-9.098,0-16.5-7.402-16.5-16.5v-64c0-9.098 7.402-16.5 16.5-16.5h0.5v8.5c0,12.958 10.542,23.5 23.5,23.5h0.5v8.5c0,17.369 14.131,31.5 31.5,31.5h288c17.369,0 31.5-14.131 31.5-31.5v-8.5h0.5c12.958,0 23.5-10.542 23.5-23.5v-32c0-12.958-10.542-23.5-23.5-23.5zm-176,408c-13.509,0-24.5-10.99-24.5-24.5v-144.5h49v144.5c0,13.51-10.991,24.5-24.5,24.5zm24.5-192.5v8.5h-49v-8.5c0-4.687 3.813-8.5 8.5-8.5h32c4.687,0 8.5,3.813 8.5,8.5zm-200.5-151.5c-4.687,0-8.5-3.813-8.5-8.5v-32c0-4.687 3.813-8.5 8.5-8.5h0.5v49h-0.5zm336.5,23.5c0,9.098-7.402,16.5-16.5,16.5h-288c-9.098,0-16.5-7.402-16.5-16.5v-96c0-9.098 7.402-16.5 16.5-16.5h288c9.098,0 16.5,7.402 16.5,16.5v96zm24-32c0,4.687-3.813,8.5-8.5,8.5h-0.5v-49h0.5c4.687,0 8.5,3.813 8.5,8.5v32zM247.5,416c-1.98,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.319-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.4 3.33,2.2 5.3,2.2 1.97,0 3.91-0.8 5.3-2.2 1.4-1.4 2.2-3.33 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2z";

export const FOOTER_QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/projects", label: "Portfolio" },
  { href: "/accreditations", label: "Accreditations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_SERVICE_LINKS = [
  { href: "/waterproofing-services", label: "Waterproofing" },
  { href: "/structural-repairs", label: "Structural repairs" },
  { href: "/specialized-coatings/hygienic-food-grade", label: "Hygienic coatings" },
  { href: "/access-solutions/rope-access-painting", label: "Rope access" },
  { href: "/painting/body-corporate", label: "Body corporate painting" },
  { href: "/painting/industrial", label: "Industrial" },
  { href: "/painting/stucco-wall-coatings", label: "Stucco & wall systems" },
] as const;

export const FOOTER_PHONE = { tel: "tel:0826277082", display: "082 627 7082", label: "Lawrence Brooks" };
export const FOOTER_EMAIL = {
  mailto: "mailto:maverickpainters1984@gmail.com",
  display: "maverickpainters1984@gmail.com",
  label: "Quotes",
};

export const FOOTER_SOCIAL = [
  {
    href: "https://www.facebook.com/people/Maverick-Painting/61586004524227/",
    label: "Facebook",
    key: "fb",
  },
  { href: "https://www.linkedin.com/company/maverickpainting", label: "LinkedIn", key: "in" },
  { href: "https://wa.me/27826277082", label: "WhatsApp", key: "wa" },
] as const;
