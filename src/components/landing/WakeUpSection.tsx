import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) { setHasStarted(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

const stats = [
  {
    value: 65,
    suffix: "%",
    label: "of travelers ask AI first",
    description: "Before they open Google or a booking site",
    icon: Users,
    color: "primary" as const,
  },
  {
    value: 8,
    suffix: "x",
    label: "higher booking intent",
    description: "AI travel searches vs traditional search",
    icon: TrendingUp,
    color: "glow-green" as const,
  },
  {
    value: 78,
    suffix: "%",
    label: "trust AI recommendations",
    description: "For choosing where to stay, eat & explore",
    icon: Target,
    color: "glow-amber" as const,
  },
  {
    value: 24,
    suffix: "/7",
    label: "AI never sleeps",
    description: "Recommending your business around the clock",
    icon: Zap,
    color: "glow-orange" as const,
  },
];

export function WakeUpSection() {
  const { count: count1, ref: ref1 } = useCountUp(stats[0].value);
  const { count: count2, ref: ref2 } = useCountUp(stats[1].value);
  const { count: count3, ref: ref3 } = useCountUp(stats[2].value);
  const { count: count4, ref: ref4 } = useCountUp(stats[3].value);
  
  const counts = [count1, count2, count3, count4];
  const refs = [ref1, ref2, ref3, ref4];

  return (
    <section id="wake-up" className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite" }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: "radial-gradient(circle, hsl(var(--glow-amber)) 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite 2s" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-6">
            The Tourism Industry Shift
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 tracking-tight">
            Travelers Are Asking AI{" "}
            <span className="gradient-text">Instead of Google</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            While you're optimizing for yesterday's search engines, tourists are planning trips in AI conversations — and booking the businesses AI recommends.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              primary: "text-primary border-primary/20 bg-primary/5",
              "glow-green": "text-glow-green border-glow-green/20 bg-glow-green/5",
              "glow-amber": "text-amber-400 border-amber-400/20 bg-amber-400/5",
              "glow-orange": "text-amber-500 border-amber-500/20 bg-amber-500/5",
            };
            
            return (
              <div key={index} ref={refs[index]} className="group relative">
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClasses[stat.color]}`}>
                    <Icon size={24} />
                  </div>
                  <div className="mb-4">
                    <span className={`text-5xl md:text-6xl font-bold tracking-tight ${
                      stat.color === "primary" ? "text-primary" :
                      stat.color === "glow-green" ? "text-glow-green" :
                      stat.color === "glow-amber" ? "text-amber-400" :
                      "text-amber-500"
                    }`}>
                      {counts[index]}
                    </span>
                    <span className={`text-3xl md:text-4xl font-bold ${
                      stat.color === "primary" ? "text-primary" :
                      stat.color === "glow-green" ? "text-glow-green" :
                      stat.color === "glow-amber" ? "text-amber-400" :
                      "text-amber-500"
                    }`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-foreground font-semibold text-lg mb-2">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">
              Your competitors' hotels and tours are already showing up in AI.{" "}
              <a href="#pricing" className="text-primary font-semibold hover:underline">
                Don't stay invisible →
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}