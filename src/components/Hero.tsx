"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import RoboticArmVisual from "@/components/visuals/RoboticArmVisual";
import { SOCIAL_LINKS } from "@/data/nav";

const READOUTS = [
  { label: "SYSTEM STATUS", value: "ONLINE" },
  { label: "PROCESSING", value: "ACTIVE" },
  { label: "MODE", value: "AUTONOMOUS" },
  { label: "SIGNAL", value: "STABLE" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs tracking-[0.25em] text-accent"
          >
            AI · SOFTWARE · ROBOTICS
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            BRYAN
            <br />
            KWONG
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-mono text-sm tracking-[0.15em] text-muted"
          >
            MECHATRONICS &amp; ROBOTICS ENGINEER
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-10 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
          >
            I build systems that think, move &amp; work.
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-muted">
            An engineer working at the intersection of robotics, artificial
            intelligence and software engineering.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#work"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs font-semibold tracking-wide text-[#04100e] transition-colors"
            >
              EXPLORE MY WORK
              <span aria-hidden>→</span>
            </MagneticButton>
            <MagneticButton
              href={SOCIAL_LINKS.resume ?? "#contact"}
              className="inline-flex items-center gap-2 border border-border-strong px-6 py-3 font-mono text-xs font-semibold tracking-wide text-foreground transition-colors hover:border-accent"
            >
              VIEW RESUME
              <span aria-hidden>↓</span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <RoboticArmVisual />

          <div className="pointer-events-none absolute left-0 top-0 hidden font-mono text-[10px] leading-relaxed text-muted lg:block">
            <p className="text-accent">JOINT_01</p>
            <p>STATUS: ACTIVE</p>
          </div>
          <div className="pointer-events-none absolute right-0 top-1/3 hidden text-right font-mono text-[10px] leading-relaxed text-muted lg:block">
            <p>SENSOR_ARRAY</p>
            <p className="text-accent">ALL SYSTEMS NOMINAL</p>
          </div>
          <div className="pointer-events-none absolute bottom-4 left-0 hidden font-mono text-[10px] leading-relaxed text-muted lg:block">
            <p>CALIBRATION</p>
            <p className="text-accent">COMPLETE</p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4"
        >
          {READOUTS.map((r) => (
            <div key={r.label} className="bg-background px-5 py-4">
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted-dim">
                {r.label}
              </p>
              <p className="mt-1 font-mono text-sm text-foreground">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                {r.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
