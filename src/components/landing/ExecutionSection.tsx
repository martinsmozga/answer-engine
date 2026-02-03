import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

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

export function ExecutionSection() {
  const { ref: sectionRef, isInView } = useInView(0.1);

  return (
    <section 
      ref={sectionRef}
      id="industry-shift" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            The Shift is Happening
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Search is evolving.
            <br />
            <span className="text-muted-foreground">Your strategy should too.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AI assistants are becoming the first place people go for answers. 
            The businesses that adapt now will define the next decade.
          </p>
        </div>

        {/* Featured Quote - Sam Altman */}
        <div 
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* Subtle glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-glow-purple/5 to-transparent rounded-3xl blur-2xl" />
            
            <div className="relative border-l-2 border-primary/40 pl-8 md:pl-12 py-4">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug mb-6">
                "The future of search is not about lists of links. 
                <span className="text-primary"> It's about getting the answer.</span>"
              </blockquote>
              <cite className="not-italic">
                <span className="text-foreground font-medium">Sam Altman</span>
                <span className="text-muted-foreground"> · CEO of OpenAI</span>
              </cite>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <StatCard
            number="60%"
            label="of searches now end without a click"
            source="Sparktoro / HubSpot"
          />
          <StatCard
            number="1B+"
            label="weekly users on ChatGPT alone"
            source="OpenAI, 2024"
          />
          <StatCard
            number="40%"
            label="of Gen Z prefers AI over traditional search"
            source="Adobe Consumer Survey"
          />
        </div>

        {/* Expert Voices */}
        <div 
          className={`transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
            What industry leaders are saying
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <QuoteCard
              quote="We are moving from SEO to 'Search Everywhere Optimization.' You need to be visible where the answer is generated."
              author="Neil Patel"
              title="Marketing Pioneer"
            />
            <QuoteCard
              quote="The cognitive load of research is shifting from the user to the AI. People want recommendations, not research projects."
              author="Forrester Research"
              title="Industry Analysis"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-20 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6">
            The question isn't <em>if</em> this matters — it's whether you're ready.
          </p>
          <a 
            href="#audit" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            See where you stand
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({ 
  number, 
  label, 
  source 
}: { 
  number: string; 
  label: string; 
  source: string;
}) {
  return (
    <div className="relative group">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-glow-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300">
        <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
          {number}
        </div>
        <p className="text-foreground font-medium mb-2">
          {label}
        </p>
        <p className="text-xs text-muted-foreground/70">
          Source: {source}
        </p>
      </div>
    </div>
  );
}

// Quote Card Component
function QuoteCard({ 
  quote, 
  author, 
  title 
}: { 
  quote: string; 
  author: string; 
  title: string;
}) {
  return (
    <div className="relative group">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-glow-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300 h-full">
        <p className="text-muted-foreground leading-relaxed mb-6">
          "{quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-glow-purple/20 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{author}</p>
            <p className="text-xs text-muted-foreground">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
