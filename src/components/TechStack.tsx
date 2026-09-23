"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { SKILL_GROUPS } from "@/data/skills";

const ICONS: Record<string, string> = {
  software: "◧",
  ai: "◎",
  robotics: "◈",
  engineering: "◫",
};

export default function TechStack() {
  const [activeId, setActiveId] = useState(SKILL_GROUPS[0].id);
  const active = SKILL_GROUPS.find((g) => g.id === activeId) ?? SKILL_GROUPS[0];

  return (
    <div className="border border-border bg-surface p-6">
      <SectionHeading index="—" title="Tech Stack" />

      <div className="flex flex-wrap gap-2">
        {SKILL_GROUPS.map((group) => (
          <button
            key={group.id}
            type="button"
            onClick={() => setActiveId(group.id)}
            className={`flex items-center gap-2 border px-3 py-2 font-mono text-[11px] tracking-wide transition-colors ${
              activeId === group.id
                ? "border-accent text-accent bg-accent-dim"
                : "border-border text-muted hover:border-border-strong hover:text-foreground"
            }`}
          >
            <span aria-hidden>{ICONS[group.icon]}</span>
            {group.label}
          </button>
        ))}
      </div>

      <div className="mt-6 min-h-[132px]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-2"
          >
            {active.items.map((item) => (
              <li
                key={item}
                className="min-w-0 border border-border px-3 py-2 font-mono text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
