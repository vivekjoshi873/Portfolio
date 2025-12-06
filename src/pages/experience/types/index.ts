export interface Experience {
    id: string;
    company: string;
    companyLogo: string;
    companyLogoAlt: string;
    position: string;
    duration: string;
    startDate: string;
    endDate: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    projects: ExperienceProject[];
    skills: SkillDevelopment[];
    references: Reference[];
  }
  
  export interface ExperienceProject {
    id: string;
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    technologies: string[];
    highlights: string[];
    link?: string;
  }
  
  export interface SkillDevelopment {
    skill: string;
    level: number;
    progress: number;
    description: string;
  }
  
  export interface Reference {
    id: string;
    name: string;
    position: string;
    company: string;
    avatar: string;
    avatarAlt: string;
    testimonial: string;
    rating: number;
    date: string;
  }
  
  export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    image: string;
    imageAlt: string;
    skills: string[];
    link?: string;
  }
  
  export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'work' | 'education' | 'certification' | 'achievement';
    icon: string;
  }