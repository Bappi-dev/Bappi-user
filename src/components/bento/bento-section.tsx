"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Globe2,
  Clock,
  CheckCircle2,
  GitBranch,
  Terminal,
  Zap,
} from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export function BentoSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="cyan" dot className="mb-3">
          About & Architecture
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Crafting resilient systems from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            database to pixel
          </span>
          .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
          A harmonious balance between scalable distributed microservices, clean REST API contracts, and fluid user experiences.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1: Main Bio & Philosophy (Span 2 cols, 2 rows on large screens) */}
        <SpotlightCard
          className="md:col-span-2 lg:col-span-2 p-8 flex flex-col justify-between"
          spotlightColor="rgba(59, 130, 246, 0.2)"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Code className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Full-Stack Philosophy
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
              Bridging robust backend engineering with visual elegance.
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              I specialize in the <span className="text-white font-semibold">MERN ecosystem and Next.js App Router</span>. My work spans designing robust Node.js/Express REST APIs with token-based JWT security, structuring MongoDB replica sets and aggregation pipelines, and engineering high-impact web interfaces with Framer Motion and Tailwind CSS.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Every system I build adheres to strict TypeScript type safety, zero layout shifts, optimized TTFB, and defensive API validation using Zod.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
              Next.js 16
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
              Node.js & Express
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
              MongoDB Mongoose
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
              JWT & OAuth
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
              Framer Motion
            </span>
          </div>
        </SpotlightCard>

        {/* Card 2: Stat - Years of Experience */}
        <SpotlightCard
          className="flex flex-col justify-between"
          spotlightColor="rgba(139, 92, 246, 0.2)"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Experience
            </span>
            <Zap className="w-4 h-4 text-violet-400" />
          </div>
          <div className="my-auto">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-300 mb-1">
              {PERSONAL_INFO.yearsOfExperience}
            </div>
            <div className="text-sm font-semibold text-white">Years Crafting Software</div>
            <p className="text-xs text-zinc-400 mt-1">
              From early-stage MVPs to enterprise high-load production systems.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 3: Stat - Projects Shipped */}
        <SpotlightCard
          className="flex flex-col justify-between"
          spotlightColor="rgba(6, 182, 212, 0.2)"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Deliverables
            </span>
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="my-auto">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
              {PERSONAL_INFO.projectsCompleted}
            </div>
            <div className="text-sm font-semibold text-white">Shipped Applications</div>
            <p className="text-xs text-zinc-400 mt-1">
              Across Fintech, AI SaaS, E-Commerce, and Developer Tooling.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 4: Architecture Diagram Mockup (Span 2 cols) */}
        <SpotlightCard
          className="md:col-span-2 p-6"
          spotlightColor="rgba(16, 185, 129, 0.2)"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Data Flow & Architecture
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500">
              Stateless • Secured
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 py-4 text-center">
            {/* Step 1: Client */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 flex flex-col items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-400 mb-1.5" />
              <span className="text-xs font-semibold text-white">Client UI</span>
              <span className="text-[10px] text-zinc-400">Next.js 16 + SSR</span>
            </div>

            {/* Step 2: API Gateway */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 flex flex-col items-center justify-center relative">
              <ShieldCheck className="w-5 h-5 text-amber-400 mb-1.5" />
              <span className="text-xs font-semibold text-white">API & JWT</span>
              <span className="text-[10px] text-zinc-400">Express + REST</span>
            </div>

            {/* Step 3: MongoDB */}
            <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/10 flex flex-col items-center justify-center">
              <Database className="w-5 h-5 text-emerald-400 mb-1.5" />
              <span className="text-xs font-semibold text-white">Data Layer</span>
              <span className="text-[10px] text-zinc-400">MongoDB Atlas</span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/5">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              TLS 1.3 • HMAC Token Rotation
            </span>
            <span className="font-mono text-[11px] text-zinc-500">
              Avg latency: 28ms
            </span>
          </div>
        </SpotlightCard>

        {/* Card 5: Stat - Commits & Code Velocity */}
        <SpotlightCard
          className="flex flex-col justify-between"
          spotlightColor="rgba(245, 158, 11, 0.2)"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Velocity
            </span>
            <GitBranch className="w-4 h-4 text-amber-400" />
          </div>
          <div className="my-auto">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-1">
              {PERSONAL_INFO.codeCommits}
            </div>
            <div className="text-sm font-semibold text-white">Git Commits / Year</div>
            <p className="text-xs text-zinc-400 mt-1">
              Consistent shipping discipline and test coverage.
            </p>
          </div>
        </SpotlightCard>

        {/* Card 6: Live Time & Location card */}
        <SpotlightCard
          className="flex flex-col justify-between"
          spotlightColor="rgba(59, 130, 246, 0.2)"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Timezone
            </span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="my-auto">
            <div className="text-2xl font-mono font-bold text-white mb-1">
              {currentTime || "12:00:00 PM"}
            </div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Sync</span>
            </div>
            <p className="text-xs text-zinc-400 mt-2">
              UTC+6 • Flexible hours for US, EU & APAC teams.
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

