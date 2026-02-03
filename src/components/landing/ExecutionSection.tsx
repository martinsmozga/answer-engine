import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ArrowRight, Search, TrendingUp, Target, Zap } from "lucide-react";

// Intersection Observer hook for scroll animations
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Simulated ChatGPT response data
const aiResponseBrands = [
  {
    name: "HubSpot",
    icon: "🟠",
    description: "HubSpot offers a strong free tier with contact management, email tracking, reporting, and integrations. It easily expands into Sales, Marketing, or Service Hubs as you grow.",
    highlighted: true,
  },
  {
    name: "Attio",
    icon: "🔵",
    description: "Attio is a flexible modern CRM that works like a relational database, letting you design pipelines, views, and workflows around your process.",
    highlighted: false,
  },
  {
    name: "Zero",
    icon: "⚫",
    description: "Zero is built for founders who want a streamlined CRM without the usual bloat. It focuses on speed, simplicity, and essential deal tracking.",
    highlighted: false,
  },
];

const features = [
  {
    title: "Track Your Visibility",
    description: "Monitor exactly where and how AI platforms mention your brand across every response.",
    icon: Search,
  },
  {
    title: "Analyze Citation Sources",
    description: "Discover which sources AI models pull from—and position your content to become one.",
    icon: Target,
  },
  {
    title: "Actionable Insights",
    description: "Get clear recommendations to improve your rankings in AI-generated answers.",
    icon: Zap,
  },
];

// ChatGPT logo SVG component
function ChatGPTLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-9 h-9 rounded-full bg-[#10a37f] flex items-center justify-center shadow-lg", className)}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    </div>
  );
}

// Simulated AI Chat Component - The main visual hero
function AISimulation() {
  const { ref, isInView } = useInView(0.2);
  
  return (
    <div ref={ref} className="relative">
      {/* Multi-layer decorative glows */}
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-violet-500/15 to-orange-500/20 rounded-[2rem] blur-3xl opacity-50" />
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-70" />
      
      {/* Main card with depth shadow */}
      <div 
        className={cn(
          "relative bg-white rounded-2xl overflow-hidden",
          "shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)]",
          "border border-gray-200/50",
          "transition-all duration-1000",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
      >
        {/* User query bubble */}
        <div className="p-6 pb-3 flex justify-end">
          <div 
            className={cn(
              "bg-gray-100 rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-sm",
              "shadow-sm",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <p className="text-gray-800 text-sm font-medium">What are the best CRMs for Startups?</p>
          </div>
        </div>
        
        {/* AI Response */}
        <div className="px-6 pb-8">
          <div className="flex gap-4">
            <ChatGPTLogo className="flex-shrink-0 mt-1" />
            
            <div 
              className={cn(
                "flex-1 space-y-5",
                "transition-all duration-700 delay-400",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                Choosing the right CRM really comes down to how your startup sells, grows, and automates. Here's a curated breakdown of the top CRM platforms for startups in 2025:
              </p>
              
              <div className="space-y-4">
                {aiResponseBrands.map((brand, index) => (
                  <div 
                    key={brand.name}
                    className={cn(
                      "relative transition-all duration-500",
                      brand.highlighted 
                        ? "pl-4 border-l-[3px] border-primary bg-gradient-to-r from-primary/8 via-primary/4 to-transparent -mx-2 px-5 py-4 rounded-xl shadow-sm" 
                        : "pl-4 border-l-2 border-gray-200 hover:border-gray-300"
                    )}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-lg">{brand.icon}</span>
                      <h4 className="font-semibold text-gray-900 text-sm">{brand.name}</h4>
                      {brand.highlighted && (
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary text-white font-semibold uppercase tracking-wide shadow-sm">
                          You're here
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating badge - "popping out" element */}
        <div 
          className={cn(
            "absolute -bottom-3 left-1/2 -translate-x-1/2",
            "px-4 py-2 bg-gradient-to-r from-primary to-violet-500 text-white text-xs font-semibold rounded-full",
            "shadow-lg shadow-primary/30",
            "transition-all duration-700 delay-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          This is where visibility matters
        </div>
      </div>
    </div>
  );
}

// Feature Card with depth and pop-out effect
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;
  const { ref, isInView } = useInView(0.2);
  
  return (
    <div 
      ref={ref}
      className={cn(
        "group relative",
        "transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Hover glow */}
      <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-violet-500/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div 
        className={cn(
          "relative bg-card/60 backdrop-blur-md rounded-xl p-6 border border-border/50",
          "hover:border-primary/40 transition-all duration-300",
          "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
          index === 1 && "md:-translate-y-6"
        )}
      >
        {/* Icon with gradient bg */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 via-violet-500/15 to-orange-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

// Industry stats with clean design
function IndustryStats() {
  const { ref, isInView } = useInView(0.2);
  const stats = [
    { value: "60%", label: "of searches end without a click", source: "Sparktoro" },
    { value: "1B+", label: "weekly users on ChatGPT alone", source: "OpenAI" },
    { value: "40%", label: "of Gen Z prefers AI search", source: "Adobe" },
  ];
  
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={cn(
            "text-center p-6 rounded-xl bg-card/40 border border-border/40 backdrop-blur-sm",
            "hover:border-primary/30 transition-all duration-300",
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
          <p className="text-sm text-foreground/80 mb-1">{stat.label}</p>
          <p className="text-xs text-muted-foreground">Source: {stat.source}</p>
        </div>
      ))}
    </div>
  );
}

export function ExecutionSection() {
  const { ref: sectionRef, isInView } = useInView(0.05);

  return (
    <section 
      ref={sectionRef}
      id="industry-shift" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div 
          className={cn(
            "text-center max-w-3xl mx-auto mb-16",
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-5">
            The New Reality
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            When AI answers, are you
            <span className="gradient-text"> in the response?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every day, millions ask AI for recommendations. Your brand is either cited—or invisible.
          </p>
        </div>
        
        {/* Main Content Grid - AI Simulation + Copy */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left: AI Simulation */}
          <div className="order-2 lg:order-1">
            <AISimulation />
          </div>
          
          {/* Right: Problem Statement */}
          <div 
            className={cn(
              "order-1 lg:order-2 space-y-6",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                AI is the new search engine.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                ChatGPT, Perplexity, Claude, and Gemini are now where your customers start their buying journey. Traditional SEO alone won't get you cited in AI responses.
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              {[
                "60% of Google searches now end with zero clicks",
                "AI platforms curate 3-5 recommendations, not 10 blue links",
                "Being cited in AI responses drives qualified, high-intent traffic",
              ].map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="border-l-2 border-primary/50 pl-5 py-3 mt-8 bg-primary/5 rounded-r-lg">
              <p className="text-sm text-foreground/80 italic leading-relaxed">
                "The future of search is not about lists of links. It's about getting the answer."
              </p>
              <footer className="mt-2 text-xs text-primary font-semibold">
                — Sam Altman, CEO of OpenAI
              </footer>
            </blockquote>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mb-20">
          <div 
            className={cn(
              "text-center mb-12",
              "transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
              See exactly where you stand
            </h3>
            <p className="text-muted-foreground">
              Track, analyze, and improve your visibility across all AI platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
        
        {/* Industry Stats */}
        <IndustryStats />
        
        {/* Bottom CTA */}
        <div 
          className={cn(
            "text-center mt-16",
            "transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-muted-foreground mb-5">
            The question isn't <em>if</em> this matters — it's whether you're ready.
          </p>
          <a 
            href="#audit" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
          >
            See where you stand
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
