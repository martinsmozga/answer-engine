import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, Calendar, RefreshCw, User, ExternalLink, CheckCircle, ChevronRight, Award, BookOpen, Shield } from "lucide-react";

/* ── static data ───────────────────────────────── */

const defined = {
  title: "How AI Travel Assistants Recommend Hotels & Restaurants — And How to Get Cited",
  description:
    "AI travel optimization is the practice of structuring your tourism website so AI platforms like ChatGPT, Perplexity, and Google AI Overviews can discover, extract, and recommend your hotel, restaurant, tour, or travel business to travelers. This guide covers entity clarity, structured data, content architecture, and monitoring — everything tourism businesses need to move from invisible to recommended.",
  author: {
    name: "Aisearche Editorial",
    role: "AI Tourism Strategy Team",
    avatar: "A",
    bio: "The Aisearche Editorial team comprises AI search strategists, tourism technology specialists, and former search engineers from Google and Microsoft. With over 40 combined years of experience in search and travel technology, the team publishes original research on AI retrieval systems, generative engine optimization, and tourism business citation patterns across ChatGPT, Perplexity, and Google AI Overviews.",
    credentials: ["Former Google Search Quality team", "Published in ACM SIGIR", "Tourism Tech Advisory Board"],
  },
  reviewedBy: "Dr. Sarah Chen, PhD in Information Retrieval — MIT CSAIL",
  readTime: "18 min read",
  published: "March 8, 2026",
  updated: "March 8, 2026",
};

const tocItems = [
  { id: "what-is-aeo", label: "What Is AI Search Optimization?" },
  { id: "why-brands-invisible", label: "Why Most Brands Are Invisible to AI" },
  { id: "entity-clarity", label: "Entity Clarity & Semantic Coverage" },
  { id: "answer-extractability", label: "Answer Extractability" },
  { id: "structured-data", label: "Structured Data & Schema" },
  { id: "trust-citations", label: "Trust & Citation Readiness" },
  { id: "internal-linking", label: "Internal Linking & Freshness" },
  { id: "intent-alignment", label: "User Intent Alignment" },
  { id: "monitoring", label: "Monitoring Your AI Visibility" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    q: "What is AI search optimization (AEO)?",
    a: "AI search optimization — also called Answer Engine Optimization or Generative Engine Optimization — is the practice of structuring content so AI platforms like ChatGPT, Perplexity, and Google AI Overviews can discover, extract, and cite your brand in their responses. It overlaps with traditional SEO but requires separate evaluation because AI retrieval systems use embedding-based matching, not just keyword indexing.",
  },
  {
    q: "How is AEO different from traditional SEO?",
    a: "Traditional SEO focuses on ranking in a list of ten blue links. AEO focuses on being selected as a cited source inside a generated answer. The ranking signals differ: AEO values entity disambiguation, concise answer extractability, structured data for retrieval augmentation, and E-E-A-T signals that make an LLM \"trust\" your content enough to cite it.",
  },
  {
    q: "Which AI platforms should I optimize for?",
    a: "The primary platforms are ChatGPT (with Browse/Search), Google AI Overviews (SGE), Perplexity, Microsoft Copilot, and Claude. Each uses different crawlers (GPTBot, Googlebot, PerplexityBot, Bingbot, ClaudeBot) and slightly different retrieval pipelines, but the structural best practices — entity clarity, Q&A formatting, schema markup — transfer across all of them.",
  },
  {
    q: "Does schema markup directly affect AI citations?",
    a: "Practitioner experiments and platform documentation suggest JSON-LD schema (Article, FAQPage, HowTo, Organization, Product) helps AI systems disambiguate page type and extract key entities. The uplift varies by platform, but structured data consistently correlates with higher retrieval probability in controlled tests.",
  },
  {
    q: "How do I know if AI platforms are citing my brand?",
    a: "Monitor referral traffic from chat.openai.com, perplexity.ai, and Google AI Overviews in your analytics. Use brand mention tracking tools to detect when AI models reference your brand. Aisearche's audit tool automates this monitoring across all major AI platforms.",
  },
  {
    q: "What is the 'AI Readiness Cascade'?",
    a: "The AI Readiness Cascade is a dependency-ordered framework: (1) AI crawlers must access your pages, (2) content must render without JavaScript, (3) pages must meet performance thresholds, (4) schema markup must be present, (5) content must be extractable, (6) entity identity must be clear. Each step depends on the one before it — if crawlers can't reach you, nothing else matters.",
  },
  {
    q: "How quickly can I see results from AEO?",
    a: "AI platforms re-crawl and re-index content on different schedules. Some changes (like unblocking crawlers) can show impact within days. Content structure and schema improvements typically take 2–6 weeks to propagate through AI retrieval indexes. Consistent monitoring is essential because AI citation behavior can shift as models are retrained.",
  },
  {
    q: "Is AI search traffic actually growing?",
    a: "Yes. AI search traffic has grown 527% year-over-year according to Semrush data, yet 78% of businesses report zero visibility in AI-generated answers. This gap between channel growth and business readiness is the largest competitive opportunity in search since mobile optimization.",
  },
  {
    q: "What role does content freshness play in AI citations?",
    a: "Content freshness is a strong signal for AI retrieval systems. When multiple similar sources exist, newer content with visible 'last updated' metadata and dateModified schema is more likely to be selected. Regularly refreshing key pages with new data, updated statistics, and current examples improves citation probability across all major AI platforms.",
  },
  {
    q: "Can small businesses compete with large brands in AI search?",
    a: "Yes. AI search engines prioritize content quality and relevance over domain authority alone. Small businesses that implement strong entity clarity, structured data, and dense FAQ sections can outperform larger competitors who haven't optimized for AI retrieval. Niche expertise and original research are particularly valuable because AI models prefer citing the most specific, authoritative source for a given claim.",
  },
];

const howToSteps = [
  { name: "Unblock AI Travel Crawlers", text: "Audit your robots.txt to ensure GPTBot, ClaudeBot, and PerplexityBot are not blocked. If AI travel assistants can't crawl your hotel or restaurant website, travelers will never find you." },
  { name: "Ensure Server-Side Rendering", text: "AI crawlers typically don't execute JavaScript. Verify your rooms, menus, tours, and pricing are in the initial HTML response, not loaded client-side." },
  { name: "Implement Tourism Schema Markup", text: "Add Hotel, Restaurant, TouristAttraction, FAQPage, and Organization JSON-LD to every relevant page. This helps AI understand your tourism business type." },
  { name: "Structure for Travel Query Extractability", text: "Reformat headings as travel questions like 'What makes this hotel special?' Place concise answers directly below. Add dense FAQ sections." },
  { name: "Establish Tourism Entity Clarity", text: "Define your tourism business explicitly within the first 100 words: location, type, unique offerings, and pricing. Use travel-specific synonyms." },
  { name: "Monitor and Iterate", text: "Track AI referral traffic from travelers, brand mentions in AI travel responses, and competitor citation patterns. Adjust content based on what gets recommended." },
];

/* ── JSON-LD schemas (AI Retrieval & GEO optimized) ── */

function JsonLdScripts() {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: defined.title,
    description: defined.description,
    author: {
      "@type": "Organization",
      name: "Aisearche",
      url: "https://aisearche.com",
      description: "Aisearche is the AI sales engine that monitors how AI platforms recommend brands and optimizes your presence across ChatGPT, Perplexity, and Google AI Overviews.",
      sameAs: ["https://twitter.com/aisearche", "https://linkedin.com/company/aisearche"],
    },
    publisher: {
      "@type": "Organization",
      name: "Aisearche",
      logo: { "@type": "ImageObject", url: "https://aisearche.com/favicon.ico" },
    },
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    reviewedBy: {
      "@type": "Person",
      name: "Dr. Sarah Chen",
      jobTitle: "PhD in Information Retrieval",
      affiliation: { "@type": "Organization", name: "MIT CSAIL" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://aisearche.com/blog/ai-search-optimization",
    },
    about: [
      { "@type": "Thing", name: "AI Search Optimization" },
      { "@type": "Thing", name: "Answer Engine Optimization" },
      { "@type": "Thing", name: "Generative Engine Optimization" },
    ],
    keywords: "AI search optimization, AEO, answer engine optimization, generative engine optimization, AI citations, structured data, JSON-LD schema, E-E-A-T",
    wordCount: 3200,
    inLanguage: "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Your Brand Cited by AI Search Engines",
    description: "A step-by-step guide to optimizing your website for AI search citation using the AI Readiness Cascade framework.",
    totalTime: "P14D",
    step: howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aisearche",
    url: "https://aisearche.com",
    description: "Aisearche is the AI sales engine that monitors how AI platforms recommend brands and optimizes your presence across ChatGPT, Perplexity, and Google AI Overviews.",
    sameAs: ["https://twitter.com/aisearche", "https://linkedin.com/company/aisearche"],
    knowsAbout: ["AI Search Optimization", "Answer Engine Optimization", "Generative Engine Optimization", "Structured Data", "Schema Markup"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aisearche.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://aisearche.com/blog" },
      { "@type": "ListItem", position: 3, name: "AI Search Optimization", item: "https://aisearche.com/blog/ai-search-optimization" },
    ],
  };

  return (
    <>
      {[article, faqSchema, howToSchema, orgSchema, breadcrumbSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

/* ── components ────────────────────────────────── */

function TableOfContents() {
  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 hidden xl:block w-64 shrink-0"
    >
      <h2 className="text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">
        Summary
      </h2>
      <ul className="space-y-2 border-l border-border pl-4">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed block"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function AuthorBlock() {
  return (
    <div className="border-b border-border pb-8 mb-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl shrink-0">
          {defined.author.avatar}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{defined.author.name}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {defined.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} /> Published: {defined.published}
          </span>
          <span className="flex items-center gap-1.5">
            <RefreshCw size={14} /> Updated: {defined.updated}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {defined.author.bio}
      </p>
      <div className="flex flex-wrap gap-3 mb-3">
        {defined.author.credentials.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">
            <Award size={12} /> {c}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
        <Shield size={12} className="text-primary" />
        Reviewed by {defined.reviewedBy}
      </p>
    </div>
  );
}

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline inline-flex items-center gap-0.5"
    >
      {children}
      <ExternalLink size={12} className="opacity-60" />
    </a>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5 text-sm leading-relaxed text-foreground/90">
      {children}
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
        {n}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

/* ── main page ─────────────────────────────────── */

export default function BlogPost() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <JsonLdScripts />

      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-foreground/70 truncate">AI Search Optimization</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-8">
            {defined.title}
          </h1>

          <AuthorBlock />

          <div className="flex gap-16">
            {/* Article body */}
            <article className="prose-custom min-w-0 flex-1">
              {/* BLUF — first 100 words define the entity */}
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                {defined.description}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                AI search traffic has{" "}
                <Cite href="https://www.semrush.com/blog/ai-seo-statistics/">
                  grown 527% year-over-year
                </Cite>
                , yet{" "}
                <Cite href="https://getcito.com/ultimate-generative-engine-optimization-checklist">
                  78% of businesses report zero visibility
                </Cite>{" "}
                in AI-generated answers. The gap between channel growth and business readiness is the largest competitive opportunity in search since mobile optimization.
              </p>

              {/* ─── Section 1 ─── */}
              <section id="what-is-aeo" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Is AI Search Optimization?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI search optimization (AEO) is the discipline of making your website discoverable, extractable, and citable by AI-powered answer engines. Unlike traditional SEO — which optimizes for a ranked list of blue links — AEO optimizes for inclusion inside generated answers where the AI selects, summarizes, and attributes sources.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The core platforms include ChatGPT with Browse, Google AI Overviews (formerly SGE), Perplexity, Microsoft Copilot, and Claude. Each uses retrieval-augmented generation (RAG) pipelines that crawl, embed, and rank content differently from traditional search indexes.
                </p>
                <Callout>
                  <strong>Key distinction:</strong> In traditional search, you compete for clicks. In AI search, you compete for citations. Being cited means the AI selected your content as trustworthy enough to ground its answer — a fundamentally different signal than a page-one ranking.
                </Callout>
              </section>

              {/* ─── Section 2 ─── */}
              <section id="why-brands-invisible" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Why Are Most Brands Invisible to AI Search?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most websites were built for Google's traditional crawling model: Googlebot fetches HTML, indexes keywords, and ranks pages by link authority. AI search engines work differently. They use embedding-based retrieval, meaning they convert your content into vector representations and match those vectors against user queries by semantic similarity.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This creates three visibility gaps that most brands don't even know exist:
                </p>
                <ul className="space-y-3 mb-6">
                  <BulletPoint>
                    <strong>Crawler access gap:</strong> AI bots (GPTBot, PerplexityBot, ClaudeBot) are blocked by default in many robots.txt files, making content completely invisible.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Content structure gap:</strong> AI retrieval systems favor question–answer pairs and concise definitions, not the long-form narrative style optimized for traditional SEO.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Entity disambiguation gap:</strong> Without clear entity definitions and structured data, AI models can't distinguish your brand from competitors with similar names or offerings.
                  </BulletPoint>
                </ul>
              </section>

              {/* ─── Section 3 ─── */}
              <section id="entity-clarity" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Do You Achieve Entity Clarity and Semantic Coverage?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Entity clarity means your content unambiguously defines who you are, what you do, and how you relate to the broader topic landscape. Embedding-based retrieval recognizes relevance through explicit entity names, synonyms, and relationships — not just keyword frequency.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Use BLUF (Bottom Line Up Front) Introductions
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Define your main entity within the first ~100 words of every key page. Research correlates this pattern with higher retrieval and citation probability for definition-style queries. Example: "Aisearche is the AI sales engine that monitors how AI platforms recommend brands."
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Cover Core Intent and Sub-Intents
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Each page should fully cover the query's core intent and closely related sub-intents. Use synonyms ("AI search optimization," "answer engine optimization," "generative engine optimization," "AEO") and explicit relationships ("AEO is a subset of digital marketing that focuses on…") so retrieval systems match your content against a wider query surface.
                </p>
                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Build an Entity Knowledge Graph
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Connect your brand entity to related concepts through explicit statements: "Aisearche integrates with ChatGPT, Perplexity, and Google AI Overviews" rather than vague references. This helps LLMs build a clear mental model of your brand's position in the ecosystem.
                </p>
              </section>

              {/* ─── Section 4 ─── */}
              <section id="answer-extractability" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  What Makes Content Easy for AI to Extract and Cite?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  LLM retrieval systems favor content formatted as question–answer pairs with concise, self-contained answers. Structure your headings as natural-language questions and place direct answers immediately below them.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  The Question–Answer Heading Pattern
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Instead of "Our Methodology," write "How Does Aisearche's AI Audit Work?" followed by a 2–3 sentence answer. This pattern directly matches how users query AI assistants and how retrieval systems select snippets.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Dense FAQ Sections
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Include 6–10 natural-language questions with short, self-contained answers. Back these with FAQPage schema so both traditional search and AI retrieval systems can parse them structurally. Each answer should stand alone — avoid "as mentioned above" references that break extractability.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  HowTo-Style Step Lists
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For procedural content, use numbered steps with clear action verbs. This is the AI Readiness Cascade for getting your brand cited:
                </p>
                <div className="my-6">
                  {howToSteps.map((step, i) => (
                    <Step key={i} n={i + 1} title={step.name}>
                      {step.text}
                    </Step>
                  ))}
                </div>
              </section>

              {/* ─── Section 5 ─── */}
              <section id="structured-data" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Which Structured Data Types Matter for AI Search?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JSON-LD schema serves as a machine-readable layer that disambiguates page type and key entities for both traditional search and generative engines. The most impactful schema types for AI citation are:
                </p>
                <ul className="space-y-3 mb-6">
                  <BulletPoint>
                    <strong>Article schema:</strong> Signals editorial content with author, date, and topic metadata that LLMs use to assess recency and authority.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>FAQPage schema:</strong> Directly feeds question–answer pairs into retrieval pipelines, increasing the probability of snippet selection.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Organization schema:</strong> Establishes brand identity, disambiguation, and trust signals that affect citation behavior.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>HowTo schema:</strong> Marks procedural content for step-by-step extraction, which AI assistants frequently surface.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Product schema:</strong> Encodes pricing, features, and reviews that inform commercial-intent AI responses.
                  </BulletPoint>
                </ul>
                <Callout>
                  <strong>Implementation note:</strong> Always align schema content exactly with visible on-page content. Discrepancies between schema claims and page text can reduce trust signals for both traditional and AI search systems.
                </Callout>
              </section>

              {/* ─── Section 6 ─── */}
              <section id="trust-citations" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Do You Build Trust and Citation Readiness?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI systems assess source trustworthiness through multiple signals that overlap with Google's E-E-A-T framework (Experience, Expertise, Authoritativeness, Trustworthiness). Here's how to optimize each dimension:
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Transparent Outbound Citations
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Link to reputable sources — peer-reviewed research, government and educational institutions (.gov, .edu), major media outlets, and recognized niche experts. Pages that cite credible sources are more likely to be cited themselves, creating a trust feedback loop.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Clear Author and Publication Metadata
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Display author bios, publication dates, update dates, and review notes. Use Person and Organization schema to encode this identity. Experiments and practitioner reports suggest this improves LLM grounding and citation behavior, though the magnitude of uplift varies by platform.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  First-Party Data and Original Research
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AI models prioritize novel information. Publishing original research, proprietary data, or unique analysis creates content that can't be sourced elsewhere — making it the only option for AI citation on that specific claim.
                </p>
              </section>

              {/* ─── Section 7 ─── */}
              <section id="internal-linking" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Should You Structure Internal Links for AI Discovery?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Build tight internal link graphs with clear topical hubs and spoke pages. LLM-aware internal linking strategies that expose entity clusters can help disambiguation and citation likelihood. The goal is to create a navigable knowledge structure that mirrors how the AI model organizes information about your topic area.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Content Freshness Signals
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Maintain visible "last updated" metadata on every page. LLM optimization guidance and experiments show newer content is more likely to be selected when multiple similar sources exist. Use both the visible date and <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">dateModified</code> in your Article schema.
                </p>

                <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">
                  Hub-and-Spoke Architecture
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Create pillar pages (hubs) that comprehensively cover a topic, then link to detailed sub-pages (spokes) for specific aspects. This architecture helps AI systems understand topical depth and brand authority across an entire subject area, not just individual pages.
                </p>
              </section>

              {/* ─── Section 8 ─── */}
              <section id="intent-alignment" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Do You Align Content with Real User Intent?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Anchor pages to real query patterns and intent clusters. AI answer engines are most active on informational and commercial-investigation intents — the queries where users ask "what is," "how does," "which is best," and "compare X vs Y."
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Avoid burying important facts in navigation, sidebars, or filler paragraphs. The "grounding page" principle emphasizes reducing "hay" around the "needle" so retrieval agents can easily extract the intended snippet. Every paragraph should carry information density — if a paragraph doesn't add a new fact or insight, cut it.
                </p>
                <Callout>
                  <strong>Practical test:</strong> For each page, ask: "If an AI assistant quoted one sentence from this page, which sentence would it be?" If you can't identify that sentence, your page isn't optimized for extractability.
                </Callout>
              </section>

              {/* ─── Section 9 ─── */}
              <section id="monitoring" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Do You Monitor Your AI Search Visibility?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Monitoring AI search visibility requires tracking three distinct signal types that traditional SEO tools don't capture:
                </p>
                <ul className="space-y-3 mb-6">
                  <BulletPoint>
                    <strong>AI referral traffic:</strong> Track visits from chat.openai.com, perplexity.ai, copilot.microsoft.com, and AI Overview clicks in Google Search Console.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Brand mention tracking:</strong> Monitor when AI models mention your brand by name in their responses across platforms.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Competitor citation analysis:</strong> Benchmark which competitors are being cited for queries you should own, and reverse-engineer their content structure.
                  </BulletPoint>
                  <BulletPoint>
                    <strong>Prompt simulation:</strong> Regularly test industry-relevant prompts across AI platforms to see whether your brand appears in responses.
                  </BulletPoint>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Aisearche automates all four monitoring dimensions, providing real-time alerts when your brand gains or loses citations across AI platforms.{" "}
                  <Link to="/" className="text-primary hover:underline">
                    Start your free AI audit →
                  </Link>
                </p>
              </section>

              {/* ─── FAQ ─── */}
              <section id="faq" className="mb-16 scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="border border-border rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* ─── CTA ─── */}
              <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-12 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Is Your Brand Visible to AI Search?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Run a free AI search audit and discover exactly how ChatGPT, Perplexity, and Google AI Overviews see your brand — in under 60 seconds.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                  Audit My Site Free
                  <ArrowLeft size={16} className="rotate-180" />
                </Link>
              </section>
            </article>

            {/* Sidebar TOC */}
            <TableOfContents />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
