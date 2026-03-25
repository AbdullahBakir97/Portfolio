"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  Layers,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Sparkles,
  Wrench,
  Code2,
  Cpu,
  Zap,
  Terminal,
  GitBranch,
  Package,
} from "lucide-react";

const coreTechnologies = ["Python", "Django", "JavaScript", "TypeScript", "HTML", "CSS"];

const skillTags = [
  "AJAX",
  "Automation",
  "AWS",
  "Bootstrap",
  "Bootstrap 5",
  "Caching",
  "Celery",
  "Charts",
  "Cascading Style Sheets (CSS)",
  "Django",
  "Django REST Framework",
  "Django-Queries",
  "Docker",
  "E-Commerce",
  "Git",
  "GitHub",
  "HTML",
  "HTML5",
  "Htmx",
  "JavaScript",
  "JWT",
  "MySQL",
  "Object-Oriented Programming (OOP)",
  "ORM",
  "PostgreSQL",
  "Postman API",
  "Python 3",
  "Redis",
  "REST APIs",
  "Responsive Web Design",
  "SQL",
  "Summernote",
  "Swagger API",
  "Taggit",
  "Translation",
  "Version Control",
  "Vue.js",
  "jQuery",
];

type FocusArea = {
  title: string;
  description: string;
  tools: string[];
  icon: LucideIcon;
  color: string;
};

const focusAreas: FocusArea[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting immersive, responsive user experiences with modern JavaScript frameworks and pixel-perfect design.",
    tools: ["Vue.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Nuxt.js"],
    icon: MonitorSmartphone,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend Mastery",
    description:
      "Building robust, scalable APIs and server-side architectures with Python's powerful ecosystem.",
    tools: ["Django REST", "Flask", "FastAPI", "JWT"],
    icon: Server,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Database Architecture",
    description:
      "Designing efficient data models and optimizing database performance for high-traffic applications.",
    tools: ["PostgreSQL", "MySQL", "Redis", "SQL"],
    icon: Database,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications with modern cloud platforms and containerization technologies.",
    tools: ["AWS", "Heroku", "Docker", "Render"],
    icon: Cloud,
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "API Development",
    description:
      "Creating secure, documented RESTful APIs that power modern web and mobile applications.",
    tools: ["JSON Web Tokens", "REST APIs", "Swagger API", "Postman API"],
    icon: ShieldCheck,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Development Tools",
    description:
      "Leveraging cutting-edge tools for version control, testing, and collaborative development workflows.",
    tools: ["Git", "GitHub", "Visual Studio Code", "PyCharm"],
    icon: Wrench,
    color: "from-teal-500/20 to-cyan-500/20",
  },
];

const knowledgeGroups = [
  {
    title: "Programming Paradigms",
    items: ["OOP", "ORM", "Version Control"],
    icon: Code2,
  },
  {
    title: "Operating Systems",
    items: ["Linux", "Ubuntu", "Windows"],
    icon: Cpu,
  },
  {
    title: "Async Processing",
    items: ["Celery", "Socket.io", "AJAX"],
    icon: Zap,
  },
  {
    title: "Frontend Frameworks",
    items: ["Vuetify", "jQuery", "Htmx"],
    icon: Layers,
  },
  {
    title: "Data Science",
    items: ["PyTorch", "NumPy", "Pandas", "Matplotlib", "Plotly", "Chart.js"],
    icon: Database,
  },
  {
    title: "Development Environments",
    items: ["Jupyter Notebook", "Colab", "Visual Studio"],
    icon: Terminal,
  },
  {
    title: "Web Services",
    items: ["GitHub Pages", "Deploy", "Caching"],
    icon: Cloud,
  },
  {
    title: "Additional Skills",
    items: [
      "Medium",
      "HackerRank",
      "LeetCode",
      "Markdown",
      "Canva",
      "UpWork",
      "Translation",
      "Charts",
    ],
    icon: Sparkles,
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 px-6 lg:px-12 overflow-hidden">
        {/* Clean professional background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse at center, 
                rgba(94, 234, 212, 0.15) 0%, 
                transparent 70%)`,
            }}
          />
          
          {/* Minimal floating particles */}
          {isClient && (
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    background: `rgba(94, 234, 212, 0.3)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `gentle-float ${8 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto z-10">
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Skills &amp; Tools</h2>
          <div className="flex-1 h-px bg-border max-w-[300px]" />
        </div>

        <div className="space-y-16">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 backdrop-blur-sm">
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative flex items-start gap-4">
                <span className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">Core Technologies</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The stack I reach for daily to build reliable, scalable products. These are the technologies I'm most proficient with and use regularly to deliver high-quality solutions. From frontend frameworks to backend systems, this toolkit represents my expertise in creating modern web applications that are both performant and maintainable.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {coreTechnologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-mono text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid gap-6 md:grid-cols-2 xl:grid-cols-3 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-60" />
                  <div className="relative flex items-start gap-4">
                    <span className="rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {area.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {area.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-border bg-background/60 px-3 py-1 text-xs font-mono text-secondary-foreground"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {knowledgeGroups.map((group, index) => {
              const Icon = group.icon;
              return (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-secondary/40 p-6 transition-all duration-300 hover:border-primary/40"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes gentle-float {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px); 
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
