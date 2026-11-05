import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "glow" | "emerald" | "violet" | "cyan" | "amber";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-zinc-800/80 text-zinc-300 border-zinc-700/60 shadow-sm",
    outline:
      "bg-transparent text-zinc-400 border-white/10 hover:border-white/25",
    glow:
      "bg-blue-500/10 text-blue-400 border-blue-500/25 shadow-[0_0_12px_rgba(59,130,246,0.15)]",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    violet:
      "bg-violet-500/10 text-violet-400 border-violet-500/25 shadow-[0_0_12px_rgba(139,92,246,0.15)]",
    cyan:
      "bg-cyan-500/10 text-cyan-400 border-cyan-500/25 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    amber:
      "bg-amber-500/10 text-amber-400 border-amber-500/25 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
  };

  const dotColors = {
    default: "bg-zinc-400",
    outline: "bg-zinc-400",
    glow: "bg-blue-400",
    emerald: "bg-emerald-400 animate-pulse",
    violet: "bg-violet-400",
    cyan: "bg-cyan-400",
    amber: "bg-amber-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-md transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full inline-block", dotColors[variant])}
        />
      )}
      {children}
    </div>
  );
}

