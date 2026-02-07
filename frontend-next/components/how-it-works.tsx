"use client";

import { MessageSquare, Code, Rocket } from "lucide-react";
import { useMessages } from "@/lib/locale-context";

const icons = [MessageSquare, Code, Rocket];

export default function HowItWorks() {
  const t = useMessages().howItWorks;

  return (
    <section id="how-it-works" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {t.steps.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.step}
                className="relative rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 text-sm font-semibold text-primary">
                  STEP {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
