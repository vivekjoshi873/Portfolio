import SectionHeader from "./SectionHeader";
import { projects } from "@/data/resume";

export default function ProjectsSection() {
  const projectMetrics = [
    { primary: "5,000+", secondary: "Live tracked assets", meta: "Real-time polling" },
    { primary: "<300ms", secondary: "Groq inference latency", meta: "Llama 3.3 Engine" },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 mb-20 sm:mb-28"
      aria-label="Selected engineering projects"
    >
      <SectionHeader
        number="03"
        eyebrow="Selected Projects"
        title="Software built to solve real technical challenges"
        description="Focused on real-time data flow, low-latency UI rendering, and AI agent integration."
      />

      <div className="space-y-5">
        {projects.map((project, index) => {
          const num = String(index + 1).padStart(2, "0");
          const metric = projectMetrics[index] || {
            primary: "Production",
            secondary: "Full-stack build",
            meta: project.title,
          };

          return (
            <article
              key={project.title}
              className="scroll-mt-24 overflow-hidden rounded-xl border border-[#15181f] bg-[#0b0d10]/60 transition-all duration-300 hover:border-zinc-700/80 hover:bg-[#101318]/70"
            >
              <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_220px]">
                {/* Content */}
                <div className="min-w-0">
                  <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                    <span className="label-mono font-medium text-purple-400">
                      {num}
                    </span>
                    <h3 className="text-xl font-medium tracking-[-0.015em] text-[#f5f5f5] sm:text-2xl">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors group/link"
                      >
                        <span>{project.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 text-zinc-500 group-hover/link:text-purple-300"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </h3>
                    <span className="label-mono ml-auto">
                      {project.title === "CryptoTrack"
                        ? "Real-Time Dashboard"
                        : "AI Note Engine"}
                    </span>
                  </header>

                  <p className="mt-3 text-[15px] leading-relaxed text-[#9ca3af]">
                    {project.description}
                  </p>

                  <div className="mt-4">
                    <span className="label-mono text-zinc-500">
                      Key Engineering Accomplishments
                    </span>
                    <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-[#9ca3af] list-disc list-outside pl-4 marker:text-zinc-600">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <ul
                      className="flex flex-wrap gap-1.5"
                      aria-label="Technologies used"
                    >
                      {project.technologies.map((tech) => (
                        <li key={tech}>
                          <span className="inline-flex items-center rounded-md border border-[#1f2937] bg-[#101318] px-2 py-1 font-mono text-[11px] leading-none text-[#9ca3af] transition-colors hover:border-purple-500/40 hover:text-[#f5f5f5]">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13px] text-zinc-400 hover:text-[#f5f5f5] transition-colors font-mono"
                    >
                      <span>View on GitHub</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                {/* Right Metrics Callout */}
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-5 border-t border-[#15181f] pt-5 lg:flex-col lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                  <div className="min-w-0">
                    <div className="font-semibold tracking-[-0.03em] text-[#f5f5f5] tabular-nums text-xl">
                      {metric.primary}
                    </div>
                    <div className="mt-1 text-sm leading-snug text-[#9ca3af]">
                      {metric.secondary}
                    </div>
                    <div className="label-mono mt-2 normal-case tracking-normal text-zinc-500">
                      {metric.meta}
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
