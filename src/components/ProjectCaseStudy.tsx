"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import PipelineDiagram from "@/components/PipelineDiagram";

export default function ProjectCaseStudy({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto bg-background/90 backdrop-blur-sm px-4 py-10 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl border border-border-strong bg-surface"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border bg-surface px-6 py-5 sm:px-10">
              <div>
                <p className="font-mono text-xs text-accent">{project.index}</p>
                <h2
                  id="case-study-title"
                  className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  {project.title}
                </h2>
                <p className="mt-1 font-mono text-[11px] tracking-[0.15em] text-muted-dim">
                  {project.category}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="flex h-9 w-9 shrink-0 items-center justify-center border border-border font-mono text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-8 sm:px-10">
              <div className="mb-10 overflow-x-auto pb-2">
                <PipelineDiagram steps={project.pipeline} size="lg" />
              </div>

              <div className="space-y-8">
                {project.caseStudy.map((section, i) => (
                  <div key={section.heading} className="border-t border-border pt-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                        {section.heading}
                      </h3>
                    </div>
                    <p
                      className={`mt-3 max-w-2xl text-sm leading-relaxed ${
                        section.placeholder ? "text-muted-dim italic" : "text-muted"
                      }`}
                    >
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
