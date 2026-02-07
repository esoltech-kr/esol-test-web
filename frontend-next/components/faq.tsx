"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "프로젝트 개발 기간은 얼마나 걸리나요?",
    answer:
      "프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 소규모 웹사이트는 4~6주, 중규모 앱은 2~4개월, 대규모 시스템은 4~8개월 정도 소요됩니다. 정확한 일정은 상담 후 안내드립니다.",
  },
  {
    question: "유지보수는 어떻게 진행되나요?",
    answer:
      "모든 플랜에 무상 유지보수 기간이 포함되어 있습니다. 이후에는 월정액 유지보수 계약을 통해 버그 수정, 기능 업데이트, 서버 모니터링 등을 지속적으로 지원합니다.",
  },
  {
    question: "어떤 기술 스택을 사용하나요?",
    answer:
      "프론트엔드는 React, Next.js, Vue.js를, 백엔드는 Node.js, Python, Java를 주로 사용합니다. 클라우드는 AWS, GCP를 활용하며, 프로젝트 특성에 맞는 최적의 기술 스택을 제안해 드립니다.",
  },
  {
    question: "기존 시스템과의 통합도 가능한가요?",
    answer:
      "네, 기존 ERP, CRM, 레거시 시스템과의 API 통합을 지원합니다. 데이터 마이그레이션과 시스템 연동 경험이 풍부하여 원활한 통합을 보장합니다.",
  },
  {
    question: "프로젝트 진행 상황은 어떻게 확인할 수 있나요?",
    answer:
      "주 단위 스프린트 리뷰와 월간 진행 보고서를 제공합니다. 또한 Jira, Slack 등의 협업 도구를 통해 실시간으로 진행 상황을 공유하며, 전담 PM이 배정됩니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-muted-foreground">
            궁금한 점이 있으시면 언제든 문의해 주세요
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-border"
            >
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-4 pb-4 pt-3">
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
