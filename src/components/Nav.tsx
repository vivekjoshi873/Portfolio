"use client";

import Link from "next/link";
import { personalInfo, navItems } from "@/data/resume";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#15181f] bg-[#08090b]/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 transition-colors"
          aria-label={`${personalInfo.name} — Home`}
        >
          <span className="font-mono text-[13px] font-medium tracking-[0.18em] text-[#f5f5f5] group-hover:text-purple-300">
            VIVEK JOSHI
          </span>
          <span aria-hidden="true" className="h-3.5 w-px bg-[#1f2937]" />
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-purple-400">
            Front-End
          </span>
        </Link>

        {/* Section Jump Links */}
        <nav aria-label="Page sections" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-md px-2.5 py-1 text-[13px] text-zinc-400 transition-colors hover:text-[#f5f5f5]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right side CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Vivek_Joshi_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex text-[13px] text-zinc-400 hover:text-[#f5f5f5] transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </header>
  );
}
