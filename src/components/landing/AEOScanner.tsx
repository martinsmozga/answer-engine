import { useEffect, useState, useRef } from "react";
import { Globe, RotateCw } from "lucide-react";

const metrics = [
  { label: "Schema Markup", score: 92, color: "hsl(var(--primary))" },
  { label: "Content Structure", score: 78, color: "hsl(var(--glow-amber))" },
  { label: "FAQ Coverage", score: 85, color: "hsl(var(--primary))" },
  { label: "Entity Clarity", score: 64, color: "linear-gradient(90deg, hsl(var(--glow-amber)), hsl(328, 90%, 55%))" },
  { label: "Source Authority", score: 88, color: "hsl(var(--primary))" },
  { label: "Freshness Signals", score: 71, color: "hsl(var(--glow-green))" },
];

const tabs = ["Structure", "Content", "Technical", "Authority"];

function useAnimatedValue(target: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number;
    let raf: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(ease * target));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);
  return value;
}

export function AEOScanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [scanPhase, setScanPhase] = useState(0);

  const overallScore = useAnimatedValue(79, 1800, showResults);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setScanning(true), 400);
    const t2 = setTimeout(() => setScanPhase(1), 1000);
    const t3 = setTimeout(() => setScanPhase(2), 1600);
    const t4 = setTimeout(() => setScanPhase(3), 2200);
    const t5 = setTimeout(() => { setShowResults(true); setScanning(false); }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [inView]);

  const getGrade = (s: number) => s >= 90 ? "A" : s >= 80 ? "B+" : s >= 70 ? "B" : s >= 60 ? "C+" : "C";

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto">
      <div className="relative rounded-2xl border border-border/50 bg-[hsl(var(--surface-elevated))] overflow-hidden backdrop-blur-xl">
        {/* Scan line animation */}
        {scanning && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"
              style={{
                animation: "scanLine 1.2s ease-in-out infinite",
              }}
            />
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground font-semibold text-sm md:text-base">AEO Site Analyzer</span>
            <span className="px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-medium">
              Live Scan
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            {tabs.map((tab) => (
              <span
                key={tab}
                className="px-3 py-1 rounded-md border border-primary/30 text-primary text-xs font-medium hover:bg-primary/10 transition-colors cursor-default"
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* URL Bar */}
        <div className="mx-6 mt-4 flex items-center gap-3 px-4 py-2.5 rounded-lg bg-background/50 border border-border/30">
          <Globe size={16} className="text-muted-foreground shrink-0" />
          <span className="text-muted-foreground text-sm font-mono">https://yourbrand.com</span>
          <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
            {scanning && (
              <>
                <RotateCw size={14} className="animate-spin text-primary" />
                <span className="text-primary">Scanning...</span>
              </>
            )}
            {showResults && !scanning && (
              <span className="text-glow-green">Complete</span>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 px-6 py-6">
          {metrics.map((m, i) => {
            const visible = showResults || scanPhase > Math.floor(i / 2);
            const barValue = useAnimatedValue(m.score, 1200, visible);
            const scoreColor = m.score >= 85 ? "text-primary" : m.score >= 70 ? "text-glow-green" : m.score >= 60 ? "text-glow-amber" : "text-destructive";

            return (
              <div
                key={m.label}
                className="transition-all duration-500"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-foreground text-sm font-medium">{m.label}</span>
                  <span className={`text-sm font-bold ${scoreColor}`}>
                    {visible ? barValue : 0}/100
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${visible ? barValue : 0}%`,
                      background: m.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Score */}
        <div
          className="mx-6 mb-6 p-5 rounded-xl bg-background/50 border border-border/30 transition-all duration-700"
          style={{
            opacity: showResults ? 1 : 0,
            transform: showResults ? "translateY(0)" : "translateY(12px)",
          }}
        >
          <div className="flex items-start gap-5">
            {/* Circular score */}
            <div className="relative shrink-0 w-20 h-20">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle cx="40" cy="40" r="34" fill="none" stroke="hsl(var(--muted))" strokeWidth="5" opacity="0.3" />
                <circle
                  cx="40" cy="40" r="34" fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - overallScore / 100)}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary">{overallScore}</span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-wider">AEO Score</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-foreground font-semibold text-sm mb-1">
                AI Citability Grade: <span className="text-primary">{getGrade(overallScore)}</span>
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                Your site scores well on structure and authority but needs improvement on FAQ coverage and entity clarity. Implement the 4 recommended actions to reach an A grade.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Add FAQ schema", "Improve entity markup", "Update stale content", "Add author bios"].map((action) => (
                  <span
                    key={action}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-primary bg-primary/10 border border-primary/20 cursor-default"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        {showResults && (
          <div
            className="h-8 bg-gradient-to-t from-primary/10 to-transparent"
            style={{ animation: "pulse 3s ease-in-out infinite" }}
          />
        )}
      </div>

      <style>{`
        @keyframes scanLine {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
      `}</style>
    </div>
  );
}
