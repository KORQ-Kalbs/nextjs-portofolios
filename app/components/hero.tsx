'use client';

import PixelArt from './pixel-art';
import { useEffect } from 'react';
import { animateHeroText, animateHeroDescription, animateScrollChevron, animateHeroVisual } from '@/app/lib/gsap-animations';

export default function Hero() {
  useEffect(() => {
    animateHeroText();
    animateHeroDescription();
    animateScrollChevron();
    animateHeroVisual();
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full bg-black text-white pt-32 pb-20 grid-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="hero-heading text-5xl lg:text-7xl font-heading font-bold tracking-tighter">
              KAFKHA YASIN ALBIAN
            </h1>

            {/* Subtitle */}
            <p className="text-2xl lg:text-3xl font-heading font-bold uppercase tracking-widest text-white/80">
              WEB DEVELOPER & DESIGNER
            </p>

            {/* Description */}
            <p className="hero-description max-w-md text-base leading-relaxed text-white/70 border-l-2 border-white pl-6">
              I build bold digital experiences with modern technologies. Passionate about creating
              interactive interfaces with obsessive attention to detail.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="#projects-section"
                className="btn-neon inline-block hover:shadow-[0_0_30px_#ff00ff]"
              >
                VIEW WORK →
              </a>
            </div>
          </div>

          {/* Right Column - Pixel Art */}
          <div className="hero-visual hidden lg:block">
            <PixelArt />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50">SCROLL</p>
          <div className="scroll-chevron text-white/50">↓</div>
        </div>
      </div>
    </section>
  );
}
