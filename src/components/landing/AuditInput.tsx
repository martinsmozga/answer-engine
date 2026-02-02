import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const options = [
  { id: "services", label: "My High-Ticket Services", icon: "💎" },
  { id: "products", label: "My Best-Selling Products", icon: "📦" },
  { id: "appointments", label: "My Local Appointments", icon: "📅" },
  { id: "everything", label: "Everything I Have", icon: "🚀" },
];

export function AuditInput() {
  const [domain, setDomain] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Input Card with flowing border */}
      <div className="relative rounded-2xl p-[2px] overflow-hidden">
        {/* Animated flowing gradient border */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-60"
          style={{
            background: `linear-gradient(var(--flow-angle, 0deg), 
              hsl(330 100% 60% / 0.8), 
              hsl(280 80% 60% / 0.6), 
              hsl(25 100% 55% / 0.5), 
              hsl(330 100% 60% / 0.8))`,
            backgroundSize: '300% 300%',
            animation: 'flowGradient 8s ease-in-out infinite',
          }}
        />
        
        {/* Inner card */}
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative glass-card rounded-2xl p-6 md:p-8 bg-card"
          style={{
            background: isHovering 
              ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(330 100% 60% / 0.08), transparent 40%), hsl(var(--card))`
              : undefined,
          }}
        >
          {/* Flashlight glow overlay */}
          {isHovering && (
            <div 
              className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(330 100% 60% / 0.15), transparent 50%)`,
              }}
            />
          )}

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4">
              <Sparkles size={14} />
              <span>Instant audit</span>
            </div>

            {/* Domain Input */}
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Globe size={18} />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="https://your-business.com"
                className="w-full h-14 pl-12 pr-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              />
            </div>

            {/* Options Label */}
            <p className="text-sm text-muted-foreground mb-3">
              What do you want AI to sell for you?
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-left text-sm ${
                    selectedOption === option.id
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border/50 bg-background/30 text-muted-foreground hover:border-border hover:bg-background/50"
                  }`}
                >
                  <span className="text-lg">{option.icon}</span>
                  <span className="line-clamp-1">{option.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="w-full group">
              <span>Audit My AI Sales Potential</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>

            {/* Footer Text */}
            <p className="text-xs text-muted-foreground/60 text-center mt-4">
              Built on modern infrastructure for instant analysis. No credit card
              required.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowGradient {
          0% {
            background-position: 0% 50%;
            --flow-angle: 0deg;
          }
          25% {
            background-position: 50% 100%;
            --flow-angle: 90deg;
          }
          50% {
            background-position: 100% 50%;
            --flow-angle: 180deg;
          }
          75% {
            background-position: 50% 0%;
            --flow-angle: 270deg;
          }
          100% {
            background-position: 0% 50%;
            --flow-angle: 360deg;
          }
        }
      `}</style>
    </div>
  );
}
