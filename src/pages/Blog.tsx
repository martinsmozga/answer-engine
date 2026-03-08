import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const posts = [
  {
    slug: "ai-search-optimization",
    title: "How AI Search Engines Recommend Brands — And How to Get Cited",
    excerpt:
      "AI search optimization (AEO) is the practice of structuring your website so AI platforms like ChatGPT, Perplexity, and Google AI Overviews can discover, extract, and cite your brand.",
    readTime: "18 min read",
    date: "March 8, 2026",
    tags: ["AI Search", "AEO", "Strategy"],
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Insights on AI search optimization, answer engine strategy, and how brands win citations across ChatGPT, Perplexity, and Google AI Overviews.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block group rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-primary/30 transition-all duration-300 hover-lift"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </span>
                  </div>
                  <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
