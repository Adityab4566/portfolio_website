"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Mail, Linkedin, Github } from "lucide-react";
import profileImg from "../../public/profile.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!root.current) return;
    const tl = gsap.timeline();
    tl.from(root.current.querySelector("h1"), { y: 20, opacity: 0, duration: 0.8 })
      .from(root.current.querySelectorAll("p"), { y: 12, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.3")
      .from(root.current.querySelectorAll("a.btn"), { y: 10, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.2");
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Tagline banner */}
      <div className="dots-overlay py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="tagline">INNOVATE. BUILD. PROTECT.</h2>
        </div>
      </div>

      {/* Hero content */}
      <div ref={root} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 flex items-center justify-center" data-aos="fade-right">
          <div className="relative">
            <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-500/30 via-cyan-400/30 to-emerald-500/30 border border-[var(--border)] shadow-inner"></div>
            <Image src={profileImg} alt="Profile photo" width={256} height={256} className="profile-img absolute inset-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover ring-2 ring-[var(--border)]" priority />
          </div>
        </div>
        <div className="md:col-span-8" data-aos="fade-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Bommidapu Aditya</h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)]">Software Engineer</p>
          <p className="mt-1 text-sm text-[var(--muted)] flex items-center gap-2"><span className="text-blue-500">●</span> Visakhapatnam, India</p>
          <p className="mt-4 text-[var(--muted)] max-w-2xl">Building secure, scalable software and blockchain solutions with a strong focus on reliability and performance.</p>

          {/* Social icons + labels grid */}
          <div className="mt-8 social-grid">
            <div className="social-item">
              <a className="pill" href="mailto:adityabommidapu@gmail.com" aria-label="Mail">
                <Mail className="w-5 h-5" />
              </a>
              <span className="pill-text">Mail</span>
            </div>
            <div className="social-item">
              <a className="pill" href="https://www.linkedin.com/in/b-aditya-0b76322a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <span className="pill-text">LinkedIn</span>
            </div>
            <div className="social-item">
              <a className="pill" href="https://github.com/Adityab4566" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <span className="pill-text">Github</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
          </div>
        </div>
      </div>
    </section>
  );
}