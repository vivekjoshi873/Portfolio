"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { fadeInUp, buttonHover, buttonTap } from "@/lib/animations";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useEffect, useState } from "react";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set(lastX - centerX);
        mouseY.set(lastY - centerY);
        rafId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <motion.div
        style={{ x: useTransform(smoothMouseX, [0, 100], [0, 20]), y: useTransform(smoothMouseY, [0, 100], [0, 20]) }}
        className="absolute top-1/4 left-[10%] w-72 h-72 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: useTransform(smoothMouseX, [0, 100], [0, -30]), y: useTransform(smoothMouseY, [0, 100], [0, -30]) }}
        className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-linear-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm border border-border/50 mb-6"
          >
            
            <Sparkles className="w-3 h-3" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
              Frontend Developer
            </span>
            
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-light tracking-tight mb-6 bg-linear-to-br from-foreground via-foreground to-foreground/40 bg-clip-text text-transparent"
            style={{ lineHeight: 1.1 }}
          >
            Vivek Joshi
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed font-light"
          >
            Crafting{" "}
            <span className="text-foreground font-medium">
              elegant interfaces</span>{" "}
            with cutting-edge technology and thoughtful design
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-foreground text-background rounded-full font-medium transition-all hover:shadow-2xl hover:shadow-foreground/20"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-border/50 rounded-full font-medium transition-all hover:bg-accent/50 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}