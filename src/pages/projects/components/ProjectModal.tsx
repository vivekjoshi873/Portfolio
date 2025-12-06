import { useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-card rounded-lg border border-border max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-fast"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="p-6">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <Image
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className={`px-3 py-1.5 rounded-md text-sm font-medium border ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Calendar" size={18} strokeWidth={2} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">Timeline</span>
              </div>
              <p className="text-sm text-foreground font-medium">{project.timeline.duration}</p>
              <p className="text-xs text-text-secondary mt-1">
                {project.timeline.start} - {project.timeline.end}
              </p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Users" size={18} strokeWidth={2} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">Team</span>
              </div>
              <p className="text-sm text-foreground font-medium">{project.teamSize} members</p>
              <p className="text-xs text-text-secondary mt-1">{project.role}</p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Tag" size={18} strokeWidth={2} className="text-primary" />
                <span className="text-sm font-medium text-text-secondary">Category</span>
              </div>
              <p className="text-sm text-foreground font-medium">{project.category}</p>
              <p className="text-xs text-text-secondary mt-1">{project.status}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Project Overview</h3>
            <p className="text-text-secondary leading-relaxed">{project.longDescription}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-muted rounded-lg flex items-center gap-2"
                >
                  <Icon name={tech.icon} size={16} strokeWidth={2} style={{ color: tech.color }} />
                  <span className="text-sm font-medium" style={{ color: tech.color }}>
                    {tech.name}
                  </span>
                  <span className="text-xs text-text-secondary">({tech.category})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={18} strokeWidth={2} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Challenges & Solutions</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-muted rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Icon name="AlertCircle" size={18} strokeWidth={2} className="text-warning mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">{challenge}</p>
                  </div>
                  <div className="flex items-start gap-2 ml-6">
                    <Icon name="Lightbulb" size={18} strokeWidth={2} className="text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">{project.solutions[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Project Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 bg-muted rounded-lg p-3">
                  <Icon name="Star" size={16} strokeWidth={2} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {project.metrics && (
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-3">Project Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.linesOfCode && (
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="Code" size={24} strokeWidth={2} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{project.metrics.linesOfCode.toLocaleString()}</p>
                    <p className="text-xs text-text-secondary">Lines of Code</p>
                  </div>
                )}
                {project.metrics.commits && (
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="GitCommit" size={24} strokeWidth={2} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{project.metrics.commits}</p>
                    <p className="text-xs text-text-secondary">Commits</p>
                  </div>
                )}
                {project.metrics.stars !== undefined && (
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="Star" size={24} strokeWidth={2} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{project.metrics.stars}</p>
                    <p className="text-xs text-text-secondary">GitHub Stars</p>
                  </div>
                )}
                {project.metrics.forks !== undefined && (
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Icon name="GitFork" size={24} strokeWidth={2} className="text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">{project.metrics.forks}</p>
                    <p className="text-xs text-text-secondary">Forks</p>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            {project.liveUrl && (
              <Button
                variant="default"
                size="default"
                fullWidth
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={18}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                View Live Demo
              </Button>
            )}
            <Button
              variant="outline"
              size="default"
              fullWidth
              iconName="Github"
              iconPosition="left"
              iconSize={18}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View Source Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;