import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import SkillCard from "./components/SkillCard";
import CategoryFilter from "./components/CategoryFilter";
import GitHubActivity from "./components/GitHubActivity";
import CodeSnippetCard from "./components/CodeSnippetCard";
import LearningPathCard from "./components/LearningPathCard";
import TechInsightCard from "./components/TechInsightCard";
import SkillsOverview from "./components/SkillsOverview";
import type {
  SkillCategory,
  GitHubContribution,
  CodeSnippet,
  LearningPath,
  TechInsight,
} from "./types";

const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: "Layout",
      color: "#2563EB",
      description: "Modern UI/UX development with React ecosystem",
      skills: [
        {
          id: "react",
          name: "React 18",
          category: "frontend",
          proficiency: 90,
          yearsOfExperience: "4 months",
          description:
            "Building production-ready applications with functional components, hooks, and modern patterns",
          icon: "Component",
          color: "#2563EB",
          projects: 8,
          isCore: true,
        },
        {
          id: "typescript",
          name: "TypeScript",
          category: "frontend",
          proficiency: 85,
          yearsOfExperience: "4 months",
          description:
            "Type-safe development with interfaces, generics, and advanced TypeScript features",
          icon: "FileCode",
          color: "#3178C6",
          projects: 8,
          isCore: true,
        },
        {
          id: "nextjs",
          name: "Next.js 13",
          category: "frontend",
          proficiency: 80,
          yearsOfExperience: "3 months",
          description:
            "Server-side rendering, app router, and performance optimization with Next.js",
          icon: "Zap",
          color: "#000000",
          projects: 5,
          isCore: true,
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          category: "frontend",
          proficiency: 95,
          yearsOfExperience: "4 months",
          description:
            "Utility-first CSS framework for rapid UI development and responsive design",
          icon: "Palette",
          color: "#06B6D4",
          projects: 10,
          isCore: true,
        },
      ],
    },
    {
      id: "animation",
      name: "Animation & Motion",
      icon: "Sparkles",
      color: "#10B981",
      description: "Creating engaging user experiences with smooth animations",
      skills: [
        {
          id: "framer",
          name: "Framer Motion",
          category: "animation",
          proficiency: 85,
          yearsOfExperience: "3 months",
          description:
            "Advanced animations, gestures, and page transitions with Framer Motion",
          icon: "Sparkles",
          color: "#10B981",
          projects: 6,
          isCore: true,
        },
        {
          id: "css-animations",
          name: "CSS Animations",
          category: "animation",
          proficiency: 90,
          yearsOfExperience: "4 months",
          description:
            "Custom keyframe animations, transitions, and transform effects",
          icon: "Wand2",
          color: "#8B5CF6",
          projects: 8,
          isCore: false,
        },
      ],
    },
    {
      id: "state",
      name: "State Management",
      icon: "Database",
      color: "#F59E0B",
      description: "Managing application state efficiently",
      skills: [
        {
          id: "redux",
          name: "Redux Toolkit",
          category: "state",
          proficiency: 75,
          yearsOfExperience: "2 months",
          description:
            "Global state management with Redux Toolkit and RTK Query",
          icon: "Database",
          color: "#764ABC",
          projects: 3,
          isCore: false,
        },
        {
          id: "context",
          name: "React Context",
          category: "state",
          proficiency: 85,
          yearsOfExperience: "4 months",
          description:
            "Component state management with Context API and custom hooks",
          icon: "GitBranch",
          color: "#F59E0B",
          projects: 7,
          isCore: false,
        },
      ],
    },
    {
      id: "tools",
      name: "Development Tools",
      icon: "Wrench",
      color: "#EF4444",
      description: "Modern development workflow and tooling",
      skills: [
        {
          id: "git",
          name: "Git & GitHub",
          category: "tools",
          proficiency: 80,
          yearsOfExperience: "4 months",
          description:
            "Version control, branching strategies, and collaborative development",
          icon: "GitBranch",
          color: "#F05032",
          projects: 10,
          isCore: true,
        },
        {
          id: "vite",
          name: "Vite",
          category: "tools",
          proficiency: 85,
          yearsOfExperience: "4 months",
          description:
            "Fast build tool with hot module replacement and optimized bundling",
          icon: "Zap",
          color: "#646CFF",
          projects: 8,
          isCore: false,
        },
        {
          id: "npm",
          name: "NPM/Yarn",
          category: "tools",
          proficiency: 80,
          yearsOfExperience: "4 months",
          description:
            "Package management, dependency resolution, and script automation",
          icon: "Package",
          color: "#CB3837",
          projects: 10,
          isCore: false,
        },
      ],
    },
    {
      id: "performance",
      name: "Performance & SEO",
      icon: "Gauge",
      color: "#8B5CF6",
      description: "Optimizing applications for speed and search engines",
      skills: [
        {
          id: "optimization",
          name: "Performance Optimization",
          category: "performance",
          proficiency: 75,
          yearsOfExperience: "3 months",
          description:
            "Code splitting, lazy loading, and bundle size optimization",
          icon: "Gauge",
          color: "#8B5CF6",
          projects: 5,
          isCore: false,
        },
        {
          id: "seo",
          name: "SEO Best Practices",
          category: "performance",
          proficiency: 70,
          yearsOfExperience: "2 months",
          description:
            "Meta tags, structured data, and search engine optimization",
          icon: "Search",
          color: "#10B981",
          projects: 4,
          isCore: false,
        },
        {
          id: "accessibility",
          name: "Web Accessibility",
          category: "performance",
          proficiency: 80,
          yearsOfExperience: "3 months",
          description:
            "WCAG compliance, ARIA labels, and inclusive design patterns",
          icon: "Eye",
          color: "#F59E0B",
          projects: 6,
          isCore: false,
        },
      ],
    },
  ];

  const githubContributions: GitHubContribution[] = Array.from(
    { length: 365 },
    (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (364 - i));
      const count = Math.floor(Math.random() * 10);
      return {
        date: date.toISOString().split("T")[0],
        count,
        level: count === 0 ? 0 : Math.min(Math.floor(count / 2) + 1, 4),
      };
    }
  );

  const codeSnippets: CodeSnippet[] = [
    {
      id: "snippet1",
      title: "Custom React Hook for API Calls",
      language: "TypeScript",
      code: `import { useState, useEffect } from 'react'
;\n\ninterface UseApiResult<T> {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n}\n\nfunction useApi<T>(url: string): UseApiResult<T> {\n  const [data, setData] = useState<T | null>(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState<Error | null>(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, [url]);\n\n  return { data, loading, error };\n}`,
      description:
        "Reusable custom hook for handling API requests with TypeScript generics",
      category: "React Hooks",
    },
    {
      id: "snippet2",
      title: "Framer Motion Page Transition",
      language: "TypeScript",
      code: `import { motion } from 'framer-motion'
;\n\nconst pageVariants = {\n  initial: { opacity: 0, y: 20 },\n  animate: { \n    opacity: 1, \n    y: 0,\n    transition: { duration: 0.5 }\n  },\n  exit: { \n    opacity: 0, \n    y: -20,\n    transition: { duration: 0.3 }\n  }\n};\n\nconst PageTransition = ({ children }) => (\n  <motion.div\n    variants={pageVariants}\n    initial="initial"\n    animate="animate"\n    exit="exit"\n  >\n    {children}\n  </motion.div>\n);`,
      description:
        "Smooth page transitions using Framer Motion with custom variants",
      category: "Animation",
    },
    {
      id: "snippet3",
      title: "Responsive Tailwind Grid Layout",
      language: "TypeScript",
      code: `const ResponsiveGrid = ({ items }) => (\n  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">\n    {items.map((item) => (\n      <div \n        key={item.id}\n        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"\n      >\n        <h3 className="text-lg font-semibold mb-2">\n          {item.title}\n        </h3>\n        <p className="text-gray-600">\n          {item.description}\n        </p>\n      </div>\n    ))}\n  </div>\n);`,
      description:
        "Responsive grid layout with Tailwind CSS breakpoints and hover effects",
      category: "Styling",
    },
  ];

  const learningPaths: LearningPath[] = [
    {
      id: "path1",
      skill: "Advanced React Patterns",
      currentLevel: 7,
      targetLevel: 10,
      resources: [
        "React Advanced Patterns Course",
        "Compound Components Documentation",
        "Render Props & HOC Best Practices",
      ],
      timeline: "2 months",
      status: "in-progress",
    },
    {
      id: "path2",
      skill: "Testing with Jest & React Testing Library",
      currentLevel: 5,
      targetLevel: 10,
      resources: [
        "Testing JavaScript Course",
        "React Testing Library Documentation",
        "TDD Best Practices Guide",
      ],
      timeline: "3 months",
      status: "in-progress",
    },
    {
      id: "path3",
      skill: "GraphQL & Apollo Client",
      currentLevel: 3,
      targetLevel: 10,
      resources: [
        "GraphQL Fundamentals",
        "Apollo Client Documentation",
        "Building GraphQL APIs",
      ],
      timeline: "4 months",
      status: "planned",
    },
  ];

  const techInsights: TechInsight[] = [
    {
      id: "insight1",
      title: "React 18 Concurrent Features Transform User Experience",
      category: "React Ecosystem",
      date: "December 2024",
      summary:
        "React 18 introduces concurrent rendering capabilities that allow applications to remain responsive during heavy computations. Features like useTransition and useDeferredValue enable developers to prioritize user interactions while managing background updates efficiently.",
      tags: ["React18", "Performance", "Concurrent", "UX"],
    },
    {
      id: "insight2",
      title: "The Rise of Server Components in Next.js 13",
      category: "Next.js",
      date: "November 2024",
      summary:
        "Next.js 13 App Router introduces React Server Components, fundamentally changing how we build web applications. Server Components reduce bundle sizes, improve initial page load times, and enable seamless data fetching patterns without client-side overhead.",
      tags: ["NextJS", "ServerComponents", "Performance", "Architecture"],
    },
    {
      id: "insight3",
      title: "Tailwind CSS 4.0: The Future of Utility-First Styling",
      category: "CSS & Styling",
      date: "December 2024",
      summary:
        "Tailwind CSS continues to evolve with improved performance, better developer experience, and new utility classes. The framework maintains its position as the go-to solution for rapid UI development while addressing common pain points in large-scale applications.",
      tags: ["TailwindCSS", "Styling", "DX", "Performance"],
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillCategories.flatMap((cat) => cat.skills)
      : skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  const totalSkills = skillCategories.reduce(
    (sum, cat) => sum + cat.skills.length,
    0
  );
  const coreSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .filter((skill) => skill.isCore).length;
  const projectsCompleted = Math.max(
    ...skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => skill.projects)
    )
  );
  const githubContributionsCount = githubContributions.reduce(
    (sum, day) => sum + day.count,
    0
  );

  return (
    <>
      <Helmet>
        <title>
          Technical Skills & Expertise | Vivek Joshi - React Developer
        </title>
        <meta
          name="description"
          content="Explore Vivek Joshi's technical skills including React 18, TypeScript, Next.js, Framer Motion, and modern frontend development expertise with 4 months of professional experience."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div
              className={`max-w-7xl mx-auto transition-all duration-slow ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <Icon
                    name="Code"
                    size={16}
                    color="var(--color-primary)"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-medium text-primary">
                    Technical Mastery
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-headline">
                  Skills & Expertise
                </h1>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  A comprehensive showcase of technical proficiency, continuous
                  learning journey, and hands-on experience building modern web
                  applications with cutting-edge technologies.
                </p>
              </div>

              <SkillsOverview
                totalSkills={totalSkills}
                coreSkills={coreSkills}
                projectsCompleted={projectsCompleted}
                githubContributions={githubContributionsCount}
              />

              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground font-headline">
                    Technical Skills
                  </h2>
                </div>

                <CategoryFilter
                  categories={skillCategories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <GitHubActivity contributions={githubContributions} />
              </div>

              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon
                    name="Code"
                    size={24}
                    color="var(--color-primary)"
                    strokeWidth={2}
                  />
                  <h2 className="text-2xl font-bold text-foreground font-headline">
                    Code Examples
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {codeSnippets.map((snippet) => (
                    <CodeSnippetCard key={snippet.id} snippet={snippet} />
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon
                    name="TrendingUp"
                    size={24}
                    color="var(--color-accent)"
                    strokeWidth={2}
                  />
                  <h2 className="text-2xl font-bold text-foreground font-headline">
                    Learning Journey
                  </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {learningPaths.map((path) => (
                    <LearningPathCard key={path.id} path={path} />
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon
                    name="Lightbulb"
                    size={24}
                    color="var(--color-warning)"
                    strokeWidth={2}
                  />
                  <h2 className="text-2xl font-bold text-foreground font-headline">
                    Industry Insights
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techInsights.map((insight) => (
                    <TechInsightCard key={insight.id} insight={insight} />
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">
                  Ready to Collaborate?
                </h2>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  I'm passionate about building exceptional user experiences and
                  continuously expanding my technical expertise. Let's create
                  something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Mail"
                    iconPosition="left"
                    iconSize={18}
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Github"
                    iconPosition="left"
                    iconSize={18}
                    onClick={() =>
                      window.open("https://github.com/vivek-kumar", "_blank")
                    }
                  >
                    View GitHub
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-surface border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-sm text-text-secondary">
                © {new Date().getFullYear()} Vivek Joshi. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/vivek-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast"
                >
                  <Icon name="Github" size={20} strokeWidth={2} />
                </a>
                <a
                  href="https://linkedin.com/in/vivek-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast"
                >
                  <Icon name="Linkedin" size={20} strokeWidth={2} />
                </a>
                <a
                  href="mailto:vivek@example.com"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast"
                >
                  <Icon name="Mail" size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SkillsPage;
