"use client";

interface ArcLogoAProps {
  className?: string;
  gradient?: boolean;
}

export function ArcLogoA({ className = "", gradient = false }: ArcLogoAProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`inline-block ${className}`} 
      style={{ height: '0.85em', width: 'auto', transform: 'translateY(-0.08em)', margin: '0 0.04em' }}
    >
      {gradient && (
        <defs>
          <linearGradient id="arc-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4a97a" />
            <stop offset="50%" stopColor="#e8d5b0" />
            <stop offset="100%" stopColor="#c4a97a" />
          </linearGradient>
        </defs>
      )}
      <path 
        fill={gradient ? "url(#arc-gold-gradient)" : "currentColor"} 
        d="M 10 100 Q 25 5 50 5 Q 75 5 90 100 L 68 100 Q 64 75 61 60 L 46 60 L 46 45 L 58 45 Q 55 25 50 25 Q 45 25 32 100 Z" 
      />
    </svg>
  );
}
