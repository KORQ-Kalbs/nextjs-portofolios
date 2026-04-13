import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// COLOR INVERSION SYSTEM
// ============================================
export function initColorInversion() {
  // Black → White transition at Projects section
  gsap.to("body", {
    "--bg-primary": "#ffffff",
    "--text-primary": "#000000",
    "--border-color": "#000000",
    scrollTrigger: {
      trigger: "#projects-section",
      start: "top 80%",
      end: "top 20%",
      scrub: 1,
      onEnter: () => document.body.classList.add("inverted"),
      onLeaveBack: () => document.body.classList.remove("inverted"),
    },
  });
}

// ============================================
// HERO ANIMATIONS
// ============================================
export function animateHeroText() {
  const heroHeading = document.querySelector(".hero-heading");
  if (!heroHeading) return;

  // Split text into characters
  const text = heroHeading.textContent || "";
  heroHeading.innerHTML = text
    .split("")
    .map(
      (char) => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`,
    )
    .join("");

  const chars = heroHeading.querySelectorAll(".char");
  gsap.from(chars, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.4,
    ease: "back.out",
  });
}

export function animateHeroDescription() {
  gsap.from(".hero-description", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });
}

export function animateScrollChevron() {
  gsap.to(".scroll-chevron", {
    opacity: 0.3,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "sine.inOut",
  });
}

export function animateHeroVisual() {
  gsap.from(".hero-visual", {
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    delay: 0.3,
    ease: "back.out",
  });
}

// ============================================
// PROJECT CARD ANIMATIONS
// ============================================
export function animateProjectCards() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Hover effect
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

// ============================================
// SKILLS ANIMATIONS
// ============================================
export function animateSkillItems() {
  const items = document.querySelectorAll(".skill-item");

  items.forEach((item, index) => {
    gsap.from(item, {
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      duration: 0.6,
      delay: index * 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#skills-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });
}

export function animateFloatingBadges() {
  const badges = document.querySelectorAll(".floating-badge");

  badges.forEach((badge) => {
    const duration = 2 + Math.random() * 0.5;
    const rotation = gsap.utils.random(-3, 3);

    gsap.to(badge, {
      y: -10,
      opacity: 0.8,
      rotation,
      repeat: -1,
      yoyo: true,
      duration,
      ease: "sine.inOut",
    });
  });
}

// ============================================
// ABOUT ANIMATIONS
// ============================================
export function animateTimelineDots() {
  const dots = document.querySelectorAll(".timeline-dot");

  dots.forEach((dot, index) => {
    gsap.from(dot, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  });
}

export function animateTimelineText() {
  const textBlocks = document.querySelectorAll(".timeline-text");

  textBlocks.forEach((block) => {
    const chars = block.querySelectorAll(".char");
    gsap.from(chars, {
      opacity: 0,
      y: 10,
      stagger: 0.02,
      duration: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}

// ============================================
// CONTACT ANIMATIONS
// ============================================
export function animateContactCTA() {
  const cta = document.querySelector(".contact-cta");
  if (!cta) return;

  cta.addEventListener("mousemove", (event: Event) => {
    const e = event as MouseEvent;
    const rect = cta.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(cta, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      overwrite: "auto",
    });
  });

  cta.addEventListener("mouseleave", () => {
    gsap.to(cta, {
      x: 0,
      y: 0,
      duration: 0.3,
    });
  });
}

// ============================================
// INIT ALL ANIMATIONS
// ============================================
export function initAllAnimations() {
  // Wait for DOM to be ready
  if (typeof window === "undefined") return;

  // Run animations on next tick
  requestAnimationFrame(() => {
    initColorInversion();
    animateHeroText();
    animateHeroDescription();
    animateScrollChevron();
    animateHeroVisual();
    animateProjectCards();
    animateSkillItems();
    animateFloatingBadges();
    animateTimelineDots();
    animateTimelineText();
    animateContactCTA();
  });
}
