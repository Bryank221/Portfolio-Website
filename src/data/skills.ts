export type SkillGroup = {
  id: string;
  label: string;
  icon: "software" | "ai" | "robotics" | "engineering";
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "software",
    label: "SOFTWARE",
    icon: "software",
    items: ["C#", ".NET", "ASP.NET", "REST APIs", "SQL", "Git"],
  },
  {
    id: "ai-data",
    label: "AI / DATA",
    icon: "ai",
    items: ["Python", "PyTorch", "AI Agents", "Machine Learning", "Computer Vision"],
  },
  {
    id: "robotics",
    label: "ROBOTICS",
    icon: "robotics",
    items: [
      "ROS",
      "Sensors",
      "Embedded Systems",
      "Control Systems",
      "Autonomous Systems",
    ],
  },
  {
    id: "engineering",
    label: "ENGINEERING",
    icon: "engineering",
    items: ["MATLAB", "CAD", "Microcontrollers", "Electronics", "Automation"],
  },
];
