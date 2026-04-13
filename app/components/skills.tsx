'use client';

import { useEffect } from 'react';
import { animateSkillItems, animateFloatingBadges } from '@/app/lib/gsap-animations';

const skillCategories = {
  advanced: ['HTML', 'CSS', 'TAILWINDCSS', 'BOOTSTRAP', 'PHP'],
  intermediate: ['LARAVEL', 'JAVASCRIPT', 'NODE.JS', 'ALPINE.JS'],
  beginner: ['VUE.JS', 'REACT', 'NEXT.JS'],
  tools: ['GITHUB', 'NPM', 'MYSQL', 'VS CODE', 'COMPOSER'],
};

export default function Skills() {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      animateSkillItems();
      animateFloatingBadges();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills-section" className="relative min-h-screen w-full bg-white text-black py-20 grid-bg">
      <div className="max-w-7xl mx-auto px-12">
        {/* Section Title */}
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight">TECH STACK</h2>
          <div className="border-t-2 border-black w-32" />
        </div>

        {/* Skills Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Advanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold tracking-wider uppercase border-b-2 border-black pb-4">
              ADVANCED
            </h3>
            <div className="space-y-3">
              {skillCategories.advanced.map((skill) => (
                <div key={skill} className="skill-item text-sm font-body text-black/80 flex items-start gap-2">
                  <span className="text-black font-bold">●</span>
                  <span className="font-bold tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intermediate */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold tracking-wider uppercase border-b-2 border-black pb-4">
              INTERMEDIATE
            </h3>
            <div className="space-y-3">
              {skillCategories.intermediate.map((skill) => (
                <div key={skill} className="skill-item text-sm font-body text-black/80 flex items-start gap-2">
                  <span className="text-black font-bold">●</span>
                  <span className="font-bold tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beginner */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold tracking-wider uppercase border-b-2 border-black pb-4">
              LEARNING
            </h3>
            <div className="space-y-3">
              {skillCategories.beginner.map((skill) => (
                <div key={skill} className="skill-item text-sm font-body text-black/80 flex items-start gap-2">
                  <span className="text-black font-bold">●</span>
                  <span className="font-bold tracking-wide">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold tracking-wider uppercase border-b-2 border-black pb-4">
              TOOLS
            </h3>
            <div className="space-y-3">
              {skillCategories.tools.map((tool) => (
                <div key={tool} className="skill-item text-sm font-body text-black/80 flex items-start gap-2">
                  <span className="text-black font-bold">●</span>
                  <span className="font-bold tracking-wide">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Badges - Scattered */}
        <div className="relative h-48 mb-20">
          <div className="floating-badge absolute top-10 left-20 px-4 py-2 border-2 border-black text-xs font-bold tracking-widest uppercase">
            CURRENTLY MASTERING
          </div>
          <div className="floating-badge absolute top-32 right-32 px-4 py-2 border-2 border-[#ff00ff] text-[#ff00ff] text-xs font-bold tracking-widest uppercase">
            REACT
          </div>
          <div className="floating-badge absolute bottom-10 left-1/3 px-4 py-2 border-2 border-[#00ffff] text-[#00ffff] text-xs font-bold tracking-widest uppercase">
            NEXT.JS
          </div>
        </div>

        {/* Focus Area */}
        <div className="border-2 border-black p-8 bg-white">
          <p className="text-sm leading-relaxed">
            <span className="font-bold tracking-widest uppercase">▪ PRIMARY FOCUS ▪</span>
            <br />
            Expanding frontend expertise with React and Next.js. Building production-ready applications with modern JavaScript frameworks and optimization best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
