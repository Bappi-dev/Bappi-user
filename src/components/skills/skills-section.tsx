"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Wrench,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Server className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  const getSpotlightColor = (index: number) => {
    switch (index) {
      case 0:
        return "rgba(59, 130, 246, 0.18)";
      case 1:
        return "rgba(16, 185, 129, 0.18)";
      default:
        return "rgba(245, 158, 11, 0.18)";
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="cyan" dot className="mb-3">
          Core Competencies
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Skills & Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
            Stack
          </span>
          .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
          Carefully cultivated toolkit focused on modern web engineering, defensive backend security, and design fidelity.
        </p>
      </div>

      {/* 3-Column Categorized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <SpotlightCard
            key={cat.title}
            spotlightColor={getSpotlightColor(idx)}
            className="flex flex-col justify-between p-6 sm:p-7"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-400">
                    {cat.skills.length} core technologies
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                {cat.description}
              </p>

              {/* Skills list */}
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover/skill:scale-150 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {skill.highlight && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Primary
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-zinc-500 group-hover/skill:text-zinc-400">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Production Tested</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Ready
              </span>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

