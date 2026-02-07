"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useMessages } from "@/lib/locale-context";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useMessages().faq;

  return (
    <section id={t.id} className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {t.items.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-border"
            >
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-4 pb-4 pt-3">
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
