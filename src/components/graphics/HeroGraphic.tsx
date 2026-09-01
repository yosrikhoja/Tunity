"use client";

import { motion } from "framer-motion";

export default function HeroGraphic() {
  const nodes = [
    { x: 260, y: 60 },
    { x: 340, y: 110 },
    { x: 180, y: 120 },
    { x: 300, y: 200 },
    { x: 120, y: 220 },
    { x: 220, y: 280 },
    { x: 380, y: 260 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 5],
    [3, 6],
  ];

  return (
    <div className="relative aspect-square w-full max-w-xl">
      <motion.div
        className="absolute inset-0 rounded-full bg-electric-500/20 blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 420 340" className="relative h-full w-full">
        {/* isometric building wireframe */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <polygon
            points="60,220 150,180 240,220 150,260"
            fill="rgba(0,144,255,0.08)"
            stroke="rgba(148,217,255,0.5)"
            strokeWidth="1.5"
          />
          <polygon
            points="60,220 60,140 150,100 150,180"
            fill="rgba(0,144,255,0.14)"
            stroke="rgba(148,217,255,0.5)"
            strokeWidth="1.5"
          />
          <polygon
            points="150,180 150,100 240,140 240,220"
            fill="rgba(0,144,255,0.2)"
            stroke="rgba(148,217,255,0.6)"
            strokeWidth="1.5"
          />
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1={72 + i * 28}
              y1={205 - i * 2}
              x2={72 + i * 28}
              y2={150 - i * 2}
              stroke="rgba(148,217,255,0.35)"
              strokeWidth="1"
            />
          ))}
        </motion.g>

        {/* network graph representing BIM / digital connectivity */}
        <g>
          {edges.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="rgba(94,197,255,0.5)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={i === 0 ? 6 : 4}
              fill={i === 0 ? "#5fc5ff" : "#0090ff"}
              stroke="white"
              strokeWidth="1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4, type: "spring" }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
