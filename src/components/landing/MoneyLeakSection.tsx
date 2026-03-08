import { useEffect, useRef, useState } from "react";
import { Scan, Network, TrendingUp, Check, AlertTriangle, X } from "lucide-react";

function useInView(threshold: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

function ScanVisual() {
  const [progress, setProgress] = useState(0);
  const { ref, isInView } = useInView(0.5);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, [isInView]);

  const scanItems = [
    { status: "success", label: "Google Business Profile found" },
    { status: "success", label: "Structured data (Hotel schema) detected" },
    { status: "warning", label: "Menu/pricing not machine-readable" },
    { status: "error", label: "AI travel crawlers blocked" },
  ];

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Scan size={18} className="text-primary" />
          <span className="font-mono text-sm text-foreground">Tourism AI Audit...</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>
      <div className="h-1 w-full bg-muted rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-amber-600 transition-all duration-100" style={{ width: `${progress}%` }} />
      </div>
      <div className="space-y-3">
        {scanItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            style={{ 
              transitionDelay: `${index * 150}ms`,
              backgroundColor: item.status === "success" ? "hsl(var(--glow-green) / 0.05)" : item.status === "warning" ? "hsl(var(--glow-orange) / 0.05)" : "hsl(var(--destructive) / 0.05)",
              borderColor: item.status === "success" ? "hsl(var(--glow-green) / 0.2)" : item.status === "warning" ? "hsl(var(--glow-orange) / 0.2)" : "hsl(var(--destructive) / 0.2)"
            }}
          >
            {item.status === "success" && <Check size={16} className="text-glow-green" />}
            {item.status === "warning" && <AlertTriangle size={16} className="text-amber-500" />}
            {item.status === "error" && <X size={16} className="text-destructive" />}
            <span className="font-mono text-sm text-muted-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GraphVisual() {
  const { ref, isInView } = useInView(0.5);
  const nodes = [
    { id: "hotel", label: "Hotel", x: 50, y: 20, primary: true },
    { id: "rooms", label: "Rooms", x: 80, y: 50 },
    { id: "rates", label: "Rates", x: 80, y: 80 },
    { id: "location", label: "Location", x: 20, y: 50 },
    { id: "reviews", label: "Reviews", x: 50, y: 65 },
  ];

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Network size={18} className="text-amber-400" />
          <span className="font-mono text-sm text-foreground">Tourism Entity Mapping</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>
      <div className="relative h-48 w-full">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="28" x2="72" y2="50" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "300ms" }} />
          <line x1="80" y1="58" x2="80" y2="72" stroke="hsl(var(--glow-amber) / 0.3)" strokeWidth="0.5" className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "450ms" }} />
          <line x1="42" y1="28" x2="28" y2="45" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.5" className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "400ms" }} />
          <line x1="50" y1="28" x2="50" y2="57" stroke="hsl(var(--glow-orange) / 0.3)" strokeWidth="0.5" className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "500ms" }} />
          <line x1="72" y1="50" x2="58" y2="60" stroke="hsl(var(--glow-amber) / 0.3)" strokeWidth="0.5" className={`transition-all duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "550ms" }} />
        </svg>
        {nodes.map((node, index) => (
          <div key={node.id} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} style={{ left: `${node.x}%`, top: `${node.y}%`, transitionDelay: `${index * 100}ms` }}>
            <div className={`px-3 py-1.5 rounded-lg font-mono text-xs whitespace-nowrap ${node.primary ? "bg-primary/20 border border-primary/40 text-primary" : "bg-muted border border-border text-muted-foreground"}`}>
              {node.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricsVisual() {
  const { ref, isInView } = useInView(0.5);
  const metrics = [
    { label: "AI Visibility", value: "+42%", trend: "up", color: "primary" },
    { label: "AI Recommendations", value: "89", trend: "up", color: "glow-amber" },
    { label: "Booking Signals", value: "31 new", trend: "up", color: "glow-orange" },
  ];

  return (
    <div ref={ref} className="glass-card rounded-2xl p-6 w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp size={18} className="text-amber-500" />
          <span className="font-mono text-sm text-foreground">Weekly Performance</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="live-dot" />
          <span className="text-xs text-glow-green font-medium">Live</span>
        </div>
      </div>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className={`p-4 rounded-xl border border-border/50 bg-muted/30 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">{metric.label}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-bold ${metric.color === "primary" ? "text-primary" : metric.color === "glow-amber" ? "text-amber-400" : "text-amber-500"}`}>{metric.value}</span>
                <TrendingUp size={16} className="text-glow-green" />
              </div>
            </div>
            <div className="flex items-end gap-1 mt-3 h-8">
              {[40, 55, 45, 70, 60, 85, 90].map((height, i) => (
                <div key={i} className={`flex-1 rounded-sm transition-all duration-500 ${metric.color === "primary" ? "bg-primary/40" : metric.color === "glow-amber" ? "bg-amber-400/40" : "bg-amber-500/40"}`} style={{ height: isInView ? `${height}%` : "10%", transitionDelay: `${index * 150 + i * 50}ms` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Scan Your Tourism Presence",
    description: "We analyze how AI travel assistants currently see (or don't see) your hotel, restaurant, or tour business. Our audit crawls the same paths ChatGPT and Gemini use when tourists ask for recommendations.",
    Visual: ScanVisual,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    title: "Translate for AI Travel Agents",
    description: "We structure your content so AI reads it as trusted travel facts. Think of it as teaching ChatGPT your rooms, menus, tours, and unique experiences — in a language AI understands and recommends.",
    Visual: GraphVisual,
    gradient: "from-amber-400/20 to-amber-400/5",
  },
  {
    number: "03",
    title: "Monitor & Get More Bookings",
    description: "Track your AI visibility weekly and discover new tourism opportunities. See exactly when AI platforms recommend your business to travelers planning their next trip.",
    Visual: MetricsVisual,
    gradient: "from-amber-500/20 to-amber-500/5",
  },
];

export function MoneyLeakSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 md:mb-28">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">How It Works</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight text-balance">
            Turn AI Travel Assistants Into{" "}
            <span className="gradient-text">Your Booking Engine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple 3-step process to make your tourism business the one AI recommends to travelers.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {steps.map((step, index) => {
            const Visual = step.Visual;
            const isReversed = index % 2 === 1;
            return (
              <div key={step.number} className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
                <div className="flex-1 w-full flex justify-center"><Visual /></div>
                <div className="flex-1 w-full">
                  <div className={`relative ${isReversed ? "lg:text-right" : ""}`}>
                    <span className="text-8xl md:text-9xl font-bold gradient-text opacity-20 absolute -top-8 md:-top-12 -left-4 md:-left-8 select-none">{step.number}</span>
                    <div className="relative z-10 pt-8">
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              Ready to get discovered?{" "}
              <a href="#pricing" className="text-primary font-semibold hover:underline">See pricing →</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}