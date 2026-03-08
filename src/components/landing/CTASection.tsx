import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Every Day You Wait, Travelers Book{" "}
            <span className="gradient-text">Your Competitors.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            AI is recommending hotels, restaurants, and tours right now. Is your business one of them?
          </p>

          <Button variant="hero" size="xl" className="group">
            <Zap size={20} className="mr-2" />
            Check If AI Can See My Business
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Free instant audit. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
