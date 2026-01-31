import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this just another SEO tool?",
    answer:
      "No. Traditional SEO tools help you rank on Google. Aisearche helps you get recommended by AI assistants like ChatGPT, Gemini, and Perplexity. These are fundamentally different channels with different optimization strategies. We focus on making your business the answer, not just a link.",
  },
  {
    question: "I'm a small team. Do I have time for this?",
    answer:
      "That's exactly why we built Aisearche. The audit takes seconds, not hours. The fixes we recommend are prioritized by revenue impact. Most businesses see measurable improvements within the first week of implementing our top recommendations. You spend less time fighting algorithms and more time running your business.",
  },
  {
    question: "Will this actually get me sales?",
    answer:
      "LLM searches have 3-6x higher buying intent than traditional Google searches. When someone asks ChatGPT 'what's the best [your service] near me,' they're ready to buy. Our job is to make sure you're the recommendation. Clients typically see a 15-40% increase in inbound leads within 30 days.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle size={14} />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Hustler Objections,{" "}
            <span className="gradient-text">Answered.</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-none"
              >
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
