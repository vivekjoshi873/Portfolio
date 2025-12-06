import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ExperienceCard from './components/ExperienceCard';
import ProjectHighlight from './components/ProjectHighlight';
import SkillProgress from './components/SkillProgress';
import ReferenceCard from './components/ReferenceCard';
import CertificateCard from './components/CertificateCard';
import TimelineView from './components/TimelineView';
import StatsCard from './components/StatsCard';
import type {
  Experience,
  Certificate,
  TimelineEvent } from
'./types';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'timeline' | 'certifications'>('experience');

  const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechVision Solutions',
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_11349ac97-1764635716722.png",
    companyLogoAlt: 'TechVision Solutions company logo with modern blue and white design',
    position: 'Frontend Developer',
    duration: '4 months',
    startDate: 'Aug 2024',
    endDate: 'Present',
    location: 'Delhi, India',
    type: 'Full-time',
    description: `Joined TechVision Solutions as a Frontend Developer, contributing to the development of modern web applications using React and TypeScript. Focused on creating responsive, user-friendly interfaces while learning industry best practices and collaborating with cross-functional teams.`,
    responsibilities: [
    'Developed and maintained responsive web applications using React 18 and TypeScript',
    'Implemented reusable component libraries following atomic design principles',
    'Collaborated with UX designers to translate Figma designs into pixel-perfect interfaces',
    'Optimized application performance through code splitting and lazy loading',
    'Participated in code reviews and contributed to team knowledge sharing sessions',
    'Integrated RESTful APIs and managed application state using Redux Toolkit',
    'Wrote unit tests using Jest and React Testing Library to ensure code quality',
    'Worked in Agile environment with daily standups and sprint planning meetings'],

    achievements: [
    'Successfully delivered 3 major features ahead of schedule with zero critical bugs',
    'Improved page load time by 40% through implementation of performance optimization techniques',
    'Created comprehensive component documentation that became team standard',
    'Received "Quick Learner" recognition for rapidly adapting to new technologies',
    'Mentored 2 junior developers in React best practices and TypeScript usage',
    'Contributed to open-source company UI library used across multiple projects'],

    technologies: [
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'Redux Toolkit',
    'Vite',
    'Git',
    'REST APIs',
    'Jest',
    'Figma',
    'Jira'],

    projects: [
    {
      id: 'p1',
      name: 'Customer Portal Dashboard',
      description: 'Built a comprehensive customer portal with real-time data visualization, user management, and analytics features. Implemented responsive design supporting desktop, tablet, and mobile devices.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd038983-1764655463888.png",
      imageAlt: 'Modern dashboard interface showing colorful data visualization charts and graphs on computer screen',
      technologies: ['React', 'TypeScript', 'Recharts', 'Redux'],
      highlights: [
      'Implemented real-time data updates using WebSocket connections',
      'Created 15+ reusable chart components with customization options',
      'Achieved 95+ Lighthouse performance score',
      'Reduced initial bundle size by 35% through code optimization'],

      link: 'https://example.com/customer-portal'
    },
    {
      id: 'p2',
      name: 'E-commerce Product Catalog',
      description: 'Developed a high-performance product catalog with advanced filtering, search functionality, and shopping cart integration. Focused on optimal user experience and conversion optimization.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
      imageAlt: 'E-commerce website showing grid of product cards with images and prices on laptop screen',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
      highlights: [
      'Implemented infinite scroll with virtualization for 10,000+ products',
      'Built advanced filtering system with 20+ filter options',
      'Integrated payment gateway with secure checkout flow',
      'Achieved 98% mobile responsiveness score'],

      link: 'https://example.com/product-catalog'
    },
    {
      id: 'p3',
      name: 'Internal Admin Panel',
      description: 'Created a comprehensive admin panel for internal team management, featuring user roles, permissions, and activity tracking. Emphasized security and ease of use.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_10766a1f3-1764667385898.png",
      imageAlt: 'Admin dashboard interface with user management table and statistics cards displayed on monitor',
      technologies: ['React', 'TypeScript', 'React Hook Form', 'Framer Motion'],
      highlights: [
      'Implemented role-based access control with 5 permission levels',
      'Built complex form validation with real-time error handling',
      'Created audit log system tracking all user activities',
      'Designed intuitive navigation supporting 50+ admin features']

    }],

    skills: [
    {
      skill: 'React Development',
      level: 85,
      progress: 90,
      description: 'Proficient in building complex React applications with hooks, context, and modern patterns'
    },
    {
      skill: 'TypeScript',
      level: 80,
      progress: 85,
      description: 'Strong understanding of TypeScript type system, interfaces, and generics'
    },
    {
      skill: 'State Management',
      level: 75,
      progress: 80,
      description: 'Experience with Redux Toolkit, Context API, and state management best practices'
    },
    {
      skill: 'Responsive Design',
      level: 90,
      progress: 95,
      description: 'Expert in creating mobile-first, responsive layouts using Tailwind CSS and CSS Grid'
    },
    {
      skill: 'Performance Optimization',
      level: 70,
      progress: 85,
      description: 'Growing expertise in code splitting, lazy loading, and React performance patterns'
    },
    {
      skill: 'API Integration',
      level: 85,
      progress: 88,
      description: 'Proficient in REST API integration, error handling, and data fetching strategies'
    }],

    references: [
    {
      id: 'r1',
      name: 'Rajesh Kumar',
      position: 'Senior Frontend Lead',
      company: 'TechVision Solutions',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1a40ad7b3-1763293582906.png",
      avatarAlt: 'Professional headshot of Rajesh Kumar, senior developer in blue shirt smiling at camera',
      testimonial: `Vivek joined our team as a junior developer and quickly proved himself to be an exceptional learner and contributor. His ability to grasp complex concepts and translate them into clean, maintainable code is impressive. He consistently delivers high-quality work and shows great initiative in improving his skills. His positive attitude and collaborative spirit make him a valuable team member.`,
      rating: 5,
      date: 'November 2024'
    },
    {
      id: 'r2',
      name: 'Priya Sharma',
      position: 'Product Manager',
      company: 'TechVision Solutions',
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1457535f5-1763301549403.png",
      avatarAlt: 'Professional photo of Priya Sharma, product manager in formal blazer with confident expression',
      testimonial: `Working with Vivek has been a pleasure. He has excellent communication skills and always seeks to understand the business requirements before diving into implementation. His attention to detail and commitment to delivering user-friendly interfaces has significantly improved our product quality. He's proactive in suggesting improvements and takes ownership of his work.`,
      rating: 5,
      date: 'November 2024'
    }]

  }];


  const certificates: Certificate[] = [
  {
    id: 'c1',
    name: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: 'July 2024',
    credentialId: 'UC-REACT-2024-001',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c61c2065-1764661436612.png",
    imageAlt: 'Certificate of completion for React course with official Udemy branding and seal',
    skills: ['React', 'Hooks', 'Redux', 'React Router'],
    link: 'https://udemy.com/certificate/UC-REACT-2024-001'
  },
  {
    id: 'c2',
    name: 'TypeScript Fundamentals',
    issuer: 'Frontend Masters',
    date: 'June 2024',
    credentialId: 'FM-TS-2024-002',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a52ae837-1764661446437.png",
    imageAlt: 'TypeScript certification document with Frontend Masters logo and completion badge',
    skills: ['TypeScript', 'Type System', 'Generics', 'Advanced Types'],
    link: 'https://frontendmasters.com/certificate/FM-TS-2024-002'
  },
  {
    id: 'c3',
    name: 'Advanced CSS and Tailwind',
    issuer: 'Scrimba',
    date: 'May 2024',
    credentialId: 'SC-CSS-2024-003',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5ebfc80-1764676013098.png",
    imageAlt: 'CSS and Tailwind course completion certificate with colorful design elements',
    skills: ['CSS Grid', 'Flexbox', 'Tailwind CSS', 'Responsive Design'],
    link: 'https://scrimba.com/certificate/SC-CSS-2024-003'
  },
  {
    id: 'c4',
    name: 'Git & GitHub Mastery',
    issuer: 'Coursera',
    date: 'April 2024',
    credentialId: 'CR-GIT-2024-004',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1828bb976-1764663623710.png",
    imageAlt: 'Git and GitHub certification from Coursera with official university partnership seal',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
    link: 'https://coursera.org/certificate/CR-GIT-2024-004'
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    id: 't1',
    date: 'Nov 2024',
    title: 'Received Quick Learner Recognition',
    description: 'Awarded for exceptional learning speed and rapid adaptation to new technologies',
    type: 'achievement',
    icon: 'Award'
  },
  {
    id: 't2',
    date: 'Oct 2024',
    title: 'Led Customer Portal Project',
    description: 'Successfully delivered major dashboard feature with real-time data visualization',
    type: 'work',
    icon: 'Briefcase'
  },
  {
    id: 't3',
    date: 'Sep 2024',
    title: 'Completed TypeScript Certification',
    description: 'Earned advanced TypeScript certification from Frontend Masters',
    type: 'certification',
    icon: 'GraduationCap'
  },
  {
    id: 't4',
    date: 'Aug 2024',
    title: 'Joined TechVision Solutions',
    description: 'Started career as Frontend Developer, focusing on React and TypeScript',
    type: 'work',
    icon: 'Briefcase'
  },
  {
    id: 't5',
    date: 'Jul 2024',
    title: 'Completed React Bootcamp',
    description: 'Finished comprehensive React course covering hooks, Redux, and best practices',
    type: 'education',
    icon: 'BookOpen'
  },
  {
    id: 't6',
    date: 'Jun 2024',
    title: 'Started Learning Journey',
    description: 'Began intensive frontend development training with focus on modern web technologies',
    type: 'education',
    icon: 'BookOpen'
  }];


  const stats = [
  { icon: 'Calendar', label: 'Professional Experience', value: '4 Months', trend: '+100%', trendUp: true },
  { icon: 'Code', label: 'Projects Delivered', value: '3', trend: '+50%', trendUp: true },
  { icon: 'Award', label: 'Certifications', value: '4', trend: '+33%', trendUp: true },
  { icon: 'Users', label: 'Team Collaborations', value: '8+', trend: '+25%', trendUp: true }];


  return (
    <>
      <Helmet>
        <title>Professional Experience - DevPortfolio Pro</title>
        <meta
          name="description"
          content="Explore Vivek's professional journey as a Frontend Developer with 4 months of real-world experience building production-ready React applications. View detailed project contributions, skill development, and career progression." />

      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Professional Journey</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-headline">
                  Experience & Growth
                </h1>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  4 months of real-world experience building production-ready React applications, continuously learning and growing as a frontend developer
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {stats.map((stat, index) =>
                <StatsCard key={index} {...stat} />
                )}
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 font-headline">
                      Career Timeline
                    </h2>
                    <p className="text-text-secondary">
                      Explore my professional journey and key milestones
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setActiveTab('experience')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-fast ${
                      activeTab === 'experience' ? 'bg-background text-foreground shadow-sm' : 'text-text-secondary hover:text-foreground'}`
                      }>

                      Experience
                    </button>
                    <button
                      onClick={() => setActiveTab('timeline')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-fast ${
                      activeTab === 'timeline' ? 'bg-background text-foreground shadow-sm' : 'text-text-secondary hover:text-foreground'}`
                      }>

                      Timeline
                    </button>
                    <button
                      onClick={() => setActiveTab('certifications')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-fast ${
                      activeTab === 'certifications' ?
                      'bg-background text-foreground shadow-sm' : 'text-text-secondary hover:text-foreground'}`
                      }>

                      Certifications
                    </button>
                  </div>
                </div>

                {activeTab === 'experience' &&
                <div className="space-y-8">
                    {experiences.map((exp, index) =>
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                  )}

                    <div className="mt-12">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 font-headline">
                        Project Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experiences[0].projects.map((project) =>
                      <ProjectHighlight key={project.id} project={project} />
                      )}
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 font-headline">
                        Skill Development
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {experiences[0].skills.map((skill, index) =>
                      <SkillProgress key={index} skill={skill} />
                      )}
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6 font-headline">
                        Professional References
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences[0].references.map((reference) =>
                      <ReferenceCard key={reference.id} reference={reference} />
                      )}
                      </div>
                    </div>
                  </div>
                }

                {activeTab === 'timeline' &&
                <div className="max-w-3xl mx-auto">
                    <TimelineView events={timelineEvents} />
                  </div>
                }

                {activeTab === 'certifications' &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert) =>
                  <CertificateCard key={cert.id} certificate={cert} />
                  )}
                  </div>
                }
              </div>
            </div>
          </section>

          <section className="py-12 lg:py-16 bg-gradient-to-b from-transparent to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="TrendingUp" size={32} className="text-primary" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 font-headline">
                    Ready to Grow Together
                  </h2>
                  <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                    With 4 months of hands-on experience and a proven track record of rapid learning, I'm excited to contribute to innovative teams while continuing to develop my skills
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="Download"
                      iconPosition="left"
                      onClick={() => window.open('/assets/cv.pdf', '_blank')}>

                      Download CV
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Mail"
                      iconPosition="left"
                      onClick={() => window.location.href = '/contact'}>

                      Get in Touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-card border-t border-border py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-text-secondary">
                &copy; {new Date().getFullYear()} DevPortfolio Pro. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast">

                  <Icon name="Github" size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast">

                  <Icon name="Linkedin" size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-foreground transition-colors duration-fast">

                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>);

};

export default ExperiencePage;