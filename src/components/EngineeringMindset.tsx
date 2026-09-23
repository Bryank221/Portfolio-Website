"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const STAGES = [
  "PROBLEM",
  "UNDERSTAND",
  "BREAK IT DOWN",
  "DESIGN",
  "BUILD",
  "TEST",
  "ITERATE",
  "SHIP",
];

export default function EngineeringMindset() {
  return (
    <div className="border border-border bg-surface p-6">
      <SectionHeading index="—" title="Engineering Mindset" />

      <div className="flex flex-wrap items-center gap-x-1 gap-y-3">
        {STAGES.map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-1"
          >
            <span className="border border-border px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-muted">
              {stage}
            </span>
            {i < STAGES.length - 1 && (
              <span className="text-accent/70" aria-hidden>
                →
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
        &ldquo;I don&apos;t expect the first solution to be the final solution.&rdquo;
      </p>
    </div>
  );
}
