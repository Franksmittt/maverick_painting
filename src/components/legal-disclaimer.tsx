export type LegalDisclaimerVariant = "stsma" | "haccp" | "structural" | "sans-waterproofing";

const COPY: Record<LegalDisclaimerVariant, { title: string; body: string }> = {
  stsma: {
    title: "STSMA & sectional title notice",
    body:
      "Maverick Painting supplies technical surveys, scopes, and QA documentation to support Maintenance, Repair and Replacement Plans (MRRP) under the Sectional Titles Schemes Management Act (STSMA). We do not provide legal advice, draft Prescribed Management Rules, or adjudicate owner versus body corporate liability. Managing agents and attorneys remain responsible for scheme governance and CSOS matters.",
  },
  haccp: {
    title: "Food safety & R638 notice",
    body:
      "Hygienic flooring programmes are specified to support HACCP and Regulation R638 cleaning regimes in food and beverage environments. Maverick is an applicator—not a food safety auditor. Final hygiene validation, microbiological clearance, and process sign-off remain the facility owner’s responsibility with their appointed food safety officer.",
  },
  structural: {
    title: "Structural & engineering notice",
    body:
      "Repairs affecting load-bearing concrete, post-tensioned elements, or primary structural members are executed to engineer or competent-person specifications under National Building Regulations pathways. Maverick does not self-certify structural designs; we document substrate preparation, material batching, and film build for your professional team.",
  },
  "sans-waterproofing": {
    title: "Waterproofing standards notice",
    body:
      "Membrane and tanking systems are applied to manufacturer data sheets and relevant South African National Standards (including SANS 10021 waterproofing of buildings where applicable). Maverick does not guarantee building code compliance certificates; municipal or professional sign-off remains with the appointed engineer or building control authority where required.",
  },
};

export function LegalDisclaimer({ variant }: { variant: LegalDisclaimerVariant }) {
  const { title, body } = COPY[variant];
  return (
    <aside
      className="mx-auto max-w-4xl rounded-lg border border-zinc-700/80 bg-zinc-900/50 px-6 py-5 text-sm text-zinc-400"
      role="note"
      aria-label={title}
    >
      <p className="mb-2 font-semibold uppercase tracking-wide text-zinc-500">{title}</p>
      <p className="leading-relaxed">{body}</p>
    </aside>
  );
}
