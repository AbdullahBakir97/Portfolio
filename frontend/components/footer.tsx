"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        {/* Social links - visible on mobile */}
        <div className="flex items-center justify-center gap-6 mb-8 md:hidden">
          <a
            href="https://github.com/AbdullahBakir97"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-bakir809065273/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:abdullah.bakir.204@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        
        {/* Credit */}
        <div className="text-center">
          <a
            href="https://github.com/AbdullahBakir97"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Designed & Built by Abdullah Bakir
          </a>
          <p className="font-mono text-xs text-muted-foreground/60 mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
