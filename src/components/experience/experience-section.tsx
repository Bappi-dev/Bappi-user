"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCES } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="emerald" dot className="mb-3">
          Track Record
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
            Journey
          </span>
          .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
          Progressive career shipping production web platforms, leading frontend architecture, and scaling API backends.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-32 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Timeline Glowing Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-300" />

            {/* Date Pill for Desktop (Floating left) */}
            <div className="hidden sm:block absolute -left-36 top-1 text-right w-28">
              <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-blue-400 transition-colors">
                {exp.period}
              </span>
              <div className="text-[10px] text-zinc-500">{exp.type}</div>
            </div>

            {/* Card Content */}
            <div className="rounded-2xl border border-white/10 bg-zinc-950/50 backdrop-blur-xl p-6 sm:p-7 hover:border-white/20 hover:bg-zinc-900/40 transition-all duration-300 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-300">
                    {exp.company}
                  </div>
                </div>

                {/* Mobile Date display */}
                <div className="sm:hidden flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Location & Remote */}
              <div className="flex items-center gap-2 text-xs text-zinc-400 mb-5 font-mono">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{exp.location}</span>
              </div>

              {/* Bulleted Achievements */}
              <ul className="space-y-2.5 mb-6">
                {exp.description.map((item, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-[10px] py-0.5 px-2 bg-white/[0.03] text-zinc-400 font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

