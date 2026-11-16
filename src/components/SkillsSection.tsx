import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/data/resume";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Technical skills"
    >
      <SectionHeader title="Technical Skills" />
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition-colors duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/60"
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-300">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2" aria-label={`Skills for ${category.name}`}>
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-zinc-700/50 bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
