// src/components/breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { siteConfig } from '@/lib/seo';

export type BreadcrumbItem = {
  label: string;
  href: string;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  
  // BreadcrumbList schema for SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-900 border-b border-gray-800">
        <div className="page-container py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                href="/" 
                className="text-gray-400 hover:text-secondary transition-colors flex items-center"
                aria-label="Home"
              >
                <Home className="w-4 h-4" />
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-600 mx-2" />
                {index === items.length - 1 ? (
                  <span className="text-white font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
