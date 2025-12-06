import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import AnimatedBackground from './components/AnimatedBackground';
import HeroContent from './components/HeroContent';
import CodeTerminal from './components/CodeTerminal';
import StatsSection from './components/StatsSection';
import SocialLinks from './components/SocialLinks';
import type {
  HeroContent as HeroContentType,
  Stat,
  SocialLink,
  CTAButton,
  CodeSnippet,
} from './types';

const HeroLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroContent: HeroContentType = {
    greeting: "Hi, I'm",
    name: 'Vivek Kumar',
    title: 'Frontend Developer & React Specialist',
    description:
      'Crafting exceptional user experiences with React, TypeScript, and modern web technologies. Passionate about clean code, performance optimization, and creating interfaces that users love.',
    availability: {
      status: 'available',
      message: 'Available for Opportunities',
    },
  };

  const ctaButtons: CTAButton[] = [
    {
      id: 'cta-1',
      label: 'View Projects',
      variant: 'default',
      icon: 'FolderGit2',
      action: '/projects',
    },
    {
      id: 'cta-2',
      label: 'Get in Touch',
      variant: 'outline',
      icon: 'Mail',
      action: '/contact',
    },
  ];

  const stats: Stat[] = [
    {
      id: 'stat-1',
      value: '4+',
      label: 'Months Experience',
      icon: 'Calendar',
    },
    {
      id: 'stat-2',
      value: '15+',
      label: 'Projects Completed',
      icon: 'FolderGit2',
    },
    {
      id: 'stat-3',
      value: '10+',
      label: 'Technologies',
      icon: 'Code2',
    },
    {
      id: 'stat-4',
      value: '100%',
      label: 'Client Satisfaction',
      icon: 'Star',
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 'social-1',
      platform: 'GitHub',
      url: 'https://github.com/vivekkumar',
      icon: 'Github',
      username: 'vivekkumar',
    },
    {
      id: 'social-2',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/vivekkumar',
      icon: 'Linkedin',
      username: 'vivekkumar',
    },
    {
      id: 'social-3',
      platform: 'Twitter',
      url: 'https://twitter.com/vivekkumar',
      icon: 'Twitter',
      username: '@vivekkumar',
    },
    {
      id: 'social-4',
      platform: 'Email',
      url: 'mailto:vivek@example.com',
      icon: 'Mail',
      username: 'vivek@example.com',
    },
  ];

  const codeSnippets: CodeSnippet[] = [
    {
      id: 'snippet-1',
      language: 'typescript',
      filename: 'App.tsx',
      code: `import React from 'react'
;\nimport { BrowserRouter } from 'react-router-dom'
;\n\nconst App = () => {\n  return (\n    <BrowserRouter>\n      <Routes />\n    </BrowserRouter>\n  );\n};\n\nexport default App;`,
    },
    {
      id: 'snippet-2',
      language: 'typescript',
      filename: 'useCustomHook.ts',
      code: `import { useState, useEffect } from 'react'
import Routes from '../../Routes';

;\n\nconst useCustomHook = () => {\n  const [data, setData] = useState(null);\n  \n  useEffect(() => {\n    fetchData().then(setData);\n  }, []);\n  \n  return { data };\n};`,
    },
    {
      id: 'snippet-3',
      language: 'typescript',
      filename: 'Component.tsx',
      code: `interface Props {\n  title: string;\n  onClick: () => void;\n}\n\nconst Component = ({ title, onClick }: Props) => {\n  return (\n    <button onClick={onClick}>\n      {title}\n    </button>\n  );\n};`,
    },
  ];

  const handleCTAClick = (action: string) => {
    navigate(action);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <AnimatedBackground />

      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center">
            <HeroContent
              content={heroContent}
              ctaButtons={ctaButtons}
              onCTAClick={handleCTAClick}
            />
          </section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
                Code in Action
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Watch as I bring ideas to life through clean, efficient code
              </p>
            </div>
            <CodeTerminal snippets={codeSnippets} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
                By the Numbers
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Measurable impact through dedicated work and continuous learning
              </p>
            </div>
            <StatsSection stats={stats} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-headline">
                Let's Connect
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
                Find me on these platforms or reach out directly
              </p>
            </div>
            <SocialLinks links={socialLinks} />
          </motion.section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Vivek Kumar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="/about"
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-base"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-base"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-base"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLanding;