import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Aisearche do for my tourism business?",
    answer:
      "Aisearche makes your hotel, restaurant, café, tour company, or travel agency visible to AI travel assistants like ChatGPT, Gemini, and Perplexity. When travelers ask AI 'best hotels in [your city]' or 'where to eat in [your area]', we make sure your business is the one AI recommends.",
  },
  {
    question: "Is this just another SEO tool?",
    answer:
      "No. Traditional SEO tools help you rank on Google. Aisearche helps you get recommended by AI assistants that travelers are now using to plan trips. These are fundamentally different channels — when a tourist asks ChatGPT for hotel recommendations, Google rankings don't matter. AI visibility does.",
  },
  {
    question: "I'm a small hotel / restaurant. Can I compete with big chains?",
    answer:
      "Absolutely. AI travel assistants prioritize relevance and quality over brand size. A boutique hotel with well-structured content often gets recommended over a large chain that hasn't optimized for AI. In fact, AI tends to favor unique, local experiences — which is exactly what small tourism businesses offer.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Some changes (like unblocking AI crawlers) can show impact within days. Content structure and schema improvements typically take 2-6 weeks to propagate through AI retrieval indexes. Most tourism businesses see measurable improvement in AI mentions within the first month.",
  },
  {
    question: "Which AI platforms do travelers actually use?",
    answer:
      "ChatGPT, Google Gemini, Perplexity, and Microsoft Copilot are the primary ones. Travelers use them to find hotels, restaurants, activities, and plan entire itineraries. We optimize your presence across all of them simultaneously.",
  },
  {
    question: "Do I need technical skills to use this?",
    answer:
      "Not at all. Our audit runs automatically — just enter your website URL and we handle the rest. The recommendations we provide are clear, prioritized, and many can be implemented without any technical knowledge. For technical fixes, we provide step-by-step guides.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle size={14} />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Questions from Tourism{" "}
            <span className="gradient-text">Professionals</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-2xl px-6 border-none">
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
