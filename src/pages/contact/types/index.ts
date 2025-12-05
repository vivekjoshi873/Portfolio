export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    projectType: string;
    budget: string;
    timeline: string;
    attachments?: File[];
  }
  
  export interface SocialLink {
    id: string;
    platform: string;
    icon: string;
    url: string;
    username: string;
    followers?: string;
    color: string;
  }
  
  export interface ContactMethod {
    id: string;
    icon: string;
    title: string;
    value: string;
    description: string;
    action: string;
    color: string;
  }
  
  export interface AvailabilityStatus {
    isAvailable: boolean;
    status: string;
    nextAvailable: string;
    responseTime: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
    projectType?: string;
    budget?: string;
    timeline?: string;
  }
  
  export interface CalendarSlot {
    id: string;
    date: string;
    time: string;
    duration: string;
    available: boolean;
  }