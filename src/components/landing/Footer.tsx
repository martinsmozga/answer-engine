import { CheckCircle } from "lucide-react";

const footerLinks = [
  { label: "Audit", href: "#" },
  { label: "Execution Engine", href: "#execution" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                Aisearche
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              The AI Sales Engine
            </p>
            <p className="text-xs text-muted-foreground max-w-xs">
              You build the business. We make sure the machines know how to sell
              it.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-glow-green" />
            <span className="text-muted-foreground">All systems operational</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Copyright © 2026 Aisearche. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
