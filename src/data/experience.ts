export type ExperienceEntry = {
  year: string;
  title: string;
  subtitle: string;
  description?: string;
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    year: "2026",
    title: "Monash University Research Assistant",
    subtitle: "Assisting in Behavioral Research on Student Engagement and Learning Outcomes",
  },
  {
    year: "2025",
    title: "Final Year Project",
    subtitle: "AI Agent for Autonomous Robotic Control",
  },
  {
    year: "2024",
    title: "OpenSys (M) Berhad",
    subtitle: "Software Engineering Intern — .NET / APIs / SQL",
  },
  {
    year: "2023",
    title: "Xtend Services Sdn. Bhd.",
    subtitle: "Finance Assistant - Data Entry",
  },
  {
    year: "2022",
    title: "Monash University Malaysia",
    subtitle: "Mechatronics & Robotics Engineering",
  },
];

export type LeadershipRole = {
  organisation: string;
  role: string;
};

export const LEADERSHIP_ROLES: LeadershipRole[] = [
  { organisation: "MUSA", role: "MUSA Welfare Secretary" },
  { organisation: "MUSA", role: "MUSA Activities Secretary" },
  { organisation: "MUSA", role: "Vice President" },
  { organisation: "MUSA", role: "School Of Engineering Representative" },
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
