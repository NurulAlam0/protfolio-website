import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-[#84B800] dark:bg-[#D6FF4D] origin-left shadow-[0_0_10px_rgba(214,255,77,0.8)]"
        style={{ scaleX: scrollProgress }}
        transition={shouldReduceMotion ? { duration: 0 } : { ease: "linear", duration: 0.05 }}
      />
    </div>
  );
};
