"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useMessages, useLocale } from "@/lib/locale-context";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useMessages().header;
  const { locale, toggleLocale } = useLocale();

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground">
          {t.logo}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggleLocale}
            className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {locale === "ko" ? "EN" : "KO"}
          </button>
          <a
            href="#cta"
            className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.cta}
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t.menuAriaLabel}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-4">
            {t.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLocale(); setMobileOpen(false); }}
              className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md border border-border text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Globe className="h-4 w-4" />
              {locale === "ko" ? "EN" : "KO"}
            </button>
            <a
              href="#cta"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setMobileOpen(false)}
            >
              {t.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
