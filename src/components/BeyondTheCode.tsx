"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { LEADERSHIP_ROLES, LEADERSHIP_THEMES } from "@/data/experience";

export default function BeyondTheCode() {
  return (
    <div className="border border-border bg-surface p-6">
      <SectionHeading index="—" title="Beyond the Code" />

      <ul className="grid grid-cols-2 gap-2.5">
        {LEADERSHIP_THEMES.map((theme, i) => (
          <motion.li
            key={theme}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="flex items-center gap-2 font-mono text-xs text-muted"
          >
            <span className="text-accent" aria-hidden>
              ○
            </span>
            {theme}
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 border-t border-border pt-5">
        <ul className="space-y-2.5">
          {LEADERSHIP_ROLES.map((r) => (
            <li
              key={`${r.organisation}-${r.role}`}
              className="flex items-start justify-between gap-4 text-xs"
            >
              <span className="min-w-0 text-muted">{r.organisation}</span>
              <span className="w-28 shrink-0 text-right font-mono text-[10px] leading-relaxed tracking-wide text-muted-dim">
                {r.role.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        I enjoy working with people, leading teams and creating positive
        impact beyond technical work.
      </p>
    </div>
  );
}
