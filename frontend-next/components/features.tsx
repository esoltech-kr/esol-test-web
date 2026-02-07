import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Shield,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "웹 개발",
    description:
      "React, Next.js 등 최신 프레임워크를 활용한 고성능 반응형 웹 애플리케이션을 개발합니다.",
  },
  {
    icon: Smartphone,
    title: "모바일 앱",
    description:
      "iOS/Android 네이티브 및 크로스플랫폼 앱을 개발하여 사용자에게 최적의 모바일 경험을 제공합니다.",
  },
  {
    icon: Cloud,
    title: "클라우드 인프라",
    description:
      "AWS, GCP, Azure 기반의 안정적이고 확장 가능한 클라우드 인프라를 설계하고 구축합니다.",
  },
  {
    icon: Brain,
    title: "AI & 머신러닝",
    description:
      "데이터 분석, 자연어 처리, 컴퓨터 비전 등 AI 기술을 비즈니스에 접목하여 혁신을 이끌어냅니다.",
  },
  {
    icon: Shield,
    title: "보안 솔루션",
    description:
      "취약점 분석, 보안 감사, 침입 탐지 시스템 등 포괄적인 보안 솔루션을 제공합니다.",
  },
  {
    icon: BarChart3,
    title: "데이터 분석",
    description:
      "대시보드, BI 도구, 실시간 분석 시스템을 구축하여 데이터 기반 의사결정을 지원합니다.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            핵심 역량
          </h2>
          <p className="mt-4 text-muted-foreground">
            다양한 기술 스택과 풍부한 경험으로 최상의 결과를 만들어냅니다
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-border p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
