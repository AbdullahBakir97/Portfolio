"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function SideElements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Left side - Social links */}
      <div
        className={`fixed left-6 xl:left-12 bottom-0 hidden md:flex flex-col items-center gap-6 z-40 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="https://github.com/AbdullahBakir97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullah-bakir809065273/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:abdullah.bakir.204@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-border" />
      </div>

      {/* Right side - Email */}
      <div
        className={`fixed right-6 xl:right-12 bottom-0 hidden md:flex flex-col items-center gap-6 z-40 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="mailto:abdullah.bakir.204@gmail.com"
          className="font-mono text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 [writing-mode:vertical-rl]"
        >
          abdullah.bakir.204@gmail.com
        </a>
        <div className="w-px h-24 bg-border" />
      </div>
    </>
  );
}
