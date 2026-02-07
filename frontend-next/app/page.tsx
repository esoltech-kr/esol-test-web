import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import CtaFooter from "@/components/cta-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <CtaFooter />
    </div>
  );
}
