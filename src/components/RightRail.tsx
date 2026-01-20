"use client";
import { Mail, Linkedin, Github } from "lucide-react";

export function RightRail() {
  return (
    <>
      {/* Desktop vertical rail */}
      <aside className="right-rail hidden lg:flex z-50">
        <a className="rail-item" href="mailto:adityabommidapu@gmail.com" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
        <a
          className="rail-item"
          href="https://www.linkedin.com/in/b-aditya-0b76322a2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          className="rail-item"
          href="https://github.com/Adityab4566"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </aside>

      {/* Mobile bottom bar */}
      <nav className="fixed lg:hidden bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        <a className="rail-item" href="mailto:adityabommidapu@gmail.com" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
        <a
          className="rail-item"
          href="https://www.linkedin.com/in/b-aditya-0b76322a2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          className="rail-item"
          href="https://github.com/Adityab4566"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
      </nav>
    </>
  );
}