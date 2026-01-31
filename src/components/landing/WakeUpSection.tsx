import { AlertTriangle, TrendingUp, Zap, Target } from "lucide-react";

export function WakeUpSection() {
  return (
    <section id="wake-up" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <AlertTriangle size={14} />
            <span>WAKE UP CALL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            You're Playing on a Map That{" "}
            <span className="gradient-text">Doesn't Exist Anymore.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most businesses are still obsessing over rankings, tweaking
            meta-descriptions, and fighting for that sweet "Page 1" spot on
            Google. Meanwhile, the game changed.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Zap size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              The Shift
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are in the "Mobile 2012" moment. Customers are not using AI to
              browse links. They're using it to{" "}
              <span className="text-primary font-medium">make decisions.</span>
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-glow-green/20 flex items-center justify-center mb-6">
              <TrendingUp size={24} className="text-glow-green" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              The Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              LLM searches are{" "}
              <span className="text-glow-green font-semibold">3-6x more likely</span>{" "}
              to show buying intent than Google searches.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 hover-lift">
            <div className="w-12 h-12 rounded-xl bg-glow-purple/20 flex items-center justify-center mb-6">
              <Target size={24} className="text-glow-purple" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              The Opportunity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              You don't need to dominate traditional rankings to win. You just
              need{" "}
              <span className="text-glow-purple font-medium">
                Strategic Presence
              </span>{" "}
              in the answers that matter.
            </p>
          </div>
        </div>

        {/* Old Way vs New Way Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
              Old way
            </div>
            <div className="glass-card rounded-2xl p-6 border-destructive/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-destructive text-sm font-medium">
                  Google links
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                      Sponsored
                    </span>
                  </div>
                  <p className="text-sm text-foreground font-medium">
                    Best pricing for your service
                  </p>
                  <p className="text-xs text-muted-foreground">
                    example.com - Compare providers
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-sm text-foreground font-medium">
                    Top 10 options in your city
                  </p>
                  <p className="text-xs text-muted-foreground">
                    listicle.com - Updated weekly
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <p className="text-sm text-foreground font-medium">
                    Reviews and directories
                  </p>
                  <p className="text-xs text-muted-foreground">
                    search results split across tabs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* New Way */}
          <div className="relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary">
              New way
            </div>
            <div className="glass-card rounded-2xl p-6 border-primary/30 glow-primary">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-sm font-medium">
                  AI answer
                </span>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs text-primary font-medium">
                    Answer
                  </span>
                </div>
                <p className="text-sm text-foreground mb-3">
                  Here is the best option based on pricing and availability.
                </p>
                <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
                  "<span className="text-primary font-semibold">Aisearche</span>
                  " offers the fastest turnaround and transparent pricing. Call
                  today to book the next available slot.
                </p>
                <p className="text-xs text-muted-foreground">
                  Sources: pricing page, FAQ, structured data
                </p>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-xs text-primary font-medium mb-1">
                  Strategic Presence
                </p>
                <p className="text-xs text-muted-foreground">
                  When AI trusts your data, you win the decision without ranking
                  first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
