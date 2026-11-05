"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onOpenHireMe }: { onOpenHireMe: () => void }) {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-center transition-all duration-300 px-4 sm:px-6 py-4",
          isScrolled ? "top-2 sm:top-4" : "top-0 sm:top-2"
        )}
      >
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 border",
            isScrolled
              ? "bg-zinc-950/75 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/60"
              : "bg-zinc-950/40 backdrop-blur-md border-white/10"
          )}
        >
          {/* Logo / Monogram with magnetic hover */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                <span className="font-mono text-xs font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {PERSONAL_INFO.monogram}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-semibold text-white tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                Full-Stack  Eng.
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav Links with animated active pill */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 cursor-pointer",
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-inner"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />

            <Button
              variant="glow"
              size="sm"
              onClick={onOpenHireMe}
              className="hidden sm:inline-flex group shadow-blue-500/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-spin-slow group-hover:rotate-45 transition-transform" />
              <span>Hire Me</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-zinc-200 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-black/85 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-mono text-xs font-bold text-white">
                  {PERSONAL_INFO.monogram}
                </div>
                <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-zinc-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 py-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center justify-between text-left py-3 px-4 rounded-xl text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="glow"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireMe();
                }}
                className="w-full justify-center"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Available For Hire — Let&apos;s Talk</span>
              </Button>
              <div className="text-center text-xs text-zinc-500 font-mono">
                {PERSONAL_INFO.status}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

