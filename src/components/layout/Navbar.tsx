"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 glass border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/liminal-logo.svg" alt="Liminal" className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
          <span className="font-display font-bold text-xl text-white group-hover:text-accent-gold transition-colors duration-300">
            Liminal
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors">
            Features
          </Link>
          <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors">
            Arcscan
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center">
          <a 
            href="https://liminalcasino.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent-gold text-black font-extrabold text-[15px] hover:bg-accent-glow hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(196,169,122,0.3)] tracking-wide"
          >
            Launch App
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
      </div>
    </nav>
  );
}
