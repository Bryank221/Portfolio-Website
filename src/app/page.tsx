import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import SystemProfile from "@/components/SystemProfile";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import EngineeringMindset from "@/components/EngineeringMindset";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import BeyondTheCode from "@/components/BeyondTheCode";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <SystemProfile />
      <ProjectsSection />

      <section
        id="stack"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pb-24 sm:px-10 lg:grid-cols-4"
      >
        <TechStack />
        <EngineeringMindset />
        <ExperienceTimeline />
        <BeyondTheCode />
      </section>

      <Contact />
    </SiteShell>
  );
}
