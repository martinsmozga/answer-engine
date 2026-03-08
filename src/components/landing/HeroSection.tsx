import { AuditInput } from "./AuditInput";
import { AILogos } from "./AILogos";
import { Zap } from "lucide-react";
import heroHuman from "@/assets/hero-human.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Gradient Orbs - subtler on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-0 w-40 md:w-64 h-40 md:h-64 bg-glow-purple/15 rounded-full blur-[60px] md:blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        
        {/* Mobile-first: Image + Text stacked, Desktop: side by side */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 mb-10 md:mb-14">
          
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-5 md:mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-primary text-xs font-medium">
                <Zap size={12} className="animate-pulse" />
                <span>AI SALES ENGINE</span>
              </div>
            </div>

            {/* Headline - Mobile: tight, Desktop: full */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-[1.1]">
              <span className="gradient-text">Let AI Close Sales</span>{" "}
              For You.
            </h1>
            
            {/* Subtext - short on mobile */}
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8">
              Turn ChatGPT, Gemini & Perplexity into your 24/7 sales team. If AI can't find your offer, your competitor gets the sale.
            </p>

            {/* AI Logos inline on desktop */}
            <div className="hidden lg:block mb-2">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
                Powering answers across every AI platform
              </p>
              <AILogos />
            </div>
          </div>

          {/* Right: Human image */}
          <div className="flex-shrink-0 order-1 lg:order-2 mb-6 lg:mb-0 flex justify-center">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl scale-110" />
              <img 
                src={heroHuman} 
                alt="Business professional leveraging AI sales tools" 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover object-top rounded-full border-2 border-primary/20 shadow-[0_0_60px_-15px_hsl(330_100%_60%_/_0.3)]"
              />
              {/* Floating badge on image */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-0 sm:right-0 glass border border-primary/30 rounded-xl px-3 py-2 shadow-lg">
                <p className="text-xs font-semibold text-foreground">+247%</p>
                <p className="text-[10px] text-muted-foreground">AI Mentions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Input - full width */}
        <div className="mb-10 md:mb-14">
          <AuditInput />
        </div>

        {/* AI Logos - mobile only */}
        <div className="lg:hidden text-center">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
            AI Routing Map — Powering answers across every AI platform
          </p>
          <AILogos />
        </div>
      </div>
    </section>
  );
}
