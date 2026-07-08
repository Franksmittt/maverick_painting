// src/components/layout/footer.tsx
import Link from "next/link";
import type { ReactNode } from "react";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";
import * as D from "@/components/layout/footer-data";

const linkClass = "text-[13px] text-zinc-400 transition-colors duration-200 hover:text-white";

function LogoBlock() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <svg
        className="h-7 w-7 shrink-0"
        fill="#A9D834"
        viewBox="0 0 463 463"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g>
          <path d={D.FOOTER_LOGO_PATH} />
        </g>
      </svg>
      <span className="text-xl font-extrabold tracking-tight text-white transition group-hover:text-zinc-100">
        MAVERICK
      </span>
    </Link>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 transition hover:bg-white/[0.06] hover:text-secondary"
    >
      {children}
    </a>
  );
}

function SocialRow() {
  return (
    <div className="flex items-center gap-0.5">
      {D.FOOTER_SOCIAL.map((s) => (
        <SocialIcon key={s.key} href={s.href} label={s.label}>
          {s.key === "fb" ? (
            <Facebook className="h-4 w-4" />
          ) : s.key === "in" ? (
            <Linkedin className="h-4 w-4" />
          ) : (
            <MessageCircle className="h-4 w-4" />
          )}
        </SocialIcon>
      ))}
    </div>
  );
}

function FooterColHeading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-sm font-semibold tracking-tight text-white">{children}</h3>;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] bg-[#050505]">
      <div className="page-container py-10 sm:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand */}
          <div className="flex min-w-0 flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <LogoBlock />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">{D.FOOTER_TAGLINE}</p>
            <Link
              href="/our-process-independent-qa"
              className="qa-badge inline-flex w-fit items-center rounded-md border border-secondary/35 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary transition hover:border-secondary/50 hover:bg-secondary/15"
            >
              Independent QA process
            </Link>
            <div className="pt-1">
              <SocialRow />
            </div>
          </div>

          {/* Company */}
          <nav className="min-w-0" aria-label="Company">
            <FooterColHeading>Company</FooterColHeading>
            <ul className="space-y-2">
              {D.FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="min-w-0" aria-label="Services">
            <FooterColHeading>Services</FooterColHeading>
            <ul className="space-y-2">
              {D.FOOTER_SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solutions & locations */}
          <nav className="min-w-0" aria-label="Solutions and locations">
            <FooterColHeading>Solutions</FooterColHeading>
            <ul className="mb-6 space-y-2">
              {D.FOOTER_SOLUTION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <FooterColHeading>Locations</FooterColHeading>
            <ul className="space-y-2">
              {D.FOOTER_LOCATION_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="min-w-0 text-sm text-zinc-400">
            <FooterColHeading>Contact Us</FooterColHeading>
            <p className="leading-relaxed">
              <strong className="font-semibold text-zinc-200">{D.FOOTER_ADDRESS.label}</strong>
              <br />
              <span className="text-zinc-300">{D.FOOTER_ADDRESS.display}</span>
            </p>
            <ul className="mt-2 space-y-1">
              {D.FOOTER_SERVICE_REGIONS.map((region) => (
                <li key={region.href}>
                  <Link href={region.href} className={linkClass}>
                    {region.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed">
              <strong className="font-semibold text-zinc-200">{D.FOOTER_PHONE.label}</strong>
              <br />
              <a href={D.FOOTER_PHONE.tel} className="text-zinc-300 transition hover:text-white">
                {D.FOOTER_PHONE.display}
              </a>
              <br />
              <a
                href={D.FOOTER_EMAIL.mailto}
                className="text-secondary no-underline transition hover:text-secondary/90 hover:underline"
              >
                {D.FOOTER_EMAIL.display}
              </a>
            </p>
            <p className="mt-4 leading-relaxed text-zinc-500">
              On-site mobilisation across Gauteng — no public walk-in office.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-black/40">
        <div className="page-container py-5">
          <div className="grid grid-cols-1 gap-4 text-center text-[11px] leading-snug text-zinc-600 md:grid-cols-3 md:items-center md:gap-6 md:text-left">
            <div className="md:text-left">
              &copy; {year} Maverick Painting. All rights reserved. Registered in Gauteng, South Africa.
            </div>
            <div className="bottom-links flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-center">
              <Link href="/terms" className="text-zinc-500 transition hover:text-secondary">
                Terms
              </Link>
              <Link href="/privacy" className="text-zinc-500 transition hover:text-secondary">
                Privacy
              </Link>
            </div>
            <div className="md:text-right">
              Designed, developed &{" "}
              <a
                href="https://www.endpointmedia.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-500 underline-offset-2 transition hover:text-secondary hover:underline"
              >
                maintained by Endpoint Media
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
