import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/resume";

export default function ExperienceSection() {
  const stats = [
    { primary: "Production", secondary: "Reusable UI pattern library", meta: "Big Feathers" },
    { primary: "2", secondary: "Platforms scaled from 0 → 1", meta: "Ravan.AI" },
    { primary: "SSR", secondary: "Frontend-for-Backend architecture", meta: "The Entrepreneurship Network" },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 mb-20 sm:mb-28"
      aria-label="Work experience"
    >
      <SectionHeader
        number="02"
        eyebrow="Production Experience"
        title="Platforms and systems built in production"
        description="Owned and scaled frontend platforms across early-stage startups and production client applications."
      />

      <div className="space-y-5">
        {experiences.map((exp, index) => {
          const num = String(index + 1).padStart(2, "0");
          const stat = stats[index] || {
            primary: "Production",
            secondary: "Engineering ownership",
            meta: exp.company,
          };

          return (
            <article
              key={exp.company}
              className="scroll-mt-24 overflow-hidden rounded-xl border border-[#15181f] bg-[#0b0d10]/60 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#101318]/70"
            >
              <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_220px]">
                {/* Main Content Column */}
                <div className="min-w-0">
                  <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                    <span className="label-mono font-medium text-purple-400">
                      {num}
                    </span>
                    <h3 className="text-xl font-medium tracking-[-0.015em] text-[#f5f5f5] sm:text-2xl">
                      {exp.company}
                    </h3>
                    <span className="label-mono">{exp.title}</span>
                    <span className="label-mono ml-auto text-zinc-500 font-mono">
                      {exp.period}
                    </span>
                  </header>

                  <div className="mt-5">
                    <span className="label-mono text-zinc-500">
                      Engineering Scope &amp; Ownership
                    </span>
                    <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-[#9ca3af] list-disc list-outside pl-4 marker:text-zinc-600">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li key={bIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-6">
                    <ul
                      className="flex flex-wrap gap-1.5"
                      aria-label="Technologies used"
                    >
                      {exp.technologies.map((tech) => (
                        <li key={tech}>
                          <span className="inline-flex items-center rounded-md border border-[#1f2937] bg-[#101318] px-2 py-1 font-mono text-[11px] leading-none text-[#9ca3af] transition-colors hover:border-purple-500/40 hover:text-[#f5f5f5]">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Stat Callout (Om Jaiswal signature layout) */}
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-5 border-t border-[#15181f] pt-5 lg:flex-col lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                  <div className="min-w-0">
                    <div className="font-semibold tracking-[-0.03em] text-[#f5f5f5] tabular-nums text-xl">
                      {stat.primary}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-[#9ca3af]">
                      {stat.secondary}
                    </div>
                    <div className="label-mono mt-2 normal-case tracking-normal text-zinc-500">
                      {stat.meta}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
