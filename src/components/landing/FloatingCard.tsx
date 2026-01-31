import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export function FloatingCard({
  children,
  className,
  delay = 0,
  reverse = false,
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-4 shadow-lg",
        reverse ? "animate-float-reverse" : "animate-float",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
