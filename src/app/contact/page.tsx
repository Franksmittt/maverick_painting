import { withOgImage } from "@/lib/page-metadata";
import { ContactPageContent } from "@/components/contact/contact-page-content";

export const metadata = withOgImage({
  title: "Get a Professional Painting, Structural Repair Quote | Contact Maverick",
  description:
    "Contact Maverick Painting for a free site assessment and comprehensive quote. Specialized solutions for Body Corporates, Developers, and high-value properties in Gauteng, South Africa.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
