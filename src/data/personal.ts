export interface PersonalInfo {
  name: string;
  role: string;
  badge: string;
  headline: string;
  subheadline: string;
  aboutP1: string;
  aboutP2: string;
  dailyStack: string[];
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: {
    name: string;
    label: string;
    url: string;
  }[];
}

export const personalData: PersonalInfo = {
  name: "Nurul Alam",
  role: "FULL-STACK DEVELOPER",
  badge: "NURUL ALAM · FULL-STACK DEVELOPER",
  headline: "Building modern products with the MERN stack.",
  subheadline:
    "I build fast, responsive web applications with React, Next.js, Node.js and MongoDB — including a live price tracker for Bangladesh markets, a Bangla news portal, and a workout tracker. Driven by clean design, performance, and pragmatic engineering.",
  aboutP1:
    "I am a junior full-stack web developer focused on creating fast, reliable software with modern web technologies. My workflow is AI-driven — I build alongside AI tools and agentic assistants to prototype faster, solve problems smarter, and ship polished products with care. Bridging the gap between backend architecture and interactive front-ends, I believe great software should feel effortless, look sharp, and work without friction.",
  aboutP2:
    "From REST APIs and authentication to responsive interfaces and design details, I turn ideas into working products — like Bazar Dor, a daily market price tracker for Bangladesh, Bangla News 24, and FitLog, all live and linked in the Work section below.",
  dailyStack: [
    "REACT",
    "NEXT.JS",
    "NODE.JS",
    "EXPRESS",
    "MONGODB",
    "TYPESCRIPT",
    "TAILWIND CSS"
  ],
  email: "md2023siyam@gmail.com",
  phone: "+880 18756-30734",
  location: "CHATTOGRAM, BANGLADESH",
  resumeUrl: "/Nurul_Alam_Resume.pdf",
  socials: [
    { name: "GITHUB", label: "GITHUB", url: "https://github.com/NurulAlam0" },
    { name: "LINKEDIN", label: "LINKEDIN", url: "https://www.linkedin.com/in/siyam-dev/" },
    { name: "FIVERR", label: "FIVERR", url: "https://www.fiverr.com/mdsiyam866" },
    { name: "EMAIL", label: "EMAIL", url: "mailto:md2023siyam@gmail.com" },
    { name: "WORK", label: "WORK", url: "/work" }
  ]
};
