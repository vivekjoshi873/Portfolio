import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import HeroLanding from './pages/hero-landing';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Experience from './pages/experience';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<HeroLanding />} />
          <Route path="/hero-landing" element={<HeroLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Routes;

