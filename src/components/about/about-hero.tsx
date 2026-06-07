import Image from "next/image";
import Link from "next/link";
import { Medal, Scroll } from "lucide-react";
import { Button } from "@/components/ui/button";

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: typeof Medal }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-white/10 bg-[#111111] p-6 text-center">
      <Icon className="mb-3 h-7 w-7 text-secondary" aria-hidden />
      <p className="text-3xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
    </div>
  );
}

export function AboutHero() {
  return (
    <section className="section-surface section-pad !pt-8" aria-labelledby="about-hero-heading">
      <div className="page-container">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="type-phase mb-3">The structural asset maintenance partner</p>
            <h1 id="about-hero-heading" className="type-h1 mb-5 uppercase">
              Driven by experience. Built for trust.
            </h1>
            <p className="type-lead mb-4 max-w-2xl text-zinc-400">
              Maverick Painting was established in 2004 and is led by a management team with more than 50 years
              combined experience in coatings, waterproofing, and structural remediation.
            </p>
            <p className="type-body mb-8 max-w-2xl">
              We are committed to verifiable safety, reliability, and guaranteed workmanship—with independent
              third-party QA on agreed high-value programmes across Gauteng.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-auto rounded-lg bg-secondary px-6 py-3 font-bold text-primary hover:bg-[#4AD5E2]">
                <Link href="/contact">Request a condition assessment</Link>
              </Button>
              <Button asChild variant="outline" className="h-auto border-secondary/40 px-6 py-3 text-white hover:bg-white/5">
                <Link href="/services">Browse our services</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/structural-concrete-spalling-handover.jpg"
                alt="Maverick Painting structural repair handover on a Gauteng commercial asset"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="50+" label="Years combined" icon={Medal} />
              <StatCard value="Est. 2004" label="Since inception" icon={Scroll} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
