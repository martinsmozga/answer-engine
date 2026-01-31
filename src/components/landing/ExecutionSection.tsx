import { Search, Code, LineChart, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "The Unlock",
    subtitle: "(Audit)",
    description:
      "We simulate an AI crawl in milliseconds to find the technical blocks stopping your sales.",
    icon: Search,
    cardTitle: "Audit Snapshot",
    cardStatus: "Live",
    cardContent: "Crawl blocks detected in 0.4s",
  },
  {
    step: "02",
    title: "The Translation",
    subtitle: "(Fix)",
    description:
      "We show you exactly how to structure your content so AI reads it as Fact, not fluff. We turn your 'About Page' into a 'Knowledge Graph' that machines trust.",
    icon: Code,
    cardTitle: "Knowledge Graph",
    cardStatus: "Live",
    cardContent: "Entities linked to offers",
  },
  {
    step: "03",
    title: "The Scale",
    subtitle: "(Monitor)",
    description:
      "We track your progress weekly. You focus on building great offers; we make sure the AI notices them.",
    icon: LineChart,
    cardTitle: "Weekly Watch",
    cardStatus: "Live",
    cardContent: "Visibility trend: +27%",
  },
  {
    step: "04",
    title: "The Loop",
    subtitle: "(Discover)",
    description:
      "We tell you what users are asking AI about you, giving you data-backed ideas for new products your customers will love.",
    icon: Lightbulb,
    cardTitle: "Intent Feed",
    cardStatus: "Live",
    cardContent: "New demand signals uncovered",
  },
];

export function ExecutionSection() {
  return (
    <section id="execution" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <Rocket size={14} />
            <span>THE EXECUTION ENGINE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            The Only Tool You Need to{" "}
            <span className="gradient-text">Win the Answer Era.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't give you a dashboard of vanity metrics. We give you a{" "}
            <span className="text-primary font-medium">Revenue Roadmap.</span>
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.step}
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 items-center`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <div
                    className={`inline-flex items-center gap-2 mb-4 ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-sm font-mono text-primary">
                      Step {item.step}:
                    </span>
                    <span className="text-xl font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="text-muted-foreground">{item.subtitle}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>

                {/* Card */}
                <div className="flex-1 w-full max-w-md">
                  <div className="glass-card rounded-2xl p-6 hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <span className="font-medium text-foreground">
                          {item.cardTitle}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="live-dot" />
                        <span className="text-xs text-glow-green font-medium">
                          {item.cardStatus}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.cardContent}
                    </p>

                    {/* Animated Bar */}
                    <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-glow-purple rounded-full shimmer"
                        style={{ width: `${60 + index * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
