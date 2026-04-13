'use client';

import { useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Skills from './components/skills';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import { initAllAnimations } from '@/app/lib/gsap-animations';

export default function Home() {
  useEffect(() => {
    // Initialize all GSAP animations
    initAllAnimations();
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
