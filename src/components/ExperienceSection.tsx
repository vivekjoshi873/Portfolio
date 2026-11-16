import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <SectionHeader title="Experience" />
      <div>
        <ol className="group/list space-y-8">
          {experiences.map((exp, index) => (
            <li
              key={index}
              className="group/item transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-xl lg:-inset-x-4 lg:p-4 lg:hover:bg-zinc-900/50 lg:hover:border lg:hover:border-zinc-800/80">
                {/* Timeline Period */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-mono font-medium tracking-wide text-zinc-500 sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-zinc-200">
                    <span className="inline-flex items-baseline font-semibold leading-tight text-white text-base">
                      {exp.title}
                      <span className="text-zinc-500 mx-2">·</span>
                      <span className="text-zinc-300 font-normal">{exp.company}</span>
                    </span>
                  </h3>

                  {/* Bullet points */}
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-400 list-disc list-outside pl-4 marker:text-zinc-600">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-xs font-medium text-zinc-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
