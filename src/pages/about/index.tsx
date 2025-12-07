import { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import PersonalProfile from './components/PersonalProfile';
import LearningTimeline from './components/LearningTimeline';
import SkillProgressChart from './components/SkillProgressChart';
import TestimonialCard from './components/TestimonialCard';
import AchievementGrid from './components/AchievementGrid';
import KeyHighlights from './components/KeyHighlights';
import Button from '../../components/ui/Button';
import type { PersonalInfo, TimelineEvent, SkillProgress, Testimonial, Achievement } from './types';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo: PersonalInfo = {
    name: "Vivek Joshi",
    title: "Frontend Developer | React Specialist",
    location: "Delhi, India",
    experience: "4 Months Professional Experience",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_169150dae-1763301927448.png",
    alt: "Professional headshot of Vivek Joshi, young male developer in casual business attire with confident smile",
    bio: "I'm a passionate frontend developer with 4 months of real-world experience building production-ready React applications. My journey into web development began with a fascination for creating beautiful, intuitive user interfaces that solve real problems. I believe that great code is not just about functionality—it's about crafting experiences that users love to interact with.",
    philosophy: "As a Digital Craftsman, I approach every project with meticulous attention to detail and a commitment to excellence. I don't just write code; I sculpt user experiences that are both technically sound and visually appealing. My philosophy centers on continuous learning, clean code practices, and the belief that every line of code should serve a purpose in creating delightful user experiences.",
    approach: "My development approach combines technical precision with creative problem-solving. I start by deeply understanding user needs, then translate complex requirements into elegant, maintainable solutions. I'm committed to writing clean, well-documented code that follows industry best practices, and I'm always eager to learn new technologies and methodologies that can improve my craft."
  };

  const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    date: "Jan 2024",
    title: "Started Professional Journey",
    description: "Joined my first company as a Frontend Developer, working with React and TypeScript to build enterprise-level applications. This marked the beginning of my professional career in web development.",
    type: "milestone",
    icon: "Rocket"
  },
  {
    id: "2",
    date: "Feb 2024",
    title: "React Advanced Patterns Certification",
    description: "Completed comprehensive certification in advanced React patterns including custom hooks, context API, and performance optimization techniques. Applied these learnings immediately in production projects.",
    type: "certification",
    icon: "Award"
  },
  {
    id: "3",
    date: "Mar 2024",
    title: "First Production Deployment",
    description: "Successfully deployed my first major feature to production—a complex dashboard with real-time data visualization. Learned valuable lessons about code review, testing, and deployment processes.",
    type: "achievement",
    icon: "Zap"
  },
  {
    id: "4",
    date: "Apr 2024",
    title: "TypeScript Mastery Course",
    description: "Completed intensive TypeScript course focusing on advanced types, generics, and type-safe patterns. Immediately implemented strict typing across all new components.",
    type: "education",
    icon: "BookOpen"
  },
  {
    id: "5",
    date: "May 2024",
    title: "Performance Optimization Achievement",
    description: "Led initiative to optimize application performance, reducing initial load time by 40% through code splitting, lazy loading, and efficient state management.",
    type: "achievement",
    icon: "TrendingUp"
  }];


  const skillProgress: SkillProgress[] = [
  {
    id: "1",
    name: "React & React Hooks",
    category: "Frontend",
    level: 85,
    startDate: "Sep 2023",
    currentLevel: "Advanced",
    description: "Building complex applications with functional components, custom hooks, and advanced patterns"
  },
  {
    id: "2",
    name: "TypeScript",
    category: "Frontend",
    level: 75,
    startDate: "Nov 2023",
    currentLevel: "Intermediate-Advanced",
    description: "Writing type-safe code with interfaces, generics, and advanced type manipulation"
  },
  {
    id: "3",
    name: "Tailwind CSS",
    category: "Frontend",
    level: 80,
    startDate: "Oct 2023",
    currentLevel: "Advanced",
    description: "Creating responsive, modern UIs with utility-first CSS framework"
  },
  {
    id: "4",
    name: "Git & Version Control",
    category: "Tools",
    level: 70,
    startDate: "Sep 2023",
    currentLevel: "Intermediate",
    description: "Managing code with branching strategies, pull requests, and collaborative workflows"
  },
  {
    id: "5",
    name: "Problem Solving",
    category: "Soft Skills",
    level: 78,
    startDate: "Sep 2023",
    currentLevel: "Advanced",
    description: "Breaking down complex problems into manageable solutions with clean architecture"
  }];


  const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17ee5466e-1763297246977.png",
    alt: "Professional photo of Priya Sharma, woman with long dark hair in business casual attire",
    content: "Vivek has shown remarkable growth in just 4 months. His attention to detail and eagerness to learn new technologies makes him a valuable team member. He consistently delivers clean, well-documented code.",
    rating: 5,
    date: "April 2024"
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Tech Lead",
    company: "Digital Innovations",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee48d395-1763300694911.png",
    alt: "Professional headshot of Rahul Verma, man with short dark hair in formal business attire",
    content: "Working with Vivek has been a pleasure. He brings fresh perspectives to problem-solving and isn't afraid to ask questions. His React skills have improved tremendously, and he's becoming proficient in TypeScript.",
    rating: 5,
    date: "May 2024"
  },
  {
    id: "3",
    name: "Anjali Patel",
    role: "UI/UX Designer",
    company: "Creative Studios",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
    alt: "Professional photo of Anjali Patel, woman with shoulder-length hair smiling at camera",
    content: "Vivek has an excellent eye for design implementation. He translates our designs into pixel-perfect interfaces and always suggests improvements that enhance user experience. Great collaboration!",
    rating: 5,
    date: "April 2024"
  },
  {
    id: "4",
    name: "Amit Singh",
    role: "Project Manager",
    company: "Agile Solutions",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac6006ef-1763293220310.png",
    alt: "Professional headshot of Amit Singh, man with glasses in business formal attire",
    content: "Vivek is reliable and communicative. He meets deadlines consistently and proactively communicates any challenges. His growth mindset and willingness to take on new challenges is impressive.",
    rating: 5,
    date: "May 2024"
  }];


  const achievements: Achievement[] = [
  {
    id: "1",
    title: "Production Deployments",
    description: "Successfully deployed 5+ major features to production with zero critical bugs",
    icon: "Rocket",
    date: "Jan - May 2024"
  },
  {
    id: "2",
    title: "Code Reviews",
    description: "Participated in 50+ code reviews, learning best practices and improving code quality",
    icon: "GitPullRequest",
    date: "Jan - May 2024"
  },
  {
    id: "3",
    title: "Performance Optimization",
    description: "Reduced application load time by 40% through optimization techniques",
    icon: "Zap",
    date: "April 2024"
  },
  {
    id: "4",
    title: "Component Library",
    description: "Built reusable component library used across multiple projects",
    icon: "Package",
    date: "March 2024"
  },
  {
    id: "5",
    title: "Mentorship",
    description: "Helped onboard 2 new junior developers with documentation and guidance",
    icon: "Users",
    date: "April 2024"
  },
  {
    id: "6",
    title: "Bug Resolution",
    description: "Resolved 100+ bugs and issues, improving application stability",
    icon: "Bug",
    date: "Jan - May 2024"
  }];


  const highlights = [
  {
    id: "1",
    icon: "Code",
    title: "Lines of Code",
    value: "50K+",
    description: "Production-ready code written and deployed"
  },
  {
    id: "2",
    icon: "GitCommit",
    title: "Commits",
    value: "500+",
    description: "Consistent contributions to codebase"
  },
  {
    id: "3",
    icon: "FolderGit2",
    title: "Projects",
    value: "8+",
    description: "Completed projects and features"
  },
  {
    id: "4",
    icon: "Award",
    title: "Certifications",
    value: "3",
    description: "Professional development courses completed"
  }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About Me
              </h1>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                A passionate frontend developer on a journey to craft exceptional user experiences through clean code and innovative solutions
              </p>
            </div>

            <div className="space-y-8">
              <PersonalProfile info={personalInfo} />
              
              <KeyHighlights highlights={highlights} />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <LearningTimeline events={timelineEvents} />
                <SkillProgressChart skills={skillProgress} />
              </div>
              
              <AchievementGrid achievements={achievements} />
              
              <TestimonialCard testimonials={testimonials} />
              
              <div className="bg-gradient-to-r from-primary to-accent rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Contribute to Your Team
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                  I'm actively seeking opportunities to grow as a frontend developer and contribute to innovative projects. Let's build something amazing together!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white text-primary hover:bg-white/90">

                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => window.open('/assets/cv.pdf', '_blank')}
                    className="border-white text-white hover:bg-white/10">

                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);

};

export default About;