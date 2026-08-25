"use client";

import { motion } from "framer-motion";

const COLORS = [
  "var(--color-gold-500)",
  "var(--color-terracotta-500)",
  "var(--color-purple-600)",
  "var(--color-emerald-500)",
];

function makePiece(i, total) {
  const angle = (i / total) * Math.PI * 2 + Math.random() * 0.5;
  const distance = 70 + Math.random() * 110;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance * 0.75 - 30,
    rotate: Math.random() * 360,
    color: COLORS[i % COLORS.length],
    diamond: i % 2 === 0,
    size: 6 + Math.random() * 7,
    delay: Math.random() * 0.18,
  };
}

// Only ever mounted client-side after the journey completes, so
// non-deterministic placement here can't cause a hydration mismatch.
export default function Confetti({ count = 22 }) {
  const pieces = Array.from({ length: count }, (_, i) => makePiece(i, count));

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.diamond ? "2px" : "50%",
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.rotate, scale: 1 }}
          transition={{ duration: 1.2, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
