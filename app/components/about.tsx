"use client";

import { useEffect } from "react";
import {
  animateTimelineDots,
  animateTimelineText,
} from "@/app/lib/gsap-animations";

const timeline = [
  {
    year: "2024–PRESENT",
    title: "BUILDING MY PORTFOLIO",
    description:
      "Creating modern portfolio websites with Next.js, React, and GSAP animations.",
  },
  {
    year: "2023",
    title: "DISCOVERED WEB DEVELOPMENT",
    description:
      "Started learning PHP and TailwindCSS. Built first projects with Laravel and Alpine.js.",
  },
  {
    year: "2022",
    title: "WEB DEVELOPMENT BEGINS",
    description:
      "Learned HTML, CSS, and JavaScript. Built first e-commerce platform with PHP and MySQL.",
  },
  {
    year: "ONGOING",
    title: "CONTINUOUS LEARNING",
    description:
      "Always exploring new technologies and improving skills in game development too.",
  },
];

export default function About() {
  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full bg-black text-white py-20 grid-bg about-grid"
    >
      <div className="max-w-7xl mx-auto px-12">
        {/* Section Title */}
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            ABOUT ME
          </h2>
          <div className="border-t-2 border-white w-32" />
        </div>

        {/* About Content - Asymmetrical 2 Column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Left - Text (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                I'm <span className="font-bold">KAFKHA YASIN ALBIAN</span>, a
                high school student based in{" "}
                <span className="font-bold">BOGOR BARAT, INDONESIA</span>,
                passionate about web development and design.
              </p>
              <p className="text-white/80">
                I believe in building exceptional digital experiences that are
                not only visually stunning but also performant and
                user-friendly. My journey into web development started with
                curiosity and has evolved into genuine passion.
              </p>
              <p className="text-white/80">
                Currently, I'm focused on mastering modern JavaScript frameworks
                like <span className="font-bold">REACT</span> and{" "}
                <span className="font-bold">NEXT.JS</span> to take my frontend
                skills to the next level.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t-2 border-white">
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  EMAIL
                </p>
                <a
                  href="mailto:Korqsz@proton.me"
                  className="text-sm font-bold text-[#ff00ff] hover:underline"
                >
                  KORQSZ@PROTON.ME
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  LOCATION
                </p>
                <p className="text-sm font-bold">BOGOR BARAT, ID</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  GITHUB
                </p>
                <a
                  href="https://github.com/KORQ-Kalbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#ff00ff] hover:underline"
                >
                  @KORQ-KALBS
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  EDUCATION
                </p>
                <p className="text-sm font-bold">HIGH SCHOOL STUDENT</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  LINKEDIN
                </p>
                <a
                  href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#ff00ff] hover:underline"
                >
                  KAFKHA YASIN
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                  EXPERIENCE
                </p>
                <p className="text-sm font-bold">1+ YEAR IN WEB DEVELOPMENT</p>
              </div>
            </div>
          </div>

          {/* Right - Container for visual balance */}
          <div className="hidden lg:block relative h-96">
            {/* PixelArt component is now fixed globally */}
          </div>
        </div>

        {/* Timeline - Full Width */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold tracking-wider uppercase mb-12 border-b-2 border-white pb-6">
            JOURNEY
          </h3>

          {/* Timeline Items */}
          <div className="space-y-0 relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className="pb-12 relative"
                style={{ paddingLeft: "13px" }}
              >
                {/* Dot */}
                <div className="timeline-dot absolute -left-4 top-2 w-7 h-7 rounded-full border-2 border-white bg-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/50">
                    {item.year}
                  </p>
                  <h4 className="text-lg font-heading font-bold tracking-wide uppercase timeline-text ">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed timeline-text">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="border-2 border-white p-8">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-4">
            INTERESTS & HOBBIES
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "WEB DEVELOPMENT",
              "UI/UX DESIGN",
              "GAME DEVELOPMENT",
              "OPEN SOURCE",
              "INNOVATION",
              "CREATIVITY",
            ].map((interest) => (
              <span
                key={interest}
                className="px-3 py-2 border border-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
