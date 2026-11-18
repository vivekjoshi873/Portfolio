import SectionHeader from "./SectionHeader";
import { aboutParagraphs } from "@/data/resume";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 mb-20 sm:mb-28"
      aria-label="About Vivek Joshi"
    >
      <SectionHeader
        number="01"
        eyebrow="Background & Philosophy"
        title="Engineering with obsessive frontend craft"
        description="Scalable UI architectures, robust state patterns, and micro-interactions that feel instantaneous."
      />

      <div className="rounded-xl border border-[#15181f] bg-[#0b0d10]/70 p-6 sm:p-8 space-y-5 text-[#9ca3af] text-[15px] sm:text-base leading-relaxed">
        {aboutParagraphs.map((paragraph, index) => {
          const parts = paragraph.split(/(<highlight>.*?<\/highlight>)/g);

          return (
            <p key={index}>
              {parts.map((part, i) => {
                if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
                  const content = part.slice(11, -12);
                  return (
                    <span
                      key={i}
                      className="font-medium text-[#f5f5f5]"
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
