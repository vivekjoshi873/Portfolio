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
      className="scroll-mt-24 mb-20"
      aria-label="Contact information"
    >
      <SectionHeader
        number="06"
        eyebrow="Direct Line"
        title="Get in touch"
        description="Currently open to high-impact frontend engineering roles, innovative web platform builds, and ambitious collaborative ventures."
      />

      <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-6 sm:p-8 transition-colors duration-200 hover:border-zinc-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <span className="label-mono text-zinc-500">Direct Inquiries</span>
            <p className="mt-2 text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#f5f5f5]">
              {personalInfo.email}
            </p>
            <p className="mt-1 text-sm text-[#9ca3af]">
              Response within 24 hours. Based in {personalInfo.location}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#08090b] transition-colors hover:bg-white"
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
              <span>Email Vivek</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1f2937] bg-[#101318] px-3.5 py-2.5 text-xs sm:text-sm font-mono text-[#9ca3af] transition-colors hover:border-zinc-600 hover:text-[#f5f5f5]"
            >
              {copied ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="h-3.5 w-3.5"
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
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-[#15181f] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span className="label-mono block mb-1">Phone / WhatsApp</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="text-[#9ca3af] hover:text-[#f5f5f5] transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>
          <div>
            <span className="label-mono block mb-1">Profiles</span>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#9ca3af] hover:text-[#f5f5f5] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#9ca3af] hover:text-[#f5f5f5] transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
