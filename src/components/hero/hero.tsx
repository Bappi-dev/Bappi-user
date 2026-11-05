"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Mail,
  Sparkles,
  Layers,
  Database,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/brand-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface HeroProps {
  onOpenResume: () => void;
  onExploreWork: () => void;
}

export function Hero({ onOpenResume, onExploreWork }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: readonly [number, number, number, number] };
    };
  } = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Availability Status Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <Badge
            variant="emerald"
            dot
            className="px-4 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
          >
            {PERSONAL_INFO.status}
          </Badge>
        </motion.div>

        {/* Dynamic Bold Headline with Staggered Gradient Text Reveal */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-6"
        >
          Engineering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
            scalable web
          </span>{" "}
          systems with craft.
        </motion.h1>

        {/* Subtitle / Value proposition */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          I specialize in building full-stack applications with{" "}
          <span className="text-zinc-200 font-medium">Next.js 16</span>,{" "}
          <span className="text-zinc-200 font-medium">Node.js</span>,{" "}
          <span className="text-zinc-200 font-medium">Express</span>, and{" "}
          <span className="text-zinc-200 font-medium">MongoDB</span> — bridging robust backend APIs, JWT security, and fluid Framer Motion interfaces.
        </motion.p>

        {/* Primary & Secondary CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            variant="glow"
            size="lg"
            onClick={onExploreWork}
            className="group"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4 ml-1 text-cyan-200 group-hover:translate-y-0.5 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onOpenResume}
            className="group border-white/15 hover:border-white/30"
          >
            <FileText className="w-4 h-4 mr-1 text-zinc-300 group-hover:text-blue-400 transition-colors" />
            <span>View Resume</span>
          </Button>
        </motion.div>

        {/* Quick Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-14"
        >
          {[
            { icon: GithubIcon, href: PERSONAL_INFO.github, label: "GitHub" },
            { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
            { icon: TwitterIcon, href: PERSONAL_INFO.twitter, label: "Twitter" },
            { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-colors shadow-sm"
            >
              <social.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech Stack Marquee Pill Ticker */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-3xl pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-mono">Next.js 16 App Router</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">Node.js & Express</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5">
            <Database className="w-3.5 h-3.5 text-green-400" />
            <span className="font-mono">MongoDB & Mongoose</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono">JWT & OAuth2 Auth</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

