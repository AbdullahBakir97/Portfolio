"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const email = "abdullah.bakir.204@gmail.com";

  useEffect(() => {
    setIsClient(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 lg:px-12"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 animate-pulse" />
      
      {/* Floating particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,234,212,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.01)_1px,transparent_1px)] bg-[size:70px_70px]" />
      
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm">04. What&apos;s Next?</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-8">
            Get In Touch
          </h2>
        </div>

        <p
          className={`text-muted-foreground text-lg leading-relaxed mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I&apos;m currently looking for new opportunities and my inbox is always 
          open. Whether you have a question, a project idea, or just want to say 
          hi, I&apos;ll do my best to get back to you!
        </p>

        {/* Email button */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-primary border border-primary/50 rounded-xl hover:bg-primary/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Copy email */}
        <div
          className={`mt-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="font-mono">{email}</span>
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
