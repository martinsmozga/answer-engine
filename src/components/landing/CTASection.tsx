import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            The Land Grab for AI Citations Is{" "}
            <span className="gradient-text">Happening Now.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Are you going to let your competitors take your spot?
          </p>

          <Button variant="hero" size="xl" className="group">
            <Zap size={20} className="mr-2" />
            Audit My Site Now
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Instant results. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
