import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience — Bryan Kwong",
  description:
    "Bryan Kwong's experience timeline across engineering, internships and leadership roles.",
};

export default function ExperiencePage() {
  return (
    <SiteShell>
      <ExperienceContent />
    </SiteShell>
  );
}
