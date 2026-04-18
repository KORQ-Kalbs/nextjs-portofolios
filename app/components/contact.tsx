"use client";

import { useEffect, useState } from "react";
import { animateContactCTA } from "@/app/lib/gsap-animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-section"
      className="relative w-full bg-white text-black pt-20 pb-40 grid-bg-dark flex flex-col items-center justify-center"
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-12 w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            LET'S CREATE
          </h2>
          <p className="text-lg font-heading tracking-wide uppercase text-black/60">
            SOMETHING TOGETHER
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border-2 border-green-500 text-green-700 rounded">
            <p className="font-bold">✓ Message sent successfully!</p>
            <p className="text-sm">
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border-2 border-red-500 text-red-700 rounded">
            <p className="font-bold">✗ Error</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

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
              disabled={loading}
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={loading}
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition disabled:opacity-50 disabled:cursor-not-allowed"
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
              disabled={loading}
              rows={6}
              className="w-full px-4 py-3 border-2 border-black bg-white text-black font-body focus:outline-none focus:border-[#ff00ff] transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-neon py-4 hover:shadow-[0_0_30px_#ff00ff] disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>

        {/* CTA Button */}
        <div className="text-center">
          <div className="contact-cta flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/KORQ-Kalbs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block hover:shadow-[0_0_30px_#ff00ff]"
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
