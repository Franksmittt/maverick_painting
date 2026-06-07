import Image from "next/image";
import Link from "next/link";
import { ABOUT_THESIS_CAPABILITIES } from "@/data/about-page-content";

export function AboutThesisSection() {
  return (
    <section className="section-surface section-pad" aria-labelledby="about-thesis-heading">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <p className="type-phase mb-3">Our core thesis</p>
            <h2 id="about-thesis-heading" className="type-h2 mb-4 uppercase">
              We don&apos;t just paint over problems.
            </h2>
            <p className="type-lead mb-6 text-zinc-400">
              We pivot the conversation from cosmetic painting to structural protection. Visible cracks, spalling, and
              damp are symptoms of deeper asset failure. Maverick handles defect identification, structural repairs,
              waterproofing, and specialized coatings as a turn-key programme.
            </p>
            <Link
              href="/structural-repairs"
              className="inline-block border-b border-secondary pb-1 text-sm font-semibold text-secondary transition hover:text-white"
            >
              Explore structural repair services →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {ABOUT_THESIS_CAPABILITIES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#111111] transition hover:border-secondary/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-bold text-white group-hover:text-secondary">{item.title}</h3>
                  <p className="type-body m-0 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
