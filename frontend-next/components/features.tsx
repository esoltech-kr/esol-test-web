"use client";

import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { useMessages } from "@/lib/locale-context";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  BarChart3,
};

export default function Features() {
  const t = useMessages().features;

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {t.items.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-border p-6 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
