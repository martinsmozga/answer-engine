import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// Intersection Observer hook for orchestrated scroll animations
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

// AI Platform logos as SVG components
const ChatGPTLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4046-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

const ClaudeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H8.85l-.79-.08-.672-.16-.594-.24-.474-.32-.356-.36-.277-.44-.158-.48-.04-.52.04-.52.119-.48.198-.44.277-.4.356-.36.435-.28.474-.24.554-.16.593-.12.633-.04h.87l.593.08.554.12.514.16.475.2.435.28.356.32.316.36.237.4.198.44.119.48.04.52-.04.52-.08.48-.158.44-.198.4-.277.36-.316.32-.395.28-.435.24-.474.16-.554.12-.554.08h-.95l.158.32.198.28.237.28.277.24.316.2.356.16.395.12.435.08.474.04h.554l.554-.04.554-.08.514-.12.514-.16.474-.2.435-.24.395-.28.356-.32.316-.36.277-.4.237-.44.198-.48.158-.52.08-.56.04-.6-.04-.6-.08-.56-.158-.52-.198-.48-.237-.44-.277-.4-.316-.36-.356-.32-.395-.28-.435-.24-.474-.2-.514-.16-.554-.12-.554-.08-.594-.04h-.633l-.633.04-.594.08-.554.12-.514.16-.474.2-.435.24-.395.28-.356.32-.316.36-.277.4-.237.44-.198.48-.158.52-.08.56-.04.6.04.6.08.56.158.52.198.48.237.44.277.4.316.36.356.32.395.28.435.24.474.2.514.16.554.12.554.08.594.04h1.267l.593-.04.554-.08.554-.12.514-.16.474-.2.435-.24.395-.28.356-.32.316-.36.277-.4.237-.44.198-.48.158-.52.08-.56.04-.6-.04-.6-.08-.56-.119-.52-.198-.48-.237-.44-.277-.4-.316-.36-.356-.32-.395-.28-.435-.24-.474-.2-.514-.16-.554-.12-.554-.08-.594-.04h-.87l-.593.04-.554.08-.514.12-.474.16-.435.2-.395.24-.356.28-.316.32-.277.36-.237.4-.198.44-.158.48-.08.52-.04.52.04.52.08.48.158.44.198.4.237.36.277.32.316.28.356.24.395.2.435.16.474.12.514.08.554.04h1.108l4.72-2.647.08-.128-.04-.128-.08-.128-4.72-2.647h-1.108l-.554.04-.514.08-.474.12-.435.16-.395.2-.356.24-.316.28-.277.32-.237.36-.198.4-.158.44-.08.48-.04.52.04.52.08.48.158.44.198.4.237.36.277.32.316.28.356.24.395.2.435.16.474.12.514.08.554.04h.87l.593-.04.554-.08.514-.12.474-.16.435-.2.395-.24.356-.28.316-.32.277-.36.237-.4.198-.44.158-.48.08-.52.04-.52-.04-.52-.08-.48-.158-.44-.198-.4-.237-.36-.277-.32-.316-.28-.356-.24-.395-.2-.435-.16-.474-.12-.514-.08-.554-.04h-1.267l-.593.04-.554.08-.514.12-.474.16-.435.2-.395.24-.356.28-.316.32-.277.36-.237.4-.198.44-.158.48-.08.52-.04.52.04.52.08.48.119.44.198.4.237.36.277.32.316.28.356.24.395.2.435.16.474.12.514.08.554.04h.95l.554-.08.554-.12.514-.16.474-.2.435-.24.395-.28.356-.32.316-.36.277-.4.198-.44.158-.48.08-.52.04-.52-.04-.52-.08-.48-.158-.44-.198-.4-.237-.36-.277-.32-.316-.28-.356-.24-.395-.2-.435-.16-.474-.12-.514-.08-.554-.04h-.87l-.593.04-.554.08-.514.12-.474.16-.435.2-.395.24-.356.28-.316.32-.277.36-.237.4-.198.44-.158.48-.08.52-.04.52.04.52.08.48.158.44.198.4.237.36.277.32.316.28.356.24.395.2.435.16.474.12.514.08.554.04h1.108l-.158-.32-.198-.28-.237-.28-.277-.24-.316-.2-.356-.16-.395-.12-.435-.08-.474-.04h-.554l-.554.04-.554.08-.514.12-.514.16-.474.2-.435.24-.395.28-.356.32-.316.36-.277.4-.237.44-.198.48-.158.52-.08.56-.04.6" />
  </svg>
);

const GeminiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0C5.352 0 0 5.352 0 12s5.352 12 12 12 12-5.352 12-12S18.648 0 12 0zm0 4.8c3.96 0 7.2 3.24 7.2 7.2s-3.24 7.2-7.2 7.2-7.2-3.24-7.2-7.2S8.04 4.8 12 4.8z" />
  </svg>
);

const PerplexityLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 0L2 7v10l10 7 10-7V7L12 0zm0 2.5L19.5 7 12 11.5 4.5 7 12 2.5zM3.5 8.5l8 5.5v7l-8-5.5v-7zm17 0v7l-8 5.5v-7l8-5.5z" />
  </svg>
);

const CopilotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

// Prompt data with AI platform info - 8 prompts per row for longer loops
const promptRows = [
  {
    direction: "left",
    prompts: [
      { text: "What are the best CRM tools for small businesses?", logo: ChatGPTLogo, color: "text-emerald-400" },
      { text: "How do I improve my website's SEO ranking?", logo: ClaudeLogo, color: "text-orange-400" },
      { text: "Which marketing automation platform is most cost-effective?", logo: GeminiLogo, color: "text-blue-400" },
      { text: "What features should a project management tool have?", logo: PerplexityLogo, color: "text-violet-400" },
      { text: "How to choose the right accounting software?", logo: CopilotLogo, color: "text-pink-400" },
      { text: "Best practices for customer onboarding workflows", logo: ChatGPTLogo, color: "text-emerald-400" },
      { text: "What integrations are essential for sales teams?", logo: ClaudeLogo, color: "text-orange-400" },
      { text: "How to build an effective landing page for conversions?", logo: GeminiLogo, color: "text-blue-400" },
    ],
  },
  {
    direction: "right",
    prompts: [
      { text: "How does AI help with lead generation?", logo: GeminiLogo, color: "text-blue-400" },
      { text: "What email marketing platform has the best deliverability?", logo: PerplexityLogo, color: "text-violet-400" },
      { text: "How to set up automated customer support?", logo: CopilotLogo, color: "text-pink-400" },
      { text: "Which analytics tools integrate with Shopify?", logo: ChatGPTLogo, color: "text-emerald-400" },
      { text: "Best invoicing software for freelancers", logo: ClaudeLogo, color: "text-orange-400" },
      { text: "How do I track customer journey touchpoints?", logo: GeminiLogo, color: "text-blue-400" },
      { text: "What CRM features improve customer retention?", logo: PerplexityLogo, color: "text-violet-400" },
      { text: "Which tools help with competitor analysis?", logo: CopilotLogo, color: "text-pink-400" },
    ],
  },
  {
    direction: "left",
    prompts: [
      { text: "Which tools help with social media scheduling?", logo: CopilotLogo, color: "text-pink-400" },
      { text: "How to automate repetitive business tasks?", logo: ChatGPTLogo, color: "text-emerald-400" },
      { text: "What security certifications should SaaS tools have?", logo: ClaudeLogo, color: "text-orange-400" },
      { text: "Best collaboration tools for remote teams", logo: GeminiLogo, color: "text-blue-400" },
      { text: "How to integrate payment processing with my website?", logo: PerplexityLogo, color: "text-violet-400" },
      { text: "What reporting features matter most for sales?", logo: CopilotLogo, color: "text-pink-400" },
      { text: "How to migrate data between CRM systems?", logo: ChatGPTLogo, color: "text-emerald-400" },
      { text: "What are the best A/B testing tools for websites?", logo: ClaudeLogo, color: "text-orange-400" },
    ],
  },
];

interface PromptCardProps {
  text: string;
  Logo: React.FC;
  color: string;
}

function PromptCard({ text, Logo, color }: PromptCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-full p-[1.5px] overflow-hidden flex-shrink-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated flowing gradient border - like hero section */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-300",
          isHovered ? "opacity-80" : "opacity-40"
        )}
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
      
      {/* Inner card content */}
      <div 
        className={cn(
          "relative flex items-center gap-3 px-4 py-2.5 rounded-full",
          "bg-card/90 backdrop-blur-sm",
          "transition-all duration-300 ease-out whitespace-nowrap",
        )}
      >
        {/* Logo - always visible */}
        <span className={cn("flex-shrink-0 transition-all duration-300", color, isHovered && "opacity-50")}>
          <Logo />
        </span>
        
        {/* Text - blurs on hover */}
        <span 
          className={cn(
            "text-sm text-muted-foreground transition-all duration-300",
            isHovered && "blur-[3px] opacity-30"
          )}
        >
          {text}
        </span>
        
        {/* Track Prompt Button - centered overlay on hover */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-full",
            "transition-all duration-300 ease-out",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium shadow-lg">
            <Plus size={14} />
            <span>Track Prompt</span>
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

interface PromptRowProps {
  prompts: Array<{ text: string; logo: React.FC; color: string }>;
  direction: "left" | "right";
  duration: number;
  delay: number;
  isInView: boolean;
}

function PromptRow({ prompts, direction, duration, delay, isInView }: PromptRowProps) {
  // Double the prompts for seamless loop
  const duplicatedPrompts = [...prompts, ...prompts];

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden py-2",
        "transition-all duration-1000 ease-out",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div
        className="flex gap-4 will-change-transform"
        style={{
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} ${duration}s linear infinite`,
        }}
      >
        {duplicatedPrompts.map((prompt, index) => (
          <PromptCard
            key={`${prompt.text}-${index}`}
            text={prompt.text}
            Logo={prompt.logo}
            color={prompt.color}
          />
        ))}
      </div>
    </div>
  );
}

export function FunFactorSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header with orchestrated animation */}
        <div 
          className={cn(
            "text-center mb-16",
            "transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <h2 
            className={cn(
              "text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight",
              "transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            AI platforms are becoming the new search engines.
          </h2>
          <p 
            className={cn(
              "text-xl md:text-2xl text-muted-foreground",
              "transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "250ms" }}
          >
            Track the prompts that define your brand's relevance.
          </p>
        </div>

        {/* Scrolling Prompt Rows with staggered animations */}
        <div className="flex flex-col gap-4">
          <PromptRow prompts={promptRows[0].prompts} direction="left" duration={80} delay={400} isInView={isInView} />
          <PromptRow prompts={promptRows[1].prompts} direction="right" duration={90} delay={550} isInView={isInView} />
          <PromptRow prompts={promptRows[2].prompts} direction="left" duration={85} delay={700} isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
