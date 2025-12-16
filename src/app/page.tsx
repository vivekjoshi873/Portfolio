import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { GridPattern } from "@/components/GridPattern";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <GridPattern />
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
