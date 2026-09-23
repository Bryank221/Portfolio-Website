"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EXPERIENCE } from "@/data/experience";

export default function ExperienceTimeline() {
  return (
    <div id="experience" className="border border-border bg-surface p-6">
      <SectionHeading
        index="—"
        title="Experience Timeline"
        action={{ label: "View all", href: "/experience" }}
      />

      <ol className="relative border-l border-border pl-6">
        {EXPERIENCE.map((entry, i) => (
          <motion.li
            key={entry.year + entry.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative pb-7 last:pb-0"
          >
            <span className="absolute -left-7.25 top-1 flex h-3 w-3 items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <p className="font-mono text-xs text-accent">{entry.year}</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{entry.title}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-muted">{entry.subtitle}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
