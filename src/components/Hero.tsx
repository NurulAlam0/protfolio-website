import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personalData } from "../data/personal";
import myPic from "../assets/My Pic.png";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const anim = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: "easeOut" as const }
        };

  return (
    <section
      id="intro"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Small Mono Label */}
          <motion.div {...anim(0.1)} className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#84B800] dark:bg-[#D6FF4D] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#646059] dark:text-[#8d8a82]">
              {personalData.badge}
            </span>
          </motion.div>

          {/* Giant Serif H1 */}
          <motion.h1
            {...anim(0.2)}
            className="font-serif text-[#141312] dark:text-[#EDE9E0] text-[32px] sm:text-[50px] md:text-[56px] lg:text-[54px] xl:text-[64px] leading-[0.93] tracking-[-0.02em] font-normal mb-8 selection:bg-[#D6FF4D] selection:text-[#121110] transition-colors"
          >
            AI-Driven Full Stack <br /> Web Developer
          </motion.h1>

          {/* Muted Paragraph */}
          <motion.p
            {...anim(0.35)}
            className="text-[#646059] dark:text-[#8d8a82] text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 transition-colors"
          >
            {personalData.subheadline}
          </motion.p>

          {/* Buttons: Lime Pill & Outline Pill */}
          <motion.div
            {...anim(0.45)}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Primary Lime Pill */}
            <button
              type="button"
              onClick={() => handleScrollTo("work")}
              className="inline-flex items-center justify-center font-mono text-[11px] font-semibold tracking-[0.2em] uppercase bg-[#D6FF4D] text-[#121110] px-8 py-3.5 rounded-full hover:bg-[#c4eb38] hover:shadow-[0_0_25px_rgba(214,255,77,0.35)] transition-all duration-300 transform active:scale-95 cursor-pointer border border-black/5"
            >
              VIEW WORK
            </button>

            {/* Outline Pill */}
            <button
              type="button"
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center justify-center font-mono text-[11px] font-normal tracking-[0.2em] uppercase text-[#141312] dark:text-[#EDE9E0] border border-black/20 dark:border-white/20 hover:border-[#7A9E00] dark:hover:border-[#D6FF4D] hover:text-[#7A9E00] dark:hover:text-[#D6FF4D] px-8 py-3.5 rounded-full bg-transparent hover:bg-black/[0.03] dark:hover:bg-[#D6FF4D]/[0.04] transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </motion.div>
        </div>

        {/* Right Column: Rounded Avatar Frame with Glowing Border & Tilt */}
        <motion.div
          {...anim(0.3)}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center"
        >
          <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
            {/* Glowing Backdrop Hue */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-[#D6FF4D]/20 via-black/5 dark:via-white/5 to-[#D6FF4D]/10 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 -z-10" />

            {/* Frame with subtle tilt and 1px border */}
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-[#FFFFFF] dark:bg-[#1a1917] p-2.5 shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#e8e5de] dark:bg-[#141312]">
                <img
                  src={myPic}
                  alt={personalData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "";
                  }}
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#121110] via-transparent to-transparent opacity-60 pointer-events-none" />

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tiny SCROLL label with vertical line animation at bottom center */}
      <motion.div
        {...anim(0.6)}
        className="flex flex-col items-center justify-center pt-8 cursor-pointer select-none group"
        onClick={() => handleScrollTo("about")}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#646059] dark:text-[#8d8a82] group-hover:text-[#7A9E00] dark:group-hover:text-[#D6FF4D] transition-colors uppercase mb-2">
          SCROLL
        </span>
        <div className="w-[1px] h-9 bg-black/10 dark:bg-white/10 relative overflow-hidden">
          <motion.div
            className="w-full h-4 bg-[#84B800] dark:bg-[#D6FF4D]"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [-16, 36]
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
