export interface Capability {
  index: string;
  title: string;
  description: string;
  chips: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroupsData: SkillGroup[] = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "TypeScript", "Responsive Design"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "REST API Development", "Authentication", "JWT"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "Redis"]
  },
  {
    title: "Version Control & Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    title: "Other Skills",
    skills: ["API Integration", "Debugging", "Problem Solving", "Framer Motion"]
  },
  {
    title: "AI Tools & Prompt Engineering",
    skills: ["Cursor", "Antigravity", "ChatGPT", "Prompt Engineering"]
  }
];

export const capabilitiesData: Capability[] = [
  {
    index: "01",
    title: "Product UI",
    description:
      "Sculpting fluid, editorial user interfaces with micro-interactions, responsive grids, and design tokens that feel tactile and intuitive.",
    chips: ["REACT", "TAILWIND CSS", "FRAMER MOTION", "TYPESCRIPT", "ACCESSIBILITY"]
  },
  {
    index: "02",
    title: "Full-Stack Systems",
    description:
      "Engineering resilient backend microservices, RESTful & GraphQL APIs, MongoDB schema modeling, authentication, and high-throughput caching.",
    chips: ["NODE.JS", "EXPRESS", "MONGODB", "REDIS", "REST APIS", "JWT"]
  },
  {
    index: "03",
    title: "AI Workflows",
    description:
      "Orchestrating agentic pipelines, streaming LLM outputs, semantic vector lookups, and embedding automated intelligence into web products.",
    chips: ["LANGCHAIN", "OPENAI APIS", "VECTOR SEARCH", "STREAMING", "DOCKER"]
  }
];
