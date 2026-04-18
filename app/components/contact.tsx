"use client";

import { useEffect, useState } from "react";
import { animateContactCTA } from "@/app/lib/gsap-animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Korqsz@proton.me?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact-section"
      className="relative min-h-screen w-full bg-white text-black py-20 grid-bg-dark flex flex-col items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-12 w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            LET'S CREATE
          </h2>
          <p className="text-lg font-heading tracking-wide uppercase text-black/60">
            SOMETHING TOGETHER
          </p>
        </div>

        {/* Email CTA */}
        <div className="text-center mb-16">
          <a
            href="mailto:Korqsz@proton.me"
            className="btn-neon inline-block mb-8 hover:shadow-[0_0_30px_#ff00ff]"
          >
            SEND EMAIL
          </a>
          <p className="text-sm font-body text-black/60">KORQSZ@PROTON.ME</p>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black my-16" />

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-black/50 block mb-2">
              NAME
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-black/50 block mb-2">
              EMAIL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-black/50 block mb-2">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full btn-neon py-4 hover:shadow-[0_0_30px_#ff00ff]"
          >
            SEND MESSAGE
          </button>
        </form>

        {/* CTA Button */}
        <div className="text-center">
          <div className="contact-cta inline-block">
            <a
              href="https://github.com/KORQ-Kalbs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block mr-4 hover:shadow-[0_0_30px_#ff00ff]"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/kafkha-yasin-albian-676b42369/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block hover:shadow-[0_0_30px_#ff00ff]"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <p className="text-center text-xs font-body text-black/50 mt-12">
          Based in Bogor Barat, Indonesia • Always open to new opportunities
        </p>
      </div>
    </section>
  );
}
