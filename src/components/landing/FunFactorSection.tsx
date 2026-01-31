import { Sparkles, TrendingUp, Coffee } from "lucide-react";

export function FunFactorSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-glow-green/20 text-glow-green text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>THE FUN FACTOR</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Get Back to the{" "}
            <span className="gradient-text">Fun Part</span> of Business.
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Remember why you started? To create, to serve, to hustle. Not to
            fight with robots.txt files.
          </p>

          {/* Highlighted Quote */}
          <div className="glass-card rounded-2xl p-8 mb-12 max-w-2xl mx-auto glow-primary">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              "This is{" "}
              <span className="text-primary">sales on steroids.</span>"
            </p>
            <p className="text-muted-foreground mt-4">
              You create the offer. We ensure the AI sells it. You watch the
              revenue climb from a channel you didn't even have last year.
            </p>
          </div>

          <p className="text-muted-foreground mb-12">
            This is the work that lets you stay focused on building, while the
            machines do the selling.
          </p>

          {/* Momentum Card */}
          <div className="glass-card rounded-2xl p-8 max-w-md mx-auto hover-lift">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-glow-green/20 flex items-center justify-center">
                  <TrendingUp size={24} className="text-glow-green" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Momentum</p>
                  <p className="text-lg font-semibold text-foreground">
                    Revenue climbs while you build.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between p-4 bg-glow-green/10 rounded-xl border border-glow-green/20">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  AI channel growth
                </p>
                <p className="text-3xl font-bold text-glow-green">+38%</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">
                  You focus on offers.
                </p>
                <p className="text-xs text-muted-foreground">
                  We keep the answer engine warm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
