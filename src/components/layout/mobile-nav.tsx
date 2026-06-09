// src/components/layout/mobile-nav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PRIMARY_NAV, SOLUTION_NAV } from "@/data/site-navigation";
import { nap } from "@/lib/nap";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = PRIMARY_NAV;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ml-auto"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div
        className={cn(
          "fixed inset-0 top-20 z-40 transition-transform duration-300 ease-in-out lg:hidden",
          "bg-footer-dark",
          "overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col border-t border-gray-700/50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-black/50"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}

          <div className="border-t border-gray-700/50 px-3 py-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">Solutions</p>
            {SOLUTION_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-zinc-300 hover:text-secondary"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 space-y-3 border-t border-gray-700/50">
            <Link
              href={nap.phone.tel}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-black/50"
              onClick={toggleMenu}
            >
              <Phone className="w-4 h-4 mr-2 inline-block" /> Call {nap.contactName} ({nap.phone.display})
            </Link>

            <Link
              href={nap.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 text-base font-medium text-tertiary hover:bg-black/50"
              onClick={toggleMenu}
            >
              <Image
                src="/images/WhatsApp.svg.webp"
                alt="WhatsApp Icon"
                className="w-4 h-4 mr-2 inline-block"
                width={16}
                height={16}
              />
              WhatsApp Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
