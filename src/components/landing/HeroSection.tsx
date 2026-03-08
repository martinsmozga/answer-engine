import { AuditInput } from "./AuditInput";
import { AILogos } from "./AILogos";
import { Plane, MapPin, Hotel, Utensils } from "lucide-react";
import heroTravel from "@/assets/hero-travel.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <img
          src={heroTravel}
          alt="Luxury tropical resort aerial view"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient — text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-xs font-semibold tracking-wide">
              <Plane size={14} className="animate-pulse" />
              <span>AI VISIBILITY FOR TOURISM</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 md:mb-8 leading-[1.05] tracking-tight">
            Tourists Ask AI
            <br />
            <span className="gradient-text">Where to Go.</span>
            <br />
            <span className="text-muted-foreground">Can AI Find You?</span>
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8 md:mb-10">
            65% of travelers now use ChatGPT, Gemini & Perplexity to plan trips. If AI can't find your hotel, restaurant, or tour — you're invisible to millions of tourists.
          </p>

          {/* Industry tags */}
          <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
            {[
              { icon: Hotel, label: "Hotels & Resorts" },
              { icon: Utensils, label: "Restaurants & Cafés" },
              { icon: MapPin, label: "Tours & Experiences" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card/50 text-xs text-muted-foreground"
              >
                <item.icon size={12} className="text-primary" />
                {item.label}
              </div>
            ))}
          </div>

          {/* Audit Input */}
          <div className="mb-10 md:mb-14">
            <AuditInput />
          </div>

          {/* AI Logos */}
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
              Where travelers search for their next trip
            </p>
            <AILogos />
          </div>
        </div>
      </div>
    </section>
  );
}
