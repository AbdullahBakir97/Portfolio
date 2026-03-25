"use client";

import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const roles = [
    "Python Developer",
    "Django Specialist", 
    "Backend Engineer",
    "Full-Stack Developer",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!mounted) return;
    
    const role = roles[currentRole];
    let i = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;
    
    const typeWriter = () => {
      if (!isDeleting) {
        if (i < role.length) {
          setTypedText(role.substring(0, i + 1));
          i++;
          timeoutId = setTimeout(typeWriter, 80);
        } else {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 2000);
        }
      } else {
        if (i > 0) {
          setTypedText(role.substring(0, i - 1));
          i--;
          timeoutId = setTimeout(typeWriter, 40);
        } else {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };
    
    typeWriter();
    
    return () => clearTimeout(timeoutId);
  }, [currentRole, mounted]);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    
    let animationId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 234, 212, ${p.opacity})`;
        ctx.fill();
        
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(94, 234, 212, ${0.08 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(94,234,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(94,234,212,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div
              className={`transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-block font-mono text-primary text-sm mb-6 tracking-wider">
                {"// Hello World"}
              </span>
            </div>
            
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block text-foreground">Abdullah</span>
              <span className="block text-primary">Bakir</span>
            </h1>
            
            <div
              className={`h-10 mb-6 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="font-mono text-xl sm:text-2xl text-muted-foreground">
                {typedText}
                <span className="animate-pulse text-primary ml-0.5">_</span>
              </span>
            </div>
            
            <p
              className={`text-muted-foreground text-lg leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Crafting scalable web solutions with{" "}
              <span className="text-foreground">Python</span> and{" "}
              <span className="text-foreground">Django</span>. 
              Building robust backends and user-centric experiences.
            </p>
            
            <div
              className={`flex items-center gap-3 text-muted-foreground mb-10 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm">Berlin, Germany</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm">Available for work</span>
            </div>
            
            <div
              className={`flex items-center gap-5 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://github.com/AbdullahBakir97"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-bakir809065273/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:abdullah.bakir.204@gmail.com"
                className="group p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a
                href="#contact"
                className="ml-4 px-6 py-3 font-mono text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
          
          {/* Right - Code block */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="ml-4 font-mono text-xs text-muted-foreground">developer.py</span>
                </div>
                
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-muted-foreground">
                    <span className="text-primary">class</span>{" "}
                    <span className="text-foreground">Developer</span>:
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-primary">def</span>{" "}
                    <span className="text-yellow-400">__init__</span>
                    <span className="text-muted-foreground">(self):</span>
                  </div>
                  <div className="pl-8 mt-1 text-muted-foreground">
                    self.name = <span className="text-green-400">&quot;Abdullah Bakir&quot;</span>
                  </div>
                  <div className="pl-8 text-muted-foreground">
                    self.role = <span className="text-green-400">&quot;Python Developer&quot;</span>
                  </div>
                  <div className="pl-8 text-muted-foreground">
                    self.stack = [
                  </div>
                  <div className="pl-12 text-green-400">
                    &quot;Python&quot;, &quot;Django&quot;, &quot;DRF&quot;,
                  </div>
                  <div className="pl-12 text-green-400">
                    &quot;Docker&quot;, &quot;PostgreSQL&quot;, &quot;Redis&quot;
                  </div>
                  <div className="pl-8 text-muted-foreground">]</div>
                  <div className="pl-8 mt-2 text-muted-foreground">
                    self.available = <span className="text-primary">True</span>
                  </div>
                  <div className="mt-4 pl-4">
                    <span className="text-primary">def</span>{" "}
                    <span className="text-yellow-400">build</span>
                    <span className="text-muted-foreground">(self, idea):</span>
                  </div>
                  <div className="pl-8 text-muted-foreground">
                    <span className="text-primary">return</span> awesome_product
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
