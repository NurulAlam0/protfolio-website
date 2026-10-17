import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillGroupsData } from "../data/skills";

export const Journey: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-28 md:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4"
        >
          04 · SKILLS
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-[#141312] dark:text-[#EDE9E0] leading-tight mb-10 md:mb-14 tracking-tight transition-colors"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {skillGroupsData.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative min-h-48 overflow-hidden border border-black/[0.07] dark:border-white/[0.07] rounded-2xl p-5 sm:p-6 flex flex-col bg-white/50 dark:bg-white/[0.015] group hover:border-[#7A9E00]/35 dark:hover:border-[#D6FF4D]/30 hover:bg-white dark:hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <h3 className="font-serif text-xl sm:text-2xl text-[#141312] dark:text-[#EDE9E0] leading-snug group-hover:text-[#7A9E00] dark:group-hover:text-[#D6FF4D] transition-colors">
                  {group.title}
                </h3>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-[#7A9E00] dark:text-[#D6FF4D] border border-[#7A9E00]/20 dark:border-[#D6FF4D]/20 rounded-full px-2.5 py-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="h-px w-full bg-black/[0.06] dark:bg-white/[0.08] mb-5 relative">
                <span className="absolute left-0 top-0 h-px w-10 bg-[#84B800] dark:bg-[#D6FF4D] transition-all duration-300 group-hover:w-16" />
              </div>
              <div className="flex flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] tracking-[0.08em] text-[#55524c] dark:text-[#C2BFB7] bg-[#F7F5F0] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] px-3 py-1.5 rounded-lg group-hover:border-[#7A9E00]/15 dark:group-hover:border-[#D6FF4D]/15 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
