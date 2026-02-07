"use client";

import Image from "next/image";
import { useMessages } from "@/lib/locale-context";

const partners = [
  { name: "VOLVO", logo: "/images/logo_volvo.png" },
  { name: "CLARK", logo: "/images/logo_clark.png" },
];

export default function Partners() {
  const t = useMessages().partners;

  return (
    <section className="border-y border-border bg-muted py-12">
      <div className="container">
        <p className="mb-8 text-center text-lg font-medium text-muted-foreground">
          {t.title}
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {/* {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={`${partner.name} 로고`}
              width={150}
              height={60}
              className="h-12 w-auto object-contain transition-opacity sm:h-16"
            />
          ))} */}
          <Image
              key={partners[0].name}
              src={partners[0].logo}
              alt={`${partners[0].name} 로고`}
              width={250}
              height={1}
            />
            <Image
              key={partners[1].name}
              src={partners[1].logo}
              alt={`${partners[1].name} 로고`}
              width={200}
              height={1}
            />
        </div>
      </div>
    </section>
  );
}
