import type { Metadata } from "next";
import { ClientServiceReviewForm } from "@/components/client-review/client-service-review-form";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Review",
  description:
    "Internal client review form for Maverick Painting service offerings. Not for public indexing.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/client-service-review`,
  },
};

export default function ClientServiceReviewPage() {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased">
      <section className="section-surface section-pad !pt-8">
        <div className="page-container max-w-4xl">
          <header className="mb-10 space-y-4">
            <p className="type-phase">Internal review</p>
            <h1 className="type-h1 uppercase text-white">Maverick service review</h1>
            <p className="type-lead max-w-2xl text-zinc-400">
              Please mark which services should stay on the website, choose 3 core services to focus
              on, and add anything missing from the list. When finished, export the file and email it
              back.
            </p>
          </header>

          <ClientServiceReviewForm />
        </div>
      </section>
    </div>
  );
}
