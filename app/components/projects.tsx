"use client";

import { useEffect } from "react";
import { animateProjectCards } from "@/app/lib/gsap-animations";
import Link from "next/link";

const projects = [
  {
    id: 1,
    slug: "toko-imaji",
    title: "TOKO IMAJI",
    subtitle: "E-COMMERCE PLATFORM",
    tech: ["PHP", "MYSQL", "BOOTSTRAP"],
  },
  {
    id: 2,
    slug: "takoyakin",
    title: "TAKOYAKIN",
    subtitle: "ONLINE SHOP",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://produktif-tako.vercel.app/",
  },
  {
    id: 3,
    slug: "music-verse",
    title: "MUSIC VERSE",
    subtitle: "MUSIC SHOWCASE",
    tech: ["PHP", "TAILWINDCSS", "ALPINE.JS"],
  },
  {
    id: 4,
    slug: "personal-v2",
    title: "PORTFOLIO V2",
    subtitle: "RESPONSIVE DESIGN",
    tech: ["JAVASCRIPT", "TAILWINDCSS", "ALPINE.JS"],
  },
  {
    id: 5,
    slug: "personal-v1",
    title: "PORTFOLIO V1",
    subtitle: "FIRST ITERATION",
    tech: ["LARAVEL", "TAILWINDCSS", "ALPINE.JS"],
  },
  {
    id: 6,
    slug: "whos-note",
    title: "WHO'S NOTE?",
    subtitle: "NOTE APPLICATION",
    tech: ["PHP", "TAILWINDCSS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects-section"
      className="relative min-h-screen w-full bg-white text-black py-20 grid-bg-dark"
    >
      <div className="max-w-7xl mx-auto px-12">
        {/* Section Title - Broken Grid */}
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            SELECTED WORK
          </h2>
          <div className="border-t-2 border-black w-32" />
        </div>

        {/* Projects Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link || `/project/${project.slug}`}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="project-card group relative border-2 border-black p-0 hover:border-[#ff00ff] transition-all duration-300 cursor-pointer"
            >
              {/* Project Header */}
              <div className="p-6 border-b-2 border-black bg-white">
                <h3 className="text-xl font-heading font-bold tracking-wider uppercase mb-2 group-hover:text-[#ff00ff] transition">
                  {project.title}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase text-black/60">
                  {project.subtitle}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="p-6 space-y-4 bg-white">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-bold tracking-widest uppercase border border-black/40 px-3 py-1 group-hover:border-[#ff00ff] group-hover:text-[#ff00ff] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Arrow */}
                <div className="pt-4 text-[#ff00ff] font-bold text-sm group-hover:translate-x-2 transition-transform">
                  EXPLORE →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="border-t-2 border-black pt-12 text-center">
          <a
            href="https://github.com/KORQ-Kalbs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-block"
          >
            VIEW ALL ON GITHUB →
          </a>
        </div>
      </div>
    </section>
  );
}
