"use client";

import { useMessages } from "@/lib/locale-context";

export default function History() {
  const t = useMessages().history;

  return (
    <section id={t.id} className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* vertical line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {t.items.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-0"
              >
                {/* year badge - mobile: left, desktop: alternating */}
                <div className="relative z-10 flex h-10 w-[78px] shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                  {item.year}
                </div>

                {/* description - mobile: right, desktop: alternating */}
                <div
                  className={`rounded-lg border border-border bg-background p-4 transition-shadow hover:shadow-md md:w-[calc(50%-58px)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:text-right"
                      : "md:ml-auto md:text-left"
                  }`}
                >
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
