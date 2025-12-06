export interface HeroContent {
    greeting: string;
    name: string;
    title: string;
    description: string;
    availability: {
      status: 'available' | 'busy' | 'unavailable';
      message: string;
    };
  }
  
  export interface Stat {
    id: string;
    value: string;
    label: string;
    icon: string;
  }
  
  export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
    username: string;
  }
  
  export interface CTAButton {
    id: string;
    label: string;
    variant: 'default' | 'outline' | 'ghost';
    icon: string;
    action: string;
  }
  
  export interface CodeSnippet {
    id: string;
    language: string;
    code: string;
    filename: string;
  }
  
  export interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
  }