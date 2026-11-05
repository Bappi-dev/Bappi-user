"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Terminal, Shield, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function Footer() {
  const [localTime, setLocalTime] = useState("");
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-zinc-950/80 backdrop-blur-xl py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-white">
              {PERSONAL_INFO.monogram}
            </div>
            <span className="text-sm font-semibold text-white">
              {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="h-4 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Local Time: {localTime || "12:00:00 PM"}</span>
          </div>
        </div>

        {/* Center: Tech Tribute */}
        <div className="text-xs text-zinc-500 font-mono text-center flex items-center gap-1.5">
          <span>Engineered with Next.js 16 • Tailwind CSS • Framer Motion</span>
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer shadow-sm"
          aria-label="Scroll to top of page"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500">
        <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="font-mono">Designed for highest aesthetic & performance benchmark.</p>
      </div>
    </footer>
  );
}

