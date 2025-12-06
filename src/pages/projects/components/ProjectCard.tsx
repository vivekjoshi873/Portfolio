import { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success/10 text-success';
      case 'In Progress':
        return 'bg-warning/10 text-warning';
      case 'Maintained':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  return (
    <div
      className="group bg-card rounded-lg border border-border overflow-hidden transition-all duration-base hover:shadow-lg hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-base group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
        
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
            {project.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 animate-fade-in">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-fast"
                aria-label="View live demo"
              >
                <Icon name="ExternalLink" size={20} strokeWidth={2} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background text-foreground rounded-full hover:scale-110 transition-transform duration-fast"
              aria-label="View GitHub repository"
            >
              <Icon name="Github" size={20} strokeWidth={2} />
            </a>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-fast">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">{project.category}</p>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium"
              style={{ color: tech.color }}
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {project.metrics && (
          <div className="flex items-center gap-4 mb-4 text-xs text-text-secondary">
            {project.metrics.stars !== undefined && (
              <div className="flex items-center gap-1">
                <Icon name="Star" size={14} strokeWidth={2} />
                <span>{project.metrics.stars}</span>
              </div>
            )}
            {project.metrics.forks !== undefined && (
              <div className="flex items-center gap-1">
                <Icon name="GitFork" size={14} strokeWidth={2} />
                <span>{project.metrics.forks}</span>
              </div>
            )}
            {project.metrics.commits !== undefined && (
              <div className="flex items-center gap-1">
                <Icon name="GitCommit" size={14} strokeWidth={2} />
                <span>{project.metrics.commits}</span>
              </div>
            )}
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
          onClick={() => onViewDetails(project)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;