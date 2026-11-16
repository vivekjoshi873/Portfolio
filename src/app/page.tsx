import Link from "next/link";
import Spotlight from "@/components/Spotlight";
import Nav from "@/components/Nav";
import SocialLinks from "@/components/SocialLinks";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/resume";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white">
      {/* Subtle ambient lighting */}
      <Spotlight />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          {/* Left Column (Sticky on desktop) */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for opportunities
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <Link href="/" className="hover:text-zinc-200 transition-colors">
                  {personalInfo.name}
                </Link>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-300 sm:text-xl">
                {personalInfo.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400 md:text-base capitalize">
                {personalInfo.tagline}
              </p>

              {/* Scrollspy Navigation */}
              <Nav />
            </div>

            {/* Resume button & Social Links */}
            <div className="mt-10 lg:mt-0">
              <SocialLinks />
            </div>
          </header>

          {/* Right Column (Scrollable content) */}
          <main className="pt-24 lg:w-7/12 lg:py-24">
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
