import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import { projectsData, type Project } from "../data/projects";

export const WorkCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByCard = (direction: -1 | 1) => {
    const container = scrollContainerRef.current;
    const firstCard = container?.firstElementChild;

    if (container && firstCard) {
      const gap = Number.parseFloat(getComputedStyle(container).columnGap) || 0;
      const cardWidth = firstCard.getBoundingClientRect().width;
      container.scrollBy({
        left: direction * (cardWidth + gap),
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="work" className="py-28 md:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4"
        >
          02 · SELECTED WORK
        </motion.div>

        {/* Section Heading & Archive Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-[#141312] dark:text-[#EDE9E0] leading-tight tracking-tight transition-colors"
          >
            Case studies
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-6"
          >
            {/* Desktop Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 transition-colors bg-white/80 dark:bg-[#1a1917]/50 shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 transition-colors bg-white/80 dark:bg-[#1a1917]/50 shadow-xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* FULL ARCHIVE -> Mono Link */}
            <Link
              to="/work"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#141312] dark:text-[#EDE9E0] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] flex items-center gap-2 group transition-colors"
            >
              <span>FULL ARCHIVE</span>
              <span className="text-[#84B800] dark:text-[#D6FF4D] transform group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll-Snap Carousel */}
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-6 md:px-[calc((100vw-1200px)/2+24px)] select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollPaddingLeft: "24px"
          }}
        >
          {projectsData.slice(0, 3).map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="w-[min(300px,calc(100vw-3rem))] sm:w-[320px] lg:w-[calc((100vw-10rem)/3)] shrink-0 snap-start"
            >
              <div
                className="group flex h-full flex-col rounded-xl overflow-hidden bg-[#FFFFFF] dark:bg-[#1a1917] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 transition-all duration-500 shadow-xl"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#e8e5de] dark:bg-[#141312]">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80";
                    }}
                  />
                  <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-[#D6FF4D] uppercase bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {project.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#7A9E00] dark:text-[#D6FF4D] block mb-1">
                    {project.id}
                  </span>

                  <h3 className="font-serif text-2xl text-[#141312] dark:text-[#EDE9E0] leading-tight mb-2 group-hover:text-[#7A9E00] dark:group-hover:text-[#D6FF4D] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#646059] dark:text-[#C2BFB7] line-clamp-2 mb-3 font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.15em] uppercase text-[#646059] dark:text-[#C2BFB7] bg-black/[0.04] dark:bg-white/[0.05] px-2 py-0.5 rounded border border-black/[0.08] dark:border-white/[0.1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-[#7A9E00] dark:text-[#D6FF4D]"
                    >
                      <Code2 className="w-3.5 h-3.5" /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-[#7A9E00] dark:text-[#D6FF4D]"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
