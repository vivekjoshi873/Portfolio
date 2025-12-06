export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    alt: string;
    technologies: Technology[];
    category: ProjectCategory;
    difficulty: DifficultyLevel;
    status: ProjectStatus;
    liveUrl?: string;
    githubUrl: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    metrics: ProjectMetrics;
    timeline: {
      start: string;
      end: string;
      duration: string;
    };
    role: string;
    teamSize: number;
    highlights: string[];
  }
  
  export interface Technology {
    name: string;
    category: TechCategory;
    icon: string;
    color: string;
  }
  
  export interface ProjectMetrics {
    linesOfCode?: number;
    commits?: number;
    stars?: number;
    forks?: number;
    contributors?: number;
    performance?: string;
  }
  
  export type ProjectCategory = 
    | 'Web Application' |'Mobile App' |'E-commerce' |'Dashboard' |'Landing Page' |'API Integration' |'Open Source';
  
  export type TechCategory = 
    | 'Frontend' |'Backend' |'Database' |'DevOps' |'Testing' |'Design';
  
  export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
  
  export type ProjectStatus = 'Completed' | 'In Progress' | 'Maintained';
  
  export interface FilterOption {
    label: string;
    value: string;
    count: number;
  }
  
  export interface ProjectFilters {
    category: string;
    technology: string;
    difficulty: string;
    status: string;
    search: string;
  }