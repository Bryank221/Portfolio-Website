"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import PipelineDiagram from "@/components/PipelineDiagram";

export default function ProjectCard({
  project,
  onOpen,
  featured = false,
}: {
  project: Project;
  onOpen: () => void;
  featured?: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between border border-border bg-surface p-6 text-left transition-colors hover:border-accent/50 ${
        featured ? "sm:col-span-2 lg:col-span-2 min-h-[280px]" : "min-h-[240px]"
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs text-accent">{project.index}</span>
          <span
            aria-hidden
            className="text-muted-dim opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
          >
            ↗
          </span>
        </div>

        <div className="mt-6 mb-4">
          <PipelineDiagram steps={project.pipeline} size="sm" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">
          {project.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-2 py-0.5 font-mono text-[9px] tracking-wide text-muted-dim"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
      </div>
    </motion.button>
  );
}
