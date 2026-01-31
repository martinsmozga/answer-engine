import { AuditInput } from "./AuditInput";
import { AILogos } from "./AILogos";
import { FloatingCard } from "./FloatingCard";
import { Bot, TrendingUp, Zap, DollarSign } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-glow-purple/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium">
            <Zap size={14} className="animate-pulse" />
            <span>AI SALES ENGINE</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <p className="text-muted-foreground text-sm md:text-base uppercase tracking-wider mb-4">
            The Google Game is Old News
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Stop Chasing Clicks.{" "}
            <span className="gradient-text">Let AI Close Sales</span> For You.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            50% of your customers now ask AI what to buy before they search
            where to buy. If ChatGPT cannot read your pricing or offers, you
            aren't just invisible — you're handing easy revenue to your
            competitors.
          </p>
        </div>

        {/* Sub-headline */}
        <p className="text-center text-primary font-medium mb-12">
          Turn ChatGPT, Gemini, and Perplexity into your 24/7 sales agents.
        </p>

        {/* Audit Input */}
        <div className="relative mb-16">
          <AuditInput />
          
          {/* Floating Cards - Desktop Only */}
          <div className="hidden lg:block">
            <FloatingCard
              className="absolute -left-8 top-1/4 w-48"
              delay={0}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bot size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AI Mentions</p>
                  <p className="text-lg font-semibold text-foreground">+247%</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute -right-8 top-1/3 w-52"
              delay={0.5}
              reverse
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-glow-green/20 flex items-center justify-center">
                  <TrendingUp size={20} className="text-glow-green" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Conversion Rate</p>
                  <p className="text-lg font-semibold text-foreground">3.2x Higher</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              className="absolute right-16 bottom-0 w-44"
              delay={1}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-glow-purple/20 flex items-center justify-center">
                  <DollarSign size={20} className="text-glow-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="text-lg font-semibold text-foreground">+$48K/mo</p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>

        {/* AI Logos */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
            AI Routing Map — A single offer powers answers across every major AI
            assistant
          </p>
          <AILogos />
        </div>
      </div>
    </section>
  );
}
