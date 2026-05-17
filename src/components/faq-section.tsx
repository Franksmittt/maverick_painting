import type { ServiceDeepFaq } from "@/lib/service-deep-types";

type FaqSectionProps = {
  headingId: string;
  title?: string;
  subtitle?: string;
  items: readonly ServiceDeepFaq[];
  schemaPath: string;
};

export function FaqSection({
  headingId,
  title = "Frequently asked questions",
  subtitle = "Technical answers for procurement teams, trustees, and facility managers in Gauteng.",
  items,
  schemaPath,
}: FaqSectionProps) {
  if (items.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="border-t border-zinc-800 bg-[#0a0a0a] py-20" aria-labelledby={headingId}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-4xl px-4">
        <h2 id={headingId} className="type-h2 mb-3 text-white">
          {title}
        </h2>
        <p className="type-body mb-10 text-zinc-400">{subtitle}</p>

        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-lg border border-zinc-800 bg-zinc-900/40 open:border-secondary/40"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-zinc-100 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-secondary transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-zinc-800/80 px-5 pb-5 pt-3">
                <p className="type-body text-zinc-300">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
