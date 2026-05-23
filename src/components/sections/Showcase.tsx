"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Showcase() {
  return (
    <section id="ecosystem" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              A Dashboard That <br/> <span className="text-accent-gold">Commands Attention</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-lg leading-relaxed">
              Track your performance, analyze game statistics, and interact seamlessly with the Liminal ecosystem. Your profile is automatically synced to your wallet.
            </p>
            <a 
              href="https://liminalcasino.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-glow transition-colors group"
            >
              Experience the Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>


        </div>

      </div>
    </section>
  );
}
