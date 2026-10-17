export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export const journeyData: Experience[] = [
  {
    id: "01",
    period: "JUL 2025 — PRESENT",
    role: "Senior Full-Stack Engineer",
    company: "APEX DIGITAL LABS",
    description:
      "Spearheading the core MERN architecture for high-throughput SaaS tools. Reduced server latency by 38% via Redis caching layers and streamlined React client bundles."
  },
  {
    id: "02",
    period: "FEB 2024 — JUN 2025",
    role: "Full-Stack Developer",
    company: "LUMEN INTERACTIVE",
    description:
      "Engineered bespoke editorial web platforms, payment integrations, and modular React component libraries. Collaborated with designers to deliver precision micro-animations."
  },
  {
    id: "03",
    period: "AUG 2022 — JAN 2024",
    role: "Frontend Engineer",
    company: "NOVA STUDIO",
    description:
      "Developed interactive client dashboards, responsive layouts, and REST API integrations using React, TypeScript, and modern state management patterns."
  },
  {
    id: "04",
    period: "JAN 2021 — JUL 2022",
    role: "Junior Web Developer",
    company: "HORIZON TECH",
    description:
      "Built landing pages, custom CMS workflows, and MongoDB database migrations. Maintained code quality, automated unit tests, and cross-browser consistency."
  }
];
