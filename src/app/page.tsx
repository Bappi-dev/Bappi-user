"use client";

import React, { useState } from "react";
import { AmbientBackground } from "@/components/effects/ambient-background";
import { GlowCursor } from "@/components/effects/glow-cursor";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { BentoSection } from "@/components/bento/bento-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { TestimonialsSection } from "@/components/testimonials/testimonials-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";
import { ResumeModal } from "@/components/modals/resume-modal";
import { HireMeModal } from "@/components/modals/hire-me-modal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [hireMeOpen, setHireMeOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      {/* Ambient Visual Backdrops & Mouse Glow */}
      <AmbientBackground />
      <GlowCursor />

      {/* Floating Glassmorphic Header */}
      <Navbar onOpenHireMe={() => setHireMeOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenResume={() => setResumeOpen(true)}
        onExploreWork={handleScrollToProjects}
      />

      {/* Bento Grid (About, Stats & Architecture Flow) */}
      <BentoSection />

      {/* Featured Projects Showcase */}
      <ProjectsSection />

      {/* Work Experience Timeline */}
      <ExperienceSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <HireMeModal
        isOpen={hireMeOpen}
        onClose={() => setHireMeOpen(false)}
        onScrollToContact={handleScrollToContact}
      />
    </main>
  );
}
