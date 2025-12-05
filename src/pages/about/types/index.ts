export interface TimelineEvent {
    id: string;
    date: string;
    title: string;
    description: string;
    type: 'education' | 'certification' | 'milestone' | 'achievement';
    icon: string;
  }
  
  export interface SkillProgress {
    id: string;
    name: string;
    category: string;
    level: number;
    startDate: string;
    currentLevel: string;
    description: string;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    alt: string;
    content: string;
    rating: number;
    date: string;
  }
  
  export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    experience: string;
    avatar: string;
    alt: string;
    bio: string;
    philosophy: string;
    approach: string;
  }
  
  export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    date: string;
  }