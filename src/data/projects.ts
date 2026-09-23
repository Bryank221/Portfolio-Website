export type PipelineStep = {
  label: string;
  sublabel?: string;
};

export type CaseStudySection = {
  heading: string;
  body: string;
  placeholder?: boolean;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  pipeline: PipelineStep[];
  technologies: string[];
  caseStudy: CaseStudySection[];
};

export const PROJECTS: Project[] = [
  {
    id: "ai-agent-robotic-control",
    index: "01",
    title: "AI Agent for Autonomous Robotic Control",
    category: "AI / ROBOTICS / AUTONOMOUS SYSTEMS",
    tags: ["AI", "ROBOTICS", "AUTONOMOUS SYSTEMS"],
    summary:
      "An AI agent that translates high-level goals into actions for a robotic system.",
    pipeline: [
      { label: "HIGH-LEVEL GOAL" },
      { label: "AI AGENT" },
      { label: "TASK PLANNING" },
      { label: "ROBOT CONTROL" },
      { label: "PHYSICAL ACTION" },
    ],
    technologies: ["Python", "AI Agents", "Robotics", "Control Systems"],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Final year project exploring how a high-level goal can be translated into executable actions for a robotic system, reducing the need for manually scripted control sequences.",
      },
      {
        heading: "The Approach",
        body: "Placeholder — detailed approach write-up in progress.",
        placeholder: true,
      },
      {
        heading: "System Architecture",
        body: "Placeholder — architecture diagram and breakdown to be added as the project develops.",
        placeholder: true,
      },
      {
        heading: "Implementation",
        body: "Placeholder — implementation details to be added.",
        placeholder: true,
      },
      {
        heading: "Results",
        body: "This project is currently in progress as Bryan's final year project. Results will be added once available.",
        placeholder: true,
      },
      {
        heading: "What I Learned",
        body: "Placeholder — reflections to be added on completion.",
        placeholder: true,
      },
      {
        heading: "Technologies",
        body: "Python, AI Agents, Robotics, Control Systems.",
      },
    ],
  },
  {
    id: "ladinglens",
    index: "02",
    title: "LadingLens",
    category: "AI / DOCUMENT INTELLIGENCE / AUTOMATION",
    tags: ["AI", "DOCUMENT AI", "AUTOMATION"],
    summary:
      "An AI-powered system for shipping operations that detects discrepancies between Shipping Instructions and draft Bills of Lading.",
    pipeline: [
      { label: "EMAIL" },
      { label: "CLASSIFICATION" },
      { label: "DOCUMENT EXTRACTION" },
      { label: "SI ↔ BL COMPARISON" },
      { label: "DISCREPANCY DETECTION" },
      { label: "HUMAN REVIEW" },
    ],
    technologies: ["Python", "AI Agents", "Document AI", "Automation"],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Shipping operations teams manually cross-check Shipping Instructions (SI) against draft Bills of Lading (BL), a slow and error-prone process when done at volume across email threads.",
      },
      {
        heading: "The Approach",
        body: "Build a pipeline that classifies incoming emails, extracts structured data from SI and draft BL documents, and deterministically compares the two to surface discrepancies rather than relying purely on model judgment.",
      },
      {
        heading: "System Architecture",
        body: "Email → Classification → Document Extraction → SI/BL Comparison → Discrepancy Detection → Human Review for uncertain cases.",
      },
      {
        heading: "Implementation",
        body: "Placeholder — implementation details to be added.",
        placeholder: true,
      },
      {
        heading: "Results",
        body: "Placeholder — results to be added.",
        placeholder: true,
      },
      {
        heading: "What I Learned",
        body: "Placeholder — reflections to be added.",
        placeholder: true,
      },
      {
        heading: "Technologies",
        body: "Python, AI Agents, Document AI, Automation.",
      },
    ],
  },
  {
    id: "remote-receipt-reprint",
    index: "03",
    title: "Remote Receipt Reprint System",
    category: "SOFTWARE ENGINEERING / .NET / WEB API",
    tags: [".NET", "WEB API", "SQL"],
    summary:
      "A web-based system that allows remote receipt reprinting through a secure and scalable architecture.",
    pipeline: [
      { label: "KIOSK" },
      { label: "WEB API" },
      { label: "DATABASE" },
      { label: "WEB APPLICATION" },
      { label: "PDF GENERATION" },
    ],
    technologies: [
      "C#",
      "ASP.NET MVC",
      ".NET",
      "Web API",
      "SQL Server",
      "HTML",
      "CSS",
      "Rotativa",
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Kiosk receipts sometimes need to be reprinted remotely, but the original workflow required physical access to the kiosk terminal.",
      },
      {
        heading: "The Approach",
        body: "Expose kiosk transaction data through a Web API backed by SQL Server, and build a web application that lets authorized staff look up a transaction and trigger a PDF reprint remotely.",
      },
      {
        heading: "System Architecture",
        body: "Kiosk → Web API → Database → Web Application → PDF Generation (Rotativa).",
      },
      {
        heading: "Implementation",
        body: "Built with C#, ASP.NET MVC and a Web API layer for kiosk/database access, with Rotativa used to render receipts as PDFs from HTML views.",
      },
      {
        heading: "Results",
        body: "Placeholder — results to be added.",
        placeholder: true,
      },
      {
        heading: "What I Learned",
        body: "Placeholder — reflections to be added.",
        placeholder: true,
      },
      {
        heading: "Technologies",
        body: "C#, ASP.NET MVC, .NET, Web API, SQL Server, HTML, CSS, Rotativa.",
      },
    ],
  },
  {
    id: "offline-kiosk-file-processing",
    index: "04",
    title: "Offline Kiosk File Processing Service",
    category: "SOFTWARE / AUTOMATION / WINDOWS SERVICE",
    tags: [".NET", "WINDOWS SERVICE", "SFTP"],
    summary:
      "A Windows service that retrieves and processes kiosk files when the primary system is unavailable.",
    pipeline: [
      { label: "KIOSK" },
      { label: "SERVICE" },
      { label: "SFTP SERVER" },
      { label: "DATABASE" },
    ],
    technologies: [".NET", "C#", "SFTP", "SQL"],
    caseStudy: [
      {
        heading: "The Problem",
        body: "When the primary kiosk processing system is unavailable, kiosk files still need to be retrieved and processed to avoid data loss or delays.",
      },
      {
        heading: "The Approach",
        body: "Build a standalone Windows service that polls an SFTP server for kiosk files as a fallback path, processing and persisting them to the database independently of the primary system.",
      },
      {
        heading: "System Architecture",
        body: "Kiosk → Windows Service → SFTP Server → Database.",
      },
      {
        heading: "Implementation",
        body: "Implemented as a .NET Windows Service in C#, using SFTP for file retrieval and SQL for persistence.",
      },
      {
        heading: "Results",
        body: "Placeholder — results to be added.",
        placeholder: true,
      },
      {
        heading: "What I Learned",
        body: "Placeholder — reflections to be added.",
        placeholder: true,
      },
      {
        heading: "Technologies",
        body: ".NET, C#, SFTP, SQL.",
      },
    ],
  },
  {
    id: "robotics-embedded-systems",
    index: "05",
    title: "Robotics & Embedded Systems",
    category: "ROBOTICS / EMBEDDED / CONTROL",
    tags: ["EMBEDDED", "SENSORS", "CONTROL"],
    summary:
      "Projects involving microcontrollers, sensors, control systems and embedded programming.",
    pipeline: [
      { label: "SENSOR INPUT" },
      { label: "MICROCONTROLLER" },
      { label: "CONTROL LOGIC" },
      { label: "ACTUATION" },
    ],
    technologies: ["Microcontrollers", "Sensors", "PWM", "Embedded C", "Control Systems"],
    caseStudy: [
      {
        heading: "The Problem",
        body: "A collection of coursework and personal projects exploring the fundamentals of embedded and robotic systems.",
      },
      {
        heading: "The Approach",
        body: "Hands-on work with microcontrollers, sensors (including accelerometers) and PWM-driven actuation to build small closed-loop control systems.",
      },
      {
        heading: "System Architecture",
        body: "Sensor Input → Microcontroller → Control Logic → Actuation.",
      },
      {
        heading: "Implementation",
        body: "Placeholder — individual project write-ups to be added.",
        placeholder: true,
      },
      {
        heading: "Results",
        body: "Placeholder — results to be added.",
        placeholder: true,
      },
      {
        heading: "What I Learned",
        body: "Placeholder — reflections to be added.",
        placeholder: true,
      },
      {
        heading: "Technologies",
        body: "Microcontrollers, Sensors, PWM, Embedded C, Control Systems.",
      },
    ],
  },
];
