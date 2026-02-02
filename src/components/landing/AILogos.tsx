import { cn } from "@/lib/utils";

const aiPlatforms = [
  { name: "ChatGPT", color: "from-pink-400 to-rose-500" },
  { name: "Google Gemini", color: "from-fuchsia-400 to-purple-500" },
  { name: "Perplexity", color: "from-orange-400 to-pink-500" },
  { name: "Claude", color: "from-violet-400 to-fuchsia-500" },
  { name: "Copilot", color: "from-rose-400 to-orange-500" },
];

export function AILogos() {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {aiPlatforms.map((platform, index) => (
        <div
          key={platform.name}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/5",
            "hover:border-white/10 transition-all duration-300 hover:scale-105 cursor-default",
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
