import Spotlight from "@/components/Spotlight";
import Nav from "@/components/Nav";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-dvh bg-canvas text-ink">
      {/* Background grid texture & ambient lighting */}
      <Spotlight />

      {/* Sticky top navbar */}
      <Nav />

      {/* Main Content Container */}
      <main id="main" className="relative mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Hero Section */}
        <header className="mb-20 sm:mb-28">
          <h1 className="text-balance-tight max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.03em] text-[#f5f5f5]">
            Crafting scalable full-stack architectures, fast web systems, and delightful digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9ca3af] sm:text-base">
            Full-Stack Developer at{" "}
            <strong className="text-[#f5f5f5] font-medium">Big Feathers</strong>, previously scaled production platforms at{" "}
            <strong className="text-[#f5f5f5] font-medium">Ravan.AI</strong>. Specializing in production React, Next.js, Node.js, and TypeScript applications with a deep focus on performance, robust APIs, and AI integrations.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-4 transition-colors hover:border-[#1f2937]">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f5f5] font-mono">
                3+
              </div>
              <div className="label-mono mt-1 text-zinc-500">
                Production Platforms
              </div>
            </div>

            <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-4 transition-colors hover:border-[#1f2937]">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f5f5] font-mono">
                60×
              </div>
              <div className="label-mono mt-1 text-zinc-500">
                Platform Scaling
              </div>
            </div>

            <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-4 transition-colors hover:border-[#1f2937]">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f5f5] font-mono">
                95+
              </div>
              <div className="label-mono mt-1 text-zinc-500">
                Lighthouse Score
              </div>
            </div>

            <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/60 p-4 transition-colors hover:border-[#1f2937]">
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#f5f5f5] font-mono">
                0 → 1
              </div>
              <div className="label-mono mt-1 text-zinc-500">
                Full-Stack Architecture
              </div>
            </div>
          </div>
        </header>

        {/* Structured Sections */}
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
