'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white border-t-2 border-white">
      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold tracking-widest uppercase flex items-center gap-2">
              <FontAwesomeIcon icon={faCubes} className="text-[#ff00ff]" />
              KAFKHA
            </h3>
            <p className="text-xs font-body text-white/60 leading-relaxed">
              Digital brutalism meets interactive design. Building bold web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase">NAVIGATION</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#hero-section" className="hover:text-[#ff00ff] transition">
                  HOME
                </a>
              </li>
              <li>
                <a href="#projects-section" className="hover:text-[#ff00ff] transition">
                  WORK
                </a>
              </li>
              <li>
                <a href="#skills-section" className="hover:text-[#ff00ff] transition">
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-[#ff00ff] transition">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase">SOCIAL</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="https://github.com/KORQ-Kalbs" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff00ff] transition">
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff00ff] transition"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a href="mailto:Korqsz@proton.me" className="hover:text-[#ff00ff] transition">
                  EMAIL
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold tracking-widest uppercase">CONTACT</h4>
            <p className="text-xs text-white/60">Have a project in mind? Let's collaborate.</p>
            <a href="#contact-section" className="btn-neon inline-block text-xs">
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-white/50">© 2024 KAFKHA YASIN ALBIAN. ALL RIGHTS RESERVED.</p>
          <p className="text-xs font-body text-white/50">BUILT WITH NEXT.JS • TAILWIND • GSAP</p>

          {/* Scroll to Top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 border-2 border-white hover:bg-[#ff00ff] hover:border-[#ff00ff] transition-all"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
