import SectionHeader from "./SectionHeader";
import { aboutParagraphs } from "@/data/resume";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-32 lg:scroll-mt-24"
      aria-label="About me"
    >
      <SectionHeader title="About" />
      <div className="space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed">
        {aboutParagraphs.map((paragraph, index) => {
          // Replace <highlight> tags with styled spans
          const parts = paragraph.split(/(<highlight>.*?<\/highlight>)/g);

          return (
            <p key={index}>
              {parts.map((part, i) => {
                if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
                  const content = part.slice(11, -12);
                  return (
                    <span
                      key={i}
                      className="font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      {content}
                    </span>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
      </div>
    </section>
  );
}
