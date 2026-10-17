export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    year: "2026",
    title: "FitLog – Workout Tracker",
    description: "A modern fitness app to plan workouts, track sets, and monitor progress..",
    tags: ["REACT", "MONGODB", "TAILWIND CSS","TYPESCRIPT"],
    image: "/projects/fitlog.png",
    githubUrl: "https://github.com/NurulAlam0/fitlog-app",
    liveUrl: "https://fitlog-app-livid.vercel.app/"
  },
  {
    id: "02",
    year: "2026",
    title: "Bazar Dor – Daily Market Price",
    description: "A Bangla marketplace app for checking daily prices of essential products.",
    tags: ["REACT", "NEXT JS","MONGODB", "TAILWIND CSS","TYPESCRIPT"],
    image: "/projects/bazar_dor.png",
    githubUrl: "https://github.com/NurulAlam0/Bazar-dor-website",
    liveUrl: "https://bazar-dor-ruby.vercel.app/"
  },
  {
    id: "03",
    year: "2026",
    title: "Bangla News 24 – News Portal",
    description: "A modern Bangla news portal for browsing trending and latest news.",
    tags: ["REACT", "NEXT JS","MONGODB", "TAILWIND CSS","TYPESCRIPT"],
    image: "/projects/Bangla News.png",
    githubUrl: "https://github.com/NurulAlam0/bangla-news",
    liveUrl: "https://bangla-news-main.vercel.app/"
  },
  {
    id: "04",
    year: "2026",
    title: "DevStack – Technology Stack Builder",
    description: "A web app for exploring, comparing, and building custom technology stacks.",
    tags: ["REACT","TALIWIND CSS" , "TYPESCRIPT"],
    image: "/projects/dev stack.png",
    githubUrl: "https://github.com/NurulAlam0/dev-stack",
    liveUrl: "https://devstack-hub.netlify.app/"
  },
  // {
  //   id: "05",
  //   title: "Cognition Neural Canvas",
  //   year: "2024",
  //   description: "Node-based workflow designer connecting LLM reasoning pipelines with low-latency streaming endpoints.",
  //   tags: ["REACT", "FRAMER MOTION", "TAILWIND CSS", "NODE"],
  //   image: "/projects/project5.jpg"
  // },
  // {
  //   id: "06",
  //   title: "Echo Minimalist Audio",
  //   year: "2023",
  //   description: "Cloud audio studio with Web Audio API synthesis, waveform scrubbing, and lossless multi-track exports.",
  //   tags: ["REACT", "TYPESCRIPT", "WEB AUDIO API", "EXPRESS"],
  //   image: "/projects/project6.jpg"
  // }
];
