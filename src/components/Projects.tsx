import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard with real-time analytics, inventory management, and order tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    demo: "#",
    github: "#",
    priority: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with drag-and-drop, real-time updates, and team features.",
    tech: ["React", "Redux", "Node.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Application",
    description: "Beautiful weather app with location detection, 7-day forecasts, and animated weather icons.",
    tech: ["Next.js", "OpenWeather API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Generator",
    description: "A tool that helps developers create stunning portfolios with customizable themes and layouts.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    demo: "#",
    github: "#",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={project.priority}
          loading={project.priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
          {project.tech.map((tech) => (
            <span
              key={tech}
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
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Selected work
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of projects that showcase my skills in frontend development, from concept to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}