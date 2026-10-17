import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { projectsData, type Project } from "../data/projects";
import { Footer } from "../components/Footer";

export const Work: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#F7F5F0] dark:bg-[#121110] text-[#646059] dark:text-[#8d8a82] flex flex-col justify-between pt-32 transition-colors duration-300">
      <main className="max-w-[1200px] w-full mx-auto px-6 mb-24">
        {/* Top: "← HOME" mono link */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#646059] dark:text-[#8d8a82] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            <span>HOME</span>
          </Link>
        </motion.div>

        {/* Big Serif Heading: "The archive" */}
        <motion.h1
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[56px] sm:text-[76px] md:text-[96px] text-[#141312] dark:text-[#EDE9E0] leading-[0.95] tracking-tight mb-6 transition-colors"
        >
          The archive
        </motion.h1>

        {/* Muted Intro Paragraph */}
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#646059] dark:text-[#8d8a82] text-lg sm:text-xl font-light leading-relaxed max-w-2xl mb-16 transition-colors"
        >
          A comprehensive index of engineering projects, architectural case studies, open-source experiments, and client systems shipped from 2023 to present.
        </motion.p>

        {/* Vertical List of Projects */}
        <div className="border-t border-b border-black/[0.06] dark:border-white/[0.06] divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {projectsData.map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="py-10 md:py-12 group transition-colors duration-300"
            >
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center"
              >
                {/* Left: Thumbnail (~330px wide, rounded-lg) */}
                <div className="md:col-span-4 lg:col-span-4 overflow-hidden rounded-lg bg-white dark:bg-[#1a1917] border border-black/[0.08] dark:border-white/[0.08] group-hover:border-[#7A9E00]/40 dark:group-hover:border-[#D6FF4D]/40 transition-colors shadow-lg">
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-95 dark:brightness-90 group-hover:brightness-100 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 dark:from-[#121110]/50 to-transparent opacity-60" />
                  </div>
                </div>

                {/* Right: Year, Title in Large Serif, One-line Description, Mono Tech-Tags */}
                <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-center">
                  {/* Top row: Year & Arrow */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] text-[#646059] dark:text-[#8d8a82] uppercase">
                      {project.year} · INDEX {project.id}
                    </span>
                    <div className="text-[#646059] dark:text-[#8d8a82] group-hover:text-[#7A9E00] dark:group-hover:text-[#D6FF4D] transition-colors">
                      <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title in Large Serif (turns lime on hover) */}
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#141312] dark:text-[#EDE9E0] group-hover:text-[#7A9E00] dark:group-hover:text-[#D6FF4D] leading-tight mb-3 transition-colors duration-200">
                    {project.title}
                  </h2>

                  {/* One-line Description */}
                  <p className="text-[#646059] dark:text-[#8d8a82] text-sm sm:text-base leading-relaxed font-light mb-5 max-w-2xl transition-colors">
                    {project.description}
                  </p>

                  {/* Mono Tech-tags Line (e.g. REACT TAILWIND CSS) */}
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#646059] dark:text-[#8d8a82] group-hover:text-[#141312] dark:group-hover:text-[#EDE9E0] flex flex-wrap gap-x-3 gap-y-1 transition-colors">
                    {project.tags.join("  ·  ")}
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-[#646059] dark:text-[#8d8a82] border border-black/10 dark:border-white/10 hover:border-[#7A9E00]/50 dark:hover:border-[#D6FF4D]/50 hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] px-3 py-1.5 rounded-md transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-[#646059] dark:text-[#8d8a82] border border-black/10 dark:border-white/10 hover:border-[#7A9E00]/50 dark:hover:border-[#D6FF4D]/50 hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] px-3 py-1.5 rounded-md transition-colors"
                    >
                      Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
