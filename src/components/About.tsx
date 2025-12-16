"use client";

import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "react-intersection-observer";

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">
            About
          </p>
        </AnimatedSection>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-light tracking-tight"
          >
            Building digital experiences with precision and purpose
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            I'm a frontend developer passionate about creating intuitive,
            performant web applications. My journey in development started with
            a curiosity for how interfaces come to life, and has evolved into a
            deep appreciation for clean code and thoughtful user experiences.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            With expertise in React and Next.js, I specialize in building modern
            web applications that are both visually compelling and technically
            robust. I leverage Tailwind CSS for rapid, consistent styling and
            integrate RESTful APIs to create dynamic, data-driven interfaces.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4 flex gap-8 text-sm">
            <div>
              <p className="text-3xl font-light">3</p>
              <p className="text-muted-foreground mt-1">Months Experience</p>
            </div>
            <div>
              <p className="text-3xl font-light">20</p>
              <p className="text-muted-foreground mt-1">Projects Completed</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
