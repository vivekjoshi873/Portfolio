"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-medium text-lg tracking-tight"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          AC
        </motion.a>

        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </motion.button>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            Hire Me
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}