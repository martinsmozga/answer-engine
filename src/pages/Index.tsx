import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { WakeUpSection } from "@/components/landing/WakeUpSection";
import { MoneyLeakSection } from "@/components/landing/MoneyLeakSection";
import { ExecutionSection } from "@/components/landing/ExecutionSection";
import { FunFactorSection } from "@/components/landing/FunFactorSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WakeUpSection />
        <MoneyLeakSection />
        <FunFactorSection />
        <ExecutionSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
