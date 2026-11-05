"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "default" | "glow" | "outline" | "ghost" | "secondary" | "subtle";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer overflow-hidden rounded-full";

    const variantStyles = {
      default:
        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:from-blue-500 hover:to-indigo-500 border border-blue-400/20",
      glow:
        "bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] border border-cyan-300/30 font-semibold tracking-wide",
      outline:
        "border border-white/15 bg-white/[0.03] backdrop-blur-md text-white/90 hover:bg-white/[0.08] hover:border-white/25 hover:text-white",
      secondary:
        "bg-zinc-800/80 backdrop-blur-md text-zinc-100 hover:bg-zinc-700/80 border border-zinc-700/50",
      ghost:
        "text-zinc-300 hover:text-white hover:bg-white/[0.06]",
      subtle:
        "bg-blue-950/40 text-blue-300 border border-blue-800/40 hover:bg-blue-900/40",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
      md: "text-sm px-5 py-2.5 h-11 gap-2",
      lg: "text-base px-7 py-3.5 h-13 gap-2.5",
      icon: "h-10 w-10 p-0 rounded-full",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

