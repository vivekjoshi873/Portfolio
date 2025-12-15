"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

export function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="text-center sm:text-left">
          <p className="font-medium">Alex Chen</p>
          <p className="text-sm text-muted-foreground mt-1">
            Frontend Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </motion.div>
    </footer>
  );
}
