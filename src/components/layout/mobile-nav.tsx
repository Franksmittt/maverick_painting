// src/components/layout/mobile-nav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PRIMARY_NAV, SOLUTION_NAV } from "@/data/site-navigation";

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

          <p className="px-3 pt-4 text-xs font-bold uppercase tracking-widest text-gray-500">Solutions</p>
          {SOLUTION_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:bg-black/50"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-6 space-y-3">
            <Link
              href="tel:0826277082"
              className="block px-3 py-3 text-base font-medium text-white hover:bg-black/50"
              onClick={toggleMenu}
            >
              <Phone className="w-4 h-4 mr-2 inline-block" /> Call Lawrence (082 627 7082)
            </Link>

            <Link
              href="https://wa.me/27826277082"
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
