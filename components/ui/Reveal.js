"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className, y = 22, pop = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: pop ? 0.94 : 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
