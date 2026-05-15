import React from "react";
import { cn } from "@/lib/utils";

const clientLogos = [{ name: "Volkswagen" }, { name: "Audi" }, { name: "BMW" }, { name: "Renault" }, { name: "Hyundai" }];

export function ClientLogoStrip() {
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="section-flow">
      <div className="page-container overflow-hidden">
        <header className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Verifiable project experience</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Work completed for leading dealerships
          </h3>
        </header>

        <div
          className={cn(
            "flex w-[250%] items-center md:w-[150%]",
            "animate-infinite-scroll",
          )}
        >
          {doubledLogos.map((client, index) => (
            <div
              key={index}
              className="flex w-1/5 flex-shrink-0 items-center justify-center px-6 py-3 md:w-1/6 lg:w-1/10"
            >
              <span
                className={cn(
                  "text-3xl font-black uppercase tracking-wider transition-colors duration-300 md:text-4xl",
                  "text-white/[0.12] hover:text-secondary/90",
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
