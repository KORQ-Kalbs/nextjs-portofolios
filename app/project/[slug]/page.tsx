import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

const projectDetails: Record<string, any> = {
  "toko-imaji": {
    title: "TOKO IMAJI",
    subtitle: "Full-Featured E-Commerce Platform",
    tech: ["PHP", "MYSQL", "BOOTSTRAP"],
    description:
      "A complete e-commerce solution built with PHP and MySQL. Features include product management, shopping cart, checkout system, and admin dashboard for inventory management.",
    highlights: [
      "Dynamic product catalog with search and filtering",
      "Secure checkout with payment integration",
      "User account management and order history",
      "Admin panel for product management",
    ],
  },
  takoyakin: {
    title: "TAKOYAKIN",
    subtitle: "Online Takoyaki Shop",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    description:
      "An interactive online shop for selling Takoyaki. Built with vanilla JavaScript and featuring a responsive design, menu showcase, and order system.",
    highlights: [
      "Responsive menu interface",
      "Interactive product selection",
      "Real-time order tracking",
      "Mobile-optimized design",
    ],
    link: "https://produktif-tako.vercel.app/",
  },
  "music-verse": {
    title: "MUSIC VERSE",
    subtitle: "Personal Music Showcase",
    tech: ["PHP", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "A platform showcasing personal music taste and playlist recommendations. Built with Alpine.js for interactivity and TailwindCSS for modern styling.",
    highlights: [
      "Dynamic playlist curation",
      "Music discovery features",
      "Social sharing integration",
      "Responsive audio player",
    ],
  },
  "personal-v2": {
    title: "PORTFOLIO V2",
    subtitle: "Responsive Portfolio Design",
    tech: ["JAVASCRIPT", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "Second iteration of personal portfolio featuring improved design and enhanced interactivity using Alpine.js for state management and smooth transitions.",
    highlights: [
      "Enhanced UI/UX",
      "Smooth page transitions",
      "Improved performance",
      "Better mobile experience",
    ],
  },
  "personal-v1": {
    title: "PORTFOLIO V1",
    subtitle: "First Portfolio Iteration",
    tech: ["LARAVEL", "TAILWINDCSS", "ALPINE.JS"],
    description:
      "First portfolio website built with Laravel backend and TailwindCSS frontend. Served as foundation for portfolio development and showcased initial projects.",
    highlights: [
      "Laravel backend setup",
      "TailwindCSS styling",
      "Alpine.js interactions",
      "Project showcase grid",
    ],
  },
  "whos-note": {
    title: "WHO'S NOTE?",
    subtitle: "Note and Diary Application",
    tech: ["PHP", "TAILWINDCSS"],
    description:
      "A note-taking application with diary features. Allows users to create, organize, and manage personal notes with categorization and search functionality.",
    highlights: [
      "Note creation and editing",
      "Categorization system",
      "Search functionality",
      "Persistent storage",
    ],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto px-12 py-32 text-center">
          <h1 className="text-5xl font-heading font-bold mb-4">
            PROJECT NOT FOUND
          </h1>
          <Link
            href="/#projects-section"
            className="btn-neon inline-block mt-8"
          >
            BACK TO PROJECTS
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-12 py-32">
        {/* Hero */}
        <div className="mb-20">
          <Link
            href="/#projects-section"
            className="text-xs font-bold tracking-widest uppercase text-[#ff00ff] hover:underline mb-8 inline-block"
          >
            ← BACK TO PROJECTS
          </Link>
          <h1 className="text-6xl font-heading font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-2xl font-heading tracking-wide text-white/60 mb-8">
            {project.subtitle}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 border-2 border-white hover:border-[#ff00ff] hover:text-[#ff00ff] transition text-sm font-bold tracking-widest uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description Box */}
          <div className="border-l-4 border-[#ff00ff] pl-8 py-4 mb-12">
            <p className="text-base leading-relaxed text-white/80">
              {project.description}
            </p>
          </div>

          {/* Link CTA */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block hover:shadow-[0_0_30px_#ff00ff]"
            >
              VIEW LIVE PROJECT →
            </a>
          )}
        </div>

        {/* Highlights */}
        <div className="mb-20 border-t-2 border-white pt-12">
          <h2 className="text-3xl font-heading font-bold tracking-wider uppercase mb-8">
            KEY FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.highlights.map((highlight: string, index: number) => (
              <div key={index} className="border-l-2 border-[#00ffff] pl-6">
                <p className="text-base leading-relaxed text-white/80">
                  ▪ {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t-2 border-white pt-12">
          <p className="text-sm text-white/60 mb-6">
            Want to work on something similar?
          </p>
          <Link
            href="/#contact-section"
            className="btn-neon inline-block hover:shadow-[0_0_30px_#ff00ff]"
          >
            GET IN TOUCH
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
