import { LegalPageLayout } from "@/components/static/legal-page-layout";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | Data Collection and Use | Maverick Painting Contractors",
  description:
    "Review the official Privacy Policy for Maverick Painting, detailing how user data is collected, used, and protected.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      breadcrumbs={[{ label: "Privacy policy", href: "/privacy" }]}
      title="Privacy policy"
      updated="November 9, 2025"
    >
      <section>
        <h2>1. Information we collect</h2>
        <p>
          We collect personal identification information only when you voluntarily provide it through our contact
          forms, quote request forms, or direct email correspondence. This typically includes your name, email
          address, phone number, and details regarding your specific project or property maintenance needs.
        </p>
        <p>
          We also collect non-personal information automatically when you visit our website, such as your IP
          address, browser type, operating system, and the pages you view. This is used for traffic analysis and
          site improvement.
        </p>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>To respond to your inquiries and schedule on-site assessments for quotations.</li>
          <li>To improve our website functionality and user experience.</li>
          <li>To comply with legal obligations.</li>
          <li>We do not sell, rent, or lease our customer lists to third parties.</li>
        </ul>
      </section>

      <section>
        <h2>3. Data security and cookies</h2>
        <p>
          We adopt appropriate data collection, storage, and processing practices and security measures to protect
          against unauthorized access, alteration, disclosure, or destruction of your personal information.
        </p>
        <p>
          Our website uses cookies to enhance user experience. You may choose to set your web browser to refuse
          cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may
          not function properly.
        </p>
      </section>
    </LegalPageLayout>
  );
}
