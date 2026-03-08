import { cn } from "@/lib/utils";

const aiPlatforms = [
  { name: "ChatGPT", color: "from-amber-400 to-yellow-600" },
  { name: "Google Gemini", color: "from-yellow-500 to-amber-600" },
  { name: "Perplexity", color: "from-amber-300 to-yellow-500" },
  { name: "Claude", color: "from-yellow-400 to-amber-500" },
  { name: "Copilot", color: "from-amber-500 to-yellow-700" },
];

export function AILogos() {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {aiPlatforms.map((platform, index) => (
        <div
          key={platform.name}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5",
            "hover:border-primary/20 transition-all duration-300 hover:scale-105 cursor-default",
            "animate-fade-in"
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className={cn(
              "w-2 h-2 rounded-full bg-gradient-to-r",
              platform.color
            )}
          />
          <span className="text-sm text-muted-foreground">{platform.name}</span>
        </div>
      ))}
    </div>
  );
}