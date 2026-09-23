export type ExperienceEntry = {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    year: "2026",
    title: "AI / Robotics",
    subtitle: "Final Year Project — AI Agent for Autonomous Robotic Control",
  },
  {
    year: "2025",
    title: "OpenSys",
    subtitle: "Software Engineering Intern — .NET / APIs / SQL",
  },
  {
    year: "2024",
    title: "MUSA",
    subtitle: "School of Engineering Representative",
  },
  {
    year: "2023",
    title: "Monash University",
    subtitle: "Mechatronics & Robotics Engineering",
  },
];

export type LeadershipRole = {
  organisation: string;
  role: string;
};

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  { organisation: "MUSA Buddy Programme", role: "Secretary" },
  { organisation: "Monash Cup", role: "Secretary" },
  { organisation: "Monash Esports Club", role: "Secretary" },
  { organisation: "Monash Basketball Club", role: "Deputy Secretary" },
];

export const LEADERSHIP_THEMES = [
  "Leadership",
  "Event Planning",
  "Team Coordination",
  "Communication",
  "Problem Solving",
  "Community Impact",
];
