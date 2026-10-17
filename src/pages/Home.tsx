import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { WorkCarousel } from "../components/WorkCarousel";
import { Capabilities } from "../components/Capabilities";
import { Journey } from "../components/Journey";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#F7F5F0] dark:bg-[#121110] text-[#646059] dark:text-[#8d8a82] transition-colors duration-300">
      <Hero />
      <About />
      <WorkCarousel />
      <Capabilities />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
};
