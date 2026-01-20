"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { RightRail } from "@/components/RightRail";
// Theme toggle removed for single-theme design

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-quart", once: true, offset: 80 });
  }, []);

  return (
    <div className="bg-neutral-950 text-gray-100">
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="gradient-bg w-full h-full" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">Bommidapu Aditya</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#experience" className="hover:text-blue-500">Experience</a>
            <a href="#achievements" className="hover:text-blue-500">Achievements</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <RightRail />
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}