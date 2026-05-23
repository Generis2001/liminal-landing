"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[120px] -z-10 animate-glow-pulse" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent-gold/30 mb-8 bg-black/40">
            <Sparkles className="w-4 h-4 text-accent-gold" />
            <span className="text-sm font-mono text-[var(--text-primary)]">Now live on Ʌrc Testnet</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            CASINO EXPERIENCE <br className="hidden md:block" />
            <span className="text-gradient">ON ɅRC</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
            Experience the next generation of frictionless Web3 Casino, powered by the speed and security of the Arc Testnet.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://liminalcasino.vercel.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent-gold text-black font-extrabold text-xl hover:bg-accent-glow hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(196,169,122,0.4)] group tracking-wide"
            >
              Launch App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-all"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
        
        {/* Abstract Decorative Line */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent mt-24"
        />
      </div>
    </section>
  );
}
