"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-lg font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-primary">{"<"}</span>
            AB
            <span className="text-primary">{"/>"}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-primary/60 mr-1">0{index + 1}.</span>
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-primary" />
                )}
              </a>
            ))}
            
            <a
              href="mailto:abdullah.bakir.204@gmail.com"
              className="ml-4 px-5 py-2.5 font-mono text-sm border border-primary/50 text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-xl transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-2xl text-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary mr-2">0{index + 1}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="mailto:abdullah.bakir.204@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 font-mono text-lg border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
