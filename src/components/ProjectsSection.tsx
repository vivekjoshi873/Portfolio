import SectionHeader from "./SectionHeader";
import { projects } from "@/data/resume";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <SectionHeader title="Projects" />
      <div>
        <ul className="group/list space-y-8">
          {projects.map((project, index) => (
            <li
              key={index}
              className="group/item transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
            >
              <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 md:p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/70">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-white text-lg">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-zinc-300 transition-colors group/link"
                    >
                      <span>{project.title}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 text-zinc-400 group-hover/link:text-white"
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

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-zinc-500 hover:text-zinc-200 transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5 text-xs text-zinc-400 list-disc list-outside pl-4 marker:text-zinc-600">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2.5 py-1 text-xs font-medium text-zinc-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
