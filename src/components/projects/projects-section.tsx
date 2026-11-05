"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Terminal,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { PROJECTS, Project } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Full Stack", "Frontend", "API & Auth"] as const;
type Category = (typeof CATEGORIES)[number];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="violet" dot className="mb-3">
          Selected Showcase
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Featured Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-300">
            Artifacts
          </span>
          .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
          Production-grade applications built with modern architectural patterns, strict security, and polished interactions.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-blue-600/30 border border-blue-500/50 rounded-full shadow-lg shadow-blue-500/20"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-xl overflow-hidden hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Mockup Window Header */}
              <div className="relative overflow-hidden bg-zinc-900/80 border-b border-white/10">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/80 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500 px-3 py-0.5 rounded-md bg-white/5 truncate max-w-[200px]">
                    {project.liveUrl.replace("https://", "")}
                  </div>
                  <div className="w-12 text-right">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Visual Preview Graphic */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-zinc-950 to-zinc-900 group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Subtle Grid Accent */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                  {/* Gradient Glow backdrop */}
                  <div
                    className={cn(
                      "absolute w-44 h-44 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity bg-gradient-to-tr",
                      project.accentColor
                    )}
                  />

                  {/* High Tech Interactive Mock Window UI */}
                  <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/15 bg-zinc-900/90 shadow-2xl p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono font-semibold text-white">
                          {project.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.metrics}
                      </span>
                    </div>

                    <div className="py-3 flex flex-col gap-2">
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-1/2 rounded bg-white/10" />
                      <div className="flex gap-2 pt-2">
                        <div className="h-6 w-16 rounded bg-blue-500/20 border border-blue-500/30" />
                        <div className="h-6 w-20 rounded bg-cyan-500/20 border border-cyan-500/30" />
                      </div>
                    </div>
                  </div>

                  {/* Click to expand overlay */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wide backdrop-blur-[2px] cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>View Architecture Specs</span>
                  </button>
                </div>
              </div>

              {/* Card Body & Tech Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-blue-400/90 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Badges / Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[11px] py-0.5 px-2 bg-white/[0.04] text-zinc-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span>Deep Dive</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
                        aria-label="View Source on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:text-white transition-colors flex items-center gap-1 text-xs font-medium px-3"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Architecture Deep-Dive Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.tagline}
      >
        {selectedProject && (
          <div className="space-y-6 pt-2">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Overview & Impact
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>Architectural Highlights</span>
              </h4>
              <ul className="space-y-2">
                {selectedProject.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5 bg-white/[0.03] p-2.5 rounded-lg border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="glow" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">
                Metric: {selectedProject.metrics}
              </span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                >
                  <GithubIcon className="w-3.5 h-3.5 mr-1" />
                  <span>GitHub</span>
                </Button>
                <Button
                  variant="glow"
                  size="sm"
                  onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

