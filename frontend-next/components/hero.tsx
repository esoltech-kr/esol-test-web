"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/lib/locale-context";

export default function Hero() {
  const t = useMessages().hero;

  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors">
          {t.badge}
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.titlePrefix}{" "}
          <span className="text-primary">{t.titleHighlight}</span>
          {t.titleSuffix}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {t.description}
        </p>

        <div className="mt-6 mb-4 rounded-lg border border-gray-300 overflow-hidden">
          <table className="w-full text-left text-sm text-muted-foreground">
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{t.offices.hqLabel}</td>
                <td className="px-4 py-3">{t.offices.hqAddress}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{t.offices.branchLabel}</td>
                <td className="px-4 py-3">{t.offices.branchAddress}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {t.subDescription}
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {t.ctaSecondary}
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">{t.stats.projectsValue}</span>
            <span>{t.stats.projects}</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">{t.stats.satisfactionValue}</span>
            <span>{t.stats.satisfaction}</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">{t.stats.experienceValue}</span>
            <span>{t.stats.experience}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
