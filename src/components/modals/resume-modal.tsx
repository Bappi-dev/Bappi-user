"use client";

import React from "react";
import { Download, ExternalLink, Printer, Check, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from "@/data/portfolio-data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${PERSONAL_INFO.name} — Full-Stack Resume`}
      description="Curriculum Vitae • Architecting MERN & Next.js Platforms"
      className="max-w-3xl"
    >
      <div className="space-y-6 text-zinc-300">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <div>
            <h4 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h4>
            <p className="text-xs text-blue-400 font-mono">{PERSONAL_INFO.title}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{PERSONAL_INFO.location} • {PERSONAL_INFO.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="w-3.5 h-3.5 mr-1" />
              <span>Print / PDF</span>
            </Button>
            <Button
              variant="glow"
              size="sm"
              onClick={() => {
                alert("Downloading verified PDF resume snapshot...");
              }}
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              <span>Download PDF</span>
            </Button>
          </div>
        </div>

        {/* Executive Summary */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Executive Summary</span>
          </h5>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-zinc-900/40 p-3.5 rounded-xl border border-white/5">
            Senior Full-Stack Engineer with 5+ years of experience engineering high-throughput distributed web systems and expressive user interfaces. Deep expertise across Next.js 16 (App Router), Node.js, Express, MongoDB, Mongoose, and JWT authentication. Proven track record boosting query latencies by 40% and driving measurable user conversion through pixel-perfect micro-interactions.
          </p>
        </div>

        {/* Work Experience */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Professional Experience</span>
          </h5>
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <div>
                    <span className="text-sm font-bold text-white">{exp.role}</span>
                    <span className="text-xs text-zinc-400"> — {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Core Technical Arsenal */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Key Technical Proficiencies
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {[
              "Next.js 16",
              "React 19",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "JWT",
              "REST APIs",
              "Tailwind CSS",
              "Framer Motion",
              "Redis",
              "Postman",
              "Docker",
              "Git",
            ].map((skill) => (
              <Badge key={skill} variant="outline" className="text-[11px] py-0.5 px-2 bg-white/5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

