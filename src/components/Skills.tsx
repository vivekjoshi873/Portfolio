"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Styling",
    techs: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Backend & Tools",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-accent/20 via-accent/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modern tools and frameworks I use to craft exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-12"
        >
          {techStack.map((group, idx) => (
            <motion.div key={group.category} variants={fadeInUp}>
              <h3 className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {group.techs.map((tech, techIdx) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      variants={fadeInUp}
                      className="group relative"
                    >
                      <div className="relative p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 transition-all duration-300 hover:bg-background hover:border-border hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2 hover:scale-105">
                        <div className="flex flex-col items-center gap-3">
                          <div className="relative">
                            <Icon
                              className="w-12 h-12 transition-all duration-300"
                              style={{
                                color: tech.color,
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                              }}
                            />
                            <div
                              className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                              style={{ backgroundColor: tech.color }}
                            />
                          </div>
                          <p className="font-medium text-sm text-center">
                            {tech.name}
                          </p>
                        </div>
                        
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${tech.color}08, transparent 70%)`,
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}