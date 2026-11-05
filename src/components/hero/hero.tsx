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
  CheckCircle2,
  Zap,
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
        delayChildren: 0.15,
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

  const imageCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.25,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-28 sm:pt-36 pb-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full mx-auto"
      >
        {/* Main 2-Column Split: Content on Left, Image Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Text, CTAs, Socials) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
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

            {/* Dynamic Bold Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6"
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
              className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed mb-8"
            >
              Hi, I&apos;m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I specialize in building full-stack applications with{" "}
              <span className="text-zinc-200 font-medium">Next.js 16</span>,{" "}
              <span className="text-zinc-200 font-medium">Node.js</span>,{" "}
              <span className="text-zinc-200 font-medium">Express</span>, and{" "}
              <span className="text-zinc-200 font-medium">MongoDB</span> — bridging robust backend APIs, JWT security, and fluid Framer Motion interfaces.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full"
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
              className="flex items-center gap-3"
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
          </div>

          {/* Right Column: Visual Portrait & Showcase Frame */}
          <motion.div
            variants={imageCardVariants}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Background Glow behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/25 rounded-3xl blur-2xl opacity-75 animate-pulse -z-10" />

            {/* Main Interactive Showcase Card */}
            <div className="relative group w-full max-w-[340px] sm:max-w-[380px] rounded-3xl border border-white/15 bg-zinc-950/70 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-blue-500/10">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  {PERSONAL_INFO.monogram} • developer.me
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Portrait Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group-hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Gradient Scrim at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60" />

                {/* Overlay Name Tag inside image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {PERSONAL_INFO.name}
                    </h4>
                    <p className="text-[11px] font-mono text-blue-400">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right of card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-5 rounded-full border border-white/15 bg-zinc-900/90 backdrop-blur-md px-3.5 py-1.5 shadow-xl flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-white font-mono">
                  {PERSONAL_INFO.yearsOfExperience} Crafting
                </span>
              </motion.div>

              {/* Floating Badge 2: Bottom Left of card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-5 rounded-full border border-white/15 bg-zinc-900/90 backdrop-blur-md px-3.5 py-1.5 shadow-xl flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-xs font-semibold text-white font-mono">
                  MERN & Next.js 16
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee Pill Ticker (Full Width Below) */}
        <motion.div
          variants={itemVariants}
          className="w-full pt-16 mt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-400"
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-md">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="font-mono font-medium">Next.js 16 App Router</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-md">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span className="font-mono font-medium">Node.js & Express</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-md">
            <Database className="w-4 h-4 text-green-400" />
            <span className="font-mono font-medium">MongoDB & Mongoose</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="font-mono font-medium">JWT & OAuth2 Auth</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
