"use client";

import { useEffect, useRef, useState } from "react";

const skills = {
  Backend: ["Python", "Django", "Django REST", "FastAPI", "Flask", "Celery"],
  Frontend: ["JavaScript", "Vue.js", "HTML/CSS", "Bootstrap", "Htmx", "Ajax"],
  Database: ["PostgreSQL", "MySQL", "Redis", "ORM"],
  DevOps: ["Docker", "Git", "CI/CD", "Render"],
  Architecture: ["REST APIs", "Microservices", "gRPC", "RabbitMQ"],
};

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 lg:px-12"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border max-w-[300px]" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a developer who is passionate about crafting accessible, pixel-perfect 
                digital experiences. My work lies at the intersection of{" "}
                <span className="text-foreground font-medium">design and engineering</span>, 
                creating solutions that not only look great but are meticulously built for 
                performance and usability.
              </p>

              <p>
                Currently, I specialize in utilizing{" "}
                <span className="text-primary font-medium">Django</span> to manage complex databases, 
                develop robust backend solutions, and create compelling, user-centric web 
                experiences. I have a proven track record in both ongoing management and the 
                design of bespoke management systems.
              </p>

              <p>
                In the past, I&apos;ve had the opportunity to develop software across a variety of 
                settings - from e-commerce platforms to management systems, building 
                applications that serve real users with real needs.
              </p>
            </div>

            {/* Code-style skills display */}
            <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-4 font-mono text-xs text-muted-foreground">tech_stack.json</span>
              </div>
              
              <pre className="font-mono text-sm overflow-x-auto">
                <code className="text-muted-foreground">
                  {`{`}
                  {"\n"}  <span className="text-primary">&quot;developer&quot;</span>: {`{`}
                  {"\n"}    <span className="text-primary">&quot;name&quot;</span>: <span className="text-green-400">&quot;Abdullah Bakir&quot;</span>,
                  {"\n"}    <span className="text-primary">&quot;title&quot;</span>: <span className="text-green-400">&quot;Python Developer&quot;</span>,
                  {"\n"}    <span className="text-primary">&quot;location&quot;</span>: <span className="text-green-400">&quot;Berlin, Germany&quot;</span>,
                  {"\n"}    <span className="text-primary">&quot;languages&quot;</span>: [<span className="text-green-400">&quot;Arabic&quot;</span>, <span className="text-green-400">&quot;English&quot;</span>, <span className="text-green-400">&quot;German&quot;</span>]
                  {"\n"}  {`}`}
                  {"\n"}{`}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Right - Skills */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="sticky top-32 space-y-8">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <div 
                  key={category}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <h3 className="font-mono text-xs text-primary mb-3 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 cursor-default ${
                          hoveredSkill === skill
                            ? "bg-primary/10 border-primary/50 text-primary"
                            : "bg-secondary/30 border-border text-secondary-foreground hover:border-primary/30"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
