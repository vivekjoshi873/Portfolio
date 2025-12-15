"use client";

import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "AI Notes",
    description: "A modern AI notes app with real-time analytics, inventory management, and order tracking.",
    tech: ["Next.js","React", "TypeScript", "Tailwind", "Zustand", "React-markdown", "Shadcn"],
    image: "/ainotes.png",
    demo: "https://ainotes.vercel.app/",
    github: "https://github.com/vivekjoshi873/Ai-notes",
    priority: true,
  },
  {
    title: "Crypto Tracker",
    description: "A crypto tracker with real-time updates and price tracking.",
    tech: ["Next.js", "React", "Tailwind", "Zustand","Shadcn","Recharts","TanStack Query","Framer Motion","Jest","Playwright","CoinGecko API"],
    image: "/crypto.png",
    demo: "https://crypto-tracker.vercel.app/",
    github: "https://github.com/vivekjoshi873/Crypto",
    priority: true,
  },
  {
    title: "E-Commerce Dashboard",
    description: "A modern e-commerce dashboard with real-time analytics, inventory management, and order tracking.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand", "Three.js", "Shadcn", "FakeStoreAPI"],
    image: "/ecommerce.png",
    demo: "https://luxe-ecommerce-store.vercel.app/",
    github: "https://github.com/vivekjoshi873/Luxe-ecommerce-store",
  },
  {
    title: "SaaS Dashboard",
    description: "A modern SaaS dashboard with real-time analytics, inventory management, and order tracking.",
    tech: ["Reactjs", "Tailwind", "Zustand","React-Router","Context API"],
    image: "/saas.png",
    demo: "https://saas-application-tau.vercel.app/",
    github: "https://github.com/vivekjoshi873/SaaS-Application",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={project.priority}
          loading={project.priority ? "eager" : "lazy"}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-medium mb-3 flex items-center justify-between">
          {project.title}
          <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </h3>
        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, techIndex) => (
            <span
              key={`${tech}-${techIndex}`}
              className="px-3 py-1.5 text-xs bg-accent/50 backdrop-blur-sm rounded-full text-foreground border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demo}
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors"
          >
            <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            Live Demo
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-foreground/70 transition-colors"
          >
            <Github className="w-4 h-4 transition-transform duration-200 group-hover:rotate-6" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Selected work
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of projects that showcase my skills in frontend development, from concept to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}