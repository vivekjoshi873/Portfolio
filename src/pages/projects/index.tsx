import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFiltersComponent from './components/ProjectFilters';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import type { Project, ProjectFilters, FilterOption } from './types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<ProjectFilters>({
    category: 'all',
    technology: 'all',
    difficulty: 'all',
    status: 'all',
    search: ''
  });

  const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with cart, checkout, and payment integration',
    longDescription: `A comprehensive e-commerce solution built with React and TypeScript, featuring a modern shopping experience with real-time inventory management, secure payment processing, and responsive design. The platform includes advanced features like product recommendations, wishlist functionality, and order tracking.\n\nThis project demonstrates proficiency in state management, API integration, and creating seamless user experiences for online retail.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
    alt: 'Modern e-commerce website interface showing product grid with shopping cart and checkout features on desktop screen',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'Redux', category: 'Frontend', icon: 'Database', color: '#764ABC' },
    { name: 'Stripe', category: 'Backend', icon: 'CreditCard', color: '#008CDD' },
    { name: 'Node.js', category: 'Backend', icon: 'Server', color: '#339933' },
    { name: 'MongoDB', category: 'Database', icon: 'Database', color: '#47A248' }],

    category: 'E-commerce',
    difficulty: 'Advanced',
    status: 'Completed',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/vivek/ecommerce-platform',
    features: [
    'User authentication with JWT tokens and secure session management',
    'Product catalog with advanced filtering, sorting, and search capabilities',
    'Shopping cart with real-time price calculations and inventory checks',
    'Secure payment processing through Stripe integration',
    'Order management system with tracking and history',
    'Admin dashboard for inventory and order management',
    'Responsive design optimized for mobile and desktop',
    'Email notifications for order confirmations and updates'],

    challenges: [
    'Implementing secure payment processing while maintaining PCI compliance',
    'Managing complex state across multiple components with cart and checkout flow',
    'Optimizing performance for large product catalogs with thousands of items'],

    solutions: [
    'Integrated Stripe with proper security measures and implemented webhook handlers for payment confirmations',
    'Utilized Redux Toolkit for centralized state management with normalized data structures',
    'Implemented virtual scrolling and lazy loading for product lists, reducing initial load time by 60%'],

    metrics: {
      linesOfCode: 15000,
      commits: 247,
      stars: 45,
      forks: 12,
      contributors: 3,
      performance: '95/100'
    },
    timeline: {
      start: 'Jan 2024',
      end: 'Mar 2024',
      duration: '3 months'
    },
    role: 'Lead Frontend Developer',
    teamSize: 3,
    highlights: [
    'Achieved 95+ Lighthouse performance score',
    'Processed over 1000 test transactions successfully',
    'Reduced cart abandonment rate by 25%',
    'Implemented comprehensive unit and integration tests']

  },
  {
    id: '2',
    title: 'Task Management Dashboard',
    description: 'Collaborative project management tool with real-time updates and team features',
    longDescription: `A powerful task management application designed for team collaboration, featuring real-time synchronization, drag-and-drop interfaces, and comprehensive project tracking. Built with modern React patterns and WebSocket technology for instant updates.\n\nThe dashboard provides intuitive project organization, team member management, and detailed analytics to help teams stay productive and organized.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3a7a3bc-1764648271797.png",
    alt: 'Professional task management dashboard showing kanban board with colorful task cards, team collaboration features, and project timeline on modern interface',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'Socket.io', category: 'Backend', icon: 'Wifi', color: '#010101' },
    { name: 'Express', category: 'Backend', icon: 'Server', color: '#000000' },
    { name: 'PostgreSQL', category: 'Database', icon: 'Database', color: '#336791' }],

    category: 'Dashboard',
    difficulty: 'Intermediate',
    status: 'Completed',
    liveUrl: 'https://example-taskmanager.com',
    githubUrl: 'https://github.com/vivek/task-dashboard',
    features: [
    'Real-time task updates using WebSocket connections',
    'Drag-and-drop kanban board for intuitive task organization',
    'Team collaboration with comments and file attachments',
    'Project timeline visualization and Gantt charts',
    'Task assignment and notification system',
    'Advanced filtering and search capabilities',
    'Custom project templates and workflows',
    'Activity tracking and audit logs'],

    challenges: [
    'Maintaining real-time synchronization across multiple users without conflicts',
    'Implementing smooth drag-and-drop functionality with complex state updates',
    'Handling offline scenarios and data synchronization'],

    solutions: [
    'Implemented optimistic updates with conflict resolution using operational transformation',
    'Used React DnD library with custom hooks for performant drag-and-drop operations',
    'Created a robust offline-first architecture with service workers and IndexedDB'],

    metrics: {
      linesOfCode: 12000,
      commits: 189,
      stars: 38,
      forks: 9,
      contributors: 2,
      performance: '92/100'
    },
    timeline: {
      start: 'Oct 2023',
      end: 'Dec 2023',
      duration: '2 months'
    },
    role: 'Full Stack Developer',
    teamSize: 2,
    highlights: [
    'Supports 50+ concurrent users with real-time updates',
    'Zero data loss with automatic conflict resolution',
    'Reduced task completion time by 30% for teams',
    'Achieved 98% uptime in production']

  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'Real-time weather application with location-based forecasts and interactive maps',
    longDescription: `A comprehensive weather application providing accurate forecasts, severe weather alerts, and interactive weather maps. Features location-based services, hourly and weekly forecasts, and beautiful data visualizations.\n\nThe app integrates multiple weather APIs to provide the most accurate and up-to-date weather information with an intuitive and visually appealing interface.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_148966ff4-1764639856231.png",
    alt: 'Modern weather forecast application interface displaying current temperature, weekly forecast cards with weather icons, and interactive weather map with cloud coverage',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'OpenWeather API', category: 'Backend', icon: 'Cloud', color: '#EB6E4B' },
    { name: 'Mapbox', category: 'Frontend', icon: 'Map', color: '#000000' },
    { name: 'Chart.js', category: 'Frontend', icon: 'BarChart', color: '#FF6384' }],

    category: 'Web Application',
    difficulty: 'Beginner',
    status: 'Completed',
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/vivek/weather-app',
    features: [
    'Current weather conditions with detailed metrics',
    'Hourly and 7-day weather forecasts',
    'Location-based weather using geolocation API',
    'Interactive weather maps with multiple layers',
    'Severe weather alerts and notifications',
    'Historical weather data visualization',
    'Multiple location management',
    'Customizable units (Celsius/Fahrenheit)'],

    challenges: [
    'Handling multiple API calls efficiently without rate limiting',
    'Creating smooth animations for weather transitions',
    'Implementing accurate location detection across different devices'],

    solutions: [
    'Implemented request caching and debouncing to optimize API usage',
    'Used Framer Motion for fluid weather condition transitions',
    'Created fallback location detection using IP geolocation when GPS is unavailable'],

    metrics: {
      linesOfCode: 5000,
      commits: 98,
      stars: 67,
      forks: 23,
      contributors: 1,
      performance: '96/100'
    },
    timeline: {
      start: 'Aug 2023',
      end: 'Sep 2023',
      duration: '1 month'
    },
    role: 'Solo Developer',
    teamSize: 1,
    highlights: [
    'Featured on Product Hunt with 200+ upvotes',
    'Serves 10,000+ daily active users',
    'Achieved 99.9% API uptime',
    'Localized in 5 languages']

  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media metrics across multiple platforms',
    longDescription: `A comprehensive social media analytics platform that aggregates data from multiple social networks, providing unified insights and performance metrics. Features real-time data synchronization, custom report generation, and trend analysis.\n\nThe dashboard helps content creators and marketers make data-driven decisions with beautiful visualizations and actionable insights.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc153126-1764661263087.png",
    alt: 'Social media analytics dashboard displaying engagement metrics, follower growth charts, post performance graphs, and platform comparison statistics on modern interface',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'D3.js', category: 'Frontend', icon: 'BarChart', color: '#F9A03C' },
    { name: 'Firebase', category: 'Backend', icon: 'Database', color: '#FFCA28' },
    { name: 'OAuth', category: 'Backend', icon: 'Lock', color: '#4285F4' }],

    category: 'Dashboard',
    difficulty: 'Advanced',
    status: 'In Progress',
    githubUrl: 'https://github.com/vivek/social-dashboard',
    features: [
    'Multi-platform integration (Twitter, Instagram, Facebook, LinkedIn)',
    'Real-time metrics tracking and updates',
    'Custom dashboard widgets and layouts',
    'Automated report generation and scheduling',
    'Competitor analysis and benchmarking',
    'Sentiment analysis for comments and mentions',
    'Content performance predictions using ML',
    'Team collaboration and role management'],

    challenges: [
    'Integrating multiple social media APIs with different rate limits and data structures',
    'Creating performant data visualizations for large datasets',
    'Implementing secure OAuth flows for multiple platforms'],

    solutions: [
    'Built a unified API layer with request queuing and intelligent rate limit management',
    'Utilized D3.js with canvas rendering for handling millions of data points efficiently',
    'Implemented a secure token management system with automatic refresh and encryption'],

    metrics: {
      linesOfCode: 18000,
      commits: 312,
      stars: 29,
      forks: 7,
      contributors: 4
    },
    timeline: {
      start: 'Feb 2024',
      end: 'Present',
      duration: '2 months (ongoing)'
    },
    role: 'Frontend Lead',
    teamSize: 4,
    highlights: [
    'Processing 1M+ social media posts daily',
    'Supports 15+ social media platforms',
    'Reduced report generation time by 70%',
    'Achieved 94% user satisfaction rating']

  },
  {
    id: '5',
    title: 'Portfolio Website Builder',
    description: 'Drag-and-drop website builder for creating professional portfolios',
    longDescription: `An intuitive website builder that empowers users to create stunning portfolio websites without coding knowledge. Features a drag-and-drop interface, customizable templates, and one-click deployment.\n\nThe platform includes professional templates, SEO optimization tools, and responsive design capabilities to help users showcase their work effectively.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_178b893e7-1764652055781.png",
    alt: 'Website builder interface showing drag-and-drop editor with portfolio template, customization panel, and live preview of professional portfolio website',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'React DnD', category: 'Frontend', icon: 'Move', color: '#61DAFB' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'Palette', color: '#06B6D4' },
    { name: 'Vercel', category: 'DevOps', icon: 'Zap', color: '#000000' }],

    category: 'Web Application',
    difficulty: 'Intermediate',
    status: 'Maintained',
    liveUrl: 'https://example-builder.com',
    githubUrl: 'https://github.com/vivek/portfolio-builder',
    features: [
    'Drag-and-drop interface for easy customization',
    '20+ professional portfolio templates',
    'Real-time preview and editing',
    'Custom domain support',
    'SEO optimization tools',
    'Image optimization and CDN integration',
    'Contact form builder with spam protection',
    'One-click deployment to multiple platforms'],

    challenges: [
    'Creating a flexible component system that supports unlimited customization',
    'Implementing undo/redo functionality for complex state changes',
    'Generating clean, production-ready code from visual editor'],

    solutions: [
    'Developed a component-based architecture with JSON schema for flexible layouts',
    'Implemented command pattern with state snapshots for reliable undo/redo',
    'Created a code generation engine that produces optimized React components'],

    metrics: {
      linesOfCode: 14000,
      commits: 234,
      stars: 156,
      forks: 45,
      contributors: 2,
      performance: '93/100'
    },
    timeline: {
      start: 'May 2023',
      end: 'Jul 2023',
      duration: '2 months'
    },
    role: 'Lead Developer',
    teamSize: 2,
    highlights: [
    '5,000+ portfolios created',
    'Average build time under 5 minutes',
    'Featured in 10+ design blogs',
    '4.8/5 user rating']

  },
  {
    id: '6',
    title: 'Recipe Finder App',
    description: 'Discover and save recipes with ingredient-based search and meal planning',
    longDescription: `A comprehensive recipe discovery platform that helps users find recipes based on available ingredients, dietary preferences, and cooking time. Features meal planning, shopping list generation, and nutritional information.\n\nThe app integrates with multiple recipe APIs and provides personalized recommendations based on user preferences and cooking history.`,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d30a8118-1764760480526.png",
    alt: 'Recipe finder application showing grid of colorful food photos, ingredient search bar, dietary filter options, and detailed recipe card with cooking instructions',
    technologies: [
    { name: 'React', category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'TypeScript', category: 'Frontend', icon: 'FileCode', color: '#3178C6' },
    { name: 'Spoonacular API', category: 'Backend', icon: 'Utensils', color: '#4CAF50' },
    { name: 'Redux', category: 'Frontend', icon: 'Database', color: '#764ABC' }],

    category: 'Mobile App',
    difficulty: 'Beginner',
    status: 'Completed',
    liveUrl: 'https://example-recipes.com',
    githubUrl: 'https://github.com/vivek/recipe-finder',
    features: [
    'Ingredient-based recipe search',
    'Dietary restriction filters (vegan, gluten-free, etc.)',
    'Nutritional information and calorie tracking',
    'Meal planning calendar',
    'Shopping list generation',
    'Recipe favorites and collections',
    'Step-by-step cooking instructions',
    'Cooking timer integration'],

    challenges: [
    'Implementing efficient search across thousands of recipes',
    'Managing complex filtering logic with multiple criteria',
    'Handling offline access to saved recipes'],

    solutions: [
    'Implemented client-side search indexing with Fuse.js for instant results',
    'Created a flexible filter system using bitwise operations for performance',
    'Used IndexedDB for offline storage with background synchronization'],

    metrics: {
      linesOfCode: 7000,
      commits: 145,
      stars: 89,
      forks: 34,
      contributors: 1,
      performance: '94/100'
    },
    timeline: {
      start: 'Nov 2023',
      end: 'Dec 2023',
      duration: '1 month'
    },
    role: 'Solo Developer',
    teamSize: 1,
    highlights: [
    '50,000+ recipes in database',
    '15,000+ monthly active users',
    'Average session time of 8 minutes',
    'Featured in App Store']

  }];


  const categoryOptions: FilterOption[] = [
  { label: 'All Categories', value: 'all', count: projects.length },
  { label: 'Web Application', value: 'Web Application', count: projects.filter((p) => p.category === 'Web Application').length },
  { label: 'E-commerce', value: 'E-commerce', count: projects.filter((p) => p.category === 'E-commerce').length },
  { label: 'Dashboard', value: 'Dashboard', count: projects.filter((p) => p.category === 'Dashboard').length },
  { label: 'Mobile App', value: 'Mobile App', count: projects.filter((p) => p.category === 'Mobile App').length }];


  const technologyOptions: FilterOption[] = [
  { label: 'All Technologies', value: 'all', count: projects.length },
  { label: 'React', value: 'React', count: projects.filter((p) => p.technologies.some((t) => t.name === 'React')).length },
  { label: 'TypeScript', value: 'TypeScript', count: projects.filter((p) => p.technologies.some((t) => t.name === 'TypeScript')).length },
  { label: 'Redux', value: 'Redux', count: projects.filter((p) => p.technologies.some((t) => t.name === 'Redux')).length },
  { label: 'Node.js', value: 'Node.js', count: projects.filter((p) => p.technologies.some((t) => t.name === 'Node.js')).length }];


  const difficultyOptions: FilterOption[] = [
  { label: 'All Levels', value: 'all', count: projects.length },
  { label: 'Beginner', value: 'Beginner', count: projects.filter((p) => p.difficulty === 'Beginner').length },
  { label: 'Intermediate', value: 'Intermediate', count: projects.filter((p) => p.difficulty === 'Intermediate').length },
  { label: 'Advanced', value: 'Advanced', count: projects.filter((p) => p.difficulty === 'Advanced').length }];


  const statusOptions: FilterOption[] = [
  { label: 'All Status', value: 'all', count: projects.length },
  { label: 'Completed', value: 'Completed', count: projects.filter((p) => p.status === 'Completed').length },
  { label: 'In Progress', value: 'In Progress', count: projects.filter((p) => p.status === 'In Progress').length },
  { label: 'Maintained', value: 'Maintained', count: projects.filter((p) => p.status === 'Maintained').length }];


  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = filters.category === 'all' || project.category === filters.category;
      const matchesTechnology = filters.technology === 'all' || project.technologies.some((t) => t.name === filters.technology);
      const matchesDifficulty = filters.difficulty === 'all' || project.difficulty === filters.difficulty;
      const matchesStatus = filters.status === 'all' || project.status === filters.status;
      const matchesSearch = filters.search === '' ||
      project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      project.description.toLowerCase().includes(filters.search.toLowerCase());

      return matchesCategory && matchesTechnology && matchesDifficulty && matchesStatus && matchesSearch;
    });
  }, [projects, filters]);

  const totalStars = projects.reduce((sum, project) => sum + (project.metrics.stars || 0), 0);
  const totalCommits = projects.reduce((sum, project) => sum + (project.metrics.commits || 0), 0);
  const completedProjects = projects.filter((p) => p.status === 'Completed').length;
  const inProgressProjects = projects.filter((p) => p.status === 'In Progress').length;

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <Helmet>
        <title>Projects - DevPortfolio Pro | Vivek's Project Showcase</title>
        <meta name="description" content="Explore Vivek's comprehensive portfolio of web development projects including e-commerce platforms, dashboards, and web applications built with React and TypeScript." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  <Icon name="FolderGit2" size={16} strokeWidth={2} />
                  <span>Project Portfolio</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  My Projects
                </h1>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  A comprehensive showcase of web applications, dashboards, and tools I've built using modern technologies. Each project demonstrates problem-solving skills, technical expertise, and attention to user experience.
                </p>
              </div>

              <ProjectStats
                totalProjects={projects.length}
                completedProjects={completedProjects}
                inProgressProjects={inProgressProjects}
                totalStars={totalStars}
                totalCommits={totalCommits} />


              <ProjectFiltersComponent
                filters={filters}
                onFilterChange={setFilters}
                categoryOptions={categoryOptions}
                technologyOptions={technologyOptions}
                difficultyOptions={difficultyOptions}
                statusOptions={statusOptions} />


              {filteredProjects.length === 0 ?
              <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={48} strokeWidth={1.5} className="text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">No Projects Found</h3>
                  <p className="text-text-secondary mb-6">
                    Try adjusting your filters or search terms
                  </p>
                </div> :

              <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-text-secondary">
                      Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> of{' '}
                      <span className="font-medium text-foreground">{projects.length}</span> projects
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) =>
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails} />

                  )}
                  </div>
                </>
              }
            </div>
          </section>

          <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-muted">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to Collaborate?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                I'm always interested in working on exciting projects and learning new technologies. Let's build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-fast">

                  <Icon name="Mail" size={20} strokeWidth={2} />
                  <span>Get in Touch</span>
                </a>
                <a
                  href="https://github.com/vivek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground border border-border rounded-lg font-medium hover:bg-muted transition-colors duration-fast">

                  <Icon name="Github" size={20} strokeWidth={2} />
                  <span>View GitHub</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal} />

      </div>
    </>);

};

export default Projects;