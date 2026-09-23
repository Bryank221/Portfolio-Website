"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const FIELDS = [
  { label: "NAME", value: "BRYAN KWONG" },
  { label: "DISCIPLINE", value: "MECHATRONICS & ROBOTICS" },
  { label: "FOCUS", value: "AI / SOFTWARE / ROBOTICS" },
  { label: "CURRENT STATE", value: "BUILDING" },
  { label: "LOCATION", value: "SUBANG JAYA, MALAYSIA" },
];

export default function SystemProfile() {
  return (
    <section id="profile" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading index="02" title="System Profile" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-border bg-surface lg:col-span-2"
        >
          {FIELDS.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-center justify-between px-6 py-4 ${
                i !== FIELDS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-mono text-[11px] tracking-[0.15em] text-muted-dim">
                {f.label}
              </span>
              <span className="font-mono text-xs text-foreground">{f.value}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col justify-center lg:col-span-3"
        >
          <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            I enjoy solving problems across hardware and software.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            From embedded systems and robotics to web applications and
            AI-driven systems, I build practical solutions that make an
            impact. I like working close to the physical world — where code
            has to actually move something, sense something, or hold up under
            real conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
