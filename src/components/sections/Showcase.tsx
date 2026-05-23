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
              href="https://liminalcasino.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-gold font-semibold hover:text-accent-glow transition-colors group"
            >
              Experience the Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex-1 w-full relative">
            {/* Dark Placeholder for UI Screenshot */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full aspect-[4/3] rounded-2xl glass-card overflow-hidden shadow-2xl relative border-accent-gold/20 flex items-center justify-center bg-black/60"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-gold/5 to-transparent" />
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-4 bg-white/5">
                  <span className="text-white/20 text-xs font-mono uppercase tracking-widest">Image</span>
                </div>
                <p className="text-[var(--text-muted)] font-mono text-sm">Dashboard_Screenshot.png</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
