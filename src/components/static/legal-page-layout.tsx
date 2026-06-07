import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import type { BreadcrumbItem } from "@/components/breadcrumbs";
import { TrustAndCtaStrip } from "@/components/trust-and-cta-strip";

type LegalPageLayoutProps = {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPageLayout({ breadcrumbs, title, updated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-[#080808] pt-24 text-zinc-300 antialiased min-h-screen">
      <Breadcrumbs items={breadcrumbs} />

      <div className="page-container py-12 md:py-16">
        <header className="mb-12 max-w-4xl border-b border-[#2a2e33] pb-6">
          <FileText className="mb-3 h-10 w-10 text-secondary" aria-hidden />
          <h1 className="type-h1 mb-3 uppercase">{title}</h1>
          <p className="text-lg text-zinc-500">Last updated: {updated}</p>
        </header>

        <div className="max-w-4xl space-y-8 text-base leading-relaxed [&_h2]:type-h3 [&_h2]:mb-4 [&_h2]:text-white [&_p]:type-body">
          {children}
        </div>
      </div>

      <TrustAndCtaStrip />
    </div>
  );
}
