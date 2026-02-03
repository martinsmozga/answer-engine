import { Quote, TrendingUp, Zap, Target, ExternalLink } from "lucide-react";

// Industry quotes from real sources
const industryQuotes = [
  {
    quote: "The future of search is not about lists of links. It's about getting the answer. It's about a shift from search engines to answer engines.",
    author: "Sam Altman",
    title: "CEO of OpenAI",
    icon: Zap,
  },
  {
    quote: "We are moving from a world of search engine optimization to 'Search Everywhere Optimization.' You need to be visible where the answer is generated.",
    author: "Neil Patel",
    title: "CMO & Co-Founder of NP Digital",
    icon: Target,
  },
  {
    quote: "People aren't looking for blue links anymore. They are looking for recommendations to adopt. The cognitive load of research is shifting from the user to the AI.",
    author: "Forrester Research",
    title: "Industry Analysis",
    icon: TrendingUp,
  },
];

const industryStats = [
  {
    stat: "60%",
    context: "of searches now end without a click",
    source: "HubSpot Marketing Trends Report",
    insight: "If you aren't the cited answer, you aren't seen at all.",
  },
  {
    stat: "Zero-Click",
    context: "is the new battlefield",
    source: "Google Search Central / Search Engine Journal",
    insight: "AI systems need clear, hierarchical information to extract and synthesize.",
  },
];

// Featured Quote Component
function FeaturedQuote() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-glow-purple/10 to-primary/10 rounded-3xl blur-3xl" />
      
      <div className="relative glass-card rounded-3xl p-8 md:p-12">
        {/* Quote icon */}
        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-glow-purple flex items-center justify-center">
          <Quote size={24} className="text-primary-foreground" />
        </div>
        
        {/* Badge */}
        <div className="flex justify-end mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold">
            Industry Shift
          </span>
        </div>
        
        {/* Quote text */}
        <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
          "To rank in AI, content must be <span className="text-primary font-medium">structured and scannable</span>. AI systems need clear, hierarchical information to extract and synthesize. <span className="text-primary font-medium">Unstructured content will be ignored.</span>"
        </blockquote>
        
        {/* Source */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-glow-purple rounded-full blur-sm opacity-50" />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-card to-card/80 border border-primary/30 flex items-center justify-center">
              <ExternalLink size={20} className="text-primary" />
            </div>
          </div>
          
          <div>
            <p className="font-semibold text-foreground">Google Search Central</p>
            <p className="text-sm text-muted-foreground">
              via <span className="text-primary">Search Engine Journal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Industry Quote Card Component
function IndustryQuoteCard({ quote }: { quote: typeof industryQuotes[0] }) {
  const Icon = quote.icon;
  
  return (
    <div className="glass-card rounded-2xl p-6 hover-lift group h-full flex flex-col">
      {/* Icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon size={20} className="text-primary" />
        </div>
      </div>
      
      {/* Quote */}
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
        "{quote.quote}"
      </p>
      
      {/* Author */}
      <div className="pt-4 border-t border-white/5">
        <p className="font-medium text-foreground text-sm">{quote.author}</p>
        <p className="text-xs text-muted-foreground">
          {quote.title}
        </p>
      </div>
    </div>
  );
}

// Industry Stats Component
function IndustryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {industryStats.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl p-6 md:p-8"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.8) 100%)',
          }}
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-glow-purple to-glow-orange" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-shrink-0">
              <span className="text-4xl md:text-5xl font-bold gradient-text">
                {item.stat}
              </span>
            </div>
            <div className="flex-grow">
              <p className="text-foreground font-medium mb-1">
                {item.context}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {item.insight}
              </p>
              <p className="text-xs text-primary/80">
                — {item.source}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExecutionSection() {
  return (
    <section id="industry-benchmark" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <TrendingUp size={14} />
            <span>THE INDUSTRY SHIFT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            This Isn't a Trend —{" "}
            <span className="gradient-text">It's the New Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry leaders and research confirm: AI-powered search is fundamentally changing how businesses get discovered. Here's what the data shows.
          </p>
        </div>

        {/* Industry Stats */}
        <div className="mb-16">
          <IndustryStats />
        </div>

        {/* Featured Quote */}
        <div className="mb-16">
          <FeaturedQuote />
        </div>

        {/* Industry Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryQuotes.map((quote, index) => (
            <IndustryQuoteCard key={index} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
}
