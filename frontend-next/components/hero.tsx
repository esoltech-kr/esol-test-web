import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-semibold text-muted-foreground transition-colors">
          IT 솔루션 파트너 #1
        </div>

        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          비즈니스를 위한{" "}
          <span className="text-primary">최적의 IT 솔루션</span>을
          제공합니다
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          웹 개발부터 AI까지, (주)이솔테크는 최신 기술로 기업의 디지털
          트랜스포메이션을 지원합니다. 10년 이상의 경험과 200+ 프로젝트 실적을
          보유하고 있습니다.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#cta"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            무료 상담 받기
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            서비스 알아보기
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">200+</span>
            <span>완료 프로젝트</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">99%</span>
            <span>고객 만족도</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-foreground">25+</span>
            <span>년 경험</span>
          </div>
        </div>
      </div>
    </section>
  );
}
