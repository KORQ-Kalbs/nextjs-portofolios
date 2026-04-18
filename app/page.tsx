"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Robot from "./components/robot";
import { initAllAnimations } from "@/app/lib/gsap-animations";

export default function Home() {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      <Navbar />
      <div className="relative">
        {/* Robot acting as a background, pointer-events-none allows page scrolling */}
        <div className="fixed inset-0 z-50 pointer-events-none hidden lg:block">
          <Robot />
        </div>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
