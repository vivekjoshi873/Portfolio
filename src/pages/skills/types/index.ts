export interface Skill {
    id: string;
    name: string;
    category: string;
    proficiency: number;
    yearsOfExperience: string;
    description: string;
    icon: string;
    color: string;
    projects: number;
    isCore: boolean;
  }
  
  export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
    skills: Skill[];
  }
  
  export interface GitHubContribution {
    date: string;
    count: number;
    level: number;
  }
  
  export interface CodeSnippet {
    id: string;
    title: string;
    language: string;
    code: string;
    description: string;
    category: string;
  }
  
  export interface LearningPath {
    id: string;
    skill: string;
    currentLevel: number;
    targetLevel: number;
    resources: string[];
    timeline: string;
    status: 'in-progress' | 'completed' | 'planned';
  }
  
  export interface TechInsight {
    id: string;
    title: string;
    category: string;
    date: string;
    summary: string;
    tags: string[];
  }