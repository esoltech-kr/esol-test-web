import { Check } from "lucide-react";

const plans = [
  {
    name: "스타터",
    price: "300만원~",
    description: "소규모 프로젝트에 적합",
    popular: false,
    features: [
      "반응형 웹사이트 개발",
      "기본 SEO 최적화",
      "3개월 무상 유지보수",
      "이메일 지원",
      "기본 분석 대시보드",
    ],
  },
  {
    name: "프로",
    price: "800만원~",
    description: "성장하는 비즈니스를 위한 최적의 플랜",
    popular: true,
    features: [
      "웹 + 모바일 앱 개발",
      "고급 SEO & 성능 최적화",
      "6개월 무상 유지보수",
      "우선 기술 지원",
      "CI/CD 파이프라인 구축",
      "클라우드 인프라 설정",
    ],
  },
  {
    name: "엔터프라이즈",
    price: "별도 협의",
    description: "대규모 프로젝트 맞춤형 솔루션",
    popular: false,
    features: [
      "풀스택 커스텀 개발",
      "AI/ML 통합 솔루션",
      "12개월 무상 유지보수",
      "24/7 전담 지원",
      "보안 감사 & 컨설팅",
      "전용 프로젝트 매니저",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            서비스 요금제
          </h2>
          <p className="mt-4 text-muted-foreground">
            프로젝트 규모에 맞는 최적의 플랜을 선택하세요
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-6 transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "border-primary bg-background shadow-lg"
                  : "border-border bg-background"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  인기
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`inline-flex h-11 w-full items-center justify-center rounded-md text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                시작하기
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
