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
    "Engineering robust, high-performance web applications, responsive user interfaces, and scalable microservices. Driven by editorial precision, performance, and pragmatic design.",
  aboutP1:
    "I am a full-stack engineer focused on creating fast, resilient software with modern web technologies. Bridging the gap between complex backend architecture and nuanced, interactive front-ends, I believe great software should feel effortless, look razor-sharp, and scale without friction.",
  aboutP2:
    "From distributed databases and real-time streaming engines to micro-interactions and design systems, I turn ambitious concepts into battle-tested digital experiences.",
  dailyStack: [
    "REACT",
    "NODE.JS",
    "EXPRESS",
    "MONGODB",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "NEXT.JS",
    "REDIS",
    "DOCKER"
  ],
  email: "md2023siyam@gmail.com",
  phone: "+880 18756-30734",
  location: "DHAKA, BANGLADESH",
  resumeUrl: "/Nurul_Alam_Resume.pdf",
  socials: [
    { name: "GITHUB", label: "GITHUB", url: "https://github.com/NurulAlam0" },
    { name: "LINKEDIN", label: "LINKEDIN", url: "https://www.linkedin.com/in/siyam-dev/" },
    { name: "EMAIL", label: "EMAIL", url: "mailto:md2023siyam@gmail.com" },
    { name: "WORK", label: "WORK", url: "/work" }
  ]
};
