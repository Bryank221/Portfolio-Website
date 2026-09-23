import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import WorkContent from "@/components/WorkContent";

export const metadata: Metadata = {
  title: "Work — Bryan Kwong",
  description:
    "All projects by Bryan Kwong across AI, robotics, embedded systems and software engineering.",
};

export default function WorkPage() {
  return (
    <SiteShell>
      <WorkContent />
    </SiteShell>
  );
}
