"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EXPERIENCE, LEADERSHIP_ROLES, LEADERSHIP_THEMES } from "@/data/experience";

export default function ExperienceContent() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide text-muted transition-colors hover:text-foreground"
        >
          <span aria-hidden>←</span> BACK TO HOME
        </Link>
      </motion.div>

      <div className="mt-8 flex items-baseline gap-3 border-b border-border pb-6">
        <span className="font-mono text-xs text-accent">LOG</span>
        <h1 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          Experience Timeline
        </h1>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
      >
        Engineering roles, internships &amp; leadership.
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
        <ol className="relative border-l border-border pl-8">
          {EXPERIENCE.map((entry, i) => (
            <motion.li
              key={entry.year + entry.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-10.25 top-1.5 flex h-4 w-4 items-center justify-center border border-accent bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <p className="font-mono text-sm text-accent">{entry.year}</p>
              <p className="mt-2 text-xl font-semibold text-foreground">{entry.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{entry.subtitle}</p>
              {entry.description && (
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              )}
            </motion.li>
          ))}
        </ol>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-border bg-surface p-6 h-fit"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-muted-dim">
            BEYOND THE CODE
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {LEADERSHIP_THEMES.map((theme) => (
              <li
                key={theme}
                className="flex items-center gap-2 font-mono text-[11px] text-muted"
              >
                <span className="text-accent" aria-hidden>
                  ○
                </span>
                {theme}
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-mono text-[10px] tracking-[0.15em] text-muted-dim">
              ROLES &amp; INVOLVEMENT
            </p>
            <ul className="space-y-2">
              {LEADERSHIP_ROLES.map((r) => (
                <li key={r.organisation} className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-muted">{r.organisation}</span>
                  <span className="font-mono text-[10px] tracking-wide text-muted-dim">
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
        </motion.aside>
      </div>
    </section>
  );
}
