"use client";

import { useMemo, useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ALL_REVIEW_SERVICES,
  REVIEW_AUDIENCE_PAGES,
  REVIEW_SERVICE_CATEGORIES,
} from "@/data/client-service-review";

type Decision = "keep" | "remove";

type ExportPayload = {
  exportedAt: string;
  contactName: string;
  contactEmail: string;
  notes: string;
  coreFocus: [string, string, string];
  customServices: string[];
  services: {
    id: string;
    name: string;
    path: string;
    category: string;
    decision: Decision;
  }[];
  audiencePages: {
    id: string;
    name: string;
    path: string;
    decision: Decision;
  }[];
  summary: {
    keepCount: number;
    removeCount: number;
    keep: string[];
    remove: string[];
  };
};

function downloadBlob(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value: string) {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

export function ClientServiceReviewForm() {
  const [decisions, setDecisions] = useState<Record<string, Decision>>(() =>
    Object.fromEntries(ALL_REVIEW_SERVICES.map((service) => [service.id, "keep" as Decision])),
  );
  const [audienceDecisions, setAudienceDecisions] = useState<Record<string, Decision>>(() =>
    Object.fromEntries(REVIEW_AUDIENCE_PAGES.map((page) => [page.id, "keep" as Decision])),
  );
  const [coreFocus, setCoreFocus] = useState<[string, string, string]>(["", "", ""]);
  const [customServices, setCustomServices] = useState<string[]>([""]);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [exportMessage, setExportMessage] = useState<string | null>(null);

  const serviceOptions = useMemo(
    () => [
      ...ALL_REVIEW_SERVICES.map((service) => service.name),
      ...customServices.map((value) => value.trim()).filter(Boolean),
    ],
    [customServices],
  );

  const keepCount = Object.values(decisions).filter((value) => value === "keep").length;
  const removeCount = Object.values(decisions).filter((value) => value === "remove").length;

  function setDecision(id: string, decision: Decision) {
    setDecisions((current) => ({ ...current, [id]: decision }));
  }

  function setAudienceDecision(id: string, decision: Decision) {
    setAudienceDecisions((current) => ({ ...current, [id]: decision }));
  }

  function setAllInCategory(categoryId: string, decision: Decision) {
    const category = REVIEW_SERVICE_CATEGORIES.find((item) => item.id === categoryId);
    if (!category) return;
    setDecisions((current) => {
      const next = { ...current };
      for (const service of category.services) next[service.id] = decision;
      return next;
    });
  }

  function buildPayload(): ExportPayload {
    const services = ALL_REVIEW_SERVICES.map((service) => ({
      id: service.id,
      name: service.name,
      path: service.path,
      category: service.categoryName,
      decision: decisions[service.id] ?? "keep",
    }));
    const audiencePages = REVIEW_AUDIENCE_PAGES.map((page) => ({
      id: page.id,
      name: page.name,
      path: page.path,
      decision: audienceDecisions[page.id] ?? "keep",
    }));
    const keep = services.filter((service) => service.decision === "keep").map((service) => service.name);
    const remove = services
      .filter((service) => service.decision === "remove")
      .map((service) => service.name);

    return {
      exportedAt: new Date().toISOString(),
      contactName: contactName.trim(),
      contactEmail: contactEmail.trim(),
      notes: notes.trim(),
      coreFocus: [
        coreFocus[0].trim(),
        coreFocus[1].trim(),
        coreFocus[2].trim(),
      ],
      customServices: customServices.map((value) => value.trim()).filter(Boolean),
      services,
      audiencePages,
      summary: {
        keepCount: keep.length,
        removeCount: remove.length,
        keep,
        remove,
      },
    };
  }

  function handleExport(format: "json" | "csv") {
    const payload = buildPayload();
    const stamp = new Date().toISOString().slice(0, 10);
    const baseName = `maverick-service-review-${stamp}`;

    if (format === "json") {
      downloadBlob(`${baseName}.json`, `${JSON.stringify(payload, null, 2)}\n`, "application/json");
      setExportMessage("JSON export downloaded. Please email that file back.");
      return;
    }

    const rows: string[][] = [
      ["Section", "Item", "Path", "Decision"],
      ["Meta", "Exported at", "", payload.exportedAt],
      ["Meta", "Contact name", "", payload.contactName],
      ["Meta", "Contact email", "", payload.contactEmail],
      ["Meta", "Notes", "", payload.notes],
      ["Core focus 1", payload.coreFocus[0], "", "focus"],
      ["Core focus 2", payload.coreFocus[1], "", "focus"],
      ["Core focus 3", payload.coreFocus[2], "", "focus"],
      ...payload.customServices.map((service, index) => [
        "Custom service",
        service,
        "",
        `custom-${index + 1}`,
      ]),
      ...payload.services.map((service) => [
        service.category,
        service.name,
        service.path,
        service.decision,
      ]),
      ...payload.audiencePages.map((page) => [
        "Audience page",
        page.name,
        page.path,
        page.decision,
      ]),
    ];

    const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
    downloadBlob(`${baseName}.csv`, `${csv}\n`, "text/csv;charset=utf-8");
    setExportMessage("CSV export downloaded. Please email that file back.");
  }

  return (
    <div className="space-y-10">
      <section className="rounded-xl border border-white/10 bg-[#111111] p-6 sm:p-8">
        <h2 className="type-h3 mb-2 text-xl text-white sm:text-2xl">Your details</h2>
        <p className="mb-6 text-sm text-zinc-400">
          Optional, but helpful so we know who completed the review.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block space-y-2 text-sm">
            <span className="font-medium text-zinc-300">Name</span>
            <input
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-secondary focus:ring-1"
              placeholder="Your name"
            />
          </label>
          <label className="block space-y-2 text-sm">
            <span className="font-medium text-zinc-300">Email</span>
            <input
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-secondary focus:ring-1"
              placeholder="you@example.com"
            />
          </label>
        </div>
      </section>

      <section className="rounded-xl border border-tertiary/40 bg-[#111111] p-6 sm:p-8">
        <h2 className="type-h3 mb-2 text-xl text-white sm:text-2xl">
          Choose 3 core services to focus on
        </h2>
        <p className="mb-6 text-sm text-zinc-400">
          Pick the three services that should lead the website. You can choose from the list or type
          a service that is not listed.
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          {([0, 1, 2] as const).map((index) => (
            <label key={index} className="block space-y-2 text-sm">
              <span className="font-medium text-zinc-300">Core focus {index + 1}</span>
              <input
                list="maverick-service-options"
                value={coreFocus[index]}
                onChange={(event) => {
                  const next: [string, string, string] = [...coreFocus];
                  next[index] = event.target.value;
                  setCoreFocus(next);
                }}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-secondary focus:ring-1"
                placeholder="Type or select a service"
              />
            </label>
          ))}
        </div>
        <datalist id="maverick-service-options">
          {serviceOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="type-h3 text-xl text-white sm:text-2xl">Services currently on the site</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Mark each service Keep or Remove. Currently selected:{" "}
              <span className="text-secondary">{keepCount} keep</span> ·{" "}
              <span className="text-tertiary">{removeCount} remove</span>
            </p>
          </div>
        </div>

        {REVIEW_SERVICE_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="font-bold uppercase tracking-wide text-secondary">{category.name}</h3>
                <p className="text-xs text-zinc-500">{category.hubPath}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="border-white/20 bg-transparent text-zinc-200 hover:bg-white/10"
                  onClick={() => setAllInCategory(category.id, "keep")}
                >
                  Keep all
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="border-white/20 bg-transparent text-zinc-200 hover:bg-white/10"
                  onClick={() => setAllInCategory(category.id, "remove")}
                >
                  Remove all
                </Button>
              </div>
            </div>
            <ul className="divide-y divide-white/5">
              {category.services.map((service) => {
                const decision = decisions[service.id] ?? "keep";
                return (
                  <li
                    key={service.id}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-white">{service.name}</p>
                      <p className="text-xs text-zinc-500">{service.path}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDecision(service.id, "keep")}
                        className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                          decision === "keep"
                            ? "bg-secondary text-primary"
                            : "border border-white/15 text-zinc-300 hover:bg-white/5"
                        }`}
                      >
                        Keep
                      </button>
                      <button
                        type="button"
                        onClick={() => setDecision(service.id, "remove")}
                        className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                          decision === "remove"
                            ? "bg-tertiary text-primary"
                            : "border border-white/15 text-zinc-300 hover:bg-white/5"
                        }`}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-xl border border-white/10 bg-[#111111]">
        <div className="border-b border-white/10 px-5 py-4">
          <h2 className="font-bold uppercase tracking-wide text-secondary">Audience pages</h2>
          <p className="mt-1 text-sm text-zinc-400">
            These are landing pages for different customer types, not separate services.
          </p>
        </div>
        <ul className="divide-y divide-white/5">
          {REVIEW_AUDIENCE_PAGES.map((page) => {
            const decision = audienceDecisions[page.id] ?? "keep";
            return (
              <li
                key={page.id}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-white">{page.name}</p>
                  <p className="text-xs text-zinc-500">{page.path}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAudienceDecision(page.id, "keep")}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                      decision === "keep"
                        ? "bg-secondary text-primary"
                        : "border border-white/15 text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    Keep
                  </button>
                  <button
                    type="button"
                    onClick={() => setAudienceDecision(page.id, "remove")}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                      decision === "remove"
                        ? "bg-tertiary text-primary"
                        : "border border-white/15 text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#111111] p-6 sm:p-8">
        <h2 className="type-h3 mb-2 text-xl text-white sm:text-2xl">
          Services not on the list
        </h2>
        <p className="mb-6 text-sm text-zinc-400">
          Type any service you offer that is missing from the website. These can also be used in the
          3 core focus fields above.
        </p>
        <div className="space-y-3">
          {customServices.map((value, index) => (
            <div key={index} className="flex gap-2">
              <input
                value={value}
                onChange={(event) => {
                  const next = [...customServices];
                  next[index] = event.target.value;
                  setCustomServices(next);
                }}
                className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-secondary focus:ring-1"
                placeholder="e.g. Silo coatings, estate wall painting…"
              />
              {customServices.length > 1 ? (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  className="shrink-0 border-white/20 bg-transparent text-zinc-300 hover:bg-white/10"
                  onClick={() => setCustomServices(customServices.filter((_, i) => i !== index))}
                  aria-label="Remove custom service"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-4 border-white/20 bg-transparent text-zinc-200 hover:bg-white/10"
          onClick={() => setCustomServices([...customServices, ""])}
        >
          <Plus className="h-4 w-4" />
          Add another service
        </Button>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#111111] p-6 sm:p-8">
        <label className="block space-y-2 text-sm">
          <span className="font-medium text-zinc-300">Anything else we should know?</span>
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={4}
            className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-secondary focus:ring-1"
            placeholder="Priorities, services to emphasise, wording changes, etc."
          />
        </label>
      </section>

      <section className="sticky bottom-4 z-10 rounded-xl border border-secondary/40 bg-[#0d0d0d]/95 p-5 shadow-2xl backdrop-blur sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Export your answers</p>
            <p className="text-sm text-zinc-400">
              Download the file, then email it back so we can update the website.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              className="bg-secondary text-primary hover:bg-[#4AD5E2]"
              onClick={() => handleExport("json")}
            >
              <Download className="h-4 w-4" />
              Export JSON
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() => handleExport("csv")}
            >
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
        {exportMessage ? <p className="mt-3 text-sm text-secondary">{exportMessage}</p> : null}
      </section>
    </div>
  );
}
