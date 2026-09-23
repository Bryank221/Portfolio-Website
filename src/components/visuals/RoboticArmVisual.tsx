"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

export default function RoboticArmVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 80,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 80,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square w-full max-w-xl mx-auto select-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={prefersReducedMotion ? undefined : { rotateX, rotateY }}
        className="relative h-full w-full"
      >
        <svg
          viewBox="0 0 400 400"
          className="h-full w-full overflow-visible"
          role="img"
          aria-label="Animated schematic of a robotic arm"
        >
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {[70, 110, 150].map((r, i) => (
            <motion.circle
              key={r}
              cx="200"
              cy="260"
              r={r}
              fill="none"
              stroke="var(--border)"
              strokeDasharray={i === 1 ? "2 6" : undefined}
              initial={false}
              animate={
                prefersReducedMotion
                  ? undefined
                  : { rotate: i % 2 === 0 ? 360 : -360 }
              }
              transition={{
                repeat: Infinity,
                duration: 40 + i * 20,
                ease: "linear",
              }}
              style={{ transformOrigin: "200px 260px" }}
            />
          ))}

          <circle cx="200" cy="260" r="150" fill="url(#glow)" />

          {/* base */}
          <rect x="160" y="330" width="80" height="16" rx="2" fill="none" stroke="var(--border-strong)" />
          <rect x="185" y="300" width="30" height="34" rx="2" fill="none" stroke="var(--border-strong)" />

          {/* joint 1 */}
          <circle cx="200" cy="300" r="10" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />

          {/* lower arm */}
          <motion.g
            style={{ transformOrigin: "200px 300px" }}
            animate={prefersReducedMotion ? undefined : { rotate: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <rect x="192" y="200" width="16" height="100" rx="4" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
            {/* joint 2 */}
            <circle cx="200" cy="200" r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />

            {/* upper arm */}
            <motion.g
              style={{ transformOrigin: "200px 200px" }}
              animate={prefersReducedMotion ? undefined : { rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.3 }}
            >
              <rect x="192" y="120" width="16" height="80" rx="4" fill="none" stroke="var(--border-strong)" strokeWidth="1.5" />
              {/* joint 3 / wrist */}
              <circle cx="200" cy="120" r="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />

              {/* end effector */}
              <motion.g
                style={{ transformOrigin: "200px 120px" }}
                animate={prefersReducedMotion ? undefined : { rotate: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.6 }}
              >
                <line x1="200" y1="120" x2="200" y2="90" stroke="var(--border-strong)" strokeWidth="1.5" />
                <path
                  d="M186 90 L186 74 M214 90 L214 74"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <line x1="186" y1="90" x2="214" y2="90" stroke="var(--border-strong)" strokeWidth="1.5" />
              </motion.g>
            </motion.g>
          </motion.g>

          {/* ground plane */}
          <line x1="60" y1="346" x2="340" y2="346" stroke="var(--border)" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1={60 + i * 23.3}
              y1="346"
              x2={50 + i * 23.3}
              y2="356"
              stroke="var(--border)"
            />
          ))}
        </svg>
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-1/4 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          animate={{ y: [0, 220, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
