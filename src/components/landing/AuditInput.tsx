import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const options = [
  { id: "hotel", label: "Hotel / Resort", icon: "🏨" },
  { id: "restaurant", label: "Restaurant / Café", icon: "🍽️" },
  { id: "tour", label: "Tour / Experience", icon: "🗺️" },
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
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-0">
      <div className="relative rounded-2xl p-[2px] overflow-hidden">
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
        
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative glass-card rounded-2xl p-5 sm:p-6 md:p-8 bg-card overflow-hidden"
        >
          <div 
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              animation: 'hueOscillation 14s ease-in-out infinite',
            }}
          />

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
              <span>Free AI visibility check</span>
            </div>

            <div className="relative mb-5 sm:mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Globe size={18} />
              </div>
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="https://your-hotel-or-business.com"
                className="w-full h-12 sm:h-14 pl-12 pr-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm sm:text-base"
              />
            </div>

            <p className="text-sm text-muted-foreground mb-3">
              What type of travel business are you?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`flex items-center gap-3 p-3 sm:p-3 min-h-[48px] rounded-xl border transition-all text-left text-sm ${
                    selectedOption === option.id
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border/50 bg-background/30 text-muted-foreground hover:border-border hover:bg-background/50"
                  }`}
                >
                  <span className="text-lg sm:text-xl flex-shrink-0">{option.icon}</span>
                  <span className="line-clamp-2 sm:line-clamp-1">{option.label}</span>
                </button>
              ))}
            </div>

            <Button variant="hero" size="xl" className="w-full group min-h-[56px] sm:min-h-[48px]">
              <span>Check If AI Can See My Business</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <p className="text-xs text-muted-foreground/60 text-center mt-4">
              Instant results. No credit card required. See how AI travel assistants view your business.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flowGradient {
          0% { background-position: 0% 50%; --flow-angle: 0deg; }
          25% { background-position: 50% 100%; --flow-angle: 90deg; }
          50% { background-position: 100% 50%; --flow-angle: 180deg; }
          75% { background-position: 50% 0%; --flow-angle: 270deg; }
          100% { background-position: 0% 50%; --flow-angle: 360deg; }
        }
        @keyframes hueOscillation {
          0%, 100% {
            background: 
              radial-gradient(ellipse at 30% 20%, hsl(330 100% 60% / 0.1), transparent 50%),
              radial-gradient(ellipse at 70% 80%, hsl(280 80% 60% / 0.08), transparent 50%);
          }
          33% {
            background: 
              radial-gradient(ellipse at 60% 30%, hsl(280 80% 60% / 0.1), transparent 50%),
              radial-gradient(ellipse at 30% 70%, hsl(25 100% 55% / 0.08), transparent 50%);
          }
          66% {
            background: 
              radial-gradient(ellipse at 40% 70%, hsl(25 100% 55% / 0.1), transparent 50%),
              radial-gradient(ellipse at 70% 30%, hsl(330 100% 60% / 0.08), transparent 50%);
          }
        }
      `}</style>
    </div>
  );
}
