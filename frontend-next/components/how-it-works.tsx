import { MessageSquare, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "상담 & 기획",
    description:
      "비즈니스 요구사항을 분석하고 최적의 기술 솔루션을 제안합니다. 프로젝트 범위와 일정을 함께 정의합니다.",
  },
  {
    icon: Code,
    step: "02",
    title: "개발 & 테스트",
    description:
      "애자일 방법론으로 빠르게 개발하고, 철저한 QA를 통해 안정적인 결과물을 만들어냅니다.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "배포 & 운영",
    description:
      "서비스를 안전하게 배포하고, 지속적인 모니터링과 유지보수를 제공합니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            서비스 이용 방법
          </h2>
          <p className="mt-4 text-muted-foreground">
            간단한 3단계로 프로젝트를 시작하세요
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
