import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

function useInView(threshold = 0.2) {
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

const aiResponseBrands = [
  {
    name: "Grand Sunset Resort",
    icon: "🏨",
    description: "Grand Sunset Resort in Santorini offers stunning caldera views, an infinity pool, and award-winning Mediterranean dining. Rooms start at €180/night with free airport transfer.",
    highlighted: true,
  },
  {
    name: "Azure Bay Hotel",
    icon: "🌊",
    description: "Azure Bay Hotel features beachfront suites with private balconies, a spa, and water sports center. Known for excellent service and family-friendly amenities.",
    highlighted: false,
  },
  {
    name: "Olive Garden Boutique",
    icon: "🫒",
    description: "A charming boutique hotel in Oia with traditional Cycladic architecture, rooftop restaurant, and personalized concierge service for local experiences.",
    highlighted: false,
  },
];

function ChatGPTLogo({ className }: { className?: string }) {
  return (
    <div className={cn("w-9 h-9 rounded-full bg-[#10a37f] flex items-center justify-center shadow-lg", className)}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4046-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    </div>
  );
}

function AISimulation() {
  const { ref, isInView } = useInView(0.2);
  
  return (
    <div ref={ref} className="relative">
      <div className="absolute -inset-8 bg-gradient-to-r from-primary/15 via-amber-600/10 to-primary/15 rounded-[2rem] blur-3xl opacity-50" />
      <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-70" />
      
      <div className={cn(
        "relative bg-[#212121] rounded-2xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.5)] border border-white/10 transition-all duration-1000",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}>
        <div className="p-6 pb-3 flex justify-end">
          <div className={cn("bg-[#2f2f2f] rounded-2xl rounded-tr-sm px-5 py-3.5 max-w-sm shadow-sm transition-all duration-700 delay-200", isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <p className="text-white text-sm font-medium">Best hotels in Santorini with caldera views?</p>
          </div>
        </div>
        
        <div className="px-6 pb-8">
          <div className="flex gap-4">
            <ChatGPTLogo className="flex-shrink-0 mt-1" />
            <div className={cn("flex-1 space-y-5 transition-all duration-700 delay-400", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              <p className="text-gray-300 text-sm leading-relaxed">
                Here are the top-rated hotels in Santorini with stunning caldera views, based on guest reviews and value:
              </p>
              <div className="space-y-4">
                {aiResponseBrands.map((brand, index) => (
                  <div 
                    key={brand.name}
                    className={cn(
                      "relative transition-all duration-500",
                      brand.highlighted 
                        ? "pl-4 border-l-[3px] border-primary bg-gradient-to-r from-primary/15 via-primary/5 to-transparent -mx-2 px-5 py-4 rounded-xl" 
                        : "pl-4 border-l-2 border-white/20 hover:border-white/40"
                    )}
                    style={{ transitionDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-lg">{brand.icon}</span>
                      <h4 className="font-semibold text-white text-sm">{brand.name}</h4>
                      {brand.highlighted && (
                        <span className="text-[10px] px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-semibold uppercase tracking-wide shadow-sm">
                          You're here
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{brand.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-primary to-amber-600 text-primary-foreground text-xs font-semibold rounded-full shadow-lg shadow-primary/30 transition-all duration-700 delay-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          Live AI Travel Response Preview
        </div>
      </div>
    </div>
  );
}

export function ExecutionSection() {
  const { ref: sectionRef, isInView } = useInView(0.05);

  return (
    <section ref={sectionRef} id="social-proof" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-5">
            Built for Tourism
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            This is how AI
            <span className="gradient-text"> recommends </span>
            your business
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            See how a tourist asking AI for travel recommendations can discover your hotel, restaurant, or tour — and what happens when they can't.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="order-2 lg:order-1">
            <AISimulation />
          </div>
          
          <div className={cn("order-1 lg:order-2 space-y-8 transition-all duration-700 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                We built this because tourism businesses were being left out.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When travelers started asking ChatGPT "best hotels in Santorini" instead of searching on Google, we noticed most tourism businesses were completely invisible to AI — no mentions, no recommendations, no bookings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                So we built the tool that makes hotels, restaurants, cafés, tour operators, and travel agencies visible to every AI travel assistant.
              </p>
            </div>
            
            <div className="space-y-4 pt-2">
              {[
                "Real-time monitoring of AI travel recommendations",
                "See when AI mentions your hotel, restaurant, or tour",
                "Built specifically for the tourism & hospitality industry",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={cn("max-w-4xl mx-auto mb-20 transition-all duration-700 delay-100", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              The travel industry is shifting. Are you ready?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card/40 border border-border/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <p className="text-foreground/80 leading-relaxed mb-4">
                "AI-powered travel planning has grown 400% in the last year. Hotels and restaurants that aren't optimized for AI recommendations are losing bookings to competitors who are."
              </p>
              <p className="text-sm text-muted-foreground">— Phocuswright Travel Technology Report</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card/40 border border-border/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <p className="text-foreground/80 leading-relaxed mb-4">
                "The next frontier of travel discovery is AI. Travelers will plan entire trips through conversation, and the businesses that AI knows about will win."
              </p>
              <p className="text-sm text-muted-foreground">— Skift Research, 2026 Travel Megatrends</p>
            </div>
          </div>
        </div>
        
        <div className={cn("relative py-16 md:py-20 transition-all duration-1000 delay-300", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          <blockquote className="relative text-center max-w-5xl mx-auto px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed md:leading-relaxed">
              "The future of travel planning is not about scrolling through websites. It's about asking AI and getting
              <span className="gradient-text font-semibold"> the perfect answer.</span>
              If your business isn't that answer, you're
              <span className="gradient-text font-semibold"> invisible.</span>"
            </p>
            <footer className="mt-8 flex flex-col items-center gap-1">
              <span className="text-lg font-semibold text-foreground">Sam Altman</span>
              <span className="text-sm text-muted-foreground">CEO of OpenAI</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}