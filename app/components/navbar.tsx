'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faX, faCubes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'WORK', href: '#projects-section' },
    { label: 'ABOUT', href: '#about-section' },
    { label: 'CONTACT', href: '#contact-section' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
        {/* Logo - FontAwesome */}
        <Link href="/" className="text-2xl font-bold font-heading tracking-widest hover:opacity-70 transition flex items-center gap-2">
          <FontAwesomeIcon icon={faCubes} className="text-[#ff00ff]" />
          KAFKHA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold tracking-widest uppercase hover:text-[#ff00ff] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/KORQ-Kalbs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00ff] transition-colors"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ff00ff] transition-colors"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faX : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-2 border-white">
          <div className="px-12 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase hover:text-[#ff00ff] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/20 my-4" />
            <a
              href="https://github.com/KORQ-Kalbs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold hover:text-[#ff00ff] transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faGithub} /> GITHUB
            </a>
            <a
              href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold hover:text-[#ff00ff] transition-colors flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LINKEDIN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
