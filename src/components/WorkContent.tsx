"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { PROJECTS, type Project } from "@/data/projects";

export default function WorkContent() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:px-10 sm:pt-44">
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
        <span className="font-mono text-xs text-accent">INDEX</span>
        <h1 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
          All Projects
        </h1>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl"
      >
        Work across AI, robotics, embedded systems &amp; software.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-5 max-w-xl text-base leading-relaxed text-muted"
      >
        A running index of projects — from autonomous systems and AI agents
        to production software and embedded control.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActive(project)}
          />
        ))}
      </div>

      <ProjectCaseStudy project={active} onClose={() => setActive(null)} />
    </section>
  );
}
