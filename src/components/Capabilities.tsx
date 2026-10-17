import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { capabilitiesData } from "../data/skills";

const fullStackCapability = capabilitiesData.find((item) => item.title === "Full-Stack Systems");

const educationData = [
  {
    index: "01",
    category: "Academic Education",
    qualification: "Secondary School Certificate (SSC)",
    institution: "Dudmukha High School",
    location: "Dagonbhuiyan, Feni",
    result: "GPA 3.83",
    description:
      "Completed secondary education with a foundation in core academic subjects and continued learning.",
    focus: ["Academic Fundamentals", "Problem Solving", "Self-Learning"],
    Icon: GraduationCap
  },
  {
    index: "02",
    category: "Academic Education",
    qualification: "Diploma in Engineering",
    institution: "Computer Science & Technology",
    location: "Muradpur, Chittagong",
    result: "CGPA 3.50 / 4.00",
    description:
      "Specializing in computer science and technology through engineering studies.",
    focus: ["Computer Science", "Engineering", "Technology"],
    Icon: GraduationCap
  },
  ...(fullStackCapability
    ? [
        {
          index: "03",
          category: "Full-Stack Development",
          qualification: "Full Stack Web Development Bootcamp",
          institution: "Programming Hero",
          location: "Online",
          result: "2026",
          status: "In Progress",
          description:
            "Learning web development through hands-on projects, covering front-end technologies, React, Next.js, and the fundamentals of backend development.",
          focus: [
            "HTML5 / CSS3 / JavaScript (ES6) / TypeScript / Tailwind CSS",
            "React.js & Hooks",
            "Next.js",
            "Node.js, MongoDB & Express.js",
            "Git & GitHub"
          ],
          Icon: Award
        }
      ]
    : [])
];

export const Capabilities: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="py-28 md:py-32 relative border-t border-black/[0.06] dark:border-white/[0.06] transition-colors"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] uppercase mb-4"
        >
          03 · EDUCATION
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[42px] sm:text-[54px] md:text-[64px] text-[#141312] dark:text-[#EDE9E0] leading-tight mb-12 md:mb-16 tracking-tight transition-colors"
        >
          Education & Development
        </motion.h2>

        <div className="relative max-w-[900px] mx-auto">
          <div
            className="absolute left-[19px] sm:left-[23px] top-8 bottom-8 w-px bg-[#7A9E00]/20 dark:bg-[#D6FF4D]/20"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8 sm:gap-10">
            {educationData.map((item, idx) => (
              <motion.article
                key={item.index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  className="absolute left-[12px] sm:left-[16px] top-7 w-4 h-4 rounded-full border-[5px] border-[#84B800] dark:border-[#D6FF4D] bg-[#F7F5F0] dark:bg-[#121110] shadow-[0_0_16px_rgba(132,184,0,0.2)] dark:shadow-[0_0_16px_rgba(214,255,77,0.2)]"
                  aria-hidden="true"
                />

                <div className="bg-white dark:bg-[#1a1917] border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:border-[#7A9E00]/40 dark:hover:border-[#D6FF4D]/30 transition-all duration-300 shadow-sm dark:shadow-lg dark:shadow-black/20">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
                    <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-[#7A9E00] dark:text-[#D6FF4D] bg-[#7A9E00]/10 dark:bg-[#D6FF4D]/10 border border-[#7A9E00]/15 dark:border-[#D6FF4D]/15">
                      <item.Icon className="w-5 h-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mb-3">
                        <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#7A9E00] dark:text-[#D6FF4D]">
                          {item.category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="font-mono text-[9px] tracking-[0.08em] text-[#7A9E00] dark:text-[#D6FF4D] border border-[#7A9E00]/20 dark:border-[#D6FF4D]/20 bg-[#7A9E00]/[0.04] dark:bg-[#D6FF4D]/[0.04] rounded-full px-2.5 py-1">
                            {item.result}
                          </span>
                          <span className="font-mono text-[9px] tracking-[0.08em] text-[#646059] dark:text-[#8d8a82] border border-black/[0.08] dark:border-white/[0.08] rounded-full px-2.5 py-1">
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-sans font-semibold text-lg sm:text-xl leading-snug text-[#141312] dark:text-[#EDE9E0] mt-2">
                        {item.qualification}
                      </h3>
                      <p className="text-sm text-[#646059] dark:text-[#8d8a82] mt-2">
                        {item.institution}
                      </p>
                      {"status" in item && (
                        <p className="text-sm text-[#7A9E00] dark:text-[#D6FF4D] mt-2">
                          {item.status}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-[#646059] dark:text-[#b0ada5] mt-7">
                    {item.description}
                  </p>

                  <div className="mt-7 pt-5 border-t border-black/[0.06] dark:border-white/[0.08]">
                    <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#7A9E00] dark:text-[#D6FF4D] mb-3">
                      Key Focus & Learnings
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {item.focus.map((focus) => (
                        <span
                          key={focus}
                          className="font-mono text-[9px] tracking-[0.04em] text-[#55524c] dark:text-[#C2BFB7] bg-[#F7F5F0] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] px-2.5 py-1.5 rounded-md"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
