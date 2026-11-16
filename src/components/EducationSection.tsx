import SectionHeader from "./SectionHeader";
import { education } from "@/data/resume";

export default function EducationSection() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Education history"
    >
      <SectionHeader title="Education" />
      <div className="space-y-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold text-white text-base">
                {item.degree}
              </h3>
              <span className="text-xs font-mono font-medium text-zinc-500">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-400">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
