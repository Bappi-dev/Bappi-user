"use client";

import React from "react";
import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />

      {/* Primary Radial Glow - Top Left */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/10 blur-[130px]"
      />

      {/* Secondary Radial Glow - Top Right / Center */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[25%] -right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-700/10 blur-[140px]"
      />

      {/* Tertiary Radial Glow - Bottom */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-violet-600/20 via-blue-600/15 to-transparent blur-[150px]"
      />

      {/* Vignette Overlay for cinematic depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,15,0.7)_80%)] dark:block [data-theme='light']:opacity-0 transition-opacity duration-300" />
    </div>
  );
}

