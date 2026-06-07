import type { ServiceDeepFaq } from "@/lib/service-deep-types";

const FAQ_DISPLAY_COUNT = 6;

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
  const displayItems = items.slice(0, FAQ_DISPLAY_COUNT);
  if (displayItems.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${schemaPath}#faq`,
    mainEntity: displayItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section-surface section-pad" aria-labelledby={headingId}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="page-container">
        <h2 id={headingId} className="type-h2 mb-4 text-white">
          {title}
        </h2>
        <p className="type-lead mb-10 max-w-3xl text-zinc-500 md:mb-14">{subtitle}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {displayItems.map((item) => (
            <article
              key={item.question}
              className="rounded border border-white/5 bg-[#1a1c1e]/40 p-8 transition hover:-translate-y-1 hover:border-secondary hover:bg-[#1a1c1e]/80"
            >
              <h3 className="mb-4 text-lg font-bold leading-snug text-white">{item.question}</h3>
              <p className="type-body m-0 text-zinc-400">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
