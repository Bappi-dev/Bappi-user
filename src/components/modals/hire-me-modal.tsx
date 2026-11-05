"use client";

import React from "react";
import { Sparkles, Calendar, Mail, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToContact: () => void;
}

export function HireMeModal({ isOpen, onClose, onScrollToContact }: HireMeModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Initiate Project or Role Engagement"
      description="Available for high-impact full-time roles, contract advisory & greenfield full-stack builds."
    >
      <div className="space-y-6 pt-2">
        {/* Status Callout */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <div className="text-xs sm:text-sm text-emerald-300">
            <strong>Current Status:</strong> Ready for immediate deployment. Specializing in Next.js 16, Node.js/Express backends, and MongoDB architectures.
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Option 1: Schedule Chat */}
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors flex flex-col justify-between space-y-4">
            <div>
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Schedule a 15-Min Intro
              </h4>
              <p className="text-xs text-zinc-400">
                Discuss roadmaps, technical fit, or project scope directly over video call.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                onClose();
                window.open(`mailto:${PERSONAL_INFO.email}?subject=Introductory Sync Request`, "_blank");
              }}
              className="w-full justify-between"
            >
              <span>Schedule Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Option 2: Send Direct Transmission */}
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 transition-colors flex flex-col justify-between space-y-4">
            <div>
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                Send Project Brief
              </h4>
              <p className="text-xs text-zinc-400">
                Fill out the transmission form below with your requirements and timeline.
              </p>
            </div>
            <Button
              variant="glow"
              size="sm"
              onClick={() => {
                onClose();
                onScrollToContact();
              }}
              className="w-full justify-between"
            >
              <span>Go to Contact Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            Strict Confidentiality & NDA Friendly
          </span>
          <span>{PERSONAL_INFO.location}</span>
        </div>
      </div>
    </Modal>
  );
}

