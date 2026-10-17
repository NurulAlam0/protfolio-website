import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personalData } from "../data/personal";

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-28 md:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section mono tag */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4"
        >
          01 · ABOUT
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-[#141312] dark:text-[#EDE9E0] leading-[1.05] mb-10 md:mb-14 tracking-tight transition-colors max-w-4xl"
        >
          AI-driven engineering, built for the web.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative h-full min-h-56 overflow-hidden rounded-2xl border border-black/[0.07] dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.025] p-6 sm:p-8 flex flex-col justify-between group transition-colors hover:border-[#7A9E00]/30 dark:hover:border-[#D6FF4D]/25">
              <span className="absolute -right-4 -top-12 font-serif text-[180px] leading-none text-black/[0.025] dark:text-white/[0.025] select-none pointer-events-none">
                01
              </span>
              <div className="relative flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[#646059] dark:text-[#8d8a82]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#84B800] dark:bg-[#D6FF4D]" />
                THE DEVELOPER
              </div>
              <div className="relative mt-10">
                <h3 className="font-serif text-4xl sm:text-5xl text-[#141312] dark:text-[#EDE9E0] tracking-tight mb-3">
                  {personalData.name}
                </h3>
                <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-[#7A9E00] dark:text-[#D6FF4D] uppercase font-semibold">
                  {personalData.role}
                </p>
              </div>
              <div className="relative mt-8 pt-5 border-t border-black/[0.07] dark:border-white/[0.08] flex items-center gap-2 text-[#646059] dark:text-[#8d8a82]">
                <MapPin className="w-3.5 h-3.5 text-[#7A9E00] dark:text-[#D6FF4D]" />
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase">
                  {personalData.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-8 flex flex-col justify-between gap-8"
          >
            <div className="relative border-l-2 border-[#84B800]/50 dark:border-[#D6FF4D]/50 pl-5 sm:pl-7">
              <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-[#55524c] dark:text-[#C2BFB7] selection:bg-[#D6FF4D] selection:text-[#121110]">
                {personalData.aboutP1}
              </p>
            </div>

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#646059] dark:text-[#8d8a82] max-w-3xl">
              {personalData.aboutP2}
            </p>

            <div className="pt-6 sm:pt-7 border-t border-black/[0.07] dark:border-white/[0.08]">
              <div className="font-mono text-[10px] tracking-[0.22em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4 flex items-center gap-3">
                <span className="text-[#7A9E00] dark:text-[#D6FF4D] font-semibold whitespace-nowrap">DAILY TECH STACK</span>
                <span className="h-px flex-1 bg-black/[0.07] dark:bg-white/[0.08]" />
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {personalData.dailyStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#141312] dark:text-[#EDE9E0] bg-white/80 dark:bg-[#1a1917] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/40 hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] px-3 py-1.5 rounded-full transition-colors duration-200 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
