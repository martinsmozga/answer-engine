import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free Hustler Check",
    tagline: 'For the "Am I Broken?" check',
    price: "$0",
    period: "/ Forever",
    cta: "Run Scan",
    ctaVariant: "glow-outline" as const,
    features: [
      "Instant Homepage Scan",
      "Full Site Analysis",
      "Pass/Fail Report",
      "Prioritized 'Fix It' List",
      "One-time check",
    ],
    popular: false,
  },
  {
    name: "Pro Growth Engine",
    tagline: 'For the "Scale My Sales" mindset',
    price: "$49",
    period: "/ mo",
    cta: "Start Growing",
    ctaVariant: "hero" as const,
    features: [
      "Everything in Free Hustler Check",
      "Weekly AI Tracking",
      "'Offer Optimizer' Tips",
      "Priority fixes based on revenue impact",
      "Monthly opportunity report",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap size={14} />
            <span>PRICING</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            An Entire Sales Team for{" "}
            <span className="gradient-text">Less Than a Lunch</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 hover-lift ${
                plan.popular ? "border-primary/50 glow-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Best value
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* CTA */}
              <Button
                variant={plan.ctaVariant}
                size="xl"
                className="w-full mb-8 group"
              >
                {plan.cta}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>

              {/* Features */}
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
