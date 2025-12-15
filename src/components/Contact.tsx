"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com/vivekjoshi873" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vivek-joshi-78b227274/" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/Vivek2005Joshi" },
];

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="contact" className="py-32 px-6 bg-accent/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium"
          >
            Contact
          </motion.p>
          
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-light tracking-tight mb-4"
          >
            Let's work together
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-lg mb-12"
          >
            Have a project in mind or just want to chat? Feel free to reach out.
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-8">
            <a
              href="mailto:vivekjo.dev@gmail.com"
              className="inline-flex items-center gap-3 text-2xl font-medium hover:text-foreground/70 transition-colors"
            >
              <Mail className="w-6 h-6" />
              vivekjo.dev@gmail.com
            </a>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="flex justify-center gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-background border border-border rounded-full hover:border-foreground/30 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}