import Link from "next/link";
import { ArrowUpRight, Shield, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/liminal-logo.svg" alt="Liminal" className="w-8 h-8 opacity-80" />
              <span className="font-display font-bold text-xl text-white">Liminal</span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm max-w-sm leading-relaxed mb-6">
              Experience the next generation of frictionless Web3 gaming, powered by the speed and security of the Arc Testnet.
            </p>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-mono border border-[var(--border-color)] rounded-lg px-2 py-1 bg-[var(--bg-secondary)]">
                <Shield className="w-3 h-3 text-emerald-400" /> Audited
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] font-mono border border-[var(--border-color)] rounded-lg px-2 py-1 bg-[var(--bg-secondary)]">
                <Zap className="w-3 h-3 text-accent-gold" /> Powered by Arc
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://liminalcasino.vercel.app/home" className="text-sm text-[var(--text-muted)] hover:text-accent-gold transition-colors inline-flex items-center gap-1">
                  Launch App <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="#features" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-[var(--text-muted)] hover:text-white transition-colors">Responsible Gaming</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Liminal. All rights reserved.
          </p>
          <div className="text-xs text-[var(--text-secondary)] font-mono">
            TESTNET EXPERIMENTAL DEPLOYMENT
          </div>
        </div>
      </div>
    </footer>
  );
}
