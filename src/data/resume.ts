export const personalInfo = {
  name: "Vivek Joshi",
  title: "Front-End Developer",
  tagline:
    "I build pixel-perfect, accessible, and performant web experiences with modern JavaScript frameworks.",
  email: "vivekjo.dev@gmail.com",
  phone: "+91-7536083814",
  linkedin: "https://www.linkedin.com/in/vivek-joshi-78b227274/",
  github: "https://github.com/vivekjoshi873",
};

export const aboutParagraphs = [
  `I'm a passionate front-end developer who thrives on crafting clean, responsive, and user-friendly web applications. With hands-on experience across multiple production platforms, I specialize in building scalable UI architectures using <highlight>React.js</highlight>, <highlight>Next.js</highlight>, and <highlight>TypeScript</highlight>.`,
  `Currently, I'm working as a Front-End Developer at <highlight>Big Feathers</highlight>, where I develop and maintain production-ready applications with a focus on responsive design, reusable components, and consistent user experience.`,
  `My toolkit extends beyond traditional frontend — I'm deeply interested in AI/ML integration, having worked with LLM APIs, RAG pipelines, and AI agents. I believe in writing code that's not just functional, but <highlight>maintainable</highlight>, <highlight>performant</highlight>, and <highlight>delightful</highlight> to use.`,
  `When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and continuously pushing the boundaries of what's possible on the web.`,
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go"],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },
  {
    name: "AI / Machine Learning",
    skills: [
      "LLM APIs (OpenAI, Gemini)",
      "RAG Pipelines",
      "AI Agents",
      "Prompt Engineering",
      "Vector Databases",
    ],
  },
  {
    name: "State & Data Fetching",
    skills: ["TanStack Query", "Redux", "Zustand"],
  },
  {
    name: "Developer Tools",
    skills: [
      "Linux",
      "Docker",
      "PostgreSQL",
      "Git",
      "GitHub",
      "REST APIs",
      "CI/CD",
      "Postman",
      "Vercel",
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      "Server-Side Rendering (SSR)",
      "Frontend Performance Optimization",
      "Responsive Design",
    ],
  },
];

export const experiences = [
  {
    title: "Front-End Developer",
    company: "Big Feathers",
    period: "Jun 2026 – Present",
    bullets: [
      "Developed and maintained production-ready frontend applications with a focus on responsive design, reusable components, and consistent user experience.",
      "Built reusable React components and UI patterns, improving maintainability and reducing duplication across application features.",
      "Integrated frontend applications with REST APIs, handling asynchronous data, loading states, validation, and error scenarios.",
      "Optimized frontend performance and responsiveness across devices by improving component structure, rendering behavior, and asset usage.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Ravan.AI",
    period: "Dec 2025 – May 2026",
    bullets: [
      "Owned and scaled 2 production frontend platforms, architecting core UI systems from scratch with a focus on performance, responsiveness, and scalability.",
      "Built and maintained reusable component systems across multiple client projects, improving development speed and consistency.",
      "Integrated and managed API interactions using TanStack Query and Axios, optimizing data fetching, caching, and state synchronization.",
      "Improved application reliability by implementing structured error handling, loading states, and user-friendly fallback UI patterns.",
    ],
    technologies: [
      "React.js",
      "TanStack Query",
      "Axios",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "The Entrepreneurship Network",
    period: "Jul 2025 – Dec 2025",
    bullets: [
      "Led the end-to-end rebranding of the company's website and admin dashboard using TypeScript, Vite, and Next.js, improving UX and visual consistency.",
      "Enhanced application stability by implementing Cypress testing and optimizing state management using Zustand.",
      "Built a scalable Frontend-for-Backend (FFB) architecture using Next.js 14 with SSR, improving performance and search visibility.",
      "Developed a fully responsive, mobile-first UI using Tailwind CSS, ensuring seamless experience across devices and screen sizes.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Vite",
      "Zustand",
      "Cypress",
      "Tailwind CSS",
    ],
  },
];

export const projects = [
  {
    title: "CryptoTrack",
    description:
      "A real-time cryptocurrency dashboard tracking 5,000+ cryptocurrencies with live data, interactive charts, and blazing-fast performance.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Framer Motion",
      "CI/CD",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/vivekjoshi873",
    highlights: [
      "Implemented polling and caching strategies for real-time data on 5,000+ cryptocurrencies",
      "Built interactive data visualizations using Recharts with smooth Framer Motion animations",
      "Achieved 95+ Lighthouse scores through performance optimization, testing, and CI/CD practices",
    ],
  },
  {
    title: "ThinkPad AI",
    description:
      "An AI-powered note-taking application with instant summarization, markdown editing with live preview, and intelligent search capabilities.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "React",
      "Groq Llama 3.3",
      "Markdown",
      "localStorage",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/vivekjoshi873",
    highlights: [
      "Integrated Groq Llama 3.3 API for instant AI-powered summarization of markdown-based notes",
      "Built a full-featured markdown editor with live preview and localStorage persistence",
      "Implemented real-time search and tag-based filtering using optimized React hooks",
    ],
  },
];

export const education = [
  {
    institution: "Indira Gandhi National Open University",
    degree: "Bachelor of Computer Applications",
    period: "2023 – 2026",
  },
  {
    institution: "D.T.E.A. Sr. Sec. School",
    degree: "Higher Secondary Schooling (CBSE)",
    period: "2019 – Mar 2023",
  },
];

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
