"use client";

import { motion } from "framer-motion";
import { Wallet, Zap, Shield, Gamepad2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: <Wallet className="w-6 h-6 text-accent-gold" />,
    title: "Frictionless Onboarding",
    description: "Powered by Privy. Connect effortlessly via social logins, email, or any standard Web3 wallet. Instant account creation.",
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-gold" />,
    title: "Built on Arc Testnet",
    description: "Experience zero-latency transactions and non-existent gas fees. The Arc infrastructure guarantees an uninterrupted flow.",
  },
  {
    icon: <Gamepad2 className="w-6 h-6 text-accent-gold" />,
    title: "Cinematic Gameplay",
    description: "Immersive dark-mode UI with fluid animations. Real-time updates, provably fair mechanics, and sleek dashboards.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-gold" />,
    title: "Absolute Security",
    description: "Every bet is written to smart contracts. You retain absolute control of your assets with transparent, decentralized logic.",
  }
];

export function Features() {
  return (
    <section id="features" className="pt-12 pb-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Engineered for <span className="text-accent-gold">Excellence</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Liminal brings the Web2 user experience into the Web3 ecosystem. No compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card glow className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-6 border border-accent-gold/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
