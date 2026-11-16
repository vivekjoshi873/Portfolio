"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { personalInfo } from "@/data/resume";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Contact information"
    >
      <SectionHeader title="Contact" />
      <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8 transition-colors duration-200 hover:border-zinc-700">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          Get in touch
        </h3>
        <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed">
          I&apos;m currently open to new front-end opportunities, engineering roles, and collaborative projects. Whether you have a question, an opportunity, or just want to connect, feel free to reach out.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send an Email
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/90 px-4 py-2.5 text-xs md:text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 border-t border-zinc-800/80 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
          <div>
            <span className="text-zinc-500 block mb-1">Direct Email:</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
          <div>
            <span className="text-zinc-500 block mb-1">Phone / WhatsApp:</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-zinc-300 hover:text-white transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
