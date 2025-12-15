"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = "", href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();

    const handleResize = () => {
      if (ref.current) {
        rectRef.current = ref.current.getBoundingClientRect();
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!rectRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = rectRef.current;
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  }, []);

  const reset = useCallback(() => setPosition({ x: 0, y: 0 }), []);

  const Component = href ? motion.a : motion.button;

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset}>
      <Component
        href={href}
        onClick={onClick}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.1 }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
}
