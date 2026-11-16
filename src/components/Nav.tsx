"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/resume";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-12 w-max space-y-4">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex items-center py-1 transition-all"
              >
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-white"
                      : "w-8 bg-zinc-700 group-hover:w-16 group-hover:bg-zinc-300"
                  }`}
                />
                <span
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-zinc-200"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
