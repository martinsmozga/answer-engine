import { useEffect, useRef, useState } from "react";
import { Star, Quote, Users } from "lucide-react";

// Testimonial data
const featuredTestimonial = {
  quote: "Aisearche showed us exactly what AI was seeing — and what we were missing. It was like flipping on a light switch. Within weeks, we went from invisible to cited right alongside the biggest players in our space.",
  highlight: "4x visibility growth",
  author: "Maria Rodriguez",
  title: "VP of Marketing",
  company: "GrowthLabs",
  avatar: "MR",
};

const testimonials = [
  {
    quote: "Within 2 months, our AI visibility quadrupled. We're now being cited in answers we never even knew existed.",
    highlight: "4x growth in AI visibility",
    author: "Sarah Chen",
    title: "Head of Growth",
    company: "TechScale",
    avatar: "SC",
  },
  {
    quote: "Finally understand why we weren't showing up in AI answers. The audit revealed blocks we had no idea existed.",
    highlight: "12 critical issues found",
    author: "James Porter",
    title: "CMO",
    company: "InnovateCo",
    avatar: "JP",
  },
  {
    quote: "The weekly reports alone are worth the investment. We know exactly where we stand in every AI platform.",
    highlight: "Weekly AI insights",
    author: "Elena Voss",
    title: "Founder & CEO",
    company: "ScaleUp",
    avatar: "EV",
  },
];

const companyLogos = [
  "TechScale",
  "GrowthLabs",
  "InnovateCo",
  "ScaleUp",
  "DataFlow",
  "CloudFirst",
  "NextLevel",
  "Synergy",
  "Amplify",
  "Vertex",
];

const trustMetrics = [
  { value: 500, suffix: "+", label: "Businesses Trust Us" },
  { value: 10, suffix: "M+", label: "AI Queries Analyzed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

// Custom hook for count-up animation
function useCountUp(target: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startOnView && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration, hasStarted]);

  return { count, ref };
}

// Logo Marquee Component
function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Marquee track */}
      <div className="flex animate-marquee">
        {[...companyLogos, ...companyLogos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-3 glass rounded-lg border border-white/5"
          >
            <span className="text-muted-foreground font-medium text-sm tracking-wide">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Featured Testimonial Component
function FeaturedTestimonial() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-glow-purple/10 to-primary/10 rounded-3xl blur-3xl" />
      
      <div className="relative glass-card rounded-3xl p-8 md:p-12">
        {/* Quote icon */}
        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-glow-purple flex items-center justify-center">
          <Quote size={24} className="text-primary-foreground" />
        </div>
        
        {/* Highlight badge */}
        <div className="flex justify-end mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold">
            {featuredTestimonial.highlight}
          </span>
        </div>
        
        {/* Quote text */}
        <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
          "{featuredTestimonial.quote}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar with gradient ring */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-glow-purple rounded-full blur-sm animate-pulse" />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-glow-purple flex items-center justify-center text-primary-foreground font-bold text-lg">
              {featuredTestimonial.avatar}
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-foreground">{featuredTestimonial.author}</p>
            <p className="text-sm text-muted-foreground">
              {featuredTestimonial.title}, <span className="text-primary">{featuredTestimonial.company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card rounded-2xl p-6 hover-lift group">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-glow-orange text-glow-orange"
          />
        ))}
      </div>
      
      {/* Highlight badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          {testimonial.highlight}
        </span>
      </div>
      
      {/* Quote */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-glow-purple/80 flex items-center justify-center text-primary-foreground font-medium text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

// Trust Metrics Component
function TrustMetrics() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      {trustMetrics.map((metric, index) => {
        const { count, ref } = useCountUp(metric.value);
        
        return (
          <div key={index} ref={ref} className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {count}{metric.suffix}
            </div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ExecutionSection() {
  return (
    <section id="social-proof" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <Users size={14} />
            <span>TRUSTED BY INNOVATORS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Join Businesses Already{" "}
            <span className="gradient-text">Winning the AI Search Game</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Companies like yours are already being discovered, cited, and recommended by AI. Here's what they're saying.
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="mb-16">
          <LogoMarquee />
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <FeaturedTestimonial />
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="pt-8 border-t border-white/5">
          <TrustMetrics />
        </div>
      </div>
    </section>
  );
}
