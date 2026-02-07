"use client";

import { ArrowRight } from "lucide-react";
import { useMessages } from "@/lib/locale-context";

export default function CtaFooter() {
  const t = useMessages().ctaFooter;

  return (
    <>
      <section id={t.id} className="bg-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/70">
            {t.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:ceo@esoltech.co.kr"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+82-55-266-6924"
              className="inline-flex h-11 items-center rounded-md border border-background/20 px-8 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {t.ctaPhone}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="font-semibold text-foreground">{t.footerCompany}</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              {t.footerLinks.terms}
            </a>
            <a href="#" className="hover:text-foreground">
              {t.footerLinks.privacy}
            </a>
            <a href="#" className="hover:text-foreground">
              {t.footerLinks.about}
            </a>
          </div>
          <div>{t.copyright}</div>
        </div>
      </footer>
    </>
  );
}
