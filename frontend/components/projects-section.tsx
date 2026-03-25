"use client";

import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Amazon Clone E-Commerce",
    description:
      "A comprehensive e-commerce platform built with Django featuring products, brands, reviews, cart, orders, coupons, payment integration with Stripe, and user management with signup verification and caching.",
    tech: ["Python", "Django", "DRF", "Docker", "Redis", "Celery", "Stripe"],
    github: "https://github.com/AbdullahBakir97/Django-Store",
    image: "store",
  },
  {
    title: "Barber Salon Management",
    description:
      "Complete salon management system with appointment scheduling, barber management, gallery, products, reviews, pricing, and comprehensive administrative tools with reporting and analytics.",
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis"],
    github: "https://github.com/AbdullahBakir97/Barber-Salon",
    image: "salon",
  },
  {
    title: "Jobs Portal Platform",
    description:
      "Feature-rich job portal enabling job listings, company profiles, category management, and user applications with a clean REST API interface and modern frontend interactions.",
    tech: ["Python", "Django", "JavaScript", "Ajax", "Htmx", "PostgreSQL"],
    github: "https://github.com/AbdullahBakir97/Jobs-Portal",
    image: "jobs",
  },
];

const otherProjects = [
  {
    title: "Book Store",
    description: "Collaborative bookstore project with books, authors, reviews, and comprehensive REST API documentation.",
    tech: ["Python", "Django", "DRF", "Swagger"],
    github: "https://github.com/AbdullahBakir97/BookStore",
  },
  {
    title: "Django Blog",
    description: "Full-featured blog application with post creation, editing, deletion, and REST API endpoints.",
    tech: ["Python", "Django", "DRF"],
    github: "https://github.com/AbdullahBakir97/Django-Blog-app",
  },
  {
    title: "Python Automation",
    description: "Collection of automation tools including Git changes extraction and file organization scripts.",
    tech: ["Python", "Git", "Automation"],
    github: "https://github.com/AbdullahBakir97/Automtion",
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 px-6 lg:px-12"
    >
      {/* Enhanced animated background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      
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
      
      {/* Animated hexagonal pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(94,234,212,0.05)_25%,rgba(94,234,212,0.05)_26%,transparent_27%,transparent_74%,rgba(94,234,212,0.05)_75%,rgba(94,234,212,0.05)_76%,transparent_77%,transparent)] bg-[size:80px_80px] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(150deg,transparent_24%,rgba(94,234,212,0.03)_25%,rgba(94,234,212,0.03)_26%,transparent_27%,transparent_74%,rgba(94,234,212,0.03)_75%,rgba(94,234,212,0.03)_76%,transparent_77%,transparent)] bg-[size:80px_80px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border max-w-[300px]" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`grid lg:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "lg:text-right" : ""
                }`}
              >
                {/* Project Image/Preview */}
                <div
                  className={`lg:col-span-7 lg:row-start-1 ${
                    index % 2 === 1 ? "lg:col-start-1" : "lg:col-start-6"
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-video rounded-xl overflow-hidden group/image"
                  >
                    <div className="absolute inset-0 bg-primary/10 group-hover/image:bg-transparent transition-colors duration-300 z-10" />
                    <div className="w-full h-full bg-card border border-border flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover/image:scale-110 transition-transform duration-300">
                          <Folder className="w-10 h-10 text-primary" />
                        </div>
                        <span className="font-mono text-sm text-muted-foreground">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                
                {/* Project Info */}
                <div
                  className={`lg:col-span-6 lg:row-start-1 ${
                    index % 2 === 1 ? "lg:col-start-7" : "lg:col-start-1"
                  }`}
                >
                  <span className="font-mono text-sm text-primary">Featured Project</span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-6 group-hover:text-primary transition-colors">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {project.title}
                    </a>
                  </h3>
                  
                  <div className="relative z-10 p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border shadow-xl">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 mt-6 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}>
                    {project.tech.map((t) => (
                      <span key={t} className="hover:text-primary transition-colors">{t}</span>
                    ))}
                  </div>
                  
                  <div className={`flex gap-4 mt-6 ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-lg"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-lg"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="font-mono text-xl text-center text-foreground mb-12">
            Other Noteworthy Projects
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
