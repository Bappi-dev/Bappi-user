"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS } from "@/data/portfolio-data";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <Badge variant="amber" dot className="mb-3">
          Social Proof
        </Badge>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          What Leaders & Collaborators{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">
            Say
          </span>
          .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mt-3">
          Feedback from Engineering Directors, Startup Founders, and Technical Leads on speed, code quality, and collaboration.
        </p>
      </div>

      {/* Main Interactive Testimonial Carousel Card */}
      <div className="relative rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Quote className="w-6 h-6" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-2xl text-zinc-200 font-light leading-relaxed tracking-tight italic">
                &ldquo;{current.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 border-2 border-white/20">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    {current.name}
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {current.role} • <span className="text-zinc-300">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-8 mt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

