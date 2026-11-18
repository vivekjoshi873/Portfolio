import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/resume";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 mb-20 sm:mb-28"
      aria-label="Technical skills and tools"
    >
      <SectionHeader
        number="04"
        eyebrow="Technical Stack"
        title="Languages, frameworks, and engineering tools"
        description="A specialized toolkit curated for frontend performance, modern web standards, and developer productivity."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-5 transition-colors duration-200 hover:border-zinc-700/80 hover:bg-[#101318]/70"
          >
            <div className="mb-3.5 flex items-center justify-between">
              <h3 className="label-mono font-medium text-zinc-300">
                {category.name}
              </h3>
              <span className="font-mono text-[11px] text-zinc-600">
                {category.skills.length} tools
              </span>
            </div>
            <ul
              className="flex flex-wrap gap-1.5"
              aria-label={`Skills for ${category.name}`}
            >
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="inline-flex items-center rounded-md border border-[#1f2937] bg-[#101318] px-2.5 py-1 font-mono text-[11px] leading-none text-[#9ca3af] transition-colors hover:border-zinc-600 hover:text-[#f5f5f5]">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
