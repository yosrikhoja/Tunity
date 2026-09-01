"use client";

import { motion } from "framer-motion";

type PatternType = "blueprint" | "grid" | "beam" | "tower" | "circuit" | "contour";

export default function TechPattern({
  pattern,
  className,
}: {
  pattern: PatternType;
  className?: string;
}) {
  const common = "h-full w-full";

  switch (pattern) {
    case "tower":
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#tower-bg)" />
          <defs>
            <linearGradient id="tower-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#0d1c3a" />
              <stop offset="100%" stopColor="#0072d6" />
            </linearGradient>
          </defs>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.rect
              key={i}
              x={60 + i * 4}
              y={170 - i * 22}
              width={80 - i * 8}
              height={20}
              rx="2"
              stroke="rgba(148,217,255,0.6)"
              strokeWidth="1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            />
          ))}
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#grid-bg)" />
          <defs>
            <linearGradient id="grid-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#081228" />
              <stop offset="100%" stopColor="#142850" />
            </linearGradient>
          </defs>
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={20 + c * 34}
                y={20 + r * 34}
                width="24"
                height="24"
                rx="4"
                stroke="rgba(148,217,255,0.45)"
                strokeWidth="1"
              />
            ))
          )}
        </svg>
      );
    case "beam":
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#beam-bg)" />
          <defs>
            <linearGradient id="beam-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#0d1c3a" />
              <stop offset="100%" stopColor="#032c50" />
            </linearGradient>
          </defs>
          <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(148,217,255,0.6)" strokeWidth="3" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={30 + i * 20}
              y1={100}
              x2={40 + i * 20}
              y2={i % 2 === 0 ? 60 : 140}
              stroke="rgba(148,217,255,0.4)"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      );
    case "circuit":
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#circuit-bg)" />
          <defs>
            <linearGradient id="circuit-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#081228" />
              <stop offset="100%" stopColor="#0058a6" />
            </linearGradient>
          </defs>
          <path
            d="M20 40 H80 V90 H140 V60 H180 M20 120 H60 V160 H160 V120 H180"
            stroke="rgba(148,217,255,0.55)"
            strokeWidth="1.5"
          />
          {[
            [20, 40],
            [80, 90],
            [140, 60],
            [60, 160],
            [160, 120],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3.5" fill="#5fc5ff" />
          ))}
        </svg>
      );
    case "contour":
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#contour-bg)" />
          <defs>
            <linearGradient id="contour-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#0d1c3a" />
              <stop offset="100%" stopColor="#142850" />
            </linearGradient>
          </defs>
          {[30, 55, 80, 105, 130].map((r, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="110"
              rx={r}
              ry={r * 0.6}
              stroke="rgba(148,217,255,0.4)"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
      );
    case "blueprint":
    default:
      return (
        <svg viewBox="0 0 200 200" className={className ?? common} fill="none">
          <rect x="0" y="0" width="200" height="200" fill="url(#blueprint-bg)" />
          <defs>
            <linearGradient id="blueprint-bg" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#0058a6" />
              <stop offset="100%" stopColor="#081228" />
            </linearGradient>
          </defs>
          <rect x="30" y="30" width="140" height="140" rx="8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
          <line x1="30" y1="100" x2="170" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="100" cy="100" r="35" stroke="rgba(148,217,255,0.6)" strokeWidth="1.5" />
        </svg>
      );
  }
}
