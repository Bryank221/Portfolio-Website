"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { PROJECTS, type Project } from "@/data/projects";

export default function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
      <SectionHeading
        index="03"
        title="Featured Projects"
        action={{ label: "View all projects", href: "/work" }}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setActive(project)}
            featured={i === 0}
          />
        ))}
      </div>

      <ProjectCaseStudy project={active} onClose={() => setActive(null)} />
    </section>
  );
}
