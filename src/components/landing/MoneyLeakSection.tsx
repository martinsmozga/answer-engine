import { EyeOff, History, ShieldOff, DollarSign } from "lucide-react";

const leaks = [
  {
    number: "01",
    title: "The Silent Treatment",
    subtitle: "(Invisibility)",
    icon: EyeOff,
    description:
      "You have the best offer in town, but when a customer asks ChatGPT, it says: 'I can't find pricing for this business.' That is a confirmed sale lost to a competitor with worse prices but better code.",
    gradient: "from-red-500/20 to-orange-500/20",
    iconBg: "bg-red-500/20",
    iconColor: "text-red-400",
  },
  {
    number: "02",
    title: 'The "Old News"',
    subtitle: "(Hallucination)",
    icon: History,
    description:
      "You launched a killer new product yesterday. But AI is still telling users about the thing you sold 3 years ago because it cannot read your updates.",
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    number: "03",
    title: "The Gatekeeper",
    subtitle: "(Access)",
    icon: ShieldOff,
    description:
      'You think your site is secure. In reality, your firewall is blocking the new "Sales Agents" (AI Bots) from entering your store.',
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
];

export function MoneyLeakSection() {
  return (
    <section id="money-leak" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-destructive/20 text-destructive text-sm font-medium mb-6">
            <DollarSign size={14} />
            <span>MONEY LEFT ON THE TABLE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            3 Ways You're Losing{" "}
            <span className="gradient-text-warm">"Easy Money"</span> Right Now
          </h2>
        </div>

        {/* Leak Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {leaks.map((leak, index) => {
            const Icon = leak.icon;
            return (
              <div
                key={leak.number}
                className="group relative glass-card rounded-2xl p-8 hover-lift overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${leak.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Number */}
                  <span className="text-6xl font-bold text-muted/30 absolute -top-2 -left-2">
                    {leak.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${leak.iconBg} flex items-center justify-center mb-6 mt-8`}
                  >
                    <Icon size={28} className={leak.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {leak.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {leak.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {leak.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
