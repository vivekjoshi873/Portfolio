import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-[#15181f] py-10 text-[12px] text-zinc-500">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 sm:px-8 sm:flex-row sm:items-center sm:justify-between font-mono">
        <p className="text-zinc-500">
          Front-End Systems · React · Next.js · TypeScript · {personalInfo.location}
        </p>
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[#f5f5f5] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-[#f5f5f5] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#f5f5f5] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
