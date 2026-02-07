import { ArrowRight } from "lucide-react";

export default function CtaFooter() {
  return (
    <>
      <section id="cta" className="bg-foreground py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            지금 바로 프로젝트를 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-background/70">
            무료 상담을 통해 최적의 IT 솔루션을 제안받으세요. 전문 컨설턴트가
            비즈니스 목표에 맞는 기술 전략을 안내합니다.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:ceo@esoltech.co.kr"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              무료 상담 신청
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:02-1234-5678"
              className="inline-flex h-11 items-center rounded-md border border-background/20 px-8 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              055-266-6924​
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="font-semibold text-foreground">(주)이솔테크</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              이용약관
            </a>
            <a href="#" className="hover:text-foreground">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-foreground">
              회사소개
            </a>
          </div>
          <div>&copy; 2026 ESOLTECH. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
