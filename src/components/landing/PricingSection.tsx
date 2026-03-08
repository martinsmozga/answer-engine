import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free Visibility Check",
    tagline: '"Can AI see my business?"',
    price: "$0",
    period: "/ Forever",
    cta: "Check My Visibility",
    ctaVariant: "glow-outline" as const,
    features: [
      "Instant AI visibility scan",
      "See how ChatGPT & Gemini view your business",
      "Pass/Fail report with actionable fixes",
      "Tourism-specific audit criteria",
      "One-time check — no commitment",
    ],
    popular: false,
  },
  {
    name: "Tourism Growth Engine",
    tagline: '"Make AI recommend my business"',
    price: "$49",
    period: "/ mo",
    cta: "Start Getting Bookings",
    ctaVariant: "hero" as const,
    features: [
      "Everything in Free Visibility Check",
      "Weekly AI recommendation tracking",
      "Tourism-optimized content suggestions",
      "Priority fixes based on booking impact",
      "Monthly traveler intent report",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap size={14} />
            <span>PRICING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            More Bookings for{" "}
            <span className="gradient-text">Less Than a Room Night</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative glass-card rounded-2xl p-8 hover-lift ${plan.popular ? "border-primary/50 glow-primary" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Best value
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <Button variant={plan.ctaVariant} size="xl" className="w-full mb-8 group">
                {plan.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
