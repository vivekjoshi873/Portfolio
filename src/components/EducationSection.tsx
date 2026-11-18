import SectionHeader from "./SectionHeader";
import { education } from "@/data/resume";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 mb-20 sm:mb-28"
      aria-label="Education history"
    >
      <SectionHeader
        number="05"
        eyebrow="Education & Foundations"
        title="Academic foundation"
        description="Formal computer applications training paired with continuous self-driven production engineering."
      />

      <div className="space-y-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-5 sm:p-6 transition-colors duration-200 hover:border-zinc-700/80 hover:bg-[#101318]/70"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
              <h3 className="font-medium text-[#f5f5f5] text-base sm:text-lg tracking-[-0.015em]">
                {item.degree}
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-[#9ca3af]">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
